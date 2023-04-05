import React from "react"
import "./Header.css"

function Header() {
  return (
    <div className="header_main">
      <img
        className="header_image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScImjmkngwkjoGBp58QyJmC7SNlI8pKT-7bQ&usqp=CAU
        "
        alt="logo"
      />
      <h1 className="header_text">Meme Generator</h1>
    </div>
  )
}
export default Header
