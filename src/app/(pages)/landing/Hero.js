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
            Desa Belung adalah salah satu desa yang terletak di kaki Gunung
            Semeru, Kecamatan Poncokusumo, Kabupaten Malang. Dikenal dengan
            udara yang sejuk dan lahan pertanian yang subur, desa ini menjadi
            penghasil berbagai komoditas sayuran unggulan seperti kubis, wortel,
            dan daun bawang. Melalui website ini, kami mempersembahkan informasi
            seputar desa kepada masyarakat luas — mulai dari sejarah, potensi
            lokal, kegiatan masyarakat, hingga program pengembangan desa. Kami
            mengundang Anda untuk menjelajahi keindahan alam, budaya, dan
            semangat gotong royong yang menjadi ciri khas Desa Belung.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
