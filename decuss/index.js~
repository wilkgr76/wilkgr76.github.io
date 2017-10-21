var toReplace = [
  {
    regex: /bitching/g,
    text: "excited"
  },
  {
    regex: /bitch/g,
    text: "nice lady"
  },
  {
    regex: /shit/g,
    text: "surprise"
  },
  {
    regex: /douche/g,
    text: "potato"
  },
  {
    regex: /SOB/g,
    text: "gentleman"
  },
  {
    regex: /asshole/g,
    text: "extremely polite person"
  },
  {
    regex: /fuck/g,
    text: "help"
  }
]

function replaceText(event) {
  // Check if space key is last key pressed
  // (prevents autocorrections while typing, e.g. bitch -> nice lady
  // while trying to type bitching)
  if(event.which == 32 || event.which == 190 || event.which == 188 || event.which == 191 || event.which == 49) {
    var text = document.getElementById("input").value;
    for(i=0;i<toReplace.length;i++) {
      text = text.replace(toReplace[i].regex,toReplace[i].text);
    }

    document.getElementById("input").value = text;
  }
}

document.getElementById("input").addEventListener("keyup",replaceText)
