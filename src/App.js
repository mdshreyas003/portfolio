
import Cursor from './components/Cursor'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import info from './info'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Project from './components/Project'
import Footer from './components/Footer'
function App() {
  return (
    <div className="cursor-none min-h-screen bg-bg2 w-full flex flex-col  items-center">
      <Cursor />
      <Header/>
      <Outlet/>
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
    }
  ]
}
])
export default app;
