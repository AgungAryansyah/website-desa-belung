const PotentialSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[20px] shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content - Text */}
            <div className="lg:w-2/3 p-8 lg:p-12 flex items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                  Potensi Desa Belung
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Quisque vehicula erat molestie convallis sollicitudin. Fusce 
                  ultrices felis lacus, vel scelerisque magna efficitur ut. Nam 
                  egestas tempus odio, at pellentesque nibh placerat ut.
                </p>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <a 
                    href="/potensi"
                    className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                  >
                    Pelajari lebih Lanjut
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="lg:w-1/3">
              <div className="h-64 lg:h-full bg-gray-300 relative">
                {/* Placeholder for potential image */}
                <div className="absolute inset-0 bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PotentialSection;
