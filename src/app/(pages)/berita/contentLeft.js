import HeaderBerita from "./headerBerita";
import FooterBerita from "./footerBerita";
import IsiBerita from "./isiBerita";

const ContentLeft = () => {
  return (
    <div className="md:w-3/4 w-full bg-white  px-16 py-6 rounded-xl shadow-md">
      <HeaderBerita />
      <IsiBerita />
      <FooterBerita />
    </div>
  );
};

export default ContentLeft;
