import Rating from "./Rating"

export default function DriverCard(props) {

  const card = {
    backgroundColor: "#455EB5",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px"
  }

  const imgStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover"

  }

  return (
    <div style={card}>
      <h4>{props.name}</h4>
      <Rating>{props.rating}</Rating>
      <img src={props.img} alt="driver" style={imgStyle}/>
      <p>{props.car.model} - {props.car.licensePlate}</p>
    </div>
  )
}