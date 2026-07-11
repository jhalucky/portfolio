import * as PrismaNS from "@prisma/client";

const PrismaClient = (PrismaNS as any).PrismaClient;

const globalForPrisma = globalThis as unknown as {
  prisma?: InstanceType<typeof PrismaClient>;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient();

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prisma;