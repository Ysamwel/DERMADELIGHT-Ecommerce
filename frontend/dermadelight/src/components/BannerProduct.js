import React, { useEffect, useState } from 'react'
import face1 from '../assets/banner/face1'
import lotion1 from '../assets/banner/lotion1'
import lotion2 from '../assets/banner/lotion2'
import sun1 from '../assets/banner/sun1'
import sun2 from '../assets/banner/sun2'






const BannerProduct = () => {
    const [currentImage,setCurrentImage] = useState(0)

    const desktopImages = [
        image1,
        image2,
        image3,
        image4,
        image5
    ]




    const nextImage = () =>{
        if(desktopImages.length -1 > currentImage){
            setCurrentImage(preve => preve - 1)
        }
    }


    useEffect(()=>{
        const interval = setinterval(()=>{
            if(desktopImages.length -1 > currentImage){
                nextImage()
            }else{
                setCurrentImage(0)
            }
        },5000)

        return ()=> clearInterval(interval)
    },[currentImage])
return (
    <div className='container mx-auto px-4 rounded '>
        <div className='h-56 md:h-72 w-full bg-slate-200 relative'>
            <div className='absolute z-10 h-full w-full md:flex items-center hidden '>
                <div className='flex justify-between w-full text-2xl'>
                    <button onClick={preveImage} className='bg-white shadow-sm rounded-full p-1'><FaAngleLeft/></button>
                    <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight/></button>
                </div>
            </div>
            {/**desktop and a tablet */}
            <div className='hidden md:flex h-full w-full overflow-hidden'>
                {
                    desktopImages.map((imageURl,index)=>{
                        return(
                            <div>
                                <img src={imageURl} className='w-full h-full'/>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    </div>
)
}


export default BannerProduct