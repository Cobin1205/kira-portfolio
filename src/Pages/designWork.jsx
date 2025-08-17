import { Header } from '../Components/header.jsx'
import { Footer } from '../Components/footer.jsx'

//Designs
import LoyalShirts from '../assets/DesignWorks/LoyalShirts.png'
import Post3 from '../assets/DesignWorks/Post_3 1.jpg'
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
                <img src={LoyalShirts} className='w-full'></img>
                <img src={Post3} className='w-full'></img>
                <img src={Mural} className='w-full'></img>
                <img src={Mural2} className='w-full'></img>
                <img src={BlackMagic} className='w-full'></img>
                <img src={PetProject} className='w-full'></img>
                <img src={CallumABC} className='w-full'></img>
                <img src={GirlsRock} className='w-full'></img>
                <img src={DakotaTreat} className='w-full'></img>
            </Masonry>
        </ResponsiveMasonry>

        <Footer/>
    </>
  )
}