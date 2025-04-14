function myFunction() {
    const moreBlogs = document.getElementById("more-blogs")
    const viewMore = document.getElementById("view-more")
    
    
    
    if (viewMore.innerHTML === "View Less") {
        moreBlogs.style.display = "none"
        viewMore.innerHTML = "View More"
    } else {
        moreBlogs.style.display = "unset"
        viewMore.innerHTML = "View Less"
    }
    
}