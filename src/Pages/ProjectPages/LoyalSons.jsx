import { Header } from '../../Components/header.jsx'
import { Footer } from '../../Components/footer.jsx'
import { WorkCard } from '../../Components/WorkCard.jsx'

import Loyal1 from '../../assets/LoyalSonsImages/Loyal1.jpg'
import Loyal2 from '../../assets/LoyalSonsImages/Loyal2.jpg'
import Loyal3 from '../../assets/LoyalSonsImages/Loyal3.jpg'
import Loyal4 from '../../assets/LoyalSonsImages/Loyal4.jpg'
import Loyal5 from '../../assets/LoyalSonsImages/Loyal5.jpg'
import Loyal6 from '../../assets/LoyalSonsImages/Loyal6.jpg'
import Loyal7 from '../../assets/LoyalSonsImages/Loyal7.jpg'
import Loyal8 from '../../assets/LoyalSonsImages/Loyal8.jpg'
import Loyal9 from '../../assets/LoyalSonsImages/Loyal9.jpg'
import Loyal10 from '../../assets/LoyalSonsImages/Loyal10.jpg'
import Loyal11 from '../../assets/LoyalSonsImages/Loyal11.jpg'
import Loyal12 from '../../assets/LoyalSonsImages/Loyal12.jpg'
import Loyal13 from '../../assets/LoyalSonsImages/Loyal13.jpg'
import Loyal14 from '../../assets/LoyalSonsImages/Loyal14.jpg'

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const photos = [
  {src: Loyal1 , width: 1014, height: 771},
  {src: Loyal2 , width: 495, height: 772},
  {src: Loyal3 , width: 379, height: 372},
  {src: Loyal4 , width: 377, height: 372},
  {src: Loyal5 , width: 377, height: 372},
  {src: Loyal6 , width: 377, height: 372},
  {src: Loyal7 , width: 495, height: 772},
  {src: Loyal8 , width: 1014, height: 772},
  {src: Loyal9 , width: 1050, height: 772},
  {src: Loyal10 , width: 459, height: 772},
  {src: Loyal11 , width: 378, height: 371},
  {src: Loyal12 , width: 350, height: 371},
  {src: Loyal13 , width: 377, height: 372},
  {src: Loyal14 , width: 379, height: 372},
  
]

export function LoyalSons() {
  return (
    <>
        <Header/>
        <WorkCard 
        title='Loyal Sons Barber Shop Merch' 

        label={<p className='font-OverpassMono font-semibold text-[0.9rem]'>
          Client Work at Project7 Design <br/>
          Client: Loyal Sons Barber Shop <br/>
          Timeline: 2023 / Role: Designer
        </p>}
          
        description={<p>
          Illustrations for Loyal Sons Barber Shop for seasonal apparel and sticker designs.
          The crew at Loyal Sons has the knack for keeping their clients looking sharp; 
          short hair guaranteed, though not as literally as their collection of playful 
          summer 2022 t-shirts and stickers. Their winter 2023 merch collection featured cozy 
          and comfortable sweatshirts, crewnecks, and beanies with a focus on promoting mental 
          health awareness during the colder months.
        </p>}/>
        
        <div className='w-[90%] mx-auto mt-[100px] mb-[50px] flex flex-col gap-[10px]'>
          <RowsPhotoAlbum
            photos={photos.slice(0, 2)}
            spacing={10}
            targetRowHeight={400}
          />
          <RowsPhotoAlbum
            photos={photos.slice(2, 6)}
            spacing={10}
            targetRowHeight={300}
          />
          <RowsPhotoAlbum
            photos={photos.slice(6, 8)}
            spacing={10}
            targetRowHeight={400}
          />
          <RowsPhotoAlbum
            photos={photos.slice(8, 10)}
            spacing={10}
            targetRowHeight={400}
          />
          <RowsPhotoAlbum
            photos={photos.slice(10)}
            spacing={10}
            targetRowHeight={300}
          />
        </div>

        <Footer/>
    </>
  )
}