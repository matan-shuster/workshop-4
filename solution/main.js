class AsyncGame {
    constructor() {
        this.API_BASE = 'https://u-workshops.herokuapp.com'
        // this.API_BASE = 'http:localhost:4200' // local
        this.STANDARD_HEADERS = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    }

    async createUser(name) {
        const response = await fetch(`${this.API_BASE}/new_user`, {
            method: "POST",
            headers: this.STANDARD_HEADERS,
            body: JSON.stringify({ name })
        })

        const result = await response.json()
        console.log(result)
    }

    async addToQABank({ question, answer, ownerId }) {
        const response = await fetch(`${this.API_BASE}/new_qa`, {
            method: "POST",
            headers: this.STANDARD_HEADERS,
            body: JSON.stringify({ question, answer, ownerId })
        })

        const result = await response.json()
        console.log(result)
    }

    async getAllQuestions() {
        const response = await fetch(`${this.API_BASE}/all_questions`)
        const result = await response.json()
        console.log(result)
    }

    async answerQuestion({ qaId, answer, userId }) {
        const response = await fetch(`${this.API_BASE}/answer_question`, {
            method: "POST",
            headers: this.STANDARD_HEADERS,
            body: JSON.stringify({ qaId, answer, userId })
        })

        const result = await response.json()
        console.log(result)
    }

    async getAnswerSubmissions() {
        const response = await fetch(`${this.API_BASE}/answer_submission`)
        const result = await response.json()
        return result
    }

    async getUsers(){
        const namesResponse = await fetch(`${this.API_BASE}/the_users`)
        const users = await namesResponse.json()

        return users
    }

    async calculateUserScores() {
        const users = await this.getUsers()
        const submissions = await this.getAnswerSubmissions()
        const scores = {}

        Object.keys(users).forEach(userId => {
            const userName = users[userId].name
            
            const userCorrectSubmissions = submissions.filter(sub => sub.correct && sub.userId == userId)
            const userInCorrectSubmissions = submissions.filter(sub => !sub.correct && sub.userId == userId)

            scores[userName] = userCorrectSubmissions.length - userInCorrectSubmissions.length
        })

        console.log(scores)
    }

}

const game = new AsyncGame()
// game.createUser("Frank")
// game.createUser("George")
// game.addToQABank({question: "Does this work?", answer: "Yes", ownerId: 1})
// game.addToQABank({question: "How many legs does a cat have?", answer: 4, ownerId: 1})
// game.addToQABank({question: "Color of moon?", answer: "white", ownerId: 1})
// game.getAllQuestions()
// game.answerQuestion({qaId: 2, answer: "Yes", userId: 3})
// game.answerQuestion({qaId: 2, answer: "--", userId: --}) // example
// game.getUsers().then(res => console.log(res))
// game.getAnswerSubmissions().then(res => console.log(res))
// game.calculateUserScores()