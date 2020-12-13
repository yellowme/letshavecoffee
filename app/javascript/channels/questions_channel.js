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
      console.log("received", data)
    }
  }
)

document.addEventListener('turbolinks:load', () => {
  let nextButtons = document.querySelectorAll(".nextButton")
  nextButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault()
      let page = e.target.getAttribute("data-id")
      let data = { go_to_page: page }
      questionsChannel.send(data)
    })
  })
})

