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

    var btnUp = $('.up');
    btnUp.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
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