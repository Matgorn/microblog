import updateLocalStorage from "./updateLocalStorage";

export const getValidData = ({ author, message }) => ({
  authorValue: getValueIfObject(author),
  messageValue: getValueIfObject(message)
});

export const getDate = _ => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
};

export const getValueIfObject = prop => typeof prop === 'object' ? prop.value : prop;

export const validateInput = element => {
  const errorMessage = document.querySelector(`#${element.name}-danger`);

  if (element.value.length <= 0) {
    errorMessage.style.display = 'block';

    return false;
  }
  errorMessage.style.display = 'none';

  return true;
};

export const showSuccessMessage = ({ successMessage, timeout = 5000 }) => {
  successMessage.style.display = 'block';

  setTimeout(() => {
    successMessage.style.display = 'none';
  }, timeout);

  return true;
};

export const fetchFromLocalStorage = storageKey => {
  let data = localStorage.getItem(storageKey);

  if (!data || !!data.legth) { return null }

  return JSON.parse(data);
};

export const clearFields = ({ author, message }) => {
  if (message.value && author.value) {
    message.value = ''
    author.value = ''
  };
};

export const handleSuccess = ({ successMessage, blogs, newBlog, storageKey }) => {
  if (successMessage && showSuccessMessage({ successMessage })) {
    console.log([...blogs, newBlog])
    updateLocalStorage([...blogs, newBlog], storageKey);
  };
};

export const getRemainingBlogs = ({ blogs, newBlog }) => blogs.filter(({ id }) => id !== newBlog.id);

export const getIfNotAvailable = (el, func) => el ? el : func();
