import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 300,
      name: "Curso de Java",
      description: "Curso excelente de Java",
      teacher_id: "d3653daa-2a19-4ee5-88ff-35710984368c",
      category_id: "1cf6a47e-5abf-48c6-b7b0-7324ad3b5c09"
    },
  });

  console.log(result);
}

main();
