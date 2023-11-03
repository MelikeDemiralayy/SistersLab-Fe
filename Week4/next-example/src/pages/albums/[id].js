import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchPhoto } from "../api";
import AlbumCard from "@/components/Card";

const PhotoDetail = () => {
    const [photo, setPhoto] = useState({});

    //url den id bilgisi alabilmek için ;
    const router = useRouter();
    const {id} = router.query;

    useEffect(() => {
        if(id){
            const getDetail = async () =>{
                const photoDet = await fetchPhoto(id);
                setPhoto(photoDet);
            };
            getDetail();
        };
    } ,[id]);
    if (!photo) {
        return <div className="flex items-center justify-center">Loading...</div>;
      };

  return (
    <div className="flex items-center justify-center  min-h-screen">
        <AlbumCard photo = {photo}/>
      
    </div>
  )
}

export default PhotoDetail;
