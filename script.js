/* script.js
 - Simple gallery builder + lightbox
 - How to use: add your image URLs to the `images` array below.
 - Then commit this file and reload index.html (or deploy).
*/

/* ---------- 1) Put your image URLs here ----------
 Replace the sample URL(s) with your Cloudinary "secure" image links.
 Example Cloudinary URL format: https://res.cloudinary.com/<cloud-name>/image/upload/v12345678/yourfile.jpg
*/
const images = [
  // starter sample (transparent placeholder). Replace with Cloudinary URLs.
  "https://res.cloudinary.com/dk2motd7g/image/upload/v1762734999/DSC_2652_xfs2ot.jpg",
  "https://res.cloudinary.com/dk2motd7g/image/upload/v1762734999/DSC_0887_glzuid.jpg",
  "https://res.cloudinary.com/dk2motd7g/image/upload/v1762735001/DSC_1004_oreprt.jpg",
  "https://res.cloudinary.com/dk2motd7g/image/upload/v1762735000/DSC_2940_arwjvl.jpg",
  "https://res.cloudinary.com/dk2motd7g/image/upload/v1762734999/DSC_3220_skoex3.jpg",
  "https://res.cloudinary.com/dk2motd7g/image/upload/v1762734999/DSC_1009_cpkje7.jpg",
  "https://res.cloudinary.com/dk2motd7g/image/upload/v1762734994/DSC_3433_ywavt3.jpg",
  "https://res.cloudinary.com/dk2motd7g/image/upload/v1762735547/DSC_1486_ghvjmt.jpg",
  "https://res.cloudinary.com/dk2motd7g/image/upload/v1762735553/DSC_1536_ajawaa.jpg"
];

/* ---------- 2) Build gallery cards from the array ---------- */
function buildGallery() {
  const gallery = document.querySelector(".gallery");
  if (!gallery) return;

  // Clear any existing content
  gallery.innerHTML = "";

  images.forEach((src, idx) => {
    const card = document.createElement("div");
    card.className = "card";

    const a = document.createElement("a");
    a.className = "img-link";
    a.href = "#";
    a.dataset.index = idx;

    const img = document.createElement("img");
    img.className = "thumb";
    img.src = src;
    img.alt = `Flavorpix ${idx + 1}`;

    a.appendChild(img);

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.innerHTML = `<h3 class="title">Photo ${idx + 1}</h3><p class="caption">Click to view — replace this text after uploading to Cloudinary.</p>`;

    card.appendChild(a);
    card.appendChild(meta);
    gallery.appendChild(card);
  });

  // Attach click handlers after creation
  gallery.querySelectorAll(".img-link").forEach(link => {
    link.addEventListener("click", openLightboxFromLink);
  });
}

/* ---------- 3) Lightbox implementation ---------- */
function createLightbox() {
  // If exists, return existing
  if (document.querySelector(".lightbox")) return;

  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `<img src="" alt="Full view"><button class="close-btn" aria-label="close" style="position:absolute;top:24px;right:28px;background:transparent;border:none;color:white;font-size:28px;cursor:pointer;">✕</button>`;

  // click anywhere outside image closes
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.classList.contains("close-btn")) {
      closeLightbox();
    }
  });

  // Esc to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  document.body.appendChild(lb);
}

// Open lightbox for given index
function openLightboxFromLink(e) {
  e.preventDefault();
  const idx = Number(this.dataset.index);
  openLightbox(idx);
}

function openLightbox(index) {
  createLightbox();
  const lb = document.querySelector(".lightbox");
  const img = lb.querySelector("img");
  img.src = images[index];
  img.alt = `Flavorpix ${index + 1}`;
  lb.classList.add("open");
  // allow left/right navigation
  lb.dataset.index = index;
  lb.focus();
}

// Close
function closeLightbox() {
  const lb = document.querySelector(".lightbox");
  if (!lb) return;
  lb.classList.remove("open");
  // optional: remove src to stop any playing videos (if any)
  const img = lb.querySelector("img");
  if (img) img.src = "";
}

/* ---------- 4) Optional: keyboard nav left/right ---------- */
document.addEventListener("keydown", (e) => {
  const lb = document.querySelector(".lightbox");
  if (!lb || !lb.classList.contains("open")) return;
  let index = Number(lb.dataset.index || 0);
  if (e.key === "ArrowRight") {
    index = Math.min(images.length - 1, index + 1);
    openLightbox(index);
  } else if (e.key === "ArrowLeft") {
    index = Math.max(0, index - 1);
    openLightbox(index);
  }
});

/* ---------- 5) Init on DOM ready ---------- */
document.addEventListener("DOMContentLoaded", () => {
  buildGallery();
  createLightbox();
});
