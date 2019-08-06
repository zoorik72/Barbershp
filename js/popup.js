var loglink = document.querySelector(".login-link");
var logpopup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");

var maplink1 = document.querySelector(".footer-contacts > a");
var maplink2 = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
let mapClose = mapPopup.querySelector(".modal-close");

var login = logpopup.querySelector("[name=login]");
var password = logpopup.querySelector("[name=password]");
var form = logpopup.querySelector("form");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (e) {
  isStorageSupport = false;
}

loglink.addEventListener("click", function(evt) {
  evt.preventDefault();
  logpopup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    password.focus();
  }
  else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  logpopup.classList.remove("modal-show");
  logpopup.classList.remove("modal-error");
});


form.addEventListener("submit", function(evt){
  if (!login.value || !password.value){
    evt.preventDefault();
    logpopup.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (logpopup.classList.contains("modal-show")) {
      logpopup.classList.remove("modal-show");
      logpopup.classList.remove("modal-error");
    }
  }
});

maplink1.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

maplink2.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});
