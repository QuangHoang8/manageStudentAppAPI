export const Utils = {
  getAvatarUrlFromFileName: (filename) => {
    return `http://localhost:5000/StaticFiles/${filename}`;
  },
  getAvatarPathFromFileName: (filename) => {
    return `./studentImg/${filename}`;
  },
};
