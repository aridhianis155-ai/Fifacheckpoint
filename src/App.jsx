
import './App.css'
import PlayerList from './components/PlayerList.jsx'

function App() {
  return (
    <main className="min-h-screen px-4 py-8 text-white">
      <h1 className="mb-8 text-center text-4xl font-black tracking-wide text-amber-400 md:text-5xl">
        Joueurs de football
      </h1>
      <PlayerList />
    </main>
  )
}

export default App
