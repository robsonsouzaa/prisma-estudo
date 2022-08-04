import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de ReactNative",
      description: "Curso para nível intermediário",
      duration: 250
    }
  });
}

main();