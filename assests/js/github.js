class User {
    constructor() {
        this.api = 'https://api.github.com/users/';
    }

    async getUserData(username) {
        
        const userData = await fetch(`${this.api}${username}`) // const userRes = await fetch(`${this.api}${username}`);
        .then(res => res.json()) // const userData = await userRes.json();

        const reposData = await fetch(`${this.api}${username}/repos`)
        .then(res => res.json());

        return {
            user: userData,
            repos: reposData
        }
    }
}