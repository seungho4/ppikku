import axios from "axios"

// 도메인주소
const BASE_URL = "https://dummyjson.com";

const testRoute = async () => {

  const data = await axios.get(`${BASE_URL}/test`);
  console.log(data["data"]);
};
testRoute();


async function getAllProducts() {
  const response = await axios.get(`${BASE_URL}/products`);
  console.data = response["data"];
  console.log(products);
}


async function getProductById(n) {
  const res = await axios.get(`${BASE_URL}/products/${n}`);
  const data = res["data"];
  console.log(data);
}

getProductById(1);
getProductById(2);
getProductById(10);

async function searchProducts(search) {
  const queryParms = new URLSearchParams({ q: search });
  const res = await axios.get(`${BASE_URL}/products/search?${queryParms}`);
  const data = res - ["data"];
  console.log(data);
}

searchProducts("phone");


async function getProductTotalCount() {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  console.log(data["total"]);
}

getProductTotalCount();















