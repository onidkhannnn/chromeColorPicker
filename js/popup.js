$(".picker").spectrum({
    color: "#fff",
    change: function(color) {
        $("#picker-log").text("The Color is: " + color.toHexString());
    }
});
