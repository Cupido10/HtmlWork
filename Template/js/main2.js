var newTopic, newDate, confirmButton, topicH1, topicDate , countDownTimer ,end , bgselect;

var secondUnit = 1000;
var minuteUnit = secondUnit*60;
var hourUnit = minuteUnit*60;
var dayUnit = hourUnit*24;


var timer;

//等到主程式全部跑完，得到全部元素值後再onlaod，才能得到裡面的值
window.onload = function() {
    newTopic = document.getElementById("newTopic");
    //alert(newTopic.value);
    newDate = document.getElementById("newDate");
    confirmButton = document.getElementById("confirmButton");
    topicH1 = document.getElementById("topicH1");
    topicDate = document.getElementById("topicDate");
    bgselect = document.getElementById("bgselect");
    
    countDownTimer= document.getElementById("countDownTimer");
   
    
    confirmButton.addEventListener("click",updateTopicAndTime);
    bgselect.addEventListener("change",updateBackgroundImage);
    
};

function updateBackgroundImage(){
    //變更背景圖片(對應目前使用者所選的選項)
    
    //alert(bgselect.value); 寫看看有無得到值
    
    //url('BirthdayParty.jpg')
    //url(' + 變數 + .jpg)
    //"url('" + 變數 + ".jpg'")"
    document.body.style.backgroundImage=
        "url('images/" + bgselect.value + ".png')"
    
}

function updateTopicAndTime() {
    //把使用者輸入的主題設定到上面的標題
    topicH1.innerHTML = newTopic.value;
    topicDate.innerHTML=newDate.value;
    
    
    end= new Date(newDate.value); //newDate.value是字串
    end.setHours(0);//小時歸零
    
        
    timer=setInterval(showRemaining,1000);
    
}

function showRemaining(){
    
    var now = new Date();
    var timeDifference = end-now; //未來時間-現在時間
    
    //開始計算天時分秒

    var days = Math.floor(timeDifference/dayUnit);
    var hours = Math.floor((timeDifference %dayUnit)/hourUnit);
    var minutes = Math.floor((timeDifference %hourUnit)/minuteUnit);
    var seconds = Math.floor((timeDifference %minuteUnit)/secondUnit);
    
    
    
    countDownTimer.innerHTML="還剩下"+days+"天"+hours+"小時"+minutes+"分"+seconds+"秒";
    
    
    
    
    
}