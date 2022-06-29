import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Testiprofile from "../../assets/test-img4.png";


function Testimonials(props) {


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1
        }
      };


  return(
    <>
      
      <section className="here-from-section py-5">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-12">
                  <h1 className="head-text mr-3 mb-4">What Client say about us</h1>
                    <Carousel responsive={responsive} autoPlaySpeed={1000} className="mb-5">
                    <div className="hear-from-slider border bg-white p-4 mx-2">
                        <p className="here-from-p-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nihil eligendi odit fugit doloremque mollitia ad voluptas quidem pariatur, voluptates totam magnam magni tenetur esse nesciunt repellendus saepe? Earum, eveniet?</p>
                        <div className="mt-4 d-flex">
                            <img src={Testiprofile} width="50" alt="Testiprofile" />
                            <div className="ml-4">
                                <h4>Kristin Watson</h4>
                                <small>Fasion Designer</small>
                            </div>
                        </div>
                    </div>
                    <div className="hear-from-slider border bg-white p-4 mx-2">
                        <p className="here-from-p-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nihil eligendi odit fugit doloremque mollitia ad voluptas quidem pariatur, voluptates totam magnam magni tenetur esse nesciunt repellendus saepe? Earum, eveniet?</p>
                        <div className="mt-4 d-flex">
                            <img src={Testiprofile} width="50" alt="Testiprofile" />
                            <div className="ml-4">
                                <h4>Kristin Watson</h4>
                                <small>Fasion Designer</small>
                            </div>
                        </div>
                    </div>
                    <div className="hear-from-slider border bg-white p-4 mx-2">
                        <p className="here-from-p-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nihil eligendi odit fugit doloremque mollitia ad voluptas quidem pariatur, voluptates totam magnam magni tenetur esse nesciunt repellendus saepe? Earum, eveniet?</p>
                        <div className="mt-4 d-flex">
                            <img src={Testiprofile} width="50" alt="Testiprofile" />
                            <div className="ml-4">
                                <h4>Kristin Watson</h4>
                                <small>Fasion Designer</small>
                            </div>
                        </div>
                    </div>
                    </Carousel>
              </div>
          </div>
      </div>
      </section>
        </>
  );

}

export default Testimonials;
