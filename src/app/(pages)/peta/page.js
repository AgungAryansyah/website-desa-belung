import PageTemplate from '../../../templates/PageTemplate';
import { PAGES } from '../../../lib/pages';
import PetaMainContent from '../../../components/componentPeta/PetaMainContent';

export default function PetaPage() {
  const pageConfig = PAGES.PETA;

  return (
    <PageTemplate >
      <div style={{ background: '#F5F7FA' }} className="min-h-screen w-full">
        <div className="container mx-auto px-4 py-16">
          {/* Main content area will be added here later */}
          <PetaMainContent />
        </div>
      </div>
    </PageTemplate>
  );
}
