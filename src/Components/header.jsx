import KiraBliss from '../assets/kiraBliss.gif'
import { Link } from 'react-router-dom'

export function Header(){
    return(
        <>
        <div className='w-full bg-topBar h-6'></div>

        <div className="m-auto w-[250px] sm:w-[300px] mt-[40px]">
            <img src={KiraBliss} className="block w-full m-auto"></img>
        </div>

        <nav>
            <ul className='list-none flex w-full my-[20px] max-w-[550px] mx-auto justify-evenly 
                        p-0 mt-[15px] font-OverpassMono font-semibold'>
                <Link className='navButton sm:text-[1rem] text-[0.8rem]' to='/'>Design Work</Link>
                <Link className='navButton sm:text-[1rem] text-[0.8rem]' to='/illustration'>Illustration</Link>
                <Link className='navButton sm:text-[1rem] text-[0.8rem]' to='/about'>About</Link>
                <Link className='navButton sm:text-[1rem] text-[0.8rem]' to='/contact'>Contact</Link>
            </ul>
        </nav>

        </>
    )
}