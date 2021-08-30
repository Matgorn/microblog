import createNewBlogElement from './createNewBlogElement';
import updateLocalStorage from './updateLocalStorage';
import { getDate, handleSuccess, getValidData, clearFields, getRemainingBlogs, getIfNotAvailable } from './utils';
import { v4 as uuidv4 } from 'uuid';

const handleDeletePost = ({ newBlogPost, newBlog, blogs, blogList, storageKey }) => e => {
  const filteredPosts = getRemainingBlogs({ blogs, newBlog });

  blogList.removeChild(newBlogPost);
  
  updateLocalStorage(filteredPosts, storageKey);
};

const handleNewBlogElement = ({ blogList, newBlogPost, newBlog, blogs, storageKey }) => {
  newBlogPost.innerHTML = createNewBlogElement(newBlog);
  newBlogPost.classList.add('blog-post');

  newBlogPost.querySelector('.blog-delete').addEventListener('click', handleDeletePost({ newBlogPost, newBlog, blogs, blogList, storageKey }));

  blogList.insertBefore(newBlogPost, blogList.firstChild);
  updateLocalStorage(blogs, storageKey);
};

export default ({ author, message, blogList, successMessage, date, blogs, id, storageKey }) => {
  const newBlogPost = document.createElement('div');
  const { authorValue, messageValue } = getValidData({ author, message });
  const newBlog = {
    id: getIfNotAvailable(id, uuidv4),
    author: authorValue,
    message: messageValue,
    date: getIfNotAvailable(date, getDate)
  };

  handleNewBlogElement({ blogList, newBlogPost, newBlog, blogs, storageKey });
  clearFields({ author, message });
  handleSuccess({ successMessage, blogs, newBlog, storageKey });
};
