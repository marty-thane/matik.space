document.getElementById("searchInput").addEventListener("input", function () {
    var searchQuery = normalize(this.value.toLowerCase());
    var posts = document.getElementById("postIndex").getElementsByTagName("li");

    for (var i = 0; i < posts.length; i++) {
        var postLink = posts[i].getElementsByTagName("a")[0];
        var postTitle = normalize(postLink.textContent.toLowerCase());

        if (postTitle.includes(searchQuery)) {
            posts[i].style.display = "inline-block";
        } else {
            posts[i].style.display = "none";
        }
    }
});

function normalize(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

