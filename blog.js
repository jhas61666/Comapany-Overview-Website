const posts = [
  {
    title: "The Importance of Chevron Belts",
    img: "https://i0.wp.com/www.yuhaitechnology.com/wp-content/uploads/2019/12/gallery-01.jpg?w=600&ssl=1",
    excerpt: "Chevron belts help in transporting materials efficiently on slopes and prevent rollback...",
    tag: "chevron"
  },
  {
    title: "Heat Resistant Conveyor Belts",
    img: "https://i0.wp.com/www.yuhaitechnology.com/wp-content/uploads/2019/12/gallery-02.jpg?w=600&ssl=1",
    excerpt: "Learn how heat-resistant belts enhance durability in high-temperature environments...",
    tag: "heat-resistant"
  },
  {
    title: "Key Considerations When Buying Conveyor Belts",
    img: "https://i0.wp.com/www.yuhaitechnology.com/wp-content/uploads/2019/12/gallery-03.jpg?w=600&ssl=1",
    excerpt: "Before purchasing, consider these factors for long-lasting and effective conveyor use...",
    tag: "purchasing"
  }
];

let postIndex = 0;

function loadMorePosts() {
  const container = document.getElementById('postContainer');
  const maxToShow = 2;
  const nextPosts = posts.slice(postIndex, postIndex + maxToShow);
  nextPosts.forEach(post => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `
      <img src="${post.img}" alt="${post.title}">
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <a class="read-more" href="#">Read more</a>
    `;
    container.appendChild(div);
  });
  postIndex += maxToShow;
  if (postIndex >= posts.length) {
    document.querySelector('.load-more-wrapper').style.display = 'none';
  }
}

function filterByTag(tag) {
  const container = document.getElementById('postContainer');
  container.innerHTML = '';
  const filtered = posts.filter(p => p.tag.includes(tag));
  filtered.forEach(post => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `
      <img src="${post.img}" alt="${post.title}">
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <a class="read-more" href="#">Read more</a>
    `;
    container.appendChild(div);
  });
}

function filterPosts() {
  const input = document.getElementById('searchBox').value.toLowerCase();
  const container = document.getElementById('postContainer');
  container.innerHTML = '';
  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(input) ||
    p.excerpt.toLowerCase().includes(input)
  );
  filtered.forEach(post => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `
      <img src="${post.img}" alt="${post.title}">
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <a class="read-more" href="#">Read more</a>
    `;
    container.appendChild(div);
  });
}

// Load initial posts on page load
window.onload = loadMorePosts;
