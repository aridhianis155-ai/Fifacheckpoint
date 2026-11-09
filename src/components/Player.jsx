import './Player.css'

const Player = ({
  name = 'halland',
  team = 'MCI',
  nationality = 'norway',
  jerseyNumber = 9,
  age = 29,
  imageUrl = 'https://imgs.search.brave.com/k4N0eF9dAekUuj4e8xwawP7odyIxSaxCFvgRKtdoSbw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aW1hZ28taW1hZ2Vz/LmNvbS9iaWxkL3Nw/LzEwODU2Mzk1MzAv/cy5qcGc',
}) => {
  return (
    <article className="player-card group w-[300px] rounded-[28px] border border-amber-200/80 bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-200 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.35)]">
      <div className="mb-3 overflow-hidden rounded-2xl border border-amber-200 bg-transparent">
        <img
          className="player-image h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={imageUrl}
          alt={name}
        />
      </div>

      <h2 className="mb-2 text-xl font-black uppercase tracking-[0.08em] text-amber-950">
        {name}
      </h2>

      <p className="text-sm font-semibold text-amber-800">{team}</p>
      <p className="mt-1 text-sm text-amber-700">{nationality}</p>
      <div className="mt-4 flex items-center justify-between border-t border-amber-700/30 pt-3 text-sm font-bold text-amber-900">
        <span>Maillot : {jerseyNumber}</span>
        <span>Âge : {age}</span>
      </div>
    </article>
  )
}
export default Player
