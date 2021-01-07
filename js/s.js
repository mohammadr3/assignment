document.addEventListener("DOMContentLoaded",function(event){


    document.querySelector("#one").addEventListener("click" , function(){

        var xttp = new XMLHttpRequest ();
        xttp.onreadystatechange=function(){
            var i = 0 , f = 0;
            if ((this.readyState==3)){if(i==f){
                document.querySelector(".lol").innerHTML="";
                i++;
            }}


        if ((this.readyState==4)&&(this.status==200)){
            
            var jsondata = JSON.parse(this.responseText);//from json to obj.
            for(var prop in jsondata){
                document.querySelector(".lol").innerHTML=document.querySelector(".lol").innerHTML+ "<br>" + " name : " + jsondata[prop].name + "   <===>   description : "+jsondata[prop].description +"<br>";
             }
             f++;
            
            }
        };

        xttp.open("GET" , "js/chicken.json" , true ) ; //(POST in body , GET in url)
        xttp.send(null) ; // for post only   

    })

    document.querySelector("#two").addEventListener("click" , function(){

        var xttp = new XMLHttpRequest ();
        xttp.onreadystatechange=function(){
            var i = 0 , f = 0;
           
            if ((this.readyState==3)){if(i==f){
                document.querySelector(".lol").innerHTML="";
                i++;
            }}
        if ((this.readyState==4)&&(this.status==200)){
            
            var jsondata = JSON.parse(this.responseText);//from json to obj.
            for(var prop in jsondata){
                document.querySelector(".lol").innerHTML=document.querySelector(".lol").innerHTML+ "<br>" + " name : " + jsondata[prop].name + "   <===>   description : "+jsondata[prop].description +"<br>";
             }
            f++;
            }
        };

        xttp.open("GET" , "js/two.json" , true ) ; //(POST in body , GET in url)
        xttp.send(null) ; // for post only   

    })

    document.querySelector("#three").addEventListener("click" , function(){

        var xttp = new XMLHttpRequest ();
        xttp.onreadystatechange=function(){

            var i = 0 , f = 0;
            if ((this.readyState==3)){if(i==f){
                document.querySelector(".lol").innerHTML="";
                i++;
            }}

        if ((this.readyState==4)&&(this.status==200)){
            
            var jsondata = JSON.parse(this.responseText);//from json to obj.
            for(var prop in jsondata){
                document.querySelector(".lol").innerHTML=document.querySelector(".lol").innerHTML+ "<br>" + " name : " + jsondata[prop].name + "   <===>   description : "+jsondata[prop].description +"<br>";
             }
            f++;
            }
        };

        xttp.open("GET" , "js/three.json" , true ) ; //(POST in body , GET in url)
        xttp.send(null) ; // for post only   

    })

})

// document.querySelector("#one").addEventListener("mousemove" , functison(e){e.m})
