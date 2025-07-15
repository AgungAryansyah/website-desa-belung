import Image from 'next/image';

const ExploreCard = ({ id, title, image, link }) => {
  return (
    <a
      href={link}
      className="group relative overflow-hidden rounded-[20px] aspect-[2/1] hover:transform hover:scale-105 transition-all duration-300"
    >
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gray-300"></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start pl-4">
        <div className="text-left text-white">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <div className="w-8 h-8 bg-transparent rounded-full flex items-center justify-start">
            <Image 
              src="/Landing/explore_arrow.svg" 
              alt="Explore arrow" 
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default ExploreCard;
