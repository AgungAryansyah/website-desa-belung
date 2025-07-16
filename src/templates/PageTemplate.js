import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Base Page Template
 * Consistent layout wrapper for all pages
 */
export default function PageTemplate({
  children,
  title,
  description,
  className = "",
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className={"bg-gray-100"}>
        {/* Page Header */}

        {/* Page Content */}
        <div className="flex-1">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
