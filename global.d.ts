import { prismaClient } from "./prisma/client";

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}
