const str1 =
  "[1,2,3, [[]], 'adsfasf',[],[2,5,'awf',['dfs',5]], 2,5, ['sadf', []], 2, 'b']";
const str11 = "[1,2,3, 'adsfasf',[2,5,'awf',['dfs',5]]]";
const str2 = "[1,2,3, 'adsfasf']";

const parseStringToArray = (string) => {
  const stringWithoutSpaces = string
    .split(" ")
    .filter((item) => !!item)
    .join("")
    .replace(/,/g, "");
  const clearedStr = stringWithoutSpaces.slice(
    1,
    stringWithoutSpaces.length - 1
  );
  const nestedArrays = getArrays(clearedStr);
  const transformedArrays = transformArrayItems(nestedArrays);
  return transformedArrays;
};

const getArrays = (string) => {
  const array = string.split("");
  let isSubArray = false;
  let substring = "";
  let open = 0;
  let close = 0;
  const newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (isSubArray && open !== close) {
      substring += array[i];
    }
    if (array[i] === "[" && !isSubArray) {
      isSubArray = true;
      substring += array[i];
    }
    if (array[i] === "[" && isSubArray) {
      open++;
    }
    if (array[i] === "]" && isSubArray) {
      close++;
    }
    if (isSubArray && open === close) {
      isSubArray = false;
      newArray.push(substring);
      open = 0;
      close = 0;
      substring = "";
      continue;
    }
    newArray.push(array[i]);
  }
  const clearData = [];
  for (let i = 0; i <= newArray.length - 1; i++) {
    if (newArray[i].includes("[") && newArray[i].length > 1) {
      clearData.push({
        index: i - newArray[i].length + 1,
        length: newArray[i].length - 1,
        value: newArray[i],
      });
    }
  }
  const clearedArray = [];
  for (let i = 0; i <= newArray.length - 1; i++) {
    const isInd = clearData.find((item) => item.index === i);
    if (isInd) {
      const arr = getArrays(isInd.value.slice(1, isInd.value.length - 1));
      clearedArray.push(arr);
      i += isInd.length;
    } else {
      clearedArray.push(newArray[i]);
    }
  }
  return clearedArray;
};

const transformArrayItems = (array) => {
  const updatedArray = [];
  let isSubstring = false;
  let substring = "";
  for (let i = 0; i <= array.length - 1; i++) {
    const value = array[i];
    if (!Array.isArray(value) && !Number.isNaN(+value)) {
      updatedArray.push(+value);
      continue;
    }
    if (Array.isArray(value)) {
      const arr = transformArrayItems(value);
      updatedArray.push(arr);
      continue;
    }
    if (value === "'" && !isSubstring) {
      isSubstring = true;
      continue;
    }
    if (isSubstring && value !== "'") {
      substring += value;
      continue;
    }
    if (isSubstring && value === "'") {
      isSubstring = false;
      updatedArray.push(substring);
      substring = "";
      continue;
    }
    updatedArray.push(value);
  }
  return updatedArray;
};

