function replaceText() {
  var text = document.getElementById("input").value;
  chars = text.split("");
  chars.sort(function() {
    return 0.5 - Math.random();
  })
  text = chars.join("");
  document.getElementById("input").value = text;
}

document.getElementById("input").addEventListener("keyup",replaceText)
