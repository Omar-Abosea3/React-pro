import React, { useEffect } from 'react';
import './About.css';
import $ from 'jquery';
export default function About() {
    useEffect(function(){
        $('nav ul a').removeClass('colorOnScr');
        $('nav ul a').eq(1).addClass('colorOnScr');
        console.log(window.location.pathname);
    },[])
  return <>
        <section id='About' className='py-5'>
            <div className="container py-5">
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    <h2 className='w-100 text-center'>About</h2>
                    <div className="mySVG1 mb-4"><i className='fa fa-star fa-2x'></i></div>
                </div>
                <div className="row px-5">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 px-5 mb-4">
                        <div>
                            <p className='text-light fs-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 px-5">
                        <div>
                            <p className='text-light fs-4'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </>
}
