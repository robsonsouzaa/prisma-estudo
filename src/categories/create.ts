import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.categories.create({
    data: {
      name: "Análise de Sistemas 2",
      courses: {
        create: {
          duration: 300,
          name: "Curso de React Native",
          description: "Curso excelente de React Native com Rodrigão",
          teacher_id: "14829b8b-002f-4f65-9fd3-6e84e80ff04c"
        }
      }
    },
  });

  console.log(result);
}

main();
