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
            .catch(err => console.log(err))
    }

    static addFurniture(data){
        const options = getOptions();
        options.body = JSON.stringify(data);

        return window.fetch(`${domain}furniture/create`, options)
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    static getAllFurnitures(page){
        return window.fetch(`${domain}furniture/all?page=${page}`)
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    static searchFurnitures(query){
        return window.fetch(`${domain}furniture/all?search=${query}`)
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    static furnitureDetails(id){
        const options = getOptions();
        options.method = 'GET'

        return window.fetch(`${domain}furniture/details/${id}`, options)
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    static addComment(id, data){
        const options = getOptions();
        options.body = JSON.stringify(data);

        return window.fetch(`${domain}furniture/details/${id}/reviews/create`, options)
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    static addLike(id){
        const options = getOptions();

        return window.fetch(`${domain}furniture/details/${id}/like`, options)
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    static getComments(id){
        const options = getOptions();
        options.method = 'GET';

        return window.fetch(`${domain}furniture/details/${id}/reviews`, options)
        .then(res => res.json())
        .catch(err => console.log(err))
    }

    static profile(){
        const options = getOptions();
        options.method = 'GET';

        return window.fetch(`${domain}furniture/mine`, options)
        .then(res => res.json())
        .catch(err => console.log(err))
    }

    static deleteFurniture(id){
        const options = getOptions();

        return window.fetch(`${domain}furniture/delete/${id}`, options)
        .then(() => {
            return this.profile()
        })
    }
}
