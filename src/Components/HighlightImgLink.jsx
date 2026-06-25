import {Link} from 'react-router-dom'

export function HighlightImgLink({img, link, label}){
    return(
        <Link to={link} className='w-full'>
            <div className='w-full relative'>

                <img src={img} className='w-full'></img>

                <div className='flex justify-center items-center absolute top-0 left-0 w-full h-full bg-purple-200 opacity-0 hover:opacity-100 duration-200'>
                    <h1 className='font-OverpassMono font-semibold w-2/3 text-center'>{label}</h1>
                </div>

            </div>
        </Link>
    )
}