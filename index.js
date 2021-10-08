import { getPosts, getRandomPic } from './helpers.js';

const elDaftarBerita = document.querySelector('#daftar-berita');

/**
 *
 * @param {String} thumbnail => url yang kita ambil menggunakan Unsplash API
 * @param {Object} post => object post yang kita ambil dari jsonplaceholder API
 * @returns DOM Element
 */
const createPostElement = (thumbnail, post) => {
  const elCol = document.createElement('div');
  const elCard = document.createElement('div');
  const elCardImg = document.createElement('img');
  const elCardBody = document.createElement('div');
  const elCardTitle = document.createElement('h5');
  const elCardBtn = document.createElement('a');

  elCol.classList.add('col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3');
  elCard.classList.add('card', 'w-100', 'my-3');
  elCardImg.classList.add('card-img-top');
  elCardBody.classList.add('card-body');
  elCardTitle.classList.add('card-title');
  elCardBtn.classList.add('btn', 'btn-primary', 'w-100', 'stretched-link');

  elCardImg.setAttribute('alt', 'skilvul');
  elCardBtn.innerHTML = 'Read More';

  elCardBody.appendChild(elCardTitle);
  elCardBody.appendChild(elCardBtn);
  elCard.appendChild(elCardImg);
  elCard.appendChild(elCardBody);
  elCol.appendChild(elCard);

  // EDIT HERE
  
  return elCol;
};

const renderPosts = async () => {
  // EDIT HERE
  let post = await getPost();
    console.log(post);
    let dataUser = users.results;
    let html = '';
    Array.from(dataUser).forEach(user => {
    let htmlRender =
    `<div class="user">
        <img src = "${user.picture.medium}">
        <h2>${user.name.first} ${user.name.last}</h2>
        <div class="email">
            <a href="email:${user.email}">${user.email}</a>
        </div>
    </div>`;
    html += htmlRender;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
};

renderPosts();