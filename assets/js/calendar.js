let firstDay = (new Date(year, month)).getDay();
console.log(firstDay);
function showCalendar(month, year) {
    console.log(month);
}

// check how many days in a month
function daysInMonth (iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

let date = 1;
// creates a table row
for (let i=0; i < 6; i++) {
    let row = document.createElement('tr');
    
    // create individual cells, filling them up w/ data
    for (let j=0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
            cell = document.createElement("td");
            cellText = document.createTextNode("");
            cell.appendChild(CellText);
            row.appendChild(cell);
        }
    }
}