import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh]">
        <div className="mx-auto flex min-h-[60vh] max-w-[1280px] items-center justify-center px-6 md:px-12">
          <p className="text-sm text-brand-charcoal/60">
            Sections coming next.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
