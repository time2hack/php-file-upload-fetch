const submitButton = document.querySelector('#submit');
const uploadButton = document.querySelector('#upload');

const showMessage = (message, type)  => {
  const cssClass = `alert-${type}`;
  const messageEl = document.querySelector('#message');
  messageEl.classList.remove('d-none');
  messageEl.classList.add(cssClass);
  messageEl.innerHTML = message;
  setTimeout(() => {
    messageEl.classList.add('d-none');
    messageEl.classList.remove(cssClass);
  }, 5000);
}

const uploadedAction = (data) => {
  console.log(data)
  showMessage(data.message, data.status);
}

submitButton.addEventListener('click', () => {
  const form = new FormData(document.querySelector('#profileData'));
  const headers = new Headers();
  const url = './upload.php'
  const request = new Request(url, {
    method: 'POST',
    headers: headers,
    body: form
  });

  fetch(request)
    .then(response => response.json())
    .then(uploadedAction)
})

uploadButton.addEventListener('click', () => {
  const form = new FormData();
  const file = document.querySelector('#upfile-2').files[0];
  form.append('upfile', file);
  const headers = new Headers();
  
  const url = './upload.php'
  const request = new Request(url, {
    method: 'POST',
    headers: headers,
    body: form
  });

  fetch(request)
    .then(response => response.json())
    .then(uploadedAction)
})
