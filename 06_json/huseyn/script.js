fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(data => {
  const postList = document.querySelector('#post-list');
  data.sort(() => Math.random() - 0.5).slice(0, 10).forEach(post => {
    const listItem = document.createElement('li');
    const card = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('h2');
    card.classList.add('card');
    img.src = post.thumbnailUrl;
    title.textContent = post.title;
    card.appendChild(img);
    card.appendChild(title);
    listItem.appendChild(card);
    postList.appendChild(listItem);
  });
})
.catch(error => console.error(error));
