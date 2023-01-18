function newUser (name,age,country){
    var name = name || 'Enzo';
    var age = age || 34;
    var country = country || 'ARG';
    console.log(name,age,country);
}

newUser();
newUser('Eduardo', 27,'MX');

function newAdmin (name= 'Enzo', age= 27, country= 'ARG'){
    console.log(name,age,country);
}

newAdmin();
newAdmin('Eduardo', 28, 'MX');