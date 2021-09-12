$(document).ready(function () {
    if ($(window).scrollTop() > 400) {
        $("#goTotop").show();
    } else {
        $("#goTotop").hide();
    }

    window.addEventListener("scroll", function () {
        if ($(window).scrollTop() > 400) {
            $("#goTotop").show();
        } else {
            $("#goTotop").hide();
        }
    });

    // Subir ao topo com suavidade

    $('#goTotop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // $(document).getElementById("mascara1").style.display = "none";
});

function mascara(){
    document.getElementById("mascara").style.display = "none";
}