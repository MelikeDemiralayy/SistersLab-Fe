import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchCatImage } from "./api";

const Home = () => {
  const [catImage, setCatImage] = useState("");

  const getCatImage = async () => {
    const imageUrl = await fetchCatImage();
    setCatImage(imageUrl);
  };

  useEffect(() => {
    getCatImage();
  }, []);

  return(
    <div>
      <h1>Random Cat Image</h1>
      {catImage ? (
        <Image src={catImage} alt="Cat" width={500} height={500} />
      ) : (
        <p>Loading...</p>
      )}
      <button 
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  onClick={getCatImage}> Değiştir </button>


    </div>
  );
};
export default Home ;