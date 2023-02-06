import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const playersRouter = createTRPCRouter({
  getPlayer: publicProcedure.input(z.number()).query(async ({ ctx, input }) => {
    const player = await ctx.prisma.chessPlayer.findFirst({
      where: {
        id: input,
      },
    });
    if (!player) throw new Error("Player doesn't exist");
    return player;
  }),
  vote: publicProcedure
    .input(
      z.object({
        votedForId: z.number(),
        votedAgainstId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.vote.create({
        data: {
          ...input,
        },
      });
    }),
  getResults: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.chessPlayer.findMany({
      orderBy: {
        votedFor: {
          _count: "desc",
        },
      },
      select: {
        id: true,
        name: true,
        username: true,
        avatar: true,
        _count: {
          select: {
            votedFor: true,
            votedAgainst: true,
          },
        },
      },
    });
  }),
});
