async function renderGrid() {
  const container = document.getElementById('video-grid');
  const videos = await getVideos();

  videos.forEach(video => {
    const card = document.createElement('article');
    card.className = 'card';
    card.onclick = () => window.location.href = `video.html?v=${video.id}`;

    card.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}">
      <div class="card-content">
        <h3 class="card-title">${video.title}</h3>
        <div class="card-meta">${video.channel}</div>
        <div class="card-meta">${video.categories.join(', ')}</div>
      </div>
    `;

    container.appendChild(card);
  });
}

renderGrid();
