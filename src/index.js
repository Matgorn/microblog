import data from './data/posts.json';
import renderBlog from './js/renderBlog';
import { fetchFromLocalStorage } from './js/utils';

const storageKey = 'blogs'
const blogs = fetchFromLocalStorage(storageKey) || data.blogs;

renderBlog({ blogs, storageKey });
