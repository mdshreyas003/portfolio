import { useEffect, useContext } from "react"
import {useOutletContext } from 'react-router-dom'

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

function Colors() {
    const [setLinks, setBgColor, setParticleColor] = useOutletContext();
    const [color, setColor] = useColor('#d7f4ef')
    const [color1, setColor1] = useColor('#E7B669')
    const [color2, setColor2] = useColor('#5C7C8A')

  return (
    <>
    <div className=" font-semibold text-xl flex flex-wrap justify-center items-center uppercase space-x-8 border-2 border-dashed border-blue p-8">
      
      <div>
      <h1> set background Color</h1>
      <ColorPicker width={300} height={180} 
                   color={color} 
                   onChange={setColor} hideHSV dark />
           
           </div>
                   <div>
                   <h1> set Link Color</h1>
      <ColorPicker width={300} height={180} 
                   color={color1} 
                   onChange={setColor1} hideHSV dark />
                  
</div>
<div>
                   <h1> set Particles Color</h1>
      <ColorPicker width={300} height={180} 
                   color={color2} 
                   onChange={setColor2} hideHSV dark />
      
</div>

    </div>
    <button 
    className=" mt-8 text-center align-middle items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    onClick={()=>{
      setBgColor(color)
      setLinks(color1)
      setParticleColor(color2)
    }}>Save Changes</button>
    </>
  )
}

export default Colors