const URI = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=03165693d22644ada4e7c16a17df4e9a';

export default {
    async fetchUsers() {
        try {
                let response = await fetch(URI);
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}