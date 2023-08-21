export default function CreditCard(props) {

  const creditCard = {
    backgroundColor: props.bgColor,
    color: props.color,
    width: "300px",
    height: "150px",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
  }

  const cardInfo = {
    display: "flex",
    flexDirection: "column",
  }

  const cardNumber = {
    fontSize: "1.5rem",
  }

  const cardImage = {
    width: "50px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  }

  return (
    <div style={creditCard}>
      <div style={cardImage}>
        <img src={props.type} alt="type" width={50}/>
      </div>
      <div style={cardNumber}>
        <p>{props.number}</p>
      </div>
      <div style={cardInfo}>
        <p>{props.expirationMonth}/{props.expirationYear} {props.bank} {props.owner}</p>
        <p></p>
      </div>
    </div>
  )
}