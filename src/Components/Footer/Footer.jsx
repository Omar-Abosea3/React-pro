import React from 'react';
import './Footer.css';
export default function Footer() {
  return <>
    <section id='Footer'>
        <div className="container py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3 p-5">
                    <div className='text-center text-white'>
                        <h2 className='mb-4'>LOCATION</h2>
                        <p className='fs-5'>2215 John Daniel Drive Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3 p-5">
                    <div className='text-center text-white'>
                        <h2 className='mb-4'>AROUND THE WEB</h2>
                        <ul className='list-unstyled d-flex justify-content-center align-items-center'>
                            <li className='myIcons me-2'><a href="#!" className='text-decoration-none'><i className='fa-brands fa-facebook-f'></i></a></li>
                            <li className='myIcons me-2'><a href="#!" className='text-decoration-none'><i className='fa-brands fa-twitter'></i></a></li>
                            <li className='myIcons me-2'><a href="#!" className='text-decoration-none'><i className='fa-brands fa-linkedin-in'></i></a></li>
                            <li className='myIcons me-2'><a href="#!" className='text-decoration-none'><i className='fa fa-globe'></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3 p-5">
                    <div className='text-center text-white'>
                        <h2 className='mb-4'>ABOUT FREELANCER</h2>
                        <p className='fs-5'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-4 EndFooter text-light d-flex justify-content-center align-items-center"><p>Copyright © Your Website 2021</p></div>
    </section>
  
  </>
}
