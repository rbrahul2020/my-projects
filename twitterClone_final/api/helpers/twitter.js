const { default: Axios } = require("axios");
const { error } = require("console");
class Twitter{
    get(query, resultType, maxId){
    //const query="sports";const count=1;
    const url="https://api.twitter.com/1.1/search/tweets.json";
    return(Axios.get(url,{
        params:{
            q: query,
                result_type: resultType,
                count: 10,
                tweet_mode: "extended",
                max_id: maxId
        },
        headers:{
         'Authorization':`Bearer ${process.env.twitter_api_token}`   
        }
    })
    )
    }
};
module.exports=Twitter;
