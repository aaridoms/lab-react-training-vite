export default function Rating(props) {

  const rating = {
    zero: "☆☆☆☆☆",
    one: "★☆☆☆☆",
    two: "★★☆☆☆",
    three: "★★★☆☆",
    four: "★★★★☆",
    five: "★★★★★",
  }

  let value = ""
  if(props.children < 0.5) {
    value = rating.zero
  }else if(props.children < 1.5) {
    value = rating.one
  }else if(props.children < 2.5) {
    value = rating.two
  }else if(props.children < 3.5) {
    value = rating.three
  }else if(props.children < 4.5) {
    value = rating.four
  }else if(props.children < 5.5) {
    value = rating.five
  }

  return (
    <div>
      <h1>{value}</h1>
    </div>
  )
}