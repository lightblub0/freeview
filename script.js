
// var btn = document.getElementById("ip");

// btn.addEventListener("click", wr);
// function wr(){
//     let cr = document.createElement("div");
//     cr.innerHTML = "div";
//     cr.className = "v"
//     cr.id = "v"
//     document.getElementById("result").appendChild(cr);
// }

var nbtn = document.getElementById("nv");
nbtn.addEventListener("click", mkDiv)

function mkDiv(){
    let num = document.querySelector('#num').value;
    nam = Number(num)



    for (let i = 0 ;i < nam ;i++){
        const crn = document.createElement("iframe");
        crn.innerHTML = "hello"
        crn.className = "v"
        crn.id = "v"
        crn.src = ""
        crn.autoplay
        crn.allow = "autoplay"
        document.getElementById("result").appendChild(crn);
        console.log(i);
        
        // var jurl = document.getElementById("url").value;
        var autoplay = '?autoplay=1';
        var control = "&controls=1"
        var mute = "&mute=1"
        var lowquality = "&vq=tiny";
        var highquality = "&vq=hd720";
        
        // crn.src = (jurl+autoplay);

        var jurl =document.getElementById("url").value;
        var vidlink = getVideoID(jurl)

        var embedLink = "https://www.youtube.com/embed/" + vidlink+ autoplay +mute+control+lowquality  ;

        document.getElementById("nv").disabled = true;
        crn.src = embedLink ;

   
        console.log(jurl.pathname)

    }
    

    function getVideoID(url) {
        var regex = /(?:[?&]|\b)(v=|embed\/|youtu\.be\/|\/v\/|\/e\/|watch\?v=|youtube.com\/v\/|youtube.com\/embed\/)([^#&?/ ]{11})(?:\b|$)/;
        var match = url.match(regex);
        
        if (match && match[2]) {
            return match[2];
        } else {
            alert("Invalid YouTube Share Link");
            return "";
        }
    }
   

}
function refreshPage() {
    location.reload(); // Reloads the current page
  }

