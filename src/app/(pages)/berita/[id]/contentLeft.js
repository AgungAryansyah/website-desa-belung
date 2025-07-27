import HeaderBerita from "./headerBerita";
import FooterBerita from "./footerBerita";
import IsiBerita from "./isiBerita";

const ContentLeft = ({ berita }) => {
  return (
    <div className="md:w-3/4 w-full bg-white  px-16 py-6 rounded-xl shadow-md">
      <HeaderBerita berita={berita} />
      <IsiBerita berita={berita} />
      <FooterBerita berita={berita} />
    </div>
  );
};

export default ContentLeft;
