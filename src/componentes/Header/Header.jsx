import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Header() {
    return ( 
    <>
    <header className="bg-red-900 flex justify-between  text-white p-4">
        <span className="text-2xl"><Link to="/">Dusa Flix</Link></span>
        <Navbar/>
    </header>
    </> 
    
    );
}

export default Header;