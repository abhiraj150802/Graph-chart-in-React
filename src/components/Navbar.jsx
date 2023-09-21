

import {FaInstagramSquare,FaGithubSquare, FaLinkedinIn} from "react-icons/fa"
import { NavLink} from "react-router-dom"
// import { Outlet} from "react-router-dom"

const Navbar = () => {
  return (
    <>
      
      <nav className="main_nav">
         <div className="logo">
             <h2>
                <span>A</span>bhiraj <span>R</span>aj
             </h2>
         </div>
         <div className="menu">
                  <nav>
                  <ul>
                      <li> <NavLink to="/"> Home</NavLink></li>
                      <li> <NavLink to="/barchart">barchart</NavLink></li>
                      <li> <NavLink to="/linechart">LineChart</NavLink></li>
                      <li><NavLink to="/contact"> PieChart</NavLink></li>
                  </ul>
                  </nav>
            {/* <Outlet/> */}
         </div>
         <div className="social_meida">
             <ul className="social_meida_desktop">
             <li>
             <a href="https://www.linkedin.com/in/abhiraj-raj-b62105212/" target="_blanck"><FaLinkedinIn/></a>
             </li>
             <li>
             <a href="https://www.youtube.com" target="_blanck"><FaInstagramSquare/></a>
             </li>
             <li>
             <a href="https://www.youtube.com" target="_blanck"><FaGithubSquare/></a>
             </li>
                
             </ul>
         </div>
      </nav>
    </>
  )
}

export default Navbar
