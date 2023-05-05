const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = './css/img/menu_open_FILL0_wght400_GRAD0_opsz48.svg'
  } else {
    navBtnImg.src = './css/img/menu_FILL0_wght400_GRAD0_opsz48.svg'
  }
}

AOS.init({
  once: true
})
