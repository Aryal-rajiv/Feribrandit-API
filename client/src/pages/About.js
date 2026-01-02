import React from 'react'
import Layout from '../components/layouts/Layout'

const About = () => {
  return (
    <Layout  title={"About Us - Feribrandit"}>
      <div className="row aboutus">

          <div className="col-md-6">
            <img src="../assets/images/about.webp" 
            alt="aboutus" 
            width="100%" />
          </div>


          <div className="col-md-4">
            <h1 className="bg-dark text-white text-center p-2">About Us</h1>
            <p className="text-justify mt 2">Welcome to Feribrandit, your number one source for ethical fashion.
              We're dedicated to providing you the very best of sustainable clothing, with an emphasis on quality, 
              affordability, and style.
            </p>
            <p className="text-justify mt 2">
              Founded in 2023 by Aryal Rajiv, Feribrandit has come a long way from its beginnings in a small shop.
               When Aryal Rajiv first started out, his passion for eco-friendly products drove him to start his own business.
                We hope you enjoy our products as much as we enjoy offering them to you. 
                If you have any questions or comments, please don't hesitate to contact us.
            </p>
            <p className="text-justify mt 2">
              Sincerely,
              <br />
              Aryal Rajiv
            </p>
          </div>


     </div>

    </Layout>
  )
}

export default About
