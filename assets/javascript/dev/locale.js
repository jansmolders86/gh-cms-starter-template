$(function(){
    var url = './assets/json/content.bin';
    var $body = $("body");

    $.ajax({
        url: url,
        scriptCharset: "utf-8",
        type: "GET",
        success: function (data) {
            var actual = JSON.parse(decodeURIComponent(escape(window.atob(data))));
            var loc = getCookie('lang');
            var locData = actual[loc];
            var homepage = locData.pages.homepage;
            var header = homepage.header.content;
            var content = homepage.content.section;
            var footer = homepage.footer.content;  

            if (header) {
                $body.find("[data-content='header-content-title']").html(header.header);
                $body.find("[data-content='header-content-desc']").html(header.description);
            }

            if (content) {
                $body.find("[data-content='content-title']").html(content.header);
                $body.find("[data-content='content-image']").attr('src', content.image.src).attr('alt', content.image.alt);
            }

            if (footer) {
                $body.find("[data-content='footer-title']").html(footer.header);
            }
        }
    });
});
