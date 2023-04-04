import React, { useState } from "react"
import memedata from "./memedata"

function Meme() {
  const [image, setImage] = useState("")
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
  })

  function getImage(e) {
    e.preventDefault()
    let data = memedata.data.memes
    const randomNumber = Math.floor(Math.random() * data.length)
    setImage(data[randomNumber].url)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }
  return (
    <div>
      <main>
        <input
          type="text"
          name="topText"
          value={formData.topText}
          onChange={handleChange}
          placeholder="Top Text"
        />
        <input
          type="text"
          name="bottomText"
          value={formData.bottomText}
          onChange={handleChange}
          placeholder="Bottom Text"
        />
        <button className="meme-button" onClick={getImage}>
          Get The Images
        </button>
        <div>
          <img className="img-display" src={image} alt="" />
          <h1>{formData.topText}</h1>
          <h1>{formData.bottomText}</h1>
        </div>
      </main>
    </div>
  )
}
export default Meme
