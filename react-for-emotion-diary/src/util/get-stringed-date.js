export const getStringedDate = (targetDate) => {
  // 날짜를 String 형식으로 변환 -> YYYY-MM-DD
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1; //월은 0부터 시작됨
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};
