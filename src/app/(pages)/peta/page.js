import PageTemplate from '../../../templates/PageTemplate';
import { PAGES } from '../../../lib/pages';
import PetaGreyBar from '../../../components/componentPeta/PetaGreyBar';
import PetaMainContent from '../../../components/componentPeta/PetaMainContent';

export default function PetaPage() {
  const pageConfig = PAGES.PETA;

  return (
    <PageTemplate >
      <div style={{ background: 'rgba(248, 254, 247, 1)' }} className="min-h-screen w-full">
        <div className="container mx-auto px-4 py-16">
          {/* Main content area will be added here later */}
          <PetaGreyBar />
          <PetaMainContent />
        </div>
      </div>
    </PageTemplate>
  );
}
