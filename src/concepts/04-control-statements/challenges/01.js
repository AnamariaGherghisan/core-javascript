export const getInfoByUvIndex = (uvIndex) => {};

export const countdown = () => {
  for (let i = 5; i >= 0; i--) {
    if (i === 0) {
      console.log("GAME OVER");
    } else {
      console.log(`Time remaining: ${i}`);
    }
  }
};
