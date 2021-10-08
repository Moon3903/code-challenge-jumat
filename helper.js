export const getPosts = async () => {
    // EDIT HERE
    let authorDetail;
    try {
        authorDetail = await fetch('https://jsonplaceholder.typicode.com/posts/'+Math.floor(Math.random() * 100));
    } catch (error) {
        console.log('getPost', error);
        throw error;
    }
    let obj = {
        randomPic : await(getRandomPic()),
        randomProfile : await(getRandomProfile()),
        commentList : await(getPostComments()),
        author : await(getAuthor())
    }
    return obj;
};

export const getPost = async (post_id) => {
    // EDIT HERE
    let postDetail;
    try {
        postDetail = await fetch('https://jsonplaceholder.typicode.com/posts/'+Math.floor(Math.random() * 100));
    } catch (error) {
        console.log('getPost', error);
        throw error;
    }

    let obj = {
        randomPic : await(getRandomPic()),
        randomProfile : await(getRandomProfile()),
        commentList : await(getPostComments()),
        detail : await(postDetail.json()),
        author : await(getAuthor())
    }
    return obj;
};

export const getPostComments = async (post_id) => {
    // EDIT HERE
    try {
        const commentList = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        return commentList.json();
    } catch (error) {
        console.log('getPost', error);
        throw error;
    }
};

export const getAuthor = async (user_id) => {
    // EDIT HERE
    try {
        const author = await fetch('https://jsonplaceholder.typicode.com/users/'+Math.floor(Math.random() * 10));
        return author.json();
    } catch (error) {
        console.log('getPost', error);
        throw error;
    }
};

export const getPostsByAuthor = async (author_id) => {
    // EDIT HERE
};

export const getRandomPic = async () => {
    try {
        const image = await fetch('https://source.unsplash.com/random/720x480');
        return image.url;
    } catch (error) {
        console.log('getRandomPic', error);
        throw error;
    }
};

export const getRandomProfile = async () => {
    try {
        const image = await fetch('https://source.unsplash.com/480x480/?profile');
        return image.url;
    } catch (error) {
        console.log('getRandomProfile', error);
        throw error;
    }
};export const getPosts = async () => {
    // EDIT HERE
    let authorDetail;
    try {
        authorDetail = await fetch('https://jsonplaceholder.typicode.com/posts/'+Math.floor(Math.random() * 100));
    } catch (error) {
        console.log('getPost', error);
        throw error;
    }
    let obj = {
        randomPic : await(getRandomPic()),
        randomProfile : await(getRandomProfile()),
        commentList : await(getPostComments()),
        author : await(getAuthor())
    }
    return obj;
};

export const getPost = async (post_id) => {
    // EDIT HERE
    let postDetail;
    try {
        postDetail = await fetch('https://jsonplaceholder.typicode.com/posts/'+Math.floor(Math.random() * 100));
    } catch (error) {
        console.log('getPost', error);
        throw error;
    }

    let obj = {
        randomPic : await(getRandomPic()),
        randomProfile : await(getRandomProfile()),
        commentList : await(getPostComments()),
        detail : await(postDetail.json()),
        author : await(getAuthor())
    }
    return obj;
};

export const getPostComments = async (post_id) => {
    // EDIT HERE
    try {
        const commentList = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        return commentList.json();
    } catch (error) {
        console.log('getPost', error);
        throw error;
    }
};

export const getAuthor = async (user_id) => {
    // EDIT HERE
    try {
        const author = await fetch('https://jsonplaceholder.typicode.com/users/'+Math.floor(Math.random() * 10));
        return author.json();
    } catch (error) {
        console.log('getPost', error);
        throw error;
    }
};

export const getPostsByAuthor = async (author_id) => {
    // EDIT HERE
};

export const getRandomPic = async () => {
    try {
        const image = await fetch('https://source.unsplash.com/random/720x480');
        return image.url;
    } catch (error) {
        console.log('getRandomPic', error);
        throw error;
    }
};

export const getRandomProfile = async () => {
    try {
        const image = await fetch('https://source.unsplash.com/480x480/?profile');
        return image.url;
    } catch (error) {
        console.log('getRandomProfile', error);
        throw error;
    }
};