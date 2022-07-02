import React from 'react';
import {OrdersData} from "../../OrdersJson";

function Orders(props) {

  return(
    <>
            <section className="order-sec">
            <div className="container py-4">
              <div className="row justify-content-center">
              <h1 className="text-center">Our product</h1>
                <div className="col-lg-12">
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <ul className="nav">
                          <li className="nav-item">
                            <a className="nav-link active" href="#">All</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Newest</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Trending</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Best Seller</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Featured</a>
                          </li>
                        </ul>
                    </div>
                  </div>
                <div className="row justify-content-center">
                {OrdersData ?
                Object.entries(OrdersData).map((item) => (
                <div className="col-lg-3 mt-4" key={item[1].id}>
                    <div className="card">
                      <img src={item[1].image} className="card-img-top" alt="order-img"/>
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
                  </div>
                
                    ) ) : 
                    <div className="row justify-content-center pt-4">
                    <div className="col-lg-12">
                      <div className="noprogramAdded text-center bg-white border shadow p-5">
                          <h2 className="noTaskAdded">Coming Soon</h2>
                          <span>We'll notify you as soon as something becomes available.</span>
                      </div>
                    </div>
                    </div>}
                 
                  </div>

                  </div>

                </div>
            </div>
            </section>
        </>
  );

}

export default Orders;
