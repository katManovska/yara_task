class RandomUser {

    randomUsername () { return 'user' + Math.random().toString(36).slice(-5) }

    randomEmail () { return Math.random().toString(36).slice(-5) + '@test.com' }

    randomPassword () { return Math.random().toString(36).slice(-5) }
}

export default new RandomUser();