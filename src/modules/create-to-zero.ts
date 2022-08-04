import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      courses: {
        create: {
          duration: 200,
          name: "Curso Linux",
          description: "Curso completo de linux",
          teacher: {
            create: {
              name: "Mark Zuckenberg"
            }
          },
          category: {
            connect: {
              id: "1cf6a47e-5abf-48c6-b7b0-7324ad3b5c09"
            }
          }
        }
      },
      modules: {
        create: {
          description: "Cursos completo de Linux",
          name: "Linux",
        }
      }
    }
  });

  console.log(result);
}

main();
