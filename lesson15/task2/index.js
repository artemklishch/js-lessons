'use strict';

export const createCalculator = () => {
    let number = 0;
    function getMemo() {
        return number;
    }
    function add(num) {
        number += num;
    }
    function decrease(num) {
        number -= num;
    }
    function reset() {
        number = 0;
    }
    return{
        getMemo,
        add,
        decrease,
        reset,
    }
};