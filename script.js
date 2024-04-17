function applyColor() {
  const color = document.getElementById("color").value;
  let backgroundColor;

  // write your conditional if/else statements here:
  if (color === "red") {
    backgroundColor = "red";
  } else if (color === "blue") {
    backgroundColor = "blue";
  } else if (color === "green") {
    backgroundColor = "green";
  } else if (color === "orange") {
    backgroundColor = "orange";
  } else if (color === "purple") {
    backgroundColor = "purple";
  } else if (color === "yellow") {
    backgroundColor = "yellwo";
  }

  document.body.style.backgroundColor = backgroundColor;
}
