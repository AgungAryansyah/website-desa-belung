import Header from "../components/Header";
import Hero from "./(pages)/landing/Hero";
import PopUp from "./(pages)/landing/PopUp";
import ExploreSection from "./(pages)/landing/ExploreSection";
import HistoryPreviewSection from "./(pages)/landing/HistoryPreviewSection";
import NewsSection from "./(pages)/landing/NewsSection";
import SOTBSection from "./(pages)/landing/SOTBSection";
import PotentialSection from "./(pages)/landing/PotentialSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gray-100">
        <PopUp />
        <Hero />
        <ExploreSection />
        <HistoryPreviewSection />
        {/* <SOTBSection /> */}
        <PotentialSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
