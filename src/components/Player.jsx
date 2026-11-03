import "./Player.css"

const Player = ({ player }) => {
  return (
    <div>
        <article className="player-card">
      <img
        className="player-image"
        src={player.imageUrl}
        alt={player.name}
      />

      <h2>{player.name}</h2>

      <p>{player.team}</p>
      <p>{player.nationality}</p>
      <p>Maillot : {player.jerseyNumber}</p>
      <p>Âge : {player.age}</p>
    </article>
    </div>
  )
}

export default Player
