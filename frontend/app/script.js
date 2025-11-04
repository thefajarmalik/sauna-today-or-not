const button = document.getElementById('askBtn')
const answerEl = document.getElementById('answer')

button.addEventListener('click', async () => {
  console.log('button is clicked')

  // show thinking animation
  let dots = 0
  answerEl.textContent = 'thinking'
  answerEl.classList.add('thinking')
  const interval = setInterval(() => {
    dots = (dots + 1) % 4
    answerEl.textContent = 'thinking' + '.'.repeat(dots)
  }, 400)

  try {
    //UPDATE THIS URL
    const res = await fetch(
      'https://bjr3omb6uxfedv2ueefpptxdny0lnfbo.lambda-url.us-east-1.on.aws/sauna'
    )
    const data = await res.json()
    clearInterval(interval)
    answerEl.classList.remove('thinking')
    answerEl.textContent = data.answer
  } catch (err) {
    clearInterval(interval)
    answerEl.classList.remove('thinking')
    answerEl.textContent = 'Error fetching answer'
    console.error(err)
  }
})
