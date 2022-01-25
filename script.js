function updateDate(date) {
    let d = new Date(date);
    let n = new Date();
    
    let months = monthDiff(d, n) + " MONTHS";
    let weeks = weekDiff(d, n) + " WEEKS";
    let days = dayDiff(d, n) + " DAYS";
    
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