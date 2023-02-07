import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Loading from "../components/Loading";
import ChessPlayer from "../components/ChessPlayer";
import { getRandomIdNums } from '../utils/getRandomNumber';

import { api } from "../utils/api";
import { useState } from "react";

const Home: NextPage = () => {
  const [playerIds, setPlayerIds] = useState(() => getRandomIdNums())
  const [firstId, secondId] = playerIds
  const firstPlayer = api.players["getPlayer"].useQuery(firstId)
  const secondPlayer = api.players["getPlayer"].useQuery(secondId)
  const castVote = api.players.vote.useMutation()

  const handleVote = (playerId: number) => {
    const votedForId = playerId
    const votedAgainstId = firstId === playerId ? secondId : firstId

    castVote.mutate({
      votedForId,
      votedAgainstId
    })

    setPlayerIds(getRandomIdNums())
  }

  return (
    <>
      <Head>
        <title>Vote Chess Players</title>
        <meta name="description" content="Created with create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-20 pb-12 px-4 md:pt-40 items-center justify-center">
        <h1 className="text-xl md:text-3xl font-bold text-center px-2">Vote for your favorite Chess Player ♟️</h1>
        <div className="flex justify-center gap-11 md:gap-20 md:p-10 pt-20 md:pt-52 md:flex-row flex-col items-center">
          {firstPlayer.data && secondPlayer.data ?
            <>
              <button className="cursor-default" onClick={() => handleVote(firstId)}>
                <ChessPlayer player={firstPlayer.data} />
              </button>
              <div className="font-bold">VS</div>
              <button className="cursor-default" onClick={() => handleVote(secondId)}>
                <ChessPlayer player={secondPlayer.data} />
              </button>
            </>
            :
            <div className="pt-28">
              <Loading />
            </div>
          }
        </div>
      </main>
      <div className="relative">
        <footer className="absolute pb-2 bottom-0 w-full flex justify-center text-lg text-slate-300  transition-colors gap-3">
          <Link href="/results" className="hover:text-white">Results ♟️</Link>
          <div>|</div>
          <a href="https://github.com/kaitakami/chess-players-vote" target="_blank" rel="noreferrer" className="hover:text-white">My Github</a>
        </footer>
      </div>

    </>
  );
};

export default Home;
