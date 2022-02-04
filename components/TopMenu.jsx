
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
        Router.push('/ourimpact')
        toggleMenu(!menuOpen)
      }
    }}
    btnContact= {{
      onClick : (e) =>{
        Router.push('/contact')
        toggleMenu(!menuOpen)
      }
    }}
    btnInvolved={{
      onClick : (e) =>{
        Router.push('/getinvolved')
        toggleMenu(!menuOpen)
      }
    }}
    menuOpen= {menuOpen}
    btnMenu= {{
      onClick : (e) =>{
        toggleMenu(!menuOpen)
      }
    }}

    facebook = {{
      onClick:(e)=>{
        window.open('https://www.facebook.com/PandaPads.SA/')
      }
    }}
 
  />;
}

const TopMenu = React.forwardRef(TopMenu_);

export default TopMenu;
