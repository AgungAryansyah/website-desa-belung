import ReactMarkdown from "react-markdown";
import PageTemplate from "../../../templates/PageTemplate";
import { PAGES } from "../../../lib/pages";

const beritaMarkdown = `
![Foto MMD](/Berita/k39.svg)

Lorem ipsum **dolor sit amet**, *consectetur* adipiscing elit.  
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam ligula, semper vel magna quis, mollis mattis est. Vivamus vitae mi cursus, malesuada nisi vel, ultricies nisi. Suspendisse vehicula velit quis lectus molestie faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam ligula, semper vel magna quis, mollis mattis est. Vivamus vitae mi cursus, malesuada nisi vel, ultricies nisi. Suspendisse vehicula velit quis lectus molestie faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam ligula, semper vel magna quis, mollis mattis est. Vivamus vitae mi cursus, malesuada nisi vel, ultricies nisi. Suspendisse vehicula velit quis lectus molestie faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam ligula, semper vel magna quis, mollis mattis est. Vivamus vitae mi cursus, malesuada nisi vel, ultricies nisi. Suspendisse vehicula velit quis lectus molestie faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam ligula, semper vel magna quis, mollis mattis est. Vivamus vitae mi cursus, malesuada nisi vel, ultricies nisi. Suspendisse vehicula velit quis lectus molestie faucibus.

![Foto MMD](/Berita/k39.svg)

## Kegiatan 

- Sosialisasi ke warga  
- Edukasi pertanian  
- Pelatihan digital  

[Cek desain di Figma](https://www.figma.com/design/kqHIAUMNk6lUc08lxGNyv0/Website-pakde-belungs?node-id=257-476&t=DUxPbhIUO5fesadv-0)

## Penutup

Terima kasih atas sambutan hangat dari warga Desa Belung 🙏
`;

export default function BeritaPage() {
  return (
    <PageTemplate className="bg-gray-100 w-full">
      <div className="container mx-au to px-16 py-16 md:flex-row ">
        {/* === KONTEN BERITA (2/3) === */}
        <div className="md:w-full w-full bg-white  px-16 py-6 rounded-xl shadow-md">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-2">
            <span className="inline-flex items-center gap-1">
              🏠 <span>/ Potensi Desa Belung</span>
            </span>
          </div>

          {/* Judul & Info */}
          <h1 className="text-4xl font-bold text-gray-800">
            MMD Filkom UB di Desa Belung
          </h1>
          <div className="flex items-center text-sm text-gray-500 mt-1 mb-4 gap-4">
            <span>🗓 5 Juli 2025</span>
            <span className="ml-auto">👁 Dilihat 100 kali</span>
          </div>

          {/* Markdown Content */}
          <div className="prose prose-lg max-w-none text-gray-800 [&_img]:rounded-lg [&_img]:shadow-md">
            <ReactMarkdown>{beritaMarkdown}</ReactMarkdown>
          </div>

          {/* Share */}
          <div className="flex items-center text-sm text-gray-500 border-t pt-4 mt-6 gap-4">
            <div className="">Bagikan :</div>
            <div className="flex gap-4 items-center">
              <a href="#" className="transition hover:opacity-80">
                <img
                  src="Berita/whatsApp.svg"
                  alt="WhatsApp"
                  className="w-6 h-6 object-contain"
                />
              </a>

              <a href="#" className="transition hover:opacity-80">
                <img
                  src="Berita/Facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6 object-contain"
                />
              </a>

              <a href="#" className="transition hover:opacity-80">
                <img
                  src="Berita/Instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6 object-contain"
                />
              </a>
              <a href="#" className="transition hover:opacity-80">
                <img
                  src="Berita/Tiktok.svg"
                  alt="Tiktok"
                  className="w-6 h-6 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
