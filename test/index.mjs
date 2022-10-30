import fetch from "node-fetch";
const port = 5000;
const mainUri = `http://127.0.0.1:${port}`;
const fetchHeaders = { "Content-Type": "application/json" };

// ###########################################################################
// This section will get the status code to ckeck connection.
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

// const result = await getStatus();
// console.log(result);

// ###########################################################################
// This section will help you get a list of all todo documents.
async function getAllDocs() {
  try {
    const response = await fetch(mainUri+"/api/v1/todos", { method: "GET" });
    const result = await response.json();;
    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// const result = await getAllDocs();
// console.log(result);

// ###########################################################################
// This section will help you get a single todo documents by _id.
async function getOneDoc(id) {
  try {
    const response = await fetch(mainUri+"/api/v1/todos/"+id, { method: "GET" });
    const result = await response.json();;
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// const result = await getOneDoc("635e4104e325cd346daa655d");
// console.log(result);

// ###########################################################################
// This section will help you create a new todo document.
async function createNewDoc(body) {
  try {
    const response = await fetch(mainUri+"/api/v1/todos/add", {
      method: "POST",
      headers: fetchHeaders,
      body: JSON.stringify(body),
    });
    const result = await response.json();;
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}
// const body = {
//   name: "Swag Messiah",
//   text: "Legalize Nuclear Bombs.",
//   status: "open",
//   tags: ["legalize", "nuclear", "bomb"],
// }
// const result = await createNewDoc(body);
// console.log(result);

// ###########################################################################
// This section will help you update a single document by _id.
async function updateOneDoc(id, body) {
  try {
    const response = await fetch(mainUri+"/api/v1/todos/update/"+id, {
      method: "POST",
      headers: fetchHeaders,
      body: JSON.stringify(body),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// const id = "635e4104e325cd346daa655d"
// const body = {
//   name: "Swag Messiah",
//   text: "Legalize Nuclear Bombs.",
//   status: "closed",
//   tags: ["nuclear", "bomb", "legal"],
//   date: "2022/10/01 14:57:00",
// }
// const result = await updateOneDoc(id, body);
// console.log(result);

// ###########################################################################
// This section will help you delete a single document by _id.
async function deleteOneDoc(id) {
  try {
    const response = await fetch(mainUri+"/api/v1/todos/"+id, {
      method: "DELETE"
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// const id = "6334162e961b54ae04aa7a34";
// const result = await deleteOneDoc(id);
// console.log(result);
