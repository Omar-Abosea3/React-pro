import React from 'react';
import './Portfolio.css';
import capin from './cabin.png';
import cake from './cake.png';
import circus from './circus.png';
import game from './game.png';
import safe from './safe.png';
import submarine from './submarine.png';
import { useEffect } from 'react';
import $ from 'jquery';
export default function Portfolio() {

    useEffect(function(){
        $('nav ul a').removeClass('colorOnScr');
        $('nav ul a').eq(0).addClass('colorOnScr');
        console.log(window.location.pathname);
        $('.MyCaption').click(function(){
            console.log($(this).parent().children('img').attr('src'));
            let CapPhoto=$(this).parent().children('img').attr('src');
            let alt = $(this).parent().children('img').attr('alt');
            console.log(alt);
            $('.LayerTitle').html(alt);
            $('#myImg').attr('src',CapPhoto);
            $('body').css('overflow','hidden')
            $('#MyLayer').removeClass('d-none');
         })
          $('#MyLayer i').click(function(){
              $('#MyLayer').addClass('d-none');
              $('body').css('overflow','unset')
          })
          $('#closeBtn').click(function(){
            $('#MyLayer').addClass('d-none');
            $('body').css('overflow','unset')
        })
    },[])
  return <>
        <section id='Portfolio' className='py-5'>
            <div className="container py-5">
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    <h2 className='w-100 text-center'>PORTFOLIO</h2>
                    <div className="mySVG mb-4"><i className='fa fa-star fa-2x'></i></div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-3">
                        <div className='rounded rounded-3'>
                            <figure className='position-relative overflow-hidden'>
                                <img className='w-100 rounded rounded-3' src={capin} alt="LOG CABIN" />
                                <figcaption className='MyCaption d-flex position-absolute justify-content-center align-items-center rounded rounded-3 top-0 start-0 end-0 bottom-0'>
                                    <i className='fa fa-plus fa-5x fw-bold text-white'></i>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-3">
                        <div className='rounded rounded-3'>
                            <figure className='position-relative overflow-hidden'>
                                <img className='w-100 rounded rounded-3' src={cake} alt="TASTY CAKE" />
                                <figcaption className='MyCaption d-flex position-absolute justify-content-center align-items-center rounded rounded-3 top-0 start-0 end-0 bottom-0'>
                                    <i className='fa fa-plus fa-5x fw-bold text-white'></i>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-3">
                        <div className='rounded rounded-3'>
                            <figure className='position-relative overflow-hidden'>
                                <img className='w-100 rounded rounded-3' src={circus} alt="CIRCUS TENT" />
                                <figcaption className='MyCaption d-flex position-absolute justify-content-center align-items-center rounded rounded-3 top-0 start-0 end-0 bottom-0'>
                                    <i className='fa fa-plus fa-5x fw-bold text-white'></i>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-3">
                        <div className='rounded rounded-3'>
                            <figure className='position-relative overflow-hidden'>
                                <img className='w-100 rounded rounded-3' src={game} alt="CONTROLLER" />
                                <figcaption className='MyCaption d-flex position-absolute justify-content-center align-items-center rounded rounded-3 top-0 start-0 end-0 bottom-0'>
                                    <i className='fa fa-plus fa-5x fw-bold text-white'></i>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-3">
                        <div className='rounded rounded-3'>
                            <figure className='position-relative overflow-hidden'>
                                <img className='w-100 rounded rounded-3' src={safe} alt="LOCKED SAFE" />
                                <figcaption className='MyCaption d-flex position-absolute justify-content-center align-items-center rounded rounded-3 top-0 start-0 end-0 bottom-0'>
                                    <i className='fa fa-plus fa-5x fw-bold text-white'></i>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-3">
                        <div className='rounded rounded-3'>
                            <figure className='position-relative overflow-hidden'>
                                <img className='w-100 rounded rounded-3' src={submarine} alt="SUBMARINE" />
                                <figcaption className='MyCaption d-flex position-absolute justify-content-center align-items-center rounded rounded-3 top-0 start-0 end-0 bottom-0'>
                                    <i className='fa fa-plus fa-5x fw-bold text-white'></i>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div id='MyLayer' className='position-fixed py-5 d-flex justify-content-center align-items-center d-none bg-black bg-opacity-25'>
            <div className="container MyLayer1 rounded rounded-3 py-5 m-auto position-relative">
                    <i className='fa fa-close fa-3x position-absolute top-0 end-0 p-3'></i>
                    <div>
                            <div className="d-flex flex-wrap justify-content-center align-items-center">
                                <h2 className='w-100 LayerTitle text-center'></h2>
                                <div className="mySVG mb-4"><i className='fa fa-star fa-2x'></i></div>
                            </div>
                            <div className="row justify-content-center align-items-center">
                                <figure className='w-100 text-center'><img className='rounded rounded-3'  id='myImg' src="" alt=""/></figure>
                                <figcaption className='text-center'>
                                    <p className=' mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button id='closeBtn' className='btn'><i className='fa fa-close'></i> Close Window</button>
                                </figcaption>
                            </div>
                    </div>
            </div>
        </div>

  </>
}
