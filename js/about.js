document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".read-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const moreText = btn.nextElementSibling;

      if (moreText.style.display === "block") {
        moreText.style.display = "none";
        btn.textContent = "Read More";
      } else {
        moreText.style.display = "block";
        btn.textContent = "Read Less";
      }
    });
  });
});
