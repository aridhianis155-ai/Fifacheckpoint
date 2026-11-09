import Player from './Player.jsx'
import joueurs from '../data/joueurs.js'

const PlayerList = () => {
  return (
    <div className="cards-container mx-auto flex w-full max-w-7xl flex-wrap items-stretch justify-center gap-6 px-2 md:px-6">
      {joueurs.map((props) => (
        <Player key={props.name} {...props} />
      ))}
    </div>
  )
}

export default PlayerList
