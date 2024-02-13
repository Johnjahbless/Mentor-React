import { Link, Navigate, useNavigate } from "react-router-dom"


export const Login = () => {

    const handleSumbit = e => {
        e.preventDefault();

        sessionStorage.setItem("__session", "login");
       window.location = "/dashboard";

    }

    return (
        <div className="app-contant">
        <div className="bg-white">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-sm-6 col-lg-5 col-xxl-3  align-self-center order-2 order-sm-1">
                        <div className="d-flex align-items-center h-100-vh">
                            <div className="login p-50">
                                <h1 className="mb-2">Welcome to Nocveel</h1>
                                <p>Welcome back, please login to your account.</p>
                                <form onSubmit={handleSumbit} className="mt-3 mt-sm-5">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="control-label">User Name*</label>
                                                <input type="text" className="form-control" placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="control-label">Password*</label>
                                                <input type="password" className="form-control" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-block d-sm-flex  align-items-center">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                                    <label className="form-check-label" for="gridCheck">
                                                        Remember Me
                                                    </label>
                                                </div>
                                                <a href="javascript:void(0);" className="ml-auto">Forgot Password ?</a>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <button type="submit" className="btn btn-primary text-uppercase">Sign In</button>
                                        </div>
                                        <div className="col-12  mt-3">
                                            <p>Don't have an account ?<Link to="/auth/register"> Sign Up</Link></p>
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