"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const heroImages = [
  {
    id: 1,
    src: "/landing/images/background_3.png",
    alt: "Pemandangan Desa Belung 1",
  },
  {
    id: 2,
    src: "/landing/images/background_2.png", // Ganti dengan path gambar Anda yang lain
    alt: "Pemandangan Desa Belung 2",
  },
  {
    id: 3,
    src: "/landing/images/background_1.png", // Ganti dengan path gambar Anda yang lain
    alt: "Pemandangan Desa Belung 3",
  },
];

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Swiper
          spaceBetween={0} // Tidak ada jarak antar slide
          centeredSlides={true}
          autoplay={{
            delay: 3000, // Geser setiap 5 detik
            disableOnInteraction: false, // Lanjutkan autoplay bahkan setelah interaksi
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false} // Tampilkan tombol navigasi
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full" // Swiper memenuhi div parent
        >
          {heroImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1920}
                  height={1080}
                  priority // Tetap berikan priority untuk gambar pertama jika di-render di awal
                  className="object-cover w-full h-full"
                  quality={100}
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                />
                {/* Overlay gradient untuk readability teks */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
