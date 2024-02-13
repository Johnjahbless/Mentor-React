import { Link } from "react-router-dom";
import { Footer } from "./Footer"
import Select from 'react-select';



export const Workspace = () => {


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
                                        <h1>WorkSpace</h1>
                                    </div>
                                    <div className="ml-auto d-flex align-items-center">
                                        <nav>
                                            <ol className="breadcrumb p-0 m-b-0">
                                                <li className="breadcrumb-item">
                                                    <Link to="/">
                                                        <i className="ti ti-home"></i>
                                                    </Link>
                                                </li>
                                                <li aria-current="page" className="breadcrumb-item active text-primary">
                                                    WorkSpace
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="row">
                            <div className="col-12">
                                <div className="card card-statistics">
                                    <div className="card-body p-0">
                                        <div className="row no-gutters">
                                            <div className="col-xl-4 col-xxl-3">
                                                <div className="app-chat-sidebar border-right border-md-n h-100">
                                                    <div className=" px-4 pb-4 pt-4 border-bottom">
                                                        <div>
                                                        <Link to="/payment/12345" className="btn btn-primary" style={{width: '100%'}}>  <i className="fa fa-credit-card">
                                                                    </i> Make Payment </Link>
                                                          
                                                        </div>
                                                    </div>
                                                    <div className="app-chat-sidebar-user scrollbar scroll_dark">
                                                        <div className="app-chat-sidebar-user-item">
                                                            <a href="javascript:void(0)">
                                                                <div className="d-flex active">
                                                                    <div>
                                                                        <div className="bg-img">
                                                                            <img className="img-fluid" src="/assets/img/avtar/01.jpg" alt="user" />
                                                                            <i className="bg-img-status bg-success"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <h5 className="mb-0">John Doe</h5>
                                                                        <p className="text-white"><span><i className="zmdi zmdi-check mr-2"></i></span>Started a transaction</p>
                                                                        <div className="d-xl-none">
                                                                            <small>Just now</small>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ml-auto text-right d-none d-xl-block">
                                                                        <small>Just now</small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="app-chat-sidebar-user-item">
                                                            <a href="javascript:void(0)">
                                                                <div className="d-flex">
                                                                    <div className="bg-img">
                                                                        <img className="img-fluid" src="/assets/img/avtar/01.jpg" alt="user"/>
                                                                    </div>
                                                                    <div>
                                                                        <h5 className="mb-0">John Doe</h5>
                                                                        <p><span><i className="zmdi zmdi-check mr-2"></i></span>Added a Team</p>
                                                                        <small className="d-xl-none">yesterday</small>
                                                                    </div>
                                                                    <div className="ml-auto text-right d-none d-xl-block">
                                                                        <small>yesterday</small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="app-chat-sidebar-user-item">
                                                            <a href="javascript:void(0)">
                                                                <div className="d-flex">
                                                                    <div className="bg-img">
                                                                        <img className="img-fluid" src="/assets/img/avtar/01.jpg" alt="user"/>
                                                                        <i className="bg-img-status bg-success"></i>
                                                                    </div>
                                                                    <div>
                                                                        <h5 className="mb-0">John Doe </h5>
                                                                        <p><span><i className="zmdi zmdi-check-all mr-2"></i></span>Made Payment</p>
                                                                        <div className="d-xl-none">
                                                                            <small>30 Aug</small>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ml-auto text-right d-none d-xl-block">
                                                                        <small>30 Aug</small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="app-chat-sidebar-user-item">
                                                            <a href="javascript:void(0)">
                                                                <div className="d-flex">
                                                                    <div className="bg-img">
                                                                        <img className="img-fluid" src="/assets/img/avtar/02.jpg" alt="user"/>
                                                                        <i className="bg-img-status bg-danger"></i>
                                                                    </div>
                                                                    <div>
                                                                        <h5 className="mb-0">Brianing Leyon</h5>
                                                                        <p><span><i className="zmdi zmdi-check mr-2"></i></span> Approve team request</p>
                                                                        <div className="d-xl-none">
                                                                            <small>25 Aug</small> 
                                                                        </div>
                                                                    </div>
                                                                    <div className="ml-auto text-right d-none d-xl-block">
                                                                        <small>25 Aug</small> 
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="app-chat-sidebar-user-item">
                                                            <a href="javascript:void(0)">
                                                                <div className="d-flex">
                                                                    <div>
                                                                        <div className="bg-img">
                                                                            <img className="img-fluid" src="/assets/img/avtar/03.jpg" alt="user"/>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <h5 className="mb-0">Adrianing Leyon</h5>
                                                                        <p><span><i className="zmdi zmdi-check mr-2"></i></span>Approve Team Request</p>
                                                                        <small className="d-xl-none">20 Aug</small>
                                                                    </div>
                                                                    <div className="ml-auto text-right d-none d-xl-block">
                                                                        <small>20 Aug</small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                       
                                                  
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-8 col-xxl-9 border-md-t">
                                                <div className="app-chat-msg">
                                                    <div className="d-flex align-items-center justify-content-between p-3 px-4 border-bottom">
                                                        <div className="app-chat-msg-title">
                                                            <h4 className="mb-0">Phone Transaction Workspace</h4>
                                                            <p className="text-success">
                                                                Active
                                                            </p>
                                                        </div>
                                                        <div className="app-chat-msg-btn">
                                                            <a className="font-20 text-muted btn" href="javascript:void(0)">
                                                                <i className="fa fa-video-camera"></i>
                                                            </a>
                                                        
                                                        </div>
                                                    </div>
                                                    <div className="scrollbar scroll_dark app-chat-msg-chat p-4">
                                                        <div className="chat">
                                                            <div className="chat-img">
                                                                <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)">
                                                                    <div className="bg-img">
                                                                        <img className="img-fluid" src="/assets/img/avtar/01.jpg" alt="user"/>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="chat-msg">
                                                                <div className="chat-msg-content">
                                                                    <p>John Started a new Transaction.</p>
                                                                    <p>Transaction was started successfully?</p>
                                                                </div>
                                                                <div className="chat-msg-content ">
                                                                    <p>John added 2 team members to this workspace</p>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="text-center py-4">
                                                            <h6>30 May</h6>
                                                        </div>
                                                        <div className="chat chat-left justify-content-end">
                                                            <div className="chat-msg">

                                                                <div className="chat-msg-content">
                                                                    <p>Mary accepted to join this workspace as a seller</p>
                                                                    <p>Mary successfully joined this workspace as a seller</p>
                                                                </div>

                                                                <div className="chat-msg-content ">
                                                                    <p>Please kindly make your Payment</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                       
                                                            <div className="chat-msg">
                                                            <div className="chat-msg-content">
                                                                    <p>Musa accepted to join this workspace as an influencer</p>
                                                                    <p>Musa successfully joined this workspace as an influencer</p>
                                                                </div>
                                                               
                                                            </div>
                                                        </div>
                                                       
                                                      
                                                  
                                                </div>
                                                <div className="app-chat-type">
                                                    <div className="input-group mb-0 ">
                                                        <div className="input-group-prepend d-none d-sm-flex">
                                                            <span className="input-group-text">
                                                                    <i className="fa fa-camera">
                                                                    </i>
                                                                </span>
                                                        </div>
                                                        <input className="form-control" placeholder="Write here..." type="text"/>
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                    <i className="fa fa-paper-plane"></i>
                                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
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
      

        </>
    )
}