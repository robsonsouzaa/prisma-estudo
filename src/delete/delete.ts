import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "33d4696b-085b-4cde-9c19-610a1c962537"
    }
  });

  console.log(result);
}

main();
