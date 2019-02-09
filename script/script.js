
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
       value[0].selected = 'selected';
    }else if(id === "CEO"){
        value[1].selected = 'selected';
    }else if(id === "student"){
        value[2].selected = 'selected';
    }else if(id === "Trainees"){
        value[3].selected = 'selected';
    }else if(id === "Counselors"){
       
    }
}


