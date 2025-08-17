import LinkedIn from '../assets/LinkedIn.svg'
import Instagram from '../assets/Instagram.svg'

export function Footer(){
    return(

        <div className='bg-olive h-[250px] w-full mt-[100px] p-8'>

            <h1 className='font-Overpass font-bold text-center text-[1.5rem]'>KIRA BLISS</h1>

            <p className='text-center font-OverpassMono leading-[2.2] mt-[10px] font-semibold'>
                Graphic Designer ✶ Illustrator ✶ Muralist <br/> 
                2025 Kira Bliss. All Rights Reserved.
            </p>

            <div className='flex m-auto justify-center gap-[10px] mt-[20px]'>
                <a href='https://www.instagram.com/kbliss.creates/' target='new'><img src={Instagram}></img></a>
                <a href='https://www.linkedin.com/in/kira-bliss-0625' target='new'><img src={LinkedIn}></img></a>
            </div>

        </div>

    )
}