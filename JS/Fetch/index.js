function DataGet() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function SaveData(){
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function SaveForm() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: document.getElementById("title1").value,
      body: document.getElementById("body1").value,
      userId: document.getElementById("userId1").value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

    console.log("Saved");
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())

    .then(data => {
        const container = document.getElementById("cardContainer");

        data.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("form1");

            const username = document.createElement("h1");
            username.textContent = item.id;

            const title = document.createElement("h2");
            title.textContent = item.title;

            const body = document.createElement("h5");
            body.textContent = item.body;

            card.appendChild(username);
            card.appendChild(title);
            card.appendChild(body);

            container.appendChild(card);
        });
});

