(function($) {
    $(function() {
        // Welcome Messages
        var welcomeMessages = [
            // 'Cut. Copy. Paste.',
            // 'Professional solutions for business problems.',
            'A passionate team of technological experts that takes pride in making small businesses shine via a wide range of <a href="#services" class="scrolly">services.</a>'
        ];
        $('#welcome').html(welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]);
    });
})(jQuery);