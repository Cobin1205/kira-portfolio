import { Header } from '../../Components/header.jsx'
import { Footer } from '../../Components/footer.jsx'
import { WorkCard } from '../../Components/WorkCard.jsx'

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Pet1 from '../../assets/PetImages/Pet1.png'
import Pet2 from '../../assets/PetImages/Pet2.jpg'
import Pet3 from '../../assets/PetImages/Pet3.jpg'
import Pet4 from '../../assets/PetImages/Pet4.jpg'
import Pet5 from '../../assets/PetImages/Pet5.jpg'
import Pet6 from '../../assets/PetImages/Pet6.jpg'
import Pet7 from '../../assets/PetImages/Pet7.jpg'
import Pet8 from '../../assets/PetImages/Pet8.jpg'
import Pet9 from '../../assets/PetImages/Pet9.jpg'
import Pet10 from '../../assets/PetImages/Pet10.jpg'

const photos = [
  {src: Pet1, width: 1563, height: 570},
  {src: Pet2, width: 951, height: 563},
  {src: Pet3, width: 589, height: 563},
  {src: Pet4, width: 1563, height: 318},
  {src: Pet5, width: 589, height: 527},
  {src: Pet6, width: 951, height: 527},
  {src: Pet7, width: 734, height: 403},
  {src: Pet8, width: 734, height: 403},
  {src: Pet9, width: 802, height: 434},
  {src: Pet10, width: 734, height: 434},
]

export function PetPackaging() {
  return (
    <>
        <Header/>
        <WorkCard 
        title='Pet Packaging & Illustrations'

        label={<p className='font-OverpassMono font-semibold text-[0.9rem]'>
          Personal Student Work at Iowa State University <br/>
          Timeline: 2022
        </p>}
          
        description={<p>
          Web design and illustration for The Pet Project. As part of their rebrand, 
          we redefined The Pet Project's online presence by crafting a vibrant and 
          user-friendly website that serves as a hub for pet resources and community 
          engagement. From revamping the visual identity with playful icons to streamlining 
          site navigation, the new site reflects The Pet Project's dedication in keeping 
          pets with the people who love them.
        </p>}/>
        
        <div className='w-[90%] mx-auto mt-[100px] mb-[50px] flex flex-col gap-[10px]'>
          <RowsPhotoAlbum
            photos={photos}
            spacing={10}
            targetRowHeight={400}
          />
        </div>

        <Footer/>
    </>
  )
}