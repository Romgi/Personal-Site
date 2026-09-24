import {
  Box3,
  Group,
  Mesh,
  MeshStandardMaterial,
  Vector3,
  type BufferGeometry,
  type Material,
} from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export type TrumpetModel = {
  group: Group;
  /** Center of the bell's open rim, in the returned group's local coordinates. */
  bellCenter: Vector3;
  /** Outer rim radius in the same normalized units. */
  bellRadius: number;
};

/**
 * Kagelok's CC BY 4.0 trumpet with its original topology and vertex normals.
 * See public/models/trumpet/README.md for the asset's license and provenance.
 *
 * Centered, Y-up, and exactly 8 units long: mouthpiece at -X, bell at +X,
 * valve buttons toward +Y. Height is about 2.456 and depth about 1.855 units.
 */
export async function loadTrumpetModel(): Promise<TrumpetModel> {
  const loaded = await new GLTFLoader().loadAsync("/models/trumpet/scene.gltf");
  const source = loaded.scene.getObjectByName("Sketchfab_model");

  if (!source) {
    disposeTrumpetModel(loaded.scene);
    throw new Error("The trumpet asset is missing its expected model root.");
  }

  // Remove the author's presentation pose, then convert the geometry from Z-up.
  source.position.set(0, 0, 0);
  source.rotation.set(-Math.PI / 2, 0, 0);
  source.scale.set(1, 1, 1);
  source.matrixAutoUpdate = true;
  source.updateMatrix();

  const group = new Group();
  group.name = "Trumpet by Kagelok";
  const normalized = new Group();
  normalized.name = "Normalized trumpet geometry";
  normalized.add(source);
  group.add(normalized);
  group.updateMatrixWorld(true);

  const bounds = new Box3().setFromObject(group, true);
  const size = bounds.getSize(new Vector3());
  const center = bounds.getCenter(new Vector3());

  if (!Number.isFinite(size.x) || size.x <= 0) {
    disposeTrumpetModel(group);
    throw new Error("The trumpet asset has invalid geometry bounds.");
  }

  // The open bell rim is the ring at the mesh's furthest +X plane.
  // Read its actual vertices so the camera can pass through its true opening.
  const rimBounds = new Box3();
  const point = new Vector3();
  const rimTolerance = size.x * 0.0001;
  const materials = new Set<Material>();

  group.traverse((object) => {
    if (!(object instanceof Mesh)) return;

    const positions = object.geometry.getAttribute("position");
    for (let index = 0; index < positions.count; index++) {
      point
        .fromBufferAttribute(positions, index)
        .applyMatrix4(object.matrixWorld);
      if (point.x >= bounds.max.x - rimTolerance) {
        rimBounds.expandByPoint(point);
      }
    }

    const list = Array.isArray(object.material)
      ? object.material
      : [object.material];
    list.forEach((material) => materials.add(material));
  });

  const scale = 8 / size.x;
  const bellCenter = rimBounds
    .getCenter(new Vector3())
    .sub(center)
    .multiplyScalar(scale);
  const rimSize = rimBounds.getSize(new Vector3());
  const bellRadius = ((rimSize.y + rimSize.z) / 4) * scale;

  // Retain the author's gold, silver, pearl and black assignments. Modest
  // roughness gives the metals readable room reflections at screen scale.
  for (const material of materials) {
    if (!(material instanceof MeshStandardMaterial)) continue;

    switch (material.name) {
      case "Gold":
        material.roughness = 0.22;
        break;
      case "Silver":
        material.roughness = 0.2;
        break;
      case "White":
        material.roughness = 0.24;
        break;
      case "Black":
        material.roughness = 0.8;
        break;
    }
    material.needsUpdate = true;
  }

  source.position.sub(center);
  normalized.scale.setScalar(scale);
  group.userData.attribution = {
    title: "Trumpet",
    author: "Kagelok",
    source:
      "https://sketchfab.com/3d-models/trumpet-1dc9efd37bf14d1b9d1e3de0ca90435c",
    license: "https://creativecommons.org/licenses/by/4.0/",
    changes: "Reoriented, uniformly scaled and adjusted material roughness.",
  };
  group.userData.dimensions = size.multiplyScalar(scale).toArray();
  group.updateMatrixWorld(true);

  return { group, bellCenter, bellRadius };
}

/** Dispose the model's shared geometry/materials, leaving scene-owned lighting. */
export function disposeTrumpetModel(group: Group): void {
  const geometries = new Set<BufferGeometry>();
  const materials = new Set<Material>();

  group.traverse((object) => {
    if (!(object instanceof Mesh)) return;
    geometries.add(object.geometry);
    const list = Array.isArray(object.material)
      ? object.material
      : [object.material];
    list.forEach((material) => materials.add(material));
  });

  geometries.forEach((geometry) => geometry.dispose());
  materials.forEach((material) => material.dispose());
}
