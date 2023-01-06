
const qs = (arr: number[], lo: number, hi: number): void => {
  if (lo >= hi) {
    return
  }

  const pivotIdx = partition(arr, lo, hi)

  qs(arr, lo, pivotIdx - 1)
  qs(arr, pivotIdx + 1, hi)
}


const partition = (arr: number[], lo: number, hi: number): number => {
  const pivot = arr[hi]

  let idx = lo - 1

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      idx++
      const tmp = arr[i]
      arr[i] = arr[idx]
      arr[idx] = tmp
    }
  }

  idx++
  arr[hi] = arr[idx]
  arr[idx] = pivot
  // The pivot is now in its correct spot. Everything higher than the pivot is to the right, everything lower is to the left.

  return idx
}

export function quick_sort(arr: number[]): number[] {
  // qs(arr, 0, arr.length - 1);

  if (arr.length == 0) return [];

    var left = [], right = [], pivot = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if(arr[i] < pivot)
            left.push(arr[i])
        else
            right.push(arr[i]);
    }

    return quick_sort(left).concat(pivot, quick_sort(right));
}


export default function quicksort(array: any): any {
  if (array.length == 0) return [];

  var left = [], right = [], pivot = array[0];

  for (var i = 1; i < array.length; i++) {
      if (array[i] < pivot)
          left.push(array[i])
      else
          right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}
