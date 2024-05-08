import React from 'react'
import './logo.css';

const Logo = () => {
    const hadleToggleSideBar =() =>{
        document.body.classList.toggle('toggle-sidebar');
    };
  return (
    <div className='d-flex align-items-center justify-content-between'>
        <a href="/" className='logo d-flex align-items-center'>
            {/* <img src='' alt=''></img> */}
            <span>IjanDashboard</span>
        </a>
        <i
          className='bi bi-list toggle-sidebar-btn'
          onClick={hadleToggleSideBar}>
        </i>
    </div>
   
  )
}

export default Logo;
