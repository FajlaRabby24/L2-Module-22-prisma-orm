import { prisma } from "./lib/prisma.js";

async function run() {
  // create user
  // const createUser = await prisma.user.create({
  //   data: {
  //     name: "Elam",
  //     email: "elma@gmail.com",
  //   },
  // });

  // console.log("created user", createUser);

  // const createPost = await prisma.post.create({
  //   data: {
  //     title: "This is title",
  //     content: "this is a big content",
  //     authorId: 1,
  //   },
  // });

  // console.log("created post", createPost);

  const createProfile = await prisma.profile.create({
    data: {
      bio: "we learn web development in PH",
      userId: 1,
    },
  });

  console.log(createProfile);
}

run();
