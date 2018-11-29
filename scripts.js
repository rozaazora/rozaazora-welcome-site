document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  let animationTimeout = 5000;

  if (document.querySelectorAll(".ra-page-loader").length === 0) {
    animationTimeout = 0;
  }


  setTimeout(() => {
    body.classList.remove("not-loaded");
  }, animationTimeout);

});
