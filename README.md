# Workshop 4: The Asynchronous Game

## What are we doing?
We're going to play another game, but this time - together! Yes, you and all your classmates. Even you, Evelyn.

<br />

## What's the game?
It's a question & answer game where everyone submits questions and matching answers, and you earn points by answering other users' questions.

Your work will look like this:

1. Create a user
2. Submit questions & answers with your unique user ID
3. Retrieve other users' questions
4. Submit answers to the questions
5. Calculate your and other users' scores
6. Win. And by that we mean, Learn. Because learning is winning.  
  
<br />

## Sounds easy, what's the catch?
It's all asynchronous!
- All the game steps (creating a user, submitting/answering questions, etc) happen via API
- Your endpoint for this whole game is: https://u-workshops.herokuapp.com
- For example, you'll have to make a `POST` request to https://u-workshops.herokuapp.com/new_user in order to create your user
    - When you successfully make the request, you'll receive a response from the server with your unique user ID - save it! You'll need it to submit and answer questions
- The class skeleton with all the relevant methods are ready for you in `main.js`
- The `index.html` file is also ready and connected - just open it up in the browser and check out the console

## What is the API?
- `POST`: `/new_user`, expects to receive `{name: "YOUR NAME"}` 

- `POST`: `/new_qa`, expects to receive `{ownerId: YOUR_USER_ID, question: "STRING QUESTION", answer: "STRING OR INT ANSWER"}`
- `GET`: `/all_questions`, returns all the questions created so far by all users playing the game
- `POST`: `/answer_question`, expects to receive `{qaId: INT ID OF QUESTION, answer: "YOUR STRING OR INT ANSWER", userId: YOUR_USER_ID}`
- `GET`: `/answer_submission`, returns all the answer submissions so far by all the users playing the game
    - This will also show you whether you answered the question correctly or not
- `GET`: `/the_users`, returns all users and their IDs in the game

## How do I know who's winning?
- You'll have to make separate requests to `answer_submission` and `the_users` in order to match the usernames with the user IDs. 
- You get +1 points for every question you've answered correctly, and -1 for every question you've answered incorrectly

## Wait how do I make requests to the server?!
You'll use the built-in `fetch` API - google it! Here's an example to help you out, but it will look slightly different for `POST` requests (this is a simple `GET`):
```
    fetch(theEndpoint).then(response => {
        response.json().then(result => {
            // do something with `result`
        })
    })

    // Of course, you can always user async await... ;)
```

## Final tip - ignore this for an extra challenge
You'll have to send these *headers* in your `POST` requests:
```
{ 'Accept': 'application/json', 'Content-Type': 'application/json' }
```
How do you send headers using `fetch`...? [Hmm...](https://lmgtfy.app/?q=how+to+send+headers+using+fetch)