function filterRange(arr, a, b) {
    filtered = []
    arr.forEach((num) => num >= a && num <= b ? filtered.push(num): null);
    return filtered;
}

arr = [5, 3, 8, 1];

alert( filterRange(arr, 1, 4) );