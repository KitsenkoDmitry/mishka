var navMain = document.querySelector(".main-nav");
var navToogle = document.querySelector(".main-nav__toogle");
var pageHeader = document.querySelector(".page-header");

var catalogModal = document.querySelector(".catalog-item__modal");
var catalogItemBtn = document.querySelectorAll(".catalog-item__add-to-cart-btn");
var productBtn = document.querySelector(".btn--product");
var modalCover = document.querySelector(".modal-cover");
var modalBtn = document.querySelector(".btn--modal");

pageHeader.classList.remove("page-header--nojs");
navMain.classList.remove("main-nav--nojs");

navToogle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
  }
});

catalogItemBtn.addEventListener("click", function() {
  event.preventDefault();
  if (catalogModal.classList.contains("catalog-item__modal--closed")) {
    catalogModal.classList.remove("catalog-item__modal--closed");
    catalogModal.classList.add("catalog-item__modal--opened");
    modalCover.classList.add("modal-cover--show");
  }
});


modalBtn.addEventListener("click", function() {
  catalogModal.classList.remove("catalog-item__modal--opened");
  catalogModal.classList.add("catalog-item__modal--closed");
  modalCover.classList.remove("modal-cover--show");
});

productBtn.addEventListener("click", function() {
  event.preventDefault();
  if (catalogModal.classList.contains("catalog-item__modal--closed")) {
    catalogModal.classList.remove("catalog-item__modal--closed");
    catalogModal.classList.add("catalog-item__modal--opened");
    modalCover.classList.add("modal-cover--show");
  }
});
