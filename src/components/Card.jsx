import Player from "./Player.jsx"
import joueurs from "../data/joueurs.js"

const Card = () => {

  return (
    <div className="cards-container">
      
        {joueurs.map((props) => (
        <Player key={props.name} player={props} />
      ))}
    </div>
  )
}

export default Card
