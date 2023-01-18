//enahced object literals

function newUser(user,age,country,uid) {
    return {
        user,
        age,
        country,
        uid
    }
}

console.log(newUser('Enzo',27,'ARG',10));