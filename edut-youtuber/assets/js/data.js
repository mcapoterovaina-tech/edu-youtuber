async function getVideos() {
  const res = await fetch('data/videos.json');
  return await res.json();
}
