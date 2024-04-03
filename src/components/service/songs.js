import { faker } from "@faker-js/faker";
import { routes, Music } from "../../routes";

// export const mostListenedToApi = async () => {
//   const data = Array.from({ length: 8 });

//   const mappedData = data.map(() => {
//     return {
//       title: faker.music.songName(),
//       url: routes.Music(faker.datatype.number()), // Use faker.datatype.number() to generate random numbers
//       image:
//         "https://source.unsplash.com/random/?music,music+" +
//         faker.datatype.number(), // Use faker.datatype.number() to generate random numbers
//     };
//   });

//   return mappedData;
// };
export const mostListenedToApi = async () => {
  return Array.from({ length: 8 }).map(() => {
    return {
      title: faker.music.songName(),
      description: "sep 2022 . 29 min",
      url: Music(faker.number.int()),
      image:
        "https://source.unsplash.com/random/?music,music+" + faker.number.int(),
    };
  });
};
export const episodesApi = async () => {
  return Array.from({ length: 8 }).map(() => {
    return {
      title: faker.music.songName(),
      description: "sep 2022 . 29 min",
      url: Music(faker.number.int()),
      image:
        "https://source.unsplash.com/random/?music,music+" + faker.number.int(),
    };
  });
};
