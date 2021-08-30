export default (updatedData, storageKey) => {
  try {
    localStorage.removeItem(storageKey);
    localStorage.setItem(storageKey, JSON.stringify(updatedData));
  } catch(err) {
    localStorage.removeItem(storageKey);

    throw new Error(err);
  };
};
