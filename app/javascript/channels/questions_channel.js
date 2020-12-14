import consumer from "./consumer"

let code = window.location.pathname.split('/')[0]
const questionsChannel = consumer.subscriptions.create(
  {
    channel: "QuestionsChannel",
    code: code,
  },
  {
    connected() {},

    disconnected() {},

    received(data) {
      $('.questions-container').slick('slickGoTo', data.slide)
    }
  }
)

document.addEventListener('turbolinks:load', () => {
  $('.questions-container').slick({
    arrows: false,
  })

  let nextButtons = document.querySelectorAll(".next-button")
  nextButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault()
      let currentSlide = $('.questions-container').slick('slickCurrentSlide')
      questionsChannel.send({ slide: currentSlide + 1 })
    })
  })
})

