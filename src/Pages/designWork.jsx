//Components
import { Header } from '../Components/header.jsx'
import { Footer } from '../Components/footer.jsx'
import { HighlightImgLink } from '../Components/HighlightImgLink.jsx'

//Designs
import LoyalShirts from '../assets/DesignWorks/LoyalShirts.png'
import BlissfulHabits from '../assets/DesignWorks/Post_3 1.jpg'
import Mural from '../assets/DesignWorks/Mural.png'
import Mural2 from '../assets/DesignWorks/Mural2.png'
import BlackMagic from '../assets/DesignWorks/BlackMagic.png'
import PetProject from '../assets/DesignWorks/PetProject.png'
import CallumABC from '../assets/DesignWorks/CallumABC.png'
import GirlsRock from '../assets/DesignWorks/GirlsRock.png'
import DakotaTreat from '../assets/DesignWorks/DakotaTreat.jpg'

import Masonry, { ResponsiveMasonry} from 'react-responsive-masonry'

export function DesignWork() {
  return (
    <>
        <Header/>

        <p className="mx-auto my-[50px] text-center text-pink-500 p-5">DESIGN WORK animated text</p>

        <ResponsiveMasonry columnsCountBreakPoints={{500: 2, 700: 3}} className='w-[90%] max-w-[1000px] m-auto'>
            <Masonry>
                <HighlightImgLink link='/LoyalSons' img={LoyalShirts} label="Loyal Sons Barber Shop Merch"/>
                <HighlightImgLink link='/BlissfulHabits' img={BlissfulHabits} label="Blissful Habits"/>
                <HighlightImgLink link='/' img={Mural} label="Raccoon Mural (placeholder text)"/> 
                <HighlightImgLink link='/' img={Mural2} label="Cactus Mural (placeholder text)"/>
                <HighlightImgLink link='/' img={BlackMagic} label="Black Magic Tattoo Website"/>
                <HighlightImgLink link='/PetProject' img={PetProject} label="The Pet Project Website"/>
                <HighlightImgLink link='/CallumsABCs' img={CallumABC} label="Callum's ABCs"/>
                <HighlightImgLink link='/GRDSM' img={GirlsRock} label="GR!DSM Summer Camp Branding"/>
                <HighlightImgLink link='/PetPackaging' img={DakotaTreat} label="Pet Packaging & Illustrations"/>
            </Masonry>
        </ResponsiveMasonry>

        <Footer/>
    </>
  )
}