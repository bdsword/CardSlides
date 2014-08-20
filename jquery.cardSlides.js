(function($){
    $.fn.cardSlides = function(itemsPerPage){
        var pos = 0;
        var slidesContainer = this.find('.slides-container');
        var viewPort = this.children('.view-port');
        var slidesItems = slidesContainer.children('.slides-item');
        var slidesItemCount = slidesItems.size();
        var containerWidth = (100/itemsPerPage)*slidesItemCount;
        slidesItems.css({
            "width": (100/slidesItemCount)+"%",
            "float": "left",
            "position": "relative",
            "padding": "15px",
            "-webkit-box-sizing": "border-box",
            "-moz-box-sizing": "border-box"
        });
        slidesContainer.width(containerWidth+'%');
        viewPort.css({
            "padding": "0",
            "overflow": "hidden"}
        ); // prevent bootstrap default padding-left & padding-right
        this.children(".slides-control").click(function(){
            var cardItemWidth = slidesItems.first().outerWidth();
            if( $(this).data('slides')==="previous" && pos<0 ){
                pos += cardItemWidth;
            }else if( $(this).data('slides')==="next" && pos>(-1*(slidesItemCount-itemsPerPage)*cardItemWidth ) ){
                pos -= cardItemWidth;
            }
            slidesContainer.attr('style', transitionGenerator('0.5s') +
                transformGenerator('translate3d('+ pos +'px, 0px, 0px)') + '; width: ' + containerWidth + '%;');
        });
    };

    function transitionGenerator(options) {
        return '-moz-transition: ' + options + '; ' +
            '-webkit-transition: ' + options + '; ' +
            'transition: ' + options + '; ';
    }

    function transformGenerator(options) {
        return '-moz-transform: ' + options + '; ' +
            '-webkit-transform: ' + options + '; ' +
            'transform: ' + options + '; ';
    }
})(jQuery);