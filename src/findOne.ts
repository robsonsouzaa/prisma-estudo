import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  const course = await prisma.courses.findFirst({
    take: -1, //trazer o último registro
  });
  console.log(course);
}

main();