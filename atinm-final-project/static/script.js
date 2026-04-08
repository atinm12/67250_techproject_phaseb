function addYear() {
  document.getElementById("copyYear").innerHTML =
    "© " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
}

function toggleNav() {
  var nav = document.querySelector(".nav_bar");
  nav.classList.toggle("responsive");
}

var now = new Date();
var hour = now.getHours();

function greeting(h) {
  var el = document.getElementById("greeting");
  if (el) {
    if (h < 5 || h >= 20) {
      el.innerHTML = "Good night!";
    } else if (h < 12) {
      el.innerHTML = "Good morning!";
    } else if (h < 18) {
      el.innerHTML = "Good afternoon!";
    } else {
      el.innerHTML = "Good evening!";
    }
  }
}

greeting(hour);

function ActiveNav() {
  var navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(function (link) {
    if (window.location.href === link.href) {
      link.classList.add("active");
    }
  });
}

ActiveNav();

function showForm() {
  document.getElementById("purchaseForm").style.display = "block";
}

const PRICES = {
  general: 18,
  student: 18,
  member: 18,
};

document.addEventListener("DOMContentLoaded", function () {
  var quantityInput = document.getElementById("quantity");
  var ticketType = document.getElementById("ticketType");
  var totalBox = document.getElementById("totalBox");

  if (quantityInput && ticketType && totalBox) {
    function updateTotal() {
      var qty = parseInt(quantityInput.value) || 0;
      var type = ticketType.value;
      var price = PRICES[type] || 0;
      var total = qty * price;
      totalBox.textContent = "$" + total.toFixed(2);
    }

    quantityInput.addEventListener("input", updateTotal);
    ticketType.addEventListener("change", updateTotal);
    updateTotal();
  }

  var confirmDetails = document.getElementById("confirmDetails");
  if (confirmDetails) {
    var name = localStorage.getItem("orderName");
    var quantity = localStorage.getItem("orderQuantity");
    var total = localStorage.getItem("orderTotal");
    var visitDate = localStorage.getItem("orderVisitDate");
    var mailingList = localStorage.getItem("orderMailingList") === "true";
    var zipCode = localStorage.getItem("orderZipCode");
    confirmDetails.innerHTML =
      "Name: " + name + "<br>" +
      "Visit Date: " + visitDate + "<br>" +
      "Tickets: " + quantity + "<br>" +
      "Total Paid: $" + parseFloat(total).toFixed(2) + "<br>" +
      (zipCode ? "Zip Code: " + zipCode + "<br>" : "") +
      "Waiting List: " + (mailingList ? "Yes" : "No");
  }

  if (document.getElementById("map")) {
    var map = L.map("map").setView([40.4433, -79.9436], 15);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);
    L.marker([40.4433, -79.9436]).addTo(map);
  }
});

function handleSubmit(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var quantity = document.getElementById("quantity").value;
  var type = document.getElementById("ticketType").value;
  var price = PRICES[type] || 0;
  var total = quantity * price;
  var visitDate = document.getElementById("visitDate").value;
  var mailingList = document.getElementById("mailingList").checked;
  var zipCode = document.getElementById("zipCode").value;

  localStorage.setItem("orderName", name);
  localStorage.setItem("orderQuantity", quantity);
  localStorage.setItem("orderTotal", total);
  localStorage.setItem("orderVisitDate", visitDate);
  localStorage.setItem("orderMailingList", mailingList);
  localStorage.setItem("orderZipCode", zipCode);

  window.location.href = "confirmation.html";
}

$(document).ready(function () {
  $("#readMore").click(function () {
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
  });

  $("#readLess").click(function () {
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
  });
});