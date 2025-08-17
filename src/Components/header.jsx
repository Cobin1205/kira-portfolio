import KiraBliss from '../assets/kiraBliss.gif'
import { Link } from 'react-router-dom'

export function Header(){
    return(
        <>
        <div className='w-full bg-topBar h-6'></div>

        <div className="m-auto w-[300px] mt-[40px]">
            <img src={KiraBliss} className="block w-full m-auto"></img>
        </div>

        <nav>
            <ul className='list-none flex w-[500px] my-[20px] mx-auto justify-between p-0 mt-[15px] font-OverpassMono 
                        font-semibold'>
                <Link className='navButton' to='/'>Design Work</Link>
                <Link className='navButton' to='/illustration'>Illustration</Link>
                <Link className='navButton' to='/about'>About</Link>
                <Link className='navButton' to='/contact'>Contact</Link>
            </ul>
        </nav>

        </>
    )
}