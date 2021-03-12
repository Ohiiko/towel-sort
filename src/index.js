// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined || matrix === null || matrix.lenght === 0) {
        return [];
    } else {
        matrix.map((element, index) => {
            if (`${index}` % 2 != 0) {
                element.reverse();
            }
        });
        return matrix.flat(Infinity);
    }
};
