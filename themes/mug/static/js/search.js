document.getElementById('searchInput').addEventListener('input', function () {
	var searchQuery = this.value.toLowerCase();
	var posts = document.getElementById('posts').getElementsByTagName('li');

	for (var i = 0; i < posts.length; i++) {
		var postLink = posts[i].getElementsByTagName('a')[0];
		var postTitle = postLink.textContent.toLowerCase();

		if (postTitle.includes(searchQuery)) {
			posts[i].style.display = 'block';
		} else {
			posts[i].style.display = 'none';
		}
	}
});
