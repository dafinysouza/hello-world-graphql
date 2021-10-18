const consult = '{ helloWorld }';

const createHelloWorld = (string) => {
  const body = document.querySelector('body');

  body.innerHTML = string;
}

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/JSON'
  },
  body: JSON.stringify({
    query: consult
  })
}

fetch('http://localhost:4000/graphql', options)
  .then(res => res.json())
  .then(content => createHelloWorld(content.data.helloWorld));