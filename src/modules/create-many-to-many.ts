import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course_id: "97a0a50e-2628-40a5-bf1c-5c1ef4d32407",
      model_id: "10d84dc0-27cb-4770-b1e2-e8d13da35084"
    }
  });

  console.log(result);
}

main();
