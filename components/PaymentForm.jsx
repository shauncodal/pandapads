// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicPaymentForm } from "./plasmic/panda/PlasmicPaymentForm";
import { usePaystackPayment } from 'react-paystack';

function PaymentForm_(props, ref) {
  const [email, changeEmail] = React.useState(null);

  const onSuccess = (reference) => {
    console.log('reference2',reference)
   
  };
  
  
  
  
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }
  const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: 30000,
    currency: "ZAR",
    publicKey: 'pk_test_9e51c1550eaaf52040999ccabc1d53ff0835cf3b',
  };
  const initializePayment = usePaystackPayment(config);

  

  return <PlasmicPaymentForm root={{ ref }} {...props} 
  btnDonate = {{
    onClick:(e)=>{
      initializePayment(onSuccess, onClose)
    }
  }}
  inputEmail = {{
    onChange: (e)=>{
      changeEmail(e)
    }
  }}
  />;
}

const PaymentForm = React.forwardRef(PaymentForm_);

export default PaymentForm;
