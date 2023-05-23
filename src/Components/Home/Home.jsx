import React, { useEffect } from 'react';
import './Home.css';
import  svg from './avataaars.svg';
import $ from 'jquery';
export default function Home() {
  useEffect(function(){
    $('nav ul a').removeClass('colorOnScr');
    console.log(window.location.pathname);
  },[])
  return <>
    <div id='Home' className="vh-100 d-flex flex-wrap justify-content-center pt-5 align-items-center align-content-center">
        <img src={svg} className='HomeIcon mt-5 pt-5 mb-2' alt="HomeIcon"/>
        <h1 className='w-100 text-center'>START REACT</h1>
        <div className="mySVG1 mb-4"><i className='fa fa-star fa-2x'></i></div>
        <p className='w-100 text-center text-white fs-3'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </>
}
