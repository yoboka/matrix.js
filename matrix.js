/* DEVELOPED BY JOSEPH KASTIER 03/2014 */
(function ($) {
    $.fn.matrix = function () {
        var arr = new Array("&Aring;", "&delta;", "&ETH;", "&lambda;", "&micro;", "&forall;",
	    "&dagger;", "&Delta;", "&eta;", "&Gamma;", "&kappa;", "&Omega;", "&perp;", "&sigmaf;", "&thetasym;", "&thorn;");
        var documentWidth = $("#matrix").width();
        run();

        function run() {
            for (var i = 0; i < Math.floor(documentWidth / 10) - 1; i++) {
                $("#matrix").append("<div class='matrix_row'></div>");
            }
            setInterval(function () { render(); }, 350);
        }

        function render() {
            $(".matrix_row").each(function () {
                var rdnm = Math.floor((Math.random() * 70) + 1);
                var val = "";
                for (var y = 0; y < rdnm; y++) {
                    var arrRdnm = Math.floor((Math.random() * arr.length - 1) + 1);
                    val += "<span>" + arr[arrRdnm] + "</span> ";
                }
                $(this).html(val);
            });
        }
    }
}(jQuery));