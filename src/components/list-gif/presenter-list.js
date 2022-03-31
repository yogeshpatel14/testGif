export const getListGifFromResponse = res => {
  let listData = [];
  if (res.results && Array.isArray(res.results)) {
    res.results.forEach(ele => {
      if (ele.media && Array.isArray(ele.media) && ele.media.length > 0) {
        let info = ele.media[0];
        if (
          info.tinygif &&
          Object.keys(info.tinygif).length > 0 &&
          info.tinygif.url
        ) {
          listData.push(info.tinygif.url);
        } else if (
          info.gif &&
          Object.keys(info.gif).length > 0 &&
          info.gif.url
        ) {
          listData.push(info.gif.url);
        }
      }
    });
  }
  return listData;
};
