// main.js - behavior for the 2CALC-IT E-Portfolio
//
// Parts of this file:
//   1. Tangent graph (home page)
//   2. Artifact cards (built from the list in data.js)
//   3. Image viewer (click a picture to enlarge it)
//   4. Scroll curve (the sine curve under the menu)
//   5. Mobile menu button
//
// The functions are called at the very bottom of the file.


/* 1. Tangent graph --------------------------------------------------- */

function setupTangentGraph() {
    const originX = 220;
    const originY = 140;
    const scaleX = 62;    // pixels per unit on the x-axis
    const scaleY = 100;   // pixels per unit on the y-axis

    const curve = document.getElementById("graphCurve");
    const tangent = document.getElementById("graphTangent");
    const point = document.getElementById("graphPoint");
    const slider = document.getElementById("graphSlider");
    const readout = document.getElementById("graphReadout");

    // turn math coordinates into SVG coordinates
    const toX = (x) => originX + x * scaleX;
    const toY = (y) => originY - y * scaleY;

    // draw f(x) = sin(x) as a path
    let pathData = "";
    for (let x = -3.4; x <= 3.4; x += 0.05) {
        const command = pathData === "" ? "M" : "L";
        pathData += command + toX(x).toFixed(1) + " " + toY(Math.sin(x)).toFixed(1);
    }
    curve.setAttribute("d", pathData);

    // move the point and the tangent line to where the slider is
    function update() {
        const x = parseFloat(slider.value);
        const y = Math.sin(x);
        const slope = Math.cos(x);      // f'(x) = cos(x)
        const half = 1.3;               // half the length of the tangent line

        tangent.setAttribute("x1", toX(x - half));
        tangent.setAttribute("y1", toY(y - slope * half));
        tangent.setAttribute("x2", toX(x + half));
        tangent.setAttribute("y2", toY(y + slope * half));

        point.setAttribute("cx", toX(x));
        point.setAttribute("cy", toY(y));

        readout.textContent = "f'(" + x.toFixed(2) + ") = " + slope.toFixed(2);
    }

    slider.addEventListener("input", update);
    update();
}


/* 2. Artifact cards -------------------------------------------------- */

// the order the groups appear on the page
const groupOrder = ["Activities", "Examinations", "Projects"];

// stops text from being read as HTML
function escapeHtml(text) {
    const replacements = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
    return String(text).replace(/[&<>"]/g, (character) => replacements[character]);
}

// the picture, video, or typed example at the top of a card
function buildMedia(artifact) {
    if (artifact.example) {
        const title = artifact.exampleTitle || "Worked example";
        const caption = artifact.caption ||
            "Typed example of this problem type. Not a scan of my submitted paper.";
        const lines = artifact.example.map(escapeHtml).join("\n");

        return `
            <div class="example-box">
                <strong>${escapeHtml(title)}</strong>
                <pre>${lines}</pre>
                <small>${escapeHtml(caption)}</small>
            </div>`;
    }

    if (artifact.video) {
        return `<video controls preload="metadata" src="${escapeHtml(artifact.video)}"></video>`;
    }

    return `<img src="${escapeHtml(artifact.image)}" alt="${escapeHtml(artifact.title)}"
                 loading="lazy" tabindex="0">`;
}

// the small pictures under a card (used by the card deck)
function buildThumbnails(artifact) {
    if (!artifact.gallery) {
        return "";
    }

    const pictures = artifact.gallery.map((path, index) => `
        <img src="${escapeHtml(path)}" alt="${escapeHtml(artifact.title)} card ${index + 1}"
             loading="lazy" tabindex="0">`).join("");

    return `<div class="thumbnail-row">${pictures}</div>`;
}

// one full card
function buildCard(artifact, number) {
    const isTech = artifact.topic.includes("IT");
    const extraLinkTarget = isTech ? "#tech" : "#growth";
    const extraLinkText = isTech ? "See how this connects to IT" : "See my growth";
    const tallClass = artifact.tall ? " artifact-media--tall" : "";

    const openLink = artifact.link
        ? `<a class="open-link" href="${escapeHtml(artifact.link)}" target="_blank"
              rel="noopener">Open full file</a>`
        : "";

    return `
        <article class="artifact" id="art-${number}">
            <div class="artifact-media${tallClass}"
                 data-name="${escapeHtml(artifact.video || artifact.image || "")}">
                ${buildMedia(artifact)}
            </div>
            ${buildThumbnails(artifact)}
            <div class="artifact-body">
                <h4>${escapeHtml(artifact.title)}</h4>
                <div class="artifact-meta">
                    Topic: ${escapeHtml(artifact.topic)} | Score: ${escapeHtml(artifact.score)}
                </div>
                <p><strong>Description:</strong> ${escapeHtml(artifact.description)}</p>
                ${openLink}
                <p class="related"><a href="${extraLinkTarget}">${extraLinkText}</a></p>
                <details>
                    <summary>Reflection</summary>
                    <p>${escapeHtml(artifact.reflection)}</p>
                </details>
            </div>
        </article>`;
}

// build every group of cards and put them on the page
function renderArtifacts() {
    const list = document.getElementById("artifactList");

    list.innerHTML = groupOrder.map((group) => {
        const cards = artifacts
            .filter((artifact) => artifact.type === group)
            .map((artifact) => buildCard(artifact, artifacts.indexOf(artifact)))
            .join("");

        return `
            <h3 class="group-title">${group}</h3>
            <div class="card-grid">${cards}</div>`;
    }).join("");

    document.getElementById("artifactCount").textContent = artifacts.length;

    handleMissingFiles(list);
}

// if a picture or video file is not found, show a clear note instead of a broken image
function handleMissingFiles(list) {
    list.querySelectorAll(".artifact-media img, .artifact-media video").forEach((element) => {
        element.addEventListener("error", () => {
            const note = document.createElement("span");
            note.textContent = "Add file: " + element.parentNode.dataset.name;
            element.replaceWith(note);
        });
    });

    // a missing small picture is just removed
    list.querySelectorAll(".thumbnail-row img").forEach((element) => {
        element.addEventListener("error", () => element.remove());
    });
}


/* 3. Image viewer ---------------------------------------------------- */

function setupImageViewer() {
    const viewer = document.getElementById("imageViewer");
    const bigImage = viewer.querySelector("img");

    function openViewer(image) {
        bigImage.src = image.src;
        bigImage.alt = image.alt;
        viewer.showModal();
    }

    document.querySelectorAll(".artifact img").forEach((image) => {
        image.addEventListener("click", () => openViewer(image));
        image.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                openViewer(image);
            }
        });
    });

    // clicking anywhere closes it
    viewer.addEventListener("click", () => viewer.close());
}


/* 4. Scroll curve ---------------------------------------------------- */

function setupScrollCurve() {
    const svg = document.getElementById("scrollCurve");
    const svgNamespace = "http://www.w3.org/2000/svg";
    let progressPath;
    let dot;
    let pathLength = 0;

    function makeElement(tag, className) {
        const element = document.createElementNS(svgNamespace, tag);
        element.setAttribute("class", className);
        return element;
    }

    // draw the curve again (needed when the window size changes)
    function build() {
        const width = svg.clientWidth || 800;
        svg.setAttribute("viewBox", "0 0 " + width + " 30");
        svg.innerHTML = "";

        let pathData = "";
        for (let x = 0; x <= width; x += 4) {
            const y = 15 - 11 * Math.sin((x / width) * 2 * Math.PI * 1.5);
            pathData += (x === 0 ? "M" : "L") + x + " " + y.toFixed(1);
        }

        const basePath = makeElement("path", "curve-base");
        basePath.setAttribute("d", pathData);

        progressPath = makeElement("path", "curve-progress");
        progressPath.setAttribute("d", pathData);

        dot = makeElement("circle", "curve-dot");
        dot.setAttribute("r", "5");

        svg.append(basePath, progressPath, dot);

        pathLength = progressPath.getTotalLength();
        progressPath.style.strokeDasharray = pathLength;
        move();
    }

    // how far down the page we are (0 = top, 1 = bottom)
    function getScrollProgress() {
        const page = document.documentElement;
        const scrollable = page.scrollHeight - page.clientHeight;
        if (scrollable <= 0) {
            return 0;
        }
        return Math.min(1, Math.max(0, page.scrollTop / scrollable));
    }

    function move() {
        const progress = getScrollProgress();
        progressPath.style.strokeDashoffset = pathLength * (1 - progress);

        const position = progressPath.getPointAtLength(pathLength * progress);
        dot.setAttribute("cx", position.x);
        dot.setAttribute("cy", position.y);
    }

    build();
    window.addEventListener("resize", build);
    window.addEventListener("scroll", move, { passive: true });
}


/* 5. Mobile menu button ---------------------------------------------- */

function setupMenuButton() {
    const button = document.querySelector(".menu-button");
    const navBar = document.getElementById("siteNav");
    const desktopWidth = 960;    // same number as the CSS breakpoint
    let scrollWhenOpened = 0;

    function setMenu(isOpen) {
        navBar.classList.toggle("open", isOpen);
        button.setAttribute("aria-expanded", isOpen);
        button.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
        button.textContent = isOpen ? "Close" : "Menu";
    }

    button.addEventListener("click", () => {
        scrollWhenOpened = window.scrollY;
        setMenu(!navBar.classList.contains("open"));
    });

    // close the menu after choosing a link
    navBar.addEventListener("click", (event) => {
        if (event.target.classList.contains("nav-link")) {
            setMenu(false);
        }
    });

    // close it when the screen gets wide or when the user scrolls away
    window.addEventListener("resize", () => {
        if (window.innerWidth > desktopWidth) {
            setMenu(false);
        }
    });

    window.addEventListener("scroll", () => {
        const movedAway = Math.abs(window.scrollY - scrollWhenOpened) > 60;
        if (navBar.classList.contains("open") && movedAway) {
            setMenu(false);
        }
    }, { passive: true });
}


/* Start everything -------------------------------------------------- */

setupTangentGraph();
renderArtifacts();
setupImageViewer();
setupScrollCurve();
setupMenuButton();
