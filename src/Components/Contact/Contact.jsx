import React, { useEffect } from 'react';
import './Contact.css';
import $ from 'jquery';
export default function Contact() {
    let yourName = $('#name').val();
    useEffect(function(){
        $('nav ul a').removeClass('colorOnScr');
        $('nav ul a').eq(2).addClass('colorOnScr');
        console.log(window.location.pathname);
        $('#name').keyup(function(){
            $('#EndMessage').addClass('d-none');
            if($(this).val()!=''){
                  $('label').eq(0).removeClass('d-none');
                  $('#AfterN').addClass('d-none');
                  $('label').css('color','black');
                  $('label').eq(0).css('color','#1ABC9C')
            }else{
              $('label').eq(0).addClass('d-none');
            }
          })
      
          $('#email').keyup(function(){
            $('#EndMessage').addClass('d-none');
            if($(this).val()!=''){
              $('label').eq(1).removeClass('d-none');
              $('#AfterE').addClass('d-none');
              $('label').css('color','black');
              $('label').eq(1).css('color','#1ABC9C')
            }else{
              $('label').eq(1).addClass('d-none');
            }
          })
      
          $('#phone').keyup(function(){
            $('#EndMessage').addClass('d-none');
            if($(this).val()!=''){
              $('label').eq(2).removeClass('d-none');
              $('#AfterP').addClass('d-none');
              $('label').css('color','black');
              $('label').eq(2).css('color','#1ABC9C')
            }else{
              $('label').eq(2).addClass('d-none');
            }
          })
      
          $('#message').keyup(function(){
            $('#EndMessage').addClass('d-none');
            if($(this).val()!=''){
              $('label').eq(3).removeClass('d-none');
              $('#AfterM').addClass('d-none');
              $('label').css('color','black');
              $('label').eq(3).css('color','#1ABC9C')
            }else{
              $('label').eq(3).addClass('d-none');
            }
          })
      
          $('#formBtn').click(function(){
              if($('#name').val()!='' && $('#email').val()!='' && $('#phone').val()!='' && $('#message').val()!=''){
                console.log('hello');
                $('#AfterN').addClass('d-none');
                $('#AfterM').addClass('d-none');
                $('#AfterN').addClass('d-none');
                $('#AfterN').addClass('d-none');
                $('#EndMessage p').html(`Sorry ${$('#name').val()}, it seems that my mail server is not responding. Please try again later!`)
                $('#EndMessage').removeClass('d-none')
              }if($('#name').val()==''){
                $('#AfterN').removeClass('d-none');
              }else{
                $('#AfterN').addClass('d-none');
              }if($('#email').val()==''){
                $('#AfterE').removeClass('d-none');
              }else{
                $('#AfterE').addClass('d-none');
              }if($('#phone').val()==''){
                $('#AfterP').removeClass('d-none');
              }else{
                $('#AfterP').addClass('d-none');
              }if($('#message').val()==''){
                $('#AfterM').removeClass('d-none');
              }else{
                $('#AfterM').addClass('d-none');
              }
          })
      
          $('#name').click(function(){
            $('label').css('color','black');
            $('label').eq(0).css('color','#1ABC9C');
          })
      
          $('#email').click(function(){
            $('label').css('color','black');
            $('label').eq(1).css('color','#1ABC9C');
          })
          
          $('#phone').click(function(){
            $('label').css('color','black');
            $('label').eq(2).css('color','#1ABC9C');
          })
      
          $('#message').click(function(){
            $('label').css('color','black');
            $('label').eq(3).css('color','#1ABC9C');
          })
      
          $('#EndMessage i').click(function(){
            $('#EndMessage').addClass('d-none');
          })
          console.log(window.screen.availWidth);
    },[])
  return <>
  {console.log(yourName)}
        <section id='Contact' className='py-5'>
            <div className="container-fluid py-5">
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    <h2 className='w-100 text-center'>CONTACT ME</h2>
                    <div className="mySVG mb-4"><i className='fa fa-star fa-2x'></i></div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="myForm">
                        <label htmlFor="name" className='form-label d-none'>name</label>
                        <input id='name' className='w-100 py-3' type="text" placeholder='Name'/>
                        <p id='AfterN' className='mb-3 d-none text-danger'>. Please enter your name.</p>

                        <label htmlFor="email" className='form-label d-none'>Email</label>
                        <input id='email' className='w-100 py-3' type="email" placeholder='Email'/>
                        <p id='AfterE' className='mb-3 d-none text-danger'>. Please enter your email address.</p>

                        <label htmlFor="phone" className='form-label d-none'>Phone Number</label>
                        <input id='phone' className='w-100 py-3' type="text" placeholder='Phone Number'/>
                        <p id='AfterP' className='mb-3 d-none text-danger'>. Please enter your phone number.</p>

                        <label htmlFor="message" className='form-label d-none'>Message</label>
                        <textarea id='message' className='w-100 py-3' type="text" placeholder='Message' rows="6"></textarea>
                        <p id='AfterM' className='mb-3 d-none text-danger'>. Please enter a message.</p>

                        <div id='EndMessage' className='bg-danger text-black pe-5 position-relative d-flex justify-content-start d-none align-items-center rounded px-2 rounded-2 bg-opacity-75 mb-2'>
                            <p></p>
                            <i className='fa fa-close position-absolute end-0 top-50 pe-3 translate-middle-y'></i>
                        </div>
                        <button id='formBtn' className='btn fs-3'>Send</button>
                    </div>
                </div>
            </div>
        </section>
  </>
}
