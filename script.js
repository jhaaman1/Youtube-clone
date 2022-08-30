const API = "AIzaSyC-O7pR0-WYDgaxodK-0u5N4VIecq7PqPg"
let arr = JSON.parse(localStorage.getItem('video')) || []
let searchVideos = async() => {
    let q = document.getElementById('query').value;
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`;

    let res = await fetch(url);
    
    let data = await res.json();

    append(data.items)

    // console.log(data.items);
}

let append = (data) =>{

    let container = document.getElementById('container');
    console.log(data)
    data.forEach(({id:{videoId},snippet:{title}}) => {
        let div = document.createElement('div')
        console.log(videoId,title)
        let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
       

        let video = {
            title,
            videoId
        }



        let name = document.createElement('h5');
        name.innerText = title;
        // div.style.padding="50px"
        // div.style.margin="50px"
        // div.style.border="1px solid red"
        div.append(iframe,name)
        div.addEventListener("click", function() {

            // console.log("Hello here")
                playVideo(video)
        })
        // div.onClick = function(){
        // }
        container.append(div);
        arr.push(container);

    });
}


function playVideo(video){
    // console.log("hello")
    console.log("videos", video);
    window.localStorage.setItem('video', JSON.stringify(video))
    window.location.href = 'video.html';

    
}



/*
<iframe width="560" height="315"
    src="https://www.youtube.com/embed/Plr36OXqS0o" title="YouTube video player"
    frameborder="0" 
    allow="accelerometer;
    autoplay; clipboard-write;
    encrypted-media; gyroscope;
    picture-in-picture" allowfullscreen>
</iframe>
*/


// const openMenu = document.querySelector('#show-menu')
// const hideMenuIcon = document.querySelector('#hide-menu')
// const sideMunu = document.querySelector('#nav-menu')

// openMenu.addEventListener('click',function(){
//     sideMunu.classList.add('active')
// })

// hideMenuIcon.addEventListener('click',function(){
//     sideMunu.classList.remove('active')
// })