function updateDate(date) {
    let d = new Date(date);
    let n = new Date();
    
    let months = monthDiff(d, n) + " MONTHS";
    let weeks = weekDiff(d, n) + " WEEKS";
    let days = dayDiff(d, n) + " DAYS";
    
    writeCookie(date);

    document.getElementById("content").innerText = months + "\n" + weeks + "\n" + days;
}

function monthDiff(start, end) {
    let months = (end.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth() + 1;
    months += end.getMonth();
    return Math.max(months, 0);
}

function weekDiff(start, end) {
    return Math.round(dayDiff(start, end) / 7);
}

function dayDiff(start, end) {
    let span = Math.max(end - start, 0);
    let seconds = span / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    return Math.round(days);
}

function writeCookie(date) {
    let expires = new Date();
    expires.setTime(expires.getTime() + 6 * 30 * 24 * 60 * 60 * 1000); // Add 6ish months
    document.cookie = `date=${date};expires=${expires.toUTCString()};path=/;`;
}

function loadCookie() {
    let search = "date=";
    let x = decodeURIComponent(document.cookie);
    let cookies = x.split(';');

    if (!x.includes(";")) {
        cookies = [x]
    }

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i]
        if (cookie.includes(search) && cookie.length > search.length) {
            let date = cookie.substring(search.length);
            updateDate(date);
        }
    }
}