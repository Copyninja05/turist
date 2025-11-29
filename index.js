let a=document.getElementsByClassName("bb1")
let b=document.getElementsByClassName("bb2")
let c=document.getElementsByClassName("bb3")

get=true;
 console.log("running")
function forword(){
     
                    if (get==true){
                         
                                b[0].src="././Rectangle 54.png";
                                 
                                get=false;
                                 
                    }

                    else{
                        b[0].src="./Rectangle 53 (1).png";
                        get=true
                        console.log("running")
                    }

}

