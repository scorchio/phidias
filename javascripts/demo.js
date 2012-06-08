/**
 * Created with JetBrains PhpStorm.
 * User: nezuvian
 * Date: 2012.06.08.
 * Time: 2:08
 */
$(document).ready(function() {
    $('#toggle-semantic').click(function() {
        $('#toggle-non-semantic').slideToggle("slow", function() {
            $('#semantic').slideToggle("slow");
        });

    });
    $('#toggle-non-semantic').click(function() {
        $('#toggle-semantic').slideToggle("slow", function() {
            $('#non-semantic').slideToggle("slow");
        });
    });


    $('#semantic-basic-html-toggle').click(function() {
        $('#semantic-basic-html').slideToggle("slow");
    });

    $('#semantic-basic-less-toggle').click(function() {
        $('#semantic-basic-less').slideToggle("slow");
    });

    $('#semantic-offset-html-toggle').click(function() {
        $('#semantic-offset-html').slideToggle("slow");
    });

    $('#semantic-offset-less-toggle').click(function() {
        $('#semantic-offset-less').slideToggle("slow");
    });

    $('#semantic-pp-html-toggle').click(function() {
        $('#semantic-pp-html').slideToggle("slow");
    });

    $('#semantic-pp-less-toggle').click(function() {
        $('#semantic-pp-less').slideToggle("slow");
    });

    $('#non-semantic-basic-html-toggle').click(function() {
        $('#non-semantic-basic-html').slideToggle("slow");
    });

    $('#non-semantic-offset-html-toggle').click(function() {
        $('#non-semantic-offset-html').slideToggle("slow");
    });

    $('#non-semantic-pp-html-toggle').click(function() {
        $('#non-semantic-pp-html').slideToggle("slow");
    });

});