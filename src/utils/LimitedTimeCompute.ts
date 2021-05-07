export type ExpiryDateType = {
  isExpired: boolean;
  hour: string;
  minute: string;
  second: string;
};

export function GetLimitedTime(expiryDateString: string): ExpiryDateType {
  const expiryDateTimeStamp: number = +new Date(expiryDateString);
  const nowDateTimeStamp: number = +new Date();
  const expendTime: number = (expiryDateTimeStamp - nowDateTimeStamp) / 1000;

  const expendHour: number = parseInt(((expendTime / 60 / 60) % 24) + "");
  const expendHourString: string =
    expendHour < 10 ? "0" + expendHour.toString() : expendHour.toString();

  const expendMinute: number = parseInt(((expendTime / 60) % 60) + "");
  const expendMinuteString: string =
    expendMinute < 10 ? "0" + expendMinute.toString() : expendMinute.toString();

  const expendSecond: number = parseInt((expendTime % 60) + "");
  const expendSecondString: string =
    expendSecond < 10 ? "0" + expendSecond.toString() : expendSecond.toString();

  return {
    isExpired: expendTime < 0,
    hour: expendTime < 0 ? "00" : expendHourString,
    minute: expendTime < 0 ? "00" : expendMinuteString,
    second: expendTime < 0 ? "00" : expendSecondString,
  };
}
