import profiles from "../data/berlin.json"

export default function FaceBook() {

  const faceBookStyles = {
    display: "flex",
    justifyContent: "center",
    border: "1px solid black"
  }

  const handleChangeColor = () => {
    console.log('hola')
  }

  return (
    <div>
      <button onClick={ handleChangeColor }>USA</button>
      {profiles.map((eachProfile) => {
        return (
          <div key={eachProfile.img} style={faceBookStyles}>
            <div>
              <img src={eachProfile.img} alt={eachProfile.name} width={200} />
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <p><b>First Name:</b> {eachProfile.firstName}</p>
              <p><b>Last Name:</b> {eachProfile.lastName}</p>
              <p><b>Country:</b> {eachProfile.country}</p>
              <p><b>Type:</b> {eachProfile.isStudent === true ? "Student" : "Teacher"}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
