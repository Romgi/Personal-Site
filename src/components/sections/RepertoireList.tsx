import type { RepertoireItem } from "@/data/music";
export function RepertoireList({ items }: { items: RepertoireItem[] }) {
  return (
    <div className="repertoire-table-wrap">
      <table className="repertoire-table">
        <caption className="sr-only">
          Jonathan Graydon’s trumpet repertoire
        </caption>
        <thead>
          <tr>
            <th scope="col">Composer</th>
            <th scope="col">Piece</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td data-label="Composer">{item.composer}</td>
              <th scope="row" data-label="Piece">
                {item.title}
              </th>
              <td data-label="Description">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
