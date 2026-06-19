fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json()).then(data=>{console.log(data)}) //GET

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'My Post',
    body: 'Learning fetch',
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    title: 'Updated Title',
    body: 'Updated Body',
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Title'
  })
})
.then(response => response.json())
.then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
.then(response => {
  console.log(response.status);
});
