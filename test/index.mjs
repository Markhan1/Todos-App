import fetch from "node-fetch";
const port = 5050;
const mainUri = `http://192.168.0.134:${port}`;

async function getStatus() {
  try {
    const response = await fetch(mainUri, { method: "GET" });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const result = getStatus();
console.log(result);
