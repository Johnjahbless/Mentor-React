


export const Sidebar = () => {



    return(
        <aside className="app-navbar">
        <div className="sidebar-nav scrollbar scroll_light">
            <ul className="metismenu " id="sidebarNav">
                <li className="nav-static-title">Personal</li>
                <li className="active">
                    <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                        <i className="nav-icon ti ti-rocket"></i>
                        <span className="nav-title">Dashboards</span>
                        <span className="nav-label label label-danger">9</span>
                    </a>
                    <ul aria-expanded="false">
                        <li> <a href='index.html'>Default</a> </li>
                        <li> <a href='index-ecommerce.html'>Ecommerce</a> </li>
                        <li> <a href='index-car-dealer.html'>Car Dealer</a> </li>
                        <li> <a href='index-stock-market.html'>Stock Market</a> </li>
                        <li> <a href='index-dating.html'>Dating</a> </li>
                        <li> <a href='index-job-portal.html'>Job Portal</a> </li>
                        <li> <a href='index-crm.html'>CRM</a> </li>
                        <li> <a href='index-real-estate.html'>Real Estate</a> </li>
                        <li className="active"> <a href='index-crypto-currency.html'>Crypto Currency</a> </li>
                    </ul>
                </li>
        
              
            </ul>
        </div>
        
    </aside>
    )
}