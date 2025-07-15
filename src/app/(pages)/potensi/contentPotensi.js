import HeaderPotensi from "./headerPotensi";
import FooterPotensi from "./footerPotensi";
import IsiPotensi from "./isiPotensi";

const ContentPotensi = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-8 sm:py-10 md:px-16 md:py-12">
      <div className="bg-white px-4 sm:px-8 md:px-16 py-4 sm:py-5 md:py-6 rounded-xl shadow-md">
        <HeaderPotensi />
        <IsiPotensi />
        <FooterPotensi />
      </div>
    </div>
  );
};

export default ContentPotensi;
