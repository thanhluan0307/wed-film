import { Link } from "react-router-dom";
import {FaHome,FaQrcode,FaRegFutbol,FaSearch,FaSwatchbook,FaTv, FaUser} from 'react-icons/fa'
function Header() {
    return ( 
        <div className="h-104 bg-black bg-opacity-25">
            <div className="flex justify-between px-12  text-gray-600 border-b-2 border-gray-600">
                <ul className="nav flex flex-1 items-cente">
                    <li className="flex justify-center items-center hover:text-gray-800"><Link className="p-6" to='/'>logo</Link></li>
                    <li className="flex justify-center items-center hover:text-gray-800"><Link className="p-6" to='/'><FaHome className='inline-block pr-2 text-5xl'/>Trang chủ</Link></li>
                    <li className="flex justify-center items-center hover:text-gray-800"><Link className="p-6" to='/'><FaTv className='inline-block pr-2 text-5xl'/>Truyền hình</Link></li>
                    <li className="flex justify-center items-center hover:text-gray-800"><Link className="p-6" to='/'><FaSwatchbook className='inline-block pr-2 text-5xl'/>HBO GO</Link></li>
                    <li className="flex justify-center items-center hover:text-gray-800"><Link className="p-6" to='/'><FaRegFutbol className="inline-block pr-2 text-5xl"/>Bóng đá</Link></li>
                </ul>
                <ul className="flex items-center">
                    <li className="p-6 ml-1 hover:cursor-pointer hover:text-gray-800"><FaSearch/></li>
                    <li className="p-6 ml-1 hover:cursor-pointer hover:text-gray-800"><FaQrcode/></li>
                    <li className="p-6 ml-1 hover:cursor-pointer hover:text-gray-800"><FaUser/></li>
                </ul>
            </div>
            <ul className="subnav flex ml-40 ">
                <li><Link className="p-6 inline-block" to="/">Tin Tức</Link></li>
                <li><Link className="p-6 inline-block" to="/">Phim Bộ</Link></li>
                <li><Link className="p-6 inline-block" to="/">Phim Điện Ảnh</Link></li>
                <li><Link className="p-6 inline-block" to="/">VIP</Link></li>
                <li><Link className="p-6 inline-block" to="/">TV Show</Link></li>
                <li><Link className="p-6 inline-block" to="/">Thiếu nhi</Link></li>
                <li><Link className="p-6 inline-block" to="/">Hot</Link></li>
            </ul>
        </div>
     );
}

export default Header;