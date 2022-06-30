import React from 'react';
import Orders from "../../components/Orders/Orders";
import Testimonials from "../../components/Testimonials/Testimonials";
import SlideOrders from "../../components/SlideOrders/SlideOrders";
import banner from "../../assets/banner.png";
// import banner2 from "../../assets/b2.jpg";
// import banner3 from "../../assets/b3.jpg";
// import banner4 from "../../assets/b4.jpg";


function Home(props) {


  return(
    <>
      <section className="banner-sec bg-light">
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="banner-text-sec">
              <h5>WELCOME TO CHAIRY</h5>
              <h1 className="banner-text">Best Furniture Collection For Your Interior</h1>
              <button className="btn btn-primary mt-2">Shop Now <i class="fa fa-arrow-right ml-3" aria-hidden="true"></i></button>
              </div>
            </div>
           
            <div className="col-lg-6">
              <img src={banner} alt="banner-img" className="img-fluid" />
            </div>
            <div className="discount">
                <h1>54 %</h1>
                <span>Discount</span>
              </div>
        </div>
      </div>
    </section>

    <SlideOrders/>
    
    <Orders/>

    <Testimonials/>

    <SlideOrders/>

    </>
  );

}

export default Home;
