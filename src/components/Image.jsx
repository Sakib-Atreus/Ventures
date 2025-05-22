import bg from '../assets/alenaventurebg.png';

const ImageBG = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Optional content inside the background */}
      <div className="flex items-center justify-center h-full bg-opacity-50 text-white text-3xl font-bold">
      </div>
    </div>
  );
};

export default ImageBG;
