import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import product1 from "../../assets/chair-n1.jpg";
import product2 from "../../assets/chair-n2.jpg";
import product3 from "../../assets/chair-n3.jpg";
import product4 from "../../assets/chair-n4.jpg";
import product5 from "../../assets/chair-n5.jpg";
import product6 from "../../assets/chair-n6.jpg";
import product7 from "../../assets/chair7.jpg";
import product8 from "../../assets/chair8.jpg";


function SlideOrders(props) {


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 2
        }
      };


  return(
    <>
      
      <section className="here-from-section py-5">
      <div className="container">
          <div className="row justify-content-md-center py-4">
              <div className="col-lg-12">
                  <h1 className="head-text mr-3 mb-4">Features products</h1>
                    <Carousel responsive={responsive} autoPlaySpeed={1000} className="mb-5">
                    <div class="card mx-2">
                      <img src={product1} class="card-img-top slide-card-img" alt="..."/>
                      <div class="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5 class="card-title">Library Stool Chair</h5>
                            <p class="card-text">$20</p>
                          </div>
                          <div className="mt-4">
                            <button className="btn btn-sm btn-info">
                              <i class="fa fa-cart-plus" aria-hidden="true"></i>
                            </button>
                         </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mx-2">
                      <img src={product2} class="card-img-top slide-card-img" alt="..."/>
                      <div class="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5 class="card-title">Library Stool Chair</h5>
                            <p class="card-text">$20</p>
                          </div>
                          <div className="mt-4">
                            <button className="btn btn-sm btn-info">
                              <i class="fa fa-cart-plus" aria-hidden="true"></i>
                            </button>
                         </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mx-2">
                      <img src={product3} class="card-img-top slide-card-img" alt="..."/>
                      <div class="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5 class="card-title">Library Stool Chair</h5>
                            <p class="card-text">$20</p>
                          </div>
                          <div className="mt-4">
                            <button className="btn btn-sm btn-info">
                              <i class="fa fa-cart-plus" aria-hidden="true"></i>
                            </button>
                         </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mx-2">
                      <img src={product4} class="card-img-top slide-card-img" alt="..."/>
                      <div class="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5 class="card-title">Library Stool Chair</h5>
                            <p class="card-text">$20</p>
                          </div>
                          <div className="mt-4">
                            <button className="btn btn-sm btn-info">
                              <i class="fa fa-cart-plus" aria-hidden="true"></i>
                            </button>
                         </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mx-2">
                      <img src={product5} class="card-img-top slide-card-img" alt="..."/>
                      <div class="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5 class="card-title">Library Stool Chair</h5>
                            <p class="card-text">$20</p>
                          </div>
                          <div className="mt-4">
                            <button className="btn btn-sm btn-info">
                              <i class="fa fa-cart-plus" aria-hidden="true"></i>
                            </button>
                         </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mx-2">
                      <img src={product6} class="card-img-top slide-card-img" alt="..."/>
                      <div class="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5 class="card-title">Library Stool Chair</h5>
                            <p class="card-text">$20</p>
                          </div>
                          <div className="mt-4">
                            <button className="btn btn-sm btn-info">
                              <i class="fa fa-cart-plus" aria-hidden="true"></i>
                            </button>
                         </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mx-2">
                      <img src={product7} class="card-img-top slide-card-img" alt="..."/>
                      <div class="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5 class="card-title">Library Stool Chair</h5>
                            <p class="card-text">$20</p>
                          </div>
                          <div className="mt-4">
                            <button className="btn btn-sm btn-info">
                              <i class="fa fa-cart-plus" aria-hidden="true"></i>
                            </button>
                         </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mx-2">
                      <img src={product8} class="card-img-top slide-card-img" alt="..."/>
                      <div class="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5 class="card-title">Library Stool Chair</h5>
                            <p class="card-text">$20</p>
                          </div>
                          <div className="mt-4">
                            <button className="btn btn-sm btn-info">
                              <i class="fa fa-cart-plus" aria-hidden="true"></i>
                            </button>
                         </div>
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

export default SlideOrders;
