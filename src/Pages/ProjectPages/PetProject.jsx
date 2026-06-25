import { Header } from '../../Components/header.jsx'
import { Footer } from '../../Components/footer.jsx'
import { WorkCard } from '../../Components/WorkCard.jsx'

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import PetProj1 from '../../assets/PetWebImages/PetProj1.png'
import PetProj2 from '../../assets/PetWebImages/PetProj2.png'
import PetProj3 from '../../assets/PetWebImages/PetProj3.jpg'
import PetProj4 from '../../assets/PetWebImages/PetProj4.jpg'
import PetProj5 from '../../assets/PetWebImages/PetProj5.jpg'
import PetProj6 from '../../assets/PetWebImages/PetProj6.jpg'

const photos = [
  {src: PetProj1, width: 770, height: 718},
  {src: PetProj2, width: 719, height: 719},
  {src: PetProj3, width: 505, height: 497},
  {src: PetProj4, width: 507, height: 497},
  {src: PetProj5, width: 505, height: 497}
]

export function PetProject() {
  return (
    <>
        <Header/>
        <WorkCard 
        title='The Pet Project Website'

        label={<p className='font-OverpassMono font-semibold text-[0.9rem]'>
          Client Work at Project7 Design<br/>
          Client: The Pet Project <br/>
          Timeline: 2023-2024 / Role: Web Designer
        </p>}
          
        description={<p>
          Web design and illustration for The Pet Project. As part of their rebrand, 
          we redefined The Pet Project's online presence by crafting a vibrant and 
          user-friendly website that serves as a hub for pet resources and community 
          engagement. From revamping the visual identity with playful icons to streamlining 
          site navigation, the new site reflects The Pet Project's dedication in keeping pets 
          with the people who love them.
        </p>}/>
        
        <div className='w-[90%] mx-auto mt-[100px] mb-[50px] flex flex-col gap-[10px]'>
          <RowsPhotoAlbum
            photos={photos}
            spacing={10}
            targetRowHeight={400}
          />

          <img src={PetProj6} className='w-full h-auto'></img>
        </div>

        <Footer/>
    </>
  )
}