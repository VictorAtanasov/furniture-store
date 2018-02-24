const domain = 'http://localhost:5000/auth';

const getOptions = () => ({
    method: 'POST',
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default class Auth{

    static register(user){
        const options = getOptions();
        options.body = JSON.stringify(user);

        return window.fetch(`${domain}/signup`, options)
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    static login(user){
        const options = getOptions();
        options.body = JSON.stringify(user);

        return window.fetch(`${domain}/login`, options)
            .then(res => res.json())
            .catch(err => console.log(err))
    }
}