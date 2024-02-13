import { Link } from "react-router-dom";
import { Footer } from "./Footer"
import Select from 'react-select';



export const Dashboard = () => {


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
                                                    <h1>Nocveel Escrow Web Payment</h1>
                                                </div>
                                                <div className="ml-auto d-flex align-items-center">
                                                    <nav>
                                                        <ol className="breadcrumb p-0 m-b-0">
                                                            <li className="breadcrumb-item">
                                                                <a href="/"><i className="ti ti-home"></i></a>
                                                            </li>
                                                            <li className="breadcrumb-item">
                                                                Dashboard
                                                            </li>

                                                        </ol>
                                                    </nav>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-xxl-6 mb-30">
                                            <div className="card card-statistics h-100 mb-0 currency-price">
                                                <div className="card-header d-flex justify-content-between">
                                                    <div className="card-heading">
                                                        <button className="btn btn-primary text-uppercase mt-3" data-toggle="modal" data-target="#addModal">+ Add Transaction</button>
                                                    </div>
                                                    <div className="dropdown">
                                                        <a className="p-2" href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="ti ti-more-alt"></i>
                                                        </a>

                                                    </div>
                                                </div>
                                                <div className="card-body pt-0">
                                                    <div className="tab nav-border-bottom">


                                                        <div className="tab-content">
                                                            <div className="tab-pane fade active show pt-3" id="home-02" role="tabpanel" aria-labelledby="home-02-tab">
                                                                <div className="row">

                                                                    <div className="card-body">
                                                                        <ul className="activity">
                                                                            <li className="activity-item success">
                                                                                <div className="activity-info">
                                                                                    <h5 className="mb-0">Transaction Started <span className="badge badge-success-inverse">Active</span></h5>
                                                                                    <span>John</span> | <span>10:30AM Jan 26 2023</span>  
                                                                                </div>
                                                                            </li>
                                                                            <li className="activity-item warning">
                                                                                <div className="activity-info">
                                                                                    <h5 className="mb-0">Make Payment <span className="badge badge-warning-inverse">In progress</span></h5>
                                                                                    <span>John</span> | <span>10:30AM Jan 26 2023</span>  
                                                                                </div>
                                                                            </li>
                                                                            <li className="activity-item info">
                                                                                <div className="activity-info">
                                                                                    <h5 className="mb-0">Seller Approve Transaction <span className="badge badge-info-inverse">Completed</span></h5>
                                                                                    <span>John</span> | <span>10:30AM Jan 26 2023</span>  
                                                                                </div>
                                                                            </li>
                                                                            <li className="activity-item info">
                                                                                <div className="activity-info">
                                                                                    <h5 className="mb-0">Influencer Approve Transaction <span className="badge badge-info-inverse">Completed</span></h5>
                                                                                    <span>John</span> | <span>10:30AM Jan 26 2023</span>  
                                                                                </div>
                                                                            </li>
                                                                            <li className="activity-item warning">
                                                                                <div className="activity-info">
                                                                                    <h5 className="mb-0">Confirmed Payment <span className="badge badge-warning-inverse">In progress</span></h5>
                                                                                    <span>John</span> | <span>10:30AM Jan 26 2023</span>  <Link to={"/workspace/12345"} className="btn-primary badge badge-primary">view</Link>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 mb-30">
                                            <div className="card card-statistics h-100 mb-0">
                                                <div className="card-header d-flex justify-content-between">
                                                    <div className="card-heading">
                                                        <h4 className="card-title">Trade History</h4>
                                                    </div>
                                                    <div className="dropdown">
                                                        <a className="p-2" href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="ti ti-more-alt"></i>
                                                        </a>
                                                        <div className="dropdown-menu custom-dropdown dropdown-menu-right p-4">
                                                            <h6 className="mb-1">Export</h6>
                                                            <a className="dropdown-item" href="#!"><i className="fa-fw fa fa-file-pdf-o pr-2"></i>Export to PDF</a>
                                                            <a className="dropdown-item" href="#!"><i className="fa-fw fa fa-file-excel-o pr-2"></i>Export to CSV</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0">
                                                    <div className="tab nav-border-bottom">
                                                        <ul className="nav nav-tabs nav-fill" role="tablist">
                                                            <li className="nav-item">
                                                                <a className="nav-link active show" id="home-01-tab" data-toggle="tab" href="#home-01" role="tab" aria-controls="home-01" aria-selected="true">
                                                                    <b>Buying</b> </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" id="profile-01-tab" data-toggle="tab" href="#profile-01" role="tab" aria-controls="profile-01" aria-selected="false"><b>Selling</b> </a>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content">
                                                            <div className="tab-pane table-responsive fade active show" id="home-01" role="tabpanel" aria-labelledby="home-01-tab">
                                                                <table className="table table-borderless crypto-table mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Price per Item</th>
                                                                            <th scope="col">Amount</th>
                                                                            <th scope="col">Date</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>$4948.89 </td>
                                                                            <td>0.123</td>
                                                                            <td>12/01/2018</td>
                                                                        </tr>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="tab-pane table-responsive fade" id="profile-01" role="tabpanel" aria-labelledby="profile-01-tab">
                                                                <table className="table table-borderless crypto-table mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Price per Item</th>
                                                                            <th scope="col">Amount</th>
                                                                            <th scope="col">Date</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>$2248.89 </td>
                                                                            <td>0.143</td>
                                                                            <td>12/02/2018</td>
                                                                        </tr>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row crypto-currency">
                                        <div className="col-lg-12">
                                            <div className="card card-statistics crypto-currency">
                                                <div className="card-header d-flex justify-content-between">
                                                    <div className="card-heading">
                                                        <h4 className="card-title">Recent Exchange Operation</h4>
                                                    </div>
                                                    <div className="dropdown">
                                                        <a className="p-2 export-btn" href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Export
                                                        </a>
                                                        <div className="dropdown-menu custom-dropdown dropdown-menu-right p-4">
                                                            <a className="dropdown-item" href="#!"><i className="fa-fw fa fa-file-pdf-o pr-2"></i>Export to PDF</a>
                                                            <a className="dropdown-item" href="#!"><i className="fa-fw fa fa-file-excel-o pr-2"></i>Export to CSV</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="datatable-wrapper table-responsive">
                                                        <table id="datatable" className="table table-borderless crypto-table w-100">
                                                            <thead className="bg-light">
                                                                <tr>
                                                                    <th>Currency</th>
                                                                    <th>Balance</th>
                                                                    <th>Buying rate</th>
                                                                    <th>Current rate</th>
                                                                    <th>Profit/ loss</th>
                                                                    <th>Last Price</th>
                                                                    <th>Graph</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><i className="crypto crypto-act text-warning"></i></td>
                                                                    <td>134.45</td>
                                                                    <td>$12,500</td>
                                                                    <td>$13,624</td>
                                                                    <td><span className="d-block">5.487% <i className="fa fa-sort-asc text-success font-18"></i></span>
                                                                    </td>
                                                                    <td>$9,800.55</td>
                                                                    <td>
                                                                        <div className="progress my-3" style={{ height: "4px" }}>
                                                                            <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
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
            <div className="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add A Transaction</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for="modelemail">Product Name</label>
                                    <input type="text" className="form-control" id="modelemail" />
                                </div>

                                <div className="form-group">
                                    <label for="modelemail">Product Description</label>
                                    <textarea type="text" className="form-control"> </textarea>
                                </div>

                                <div className="form-group">
                                    <label for="modelemail">Product Address</label>
                                    <textarea type="text" className="form-control"> </textarea>
                                </div>

                                <div className="form-group">
                                    <label for="modelpass">Product Amount</label>
                                    <input type="number" className="form-control" id="modelpass" />
                                </div>

                                <div className="form-group">
                                    <label for="modelpass">Add Team</label>
                                    <p>Seller</p>
                                    <Select
                                        placeholder="Search Seller"
                                        name="search"
                                        options={[{ label: 'John Kolo', value: 1 }, { label: 'John Doe', value: 2 }, { label: 'Nnamdi Okafor', value: 3 }, { label: 'Mary Shantel', value: 3 },]}

                                        onChange={{}}
                                    />

                                    <p>Influencer</p>
                                    <Select
                                        placeholder="Search Influencer"
                                        name="search"
                                        options={[{ label: 'John Kolo', value: 1 }, { label: 'John Doe', value: 2 }, { label: 'Nnamdi Okafor', value: 3 }, { label: 'Mary Shantel', value: 3 },]}

                                        onChange={{}}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">CREATE A WORKSPACE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}