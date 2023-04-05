import React, { useState, useEffect } from "react"
import "./Meme.css"
// import memedata from "./memedata"

function Meme() {
  const [image, setImage] = useState([])
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
    randomImage: " https://i.imgflip.com/2896ro.jpg",
  })
  console.log("rendered")
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setImage(data.data.memes))
  }, [])

  function getImage(e) {
    e.preventDefault()
    const randomNumber = Math.floor(Math.random() * image.length)
    console.log("randomnumber", randomNumber)
    let url = image[randomNumber].url
    console.log("url", url)
    setFormData((prevFormData) => ({ ...prevFormData, randomImage: url }))
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }
  return (
    <div className="meme_div">
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
      </main>
      <div className="image-div">
        <h1 className="image-div-text topText">{formData.topText}</h1>
        <img className="img-display" src={formData.randomImage} alt="" />
        <h1 className="image-div-text bottomText">{formData.bottomText}</h1>
      </div>
    </div>
  )
}
export default Meme
