// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import PaymentForm from "../components/PaymentForm";
import { PlasmicGetinvolved } from "../components/plasmic/panda/PlasmicGetinvolved";

function Getinvolved() {
  const [showPayment, togglePayment] = React.useState(false);
  return <div><PlasmicGetinvolved

  btnDonate = {{
    onClick:(e)=>{
      togglePayment(!showPayment)
    }
  }}

  debitOrder = {{
    onClick:(e)=>{
      console.log('teest')
      window.open('https://paystack.com/pay/35s4ki2awy')
    }
  }}

  />
  {showPayment && <div style={{width:'100%', height:"100%", position:'fixed', top:0, left:0}}>
  <PaymentForm 
btnClose = {{
  onClick:(e)=>{
    togglePayment(!showPayment)
  }
}}
facebook = {{
  onClick:(e)=>{
    window.open('https://www.facebook.com/PandaPads.SA/')
  }
}}
instagram = {{
  onClick:(e)=>{
    window.open('https://www.facebook.com/PandaPads.SA/')
  }
}}
/>
</div>}
</div>
}

export default Getinvolved;
