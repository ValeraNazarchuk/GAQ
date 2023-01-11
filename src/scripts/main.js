function modal() {
  const button = document.querySelector('.header__bottom-btn')
  const modal = document.querySelector('.modal')

  button.addEventListener('click', function (e) {
    e.preventDefault()

    modal.style.display = 'block'
    modal.style.overflow = 'hidden'
  })

  modal.addEventListener('click', function (e) {
    if (e.target.className === 'modal') {
      modal.style.display = 'none'
    }
  })
}

modal()
