import HeaderSejarah from "./headerSejarah";
import FooterSejarah from "./footerSejarah";
import IsiSejarah from "./isiSejarah";

const ContentSejarah = ({ history, error }) => {
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 sm:px-8 sm:py-10 md:px-16 md:py-12">
        <div className="bg-white px-4 sm:px-8 md:px-16 py-4 sm:py-5 md:py-6 rounded-xl shadow-md">
          <div className="text-center py-8">
            <p className="text-red-500">Error loading history: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!history) {
    return (
      <div className="container mx-auto px-4 py-8 sm:px-8 sm:py-10 md:px-16 md:py-12">
        <div className="bg-white px-4 sm:px-8 md:px-16 py-4 sm:py-5 md:py-6 rounded-xl shadow-md">
          <div className="text-center py-8">
            <p className="text-gray-500">Loading history...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-8 sm:py-10 md:px-16 md:py-12">
      <div className="bg-white px-4 sm:px-8 md:px-16 py-4 sm:py-5 md:py-6 rounded-xl shadow-md">
        <HeaderSejarah history={history} />
        <IsiSejarah history={history} />
        <FooterSejarah />
      </div>
    </div>
  );
};

export default ContentSejarah;
