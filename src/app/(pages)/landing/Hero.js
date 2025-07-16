import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/landing/images/background_3.png"
            alt="Desa Belung"
            width={1920}
            height={1080}
            priority
            className="object-cover w-full h-full"
            quality={100}
            style={{
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
        </div>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
