import { ButtonLink } from "@/components/ui/ButtonLink";
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
            There is no page at this address. Check the link or return to the
            home page to browse Jonathan&apos;s work.
          </p>
          <ButtonLink href="/" variant="primary" className="mt-8">
            Go to home page
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
