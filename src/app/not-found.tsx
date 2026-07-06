import Link from "next/link";

import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.3em] text-blue-300">
            <span
              aria-hidden="true"
              className="h-px w-6 bg-gradient-to-r from-blue-400 to-transparent"
            />
            404
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
            Page not found
          </h1>
          <p className="mt-4 leading-7 text-slate-300">
            The page may have moved, or the address may not match a current
            portfolio route.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-12 items-center rounded-md border border-blue-400/60 bg-gradient-to-b from-blue-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_8px_28px_rgba(37,99,235,0.32)] transition hover:from-blue-400 hover:to-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            Back home
          </Link>
        </div>
      </Container>
    </section>
  );
}
