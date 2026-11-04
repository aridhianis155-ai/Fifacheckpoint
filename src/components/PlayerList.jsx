import Player from "./Player.jsx"
import joueurs from "../data/joueurs.js"

const PlayerList = () => {

  return (
    <div className="cards-container">
      
        {joueurs.map((props) => (
        <Player key={props.name} {...props} />
      ))}
    </div>
  )
}

export default PlayerList
