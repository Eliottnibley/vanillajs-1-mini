let element = document.getElementById('counter')

let increase = () => element.innerText++
let decrease = () => element.innerText--
function reset () {
  element.innerText = 0
  element.innerHTML = "<mark>" + element.innerText + "<mark>"
}

function selectTheme (theme) {
  document.getElementsByTagName('body')[0].className = theme
  document.getElementsByTagName('main')[0].className = theme

  const button = document.getElementsByTagName('button')

  for (let i = 0; i < buttons.length; i++){
    buttons[i].className = theme;
  }
}