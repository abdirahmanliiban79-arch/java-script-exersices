const blogForm = document.querySelector('.blog-form');
const postTitle = document.querySelector('.post-title');
const urlInput = document.querySelector('.url-input');
const postInput = document.querySelector('#post-input');
const newBlog = document.querySelector('.New-blog')

document.addEventListener('DOMContentLoaded',loadPosts)

function loadPosts(){
    const posts = getPostsFromLocalStorage();

    posts.forEach(post => {
        addPostToDOM(post)
    });
}


blogForm.addEventListener('submit',addPost);
function addPost(event){
    event.preventDefault();

    const title = postTitle.value.trim();
    const url = urlInput.value.trim();
    const content = postInput.value.trim();
    if(title !== '' && content !== ''){
        const post = {
            id : Date.now(),
            title : title,
            image : url || 'default-image.jpg',
            comment : content
        }

    
        addPostToDOM(post);
        savePostToLocalStorage(post)
        blogForm.reset();
    
    }
}
function addPostToDOM(post){
    const div = document.createElement('div');
    div.classList = 'NewBlog'

    div.innerHTML = `   
                <h2>Posted</h1> 
                <h3 class="title">${post.title}</h3>
                ${post.image ? `<img class="image" src="${post.image}" alt="newBlog-image">` : ''}
                <p class="post">${post.comment}</p>
                <div class="btn">
                <button class="Edit-btn">Edit</button>
                <button class="delete-btn">delete post</button>
                </div>`



    newBlog.appendChild(div)

    attachEventListeners(post,div)

}

function attachEventListeners(post,div){
    const deleteBtn = div.querySelector('.delete-btn');
    const editBtn = div.querySelector('.Edit-btn')

    editBtn.addEventListener('click',function(){
        handleEdit(post.id,div)
    })

    deleteBtn.addEventListener('click',function(){
        // console.log('delete bottom clicked')
        handleDelete(post.id,div)
    })

}

function handleEdit(id,div){
    const postTitle = div.querySelector('.title');
    const Post = div.querySelector('.post');
    const image = div.querySelector('.image')

    const newTitle = prompt('Enter your post title',postTitle.textContent);
    const newPost = prompt('Enter your post Text',Post.textContent);
    const newURL = prompt('Enter your post url',image.src);

    // const post = newTitle && newPost && newURL

    if(newTitle && newPost && newURL){
        updatePost(id,newTitle,newPost,newURL)

        postTitle.textContent = newTitle;
        Post.textContent = newPost;
        image.src = newURL;
    }
}

function updatePost(id,newTitle,newPost,newURL){
    const Posts = getPostsFromLocalStorage();


    const post = Posts.find(post => post.id == id)

    if(post){
        post.title = newTitle;
        post.comment = newPost;
        post.image = newURL;
        localStorage.setItem('blogPosts',JSON.stringify(Posts))
    }

}

function handleDelete(id,div){
    let posts = getPostsFromLocalStorage();

    posts = posts.filter(post => post.id !== id)
    localStorage.setItem('blogPosts',JSON.stringify(posts));

    div.remove();
}

function savePostToLocalStorage(post){
    const storedPosts = getPostsFromLocalStorage();
    storedPosts.push(post)
    localStorage.setItem('blogPosts',JSON.stringify(storedPosts))
}

function getPostsFromLocalStorage(){
  const storedPosts = localStorage.getItem('blogPosts')
  return storedPosts ? JSON.parse(storedPosts) : [];
}