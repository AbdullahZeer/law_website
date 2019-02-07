
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