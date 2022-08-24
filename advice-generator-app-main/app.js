const API_URL = "https://api.adviceslip.com/advice"
const adviceId = document.querySelector('#advice-id');
// const adviceText = document.querySelector('#advice-text');


const getAdvice = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json()

        document.querySelector('#advice-text').innerText = `"${data.slip.advice}"`
        document.querySelector('#advice-id').innerText = `advice # ${data.slip.id}`
        return data
    } catch (error) {
        console.log(error)
    }
}

