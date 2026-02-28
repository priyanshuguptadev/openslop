import { Header } from "@/components/layout/header";
import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Faq } from "@/components/home/faq";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-black/10">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
