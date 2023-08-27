import { useState } from "react"

export default function Carousel(props) {
  // console.log(props.images)
  const { images } = props
  const [image, setImage] = useState(images[0])

  const handleLeft = () => {
    images.map((image, index) => {
      if (image === images[0]) {
        setImage(images[images.length - 1])
      } else if (image === images[index]) {
        setImage(images[index - 1])
      }
    })
  }

  const handleRight = () => {
    setImage(images[2])
  }

  return (
    <div>
      <img src={image} alt="" />
      <button onClick={ handleLeft }>Left</button>
      <button onClick={ handleRight }>Right</button>
    </div>
  )
}