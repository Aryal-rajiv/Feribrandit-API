import React from 'react'
import Layout from '../components/layouts/Layout'
import { BiMailSend, BiPhoneCall, BiSupport  } from 'react-icons/bi';

const Contact = () => {
  return (
    <Layout title={"Contact Us - Feribrandit"}>
        <div className="row contactus">

            <div className="col-md-6">
              <img src="../assets/images/Contact-image.webp" 
              alt="contactus" 
              width="100%" />
            </div>

            <div className="col-md-4">
              <h1 className="bg-dark text-white text-center p-2">Contact Us</h1>
              <p className="text-justify mt 2">Any queries feel free to reach out to us. 
                We bring ethical fashion to your doorstep</p>           
                <p className="mt-3">
                  <BiMailSend/> : www.aryalrajiv.com.new </p>
                <p className="mt-3">
                  <BiPhoneCall/> : +1234567890 </p>
                <p className="mt-3">
                  <BiSupport/> : 24/7 Support Available </p>
             </div>

        </div>
    </Layout>
  )
}

export default Contact
