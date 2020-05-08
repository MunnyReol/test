const params = new URLSearchParams(window.location.search)

id = params.get('user1')
id2 = params.get('user2')
if(id ==null || id2 ==null){
id="BarackObama"
id2 = "iamsrk"
window.location.href = "?user1="+id+"&user2="+id2
}

/*var id ="Barack Obama"*/
$.getJSON("https://cors-munnyreol.herokuapp.com/http://munnyreol.herokuapp.com/twitter/api/?user="+/*replace*/id, function (data) {
/*https://cors-anywhere.herokuapp.com/https://api.thesocialcounter.com/twitter/?name=*/
        flwr = data.followers;
        title=data.name;
        pic=data.profile_image;
        bckgrnd=data.banner;

        $(".title").text(title);
        $("#odometer").text(flwr);
        
        
         var image = document.querySelector('#user_pic'); image.src = pic;
          var image = document.querySelector('#bckgrnd'); image.src = bckgrnd;
         
        })
        
        
        
        /*var id2 ="iamsrk"*/
$.getJSON("https://cors-munnyreol.herokuapp.com/http://munnyreol.herokuapp.com/twitter/api/?user="+/*replace*/id2, function (dataa) {
/*https://cors-anywhere.herokuapp.com/https://api.thesocialcounter.com/twitter/?name=*/
        folower = dataa.followers;
        titlee=dataa.name;
        pics=dataa.profile_image;
        backgrnd=dataa.banner;

        $(".title2").text(titlee);
        $("#odometer2").text(folower);
        
        
         var image = document.querySelector('#user_pics'); image.src = pics;
          var image = document.querySelector('#backgrnd'); image.src = backgrnd;
         
        })

       setInterval(function() {
$.getJSON("https://cors-munnyreol.herokuapp.com/http://munnyreol.herokuapp.com/twitter/api/?user="+/*replace*/id, function (data) {
        flwr = data.followers;
        $("#odometer").text(flwr);

$.getJSON("https://cors-munnyreol.herokuapp.com/http://munnyreol.herokuapp.com/twitter/api/?user="+/*replace*/id2, function (dataa) {
        folower = dataa.followers;
        $("#odometer2").text(folower);
        if (folower>flwr )
        {
        defferent = folower - flwr
         $("#defferent").text(defferent);
         } else {
         defferent = flwr- folower
          $("#defferent").text(defferent); 
         }
        }); 
        }); 
         }, 2500)

$("button").click(function (){
function getRandomName() {
 var names = [ "munnyreol", "BarackObama","JustinBieber", "AmitabhBachan", "iamsrk"];
 return names[Math.floor(Math.random() * names.length)];
} 

id=prompt("Enter your favorite Twitter channel Name",getRandomName())

if (id.length == 0) {
    alert("Invalid Username!")
  } else {
window.location.href = "?user1="+id+"&user2="+id2
   /* window.location.href = "/twitter-live-follower/?user="+id*/
  }

    });
