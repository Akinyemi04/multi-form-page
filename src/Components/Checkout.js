import React from 'react'
import thank_you from './images/icon-thank-you.svg'
const Checkout = () => {
  return (
    <div className='checkout'>
        <center><img src={thank_you} alt="" /></center>
        <h1>Thank You!</h1>
        <p>Thanks for confirming your subscription! we hope you have fun using our platform.if you ever need support, please feel free to email us @supportgaming@lorem.com. </p>
    </div>
  )
}

export default Checkout;