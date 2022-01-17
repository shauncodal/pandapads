
import * as React from "react";
import { PlasmicTopMenu } from "./plasmic/panda/PlasmicTopMenu";
import Router from 'next/router'



function TopMenu_(props, ref) {
  const [menuOpen, toggleMenu] = React.useState(false);
  return <PlasmicTopMenu root={{ ref }} {...props}
  
    btnHome={{
      onClick : (e) =>{
        Router.push('/')
        toggleMenu(!menuOpen)
      }
    }}
    btnImpact={{
      onClick : (e) =>{
        Router.push('/OurImpact')
        toggleMenu(!menuOpen)
      }
    }}
    btnContact= {{
      onClick : (e) =>{
        Router.push('/Contact')
        toggleMenu(!menuOpen)
      }
    }}
    btnInvolved={{
      onClick : (e) =>{
        Router.push('/GetInvolved')
        toggleMenu(!menuOpen)
      }
    }}
    menuOpen= {menuOpen}
    btnMenu= {{
      onClick : (e) =>{
        console.log('menuOpen', menuOpen)
        toggleMenu(!menuOpen)
      }
    }}
 
  />;
}

const TopMenu = React.forwardRef(TopMenu_);

export default TopMenu;
