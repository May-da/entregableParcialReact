
const Card = ({libro, autor}) => {
  //console.log(props)
  return (
    <div>
      <h3>Mi libro favorito es: {libro} </h3>
      <h3>
        Su autor es:  {autor}
      </h3>
    </div>
  )
}

export default Card
