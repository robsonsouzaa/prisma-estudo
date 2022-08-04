import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
     description: "Aprendendo firebase do zero" ,
     name: "Aprendendo Firebase",
     coursesModules: {
      create: {
        courses: {
          connect: {
            id: "97a0a50e-2628-40a5-bf1c-5c1ef4d32407"
          }
        }
      }
     }
    }
  });

  console.log(result);
}

main();
