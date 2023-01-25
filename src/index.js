module.exports = function reverse (n) {
    const  arr =String(Math.abs(n)).split("").map(element=>+element);
    arr.reverse();
    let result = +arr.join("");
    return result;
}
