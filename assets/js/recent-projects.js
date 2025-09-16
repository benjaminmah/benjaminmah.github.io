const recentProjects = [
  {
    title: "Audio Style Transfer",
    image: "/assets/img/audio-style-transfer.jpeg",
    shortDesc: "Researched a new method of style transfer using CNNs",
    details: `
      <ul>
        <li><b>Tools:</b> PyTorch, Librosa, NoiseReduce</li>
        <li>Developed a neural style transfer model to transform non-standard English accents into a standardized accent, validated using Google’s ASR model to calculate Word Error Rate (WER).</li>
        <li>Implemented a robust data processing pipeline using Librosa and NoiseReduce, supporting the training of the NST model built with convolutional layers.</li>
      </ul>`,
    links: {
      demo: "https://benjaminmah.com/files/accent-style-transfer.pdf",
      source: "https://github.com/benjaminmah/accent-style-transfer",
    },
  },
  {
    title: "Image Segmentation",
    image: "/assets/img/kidney-image-segmentation.png",
    shortDesc: "FPN to segment vasculature in kidney CT scans",
    details: `
      <ul>
        <li><b>Tools:</b> PyTorch, MONAI, NumPy</li>
        <li>Trained a Feature Pyramid Network to segment renal vasculature on CT scans.</li>
        <li>Evaluated segmentation quality using Dice score and precision–recall metrics.</li>
      </ul>`,
    links: {
      demo: "https://benjaminmah.com/files/kidney-image-segmentation.pdf",
      source: "https://github.com/benjaminmah/kidney-image-segmentation",
    },
  },
  {
    title: "Sample Project 1",
    image: "/assets/img/sample-project.jpg",
    shortDesc: "this is a sample project :)",
    details: `
      <ul>
        <li><b>Tools:</b> sample tool 1, sample tool 2</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>`,
    links: {
      demo: "https://google.com",
      source: "https://google.com",
    },
  },
  {
    title: "Sample Project 2",
    image: "/assets/img/sample-project-2.jpg",
    shortDesc: "this is a sample project :)",
    details: `
      <ul>
        <li><b>Tools:</b> sample tool 1, sample tool 2</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>`,
    links: {
      demo: "https://google.com",
      source: "https://google.com",
    },
  },
  {
    title: "Sample Project 3",
    image: "/assets/img/sample-project-3.jpg",
    shortDesc: "this is a sample project :)",
    details: `
      <ul>
        <li><b>Tools:</b> sample tool 1, sample tool 2</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>`,
    links: {
      demo: "https://google.com",
      source: "https://google.com",
    },
  },
  {
    title: "Sample Project 4",
    image: "/assets/img/sample-project-4.jpg",
    shortDesc: "this is a sample project :)",
    details: `
      <ul>
        <li><b>Tools:</b> sample tool 1, sample tool 2</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>`,
    links: {
      demo: "https://google.com",
      source: "https://google.com",
    },
  },
];

(function initRecentProjects() {
  const listEl = document.getElementById("recent-projects");
  const loadMoreBtn = document.getElementById("load-more-projects");
  if (!listEl || !loadMoreBtn) return;

  function projectCardHTML(p) {
    const hasDemo = p.links?.demo;
    const hasSource = p.links?.source;
    return `
      <div class="col s12 m6 l4">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img alt="${p.title}" src="${p.image}" class="activator" style="height:100%;width:100%" />
          </div>
          <div class="card-content">
            <span class="card-title activator teal-text hoverline">
              ${p.title}<i class="mdi-navigation-more-vert right"></i>
            </span>
            <p>${p.shortDesc}</p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text"><small>Accomplishments</small>
              <i class="mdi-navigation-close right"></i>
            </span>
            ${p.details}
            <div class="card-action">
              ${hasDemo ? `<a href="${p.links.demo}" target="_blank"
                class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"
                data-tooltip="View Online"><i class="fa fa-external-link"></i></a>` : ""}
              ${hasSource ? `<a href="${p.links.source}" target="_blank"
                class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"
                data-tooltip="View Source"><i class="fa fa-github"></i></a>` : ""}
            </div>
          </div>
        </div>
      </div>`;
  }

  let shown = 1;

  listEl.innerHTML = recentProjects.slice(0, shown).map(projectCardHTML).join("");

  loadMoreBtn.addEventListener("click", () => {
    if (shown < recentProjects.length) {
      const next = recentProjects[shown];
      listEl.innerHTML += projectCardHTML(next);
      shown++;

      // hide button when we've reached the end
      if (shown >= recentProjects.length) {
        loadMoreBtn.style.display = "none";
      }
    }
  });
})();