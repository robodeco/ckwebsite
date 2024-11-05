$(document).ready(function () {


    //swap out directional text according to screen width
    if ($(window).width() < 992) {
        $(".containerDirection").html(
            `
            <strong>below</strong>
            `
        )
        } else {
        $(".containerDirection").html(
            `
            on the left
            `
        )
    };

    $(window).on('resize', function (){
        let window = $(this);

        if (window.width() < 992) {
            $(".containerDirection").html(
                `
                <strong>below</strong>
                `
            )
        } else {
            $(".containerDirection").html(
                `
                on the left
                `
            )
        }
    });

    // automatically set current year on copyright in footer
    $(".currentYear").html(new Date().getFullYear());

    // add class to page that starts a page transition when navigating to a new page
    $(".nav-link:not(.active)").on("click", function (evt) {
        let link = $(this).attr("href");
        evt.preventDefault();

        $("body").addClass("pageTransitionOut");

        // delay link activating to give time for page transition animation
        setTimeout(function() {
            window.location.href = link 
            }, 500 );
    });

    // fix for faulty navbar collapse button on every page but AboutMe page
    $("body:not(.aboutMe) .navbar-toggler").on("click", function() {
        $(".navbar-collapse").toggle("show");
    })


    /**========================================================================
     *                           PRINT PORTFOLIO PAGE
     *========================================================================**/
    // Print Portfolio page selection/hover effects on portfolio preview images
    $(".smallPortView").on({
        mouseover: function () {
            let title = $(this).attr("title");

            if (!$(this).hasClass("selected") && $(this).find(".hoverTitle").length == 0 ) {

            // set transition speed for title element
            $("<div class='hoverTitle'>" + title + "</div>")
            .hide()
            .appendTo($(this))
            .fadeTo(3, 1)
            } else {
                return;
            }
        },
        focus: function () {
            let title = $(this).attr("title");

            if ($(this).find(".hoverTitle").length == 0) {
                // set transition speed for title element
                $("<div class='hoverTitle'>" + title + "</div>")
                .hide()
                .appendTo($(this))
                .fadeTo(3, 1)
            } else {
                return;
            }

        },
        mouseout: function() {
            let title = $(this).attr("title");

            if ($(this).hasClass("selected") || $(this).is(":focus")) {
                $(this).html(
                    "<div class='hoverTitle'>" + title + "</div>"
                );
            } 
            
            else if ($(this).is(":focus") && $(this).html('')) {
            // set transition speed for title element
            $("<div class='hoverTitle'>" + title + "</div>")
            .hide()
            .appendTo($(this))
            .fadeTo(3, 1)
            }
            
            else {
                $(this).html("");
            }
        },
        focusout: function() {
            let title = $(this).attr("title");

            if ($(this).hasClass("selected")) {
                $(this).html(
                    "<div class='hoverTitle'>" + title + "</div>"
                );
            } else {
                $(this).html("");

                // $(this).children(".hoverTitle").css({"opacity" : "0", "transition-duration" : ".2s"});

                // setTimeout (
                //     function () {
                //         $(this).html("");
                //     }, 100)
            }
        },
        click: function () {
            let title = $(this).attr("title");
            let imgPath = $(this).attr("data-imgPath");
            let desc = $(this).attr("aria-label");
            
            $(".smallPortView.selected").html("");
            $(".smallPortView").removeClass("selected");

            $(this).addClass("selected");
            $(this).html(
                "<div class='hoverTitle'>" + title + "</div>"
            );

            // set main descriptive text and main photo for sighted users and set transitions for the change

            $("#printPortImg_container").css("opacity", "0");
            $("#printPortDesc").css("opacity", "0");

            setTimeout (
                function() {
                    $("#printPortDesc .portDesc_title").html(title);
                    $("#printPortDesc .portDesc_info").html(desc);
                    $("#printPortImg_container img").attr("src", imgPath);
                    $("#printPortImg_container img").attr("title", title);
                    $("#printPortImg_container img").attr("alt", title);
                }, 400)
            
            setTimeout (
                function () {
                    $("#printPortImg_container").css("opacity", "1");
                    $("#printPortDesc").css("opacity", "1");
                }, 500)
        },
        keyup: function (e) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                let title = $(this).attr("title");
                let imgPath = $(this).attr("data-imgPath");
                let desc = $(this).attr("aria-label");
                
                $(".smallPortView.selected").html("");
                $(".smallPortView").removeClass("selected");

                $(this).addClass("selected");
                $(this).html(
                    "<div class='hoverTitle'>" + title + "</div>"
            );

            // set main descriptive text and main photo for sighted users and set transitions for the change
            
            $("#printPortImg_container").css("opacity", "0");
            $("#printPortDesc").css("opacity", "0");

            setTimeout (
                function() {
                    $("#printPortDesc .portDesc_title").html(title);
                    $("#printPortDesc .portDesc_info").html(desc);
                    $("#printPortImg_container img").attr("src", imgPath);
                }, 400)
            
            setTimeout (
                function () {
                    $("#printPortImg_container").css("opacity", "1");
                    $("#printPortDesc").css("opacity", "1");
                }, 500)
            } else {
                return;
            }
        }
    });

    //open bigger version of the image upon clicking it or hitting enter while focused on it
    $(".printPort #printPortImg_container img").on({
        click: function() {
            let sourceImgPath = $(this).attr("src");
            let modalImage = $("#bigImgModal img");
            let sourceTitle = $(this).attr("title");
            let modalImgTitle = $("#bigImageModal img").attr("title");
            let modalAlt = $("#bigImageModal img").attr("alt")

            modalImage.attr("src", sourceImgPath);
            modalImage.attr("title", sourceTitle);
            modalImage.attr("alt", sourceTitle);
        },
        keyup: function (e) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                let sourceImgPath = $(this).attr("src");
                let modalImage = $("#bigImgModal img");
                let sourceTitle = $(this).attr("title");
                let modalImgTitle = $("#bigImageModal img").attr("title");
                let modalAlt = $("#bigImageModal img").attr("alt")
    
                modalImage.attr("src", sourceImgPath);
                modalImage.attr("title", sourceTitle);
                modalImage.attr("alt", sourceTitle);

                $("#printPortImg_container img").click();
            }
        }
    });
    // set focus on cancel button once modal is open 
    $("#bigImgModal").on("shown.bs.modal", function () {
        $("#bigImgModal .btn-close").focus();
    }) 

    /**========================================================================
     *                     MOTION GRAPHICS & CODING PAGES
     *========================================================================**/

    $(".viewNow:not(.previewNow)").on({
        click: function () {
            let path = $(this).attr("data-path")

            $(".btn.viewNow").removeClass("active");
            $(this).addClass("active");
            $(".vidContainer iframe").attr("src", path);
        },
        keyup: function () {
            if (e.key === 'Enter' || e.keyCode === 13) {
                $(".btn.viewNow").removeClass("active");
                $(this).addClass("active");
                $(".vidContainer iframe").attr("src", path);
            }
        }

    })

    /**========================================================================
     *                           WRITTEN WORKS PAGE
     *========================================================================**/
    $(".viewNow.previewNow").on({
        click: function () {
            let dataID = $(this).attr("data-associated-id");

            $(".writeWork .writeSection").css("opacity", "0");
            $(".writeWork .writeSection").css("opacity", "0");

            // check each writing section for its ID. if it matches the data attribute of the clicked button, unhide that section and hide all the others
            setTimeout (
                function () {
                    $(".writeWork .leftMainContent .writeSection").each( function() {
                        let iterationID = $(this).attr("id")
        
                        if (iterationID == dataID) {
                            $(".writeSection").addClass("hide");
                            $(this).removeClass("hide")
                        }
                    });
                }, 400
            )

            setTimeout (
                function () {
                    $(".writeWork .writeSection").css("opacity", "1");
                    $(".writeWork .writeSection").css("opacity", "1");
                }, 500
            )

            $(".previewNow").removeClass("active");
            $(this).addClass("active");
        }
    })
});
