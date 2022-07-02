import React from 'react';
import {Link} from "react-router-dom";



function Footer(props) {
  return(
    
    <>
    <footer>
             
        <section className="footer-area">
          <div className="container">
                <div className="row justify-content-center py-4">
                    <div className="col-lg-4 my-1">
                            <div className="footer-widget footer-info pb-3">
                                {/* <h4 className="widget-title pb-3">OPEN YOUR OWN KIDO POD & PRESCHOOL</h4> */}
                                <div className="global-offices">
                                  <h2 className="widget-title">Chairy</h2>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam inventore magnam dolorum sequi voluptate. Porro laboriosam veritatis, non dolor dolore nihil eveniet veniam obcaecati perferendis voluptas quisquam sequi neque!</p>
                                </div>
                                <div className="icon-info">
                                    <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f pr-3"></i></a>
                                    <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-twitter pr-3"></i></a>
                                    <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-youtube pr-3"></i></a>
                                    <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-instagram pr-3"></i></a>
                                    <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 my-1">
                            <div className="footer-widget footer-info">
                                <h4 className="widget-title pb-3">Category</h4>
                                <ul className="list-unstyled">
                                    <li><Link to="/">Sofa</Link></li>
                                    <li><Link to="/">Armchair</Link></li>
                                    <li><Link to="/">Wing Chair</Link></li>
                                    <li><Link to="/">Desk Chair</Link></li>
                                    <li><Link to="/">Wooden Chair</Link></li>
                                    <li><Link to="/">Park Bench</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 my-1">
                            <div className="footer-widget footer-info">
                                <h4 className="widget-title pb-3">Support</h4>
                                <ul className="list-unstyled">
                                    <li><Link to="/">Help &amp; Support</Link></li>
                                    <li><Link to="/">terms &amp; Conditions</Link></li>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                    <li><Link to="/">Help</Link></li>
                                </ul>
                            </div>
                           
                        </div>  
                        <div className="col-lg-4 my-1">
                            <div className="footer-widget footer-info">
                                <h4 className="widget-title pb-3">News Letter</h4>
                                <form class="form-inline mb-3">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Your Email" aria-label="Search"/>
                                    <button class="btn btn-primary btn-sm my-2 my-sm-0" type="submit">Subscribe</button>
                                </form>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor impedit deleniti est aperiam adipisci iure.</p>
                            </div>
                           
                        </div>   
                    </div>     
                </div>
        </section>
       
    </footer>
    </>
  
  );

}

export default Footer;
