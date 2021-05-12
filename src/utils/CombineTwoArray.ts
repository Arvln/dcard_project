export function CombineTwoArray(firstArray: any[], secondArray: any[]) {
  return Array.from(new Set([...firstArray, ...secondArray]));
}