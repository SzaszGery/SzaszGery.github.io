const MonthMaxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//const DayNameHun = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];
var actDateMarked="";
var globalUserDate="";
var globalUserYear="";
var globalUserMonth="";
var globalUserDay="";
var globalUserDayMarked = "";
var globalActYear = new Date().getFullYear();
var globalActMonth =new Date().getMonth();
var globalActDay = new Date().getDate();
var globalActDayNumer= new Date().getDay();
var globalUserSuccesDateSelection = false;
var globalCalendarWidgetYear = new Date().getFullYear();
var globalCalendarWidgetMonth = new Date().getMonth();
var globalCalendarWidgetDay = new Date().getDate();
var globalClicledCalendaItemID ="";

function setShowYear(){
    document.querySelector("span.showYear").innerHTML = globalActYear;
}
// A naptár widget alatti Aktuális dátum és idő kártya feltöltése adatokkal
function setToday(){
    actYear = new Date().getFullYear();
    actMonth = new Date().getMonth();
    actDay = new Date().getDate();
    actMonth = parseInt(actMonth)+1;
    document.querySelector("span.showYearActDate").innerHTML=actYear;
    document.querySelector("span.showMonthActDate").innerHTML=actMonth;
    document.querySelector("span.showDayActDate").innerHTML=actDay;
    
}

function setActTime(){
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    document.querySelector("span.showActHour").innerHTML=hours;
    document.querySelector("span.showActMinute").innerHTML=minutes;
    document.querySelector("span.showActSecond").innerHTML=seconds;
}

function getTimeEverySecond(){
    setInterval(setActTime,1000);
}

function setMonthNameEn() {
    let showMonthName = document.querySelector("span.showMonth");
    switch (globalCalendarWidgetMonth) {
        case 0:
            showMonthName.innerHTML = "January";
            break;
        case 1:
            showMonthName.innerHTML = "February";
            break;
        case 2:
            showMonthName.innerHTML = "March";
            break;
        case 3:
            showMonthName.innerHTML = "April";
            break;
        case 4:
            showMonthName.innerHTML = "May";
            break;
        case 5:
            showMonthName.innerHTML = "June";
            break;
        case 6:
            showMonthName.innerHTML = "July";
            break;
        case 7:
            showMonthName.innerHTML = "August";
            break;
        case 8:
            showMonthName.innerHTML = "September";
            break;
        case 9:
            showMonthName.innerHTML = "October";
            break;
        case 10:
            showMonthName.innerHTML = "November";
            break;
        case 11:
            showMonthName.innerHTML = "December";
    }
}

function setMonthNameHun() {
    let showMonthName = document.querySelector("span.showMonth");
    switch (globalCalendarWidgetMonth) {
        case 0:
            showMonthName.innerHTML = "Január";
            break;
        case 1:
            showMonthName.innerHTML = "Február";
            break;
        case 2:
            showMonthName.innerHTML = "Március";
            break;
        case 3:
            showMonthName.innerHTML = "Április";
            break;
        case 4:
            showMonthName.innerHTML = "Május";
            break;
        case 5:
            showMonthName.innerHTML = "Június";
            break;
        case 6:
            showMonthName.innerHTML = "Július";
            break;
        case 7:
            showMonthName.innerHTML = "Augusztus";
            break;
        case 8:
            showMonthName.innerHTML = "Szeptember";
            break;
        case 9:
            showMonthName.innerHTML = "Október";
            break;
        case 10:
            showMonthName.innerHTML = "November";
            break;
        case 11:
            showMonthName.innerHTML = "December";
    }
}

function setMonthEn() {
    let showMonth = document.querySelector("span.showMonth")
    showMonth.innerHTML = Date().slice(4, 7);
}

function writeActDayNameEn(){
    let showDayName = document.querySelector("span.showActDayName");
    switch (globalActDayNumer) {
        case 0:
            showDayName.innerHTML = "Sunday";
            break;
        case 1:
            showDayName.innerHTML = "Monday";
            break;
        case 2:
            showDayName.innerHTML = "Tuesday";
            break;
        case 3:
            showDayName.innerHTML = "Wednesday";
            break;
        case 4:
            showDayName.innerHTML = "Thursday";
            break;
            case 5:
                showDayName.innerHTML = "Friday";
                break;
                case 6:
                    showDayName.innerHTML = "Saturday";
                }
}

function writeActDayNameHun(){
    let showDayName = document.querySelector("span.showActDayName");
    switch (globalActDayNumer) {
        case 0:
            showDayName.innerHTML = "Vasárnap";
            break;
            case 1:
                showDayName.innerHTML = "Hétfő";
                break;
                case 2:
                    showDayName.innerHTML = "Kedd";
                    break;
                    case 3:
                        showDayName.innerHTML = "Szerda";
                        break;
                        case 4:
                            showDayName.innerHTML = "Csütörtök";
                            break;
                            case 5:
                                showDayName.innerHTML = "Péntek";
                                break;
                                case 6:
            showDayName.innerHTML = "Szombat";
        }
}

function actDateCardHider(){
    document.getElementById("dateCardReappear").className="img-btn reappear rounded-2";   
    document.getElementById("dateCardHider").className="vanished";
    document.getElementById("dateCardHead").className="bg-info rounded-start";
    document.getElementById("dateCardTHead").className="bg-info rounded-start";
    document.getElementById("dateCardThHider").className="bg-info rounded-end";
    document.getElementById("dateCardBody").className="vanished";
}

function actDateCardReappear(){
    document.getElementById("dateCardBody").className="";
    document.getElementById("dateCardHider").className="img-btn reappear rounded-2";
    document.getElementById("dateCardReappear").className="vanished";
    document.getElementById("dateCardHead").className="bg-info rounded-top";
    document.getElementById("dateCardThHider").className="bg-info rounded-top-right";
}

function getFirstWeekDayNumberOfMonthEn(actYear, actMonth) {
    if (actYear == null) { actYear = new Date().getFullYear() }
    if (actMonth == null) { actMonth = new Date().getMonth() }
    let DayNumber = new Date(String(actYear)+"." + String(actMonth+1) + "." + "01").getDay();
    return DayNumber;
}

function getFirstWeekDayNumberOfMonthHun(actYear, actMonth) {
    if (actYear == null) { actYear = new Date().getFullYear() }
    if (actMonth == null) { actMonth = new Date().getMonth() }
    let DayNumber = new Date(String(actYear)+"." + String(actMonth+1) + "." + "01").getDay();
    console.log(new Date(String(actYear)+"." + String(actMonth+1) + "." + "01"))
    DayNumber = DayNumber == 0 ? 6 : DayNumber-1;
    return DayNumber;
}

function markActDayInCalendar(calendarTdID){
    actDateMarked=calendarTdID;
    document.getElementById(calendarTdID).className ="calendar-active";
}

function isItLeapYear(actYear) {
    let leapYear = Boolean(actYear % 400) == false ? true : false;
    if (leapYear != true) {leapYear= Boolean(actYear % 4) == false && Boolean(actYear % 100) == true ? true : false}
    return leapYear;
}

function markUserSelectedDayInCalendar(calendarTdID){
    globalUserDayMarked=calendarTdID;
    document.getElementById(calendarTdID).className ="calendar-active-by-user";
}

function setUserSelectedDayOnClick(){
    if (globalUserSuccesDateSelection==true) {
        document.getElementById(globalUserDayMarked).className="calendar-body"
        if (globalUserDayMarked==actDateMarked){document.getElementById(globalUserDayMarked).className="calendar-active"}
    }
    let clickedDay=this.innerHTML;
    console.log(clickedDay);
    if (clickedDay != null || ""){
        globalUserDay=clickedDay;
        globalUserMonth=globalCalendarWidgetMonth+1;
        globalUserYear=globalCalendarWidgetYear;
        globalUserSuccesDateSelection=true
        markUserSelectedDayInCalendar(this.id);
    } 
}

function getMonthMaxDays() {
    let actMonth = globalCalendarWidgetMonth;
    let MaxDayCounter = isItLeapYear(globalCalendarWidgetYear) == true && actMonth == 1 ? 29 : MonthMaxDays[actMonth];
    return MaxDayCounter;
}

function previousMonth() {
    actYear = parseInt(globalCalendarWidgetYear);
    actMonth = parseInt(globalCalendarWidgetMonth);
    if (actMonth == 0) {
        actMonth = 11;
        actYear = actYear - 1;
        globalCalendarWidgetYear=actYear;
        document.querySelector("span.showYear").innerHTML = actYear;
    }
    else {
        actMonth = actMonth - 1;
    }
    globalCalendarWidgetMonth = actMonth;
    //A calendarWidgetben történő lapozáskor levesszük a formázást az utoljára beszínezett napról
    if (actDateMarked !="" || null) {document.getElementById(actDateMarked).className="calendar-body"}
    if (globalUserDayMarked !="" || null) {document.getElementById(globalUserDayMarked).className="calendar-body"}
    setMonthNameHun();
    writeCalendarDays(fillCalendarDays(getFirstWeekDayNumberOfMonthHun(actYear, actMonth), getMonthMaxDays()))
}


function nextMonth() {
    actYear = parseInt(globalCalendarWidgetYear);
    actMonth = parseInt(globalCalendarWidgetMonth);
    if (actMonth == 11) {
        actMonth = 0
        actYear = actYear + 1;
        globalCalendarWidgetYear=actYear;
        document.querySelector("span.showYear").innerHTML = actYear;
    }
    else {
        actMonth = actMonth + 1;
    }
    globalCalendarWidgetMonth = actMonth;
    if (actDateMarked !="" || null) {document.getElementById(actDateMarked).className="calendar-body"}
    if (globalUserDayMarked !="" || null) {document.getElementById(globalUserDayMarked).className="calendar-body"}
    setMonthNameHun();
    writeCalendarDays(fillCalendarDays(getFirstWeekDayNumberOfMonthHun(actYear, actMonth), getMonthMaxDays()))
}

function nextMonthEn(actYear,actMonth) {
    actYear = parseInt(globalCalendarWidgetYear);
    actMonth = parseInt(globalCalendarWidgetMonth);
    if (actMonth == 11) {
        actMonth = 0
        actYear = actYear + 1;
        globalCalendarWidgetYear = actYear;
        document.querySelector("span.showYear").innerHTML = actYear;
    }
    else {
        globalCalendarWidgetMonth = actMonth + 1;
    }
    globalActMonth = actMonth;
    if (actDateMarked !="" || null) {document.getElementById(actDateMarked).className="calendar-body"}
    if (globalUserDayMarked !="" || null) {document.getElementById(globalUserDayMarked).className="calendar-body"}
    setMonthNameHun();
    writeCalendarDays(fillCalendarDays(getFirstWeekDayNumberOfMonthEn(actYear, actMonth), getMonthMaxDays(actMonth, MonthMaxDays)))
}


function getUserSelectedDate(){
    globalUserDate=document.querySelector("input#USDI").value
    if (globalUserDate == "" || null){alert("Hoppácska! Pont nem adott meg dátumot! Így sajnos nem tudom a kérést végrehajtani!")}
    else {
        globalUserYear=globalUserDate.slice(0,4);
        globalUserMonth=globalUserDate.slice(5,7);
        globalUserDay=globalUserDate.slice(8,10);
        globalUserSuccesDateSelection= true;
    }
}

function jumpToUserDate(){
    if (globalUserSuccesDateSelection==true) {document.getElementById(globalUserDayMarked).className="calendar-body"}
    getUserSelectedDate();
    document.querySelector("span.showYear").innerHTML=globalUserYear;
    globalCalendarWidgetYear=globalUserYear;
    globalCalendarWidgetMonth=parseInt(globalUserMonth)-1;
    if (globalCalendarWidgetYear != globalActYear || globalCalendarWidgetMonth != globalActMonth){document.getElementById(actDateMarked).className="calendar-body"};
    setMonthNameHun()
    writeCalendarDays(fillCalendarDays(getFirstWeekDayNumberOfMonthHun(globalCalendarWidgetYear,globalCalendarWidgetMonth),getMonthMaxDays()));
}




function fillCalendarDays(StartDay, MaxDayCounter) {
    let calendarDays = new Array(6).fill(null).map(() => new Array(7).fill(null));
    let DayNumber = 1;
    let WeekCounter = 0
    //Az első hét feltöltése Startdaytől a hét végéig.
    for (let DayCounter = StartDay; DayCounter <= 6; DayCounter++) {
        calendarDays[WeekCounter][DayCounter] = DayNumber;
        DayNumber = DayNumber + 1;
    }
    //A többi hét feltöltése Max napjáig a hónapnak.
    for (let WeekCounter = 1; WeekCounter <= 5; WeekCounter++) {
        for (let DayCounter = 0; DayCounter <= 6; DayCounter++) {
            calendarDays[WeekCounter][DayCounter] = DayNumber;
            DayNumber++;
            if (DayNumber > MaxDayCounter) {
                break;
            }
        }
        if (DayNumber > MaxDayCounter) {
            break;
        }
    }
    return calendarDays;
}

//function massModify(selector, attribute, value) {
//    let nodelist = document.querySelectorAll(selector);
//    for (let i =0; i< nodelist.length; i++)
//        {nodelist[i][attribute] = value;}
//}

//Definiáljuk a naptár elemek OnClick eseményét
function addClickEventToCalendarday(){
    let calendarBodyTd= document.querySelectorAll(".calendar-body")
    for (i = 0; i < calendarBodyTd.length; i++) {
            calendarBodyTd[i].addEventListener("click",setUserSelectedDayOnClick);
        }
}


//Már anaptár felület feltöltésekor színezzük az Atuális napot, de csak akkor, ha az Év és a hónap is az aktuális dátumon van.
function writeCalendarDays(calendarDays) {
    let actYear = globalActYear;
    let actMonth =globalActMonth;
    let actDay= globalActDay;
    let userSelectedYear = globalUserYear;
    let userSelectedMonth = parseInt(globalUserMonth)-1;
    let userSelectedDay= globalUserDay;
    let calendarYear = globalCalendarWidgetYear;
    let calendarMonth = globalCalendarWidgetMonth;
    let tdID="";
    for (x = 0; x <= 5; x++) {
        for (y = 0; y <= 6; y++) {
            tdID=String(x) + String(y) + String(y);
            document.getElementById(tdID).innerHTML = calendarDays[x][y];
            if (calendarDays[x][y] == actDay && actYear ==  calendarYear && actMonth == calendarMonth) 
            {markActDayInCalendar(tdID);}
            if (globalUserSuccesDateSelection == true && calendarDays[x][y] == userSelectedDay && userSelectedYear ==  calendarYear && userSelectedMonth == calendarMonth){
                markUserSelectedDayInCalendar(tdID);
                }
        }
    }
}