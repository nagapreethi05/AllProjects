// javascript for details.html
//win.loc.ser is ?id=1 its value stored in id
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

const renderDetails = async () => {
  const res = await fetch('http://localhost:3000/books/' + id);
  if (!res.ok) {
    window.location.replace("/");
  }
  const book = await res.json();
  //we have only one value to show on page so no for
  const template = `  
  <div class="details">   
  <div class="detailscover">
      <img src="${book.cover}"</img>
      </div>
      <div class="detailstext">
    <h1>${book.title}</h1>
    <p>${book.body}</p>
    </div></div>
  `
  container.innerHTML = template;
}

deleteBtn.addEventListener('click', async () => {
  // to delete a particular id
  const res = await fetch('http://localhost:3000/books/' + id, {
    method: 'DELETE'
  });
  window.location.replace("/");//relocate to index page after deleting
})
//wait until dom content is loaded
window.addEventListener('DOMContentLoaded', renderDetails);
