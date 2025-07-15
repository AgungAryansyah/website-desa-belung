import Image from 'next/image';

const SOTBSection = () => {
  const teamMembers = [
    { name: 'Ketua TEKKOM', position: 'Ketua', image: '/landing/images/fito.png' },
    { name: 'Ketua TEKKOM', position: 'Ketua', image: '/landing/images/fito.png' },
    { name: 'Ketua TEKKOM', position: 'Ketua', image: '/landing/images/fito.png' },
    { name: 'Ketua TEKKOM', position: 'Ketua', image: '/landing/images/fito.png' },
    { name: 'Ketua TEKKOM', position: 'Ketua', image: '/landing/images/fito.png' },
    { name: 'Ketua TEKKOM', position: 'Ketua', image: '/landing/images/fito.png' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">SOTB</h2>
          <p className="text-gray-600 text-lg">Struktur Pakdhe Belungss</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#B1E0A7] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full aspect-square">
                {/* Image component */}
                <Image 
                  src={member.image} 
                  alt={`Photo of ${member.name}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <div className="text-black px-3 py-1 rounded-lg text-xl font-bold mb-1">
                  {member.name}
                </div>
                <p className="text-black text-m">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SOTBSection;
