let element = document.getElementById('counter')

let increase = () => element.innerText++
let decrease = () => element.innerText--
function reset () {
  element.innerText = 0
  element.innerHTML = "<mark>" + element.innerText + "<mark>"
}

