const newtodo = document.getElementById("newtodo");
const banner = document.getElementById("banner");

function todo() {
  const input = document.getElementById("input");
  const inputvalue = input.value;

  if (inputvalue !== "") {
    const newtodo = document.createElement("div");
    // banner.insertBefore(newtodo, newtodo.nextSibling);
    banner.appendChild(newtodo);
    newtodo.classList.add("todo");

    newtodo.innerText = inputvalue;
    input.value = "";
  } else {
    alert("Dont leave input empty");
  }
}

banner.addEventListener("click", (e) => {
  if (e.target.classList.contains("todo")) {
    e.target.remove();
  }
});

newtodo.addEventListener("click", todo);

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    todo();
  }
});
