import React from 'react'
import Navbar from "./Navbar";
import logo1 from '../images/icon1.png'
const AboutUs=()=>{
    return(
        <>
        <Navbar />
        <div className="container py-3 px-4 mt-lg-4">
            <div className='container wrapper p-5'>
            <div className='row'>
            <div className='col-lg-4 d-flex align-items-center justify-content-center d-none d-lg-block'>
                <img src={logo1} alt='logo1' className='wrapper2'></img>
            </div>
            <div className='col-lg-8'>
            <h3 className='text-center pb-3'><u> About Us !!</u></h3>
            <p className='text-lg-start text-center'>"We're a team of passionate developers and designers who have created a website to help students swap elective subjects with ease. We also offer an attendance prediction model and provide previous year papers from trusted sources. Our mission is to connect students and provide them with the support they need to succeed in their studies. Join us today and take the first step towards stress-free subject swapping and academic success!" </p>
            </div>
            
            </div>
            </div>
        </div>
        </>
    )
}
export default AboutUs