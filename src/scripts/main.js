function modal() {
  const button = document.querySelector('.header__bottom-btn')
  const modal = document.querySelector('.modal')

  button.addEventListener('click', function () {
    modal.style.display = 'block'
    modal.style.overflow = 'hidden'
  })

  modal.addEventListener('click', function (e) {
    if (
      e.target.classList.contains('modal') ||
      e.target.closest('div').classList.contains('modal__box-closed')
    ) {
      modal.style.display = 'none'
    }
  })
}

if (document.querySelector('.header')) modal()

function stepForm() {
  const form = document.querySelector('.steps__form')
  const steps = document.querySelectorAll('.form__steps')
  const progress = document.querySelector('.progress__seccess')
  const stepNumber = document.querySelectorAll('.step__number')
  const backBtn = document.querySelector('.step__back')
  const nextBtn = document.querySelector('.step__next')
  const finishSection = document.querySelector('.finish')

  form.onsubmit = (e) => e.preventDefault()

  let formStepIndex = 0

  backBtn.addEventListener('click', () => {
    formStepIndex--
    stepNumber[formStepIndex + 1].classList.remove('active__number')
    updateFormSteps()
  })
  nextBtn.addEventListener('click', () => {
    if(formStepIndex < steps.length - 1){
      formStepIndex++
      updateFormSteps()
    }
  })

  function updateFormSteps() {
    steps.forEach(step => {
      if(step.classList.contains('active')) step.classList.remove('active')
    })
    steps[formStepIndex].classList.add('active')
    stepNumber[formStepIndex].classList.add('active__number')

    if(formStepIndex === 0) backBtn.style.display = 'none'
    else backBtn.style.display = 'inline-block'

    if(formStepIndex === steps.length - 1){
      nextBtn.textContent = 'Finish'

      nextBtn.addEventListener('click', () => {
        form.style.display = 'none'
        finishSection.style.display = 'block'
      })
    }else {
      nextBtn.textContent = 'Next'
    
      nextBtn.addEventListener('click', () => {
        form.style.display = 'block'
        finishSection.style.display = 'none'
      })
    }

    const actives = document.querySelectorAll('.active__number')
    const present = ((actives.length - 1) / (stepNumber.length - 1)) * 100 + '%'

    progress.style.width = present
  }
  updateFormSteps()
}

if (document.querySelector('.steps__form')) stepForm()
