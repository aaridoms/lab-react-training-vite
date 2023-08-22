import { useState } from "react"

export default function LikeButton() {

  const colorsArr = ["purple", "blue", "green", "yellow", "orange", "red"]

  const [counter, setCounter] = useState(0)
  const [color, setColor] = useState(colorsArr[0])
  
  const buttonStyle = {
    backgroundColor: color,
    color: "black",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    margin: "10px",
    fontSize: "50px",
  }

  const handleCounter = () => {
    setCounter(counter + 1)
    setColor(colorsArr[Math.floor(Math.random() * colorsArr.length)])
  }

  return (
    <>
      <button onClick={ handleCounter } style={buttonStyle}>{counter} likes</button>
    </>
  )
}
