import React from "react";

const Navigation = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-light'>

      <button 
      className='navbar-toggler ms-auto'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#navbarNav'
      aria-controls='navbarNav'
      aria-expanded='false'
      aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarNav'>

        <ul className='navbar-nav custom-nav'>
          <li className='nav-item'>
            <a className='nav-link active' aria-current='page' href='#udalosti'>Události</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#navod'>Návod</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#tipy'>Tipy</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#ome'>O mě</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#kontakt'>Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>

    )
}

export default Navigation;