import addNewBlogPost from './addNewBlogPost'
import { getDate, validateInput } from './utils';
import { v4 as uuidv4 } from 'uuid';

const renderBlog = ({ blogs, storageKey }) => {
  const blogList = document.querySelector('#blog-list');
  const successMessage = document.querySelector('#post-success');
  const form = document.querySelector('#add-blog-post-form');
  const blogCount = document.createElement('p');

  blogCount.innerText = blogs.length;

  blogs.forEach(({ author, message, date, id }) => addNewBlogPost({ author, message, blogList, date, blogs, id, storageKey }));

  form.addEventListener('submit', e => {
    e.preventDefault();
    const { 
      ["name"]: author,
      ["message"]: message
    } = e.target.elements;

    const newElement = {
      author,
      message,
      data: getDate(),
      id: uuidv4()
    };

    const addBlog = () => {
      blogList.innerHTML = '';
      renderBlog({ blogs: [...blogs, newElement]})
    }
  
    validateInput(author) 
    && validateInput(message) 
    && addBlog()
  });

  form.appendChild(blogCount);
};

export default renderBlog;
