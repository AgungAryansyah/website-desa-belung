import PageTemplate from '../../../templates/PageTemplate';
import { PAGES } from '../../../lib/pages';

export default function ProfilPage() {
  const pageConfig = PAGES.PROFIL;

  return (
    <PageTemplate 
      title={pageConfig.title}
      description={pageConfig.description}
    >
      <div className="container mx-auto px-4 py-16">
        {/* Page Content - To be implemented */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Profil Desa Belung
          </h2>
          <p className="text-gray-600">
            Konten halaman profil akan ditambahkan di sini.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
