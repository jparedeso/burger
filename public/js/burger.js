const Burger =  function() {
    function init() {
        devourBurger();
    }

    function devourBurger() {
        $(".burgerButton").on("click", function(e) {

            const id =  $(this).data("burgerid");

            $.ajax("/devour/" + id, {
                type: "PUT"
            }).then(
                function () {
                    location.reload();
                }
            )
        });
    }

    return {
        init: init
    }
}();

$(function() {
    Burger.init();
});