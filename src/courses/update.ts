import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "b75b7349-1103-41e2-b6c3-981817d96de0",
    },
    data: {
      duration: 250,
      name: "Curso de ReactJS",
    },
  });

  console.log(result);
}

main();
