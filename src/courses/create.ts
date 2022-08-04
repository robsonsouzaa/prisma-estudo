import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 250,
      name: "Curso de NextJS",
      description: "Curso excelente de NextJS",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Thiago Campos"
          },
          create: {
            name: "Thiago Campos"
          }
        }
      },
      category: {
        connect: {
          id: "1cf6a47e-5abf-48c6-b7b0-7324ad3b5c09"
        }
      }
    },
  });

  console.log(result);
}

main();
