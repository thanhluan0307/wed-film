import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/slider";


function Layout({children}) {
    return ( 
        <div>
            <Header/>
            <div className="contaier">
                <Slider/>
                <div>{children}</div>
            </div>
            <Footer/>
        </div>
     );
}

export default Layout;