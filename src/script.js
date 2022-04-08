const body = document.querySelector('body')
const btn = document.querySelector('.btn')
btn.onclick = () => {
  body.classList.toggle('light')
}