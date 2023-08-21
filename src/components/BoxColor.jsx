export default function BoxColor(props) {

  const boxStyles = {
    border: "2px solid black",
    fontSize: "50px",
    padding: "10px",
    margin: "50px",
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`
  }

  return (
    <div style={boxStyles}>
      <p>rgb({props.r},{props.g},{props.b})</p>
    </div>
  )
}