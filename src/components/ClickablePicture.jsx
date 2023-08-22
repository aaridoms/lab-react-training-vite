import { useState } from "react"

export default function ClickablePicture(props) {

  console.log(props.img)
  console.log(props.imgClicked)

  const { picture, setPicture } = useState(props.img)

  const changePicture = () => {
    setPicture(props.imgClicked)
  }

  return (
    <div>
      <img src={props.img} alt="" width={400}/>
    </div>
  )
}
