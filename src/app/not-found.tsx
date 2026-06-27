import Link from "next/link";

import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            404
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
            Page not found
          </h1>
          <p className="mt-4 leading-7 text-slate-300">
            The page may have moved, or the placeholder link has not been filled
            in yet.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-12 items-center rounded-md border border-blue-400/70 bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            Back home
          </Link>
        </div>
      </Container>
    </section>
  );
}
