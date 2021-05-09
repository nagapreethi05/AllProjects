// javascript for index.html
//to get books and search forms
const container = document.querySelector('.books');
const searchForm = document.querySelector('.search');

const renderBooks = async (term) => {
  console.log(term);
  //to get in sorted rating order
  let uri = 'http://localhost:3000/books?_sort=rating&_order=desc';
  if (term) {
    uri += `&q=${term}`
  }

  const res = await fetch(uri);
  const books = await res.json();
  console.log(books);
//to display on page
  let template = '';
  books.forEach(book => {
    template += `
      <div class="book">  
      <div>
      <img  src="${book.cover}"</img>
      </div>
      <div class="booktext">
        <h2>${book.title}</h2>
        <h4>Author: ${book.author}</h4>
        <p><b>Rating:</b>${book.rating}</p>
        <p><small>${book.votes} votes,${book.pages} pages</small></p>
        <p>${book.body.slice(0, 200)}...</p>
        <a href="./details.html?id=${book.id}">Read more</a>
      </div>
      </div>
    `
  });

  container.innerHTML = template;
}

// search
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  renderBooks(searchForm.term.value.trim());//trim is to remove white spaces
})

window.addEventListener('DOMContentLoaded', () => renderBooks());