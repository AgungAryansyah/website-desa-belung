import ContentLeft from "./contentLeft";
import ContentRight from "./contentRight";

const ContentBerita = ({ berita }) => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-6">
      <ContentLeft berita={berita} />
      <ContentRight />
    </div>
  );
};

export default ContentBerita;
