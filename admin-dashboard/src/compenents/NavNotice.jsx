import React from 'react'

const NavNotice = () => {
  return (
   <li className='nav-item dropdown'>
        <a className='nav-link nav-icon' href='#' data-bs-toggle="dropdown">
            <i className='bi bi-bell'></i>
            <span className='badge bg-primary badge-number'>4</span>
        </a>

        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
            <li className='dropdown-header'>
                You have 4 new notifications
                <a href='#'>
                    <span className='badge rounded-pill bg-primary p-2 ms-2'>
                        view all
                    </span>
                </a>
            </li>
            <li>
                <hr className='dropdown-divider'></hr>
            </li>
            
            <li className='notification-item'>
                <i className='bi bi-exclamation-circle text-warning'></i>
                <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quaee dolore eatrr variety odiset</p>
                    <p>40 mins. ago</p>
                </div>
            </li>

            <li>
                <hr className='dropdown-divider'></hr>
            </li>

            <li className='notification-item'> 
                <i className='bi bi-x-circle text-danger'></i>
                <div>
                    <h4>To God be the glory</h4>
                    <p>hallleyah</p>
                    <p>1 hr. ago</p>
                </div>

            </li>
            
            <li>
                <hr className='dropdown-divider'></hr>
            </li>

            <li className='notification-item'> 
                <i className='bi bi-check-circle text-success'></i>
                <div>
                    <h4>on my way to sucess</h4>
                    <p>so fucking happy</p>
                    <p>2 hr. ago</p>
                </div>

            </li>

            <li>
                <hr className='dropdown-divider'></hr>
            </li>

            <li className='notification-item'> 
                <i className='bi bi-info-circle text-primary'></i>
                <div>
                    <h4>steading learning will </h4>
                    <p> definately give joy</p>
                    <p>3 hr. ago</p>
                </div>

            </li>

            <li>
                <hr className='dropdown-divider'></hr>
            </li>

            <li className='dropdown-footer'>
            <a href='#'>Show all notifications</a>
          </li>
        </ul>

   </li>
  )
}

export default NavNotice ;
