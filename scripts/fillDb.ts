import axios from "axios";
import { z } from "zod";

const playerInfo = z.object({
  username: z.string(),
  avatar: z.string(),
  name: z.string().optional(),
});

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface Player {
  username: string;
  avatar: string;
  name?: string;
}

interface GetLiveBlitzData {
  live_blitz: Player[];
}

const fillDb = async () => {
  try {
    const apiData = await axios.get<GetLiveBlitzData>(
      "https://api.chess.com/pub/leaderboards"
    );
    const topPlayers = cleanData(apiData.data.live_blitz);

    await prisma.chessPlayer.createMany({
      data: topPlayers,
    });
  } catch (err) {
    console.log(err);
  }
};

const cleanData = (data: Player[]) => {
  return data.map((player, i) => ({ id: i + 1, ...playerInfo.parse(player) }));
};

fillDb().catch((err) => console.log(err));
