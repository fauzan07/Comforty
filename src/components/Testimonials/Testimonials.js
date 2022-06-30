import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Testiprofile from "../../assets/test-img4.png";

function Testimonials(props) {

    
    const state= {
      responsive:{
          0: {
              items: 1,
          },
          450: {
              items: 2,
          },
          600: {
              items: 3,
          },
          1000: {
              items: 2,
          },
      },
  }
  




  return(
    <>
      
      <section className="here-from-section py-5">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-12">
                  <h1 className="head-text mr-3 mb-4">What Client say about us</h1>
                    <OwlCarousel className='owl-theme' responsive={state.responsive} loop nav dots={false}>
                    <div className="hear-from-slider border item bg-white p-4 mx-2">
                        <p className="here-from-p-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nihil eligendi odit fugit doloremque mollitia ad voluptas quidem pariatur, voluptates totam magnam magni tenetur esse nesciunt repellendus saepe? Earum, eveniet?</p>
                        <div className="mt-4 d-flex">
                            <img src={Testiprofile} alt="Testiprofile" />
                            <div className="ml-4">
                                <h4>Kristin Watson</h4>
                                <small>Fasion Designer</small>
                            </div>
                        </div>
                    </div>
                    <div className="hear-from-slider border item bg-white p-4 mx-2">
                        <p className="here-from-p-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nihil eligendi odit fugit doloremque mollitia ad voluptas quidem pariatur, voluptates totam magnam magni tenetur esse nesciunt repellendus saepe? Earum, eveniet?</p>
                        <div className="mt-4 d-flex">
                            <img src={Testiprofile} width="50" alt="Testiprofile" />
                            <div className="ml-4">
                                <h4>Kristin Watson</h4>
                                <small>Fasion Designer</small>
                            </div>
                        </div>
                    </div>
                    <div className="hear-from-slider border item bg-white p-4 mx-2">
                        <p className="here-from-p-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nihil eligendi odit fugit doloremque mollitia ad voluptas quidem pariatur, voluptates totam magnam magni tenetur esse nesciunt repellendus saepe? Earum, eveniet?</p>
                        <div className="mt-4 d-flex">
                            <img src={Testiprofile} width="50" alt="Testiprofile" />
                            <div className="ml-4">
                                <h4>Kristin Watson</h4>
                                <small>Fasion Designer</small>
                            </div>
                        </div>
                    </div>
                    </OwlCarousel>
              </div>
          </div>
      </div>
      </section>
        </>
  );

}

export default Testimonials;
