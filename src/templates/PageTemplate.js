import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Base Page Template
 * Consistent layout wrapper for all pages
 */
export default function PageTemplate({ 
  children, 
  title, 
  description,
  className = ""
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className={`flex-1 pt-20 ${className}`}>
        {/* Page Header */}
        {title && (
          <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
              {description && (
                <p className="text-gray-600 text-lg">{description}</p>
              )}
            </div>
          </div>
        )}
        
        {/* Page Content */}
        <div className="flex-1">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
