import "../css/style.sass"
import json from "../json/items.json"
function importAll(r) {
    let items = {};
    r.keys().map((item, index) => { items[item.replace('./', '')] = r(item); });
    return items;
}

const items = importAll(require.context('../items', false, /\.(png|jpe?g|gif|mp3|mp4)$/));

class Gallery {
    constructor() {
        this.items = json;
        setTimeout(function () {
            gallery.renderGallery();
        }, 50);
    }

    renderGallery() {
        let galleryHtml = '';
        this.items.forEach(item => {
            const galleryItem = new GalleryItem(item.src, item.title);
            if (/\.(png|gif|jpe?g)$/i.test(item.src)) {
                galleryHtml += galleryItem.renderImg();
            }
            else if (/\.mp3$/i.test(item.src)) {
                galleryHtml += galleryItem.renderAudio();
            }
            else if (/\.mp4$/i.test(item.src)) {
                galleryHtml += galleryItem.renderVideo();
            }
        });
        document.querySelector('.gallery').innerHTML = galleryHtml;
    }
}

class GalleryItem {
    constructor(src, title) {
        this.src = src;
        this.title = title;
    }
    renderImg() {
        return `<div class="gallery-item">
        <div>
        <img class="gallery-img" src="${this.src}" alt="img">
        </div>
        <h4>${this.title}</h4>
        </div>`
    }
    renderAudio() {
        return ` <div class="gallery-item">
        <div>
        <audio controls>
        <source src="${this.src}" type="audio/mpeg">
      </audio> 
        </div>
        <h4>${this.title}</h4>
        </div>`
    }
    renderVideo() {
        return ` <div class="gallery-item">
        <div>
        <video width="320" height="240" controls>
        <source src="${this.src}" type="video/mp4">
      </video> 
      </div>
        <h4>${this.title}</h4>
        </div>`
    }
}

const gallery = new Gallery();
