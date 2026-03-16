(() => {
  "use strict";

  const YEARS = [2025, 2024, 2023, 2022, 2021, 2020];

  // --- Index page: render year grid ---
  const yearGrid = document.getElementById("year-grid");
  if (yearGrid) {
    YEARS.forEach((year) => {
      const a = document.createElement("a");
      a.href = `year.html?y=${year}`;
      a.className = "year-card";
      a.textContent = year;
      yearGrid.appendChild(a);
    });
  }

  // --- Year page: load memes from JSON ---
  const yearTitle = document.getElementById("year-title");
  const memeList = document.getElementById("meme-list");

  if (yearTitle && memeList) {
    const params = new URLSearchParams(window.location.search);
    const year = params.get("y");

    if (!year) {
      window.location.href = "index.html";
      return;
    }

    document.title = `${year} - PUA Meme History`;
    yearTitle.textContent = `${year}年のミーム`;

    fetch(`../data/${year}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.json();
      })
      .then((memes) => {
        if (!memes.length) {
          showEmpty();
          return;
        }
        memes.forEach((meme, i) => {
          memeList.appendChild(createMemeCard(meme, i + 1));
        });
      })
      .catch(() => {
        showEmpty();
      });
  }

  function showEmpty() {
    const el = document.getElementById("meme-list");
    if (el) {
      el.innerHTML =
        '<div class="empty-state"><p>この年のミームはまだ登録されていません。<br>data/ フォルダにJSONを追加してください。</p></div>';
    }
  }

  function createMemeCard(meme, rank) {
    const card = document.createElement("div");
    card.className = "meme-card";

    let html = `<div class="meme-rank">#${rank}</div>`;
    html += `<div class="meme-name">${escapeHtml(meme.name)}</div>`;

    if (meme.description) {
      html += `<div class="meme-description">${escapeHtml(meme.description)}</div>`;
    }

    if (meme.origin) {
      html += `<div class="meme-origin">${escapeHtml(meme.origin)}</div>`;
    }

    if (meme.image) {
      html += `<img class="meme-image" src="${escapeHtml(meme.image)}" alt="${escapeHtml(meme.name)}" loading="lazy">`;
    }

    card.innerHTML = html;
    return card;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // --- Lightbox ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (lightbox && lightboxImg) {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("meme-image")) {
        lightboxImg.src = e.target.src;
        lightboxImg.alt = e.target.alt;
        lightbox.classList.add("active");
      }
    });

    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("active");
      lightboxImg.src = "";
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("active")) {
        lightbox.classList.remove("active");
        lightboxImg.src = "";
      }
    });
  }
})();
