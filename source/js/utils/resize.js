export const resize = (frame, image) => {
  let multiplier = 1;

  if (image.width > frame.width) {
    multiplier = frame.width / image.width;
  }

  if (image.height * multiplier > frame.height) {
    multiplier = frame.height / image.height;
  }

  return {
    width: image.width * multiplier,
    height: image.height * multiplier,
  };
};

export const libraryFrame = {
  singleQuestion: { width: 705, height: 455 },
  doubleQuestion: { width: 468, height: 458 },
  tripleQuestion: { width: 304, height: 455 },
};
