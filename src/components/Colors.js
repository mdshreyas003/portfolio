import { useEffect, useContext } from "react"
import {useOutletContext } from 'react-router-dom'

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

function Colors() {
    const [setLinks, setBgColor, setParticleColor] = useOutletContext();
    const [color, setColor] = useColor('#DCD6C8')
    const [color1, setColor1] = useColor('#E7B669')
    const [color2, setColor2] = useColor('#5C7C8A')
    useEffect(()=>{
      setBgColor(color)
      setLinks(color1)
      setParticleColor(color2)
    },[color, color1, color2])
  return (
    <div>
      <h1> set background Color</h1>
      <ColorPicker width={456} height={228} 
                   color={color} 
                   onChange={setColor} hideHSV dark />;
                   <h1> set Link Color</h1>
      <ColorPicker width={456} height={228} 
                   color={color1} 
                   onChange={setColor1} hideHSV dark />;
                   <h1> set Particles Color</h1>
      <ColorPicker width={456} height={228} 
                   color={color2} 
                   onChange={setColor2} hideHSV dark />;
    </div>
  )
}

export default Colors