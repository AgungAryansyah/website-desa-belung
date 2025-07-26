import Image from "next/image";
import DOMPurify from 'dompurify';

const IsiSejarah = ({ history }) => {
  if (!history) {
    return (
      <div className="prose prose-lg max-w-none text-gray-800">
        <p>Loading content...</p>
      </div>
    );
  }

  // Sanitize HTML content for security
  const sanitizedContent = history.content ? DOMPurify.sanitize(history.content) : '';

  return (
    <div className="prose prose-lg max-w-none text-gray-800">
      {/* Main Image */}
      {history.cover && (
        <div className="mb-6">
          <Image
            src={history.cover}
            alt={"Sejarah Desa Belung"}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-md"
            unoptimized
          />
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

export default IsiSejarah;