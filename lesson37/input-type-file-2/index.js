//gateways
const baseUrl =
  "https://crudcrud.com/api/e34a18b7273a49ecb971d6953a63d1de/files1";

const postData = (object) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(object),
  });
};
const getData = () => fetch(baseUrl).then((response) => response.json());

//logic
let chosenfile;

const form = document.querySelector(".form");
const onSubmitData = (e) => {
  e.preventDefault();
  const dataForPost = new FormData(form);
  dataForPost.append("files", document.querySelector(".input").files[0]);
  // postData(chosenfile);
  console.log(dataForPost.getAll('input'));
};
form.addEventListener("submit", onSubmitData);

const input = document.querySelector(".input");
const onChange = (e) => {
  e.preventDefault();
  //   chosenfile = window.URL.createObjectURL(e.target.files[0]);
  chosenfile = e.target.files[0];
};
input.addEventListener("change", onChange);
