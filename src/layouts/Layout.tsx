import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children}:LayoutProps) =>  {
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