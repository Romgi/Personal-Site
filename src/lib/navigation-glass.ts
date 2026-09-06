"use client";

import { useSyncExternalStore } from "react";

const storageKey = "portfolio.navigation-glass.v1";
const changeEvent = "navigation-glass-change";
let currentPreference = true;
let storageAvailable = true;

function readPreference() {
  if (!storageAvailable) return currentPreference;
  try {
    currentPreference = localStorage.getItem(storageKey) !== "off";
  } catch {
    storageAvailable = false;
    // The toggle still works in memory when browser storage is unavailable.
  }
  return currentPreference;
}

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) callback();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(changeEvent, callback);
  };
}

export function setNavigationGlass(enabled: boolean) {
  currentPreference = enabled;
  try {
    localStorage.setItem(storageKey, enabled ? "on" : "off");
  } catch {
    storageAvailable = false;
    // Storage can be blocked in private or restricted browsing contexts.
  }
  window.dispatchEvent(new Event(changeEvent));
}

export function useNavigationGlass() {
  return useSyncExternalStore(subscribe, readPreference, () => true);
}
