const nBarEl = document.querySelector(".n-bar");
const bodyEl = document.querySelector(".body");
const introEl = document.querySelector(".intro");
const languagesEl = document.querySelector(".icon-container");

//View
const options = {
    rootMargin: "-200px 0px 0px 0px"
};

// const languageOptions = {
//     rootMargin: "0px"
// };
//nav bar
const introElObserver = new IntersectionObserver (function(entries) {
    entries.forEach(entry => {
       if(!entry.isIntersecting) {
           nBarEl.classList.add("nav-filled");
       }
       else {
           nBarEl.classList.remove("nav-filled");
       }
    })
}, options);

// const languagesElObserver = new IntersectionObserver (function(entries) {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting) {
//             bodyEl.classList.remove("white-bg")
//         }
//         else { bodyEl.classList.add("white-bg")}
//     })
// }, languageOptions)

introElObserver.observe(introEl)
// languagesElObserver.observe(languagesEl)