$( document ).ready(function() {

    $("#flop_selections").hide();
    $("#post_flop_display").hide();
    $(".turn_card").hide();
    $(".river_card").hide();
    $("#turn_selections").hide();
    $("#river_selections").hide();


    $('input:radio[name=flop_buttons]').click(function(){
        var flop_selected = $(this).val();

        if (flop_selected == "yes_flop") {
            yesFlop();
        } else {
            noFlop();
            noTurn();
            noRiver();
        }
    });

    $('input:radio[name=turn_buttons]').click(function(){
        var turn_selected = $(this).val();

        if (turn_selected == "yes_turn") {
            yesTurn();
        } else {
            noTurn();
            noRiver();
        }
    });

    $('input:radio[name=river_buttons]').click(function(){
        var river_selected = $(this).val();

        if (river_selected == "yes_river") {
            yesRiver();
        } else {
            noRiver();
        }
    });
});


function yesFlop() {
    $("#flop_selections").show();
    $("#post_flop_display").show();
}

function noFlop() {
    $("#flop_selections").hide();
    $("#post_flop_display").hide();

    // clear dropdown selects after hiding
    $("#flop1_value").val("");
    $("#flop1_suit").val("");
    $("#flop2_value").val("");
    $("#flop2_suit").val("");
    $("#flop3_value").val("");
    $("#flop3_suit").val("");
    $("#turn_suit").val("");
    $("#turn_value").val("");
    $("#river_suit").val("");
    $("#river_value").val("");

    // clear radio buttons after hiding
    $('input:radio[name=flop_buttons]').prop('checked', false);
    $('input:radio[name=turn_buttons]').prop('checked', false);
    $('input:radio[name=river_buttons]').prop('checked', false);
}

function yesTurn() {
    $("#turn_selections").show();
    $(".turn_card").show();

    // var html_flop += '<div class = "card back turn_card col-md-offset-1"></div><div class = "card back river_card col-md-offset-1"></div>';
}

function noTurn() {
    $("#turn_selections").hide();
    $(".turn_card").hide();

    // clear dropdown selects after hiding
    $("#turn_suit").val("");
    $("#turn_value").val("");
    $("#river_suit").val("");
    $("#river_value").val("");

    // clear radio buttons after hiding
    $('input:radio[name=turn_buttons]').prop('checked', false);
    $('input:radio[name=river_buttons]').prop('checked', false);
}

function yesRiver() {
    $("#river_selections").show();
    $(".river_card").show();
}

function noRiver() {
    $("#river_selections").hide();
    $(".river_card").hide();

    // clear dropdown selects after hiding
    $("#river_suit").val("");
    $("#river_value").val("");

    // clear radio buttons after hiding
    $('input:radio[name=river_buttons]').prop('checked', false);
}


function showCards() {

    // First card pre-flop
    var value1 = $("#card1_value").val();
    var suit1 = $("#card1_suit").val().toLowerCase();

    // Second card pre-flop
    var value2 = $("#card2_value").val();
    var suit2 = $("#card2_suit").val().toLowerCase();


    // Pre-flop
    var html = '';

    if (value1 && suit1 && value2 && suit2) {
        html += '   <div class="card ' + suit1 + ' v' + value1 +'">';
        html += '   <div class="top"><div class="number"></div><div class="suit"></div></div><div class="bottom"><div class="number"></div><div class="suit"></div></div></div>';

        html += '   <div class="card ' + suit2 + ' v' + value2 +' col-md-offset-1">';
        html += '   <div class="top"><div class="number"></div><div class="suit"></div></div><div class="bottom"><div class="number"></div><div class="suit"></div></div></div>';

        $(".preflop_cards").html(html);
    }
    // else {
    //     $(".preflop_cards").html("<h4> Must enter both cards for analysis :) </h4>");
    // }


    // Flop

    // First flop card
    var flop_value1 = $("#flop1_value").val();
    var flop_suit1 = $("#flop1_suit").val().toLowerCase();

    // Second flop card
    var flop_value2 = $("#flop2_value").val();
    var flop_suit2 = $("#flop2_suit").val().toLowerCase();

    // Third flop card
    var flop_value3 = $("#flop3_value").val();
    var flop_suit3 = $("#flop3_suit").val().toLowerCase();

    var html_flop1 = "";
    var html_flop2 = "";
    var html_flop3 = "";

    if (flop_value1 && flop_suit1
        && flop_value2 && flop_suit2
        && flop_value3 && flop_suit3) {

        html_flop1 += '   <div class="flop_card1 card ' + flop_suit1 + ' v' + flop_value1 +'">';
        html_flop1 += '   <div class="top"><div class="number"></div><div class="suit"></div></div><div class="bottom"><div class="number"></div><div class="suit"></div></div></div>';

        html_flop2 += '   <div class="flop_card2 card ' + flop_suit2 + ' v' + flop_value2 +' col-md-offset-1">';
        html_flop2 += '   <div class="top"><div class="number"></div><div class="suit"></div></div><div class="bottom"><div class="number"></div><div class="suit"></div></div></div>';

        html_flop3 += '   <div class="flop_card3 card ' + flop_suit3 + ' v' + flop_value3 +' col-md-offset-1">';
        html_flop3 += '   <div class="top"><div class="number"></div><div class="suit"></div></div><div class="bottom"><div class="number"></div><div class="suit"></div></div></div>';

        $(".flop_card1").replaceWith(html_flop1);
        $(".flop_card2").replaceWith(html_flop2);
        $(".flop_card3").replaceWith(html_flop3);
    }


    // Turn card
    var turn_value = $("#turn_value").val();
    var turn_suit = $("#turn_suit").val().toLowerCase();

    var html_turn = "";

    if (turn_value && turn_suit) {

        html_turn += '   <div class="turn_card card ' + turn_suit + ' v' + turn_value +' col-md-offset-1">';
        html_turn += '   <div class="top"><div class="number"></div><div class="suit"></div></div><div class="bottom"><div class="number"></div><div class="suit"></div></div></div>';

        $(".turn_card").replaceWith(html_turn);
    }


    // River card
    var river_value = $("#river_value").val();
    var river_suit = $("#river_suit").val().toLowerCase();

    var html_river = "";

    if (river_value && river_suit) {

        html_river += '   <div class="river_card card ' + river_suit + ' v' + river_value +' col-md-offset-1">';
        html_river += '   <div class="top"><div class="number"></div><div class="suit"></div></div><div class="bottom"><div class="number"></div><div class="suit"></div></div></div>';

        $(".river_card").replaceWith(html_river);
    }

}

function calculateOdds() {
    // First card pre-flop
    var value1 = $("#card1_value").val();
    var suit1 = $("#card1_suit").val().toLowerCase();

    // Second card pre-flop
    var value2 = $("#card2_value").val();
    var suit2 = $("#card2_suit").val().toLowerCase();

    // First flop card
    var flop_value1 = $("#flop1_value").val();
    var flop_suit1 = $("#flop1_suit").val().toLowerCase();

    // Second flop card
    var flop_value2 = $("#flop2_value").val();
    var flop_suit2 = $("#flop2_suit").val().toLowerCase();

    // Third flop card
    var flop_value3 = $("#flop3_value").val();
    var flop_suit3 = $("#flop3_suit").val().toLowerCase();

    // Turn card
    var turn_value = $("#turn_value").val();
    var turn_suit = $("#turn_suit").val().toLowerCase();

    // River card
    var river_value = $("#river_value").val();
    var river_suit = $("#river_suit").val().toLowerCase();

    // alert("The cards are: " + value1 + suit1 + ", " + value2 + suit2 + ", " + flop_value1 + flop_suit1 + ", " + flop_value2 + flop_suit2 + ", " + flop_value3 + flop_suit3 + ", " + turn_value + turn_suit + ", " + river_value + river_suit)

    // No Flop
    if (value1 && suit1 && value2 && suit2 && !flop_value1 && !flop_suit1 && !flop_value2 && !flop_suit2 && !flop_value3 && !flop_suit3 && !turn_suit && !turn_value && !river_value && !river_suit) {
        // Flopped a pair
        if (value1 == value2) {
            alert("you have flopped a pair");
        } else {
            alert("you have nothing");
        }

        // Flop, no turn or river
    } else if (value1 && suit1 && value2 && suit2 && flop_value1 && flop_suit1 && flop_value2 && flop_suit2 && flop_value3 && flop_suit3 && !turn_suit && !turn_value && !river_value && !river_suit) {

        // Pair
        if (value1 == value2 || value1 == flop_value1 || value1 == flop_value2 || value1 == flop_value3
            || value2 == flop_value1 || value2 == flop_value2 || value2 == flop_value3
            || flop_value1 == flop_value2 || flop_value1 == flop_value3 || flop_value2 == flop_value3) {
            alert("you have a pair");
        }

        // Two pair
        if (value1 == value2 && flop_value1 == flop_value2
            || value1 == value2 && flop_value2 == flop_value3
            || value1 == value2 && flop_value1 == flop_value3
            || value1 == flop_value1 && value2 == flop_value2
            || value1 == flop_value1 && value2 == flop_value3
            || value1 == flop_value1 && flop_value2 == flop_value3
            || value1 == flop_value2 && value2 == flop_value1
            || value1 == flop_value2 && value2 == flop_value3
            || value1 == flop_value2 && flop_value1 == flop_value3
            || value1 == flop_value3 && value2 == flop_value1
            || value1 == flop_value3 && value2 == flop_value2
            || value1 == flop_value3 && flop_value1 == flop_value2
            || value2 == flop_value1 && flop_value2 == flop_value3
            || value2 == flop_value2 && flop_value1 == flop_value3
            || value2 == flop_value3 && flop_value1 == flop_value2) {
            alert("you have two pairs");
        }

        // Trips
        if ((value1 == value2 && value1 == flop_value1)
            || (value1 == value2 && value1 == flop_value2)
            || (value1 == value2 && value1 == flop_value3)
            || (value1 == flop_value1 && value1 == flop_value2)
            || (value1 == flop_value1 && value1 == flop_value3)
            || (value1 == flop_value2 && value1 == flop_value3)
            || (value2 == flop_value1 && value2 == flop_value2)
            || (value2 == flop_value1 && value2 == flop_value3)
            || (value2 == flop_value2 && value2 == flop_value3)
            || (flop_value1 == flop_value2 && flop_value1 == flop_value3)) {
            alert("you have trips");
        }



        // Turn, no river
    } else if (value1 && suit1 && value2 && suit2 && flop_value1 && flop_suit1 && flop_value2 && flop_suit2 && flop_value3 && flop_suit3 && turn_suit && turn_value && !river_value && !river_suit) {

        // Pair
        if (value1 == value2 || value1 == flop_value1 || value1 == flop_value2 || value1 == flop_value3 || value1 == turn_value
            || value2 == flop_value1 || value2 == flop_value2 || value2 == flop_value3 || value2 == turn_value
            || flop_value1 == flop_value2 || flop_value1 == flop_value3 || flop_value2 == flop_value3
            || flop_value1 == turn_value || flop_value2 == turn_value || flop_value3 == turn_value) {
            alert("you have a pair");
        }

        // Two pair
        if (value1 == value2 && flop_value1 == flop_value2
            || value1 == value2 && flop_value2 == flop_value3
            || value1 == value2 && flop_value1 == flop_value3
            || value1 == value2 && flop_value1 == turn_value
            || value1 == value2 && flop_value2 == turn_value
            || value1 == value2 && flop_value3 == turn_value
            || value1 == flop_value1 && value2 == flop_value2
            || value1 == flop_value1 && value2 == flop_value3
            || value1 == flop_value1 && flop_value2 == flop_value3
            || value1 == flop_value1 && value2 == turn_value
            || value1 == flop_value1 && flop_value2 == turn_value
            || value1 == flop_value1 && flop_value3 == turn_value
            || value1 == flop_value2 && value2 == flop_value1
            || value1 == flop_value2 && value2 == flop_value3
            || value1 == flop_value2 && flop_value1 == flop_value3
            || value1 == flop_value2 && value2 == turn_value
            || value1 == flop_value2 && flop_value1 == turn_value
            || value1 == flop_value2 && flop_value3 == turn_value
            || value1 == flop_value3 && value2 == flop_value1
            || value1 == flop_value3 && value2 == flop_value2
            || value1 == flop_value3 && flop_value1 == flop_value2
            || value1 == flop_value3 && value2 == turn_value
            || value1 == flop_value3 && flop_value1 == turn_value
            || value1 == flop_value3 && flop_value2 == turn_value
            || value1 == turn_value && value2 == flop_value1
            || value1 == turn_value && value2 == flop_value2
            || value1 == turn_value && value2 == flop_value3
            || value1 == turn_value && flop_value1 == flop_value2
            || value1 == turn_value && flop_value1 == flop_value3
            || value1 == turn_value && flop_value2 == flop_value3
            || value2 == flop_value1 && flop_value2 == flop_value3
            || value2 == flop_value1 && flop_value2 == turn_value
            || value2 == flop_value1 && flop_value3 == turn_value
            || value2 == flop_value2 && flop_value1 == flop_value3
            || value2 == flop_value2 && flop_value1 == turn_value
            || value2 == flop_value2 && flop_value3 == turn_value
            || value2 == flop_value3 && flop_value1 == flop_value2
            || value2 == flop_value3 && flop_value1 == turn_value
            || value2 == flop_value3 && flop_value2 == turn_value
            || value2 == turn_value && flop_value1 == flop_value2
            || value2 == turn_value && flop_value1 == flop_value3
            || value2 == turn_value && flop_value2 == flop_value3
            || flop_value1 == flop_value2 && flop_value3 == turn_value
            || flop_value1 == flop_value3 && flop_value2 == turn_value
            || flop_value1 == turn_value && flop_value2 == flop_value3
        ) {
            alert("you have two pairs");
        }

        // Trips
        if ((value1 == value2 && value1 == flop_value1)
            || (value1 == value2 && value1 == flop_value2)
            || (value1 == value2 && value1 == flop_value3)
            || (value1 == value2 && value1 == turn_value)
            || (value1 == flop_value1 && value1 == flop_value2)
            || (value1 == flop_value1 && value1 == flop_value3)
            || (value1 == flop_value1 && value1 == turn_value)
            || (value1 == flop_value2 && value1 == flop_value3)
            || (value1 == flop_value2 && value1 == turn_value)
            || (value1 == flop_value3 && value1 == turn_value)
            || (value2 == flop_value1 && value2 == flop_value2)
            || (value2 == flop_value1 && value2 == flop_value3)
            || (value2 == flop_value1 && value2 == turn_value)
            || (value2 == flop_value2 && value2 == flop_value3)
            || (value2 == flop_value2 && value2 == turn_value)
            || (value2 == flop_value3 && value1 == turn_value)
            || (flop_value1 == flop_value2 && flop_value1 == flop_value3)
            || (flop_value1 == flop_value2 && flop_value1 == turn_value)
            || (flop_value1 == flop_value3 && flop_value1 == turn_value)
            || (flop_value2 == flop_value3 && flop_value2 == turn_value)) {
            alert("you have trips");
        }

        // River
    } else if (value1 && suit1 && value2 && suit2 && flop_value1 && flop_suit1 && flop_value2 && flop_suit2 && flop_value3 && flop_suit3 && turn_suit && turn_value && river_value && river_suit) {

        // Pair
        if (value1 == value2 || value1 == flop_value1 || value1 == flop_value2 || value1 == flop_value3 || value1 == turn_value || value1 == river_value
            || value2 == flop_value1 || value2 == flop_value2 || value2 == flop_value3 || value2 == turn_value || value2 == river_value
            || flop_value1 == flop_value2 || flop_value1 == flop_value3 || flop_value2 == flop_value3
            || flop_value1 == turn_value || flop_value2 == turn_value || flop_value3 == turn_value
            || flop_value1 == river_value || flop_value2 == river_value || flop_value3 == river_value
            || turn_value == river_value) {
            alert("you have a pair");
        }

        // Two pair
        if (value1 == value2 && flop_value1 == flop_value2
            || value1 == value2 && flop_value2 == flop_value3
            || value1 == value2 && flop_value1 == flop_value3
            || value1 == value2 && flop_value1 == turn_value
            || value1 == value2 && flop_value2 == turn_value
            || value1 == value2 && flop_value3 == turn_value
            || value1 == value2 && flop_value1 == river_value
            || value1 == value2 && flop_value2 == river_value
            || value1 == value2 && flop_value3 == river_value
            || value1 == value2 && turn_value == river_value
            || value1 == flop_value1 && value2 == flop_value2
            || value1 == flop_value1 && value2 == flop_value3
            || value1 == flop_value1 && flop_value2 == flop_value3
            || value1 == flop_value1 && value2 == turn_value
            || value1 == flop_value1 && flop_value2 == turn_value
            || value1 == flop_value1 && flop_value3 == turn_value
            || value1 == flop_value1 && value2 == river_value
            || value1 == flop_value1 && flop_value2 == river_value
            || value1 == flop_value1 && flop_value3 == river_value
            || value1 == flop_value1 && turn_value == river_value
            || value1 == flop_value2 && value2 == flop_value1
            || value1 == flop_value2 && value2 == flop_value3
            || value1 == flop_value2 && flop_value1 == flop_value3
            || value1 == flop_value2 && value2 == turn_value
            || value1 == flop_value2 && flop_value1 == turn_value
            || value1 == flop_value2 && flop_value3 == turn_value
            || value1 == flop_value2 && value2 == river_value
            || value1 == flop_value2 && flop_value1 == river_value
            || value1 == flop_value2 && flop_value3 == river_value
            || value1 == flop_value2 && turn_value == river_value
            || value1 == flop_value3 && value2 == flop_value1
            || value1 == flop_value3 && value2 == flop_value2
            || value1 == flop_value3 && flop_value1 == flop_value2
            || value1 == flop_value3 && value2 == turn_value
            || value1 == flop_value3 && flop_value1 == turn_value
            || value1 == flop_value3 && flop_value2 == turn_value
            || value1 == flop_value3 && value2 == river_value
            || value1 == flop_value3 && flop_value1 == river_value
            || value1 == flop_value3 && flop_value2 == river_value
            || value1 == flop_value3 && turn_value == river_value
            || value1 == turn_value && value2 == flop_value1
            || value1 == turn_value && value2 == flop_value2
            || value1 == turn_value && value2 == flop_value3
            || value1 == turn_value && flop_value1 == flop_value2
            || value1 == turn_value && flop_value1 == flop_value3
            || value1 == turn_value && flop_value2 == flop_value3
            || value1 == turn_value && value2 == river_value
            || value1 == turn_value && flop_value1 == river_value
            || value1 == turn_value && flop_value2 == river_value
            || value1 == turn_value && flop_value3 == river_value
            || value1 == river_value && value2 == flop_value1
            || value1 == river_value && value2 == flop_value2
            || value1 == river_value && value2 == flop_value3
            || value1 == river_value && value2 == turn_value
            || value1 == river_value && flop_value1 == flop_value2
            || value1 == river_value && flop_value1 == flop_value3
            || value1 == river_value && flop_value1 == turn_value
            || value1 == river_value && flop_value2 == flop_value3
            || value1 == river_value && flop_value2 == turn_value
            || value1 == river_value && flop_value3 == turn_value
            || value2 == flop_value1 && flop_value2 == flop_value3
            || value2 == flop_value1 && flop_value2 == turn_value
            || value2 == flop_value1 && flop_value3 == turn_value
            || value2 == flop_value1 && flop_value2 == river_value
            || value2 == flop_value1 && flop_value3 == river_value
            || value2 == flop_value1 && turn_value == river_value
            || value2 == flop_value2 && flop_value1 == flop_value3
            || value2 == flop_value2 && flop_value1 == turn_value
            || value2 == flop_value2 && flop_value3 == turn_value
            || value2 == flop_value2 && flop_value1 == river_value
            || value2 == flop_value2 && flop_value3 == river_value
            || value2 == flop_value2 && turn_value == river_value
            || value2 == flop_value3 && flop_value1 == flop_value2
            || value2 == flop_value3 && flop_value1 == turn_value
            || value2 == flop_value3 && flop_value2 == turn_value
            || value2 == flop_value3 && flop_value1 == river_value
            || value2 == flop_value3 && flop_value2 == river_value
            || value2 == flop_value3 && turn_value == river_value
            || value2 == turn_value && flop_value1 == flop_value2
            || value2 == turn_value && flop_value1 == flop_value3
            || value2 == turn_value && flop_value2 == flop_value3
            || value2 == turn_value && flop_value1 == river_value
            || value2 == turn_value && flop_value2 == river_value
            || value2 == turn_value && flop_value3 == river_value
            || value2 == river_value && flop_value1 == flop_value2
            || value2 == river_value && flop_value1 == flop_value3
            || value2 == river_value && flop_value2 == flop_value3
            || value2 == river_value && flop_value1 == turn_value
            || value2 == river_value && flop_value2 == turn_value
            || value2 == river_value && flop_value3 == turn_value
            || flop_value1 == flop_value2 && flop_value3 == turn_value
            || flop_value1 == flop_value2 && flop_value3 == river_value
            || flop_value1 == flop_value2 && turn_value == river_value
            || flop_value1 == flop_value3 && flop_value2 == turn_value
            || flop_value1 == flop_value3 && flop_value2 == river_value
            || flop_value1 == flop_value3 && turn_value == river_value
            || flop_value1 == turn_value && flop_value2 == flop_value3
            || flop_value1 == turn_value && flop_value2 == river_value
            || flop_value1 == turn_value && flop_value3 == river_value
            || flop_value1 == river_value && flop_value2 == flop_value3
            || flop_value1 == river_value && flop_value2 == turn_value
            || flop_value1 == river_value && flop_value3 == turn_value
            || flop_value2 == flop_value3 && turn_value == river_value
            || flop_value2 == turn_value && flop_value3 == river_value
            || flop_value2 == river_value && flop_value3 == turn_value
        ) {
            alert("you have two pairs");
        }

        // Trips
        if ((value1 == value2 && value1 == flop_value1)
            || (value1 == value2 && value1 == flop_value2)
            || (value1 == value2 && value1 == flop_value3)
            || (value1 == value2 && value1 == turn_value)
            || (value1 == value2 && value1 == river_value)
            || (value1 == flop_value1 && value1 == flop_value2)
            || (value1 == flop_value1 && value1 == flop_value3)
            || (value1 == flop_value1 && value1 == turn_value)
            || (value1 == flop_value1 && value1 == river_value)
            || (value1 == flop_value2 && value1 == flop_value3)
            || (value1 == flop_value2 && value1 == turn_value)
            || (value1 == flop_value2 && value1 == river_value)
            || (value1 == flop_value3 && value1 == turn_value)
            || (value1 == flop_value3 && value1 == river_value)
            || (value1 == turn_value && value1 == river_value)
            || (value2 == flop_value1 && value2 == flop_value2)
            || (value2 == flop_value1 && value2 == flop_value3)
            || (value2 == flop_value1 && value2 == turn_value)
            || (value2 == flop_value1 && value2 == river_value)
            || (value2 == flop_value2 && value2 == flop_value3)
            || (value2 == flop_value2 && value2 == turn_value)
            || (value2 == flop_value2 && value1 == river_value)
            || (value2 == flop_value3 && value1 == turn_value)
            || (value2 == flop_value3 && value2 == river_value)
            || (value2 == turn_value && value2 == river_value)
            || (flop_value1 == flop_value2 && flop_value1 == flop_value3)
            || (flop_value1 == flop_value2 && flop_value1 == turn_value)
            || (flop_value1 == flop_value2 && flop_value1 == river_value)
            || (flop_value1 == flop_value3 && flop_value1 == turn_value)
            || (flop_value1 == flop_value3 && flop_value1 == river_value)
            || (flop_value1 == turn_value && flop_value1 == river_value)
            || (flop_value2 == flop_value3 && flop_value2 == turn_value)
            || (flop_value2 == flop_value3 && flop_value2 == river_value)
            || (flop_value2 == turn_value && flop_value2 == river_value)
            || (flop_value3 == turn_value && flop_value3 == river_value)) {
            alert("you have trips");
        }
    }
}




// ==========================================================================================================//
// split pane functions
// ==========================================================================================================//
(function($) {

    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };

    $.fn.splitPane = function() {
        var $splitPanes = this;
        $splitPanes.each(setMinHeightAndMinWidth);
        $splitPanes.append('<div class="split-pane-resize-shim">');
        var eventType = ('ontouchstart' in document) ? 'touchstart' : 'mousedown';
        $splitPanes.children('.split-pane-divider').html('<div class="split-pane-divider-inner"></div>');
        $splitPanes.children('.split-pane-divider').bind(eventType, mousedownHandler);
        setTimeout(function() {
            // Doing this later because of an issue with Chrome (v23.0.1271.64) returning split-pane width = 0
            // and triggering multiple resize events when page is being opened from an <a target="_blank"> .
            $splitPanes.each(function() {
                $(this).bind('_splitpaneparentresize', createParentresizeHandler($(this)));
            });
            $(window).trigger('resize');
        }, 100);
    };

    var SPLITPANERESIZE_HANDLER = '_splitpaneparentresizeHandler';

    /**
     * A special event that will "capture" a resize event from the parent split-pane or window.
     * The event will NOT propagate to grandchildren.
     */
    jQuery.event.special._splitpaneparentresize = {
        setup: function(data, namespaces) {
            var element = this,
                parent = $(this).parent().closest('.split-pane')[0] || window;
            $(this).data(SPLITPANERESIZE_HANDLER, function(event) {
                var target = event.target === document ? window : event.target;
                if (target === parent) {
                    event.type = "_splitpaneparentresize";
                    jQuery.event.dispatch.apply(element, arguments);
                } else {
                    event.stopPropagation();
                }
            });
            $(parent).bind('resize', $(this).data(SPLITPANERESIZE_HANDLER));
        },
        teardown: function(namespaces) {
            var parent = $(this).parent().closest('.split-pane')[0] || window;
            $(parent).unbind('resize', $(this).data(SPLITPANERESIZE_HANDLER));
            $(this).removeData(SPLITPANERESIZE_HANDLER);
        }
    };

    function setMinHeightAndMinWidth() {
        var $splitPane = $(this),
            $firstComponent = $splitPane.children('.split-pane-component:first'),
            $divider = $splitPane.children('.split-pane-divider'),
            $lastComponent = $splitPane.children('.split-pane-component:last');
        if ($splitPane.is('.fixed-top, .fixed-bottom, .horizontal-percent')) {
            $splitPane.css('min-height', (minHeight($firstComponent) + minHeight($lastComponent) + $divider.height()) + 'px');
        } else {
            $splitPane.css('min-width', (minWidth($firstComponent) + minWidth($lastComponent) + $divider.width()) + 'px');
        }
    }

    function mousedownHandler(event) {
        event.preventDefault();
        var isTouchEvent = event.type.match(/^touch/),
            moveEvent = isTouchEvent ? 'touchmove' : 'mousemove',
            endEvent = isTouchEvent ? 'touchend' : 'mouseup',
            $divider = $(this),
            $splitPane = $divider.parent(),
            $resizeShim = $divider.siblings('.split-pane-resize-shim');
        $resizeShim.show();
        $divider.addClass('dragged');
        if (isTouchEvent) {
            $divider.addClass('touch');
        }
        var moveEventHandler = createMousemove($splitPane, pageXof(event), pageYof(event));
        $(document).on(moveEvent, moveEventHandler);
        $(document).one(endEvent, function(event) {
            $(document).unbind(moveEvent, moveEventHandler);
            $divider.removeClass('dragged touch');
            $resizeShim.hide();
        });
    }

    function createParentresizeHandler($splitPane) {
        var splitPane = $splitPane[0],
            firstComponent = $splitPane.children('.split-pane-component:first')[0],
            divider = $splitPane.children('.split-pane-divider')[0],
            lastComponent = $splitPane.children('.split-pane-component:last')[0];
        if ($splitPane.is('.fixed-top')) {
            var lastComponentMinHeight = minHeight(lastComponent);
            return function(event) {
                var maxfirstComponentHeight = splitPane.offsetHeight - lastComponentMinHeight - divider.offsetHeight;
                if (firstComponent.offsetHeight > maxfirstComponentHeight) {
                    setTop(firstComponent, divider, lastComponent, maxfirstComponentHeight + 'px');
                }
                $splitPane.resize();
            };
        } else if ($splitPane.is('.fixed-bottom')) {
            var firstComponentMinHeight = minHeight(firstComponent);
            return function(event) {
                var maxLastComponentHeight = splitPane.offsetHeight - firstComponentMinHeight - divider.offsetHeight;
                if (lastComponent.offsetHeight > maxLastComponentHeight) {
                    setBottom(firstComponent, divider, lastComponent, maxLastComponentHeight + 'px')
                }
                $splitPane.resize();
            };
        } else if ($splitPane.is('.horizontal-percent')) {
            var lastComponentMinHeight = minHeight(lastComponent),
                firstComponentMinHeight = minHeight(firstComponent);
            return function(event) {
                var maxLastComponentHeight = splitPane.offsetHeight - firstComponentMinHeight - divider.offsetHeight;
                if (lastComponent.offsetHeight > maxLastComponentHeight) {
                    setBottom(firstComponent, divider, lastComponent, (maxLastComponentHeight / splitPane.offsetHeight * 100) + '%');
                } else {
                    if (splitPane.offsetHeight - firstComponent.offsetHeight - divider.offsetHeight < lastComponentMinHeight) {
                        setBottom(firstComponent, divider, lastComponent, (lastComponentMinHeight / splitPane.offsetHeight * 100) + '%');
                    }
                }
                $splitPane.resize();
            };
        } else if ($splitPane.is('.fixed-left')) {
            var lastComponentMinWidth = minWidth(lastComponent);
            return function(event) {
                var maxFirstComponentWidth = splitPane.offsetWidth - lastComponentMinWidth - divider.offsetWidth;
                if (firstComponent.offsetWidth > maxFirstComponentWidth) {
                    setLeft(firstComponent, divider, lastComponent, maxFirstComponentWidth + 'px');
                }
                $splitPane.resize();
            };
        } else if ($splitPane.is('.fixed-right')) {
            var firstComponentMinWidth = minWidth(firstComponent);
            return function(event) {
                var maxLastComponentWidth = splitPane.offsetWidth - firstComponentMinWidth - divider.offsetWidth;
                if (lastComponent.offsetWidth > maxLastComponentWidth) {
                    setRight(firstComponent, divider, lastComponent, maxLastComponentWidth + 'px');
                }
                $splitPane.resize();
            };
        } else if ($splitPane.is('.vertical-percent')) {
            var lastComponentMinWidth = minWidth(lastComponent),
                firstComponentMinWidth = minWidth(firstComponent);
            return function(event) {
                var maxLastComponentWidth = splitPane.offsetWidth - firstComponentMinWidth - divider.offsetWidth;
                if (lastComponent.offsetWidth > maxLastComponentWidth) {
                    setRight(firstComponent, divider, lastComponent, (maxLastComponentWidth / splitPane.offsetWidth * 100) + '%');
                } else {
                    if (splitPane.offsetWidth - firstComponent.offsetWidth - divider.offsetWidth < lastComponentMinWidth) {
                        setRight(firstComponent, divider, lastComponent, (lastComponentMinWidth / splitPane.offsetWidth * 100) + '%');
                    }
                }
                $splitPane.resize();
            };
        }
    }

    function createMousemove($splitPane, pageX, pageY) {
        var splitPane = $splitPane[0],
            firstComponent = $splitPane.children('.split-pane-component:first')[0],
            divider = $splitPane.children('.split-pane-divider')[0],
            lastComponent = $splitPane.children('.split-pane-component:last')[0];
        if ($splitPane.is('.fixed-top')) {
            var firstComponentMinHeight = minHeight(firstComponent),
                maxFirstComponentHeight = splitPane.offsetHeight - minHeight(lastComponent) - divider.offsetHeight,
                topOffset = divider.offsetTop - pageY;
            return function(event) {
                event.preventDefault();
                var top = Math.min(Math.max(firstComponentMinHeight, topOffset + pageYof(event)), maxFirstComponentHeight);
                setTop(firstComponent, divider, lastComponent, top + 'px');
                $splitPane.resize();
            };
        } else if ($splitPane.is('.fixed-bottom')) {
            var lastComponentMinHeight = minHeight(lastComponent),
                maxLastComponentHeight = splitPane.offsetHeight - minHeight(firstComponent) - divider.offsetHeight,
                bottomOffset = lastComponent.offsetHeight + pageY;
            return function(event) {
                event.preventDefault();
                var bottom = Math.min(Math.max(lastComponentMinHeight, bottomOffset - pageYof(event)), maxLastComponentHeight);
                setBottom(firstComponent, divider, lastComponent, bottom + 'px');
                $splitPane.resize();
            };
        } else if ($splitPane.is('.horizontal-percent')) {
            var splitPaneHeight = splitPane.offsetHeight,
                lastComponentMinHeight = minHeight(lastComponent),
                maxLastComponentHeight = splitPaneHeight - minHeight(firstComponent) - divider.offsetHeight,
                bottomOffset = lastComponent.offsetHeight + pageY;
            return function(event) {
                event.preventDefault();
                var bottom = Math.min(Math.max(lastComponentMinHeight, bottomOffset - pageYof(event)), maxLastComponentHeight);
                setBottom(firstComponent, divider, lastComponent, (bottom / splitPaneHeight * 100) + '%');
                $splitPane.resize();
            };
        } else if ($splitPane.is('.fixed-left')) {
            var firstComponentMinWidth = minWidth(firstComponent),
                maxFirstComponentWidth = splitPane.offsetWidth - minWidth(lastComponent) - divider.offsetWidth,
                leftOffset = divider.offsetLeft - pageX;
            return function(event) {
                event.preventDefault();
                var left = Math.min(Math.max(firstComponentMinWidth, leftOffset + pageXof(event)), maxFirstComponentWidth);
                setLeft(firstComponent, divider, lastComponent, left + 'px')
                $splitPane.resize();
            };
        } else if ($splitPane.is('.fixed-right')) {
            var lastComponentMinWidth = minWidth(lastComponent),
                maxLastComponentWidth = splitPane.offsetWidth - minWidth(firstComponent) - divider.offsetWidth,
                rightOffset = lastComponent.offsetWidth + pageX;
            return function(event) {
                event.preventDefault();
                var right = Math.min(Math.max(lastComponentMinWidth, rightOffset - pageXof(event)), maxLastComponentWidth);
                setRight(firstComponent, divider, lastComponent, right + 'px');
                $splitPane.resize();
            };
        } else if ($splitPane.is('.vertical-percent')) {
            var splitPaneWidth = splitPane.offsetWidth,
                lastComponentMinWidth = minWidth(lastComponent),
                maxLastComponentWidth = splitPaneWidth - minWidth(firstComponent) - divider.offsetWidth,
                rightOffset = lastComponent.offsetWidth + pageX;
            return function(event) {
                event.preventDefault();
                var right = Math.min(Math.max(lastComponentMinWidth, rightOffset - pageXof(event)), maxLastComponentWidth);
                setRight(firstComponent, divider, lastComponent, (right / splitPaneWidth * 100) + '%');
                $splitPane.resize();
            };
        }
    }

    function pageXof(event) {
        return event.pageX || event.originalEvent.pageX;
    }

    function pageYof(event) {
        return event.pageY || event.originalEvent.pageY;
    }

    function minHeight(element) {
        return parseInt($(element).css('min-height')) || 0;
    }

    function minWidth(element) {
        return parseInt($(element).css('min-width')) || 0;
    }

    function setTop(firstComponent, divider, lastComponent, top) {
        firstComponent.style.height = top;
        divider.style.top = top;
        lastComponent.style.top = top;
    }

    function setBottom(firstComponent, divider, lastComponent, bottom) {
        firstComponent.style.bottom = bottom;
        divider.style.bottom = bottom;
        lastComponent.style.height = bottom;
    }

    function setLeft(firstComponent, divider, lastComponent, left) {
        firstComponent.style.width = left;
        divider.style.left = left;
        lastComponent.style.left = left;
    }

    function setRight(firstComponent, divider, lastComponent, right) {
        firstComponent.style.right = right;
        divider.style.right = right;
        lastComponent.style.width = right;
    }

})(jQuery);

// end of plugin js

$(function() {
    $('div.split-pane').splitPane();

    $('.calculation_section').clickToggle(function() {

        $('#left-component').css('width', '0px');
        $('#right-component').css('left', '0px');
        $('#vertical-divider').css('left', '0px');

        $('#top-component-2').css('bottom', '0px');
        $('#bottom-component-2').css('height', '0px');
        $('#horizontal-divider-2').css('bottom', '0px');
    }, function () {
        var winWidth = $('.split-pane').width();
        var winHeight = $('.split-pane').height();

        $('#left-component').css('width', winWidth / 2 + 'px');
        $('#right-component').css('left', winWidth / 2  + 'px');
        $('#vertical-divider').css('left', winWidth / 2 + 'px');

        $('#top-component-1').css('bottom', winHeight / 2 + 'px');
        $('#bottom-component-1').css('height', winHeight / 2 + 'px');
        $('#horizontal-divider-1').css('bottom', winHeight / 2 + 'px');

        $('#top-component-2').css('bottom', winHeight / 2 + 'px');
        $('#bottom-component-2').css('height', winHeight / 2 + 'px');
        $('#horizontal-divider-2').css('bottom', winHeight / 2 + 'px');
    });

    $('.cards_section').clickToggle(function() {

        var winWidth = $('.split-pane').width();
        var winHeight = $('.split-pane').height();

        $('#left-component').css('width', '0px');
        $('#right-component').css('left', '0px');
        $('#vertical-divider').css('left', '0px');

        $('#top-component-2').css('bottom', winHeight - 5 + 'px');
        $('#bottom-component-2').css('height', winHeight - 5 + 'px');
        $('#horizontal-divider-2').css('bottom', winHeight - 5 + 'px');
    }, function () {
        var winWidth = $('.split-pane').width();
        var winHeight = $('.split-pane').height();

        $('#left-component').css('width', winWidth / 2 + 'px');
        $('#right-component').css('left', winWidth / 2  + 'px');
        $('#vertical-divider').css('left', winWidth / 2 + 'px');

        $('#top-component-1').css('bottom', winHeight / 2 + 'px');
        $('#bottom-component-1').css('height', winHeight / 2 + 'px');
        $('#horizontal-divider-1').css('bottom', winHeight / 2 + 'px');

        $('#top-component-2').css('bottom', winHeight / 2 + 'px');
        $('#bottom-component-2').css('height', winHeight / 2 + 'px');
        $('#horizontal-divider-2').css('bottom', winHeight / 2 + 'px');
    });

    $('.input_section').clickToggle(function() {

        var winWidth = $('.split-pane').width();
        var winHeight = $('.split-pane').height();

        $('#left-component').css('width', winWidth - 5 + 'px');
        $('#right-component').css('left', winWidth - 5 + 'px');
        $('#vertical-divider').css('left', winWidth - 5 + 'px');

        $('#top-component-1').css('bottom', '0px');
        $('#bottom-component-1').css('height', '0px');
        $('#horizontal-divider-1').css('bottom', '0px');
    }, function () {
        var winWidth = $('.split-pane').width();
        var winHeight = $('.split-pane').height();

        $('#left-component').css('width', winWidth / 2 + 'px');
        $('#right-component').css('left', winWidth / 2  + 'px');
        $('#vertical-divider').css('left', winWidth / 2 + 'px');

        $('#top-component-1').css('bottom', winHeight / 2 + 'px');
        $('#bottom-component-1').css('height', winHeight / 2 + 'px');
        $('#horizontal-divider-1').css('bottom', winHeight / 2 + 'px');

        $('#top-component-2').css('bottom', winHeight / 2 + 'px');
        $('#bottom-component-2').css('height', winHeight / 2 + 'px');
        $('#horizontal-divider-2').css('bottom', winHeight / 2 + 'px');
    });

    $('.outs_section').clickToggle(function() {

        var winWidth = $('.split-pane').width();
        var winHeight = $('.split-pane').height();

        $('#left-component').css('width', winWidth - 5 + 'px');
        $('#right-component').css('left', winWidth - 5 + 'px');
        $('#vertical-divider').css('left', winWidth - 5 + 'px');

        $('#top-component-1').css('bottom', winHeight - 5 + 'px');
        $('#bottom-component-1').css('height', winHeight - 5 + 'px');
        $('#horizontal-divider-1').css('bottom', winHeight - 5 + 'px');
    }, function () {
        var winWidth = $('.split-pane').width();
        var winHeight = $('.split-pane').height();

        $('#left-component').css('width', winWidth / 2 + 'px');
        $('#right-component').css('left', winWidth / 2  + 'px');
        $('#vertical-divider').css('left', winWidth / 2 + 'px');

        $('#top-component-1').css('bottom', winHeight / 2 + 'px');
        $('#bottom-component-1').css('height', winHeight / 2 + 'px');
        $('#horizontal-divider-1').css('bottom', winHeight / 2 + 'px');

        $('#top-component-2').css('bottom', winHeight / 2 + 'px');
        $('#bottom-component-2').css('height', winHeight / 2 + 'px');
        $('#horizontal-divider-2').css('bottom', winHeight / 2 + 'px');
    });

    $('.reset').click(function() {

        var winWidth = $('.split-pane').width();
        var winHeight = $('.split-pane').height();

        $('#left-component').css('width', winWidth / 2 + 'px');
        $('#right-component').css('left', winWidth / 2  + 'px');
        $('#vertical-divider').css('left', winWidth / 2 + 'px');

        $('#top-component-1').css('bottom', winHeight / 2 + 'px');
        $('#bottom-component-1').css('height', winHeight / 2 + 'px');
        $('#horizontal-divider-1').css('bottom', winHeight / 2 + 'px');

        $('#top-component-2').css('bottom', winHeight / 2 + 'px');
        $('#bottom-component-2').css('height', winHeight / 2 + 'px');
        $('#horizontal-divider-2').css('bottom', winHeight / 2 + 'px');
    });

});