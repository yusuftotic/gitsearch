const container = document.getElementById('container');

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const avatar = document.getElementById('avatar');
const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const bio = document.getElementById('bio');

const user = new User();
const ui = new UI();

eventListeners();

function eventListeners() {
    searchButton.addEventListener('click', searchUser);
}

function searchUser(e) {
    e.preventDefault();

    const username = searchInput.value;

    if (username === '') {
        ui.showAlert('Please enter any user.')
    }

    user.getUserData(username)
    .then(res => {
        if (res.user.message !== 'Not Found') {
            const userData = {
                username: res.user.login,
                fullname: res.user.name,
                avatar: res.user.avatar_url,
                bio: res.user.bio
            }
            ui.createUserCard(userData);

            ui.clearReposFromContainer();

            res.repos.forEach((repo) => {
                ui.createRepoCard(repo.name, repo.html_url, repo.description, repo.language);
            });
        } else if (username !== '') {
            ui.showAlert(res.user.message, res.user.documentation_url);
        }
        
    })
    .catch(err => console.log(err));

    ui.clearInput();
}