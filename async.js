console.log('before');
// getUser(1, (user) => {
//     getRepo(user.githubUsername, getRepo)
// })

const p = getUser(1)
p.then(user => console.log(user));

console.log('after');

function getRepo(repos){
    console.log("repos", repos);
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('running database');
            resolve({id: id, githubUsername: 'damola'})
        }, 2000)
    })
}

function getRepo (username) {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            console.log('getting repo');
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000)
        })
}