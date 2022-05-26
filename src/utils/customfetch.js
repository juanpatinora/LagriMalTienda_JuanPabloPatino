let todo_bien = true;

const customfetch = (time, task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (todo_bien) {
        resolve(task);
      } else {
        reject("Hay un error en el custom fetch :(");
      }
    }, time);
  });
};

export default customfetch;
