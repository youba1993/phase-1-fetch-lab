 function fetchBooks() {
   return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json()).then((json) => renderBooks(json) )
  
  //let respenseFetch = await fetch("https://anapioficeandfire.com/api/books")
  //respenseFetch = await respenseFetch.json()
  //renderBooks(respenseFetch)
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
