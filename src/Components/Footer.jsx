export const Footer = () => {


    return(
         
        <footer className="footer">
        <div className="row">
            <div className="col-12 col-sm-6 text-center text-sm-left">
                <p>&copy; Copyright {new Date().getFullYear()}. All rights reserved.</p>
            </div>
            <div className="col  col-sm-6 ml-sm-auto text-center text-sm-right">
                <p><a target="_blank" href="https://www.Nocveel.com">Nocveel</a></p>
            </div>
        </div>
    </footer>
    )
}