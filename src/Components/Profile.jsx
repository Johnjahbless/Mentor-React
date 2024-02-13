import { Link } from "react-router-dom";
import { Footer } from "./Footer"
import Select from 'react-select';



export const Profile = () => {


    return (
        <>




            <div>
                <div className="app">

                    <div className="app-wrap">

                        <div className="app-container">

                            <div className="app-main" id="main">

                                <div className="container-fluid">
                                <div className="row">
                            <div className="col-md-12 m-b-30">
                                <div className="d-block d-sm-flex flex-nowrap align-items-center">
                                    <div className="page-title mb-2 mb-sm-0">
                                        <h1>Profile</h1>
                                    </div>
                                    <div className="ml-auto d-flex align-items-center">
                                        <nav>
                                            <ol className="breadcrumb p-0 m-b-0">
                                                <li className="breadcrumb-item">
                                                    <Link to="/"><i className="ti ti-home"></i></Link>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    Profile
                                                </li>
                                               
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                                <div className="row widget-social">
                            <div className="col-xl-4 col-md-6">
                                <div className="card card-statistics widget-social-box1 px-2">
                                    <div className="card-body pb-3 pt-4">
                                        <div className="text-center">
                                            <div className="pt-1 bg-img m-auto"><img className="img-fluid" src="/assets/img/avtar/01.jpg" alt="socialwidget-img"/></div>
                                            <div className="mt-3">
                                                <h4 className="mb-1">John Doe</h4>
                                                <p className="mb-0 text-muted"><a href="javascript:void(0)">Influencer</a></p>
                                                {/* <button className="btn btn-primary mt-3">+ Follow</button> */}
                                                <ul className="nav justify-content-between mt-4 px-3 py-2">
                                                    <li className="flex-fill">
                                                        <h3 className="mb-0">1,150</h3>
                                                        <p>Transactions</p>
                                                    </li>
                                                    <li className="flex-fill">
                                                        <h3 className="mb-0">N700.00</h3>
                                                        <p>Wallet balance</p>
                                                    </li>
                                                  
                                                </ul>
                                                <button className="btn btn-primary mt-3" data-toggle="modal" data-target="#withdrawModal"> Withdraw</button>
                                                {/* <p className="mt-3">Since there is not an "all the above" category, I'll take the opportunity to enthusiastically congratulate you on the very high quality, "user-friendly" documentation.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>


                       

                                </div>

                            </div>

                        </div>
                        <Footer />

                    </div>

                </div>


            </div>
            <div className="modal fade" id="withdrawModal" tabindex="-1" role="dialog" aria-labelledby="withdrawModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Withdraw funds</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                               

                                <div className="form-group">
                                    <label for="modelpass">Amount to Withdraw</label>
                                    <input type="number" className="form-control" id="modelpass" />
                                </div>

                           

                                <button type="submit" className="btn btn-primary">WITHDRAW</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}