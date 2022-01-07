const btn = document.getElementById("btn");

const colorGenerator = () => {
  let hexColor = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    let randomNum = Math.round(Math.random() * 15);
    let num = hexColor[randomNum];
    hex = hex + num;
    let colorCodeShow = document.getElementById("color-code");
    colorCodeShow.innerText = hex;
    document.getElementById("container").style.backgroundColor = hex;
  }
};

btn.addEventListener("click", () => {
  colorGenerator();
});
