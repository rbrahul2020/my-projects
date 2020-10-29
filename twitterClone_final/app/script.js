let BaseUrl="http://localhost:3000/tweets";;
let properUrl="";

const onEnter=(e)=>{
     if(e.key=="Enter"){getTwitterData();}
}

let getTwitterData=()=>{
     const query = document.getElementById("user-search-input").value;
     if(!query) return;
    //take value from inputbox
    
    let paramss=`q=${query}&result_type=mixed`;
    let reqUrl=`${BaseUrl}?${paramss}`;
    fetch(reqUrl,{method:'GET'}).then((data)=>{return(data.json());}).then((res)=>{
             console.log(res);
             buildTweets(res.statuses);
    })
}

const buildTweets=(tweets)=>{
    let twitterContent = "";
    tweets.map((tweet)=>{
        const createdDate = moment(tweet.created_at).fromNow();
        twitterContent += `
            <div class="tweet-container">
                <div class="tweet-user-info">
                    <div class="tweet-user-profile" style="background-image: url(${tweet.user.profile_image_url_https})"></div>
                    <div class="tweet-user-name-container">
                        <div class="tweet-user-fullname">${tweet.user.name}</div>
                        <div class="tweet-user-username">@${tweet.user.screen_name}</div>
                    </div>
                </div>
        `
        if(tweet.extended_entities 
            && tweet.extended_entities.media
            && tweet.extended_entities.media.length > 0){
            twitterContent += buildImages(tweet.extended_entities.media);
            twitterContent += buildVideo(tweet.extended_entities.media);
        }
        twitterContent += `
                <div class="tweet-text-container">
                    <span class="tweet-text">
                    ${tweet.full_text}
                    </span>
                </div>
                <div class="tweet-date">
                    ${createdDate}
                </div>
            </div>
        `
    })
    //if(nextPage){
    //    document.querySelector('.tweets-list').insertAdjacentHTML('beforeend', twitterContent)
    //} else {
        document.querySelector('.tweets-list').innerHTML = twitterContent;
    //}
}

let buildImages=(data)=>{
        let s=`<div class="tweet-images-container">`;
        for(x of data){
            if(x.type=="photo"){
                s += `
                <div class="tweet-image" style="background-image: url(${x.media_url_https})"></div>
            `
            }
        }
        s+=`</div>`;
        console.log(s);
        return(s);
}

const buildVideo = (mediaList) => {
    let videoContent = `<div class="tweet-video-container">`;
    let videoExists = false;
    mediaList.map((media)=>{
        if(media.type == "video" || media.type == 'animated_gif'){
            videoExists = true;
            const video = media.video_info.variants.find((video)=>video.content_type == 'video/mp4');
            const videoOptions = getVideoOptions(media.type);
            videoContent += `
            <video ${videoOptions}>
                <source src="${video.url}" type="video/mp4">
                Your browser does not support HTML5 video.
            </video>
            `
        }
    })
    videoContent += `</div>`;
    console.log(videoContent);
    return (videoExists ? videoContent : '');
}

const getVideoOptions = (mediaType) => {
    if(mediaType == 'animated_gif'){
        return "loop autoplay";
    } else {
        return "controls";
    }
}

const selectTrend = (e) => {let s=e.innerText;
    const trendText = s.substring(1,s.length);
    document.getElementById("user-search-input").value = trendText;
    getTwitterData();
}
