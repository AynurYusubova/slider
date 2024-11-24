let pics = [
            'photo/01-min.jpg',
            'photo/03-min.jpg',
            'photo/05-min.jpg',
            'photo/06-min.jpg'
        ];

     
let img = document.querySelector("#slider img");
img.src = pics[0];
let currentslider=0;


setInterval(()=>{
    currentslider++;
     if(currentslider>pics.length-1){
        currentslider=0
     }
    img.src=pics[currentslider]
},1000)



      

  



