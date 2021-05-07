export function QuickSort(data: any, left: number, right: number) {
  if (left >= right) {
    return;
  }
  let i: number = left;
  let j: number = right;
  let key: number = data[left].last30DaysPostCount
  
  while (i !== j) {
    while (data[j].last30DaysPostCount < key && i < j) {
      j--;
    }
    while (data[i].last30DaysPostCount >= key && i < j) {
      i++
    }
    if (i < j) {
      let temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
  }
  data[left].last30DaysPostCount = data[i].last30DaysPostCount;
  data[i].last30DaysPostCount = key;

  QuickSort(data, left, i - 1);
  QuickSort(data, i + 1, right);
  return data;
}