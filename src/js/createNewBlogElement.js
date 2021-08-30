export default ({ author, message, date }) => (`
  <h3 class="blog-author">Author: ${author}</h3>
  <p class="blog-date">Date: ${date}</p>
  <p class="blog-message">${message}</p>
  <button class="blog-delete">Delete</button>
`);
