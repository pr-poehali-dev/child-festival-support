import Header from '@/components/Header';
import HeroStats from '@/components/HeroStats';
import AboutHelp from '@/components/AboutHelp';
import VolunteersSection from '@/components/VolunteersSection';
import StoriesNewsContact from '@/components/StoriesNewsContact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroStats />
        <AboutHelp />
        <VolunteersSection />
        <StoriesNewsContact />
      </main>
      <Footer />
    </div>
  );
}
