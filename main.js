class AsyncGame {
    constructor() {
        this.API_BASE = 'https://u-workshops.herokuapp.com'
    }

    /* 
        Note: most of these methods will use the `fetch` API
        It's ok if you don't fully understand it yet! You can think of it as a 'blackbox' for now
    */

    async createUser(name) {
        // POST request to the /new_user endpoint
        const response = await fetch(`${this.API_BASE}/new_user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name})})
        console.log(response);
    }

    async addToQABank(question, userID) {
        // POST request to /new_qa
        const addQA= await fetch(`${this.API_BASE}/new_qa`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ownerId: userID,
                question: question.text,
                answer: question.answer,
            })
        })
    }

    async getAllQuestions() {
        // GET request to /all_questions
        // Note! More questions will be added as other students progress in this workshop.
        // Ask around to see who's added new questions!
        const response= await fetch(`${this.API_BASE}/all_questions`)
        const questions = await response.json()
        return questions;
    }

    async answerQuestion() {
        // POST request to /answer_question
        // Note! In the response of this request you'll see whether your answer was correct or not.
        // If you answered incorrectly, try again or bring it up with the user who posted the question!
    }

    async getAnswerSubmissions() {
        // GET request to /answer_submissions
        const response= await fetch(`${this.API_BASE}/answer_submission`)
        const submissions = await response.json()
        return submissions;


    }

    async getUsers(){
        // GET request to /the_users
        const users= await fetch(`${this.API_BASE}/the_users`)
        const js = await users.json();
        return js;
    }

    async calculateUserScores() {
        // +1 points for questions you've answered correctly
        // -1 points for questions you've answered incorrectly

        // This is the most "complicated" method - but you've got this ;)

        // Guidelines for this part (ignore if you want an extra challenge!)
        /*
            - Get the users
            - Get the submissions
            - Create an `scores` object
            - Loop through each user ID
                - Extract the username
                - Filter the correct submissions with matching user ID
                - Filter the incorrect submissions with matching user ID
                - Add a new entry to `scores` with the user's name and their score (correct.length - incorrect.length)

            Example of `score` at the end of this: 
            {
                Kayla: 12,
                Darwin: -1
            }
        */
    }
}

const game = new AsyncGame()
// Remember the server is unexpected, it might return an error!


async function gameStart(){
    // await game.createUser('Kayla');
    const users = await game.getUsers();
    console.log(users);
    const usersArr= Object.entries(users);
    console.log(usersArr);
    let userID;
    for(let i=0; i<usersArr.length; i++){
        if(usersArr[i][1].name==='Kayla'){
            userID=i;
        }
    }
    let question = {
        text: 'What is the capital of the monday? ',
        answer: 'test'
    }
    const addQA = await game.addToQABank(question, userID);
    const questions = await game.getAllQuestions();
    console.log(questions);
    const submissions = await game.getAnswerSubmissions();
    console.log(submissions);

}
document.getElementById('start').addEventListener('click', function() {
    gameStart();
});

// Example of running the game:
// game.createUser("Frank")
// game.addToQABank({question: "How many legs does a cat have?", answer: 4, ownerId: YOUR_USER_ID})

// game.getAllQuestions()
// game.answerQuestion({qaId: ID_FROM_SERVER, answer: YOUR_ANSWER, userId: YOUR_USER_ID})

// game.getUsers() // <-- how can you output the results from here *without* console.log in the method?
// game.getAnswerSubmissions()
// game.calculateUserScores()