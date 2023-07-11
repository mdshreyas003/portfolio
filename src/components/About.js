import Terminal from "./Terminal"
import info from '../info'
function self(){
    return(
    <div className="px-6  py-8 xs: text-xl lg:text-2xl">
            <div className="flex flex-wrap break-all font-mono xs: text-xl lg:text-2xl">
                <div className=" text-green font-semibold">
                    {info.firstname+info.lastname} $ 
                </div>
                <div>
                &nbsp; vim About{info.firstname}.txt
                </div>
            </div>
            <div className=" break-before-right font-mono xs: text-xl lg:text-2xl mt-2">
                
                <div>
                <span className=" text-green ">
                About{info.firstname} $ 
                </span>
                    {}
                   &nbsp; {info.aboutMe}
                </div>
            </div>
            </div>)
}

function skills(){
    return(
        
        <div className="px-6 py-8 xs: text-xl lg:text-2xl">
            <div className="flex flex-wrap break-all font-mono xs: text-xl lg:text-2xl">
                <div className=" text-green font-semibold">
                    {info.firstname+info.lastname} $ 
                </div>
                <div>
                &nbsp; cd skills
                </div>
            </div>
            <div className=" break-before-right font-mono xs: text-xl lg:text-2xl mt-2">
                
                <div>
                <span className=" text-green ">
                Skills $ 
                </span>
                   
                   &nbsp; ls
                </div>
                {Object.keys(info.domains).map((domain)=>{
                    return(<div className="mt-3">
                        <div className='text-yellow'>{domain}</div>
                        {
                            info.domains[domain].map((skill)=>{
                                return(<li className="space-y-1">
                                    {skill}
                                </li>)
                            })
                        }
                    </div>)
                })}
            </div>
            </div>
        
    )
}

function hobbies(){
    return(
        <div className="px-6 py-8 xs: text-xl lg:text-2xl">
            <div className="flex flex-wrap break-all font-mono xs: text-xl lg:text-2xl">
                <div className=" text-green font-semibold">
                    {info.firstname+info.lastname} $ 
                </div>
                <div>
                &nbsp; cd .. && cd hobbies
                </div>
            </div>
            <div className=" break-before-right font-mono xs: text-xl lg:text-2xl mt-2">
                
                <div>
                <span className=" text-green ">
                hobbies $ 
                </span>
                   
                   &nbsp; ls
                </div>
                {info.hobbies.map((hobby)=>{
                    return(
                        <li className="space-y-1">
                        {hobby}
                    </li>
                    )
                })}
            </div>
            </div>
    )
}

function About() {
  return (
    <div className="mt-auto flex w-full justify-center flex-col items-center">
        <Terminal text={self()}/>
        <Terminal text={skills()}/>
        <Terminal text={hobbies()}/>
    </div>
  )
}

export default About