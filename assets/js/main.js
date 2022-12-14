window.addEventListener("load", (event) => {
    let observer;
  
    let options = {
      root: null,
      rootMargin: '-25% 0px -50% 0px'
    };
  
    observer = new IntersectionObserver(handleIntersect, options);
    for (const sectionEl of document.querySelectorAll(".withSidenote"))
      observer.observe(sectionEl)
  })
function handleIntersect(entries) {
for (const entry of entries) {
    const noteEl = entry.target.querySelector(".sidenote");
    if (entry.isIntersecting) noteEl.classList.add("display")
    else noteEl.classList.remove("display")
}
};  