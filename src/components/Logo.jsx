import React from 'react'

const Logo = () => {
    return (
        <div className="logo-container" aria-label="Logo container">
        <a href="#" className="logo" aria-label="Go to homepage">
          <img
            src="src\assets\icons\logo.svg"
            alt="Insta-spot logo and home-page link"
          />
          {/* <span className="logo-text">SPOTS</span> */}
        </a>
      </div>
    )
}

export default Logo;