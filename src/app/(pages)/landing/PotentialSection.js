const PotentialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gray-100 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content - Text */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Potensi Desa Belung
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque vehicula erat molestie convallis sollicitudin. Fusce 
                ultrices felis lacus, vel scelerisque magna efficitur ut. Nam 
                egestas tempus odio, at pellentesque nibh placerat ut.
              </p>
              
              <a 
                href="#"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <span className="mr-2">📖</span>
                Pelajari lebih Lanjut
              </a>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PotentialSection;
