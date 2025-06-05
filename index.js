let listQuiz = [];

// Dropdown Function
$("#hiraganaDropdownBtn").click(function(){
    $("#hiraganaDropdownContent").toggle('hidden');
    $("#arrowHiragana").toggleClass("rotate-180");
    $("#underline1").toggleClass("border-b-2");
})

$("#katakanaDropdownBtn").click(function(){
    $("#katakanaDropdownContent").toggle('hidden');
    $("#arrowKatakana").toggleClass("rotate-180");
    $("#underline2").toggleClass("border-b-2");
})

// Checkbox Click Function
$('#katakana').click(function() {
    for (let i = 2; i <= 13; i++) {
        $('#katakana' + i).prop('checked', $(this).prop('checked'));
    }
});

$('#katakanaA').click(function() {
    for (let i = 14; i <= 25; i++) {
        $('#katakana' + i).prop('checked', $(this).prop('checked'));
    }
});

$('#hiragana').click(function() {
    for (let i = 2; i <= 13; i++) {
        $('#hiragana' + i).prop('checked', $(this).prop('checked'));
    }
});

$('#hiraganaA').click(function() {
    for (let i = 14; i <= 25; i++) {
        $('#hiragana' + i).prop('checked', $(this).prop('checked'));
    }
});

let randomNumber = null;

$("#next").click(function(){
    // Error Handling
    let errorNotice = $("#hiragana").prop("checked");
    let errorNotice2 = $("#katakana").prop("checked");
    let errorNotice3 = $("#hiraganaA").prop("checked");
    let errorNotice4 = $("#katakanaA").prop("checked");

    if (!(errorNotice || errorNotice2 || errorNotice3 || errorNotice4)) {
        alert("Must Choose Either Hiragana or Katakana!!\nOn Smartphone you can scroll down and open the Filters");
        return;
    } else if (
        (errorNotice && errorNotice3 === true) ||
        (errorNotice2 && errorNotice3 === true) ||
        (errorNotice && errorNotice4 === true) ||
        (errorNotice2 && errorNotice4 === true)
    ) {
        alert("Please Only Check Either With Dropdown Button Filter in Small View Or With Filter in Large View");
        return;
    } else if (listQuiz.length === 0) {
        alert("Please Try to Reselect Filters and Try Again");
        return;
    }

    // Disable Checkboxes
    $("#katakana").prop("disabled", true);
    $("#katakanaA").prop("disabled", true);
    $("#hiragana").prop("disabled", true);
    $("#hiraganaA").prop("disabled", true);
    for (let i = 2; i <= 25; i++) {
        $('#hiragana' + i).prop('disabled', true);
        $('#katakana' + i).prop('disabled', true);
    }

    // Disable Next Button
    $("#next").prop("disabled", true);
    $("#next").removeClass("ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100 bg-white").addClass("bg-gray-200");

    // Generate Question
    randomNumber = Math.floor(Math.random() * listQuiz.length);
    $("#img").attr("src", "./Img/quizImg/" + listQuiz[randomNumber] + ".jpg").css({ opacity: 0 }).animate({ opacity: 1 }, 800);

    // Generate Multiple Choice
    let correctAnswer = listQuiz[randomNumber].slice(0, -2);

    let usedAnswers = new Set();
    usedAnswers.add(correctAnswer);

    let choices = [correctAnswer];

    let attempts = 0;
    while (choices.length < 4 && attempts < 100) {
        let randItem = listQuiz[Math.floor(Math.random() * listQuiz.length)];
        let option = randItem.slice(0, -2);
        if (!usedAnswers.has(option)) {
            usedAnswers.add(option);
            choices.push(option);
        }
        attempts++;
    }

    while (choices.length < 4) {
        choices.push("");
    }

    choices = choices.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 4; i++) {
        $("#choice" + (i + 1)).text(choices[i]);
        if ($("#choice" + (i + 1)).text() === "") {
            $("#choice" + (i + 1)).addClass("hidden");
        } else {
            $("#choice" + (i + 1)).removeClass("hidden");
        }
    }

    // After Answer
    for (let i = 1; i <= 4; i++) {
        $("#choice" + i).removeClass("border-green-500 border-red-500");
        $("#choice" + i).addClass("border-black");
        $("#choice" + i).prop("disabled", false);
        $("#choice" + i).addClass("border-black ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100").removeClass("bg-gray-200");
    }
    $("#text").text("Keep Learning!!! You Can Do It 🔥🔥");
    $("#allowMultipleChoice").prop("disabled", false);
    $("#allowMultipleChoice").addClass("ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100 bg-white").removeClass("bg-gray-200");
    $("#next").text("Next");
    $("#answer").val("");
    $("#answer").removeClass("border-green-500 border-red-500");
    $("#validate").prop("disabled", false);
    $("#validate").addClass("ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100 bg-white").removeClass("bg-gray-200");
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
            for (let j = 2; j <= 25; j++) {
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

for (let i = 14; i <= 25; i++) {
        $('#katakana' + i).change(function(){
            $("#katakanaA").prop('checked', true);
            let checkedKatakanaCount = 0;
            for (let j = 2; j <= 25; j++) {
                if ($('#katakana' + j).prop('checked')) {
                    checkedKatakanaCount++;
                }
            }
            if (checkedKatakanaCount > 0) {
                $("#katakanaA").prop('checked', true);
            } else {
                $("#katakanaA").prop('checked', false);
        }
        })

    };

for (let i = 2; i <= 13; i++) {
        $('#hiragana' + i).change(function(){
            $("#hiragana").prop('checked', true);
            let checkedHiraganaCount = 0;
            for (let j = 2; j <= 25; j++) {
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

for (let i = 14; i <= 25; i++) {
        $('#hiragana' + i).change(function(){
            $("#hiraganaA").prop('checked', true);
            let checkedHiraganaCount = 0;
            for (let j = 2; j <= 25; j++) {
                if ($('#hiragana' + j).prop('checked')) {
                    checkedHiraganaCount++;
                }
            }
            if (checkedHiraganaCount > 0) {
                $("#hiraganaA").prop('checked', true);
            } else {
                $("#hiraganaA").prop('checked', false);
        }
        })

    };

// Filtering Words Using Checkbox

const hiragana = {
    2: ["ga-h", "gi-h", "gu-h", "ge-h", "go-h", "za-h", "ji-h", "zu-h", "ze-h", "zo-h", "da-h", "di-h", "du-h", "de-h", "do-h", "ba-h", "bi-h", "bu-h", "be-h", "bo-h", "pa-h", "pi-h", "pu-h", "pe-h", "po-h"],
    3: ["kya-h", "kyu-h", "kyo-h", "sha-h", "shu-h", "sho-h", "cha-h", "chu-h", "cho-h", "nya-h", "nyu-h", "nyo-h", "hya-h", "hyu-h", "hyo-h", "mya-h", "myu-h", "myo-h", "rya-h", "ryu-h", "ryo-h", "gya-h", "gyu-h", "gyo-h", "ja-h", "ju-h", "jo-h", "dya-h", "dyu-h", "dyo-h", "bya-h", "byu-h", "byo-h", "pya-h", "pyu-h", "pyo-h"],
    4: ["a-h", "i-h", "u-h", "e-h", "o-h"],
    5: ["ka-h", "ki-h", "ku-h", "ke-h", "ko-h"],
    6: ["sa-h", "shi-h", "su-h", "se-h", "so-h"],
    7: ["ta-h", "chi-h", "tsu-h", "te-h", "to-h"],
    8: ["na-h", "ni-h", "nu-h", "ne-h", "no-h", "n-h"],
    9: ["ha-h", "hi-h", "fu-h", "he-h", "ho-h"],
    10: ["ma-h", "mi-h", "mu-h", "me-h", "mo-h"],
    11: ["ya-h", "yu-h", "yo-h"],
    12: ["ra-h", "ri-h", "ru-h", "re-h", "ro-h"],
    13: ["wa-h", "wo-h"],
    14: ["ga-h", "gi-h", "gu-h", "ge-h", "go-h", "za-h", "ji-h", "zu-h", "ze-h", "zo-h", "da-h", "di-h", "du-h", "de-h", "do-h", "ba-h", "bi-h", "bu-h", "be-h", "bo-h", "pa-h", "pi-h", "pu-h", "pe-h", "po-h"],
    15: ["kya-h", "kyu-h", "kyo-h", "sha-h", "shu-h", "sho-h", "cha-h", "chu-h", "cho-h", "nya-h", "nyu-h", "nyo-h", "hya-h", "hyu-h", "hyo-h", "mya-h", "myu-h", "myo-h", "rya-h", "ryu-h", "ryo-h", "gya-h", "gyu-h", "gyo-h", "ja-h", "ju-h", "jo-h", "dya-h", "dyu-h", "dyo-h", "bya-h", "byu-h", "byo-h", "pya-h", "pyu-h", "pyo-h"],
    16: ["a-h", "i-h", "u-h", "e-h", "o-h"],
    17: ["ka-h", "ki-h", "ku-h", "ke-h", "ko-h"],
    18: ["sa-h", "shi-h", "su-h", "se-h", "so-h"],
    19: ["ta-h", "chi-h", "tsu-h", "te-h", "to-h"],
    20: ["na-h", "ni-h", "nu-h", "ne-h", "no-h", "n-h"],
    21: ["ha-h", "hi-h", "fu-h", "he-h", "ho-h"],
    22: ["ma-h", "mi-h", "mu-h", "me-h", "mo-h"],
    23: ["ya-h", "yu-h", "yo-h"],
    24: ["ra-h", "ri-h", "ru-h", "re-h", "ro-h"],
    25: ["wa-h", "wo-h"]
};

const katakana = {
    2: ["ga-k", "gi-k", "gu-k", "ge-k", "go-k", "za-k", "ji-k", "zu-k", "ze-k", "zo-k", "da-k", "di-k", "du-k", "de-k", "do-k", "ba-k", "bi-k", "bu-k", "be-k", "bo-k", "pa-k", "pi-k", "pu-k", "pe-k", "po-k"],
    3: ["kya-k", "kyu-k", "kyo-k", "sha-k", "shu-k", "sho-k", "cha-k", "chu-k", "cho-k", "nya-k", "nyu-k", "nyo-k", "hya-k", "hyu-k", "hyo-k", "mya-k", "myu-k", "myo-k", "rya-k", "ryu-k", "ryo-k", "gya-k", "gyu-k", "gyo-k", "ja-k", "ju-k", "jo-k", "dya-k", "dyu-k", "dyo-k", "bya-k", "byu-k", "byo-k", "pya-k", "pyu-k", "pyo-k"],
    4: ["a-k", "i-k", "u-k", "e-k", "o-k", "vu-k"],
    5: ["ka-k", "ki-k", "ku-k", "ke-k", "ko-k"],
    6: ["sa-k", "shi-k", "su-k", "se-k", "so-k"],
    7: ["ta-k", "chi-k", "tsu-k", "te-k", "to-k"],
    8: ["na-k", "ni-k", "nu-k", "ne-k", "no-k", "n-k"],
    9: ["ha-k", "hi-k", "fu-k", "he-k", "ho-k"],
    10: ["ma-k", "mi-k", "mu-k", "me-k", "mo-k"],
    11: ["ya-k", "yu-k", "yo-k"],
    12: ["ra-k", "ri-k", "ru-k", "re-k", "ro-k"],
    13: ["wa-k", "wo-k"],
    14: ["ga-k", "gi-k", "gu-k", "ge-k", "go-k", "za-k", "ji-k", "zu-k", "ze-k", "zo-k", "da-k", "di-k", "du-k", "de-k", "do-k", "ba-k", "bi-k", "bu-k", "be-k", "bo-k", "pa-k", "pi-k", "pu-k", "pe-k", "po-k"],
    15: ["kya-k", "kyu-k", "kyo-k", "sha-k", "shu-k", "sho-k", "cha-k", "chu-k", "cho-k", "nya-k", "nyu-k", "nyo-k", "hya-k", "hyu-k", "hyo-k", "mya-k", "myu-k", "myo-k", "rya-k", "ryu-k", "ryo-k", "gya-k", "gyu-k", "gyo-k", "ja-k", "ju-k", "jo-k", "dya-k", "dyu-k", "dyo-k", "bya-k", "byu-k", "byo-k", "pya-k", "pyu-k", "pyo-k"],
    16: ["a-k", "i-k", "u-k", "e-k", "o-k", "vu-k"],
    17: ["ka-k", "ki-k", "ku-k", "ke-k", "ko-k"],
    18: ["sa-k", "shi-k", "su-k", "se-k", "so-k"],
    19: ["ta-k", "chi-k", "tsu-k", "te-k", "to-k"],
    20: ["na-k", "ni-k", "nu-k", "ne-k", "no-k", "n-k"],
    21: ["ha-k", "hi-k", "fu-k", "he-k", "ho-k"],
    22: ["ma-k", "mi-k", "mu-k", "me-k", "mo-k"],
    23: ["ya-k", "yu-k", "yo-k"],
    24: ["ra-k", "ri-k", "ru-k", "re-k", "ro-k"],
    25: ["wa-k", "wo-k"]
};

for (let i = 2; i <= 25; i++) {
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

$('#hiragana').click(function() {
    let allHiragana = [];
    for (let i = 2; i <= 13; i++) {
        if (hiragana[i]) {
            allHiragana = allHiragana.concat(hiragana[i]);
        }
    }
    if ($('#hiragana').prop('checked')) {
        listQuiz = listQuiz.concat(allHiragana);
    } else {
        listQuiz = listQuiz.filter(item => !allHiragana.includes(item));
    }
});

$('#katakana').click(function() {
    let allKatakana = [];
    for (let i = 2; i <= 13; i++) {
        if (katakana[i]) {
            allKatakana = allKatakana.concat(katakana[i]);
        }
    }
    if ($('#katakana').prop('checked')) {
        listQuiz = listQuiz.concat(allKatakana);
    } else {
        listQuiz = listQuiz.filter(item => !allKatakana.includes(item));
    }
});

$('#hiraganaA').click(function() {
    let allHiragana = [];
    for (let i = 14; i <= 25; i++) {
        if (hiragana[i]) {
            allHiragana = allHiragana.concat(hiragana[i]);
        }
    }
    if ($('#hiraganaA').prop('checked')) {
        listQuiz = listQuiz.concat(allHiragana);
    } else {
        listQuiz = listQuiz.filter(item => !allHiragana.includes(item));
    }
});

$('#katakanaA').click(function() {
    let allKatakana = [];
    for (let i = 14; i <= 25; i++) {
        if (katakana[i]) {
            allKatakana = allKatakana.concat(katakana[i]);
        }
    }
    if ($('#katakanaA').prop('checked')) {
        listQuiz = listQuiz.concat(allKatakana);
    } else {
        listQuiz = listQuiz.filter(item => !allKatakana.includes(item));
    }
});

// Starting Counter
let correctCounter = 0;
let wrongCounter = 0;

// Checking Answer with Textbox
$("#validate").click(function() {
    if (randomNumber === null || listQuiz.length === 0) {
        alert("Please click 'Start' first!");
        return;
    }
    let answer = $("#answer").val().toLowerCase();
    let correctAnswer = listQuiz[randomNumber].slice(0, -2);

    if (answer === correctAnswer) {
        correctCounter++;
        $("#counterText").text(correctCounter).fadeOut(700).fadeIn(700);
        $("#text").text("Correct! Well done!");
        $("#answer").addClass("border-2 border-green-500 ");
        $("#validate").prop("disabled", true);
        $("#validate").removeClass("ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100 bg-white").addClass("bg-gray-200");
        $("#next").prop("disabled", false);
        $("#next").addClass("ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100 bg-white").removeClass("bg-gray-200");
        $("#allowMultipleChoice").prop("disabled", true);
        $("#allowMultipleChoice").removeClass("ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100 bg-white").addClass("bg-gray-200");
    } else if (answer === "") {
        $("#text").text("Please enter an answer!").fadeOut(100).fadeIn(100);
    } else {
        wrongCounter++;
        $("#counterText2").text(wrongCounter).fadeOut(700).fadeIn(700);
        $("#text").html("Incorrect! The correct answer is: <span class=\"text-red-800 font-bold\">" + correctAnswer + "</span>");
        $("#answer").addClass("border-2 border-red-500");
        $("#validate").prop("disabled", true);
        $("#validate").removeClass("ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100 bg-white").addClass("bg-gray-200");
        $("#next").prop("disabled", false);
        $("#next").addClass("ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100 bg-white").removeClass("bg-gray-200");
        $("#allowMultipleChoice").prop("disabled", true);
        $("#allowMultipleChoice").removeClass("ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100 bg-white").addClass("bg-gray-200");
    }
    // Enable Checkboxes
    $("#katakana").prop("disabled", false);
    $("#hiragana").prop("disabled", false);
    $("#katakanaA").prop("disabled", false);
    $("#hiraganaA").prop("disabled", false);
    for (let i = 2; i <= 25; i++) {
        $('#katakana' + i).prop('disabled', false);
        $('#hiragana' + i).prop('disabled', false);
    }
});

// Toggling Multiple Choice and Textbox
$("#allowMultipleChoice").click(function() {
    $("#answerDiv").toggle();
    $("#choices").toggle();
    $("#validate").toggle();
    if ($("#allowMultipleChoice").text() === "Click Me to Use Textbox") {
        $("#allowMultipleChoice").text("Click Me to Use Multiple Choice");
    } else {
        $("#allowMultipleChoice").text("Click Me to Use Textbox");
    }
});

// Checking Answer with Multiple Choice
$("#choice1, #choice2, #choice3, #choice4").click(function() {
    let selectedAnswer = $(this).text();
    let correctAnswer = listQuiz[randomNumber].slice(0, -2);
    $(this).addClass("bg-gray-200").removeClass("bg-white border-black ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100");

    if (selectedAnswer === correctAnswer) {
        correctCounter++;
        $("#counterText").text(correctCounter).fadeOut(700).fadeIn(700);
        $("#allowMultipleChoice").prop("disabled", true);
        $("#allowMultipleChoice").removeClass("ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100 bg-white").addClass("bg-gray-200");
        $("#text").html("Correct! Well done!");
        $("#validate").prop("disabled", true);
        $("#validate").removeClass("ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100 bg-white").addClass("bg-gray-200");
        $("#next").prop("disabled", false);
        $("#next").addClass("ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100 bg-white").removeClass("bg-gray-200");
    } else {
        wrongCounter++;
        $("#counterText2").text(wrongCounter).fadeOut(700).fadeIn(700);
        $("#allowMultipleChoice").prop("disabled", true);
        $("#allowMultipleChoice").removeClass("ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100 bg-white").addClass("bg-gray-200");
        $("#text").html("Incorrect! The correct answer is: <span class=\"text-red-800 font-bold\">" + correctAnswer + "</span>");
        $("#validate").prop("disabled", true);
        $("#validate").removeClass("ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100 bg-white").addClass("bg-gray-200");
        $("#next").prop("disabled", false);
        $("#next").addClass("ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100 bg-white").removeClass("bg-gray-200");
    }

    for (let i = 1; i < 5; i++) {
        $("#choice" + i).prop("disabled", true);
        $("#choice" + i).removeClass("border-black ease-in-out hover:scale-105 transition duration-300 hover:bg-gray-100");
        if ($("#choice" + i).text() === correctAnswer) {
            $("#choice" + i).addClass("border-green-500");
        } else {
            $("#choice" + i).addClass("border-red-500");
        }
    }

    // Enable Checkboxes
    $("#katakana").prop("disabled", false);
    $("#hiragana").prop("disabled", false);
    $("#katakanaA").prop("disabled", false);
    $("#hiraganaA").prop("disabled", false);
    for (let i = 2; i <= 25; i++) {
        $('#katakana' + i).prop('disabled', false);
        $('#hiragana' + i).prop('disabled', false);
    }
});
