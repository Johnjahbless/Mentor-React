import { Link } from "react-router-dom"




export const Register = () => {



    return (
        <div className="app-contant">
        <div className="bg-white">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-sm-6 col-lg-5 col-xxl-3  align-self-center order-2 order-sm-1">
                        <div className="d-flex align-items-center h-100-vh">
                            <div className="register p-5">
                                <h1 className="mb-2">Welcome to Nocveel</h1>
                                <p>Welcome, Please create your account.</p>
                                <form className="mt-2 mt-sm-5">
                                    <div className="row">
                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <label className="control-label">First Name*</label>
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <label className="control-label">Last Name*</label>
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="control-label">Email*</label>
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                        <div className="form-group">
                                        <label className="control-label">Individual Type*</label>

                                                    <select className="js-basic-single form-control" name="state">
                                                        
                                                            <option value="1">Buyer</option>
                                                            <option value="2">Seller</option>
                                                            <option value="3">Influencer</option>
                                                        </select>
                                        </div>
                                        </div>

                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <label className="control-label">Password*</label>
                                                <input type="password" className="form-control" placeholder="Password" />
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <label className="control-label">Confirm Password*</label>
                                                <input type="password" className="form-control" placeholder="Confirm Password" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                                <label className="form-check-label" for="gridCheck">
                                                    I accept terms & policy
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <a href="auth-login.html" className="btn btn-primary text-uppercase">Sign up</a>
                                        </div>
                                        <div className="col-12  mt-3">
                                            <p>Already have an account ?<Link to="/auth/login"> Sign In</Link></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xxl-9 col-lg-7 bg-gradient o-hidden order-1 order-sm-2">
                        <div className="row align-items-center h-100">
                            <div className="col-7 mx-auto ">
                                <img className="img-fluid" src="/assets/img/bg/login.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}