
import Image from "next/image"
import { api } from "../utils/api"
import Loading from "../components/Loading"
interface sortedPlayer {
  _count: {
    votedFor: number;
    votedAgainst: number;
  };
  id: number;
  username: string;
  name: string | null;
  avatar: string;
}

const getPercentage = (player: sortedPlayer) => {
  const { votedFor, votedAgainst } = player._count
  return Number((votedFor / (votedAgainst + votedFor) * 100).toFixed(1))
}

const sortPlayers = (players: sortedPlayer[]) => {
  return players.sort((a, b) => getPercentage(b) - getPercentage(a))
}


const Results = () => {
  const { data: players } = api.players.getResults.useQuery()


  if (!players) return <div className="min-h-screen place-items-center grid"><Loading /></div>

  const sortedPlayers: sortedPlayer[] = sortPlayers(players)

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-xl md:text-3xl font-bold py-8'>Results</h1>
      <div className="flex flex-col gap-6 px-2 pb-3">
        {sortedPlayers.map(player => (
          <div className="flex justify-between items-center gap-4 border rounded-md hover:scale-105" key={player.id}>
            <Image className="w-14 h-14" src={player.avatar} alt={`@${player.username} chess.com avatar image`} width={80} height={80} priority />
            <p>{player.name ? player.name : `@${player.username}`}</p>
            <p className="pr-3">{getPercentage(player)}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Results
