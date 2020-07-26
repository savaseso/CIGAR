export const calculateAverage = (arr) => {
    const total = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rating
    }, 0);
    return total / arr.length
}