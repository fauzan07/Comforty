import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Login.css';


function Login(props) {

  return(
    <section className="auth py-5">
    <div className="authentication">
    <div className="container-fluid">
        <div className="row justify-content-center">
       
            <div className="col-md-6 col-lg-6 border shadow bg-white p-5">
                <div className="">
                <h2 className="text-center">Sign In</h2>
                    <div className="form-group">
                        {/* <label htmlFor="email">Email address</label> */}
                        <input type="text" className="form-control" id="email" name="email" placeholder="Enter a email" />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="password">Password</label> */}
                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter a password"/>
                    </div>
                    <div className="d-flex justify-content-between">
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                      <label class="form-check-label" for="exampleCheck1"><p>Remember me</p></label>
                    </div>
                    <div>
                      <p><a href="">Forget password</a></p>
                    </div>

                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Sign In</button>
                    </div>
                    {/* <div className="or py-3">
                    <h3><span>or</span></h3>
                    </div> */}
                    <div className="row pt-3 justify-content-center">
                      <div className="col-lg-8 text-center">
                      <p>Don't have account? <Link className="a-link" to="/signup">Sign Up</Link></p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>




  );

}

export default withRouter(Login);
