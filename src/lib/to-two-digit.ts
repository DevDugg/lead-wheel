const ToTwoDigit = (num: number): string => {
  return num < 10 ? `0${num}` : num.toString();
};

export default ToTwoDigit;
