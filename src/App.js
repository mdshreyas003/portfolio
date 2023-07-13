
import Cursor from './components/Cursor'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import info from './info'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Project from './components/Project'
import Footer from './components/Footer'
import ParticlesBg from './particles/ParticlesBg';
import Colors from './components/Colors'
import { useState } from 'react'
import Terminal from './components/Terminal'
function App() {
  const [background, setBgColor] =  useState('#a1d3dd');
  const [particle, setParticleColor] =  useState('#88aadf');
  const [links, setLinks] =  useState('#fff');
  return (
    <div className="cursor-none min-h-screen w-full flex flex-col  items-center ">
      <ParticlesBg background={background} particle={particle} links={links} />
      <Cursor />
      <Header/>
      <Outlet context={[setLinks, setBgColor, setParticleColor]}/>
      <Footer/>
        
    </div>
  );
}
const app = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Body fname={info.firstname} domains={info.who} position1={info.position1} position2={info.position2} socials={info.socials} selfi={info.self}/>,

    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/projects",
      element:<Project info={info}/>
    },
    {
      path:"/colors",
      element:<Colors/>
    }
  ]
}
])
export default app;
