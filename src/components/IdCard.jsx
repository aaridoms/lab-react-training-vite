export default function IdCard(props) {

  const cardStyles = {
    border: "1px solid black",
    display: "flex",
    flexDirection: "row",
  }

  const cardContentStyles = {
    display: "flex",
    flexDirection: "column",
    margin: "0 0 0 20px",
  }

  const cardImg = {
    width: "200px",
    height: "200px",
  }

  return (
    <div style={cardStyles}>
      <img src={props.picture} alt="picture" style={cardImg}/>
      <div style={cardContentStyles}>
        <h4><b>First name:</b> {props.lastName}</h4>
        <h4><b>Last name:</b> {props.firstName}</h4>
        <h4><b>Gender: </b> {props.gender}</h4>
        <h4><b>Height: </b> {props.height}</h4>
        <h4><b>Birth: </b> {props.birth}</h4>
      </div>
      
    </div>
  );
}
