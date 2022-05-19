class AsyncGame {
    constructor() {
        this.API_BASE = 'https://u-workshops.herokuapp.com'
    }

    async createUser() {

    }

    async addToQABank() {

    }

    async getAllQuestions() {

    }

    async answerQuestion() {

    }

    async getAnswerSubmissions() {

    }

    async getUsers(){

    }

    async calculateUserScores() {
        // +1 points for questions you've answered correctly
        // -1 points for questions you've answered incorrectly

        // This is the most "complicated" method - but you've got this ;)
    }
}

const game = new AsyncGame()
// Remember the server is unexpected, it might return an error!

// Example of running the game:
// game.createUser("Frank")
// game.addToQABank({question: "How many legs does a cat have?", answer: 4, ownerId: YOUR_USER_ID})

// game.getAllQuestions()
// game.answerQuestion({qaId: ID_FROM_SERVER, answer: YOUR_ANSWER, userId: YOUR_USER_ID})

// game.getUsers() // <-- how can you output the results from here *without* console.log in the method?
// game.getAnswerSubmissions()
// game.calculateUserScores()