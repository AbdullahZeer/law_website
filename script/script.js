
var currentModal;
function showByID(id){
    currentModal = $("#"+id +"-des");
        console.log(id +"-des");
   $(currentModal).addClass("show-modal");
}

function hideModal(){
    console.log("hide");
    $(currentModal).removeClass("show-modal");
}
function toForm(id){
    $(window).scrollTop($('#Partners-form').offset().top);
    let value = $("#Partners-form-select option");
    if(id === "mediators"){
       value[1].selected = 'selected';
    }else if(id === "CEO"){
        value[2].selected = 'selected';
    }else if(id === "student"){
        value[3].selected = 'selected';
    }else if(id === "Trainees"){
        value[4].selected = 'selected';
    }else if(id === "Counselors"){
       
    }
}



 $( document ).ready(function() {
   
    changePattern();
     $(window).resize(function(){
        changePattern();
      });

 });

 function changePattern(){
    let w = window.innerWidth;
    if(w < 440){
        $(".pattern").attr("data", "Images/pattern-mobile.svg") ;
        $("#contact-us-background").attr("data", "Images/contactus-mobile.svg")
    }else{
       $(".pattern").attr("data", "Images/pattern.svg") ;
       $("#contact-us-background").attr("data", "Images/contactus.svg")
    }
 }