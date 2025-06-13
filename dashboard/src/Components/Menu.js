import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom'
// 2 variables of useState
const Menu = ()=>{
  const[selectMenu,setSelectMenu] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
     const handleMenuClick = (index) => {
        setSelectMenu(index);
      
     }
     const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
     }
     //menu and menu selected are used for styling in index.css
     const menu = "menu";
     const activeMenu = "menu selected";

 return(
         <div className='menu-container'>
           <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
          
           <div className='menus'>
            <ul>
            <li>
                <Link style={{textDecoration:"none"}} to="/" onClick={() => handleMenuClick(0)}>
            <p className={selectMenu === 0 ? activeMenu : menu}>Dashboard</p>
            </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleMenuClick(1)}>
            <p className={selectMenu===1 ?activeMenu:menu}>Orders</p>
            </Link>
            </li>
            <li>
               <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleMenuClick(2)}>
            <p className={selectMenu===2 ?activeMenu:menu}>Holdings</p>
            </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuClick(3)}>
            <p className={selectMenu===3 ?activeMenu:menu}>Positions</p>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuClick(4)}>
              <p className={selectMenu===4 ?activeMenu:menu}>Funds</p>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleMenuClick(5)}>
              <p className={selectMenu===5 ?activeMenu:menu}>Apps</p>
              </Link>
            </li>
            
          </ul>
             <hr />
        <div className="profile" onClick={toggleDropdown}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
           </div>
         </div>
 )
}
export default Menu;
