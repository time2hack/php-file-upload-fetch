const button = document.querySelector('#submit');


button.addEventListener('click', () => {
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
