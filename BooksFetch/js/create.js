// javascript for create.html
const form = document.querySelector('form');

const createBook = async (e) => {
  e.preventDefault();//after adding content and clicking add button the content is not lost
//doc is an object for adding new book
  const doc = {
    title: form.title.value,//takes value of title of from and stores in title
    author:form.author.value,
    price:form.price.value,
    pages:form.pages.value,
    body: form.body.value,
    cover:form.cover.value,
    votes: 0,
    rating:0
  }

  await fetch('http://localhost:3000/books', {
    method: 'POST',//post to add data
    body: JSON.stringify(doc),//we have to pass a json string so stringify 
    headers: { 'Content-Type': 'application/json' }
  })
//to relocate user back to index page
  window.location.replace('/')//or /index.html same
}

form.addEventListener('submit', createBook);