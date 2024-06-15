function createCard(title,cname, views, monthsold, thumbnail, duration){
    if(views >= 1000 && views < 1000000){
        views=views/1000+"K"
    }
    else if(views >= 1000000 && views < 1000000000){
        views=views/1000000+"M"
    }
    else if(views >= 1000000000){
        views=views/1000000000+"B"
    }
    let html=`<div class="container">
        <div class="thumbnail">
            <img alt="thumbnail" class="image" width="150px" height="90px" src="${thumbnail}">
            <p class="duration"> ${duration} </p>
        </div>
        <div class="rightside">
            <div class="title">
                ${title}
            </div>
            <ul>
                <li class="cname"> ${cname} </li>
                <div id="separator" class="style-scope ytd-video-meta-block">•</div>
                <li class="views"> ${views} </li>
                <div id="separator" class="style-scope ytd-video-meta-block">•</div>
                <li class="monthsold"> ${monthsold} </li>
            </ul>
        </div>
    </div>`
    document.querySelector(".container").insertAdjacentHTML("afterend", html);

}

let title="JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73"
let cname="CodeWithHarry"
let views=1000

let monthsold="1 month ago"
let thumbnail="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
let duration="5:30"
createCard(title,cname,views,monthsold,thumbnail,duration)
createCard(title,cname,views,monthsold,thumbnail,duration)
createCard("we goooo right nowww","Amannettic",10000000,"5 Years ago","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYzyRiglKNLtpkTxgGQEx4fFRqlRWZ-VRTA&usqp=CAU","1:10")
