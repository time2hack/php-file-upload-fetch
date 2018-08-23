const submitButton = document.querySelector('#submit');
const uploadButton = document.querySelector('#upload');


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
    .then(data => { console.log(data); })
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
    .then(data => { console.log(data); })
})
