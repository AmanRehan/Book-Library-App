const addButton = document.getElementById("addBtn");
const bookList = document.getElementById("bookList");

addButton.addEventListener("click", () => {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const year = document.getElementById("publishingYear").value;

  if (!title || !author || !year) {
    alert("Please enter valid book details.");
    return;
  }

  const element = document.createElement("li");
  element.className =
    "list-group-item d-flex justify-content-between align-items-center";
  element.innerHTML = `<strong>${title}</strong> by ${author}, Year: ${year} <button class="btn btn-danger" onclick="deleteBook(event)">Delete</button>`;

  bookList.append(element);

  document.getElementById("bookTitle").value = "";
  document.getElementById("bookAuthor").value = "";
  document.getElementById("publishingYear").value = "";
});

function deleteBook(event) {
  const current = event.target.parentNode;
  bookList.removeChild(current);
}
