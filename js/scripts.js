$("#carouselButton").click(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});

$(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            success: function (result) {
                $.each(result, function (index, item) {
                    $(".container_card").append("<div class='card bg-warning'><strong>Hospital Name:</strong>"+item.userId +
                                                "<div class='card-header'><strong>VACANT REGULAR BEDS:</strong>"+item.id+"</div>" +
                                                "<div class='card-body'>" +
                                                    "<h5 class='card-title'><strong>VACANT BEDS WITH OXYGEN:</strong>"+item.title+"</h5>" +
                                                    "<p class='card-text'><strong>VACANT BEDS WITH VENTILATOR:<strong>"+item.body+"</p>" +
                                                "</div>" +
                                            "</div>");
                });
            }
        });
    });

$(document).ready(function(){
    $("#btn-login").click(function(){
        $('#loginModal').modal('show')
    });
    $("#btn-reserveTable").click(function(){
        $('#reserveformModal').modal('show')
    });
});
