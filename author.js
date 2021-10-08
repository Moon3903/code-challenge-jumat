const params;

const elPageTitle = document.querySelector('#page-title');
const elPostList = document.querySelector('#post-list');
const elLoading = document.querySelector('#loading');
const elEmptyPost = document.querySelector('#empty-post');

const createPostElement = (thumbnail, post) => {
  const elCol = document.createElement('div');
  elCol.classList.add('col-12');
  elCol.insertAdjacentHTML(
    'beforeend',
    `<div class="card mb-3 w-100">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${thumbnail}" class="img-fluid rounded-start" alt="skilvul" />
        </div>
        <div class="col-md-8 d-flex justify-between">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.body}</p>
            <a href="/post.html?post_id=${post.id}" class="btn btn-primary w-100 stretched-link">Read More</a>
          </div>
        </div>
      </div>
    </div>`
  );
};

export const renderPosts = async() => {
  try {
    let res = await user.get('/posts');
    let posts = res.data;
    // this will re render the view with new data
    this.setState({
      Posts: posts.map((post, i) => (
        <li key={i} className="list-group-item">{post.text}</li>
      ))
    });
  } catch (err) {
    console.log(err);
  }
}

function render() {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {this.user.Posts}
      </ul>
    </div>
  );
}

renderPosts();