import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      id: "97a0a50e-2628-40a5-bf1c-5c1ef4d32407"
    },
    include: {
      coursesModules: true
    },
  });

  console.log(JSON.stringify(result));
}

main();