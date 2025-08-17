import { Header } from '../Components/header.jsx'
import { Footer } from '../Components/footer.jsx'

import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

import Sprig from '../assets/Illustrations/5-Sprig 1.png'
import Eye from "../assets/Illustrations/6-Eye 1.png"
import Crater from '../assets/Illustrations/7-Crater 1.png'
import Blue from '../assets/Illustrations/9-Blue 1.png'
import Pencil from '../assets/Illustrations/11-Pencil 1.png'
import Nest from '../assets/Illustrations/12-Nest 1.png'
import Weather from '../assets/Illustrations/15-Weather 1.png'
import Sidekick from '../assets/Illustrations/16-Sidekick 1.png'
import Snooze from '../assets/Illustrations/18-Snooze 1.png'
import Message from '../assets/Illustrations/23-Message 1.png'
import Ladybug from '../assets/Illustrations/26-Ladybug 1.png'
import Pond from '../assets/Illustrations/27-Pond 1.png'
import Float from '../assets/Illustrations/29-Float 1.png'
import Moss from '../assets/Illustrations/30-Moss 1.png'
import Spooky from '../assets/Illustrations/31-Spooky 1.png'

export function Illustration(){
  return (
    <>
      <Header/>

        <p className="mx-auto my-[50px] text-center text-pink-500 p-5">ILLUSTRATION animated text</p>

      <ResponsiveMasonry columnsCountBreakPoints={{500: 2, 700: 3}} className='w-[90%] max-w-[1000px] m-auto'>
        <Masonry>
            <img src={Sprig} className='w-full'></img>
            <img src={Eye} className='w-full'></img>
            <img src={Crater} className='w-full'></img>
            <img src={Blue} className='w-full'></img>
            <img src={Pencil} className='w-full'></img>
            <img src={Nest} className='w-full'></img>
            <img src={Weather} className='w-full'></img>
            <img src={Sidekick} className='w-full'></img>
            <img src={Snooze} className='w-full'></img>
            <img src={Message} className='w-full'></img>
            <img src={Ladybug} className='w-full'></img>
            <img src={Pond} className='w-full'></img>
            <img src={Float} className='w-full'></img>
            <img src={Moss} className='w-full'></img>
            <img src={Spooky} className='w-full'></img>
        </Masonry>
      </ResponsiveMasonry>

      <Footer/>
    </>
  )
}