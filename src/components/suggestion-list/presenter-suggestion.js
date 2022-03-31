export const getResultList = res => {
  let listData = [];
  if (res.results && Array.isArray(res.results)) {
    listData = res.results;
  }
  return listData;
};
