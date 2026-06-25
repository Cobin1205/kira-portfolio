import { Header } from '../../Components/header.jsx'
import { Footer } from '../../Components/footer.jsx'
import { WorkCard } from '../../Components/WorkCard.jsx'

import Blissful1 from '../../assets/BlissfulHabitsImages/Blissful1.jpg'
import Blissful2 from '../../assets/BlissfulHabitsImages/Blissful2.jpg'
import Blissful3 from '../../assets/BlissfulHabitsImages/Blissful3.jpg'
import Blissful4 from '../../assets/BlissfulHabitsImages/Blissful4.jpg'
import Blissful5 from '../../assets/BlissfulHabitsImages/Blissful5.jpg'
import Blissful6 from '../../assets/BlissfulHabitsImages/Blissful6.jpg'
import Blissful7 from '../../assets/BlissfulHabitsImages/Blissful7.jpg'
import Blissful8 from '../../assets/BlissfulHabitsImages/Blissful8.jpg'
import Blissful9 from '../../assets/BlissfulHabitsImages/Blissful9.jpg'
import Blissful10 from '../../assets/BlissfulHabitsImages/Blissful10.jpg'
import Blissful11 from '../../assets/BlissfulHabitsImages/Blissful11.jpg'
import Blissful12 from '../../assets/BlissfulHabitsImages/Blissful12.jpg'
import Blissful13 from '../../assets/BlissfulHabitsImages/Blissful13.png'

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const photos = [
  {src: Blissful3, width: 770, height: 718},
  {src: Blissful12, width: 770, height: 718},
  {src: Blissful7, width: 505, height: 497},
  {src: Blissful4, width: 507, height: 497},
  {src: Blissful9, width: 505, height: 497},
  {src: Blissful13, width: 1082, height: 607},
  {src: Blissful2, width: 443, height: 616},
  {src: Blissful8, width: 505, height: 497},
  {src: Blissful6, width: 507, height: 497},
  {src: Blissful11, width: 505, height: 497},
  {src: Blissful10, width: 505, height: 497},
  {src: Blissful5, width: 507, height: 497},
  {src: Blissful1, width: 505, height: 497},
]

export function BlissfulHabits() {
  return (
    <>
        <Header/>
        <WorkCard 
        title='Blissful Habits' 
        label={<p className='font-OverpassMono font-semibold text-[0.9rem]'>Personal Student Work at Iowa State University <br/> Timeline: 2022</p>}
        description={<p>Transformative Wellness Through Design. My senior capstone project, "Blissful Habits," 
          is an educational website prototype inspired by the 8 Dimensions of Wellness model. 
          Through vibrant illustrations and interactive elements, 
          it promotes healthier lifestyles by addressing aspects like physical, spiritual, 
          and social well-being. Awarded the 65th Annual ADAI student award for online/interactive 
          design, this project showcases my dedication to merging design with wellness education. 
          <br/><br/>
          Explore the prototype: Blissful Habits Website.</p>}/>
        
        <div className='w-[90%] mx-auto mt-[100px] mb-[50px]'>
          <RowsPhotoAlbum photos={photos} spacing={10} targetRowHeight={400}/>
        </div>

        <a className='flex justify-center items-center rounded-[25px] w-[150px] h-[50px] bg-[#171645] m-auto' 
        href='https://xd.adobe.com/view/2fcd33eb-b677-429e-9eb0-9dadc7810bcf-7a9e/?fullscreen'>
            <h1 className='underline font-Golos font-bold text-[0.75rem] w-full text-white text-center'>
              VIEW FULL SITE
            </h1>
        </a>

        <Footer/>
    </>
  )
}