import { Header } from '../Components/header.jsx'
import { Footer } from '../Components/footer.jsx'

import ProfilePhoto from '../assets/Profile-Photo1.png'
import KikiMochi from '../assets/KikiMochi.png'

export function About(){
  return (
    <>
        <Header/>

        <div className='w-full bg-cream'>
            <p className="mx-auto my-[50px] text-center text-pink-500 p-5">HELLO FRIEND animated text</p>
            <div className='flex justify-evenly w-full p-[20px]'>

                <div className='flex-1'>
                    <img src={ProfilePhoto} className='w-[70%] h-auto m-auto'></img>
                </div>

                <div className='flex-1  pr-[8vw]'>
                    <h1 className='lg:text-[2rem] md:text-[2rem] text-[1.5rem] font-Epilogue text-olive font-bold leading-tight'>
                        I’m Kira Bliss, a Midwest based graphic designer, illustrator, and muralist!
                    </h1>

                    <p className='color-black font-Karla leading-7'>
                        <br/>
                        I have a deep love for color, detail, and the little things that make a design 
                        feel just right. While I specialize in digital design and illustration, 
                        I’m always experimenting with new techniques, mediums, or creative challenges. 
                        I live by the mantra “challenge accepted!” <br/><br/>
                        
                        Every project I take on is a labor 
                        of love, filled with intention, energy, and plenty of color. My goal is simple: 
                        to create work that sparks joy, tells a story, and encourages connection. <br/><br/>
                        
                        When I’m not designing, you can find me learning the rules to a new board game, 
                        frisbee golfing, dancing, or curled up with a good book.
                    </p>
                </div>
            </div>

            <p className="mx-auto text-center text-pink-500 p-15">Squiggle Line </p>

        </div>

        <div className='w-full bg-pink'>
            <div className='flex p-[5vw] px-[5vw] gap-[2vw]'>

                <div className='flex-1 m-auto border-block '>
                    <h1 className='font-Epilogue lg:text-[2rem] md:text-[2rem] text-[1.5rem] font-bold'>
                        My Little Assistants!
                    </h1>
                    <p className='font-OverpassMono lg:text-[1.25rem] md:text-[1.25rem] text-[0.75rem]'>
                        <br/>
                        Kiki and Mochi occasionally help out the creative process, 
                        but they’re mostly there for pets and emotional support.
                    </p>
                </div>

                <div className='flex-1 border-block w-full '>
                    <img src={KikiMochi} className='w-full'></img>
                </div>
            </div>
        </div>

        <div className='h-[80vh]'>
            <p className="m-auto text-center text-pink-500">Professional photos </p>
        </div>

        <Footer/>
    </>
  )
}