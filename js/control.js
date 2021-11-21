if(!localStorage.getItem('lang')){
  localStorage.setItem('lang', 'es')
}

const esElem = document.getElementById('es')
const enElem = document.getElementById('en')
const elements = document.querySelectorAll('[t]')

function renderLang(lang) {
  localStorage.setItem('lang', lang)

  if(lang === 'es'){
    esElem.classList.add('active')
    enElem.classList.remove('active')
  }else{
    enElem.classList.add('active')
    esElem.classList.remove('active')
  }

  for (const elem of elements) {
    const key = elem.getAttribute('t')
    elem.innerHTML = languages[key][lang] || key
  }
}

renderLang(localStorage.getItem('lang'))

esElem.onclick = () => {  
  renderLang('es')
}

enElem.onclick = () => {
  renderLang('en')
}
