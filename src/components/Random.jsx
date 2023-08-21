export default function Random(props) {

  const randomStyles = {
    border: "2px solid black",
    fontSize: "100px",
    padding: "10px",
    margin: "50px",
  }

  const randomValue = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)

  return (
    <div style={randomStyles}>
      <p>Random value between {props.min} and {props.max} ={">"} {randomValue} </p>
    </div>
  )
}