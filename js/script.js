window.onload = function () {
    function clock() {
        var date = new Date(),
            day = date.getDate(),
            dayArr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            weekDay = date.getDay(),
            month = date.getMonth(),
            monthArr = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            year = date.getFullYear(),
            hour = date.getHours(),
            min = date.getUTCMinutes(),
            sec = date.getSeconds();
        if (day < 10) day = "0" + day;
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;
        if (sec < 10) sec = "0" + sec;

        document.getElementById("date").innerHTML = day + "" + monthArr[month] + "" + year;
        document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
        document.getElementById("weekday").innerHTML = dayArr[weekDay];
    }

    var timer;

    function clockStart() {
        timer = setInterval(clock, 1000);
        clock();
    }

    clockStart();
}

$(document).ready(function () {
    var btnUp = $('.up');
    btnUp.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            btnUp.fadeIn();
        }
        else {
            btnUp.fadeOut();
        }
    });
    btnUp.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    })
})

$(document).ready(function () {

    var ua = detect.parse(navigator.userAgent);
    $("html").addClass(ua.browser.family);

    $('select').map(function () {
        $('select').selectric();
    });

    $('.enterNum').bind("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

    $('#rangeSum').ionRangeSlider ({
        grid: true,
        min: 50,
        max: 50000,
        from: 500,
        step: 100,
        grid_num: 16,
        grid_margin: false,
        postfix: "$",
        onStart: function (data) {
            $('#radio').val(data.from);
        },
        onChange: function (data) {
            $('#radio').val(data.from);
        }
    });

    var sumRange = $('#rangeSum').data('ionRangeSlider'),
        min = 50,
        max = 50000;

    $('#radio').on('change keyup', function () {
        var val = $(this).prop('value');
        if(val<min) {
            val = min;
        } else if (val>max) {
            val = max;
        }
        sumRange.update({
            from: val
        });
    })
})

$("#menuPart").tabs({
    active: 0
});

$('select').selectric();