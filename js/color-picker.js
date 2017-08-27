$.fn.colorPicker = function() {
    var defaultColor = $('#color-value').val();
    $(".color-check").hide();
    this.each(function() {
        var self = $(this),
            color = self.data("color");
        self.css("background-color", color);
        self.click(function() {
            self.toggleClass("color-selected");
            $(".color-circle").not(self).removeClass("color-selected");
            if (self.hasClass("color-selected")) {
                $(".color-check").show();
                self.append($(".color-check"));
                $("#color-value").attr("value", color);
            } else {
                $(".color-check").hide();
                $("#color-value").attr("value", defaultColor);
            }
        });
    });
};