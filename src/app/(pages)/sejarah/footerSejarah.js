import Image from "next/image";

const FooterSejarah = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center text-sm text-gray-500 border-t pt-4 sm:pt-6 mt-6 sm:mt-8 gap-4 sm:gap-6">
      <div className="mb-2 sm:mb-0">Bagikan :</div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 items-center">
        <a href="#" className="transition hover:opacity-80">
          <Image
            src="/Berita/WhatsApp.svg"
            alt="WhatsApp"
            width={28}
            height={28}
            className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
          />
        </a>

        <a href="#" className="transition hover:opacity-80">
          <Image
            src="/Berita/Facebook.svg"
            alt="Facebook"
            width={28}
            height={28}
            className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
          />
        </a>

        <a href="#" className="transition hover:opacity-80">
          <Image
            src="/Berita/Instagram.svg"
            alt="Instagram"
            width={28}
            height={28}
            className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
          />
        </a>

        <a href="#" className="transition hover:opacity-80">
          <Image
            src="/Berita/Tiktok.svg"
            alt="Tiktok"
            width={28}
            height={28}
            className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterSejarah;