// Should work with browsser console

(() => {
  const entries =
    Array.from(document.querySelectorAll("music-container music-image-row"));

  let playlist = [];

  entries.forEach((e) => {
    playlist.push({
         index: parseInt(e.querySelector(".index").innerText),
         title: e.querySelector(".col1 > music-link").title,
        artist: e.querySelector(".col2 > music-link").title,
         album: e.querySelector(".col3 > music-link").title,
      duration: e.querySelector(".col4 > music-link").title
    })
  })

  let pretty_json = JSON.stringify(playlist, null, 2);
  download(pretty_json, "application/json", composeName());
})();

function download(content, mimeType, filename){
  const a = document.createElement('a') // Create "a" element
  const blob = new Blob([content], {type: mimeType}) // Create a blob (file-like object)
  const url = URL.createObjectURL(blob) // Create an object URL from blob
  a.setAttribute('href', url) // Set "a" element link
  a.setAttribute('download', filename) // Set download filename
  a.click() // Start downloading
  a.remove();
}

function composeName(){
  const header = document.querySelector("music-detail-header[label]").shadowRoot;
  const playlistType =
    header.querySelector(".label").innerText
  const playlistTitle =
    header.querySelector("[title]").innerText

  return `${playlistType} - ${playlistTitle}`
}