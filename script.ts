import { prisma } from "./lib/prisma.js";

const main = async () => {
  // create a new user with post
  const user = await prisma.user.create({
    data: {
      name: "Elma",
      email: "elma@gmail.com",
      posts: {
        create: {
          title: "Hello world",
          content: "This is my first post",
          published: true,
        },
      },
    },
    include: {
      posts: true,
    },
  });

  console.log("created user", user);

  // fetch all user with thier post
  const allUser = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  console.log("All user", JSON.stringify(allUser, null, 2));
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
