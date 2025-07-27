import Image from 'next/image';

const HeaderSejarah = ({ history, children }) => {
  console.log('HeaderSejarah received history:', history);

  return (
    <>
      {/* Home*/}
      <div className="text-sm text-gray-500 mb-2">
        <span className="inline-flex items-center gap-1">
          🏠 <span>/ Sejarah Desa Belung</span>
        </span>
      </div>

      {/* Judul & Info */}
      <h1 className="text-4xl font-bold text-gray-800">
        {history?.title || 'Sejarah Desa Belung'}
      </h1>
      <div className="flex items-center text-sm text-gray-500 mt-1 mb-4 gap-4">
        <span>🗓 {history?.created ? new Date(history.created).toLocaleDateString('id-ID') : '5 Juli 2025'}</span>
      </div>      
    </>
  );
};

export default HeaderSejarah;
