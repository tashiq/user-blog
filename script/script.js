const blogs = document.getElementsByClassName('blogs')[0];


function createBlog(heading, imgLink, paragraph) {
    const blogStructure = document.createElement('article');
    blogStructure.classList.add('rounded-3', 'bg-light', 'p-2', 'blog');
    blogStructure.innerHTML = '<h3>' + heading + '</h3>' + '<img src=\"' + imgLink + '\" class=\"img-fluid my-4\"><p>' + paragraph + '</p>';
    blogs.appendChild(blogStructure);
}
createBlog('a', 'images/indonesia.jpg', 'c');