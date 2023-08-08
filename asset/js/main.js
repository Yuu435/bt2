const array = [5, 6, 7, 2, 1, 3, 9, 8];



// Tìm số lớn thứ 2 trong mảng
const secondArr = (arr) => {
    console.log(arr);
    let first = arr[0];
    let second = arr[1];

    if (first < second) {
        [first, second] = [second, first]
    }

    arr.forEach((num, index) => {
        if (index >= 2) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num < first) {
                second = num;
            }
        }
    });
    return second;
};
console.log(secondArr(array), `Tìm số lớn thứ hai trong mảng.`);


// Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần.
const ascending = (arr) => {
    console.log(arr);
    return arr.sort((a, b) => a - b);
}
console.log(ascending(array), `Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần.`);


// Tính tổng của các số chẵn trong mảng.
const sumArr = (arr) => {
    let sum = 0;

    arr.forEach((num) => {
        // console.log(num);
        if (num % 2 === 0) {
            console.log(num);
            sum += num;
        }
    });
    return sum;
}
console.log(sumArr(array), `Tính tổng của các số chẵn trong mảng.`);