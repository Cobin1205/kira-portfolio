export function WorkCard({title, label, description}){
    return (
        <div className='w-full bg-cream mt-[75px] md:flex py-[6.5vw] px-[6vw]'>

            <div className='flex-1'>
                <h1 className='text-[2.5rem] font-extrabold text-blackblue font-Epilogue mb-[1rem]'>{title}</h1>
                {label}
            </div>

            <div className='flex-1 font-OverpassMono text-[0.7em] mt-[30px] md:mt-[0px]'>
                {description}
            </div>

        </div>
    )
}