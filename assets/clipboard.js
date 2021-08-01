(function () {
  document.querySelectorAll("pre code").forEach(code => {
    code.addEventListener("click", function (event) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code.parentElement.textContent);
      }
    });
  });
})();
