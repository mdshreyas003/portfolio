import shreyas from '../image/shreyas.jpg'
import Connect from './Connect';
import Typerwriter from './Typerwriter';
const Body =({fname, domains, position1, position2, socials,selfi})=>{
    return(
        <>
        <div className="my-auto flex w-full px-6 md:px-10 py-8 bg-bg2">
            <div className=" m-auto flex flex-col space-y-16 md:space-y-0 md:flex-row md:space-x-12 md:justify-center justifu-center  w-full ">
                <div >
                    <img className="rounded-full bg-lightblack border-8 border-t-red border-b-green border-r-blue border-l-yellow h-80 w-80 [ shadow-black/70 shadow-2xl ]" src={selfi} />
                </div>
                <div className='
                rounded-2xl
                text-[#1A2421]
                backdrop-blur-lg
                [ w-full  md:w-5/12 p-8 md:p-10 lg:p-10 ]
                [ bg-gradient-to-b from-white/60 to-white/30 ]
                [ border-[1px] border-solid border-white border-opacity-30 ]
                [ shadow-black/70 shadow-2xl ]
                '>
                    <h1 className='w-fit text-4xl md:text-5xl font-semibold font-sans mb-4'>Hi, I'm <span className='text-red font-bold'>{fname}</span>&nbsp;🤚</h1>
                    <h2 className=' w-fit flex mt-2 text-2xl md:text-3xl font-semibold'>I'm &nbsp;<span className='font-normal'> <Typerwriter items={domains} /> </span> </h2>
                    <h3 className=' w-fit mt-4 text-lg'>{position1}</h3>
                    <h3 className=' w-fit mt-2 text-lg'>{position2}</h3>
                    <div className='w-fit flex space-x-3 mt-4'>
                    {socials.map(({link,icon,label}) => (
            <Connect link={link} icon={icon} label={label} />
          ))}
          </div>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Body;