jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 900);
    });

    var defaults = {
        containerID: 'toTop', // fading element id
        containerHoverID: 'toTopHover', // fading element hover id
        scrollSpeed: 1200,
        easingType: 'linear'
    };


    $().UItoTop({
        easingType: 'easeOutQuart'
    });

    $('#topicosEspecializacaoFacial').show();
    $('#topicosEspecializacaoCorporal').hide();
    $('#topicosEspecializacaoFinanceira').hide();

    $('#especializacaoFacial').click(function () {
        $('#topicosEspecializacaoFacial').show();
        $('#topicosEspecializacaoCorporal').hide();
        $('#topicosEspecializacaoFinanceira').hide();
    });

    $('#especializacaoCorporal').click(function () {
        $('#topicosEspecializacaoFacial').hide();
        $('#topicosEspecializacaoCorporal').show();
        $('#topicosEspecializacaoFinanceira').hide();
    });

    $('#especializacaoFinanceira').click(function() {
        $('#topicosEspecializacaoFacial').hide();
        $('#topicosEspecializacaoCorporal').hide();
        $('#topicosEspecializacaoFinanceira').show();
    })

});