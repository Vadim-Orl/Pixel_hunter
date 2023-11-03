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

//# sourceMappingURL=resize.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ1dGlscy9yZXNpemUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlc2l6ZSA9IChmcmFtZSwgaW1hZ2UpID0+IHtcbiAgbGV0IG11bHRpcGxpZXIgPSAxO1xuXG4gIGlmIChpbWFnZS53aWR0aCA+IGZyYW1lLndpZHRoKSB7XG4gICAgbXVsdGlwbGllciA9IGZyYW1lLndpZHRoIC8gaW1hZ2Uud2lkdGg7XG4gIH1cblxuICBpZiAoaW1hZ2UuaGVpZ2h0ICogbXVsdGlwbGllciA+IGZyYW1lLmhlaWdodCkge1xuICAgIG11bHRpcGxpZXIgPSBmcmFtZS5oZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiBpbWFnZS53aWR0aCAqIG11bHRpcGxpZXIsXG4gICAgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgKiBtdWx0aXBsaWVyLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxpYnJhcnlGcmFtZSA9IHtcbiAgc2luZ2xlUXVlc3Rpb246IHsgd2lkdGg6IDcwNSwgaGVpZ2h0OiA0NTUgfSxcbiAgZG91YmxlUXVlc3Rpb246IHsgd2lkdGg6IDQ2OCwgaGVpZ2h0OiA0NTggfSxcbiAgdHJpcGxlUXVlc3Rpb246IHsgd2lkdGg6IDMwNCwgaGVpZ2h0OiA0NTUgfSxcbn07XG4iXSwiZmlsZSI6InJlc2l6ZS5qcyJ9
