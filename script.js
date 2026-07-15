/* =========================================================
   Mirella Soardi Nutricionista — script principal
   Sem dependências, sem framework.
   ========================================================= */

(function () {
  "use strict";

  function initNav() {
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.addEventListener("click", function (event) {
      var target = event.target.closest("a");
      if (target && window.matchMedia("(max-width: 779px)").matches) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function initPlayerFacade() {
    var facade = document.getElementById("playerFacade");
    if (!facade) return;

    function loadVideo() {
      var videoId = facade.getAttribute("data-video-id");
      if (!videoId) return;

      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(videoId) + "?autoplay=1&rel=0";
      iframe.title = "Live — Mirella Soardi Nutricionista";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.loading = "eager";

      facade.innerHTML = "";
      facade.appendChild(iframe);
      facade.removeAttribute("role");
      facade.removeAttribute("tabindex");
    }

    facade.addEventListener("click", loadVideo);
    facade.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        loadVideo();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initPlayerFacade();
  });
})();