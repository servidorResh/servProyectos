import React from "react"

const Navbar = ({brand}) => {
    return(
        <nav className="navbar bg-success bg-opacity-20">
      <div className='container justify-content-center text-uppercase'>
        <a className="navbar-brand text-white fw-bold" href="/">{brand}</a>
      </div>
    </nav>
    )
}
export default Navbar