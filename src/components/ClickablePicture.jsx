import { useState } from "react"

export default function ClickablePicture(props) {

  console.log(props.img)
  console.log(props.imgClicked)

  const { picture, setPicture } = useState(props.img)

  const changePicture = () => {
    if (picture === props.img) {
      setPicture(props.imgClicked)
    } else {
      setPicture(props.img)
    }
  }

  return (
    <div>
      <img src={props.img} alt="" width={400} onClick={ changePicture }/>
    </div>
  )
}
