import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {OrdersData} from "../../OrdersJson";


function SlideOrders(props) {


  const state= {
    responsive:{
        0: {
            items: 1,
        },
        450: {
            items: 4,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
        },
    },
}


  return(
    <>
      
      <section className="here-from-section pt-5">
      <div className="container">
          <div className="row justify-content-md-center py-4">
              <div className="col-lg-12">
                  <h1 className="head-text mr-3 mb-4">Features products</h1>
                  <OwlCarousel className='owl-theme mb-4' responsive={state.responsive} loop nav dots={false}>
                  {Object.entries(OrdersData).map((item) => (
                    <div className="card item mx-2" key={item[1].id}>
                      <img src={item[1].image} className="card-img-top slide-card-img" alt="order-image"/>
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5 className="card-title">{item[1].name}</h5>
                            <p className="card-text">{item[1].price}</p>
                          </div>
                          <div className="mt-4">
                            <button className="btn btn-sm btn-info">
                              <i className="fa fa-cart-plus" aria-hidden="true"></i>
                            </button>
                         </div>
                        </div>
                      </div>
                    </div>
                  ))}
                    </OwlCarousel>
              </div>
          </div>
      </div>
      </section>
        </>
  );

}

export default SlideOrders;
