// Checkbox Click Function
$('#katakana').click(function() {
    for (let i = 2; i <= 13; i++) {
        $('#katakana' + i).prop('checked', $(this).prop('checked'));
    }
});

$('#hiragana').click(function() {
    for (let i = 2; i <= 13; i++) {
        $('#hiragana' + i).prop('checked', $(this).prop('checked'));
    }
});

let randomNumber = null;

$("#next").click(function(){
    let errorNotice = $("#hiragana").prop("checked");
    let errorNotice2 = $("#katakana").prop("checked");

    if (errorNotice === false && errorNotice2 === false) {
        alert("Must Choose Either Hiragana or Katakana");
        $("#img").attr("src", "./img/blank.jpg");
        $("#next").text("Start");
        return;
    }
    // Inserting Question & Error Notice
    randomNumber = Math.floor(Math.random() * listQuiz.length);
    $("#img").attr("src", "./img/quizImg/" + listQuiz[randomNumber] + ".jpg");
    $("#next").text("Next");
    $("#answer").val("");
    $("#text").text("Keep Learning!!! You Can Do It 🔥🔥");
});

$(".checkbox").click(function () {
    let checkedCount = $(".checkbox:checked").length;

    if (checkedCount === 0) {
        alert("At least one checkbox must be selected!");
        $(this).prop("checked", true);
    }
});

for (let i = 2; i <= 13; i++) {
        $('#katakana' + i).change(function(){
            $("#katakana").prop('checked', true);
            let checkedKatakanaCount = 0;
            for (let j = 2; j <= 13; j++) {
                if ($('#katakana' + j).prop('checked')) {
                    checkedKatakanaCount++;
                }
            }
            if (checkedKatakanaCount > 0) {
                $("#katakana").prop('checked', true);
            } else {
                $("#katakana").prop('checked', false);
        }
        })

    };

for (let i = 2; i <= 13; i++) {
        $('#hiragana' + i).change(function(){
            $("#hiragana").prop('checked', true);
            let checkedHiraganaCount = 0;
            for (let j = 2; j <= 13; j++) {
                if ($('#hiragana' + j).prop('checked')) {
                    checkedHiraganaCount++;
                }
            }
            if (checkedHiraganaCount > 0) {
                $("#hiragana").prop('checked', true);
            } else {
                $("#hiragana").prop('checked', false);
        }
        })

    };

// Filtering Words Using Checkbox
let listQuiz = [];

const hiragana = {
    2: ["ga-h", "gi-h", "gu-h", "ge-h", "go-h", "za-h", "ji-h", "zu-h", "ze-h", "zo-h", "da-h", "di-h", "du-h", "de-h", "do-h", "ba-h", "bi-h", "bu-h", "be-h", "bo-h", "pa-h", "pi-h", "pu-h", "pe-h", "po-h"],
    3: ["kya-h", "kyu-h", "kyo-h", "sha-h", "shu-h", "sho-h", "cha-h", "chu-h", "cho-h", "nya-h", "nyu-h", "nyo-h", "hya-h", "hyu-h", "hyo-h", "mya-h", "myu-h", "myo-h", "rya-h", "ryu-h", "ryo-h", "gya-h", "gyu-h", "gyo-h", "ja-h", "ju-h", "jo-h", "dya-h", "dyu-h", "dyo-h", "bya-h", "byu-h", "byo-h", "pya-h", "pyu-h", "pyo-h"],
    4: ["a-h", "i-h", "u-h", "e-h", "o-h"],
    5: ["ka-h", "ki-h", "ku-h", "ke-h", "ko-h"],
    6: ["sa-h", "shi-h", "su-h", "se-h", "so-h"],
    7: ["ta-h", "chi-h", "tsu-h", "te-h", "to-h"],
    8: ["na-h", "ni-h", "nu-h", "ne-h", "no-h", "n-h"],
    9: ["ha-h", "hi-h", "hu-h", "he-h", "ho-h"],
    10: ["ma-h", "mi-h", "mu-h", "me-h", "mo-h"],
    11: ["ya-h", "yu-h", "yo-h"],
    12: ["ra-h", "ri-h", "ru-h", "re-h", "ro-h"],
    13: ["wa-h", "wo-h"]
};

const katakana = {
    2: ["ga-k", "gi-k", "gu-k", "ge-k", "go-k", "za-k", "ji-k", "zu-k", "ze-k", "zo-k", "da-k", "di-k", "du-k", "de-k", "do-k", "ba-k", "bi-k", "bu-k", "be-k", "bo-k", "pa-k", "pi-k", "pu-k", "pe-k", "po-k"],
    3: ["kya-k", "kyu-k", "kyo-k", "sha-k", "shu-k", "sho-k", "cha-k", "chu-k", "cho-k", "nya-k", "nyu-k", "nyo-k", "hya-k", "hyu-k", "hyo-k", "mya-k", "myu-k", "myo-k", "rya-k", "ryu-k", "ryo-k", "gya-k", "gyu-k", "gyo-k", "ja-k", "ju-k", "jo-k", "dya-k", "dyu-k", "dyo-k", "bya-k", "byu-k", "byo-k", "pya-k", "pyu-k", "pyo-k"],
    4: ["a-k", "i-k", "u-k", "e-k", "o-k"],
    5: ["ka-k", "ki-k", "ku-k", "ke-k", "ko-k"],
    6: ["sa-k", "shi-k", "su-k", "se-k", "so-k"],
    7: ["ta-k", "chi-k", "tsu-k", "te-k", "to-k"],
    8: ["ha-k", "hi-k", "hu-k", "he-k", "ho-k"],
    9: ["ha-k", "hi-k", "hu-k", "he-k", "ho-k"],
    10: ["ma-k", "mi-k", "mu-k", "me-k", "mo-k"],
    11: ["ya-k", "yu-k", "yo-k"],
    12: ["ra-k", "ri-k", "ru-k", "re-k", "ro-k"],
    13: ["wa-k", "wo-k"]
};

for (let i = 2; i <= 13; i++) {
    $('#hiragana' + i).change(function() {
        if ($('#hiragana' + i).prop('checked')) {
            listQuiz = listQuiz.concat(hiragana[i]);
        } else {
            listQuiz = listQuiz.filter(item => !hiragana[i].includes(item));
        }
    })
    $('#katakana' + i).change(function() {
        if ($('#katakana' + i).prop('checked')) {
            listQuiz = listQuiz.concat(katakana[i]);
        } else {
            listQuiz = listQuiz.filter(item => !katakana[i].includes(item));
        }
    })
}

// Checking Answer
$("#validate").click(function() {
    if (randomNumber === null || listQuiz.length === 0) {
        alert("Please click 'Start' first!");
        return;
    }

    let answer = $("#answer").val().toLowerCase();
    let correctAnswer = listQuiz[randomNumber].slice(0, -2);
    if (answer === correctAnswer) {
        $("#text").text("Correct! Well done!");
        $("#answer").addClass("border-2 border-green-500");
    } else {
        $("#text").html("Incorrect! The correct answer is: <span class=\"text-red-800 font-bold\">" + correctAnswer + "</span>");
        $("#answer").addClass("border-2 border-red-500");
    }
});
