fetch('/posts')
    .then(response => response.json())
    .then(data => {
        const postList = document.getElementById('post_list');
        data.posts.forEach(post => {
            const list_item = document.createElement('li');
            list_item.classList.add('post_item');
            list_item.innerHTML = `
                        <h3>${post.titolo}</h3>
                        <p>${post.contenuto}</p>
                        <img src="${post.immagine}" alt="${post.titolo}" width="100">
                        <p>Tags: ${post.tags}</p>
                        <hr>
                    `;
            postList.appendChild(list_item);
        });
    })