function showCards() {

    $("#card_display").html("<h4> Loading ... </h4>");

    var value1 = $("#card1_value").val();
    var suit1 = $("#card1_suit").val().toLowerCase();

    var html = '<div class = "row"><h6>Pre-flop: </h6></div>';
    html += '<div class = "row">';
    html += '   <div class="card ' + suit1 + ' v' + value1 +'">';
    html += '   <div class="top"><div class="number"></div><div class="suit"></div></div><div class="bottom"><div class="number"></div><div class="suit"></div></div></div>';

    var value2 = $("#card2_value").val();
    var suit2 = $("#card2_suit").val().toLowerCase();

    html += '   <div class="card ' + suit2 + ' v' + value2 +' col-md-offset-1">';
    html += '   <div class="top"><div class="number"></div><div class="suit"></div></div><div class="bottom"><div class="number"></div><div class="suit"></div></div></div>';
    html += '</div>';

    $("#card_display").html(html);
}