import React from 'react';
import {withRouter, NavLink} from "react-router-dom";
import './Navbar.css';

const Navbar=()=> {    

    return(
        <section className='bg-light bg-color'>
        <div className="container desktop-nav">
             <nav className="navbar navbar-expand-lg navbar-light bg-light bg-color">
                <h2 className="ml-4">Comforty</h2>
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                    <li className="nav-item">
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    </li>
                    <li className="nav-item  pl-4">
                        <div className="border">
                            <a className="nav-link" href="#"><i class="fa fa-shopping-cart mr-3" aria-hidden="true"></i>Cart</a>
                        </div>
                    </li>
                    <li className="nav-item  pl-4">
                        <div className="border">
                            <a className="nav-link" href="#"><i class="fa fa-heart" aria-hidden="true"></i></a>
                        </div>
                    </li>
                    <li className="nav-item  pl-4">
                        <div className="border">
                            <a className="nav-link" href="#"><i class="fa fa-user" aria-hidden="true"></i></a>
                        </div>
                    </li>
                </ul>
                {/* </div> */}
                </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-color">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto w-80 justify-content-start clearfix">
                    <li className="nav-item  ml-4 border p-1">
                        <a className="nav-link" href="#"><i class="fa fa-bars mr-3" aria-hidden="true"></i>All Categories</a>
                    </li>
                    <li className="nav-item  pl-4">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item  pl-4">
                        <a className="nav-link" href="#">Shop</a>
                    </li>
                    <li className="nav-item  pl-4">
                        <a className="nav-link" href="#">Product</a>
                    </li>
                    <li className="nav-item pl-4">
                        <a className="nav-link">Pages</a>
                    </li>
                    <li className="nav-item pl-4">
                        <a className="nav-link">About</a>
                    </li>
             

                </ul>
                <ul className="navbar-nav justify-content-end clearfix">
                    <li className="nav-item">
                        <a className="nav-link">Contact: (808) 555-0111</a>
                    </li>
                </ul>

                </div>
                </nav>
        </div>

        <div className="container mobile-nav">
             <nav className="navbar navbar-expand-lg navbar-light bg-light bg-color">
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h2 className="ml-4">Comforty</h2>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                    <li className="nav-item">
                    <form class="form-inline mt-3">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    </li>
                    <div className="nav-flex-mob">
                    <li className="nav-item pl-4">
                        <div className="border nav-mob-icon">
                            <a className="nav-link" href="#"><i class="fa fa-shopping-cart mr-3" aria-hidden="true"></i>Cart</a>
                        </div>
                    </li>
                    <li className="nav-item pl-4">
                        <div className="border nav-mob-icon">
                            <a className="nav-link" href="#"><i class="fa fa-heart" aria-hidden="true"></i></a>
                        </div>
                    </li>
                    <li className="nav-item pl-4">
                        <div className="border nav-mob-icon">
                            <a className="nav-link" href="#"><i class="fa fa-user" aria-hidden="true"></i></a>
                        </div>
                    </li>
                    <li className="nav-item nav-mob-icon ml-4 border p-1">
                        <a className="nav-link" href="#"><i class="fa fa-bars mr-3" aria-hidden="true"></i>All Categories</a>
                    </li>
                    </div>
                    <li className="nav-item  pl-4">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item  pl-4">
                        <a className="nav-link" href="#">Shop</a>
                    </li>
                    <li className="nav-item  pl-4">
                        <a className="nav-link" href="#">Product</a>
                    </li>
                    <li className="nav-item pl-4">
                        <a className="nav-link" href="#">Pages</a>
                    </li>
                    <li className="nav-item pl-4">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item pl-4">
                        <a className="nav-link" href="#">Contact: (808) 555-0111</a>
                    </li>
                </ul>
                </div>
                </nav>
        </div>
        </section>
    );
}



export default withRouter(Navbar);