import Image from "next/image";

const FooterSejarah = () => {
  // Fungsi untuk share ke WhatsApp
  const shareToWhatsApp = () => {
    const url = window.location.href;
    const text = "Lihat artikel menarik ini!";
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      text + " " + url
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Fungsi untuk share ke Facebook
  const shareToFacebook = () => {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl, "_blank");
  };

  // Fungsi untuk share ke Twitter
  const shareToTwitter = () => {
    const url = window.location.href;
    const text = "Lihat artikel menarik ini!";
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center text-sm text-gray-500 border-t pt-4 sm:pt-6 mt-6 sm:mt-8 gap-4 sm:gap-6">
      <div className="mb-2 sm:mb-0">Bagikan :</div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 items-center">
        {/* WhatsApp */}
        <button
          onClick={shareToWhatsApp}
          className="transition hover:opacity-80 focus:outline-none"
          title="Share ke WhatsApp"
        >
          <Image
            src="/Berita/WhatsApp.svg"
            alt="WhatsApp"
            width={28}
            height={28}
            className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
          />
        </button>

        {/* Facebook */}
        <button
          onClick={shareToFacebook}
          className="transition hover:opacity-80 focus:outline-none"
          title="Share ke Facebook"
        >
          <Image
            src="/Berita/Facebook.svg"
            alt="Facebook"
            width={28}
            height={28}
            className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
          />
        </button>

        {/* Twitter */}
        <button
          onClick={shareToTwitter}
          className="transition hover:opacity-80 focus:outline-none"
          title="Share ke Twitter"
        >
          <Image
            src="/Berita/twitter.png"
            alt="Twitter"
            width={20}
            height={20}
            className="w-6 h-6 sm:w-6 sm:h-6 object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default FooterSejarah;
