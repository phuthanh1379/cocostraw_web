import React from 'react';
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import {AiOutlineClose} from "react-icons/all";
import {SideBarData} from "./SideBarData";
import "./NavBar.scss";
import {IconContext} from "react-icons";

class NavBar extends React.Component {
    state = {
        sidebar: false
    };

    showSideBar = () => this.setState({sidebar: !this.state.sidebar});

    render() {
        return (
            <div>
               <IconContext.Provider value={{color: "#fff"}}>
                   <div className="navbar">
                       <Link to="#" className="menu-bars">
                           <FaIcons.FaBars onClick={this.showSideBar}/>
                       </Link>
                   </div>
                   <nav className={this.state.sidebar ? "nav-menu active" : "nav-menu"}>
                       <ul className="nav-menu-items" onClick={this.showSideBar}>
                           <li className="navbar-toggle">
                               <Link to="#" className="menu-bars">
                                   <AiOutlineClose/>
                               </Link>
                           </li>
                           {SideBarData.map((item, index) => {
                               return (
                                   <li key={index} className={item.cName}>
                                       <Link to={item.path}>
                                           {item.icon} <span>{item.title}</span>
                                       </Link>
                                   </li>
                               );
                           })}
                       </ul>
                   </nav>
               </IconContext.Provider>
            </div>
        );
    }
}

export default NavBar;
