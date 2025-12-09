const toggles = document.querySelectorAll(".faq-item__toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const faqItem = toggle.parentElement;
    const answer = faqItem.nextElementSibling;
    const icon = toggle.querySelector(".btn__image");

    if (answer.classList.contains("open")) {
      answer.classList.remove("open");
      answer.style.maxHeight = null;
      icon.src = "./assets/images/icon-plus.svg";
    } else {
      answer.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.src = "./assets/images/icon-minus.svg";
    }
  });
});
