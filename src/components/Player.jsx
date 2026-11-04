import "./Player.css"

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div>
        <article className="player-card" style={{ width: '300px', minHeight: '460px' }}>
      <img
        className="player-image"
        src={imageUrl}
        alt={name}
      />

      <h2>{name}</h2>

      <p>{team}</p>
      <p>{nationality}</p>
      <p>Maillot : {jerseyNumber}</p>
      <p>Âge : {age}</p>
    </article>
    </div>
  )
}

export default Player
