import Image from "next/image"
import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { ChessPlayer } from "@prisma/client"

interface Props {
  player: ChessPlayer
}

const ChessPlayer = ({ player }: Props) => {
  return (

    <Transition
      as={Fragment}
      appear={true}
      show={true}
      enter="transform transition duration-[500ms]"
      enterFrom="opacity-0 rotate-[-70deg] scale-0"
      enterTo="opacity-100 rotate-0 scale-100"
    >
      <div className="overflow-hidden transition-all bg-transparent rounded-lg shadow-md hover:scale-105 hover:opacity-80 dark:bg-gray-700 bg-slate-200 drop-shadow hover:rotate-6 hover:-translate-y-5">
        <Image className="object-cover object-center h-64 w-64 -z-10 select-none" src={player.avatar} alt={`@${player.username} chess.com avatar image`} width={300} height={300} priority />
        <div className="z-10 px-6 py-4">
          <div className="text-base font-medium text-gray-700 dark:text-gray-200">@{player.username}</div>
          <div className={`text-xs text-gray-600 dark:text-gray-400`}>
            {player.name}
          </div>
        </div>
      </div >
    </Transition>
  )
}

export default ChessPlayer
