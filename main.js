const tagsBtn = document.querySelector("#navToTags");
const seoBtn = document.querySelector("#navToSEO");
const gridBtn = document.querySelector("#navToGrid");
const boxBtn = document.querySelector("#navToBox");
const fontBtn = document.querySelector("#navToFont");
const posBtn = document.querySelector("#navToPos");
const sectionTag = document.querySelector(".usefulTags");
const sectionSEO = document.querySelector(".SEO");
const sectionGrid = document.querySelector(".grid");
const sectionBox = document.querySelector(".boxModel");
const sectionFont = document.querySelector(".fontSize");
const sectionPos = document.querySelector(".position");
tagsBtn.addEventListener("click", () => {
  sectionTag.scrollIntoView({ behavior: "smooth" });
});

seoBtn.addEventListener("click", () => {
  sectionSEO.scrollIntoView({ behavior: "smooth" });
});
gridBtn.addEventListener("click", () => {
  sectionGrid.scrollIntoView({ behavior: "smooth" });
});
boxBtn.addEventListener("click", () => {
  sectionBox.scrollIntoView({ behavior: "smooth" });
});
fontBtn.addEventListener("click", () => {
  sectionFont.scrollIntoView({ behavior: "smooth" });
});
posBtn.addEventListener("click", () => {
  sectionPos.scrollIntoView({ behavior: "smooth" });
});
