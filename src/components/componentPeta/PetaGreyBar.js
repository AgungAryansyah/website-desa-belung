export default function PetaGreyBar() {
  return (
    <div className="bg-gray-100 px-6 py-3 rounded-t-lg flex items-center justify-between text-sm mb-6">
      <div className="flex items-center text-gray-600">
        <img src="/home.svg" alt="Home" className="w-4 h-4 mr-1" />
        <span className="mx-2">/</span>
        <span>Peta Desa Belung</span>
      </div>
      <div className="flex items-center text-gray-500">
        <img src="/time.svg" alt="Time" className="w-4 h-4 mr-1" />
        <span>Terakhir di Update 31 Juli 2025</span>
      </div>
    </div>
  );
}