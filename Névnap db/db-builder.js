const pageURL = "answer.html";

function saveLoadedPage(pageURL,pageName){
    var a = document.createElement("a");
    a.href =pageURL;
    a.download = pageName+".html";
    a.hidden = true;
    document.body.appendChild(a);
    a.innerHTML = "Save html";
    a.click();

}

function save() {
    var htmlContent = ["your-content-here"];
    var bl = new Blob(htmlContent, {type: "text/html"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(bl);
    a.download = "your-download-name-here.html";
    a.hidden = true;
    document.body.appendChild(a);
    a.innerHTML = "Save html";
    a.click();
  }

  function lookUpNameDay(monthNum,dayNum) {
    let nameDayMonthNum = document.getElementById("nnp-ho");
    let nameDayDayNum = document.getElementById("nnp-np");
    nameDayMonthNum.value = monthNum;
    nameDayDayNum.value = dayNum;
    btnSubmitForm = document.getElementById("submit-form");
    btnSubmitForm.click();
}
  function answerSaver(){
    let monthNum="01";
    let dayNum="01";
    let pageName= monthNum+"-"+dayNum;
    lookUpNameDay(monthNum,dayNum);
    setTimeout(function(){
        saveLoadedPage(pageURL,pageName);
       }, 3000);

  }