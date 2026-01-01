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

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "we learn web development in PH",
  //     userId: 1,
  //   },
  // });

  // console.log(createProfile);

  // const users = await prisma.user.findMany({
  //   // ? include means -> add
  //   // include: {
  //   //   posts: true,
  //   //   profile: true,
  //   // },
  //   // ? select means -> only
  //   select: {
  //     id: true,
  //     name: true,
  //     email: true,
  //     posts: true,
  //     profile: true,
  //   },
  // });
  // console.dir(users, { depth: Infinity });

  // const users = await prisma.profile.findMany();
  // console.log(users);

  // const updateProfile = await prisma.profile.update({
  //   where: {
  //     userId: 1,
  //   },
  //   data: {
  //     bio: "we learn Level 1 web development in PH",
  //     dateOfBirth: "2025-12-31T00:42:35.381Z",
  //   },
  //   select: {
  //     id: true,
  //     bio: true,
  //     user: {
  //       select: {
  //         name: true,
  //         email: true,
  //         role: true,
  //       },
  //     },
  //   },
  // });

  // console.log(updateProfile);

  // const deleteUser = await prisma.user.delete({
  //   where: {
  //     id: 2,
  //   },
  // });
  // console.log(deleteUser);

  const getUserDataById = await prisma.user.findUnique({
    where: {
      id: 2,
    },
    include: {
      posts: true,
      profile: true,
    },
  });
  console.log(getUserDataById);
}

run();
