const formEl = document.querySelector('form');
const answEl = document.querySelector('.answer');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(formEl);
  
  axios.post('/', data)
    .then((r) => {
      answEl.innerHTML = r.data;
    })
    .catch((error) => {
      console.log(error);
    });

});