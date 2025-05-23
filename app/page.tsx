import { Hero } from "@/app/components/Hero";
import { CategoryHighlights } from "@/app/components/CategoryHighlights";
import { NewArrivals } from "@/app/components/NewArrivals";
import { BrandStory } from "@/app/components/BrandStory";
import { Newsletter } from "@/app/components/Newsletter";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryHighlights />
      <NewArrivals />
      <BrandStory />
      <Newsletter />
      <Footer />
    </main>
  );
}
