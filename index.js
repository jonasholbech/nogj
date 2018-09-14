window.addEventListener("load", () => {
  const body = document.body;
  for (let i = 0; i < 360; i++) {
    const div = document.createElement("div");
    div.style.background = `hsl(${i}, 65%, 65%)`;
    div.style.transform = `translate(${Math.random() * 100}vw, ${Math.random() *
      100}vh)`;
    body.appendChild(div);
  }
});
function test() {
  window.open("hello world");
}

test();
