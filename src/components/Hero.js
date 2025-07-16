const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gray-400"></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Selamat Datang di
            <br />
            Desa Belung
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vehicula erat molestie convallis sollicitudin. Fusce ultrices felis
            lacus, vel scelerisque magna efficitur a. Nam egestas tempus odio,
            at pellentesque nibh placerat ut. Suspendisse a feugiat tortor.
            Vestibulum tempus porta metus, eget faucibus ante sodales at. Cras
            lobortis vitae diam id maximus. Sed mauris erat, aliquet non
            fermentum ut, mollis id enim. Integer vel neque enim.
          </p>

          {/* Navigation arrows */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
