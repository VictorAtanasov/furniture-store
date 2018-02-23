const domain = 'http://localhost:5000/';

const getOptions = () => ({
    method: 'POST',
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + localStorage.getItem('authToken')
    }
});


export default class furniture{
    static statistics(){
        return window.fetch(domain+'stats')
            .then(res => res.json())
            .catch(err => err.json())
    }

    static addFurniture(data){
        const options = getOptions();
        options.body = JSON.stringify(data);

        return window.fetch(`${domain}furniture/create`, options)
            .then(res => res.json())
            .catch('err')
    }

    static getAllFurnitures(page){
        return window.fetch(`${domain}furniture/all?page=${page}`)
            .then(res => res.json())
            .catch('err')
    }

    static furnitureDetails(id){
        const options = getOptions();
        options.method = 'GET'

        return window.fetch(`${domain}furniture/details/${id}`, options)
            .then(res => res.json())
            .catch('err')
    }
}
