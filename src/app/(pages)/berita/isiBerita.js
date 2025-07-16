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

const IsiBerita = () => {
  return (
    <div className="prose prose-lg max-w-none text-gray-800 [&_img]:rounded-lg [&_img]:shadow-md">
      <ReactMarkdown>{beritaMarkdown}</ReactMarkdown>
    </div>
  );
};
export default IsiBerita;
