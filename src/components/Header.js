import React from "react"
import "./Meme.css"

function Header() {
  return (
    <div className="header">
      <img
        className="header--image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScImjmkngwkjoGBp58QyJmC7SNlI8pKT-7bQ&usqp=CAU
        "
        alt="logo"
      />
      <h1 className="header--title">Meme Generator</h1>
    </div>
  )
}
export default Header
