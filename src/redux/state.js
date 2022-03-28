let state = {
    profilePage: {
        posts: [
            { id: 1, postMessage: 'New post', likesCounter: '12' },
            { id: 2, postMessage: 'My first post', likesCounter: '42' },
            { id: 3, postMessage: 'Test post', likesCounter: '100500' },
            { id: 4, postMessage: 'Post from index.js', likesCounter: '7' }
        ],
    },
    messagesPage: {
        dialogues: [
            { id: 1, name: 'Sergey' },
            { id: 2, name: 'Julia' },
            { id: 3, name: 'Jana' },
            { id: 4, name: 'Kirill' },
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Hello' },
            { id: 3, message: 'Privet' },
            { id: 4, message: 'My name is' },
            { id: 5, message: 'Hello world' },
        ]
    }
}

export default state