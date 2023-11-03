alert("hi"!)
function useInfo() {
  let name = document.getElementById("userFirstName").value;

  let surname = document.getElementById("userLastName").value;

  let mail = document.getElementById("userMail").value;

  let addres = document.getElementById("userAddress").value;

  let city = document.getElementById("userCity").value;

  let kod = document.getElementById("userZip").value;

  var choice = []
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
  
  for (var i = 0; i < checkboxes.length; i++) {
    choice .push(checkboxes[i].value)
  }
  let usera = {
    name,
    surname,
    mail,
    addres,
    city,
    kod,
    choice
  };
  if (
    name == "" ||
    surname == "" ||
    mail == "" ||
    addres == "" ||
    city == "" ||
    kod == ""
  ) {
    alert("hey");
  } else {
    fetch("https://6522861af43b179384149799.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usera),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    const display = document.getElementById("ConfirmBlock");
    display.classList.remove("displayNone");
    const askBlock = document.getElementById("askBlock");
    askBlock.classList.add("displayNone");
  }
}

async function getUser() {
  const response = await fetch(
    "https://6522861af43b179384149799.mockapi.io/users"
  );
  let content = await response.json();

  let list = document.querySelector(".cardsLibrary");

  let key;
  for (key in content) {
    list.innerHTML += `
    <div class="card">
    <h5 class="cardDopColor"><span class="cardMainTeg">id:</span> ${content[key].id}</h5>
    <h5 class="cardDopColor"><span class="cardMainTeg">Name:</span> ${content[key].name}</h5>    
    <h5 class="cardDopColor"><span class="cardMainTeg">Surname:</span> ${content[key].surname}</h5>
    <h5 class="cardDopColor"><span class="cardMainTeg">Mail:</span> ${content[key].mail}</h5>  
    <h5 class="cardDopColor"><span class="cardMainTeg">Kod:</span> ${content[key].kod}</h5>
    <h5 class="cardDopColor"><span class="cardMainTeg">Addres:</span> ${content[key].addres}</h5>
    <h5 class="cardDopColor"><span class="cardMainTeg">City:</span> ${content[key].city}</h5>
    <h5 class="cardDopColor"><span class="cardMainTeg">Date:</span> ${content[key].createdAt}</h5>
    <h5 class="cardDopColor"><span class="cardMainTeg">Выбор:</span> ${content[key].choice.join(",")}</h5>
    </div>
    `;
    console.log(content[key]);
  }
}
getUser();

let el = document.querySelector("#chart");

let data = {
  labels: ["08.07.2023", "08.10.23", ,],

  datasets: [
    {
      title: "Some Data",
      color: "light-blue",
      values: [25, 40, 30, 35, 8, 52, 17, -4],
    },
    {
      title: "Another Set",
      color: "violet",
      values: [25, 50, -10, 15, 18, 32, 27, 14],
    },
    {
      title: "Yet Another",
      color: "blue",
      values: [15, 20, -3, -15, 58, 12, -17, 37],
    },
  ],
};

// let chart = new Chart({
//   parent: el,
//   title: "My Awesome Chart",
//   data: data,
//   type: "bar", // or 'line', 'scatter', 'pie', 'percentage'
//   height: 250,
// });
