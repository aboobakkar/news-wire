const TOP_HEADLINES = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=03165693d22644ada4e7c16a17df4e9a';
const TECHCRUNCH = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=03165693d22644ada4e7c16a17df4e9a';
const ALJASEERA_EN = 'https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=03165693d22644ada4e7c16a17df4e9a';
const HACKERNEWS = 'https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=03165693d22644ada4e7c16a17df4e9a'
export default {
    async fetchUsers(type) {
        if(type=='tech'){
            try {
                let response = await fetch(TECHCRUNCH);
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }

        }else if(type=='aljaseera'){

            try {
                let response = await fetch(ALJASEERA_EN);
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }


            }else if(type=='hacker'){
                try {
                    let response = await fetch(HACKERNEWS);
                    let responseJsonData = await response.json();
                    return responseJsonData;
                }
            catch(e) {
                console.log(e)
            }
            }
            
            else{

                try {
                    let response = await fetch(TOP_HEADLINES);
                    let responseJsonData = await response.json();
                    return responseJsonData;
                }
            catch(e) {
                console.log(e)
            }

            }

    }
}