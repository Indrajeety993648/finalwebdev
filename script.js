
const postButton = document.querySelector('.main .comment button');
const mainDiv = document.querySelector('.main');
postButton.addEventListener('click', function() {

  const newPost = document.createElement('div');
  newPost.classList.add('feed');

  const text = document.querySelector('.main .comment p').innerText;
  const image = document.querySelector('.main .comment img').src;
  newPost.innerHTML = 
    <img src="${image}" alt="">
    <p>${text}</p>
</img>;


  mainDiv.appendChild(newPost);
  document.querySelector('.main .comment p').innerText = '';
});