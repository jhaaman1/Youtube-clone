let v = JSON.parse(localStorage.getItem('video')) || [];
console.log(v);

//  = document.querySelector('#box');
 let dataAppend = (data)=> {

    let container = document.getElementById('box');
    // console.log(data);
    data.forEach(({id:{videoId},snippet:{title}}) => {
        console.log(videoId,title)
        let div = document.createElement('div');
        let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
       

        let video = {
            title,
            videoId
        }



        let name = document.createElement('h5');
        name.innerText = title;
        div.append(iframe,name)
        // div.addEventListener('click',() => {
        //     playVideo(video)
        // })
        container.append(div);
    })

 } 