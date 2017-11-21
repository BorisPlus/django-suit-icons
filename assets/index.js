$(document).ready(function () {

  function copyToClipboard(element) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text().trim()).select();
      document.execCommand("copy");
      $temp.remove();
    }

    var original = '';
    var clicked = false;

    $('.col').on({
      "click": function() {
        original = $(this).contents().last();
        $(this).contents().last().replaceWith('copied to clipboard');
        clicked = true;
        copyToClipboard(original);
      },
      "mouseout": function() {
        if (clicked) {
          $(this).contents().last().replaceWith(original);
          clicked = false;
        }

      }
    });
});
