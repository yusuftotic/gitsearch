class UI {
    constructor() {
        this.container = document.getElementById('container');
        this.profileCard = document.getElementById('profile-card');
    }

    createUserCard(user) {

        this.profileCard.style.visibility = 'visible';

        this.profileCard.innerHTML = `
            <img src="${user.avatar}" alt="User Avatar" id="avatar" class="avatar">
            <div class="profile-card-info">
                <div id="fullname" class="fullname">${user.fullname}</div>
                <a href="https://github.com/${user.username}" target="_blank" id="username" class="username">@${user.username}</a>
                <div id="bio" class="bio">${user.bio}</div>
            </div>
        `;

    }

    createRepoCard(repoName, repoUrl, repoDescription, repoLanguage) {

        const repoCard = document.createElement('div');

        repoCard.className = 'repo-card';

        repoCard.innerHTML = `
            <div id="repo-name" class="repo-name"><a href="${repoUrl}" target="_blank">${repoName}</a></div>
            <div id="repo-description" class="repo-description">${repoDescription}</div>
            <div id="repo-language" class="repo-language">${repoLanguage}</div>
        `;

        container.appendChild(repoCard);

    }

    showAlert(message, documentation_url) {
        const alert = document.getElementById('alert');

        alert.innerHTML = `<a href="${documentation_url}" target="_blank">${message}</a>`;

        alert.style.visibility = 'visible';

        setTimeout(() => {
            alert.style.visibility = 'hidden';
        },3000);

    }

    clearReposFromContainer() {

        for (let i = this.container.children.length; i > 3; i--) {
            console.log(i-1)
            this.container.children[i - 1].remove();
        }

    }

    clearInput() {
        document.getElementById('search-input').value = '';
    }
}