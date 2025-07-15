const SOTBSection = () => {
  const teamMembers = [
    { name: 'Ketua TEKKOM', position: 'Ketua', image: '/team-1-dummy.jpg' },
    { name: 'Ketua TEKKOM', position: 'Ketua', image: '/team-2-dummy.jpg' },
    { name: 'Ketua TEKKOM', position: 'Ketua', image: '/team-3-dummy.jpg' },
    { name: 'Ketua TEKKOM', position: 'Ketua', image: '/team-4-dummy.jpg' },
    { name: 'Ketua TEKKOM', position: 'Ketua', image: '/team-5-dummy.jpg' },
    { name: 'Ketua TEKKOM', position: 'Ketua', image: '/team-6-dummy.jpg' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">SOTB</h2>
          <p className="text-gray-600 text-lg">Struktur Pakdhe Belungss</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gray-300"></div>
              </div>
              <div className="bg-green-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                {member.name}
              </div>
              <p className="text-gray-600 text-sm mt-1">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SOTBSection;
