"use client";

import { Search, X } from "lucide-react";
import { useId, useRef, useState } from "react";

import type { RepertoireItem } from "@/data/music";

import "./repertoire.css";

export function RepertoireList({ items }: { items: RepertoireItem[] }) {
  const [query, setQuery] = useState("");
  const searchId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const searchTerm = query.trim().toLocaleLowerCase();
  const words = searchTerm.split(/\s+/).filter(Boolean);
  const filtered = items.filter((item) => {
    const text =
      `${item.composer} ${item.title} ${item.description}`.toLocaleLowerCase();
    return words.every((word) => text.includes(word));
  });

  function clearSearch() {
    setQuery("");
    inputRef.current?.focus();
  }

  return (
    <div className="repertoire-browser">
      <div className="repertoire-toolbar">
        <search className="repertoire-search" aria-label="Trumpet repertoire">
          <label htmlFor={searchId}>Search repertoire</label>
          <div className="repertoire-search-field">
            <Search size={18} aria-hidden="true" />
            <input
              ref={inputRef}
              id={searchId}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find a composer or piece"
              aria-controls={`${searchId}-results`}
            />
            {query ? (
              <button
                type="button"
                onClick={clearSearch}
                aria-label="Clear repertoire search"
              >
                <X size={18} aria-hidden="true" />
              </button>
            ) : null}
          </div>
        </search>
        <p
          className="repertoire-count"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <span key={searchTerm} className="repertoire-count-value">
            <strong>{filtered.length}</strong>
            {searchTerm ? ` of ${items.length}` : ""}{" "}
            {filtered.length === 1 && !searchTerm ? "piece" : "pieces"}
          </span>
        </p>
      </div>

      <div id={`${searchId}-results`} className="repertoire-table-wrap">
        {filtered.length ? (
          <table className="repertoire-table" role="table">
            <caption className="sr-only">
              Jonathan Graydon&apos;s trumpet repertoire
            </caption>
            <thead role="rowgroup">
              <tr role="row">
                <th scope="col" role="columnheader">
                  Composer
                </th>
                <th scope="col" role="columnheader">
                  Piece
                </th>
                <th scope="col" role="columnheader">
                  About the piece
                </th>
              </tr>
            </thead>
            <tbody role="rowgroup">
              {filtered.map((item) => (
                <tr key={item.id} role="row">
                  <td data-label="Composer" role="cell">
                    {item.composer}
                  </td>
                  <th scope="row" data-label="Piece" role="rowheader">
                    {item.title}
                  </th>
                  <td data-label="About the piece" role="cell">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="repertoire-empty">
            <h3>No matching pieces</h3>
            <p>
              No composer or piece matches &ldquo;{query.trim()}&rdquo;. Try
              another name or browse the full repertoire.
            </p>
            <button type="button" onClick={clearSearch}>
              Show all pieces
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
