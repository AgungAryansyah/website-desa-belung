import { getNavigationItems } from '../lib/pages';

const Header = () => {
  const navigationItems = getNavigationItems();

  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <div className="w-10 h-10 bg-gray-300 rounded"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold">Desa Belung</h1>
              <p className="text-sm opacity-90">Kabupaten Malang</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a 
                key={item.id}
                href={item.path} 
                className="hover:text-green-200 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
