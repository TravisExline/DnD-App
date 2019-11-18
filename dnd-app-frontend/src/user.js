class User {
    constructor(user) {
        this.name = user.name
        this.email = user.email
        this.id = user.id
    }

    render() {
        return `Welcome, ${this.name}`
    }
}