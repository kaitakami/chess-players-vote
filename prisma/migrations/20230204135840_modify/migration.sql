-- CreateTable
CREATE TABLE "ChessPlayer" (
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "ChessPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL,
    "votedForId" INTEGER NOT NULL,
    "votedAgainstId" INTEGER NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_votedForId_fkey" FOREIGN KEY ("votedForId") REFERENCES "ChessPlayer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_votedAgainstId_fkey" FOREIGN KEY ("votedAgainstId") REFERENCES "ChessPlayer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
