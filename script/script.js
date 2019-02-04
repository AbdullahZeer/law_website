$("#Foreign-Investments").click(()=>{
    hideAllServices();
    showByID("#Foreign-Investments-des");
});

function hideAllServices(){
    $("#all-services").addClass("zoomOut");
    setTimeout(()=>{
        $("#all-services").addClass("hide");
    }, 500);
}

function showByID(id){
    setTimeout(() => {
        $(id).removeClass("hide");
        $(id).addClass("zoomIn");
        $(id).addClass("current-viwed-service");
        viewService = true;
    }, 500);
}

function showAllServices(){
    setTimeout(() => {
        $("#all-services").removeClass("hide");
        $("#all-services").addClass("zoomIn");
    }, 500);
}
let viewService = false;

$(document).on('click', function (e) {
    if ($(e.target).closest(".current-viwed-service").length === 0 && viewService) {
        
        setTimeout(() => {
            $(".current-viwed-service").addClass("zoomOut");
            $(".current-viwed-service").addClass("hide");
        }, 500);

        showAllServices();
    }
});


  