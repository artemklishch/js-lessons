'use strict';

let number = 0;
export function getMemo(){
    return number;
}
export function add(num){
    number += num;
}
export function decrease(num){
    number -= num;
}
export function  reset(){
    number = 0;
}