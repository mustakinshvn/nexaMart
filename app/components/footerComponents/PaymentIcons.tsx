import Image from "next/image";
import payPal from '../../../public/PayPal.png'
import googlePay from '../../../public/google-pay.png'
import appleePay from '../../../public/apple-pay.png'
import mastercard from '../../../public/mastercard.png'
import visa from '../../../public/visa.png'
import Wrapper from "../layout/Wrapper";

const PaymentIcons = () => {
  return (
   <div className="flex flex-row gap-2 p-2 ">
   
   <Wrapper>
    <Image 
     src={visa}
     alt="visa"
     width={25}
     height={10}
   />
   </Wrapper>
  
  
   <Wrapper className="rounded-lg">
    <Image
     src={mastercard}
     alt="mastercard"
     width={40}
     height={10}
   />
   </Wrapper>

   <Wrapper className="rounded-lg">
    <Image 
     src={payPal}
     alt="PayPal"
     width={45}
     height={20} 
   />

   </Wrapper>
    <Wrapper className="rounded-lg">
    <Image  
     src={appleePay}
     alt="Apple Pay"
     width={25}
     height={10}
   />
    </Wrapper>


   <Wrapper className="">
     <Image
     src={googlePay}
     alt="Gpay"
     width={40}
     height={8} 
   />
   </Wrapper>

   

  </div>
  )
}

export default PaymentIcons