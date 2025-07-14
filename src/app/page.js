import Header from '../components/Header';
import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import HistorySection from '../components/HistorySection';
import SOTBSection from '../components/SOTBSection';
import PotentialSection from '../components/PotentialSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <NewsSection />
        <HistorySection />
        <SOTBSection />
        <PotentialSection />
      </main>
      <Footer />
    </div>
  );
}
