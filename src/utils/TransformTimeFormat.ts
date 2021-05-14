export function TransformTimeFormat(timeString: string) {
  const time: Date = new Date(timeString);
  return time.getMonth() + 1 + "月" + time.getDate() + "日 " + time.getHours() + ":" + time.getSeconds();
}