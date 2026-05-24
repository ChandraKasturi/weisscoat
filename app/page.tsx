export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container py-24">
        <p className="font-display text-sm uppercase tracking-[0.2em] text-primary">
          Weisscoat
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight">
          Foundation ready.
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Brand tokens, fonts, and component scaffolding are wired up. Sections
          can now be assembled in <code>components/sections</code>.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="h-10 w-10 rounded-md bg-brand-olive" />
          <span className="h-10 w-10 rounded-md bg-brand-gold" />
          <span className="h-10 w-10 rounded-md border border-border bg-brand-cream" />
          <span className="h-10 w-10 rounded-md bg-brand-charcoal" />
        </div>
      </div>
    </main>
  );
}
