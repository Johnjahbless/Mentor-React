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