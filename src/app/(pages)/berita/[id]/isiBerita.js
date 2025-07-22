import ReactMarkdown from "react-markdown";
import Image from "next/image";

const IsiBerita = ({ berita }) => {
  if (!berita) {
    return (
      <div className="prose prose-lg max-w-none text-gray-800">
        <p>Loading content...</p>
      </div>
    );
  }

  return (
    <div className="prose prose-lg max-w-none text-gray-800 [&_img]:rounded-lg [&_img]:shadow-md">
      {/* Main Image */}
      {berita.cover && (
        <div className="mb-6">
          <Image
            src={berita.cover}
            alt={berita.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-md"
            unoptimized
          />
        </div>
      )}
      
      {/* Excerpt */}
      {berita.excerpt && (
        <div className="text-lg text-gray-600 italic mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-green-600">
          {berita.excerpt}
        </div>
      )}

      {/* Content */}
      {berita.content ? (
        <ReactMarkdown>{berita.content}</ReactMarkdown>
      ) : (
        <div className="text-gray-500">
          <p>Content not available for this article.</p>
        </div>
      )}
    </div>
  );
};

export default IsiBerita;
