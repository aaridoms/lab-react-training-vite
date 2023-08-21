export default function Greetings(props) {

  const greetingStyles = {
    border: "2px solid black",
    fontSize: "100px",
    padding: "10px",
    margin: "50px",
  }

  const greeting = {
    de: "Hallo",
    fr: "Bonjour",
  }

  return (
    <div style={greetingStyles}>
      <p>{greeting[props.lang]} {props.children}</p>
    </div>
  )
}