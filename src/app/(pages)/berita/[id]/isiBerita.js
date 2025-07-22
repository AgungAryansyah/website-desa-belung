import Image from "next/image";
import DOMPurify from 'dompurify';

const IsiBerita = ({ berita }) => {
  if (!berita) {
    return (
      <div className="prose prose-lg max-w-none text-gray-800">
        <p>Loading content...</p>
      </div>
    );
  }

  // Sanitize HTML content for security
  const sanitizedContent = berita.content ? DOMPurify.sanitize(berita.content) : '';

  return (
    <div className="prose prose-lg max-w-none text-gray-800">
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

      {/* Content as Sanitized HTML */}
      {sanitizedContent ? (
        <div 
          className="content-html"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
      ) : (
        <div className="text-gray-500">
          <p>Content not available for this article.</p>
        </div>
      )}
    </div>
  );
};

export default IsiBerita;