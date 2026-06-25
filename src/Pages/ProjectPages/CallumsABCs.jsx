import { Header } from '../../Components/header.jsx'
import { Footer } from '../../Components/footer.jsx'
import { WorkCard } from '../../Components/WorkCard.jsx'

import "react-photo-album/rows.css";

import CallumsABCsImage from '../../assets/CallumsABCs.png'

export function CallumsABCs() {
  return (
    <>
        <Header/>
        <WorkCard 
        title='Callum’s ABCs'

        label={<p className='font-OverpassMono font-semibold text-[0.9rem]'>
          Personal Work / Timeline: 2019
        </p>}
          
        description={<p>
          An illustrated ABC's book following my little brother Callum and his frog friend 
          through a whimsical alphabet journey. When the pandemic hit, my 2-year-old brother 
          had been stuck at home with few chances to interact with other children and learn 
          about the world. I wanted to create something magical for him to learn his ABCs and 
          to always have this piece of love to carry with him as he grows. This was my personal 
          project for the COVID-19 isolation period, taking roughly 4 months to illustrate, 
          print, and ship to family and friends.
        </p>}/>
        
        <img src={CallumsABCsImage} className='w-[90%] h-full m-auto mt-[75px]'></img>

        <Footer/>
    </>
  )
}