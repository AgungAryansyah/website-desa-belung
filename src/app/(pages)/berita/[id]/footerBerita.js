import Image from "next/image";

const FooterBerita = ({ berita }) => {
  const handleShare = (platform) => {
    if (!berita) return;
    
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(berita.title);
    const text = encodeURIComponent(berita.excerpt || berita.title);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${title}%20${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center text-sm text-gray-500 border-t pt-4 sm:pt-6 mt-6 sm:mt-8 gap-4 sm:gap-6">
      <div className="mb-2 sm:mb-0">Bagikan :</div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 items-center">
        <button 
          onClick={() => handleShare('whatsapp')}
          className="transition hover:opacity-80"
        >
          <Image
            src="/Berita/WhatsApp.svg"
            alt="WhatsApp"
            width={24}
            height={24}
            className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
          />
        </button>

        <button 
          onClick={() => handleShare('facebook')}
          className="transition hover:opacity-80"
        >
          <Image
            src="/Berita/Facebook.svg"
            alt="Facebook"
            width={24}
            height={24}
            className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
          />
        </button>

        <button 
          onClick={() => handleShare('twitter')}
          className="transition hover:opacity-80"
        >
          <Image
            src="/Berita/Instagram.svg"
            alt="Instagram"
            width={24}
            height={24}
            className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
          />
        </button>
        
        <a href="#" className="transition hover:opacity-80">
          <Image
            src="/Berita/Tiktok.svg"
            alt="Tiktok"
            width={24}
            height={24}
            className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterBerita;
