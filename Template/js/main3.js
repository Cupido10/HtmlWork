//Task1. 每5秒就換背景圖片

var count,currentImageNumber,timeLabel,timeString;


//有一個地方儲存對應5真不同的圖片的時間文字的屬性
//屬性包含有: 文字的位置、大小、顏色、傾斜度


//建立一個物件模板，物件裡面有4項屬性

function labelStyle(locationX, locationY,fontSize,color,rotateAngle){
    this.locationX=locationX;
    this.locationY=locationY;
    this.fontSize=fontSize;
    this.color=color;
    this.rotateAngle=rotateAngle;
    
    
}



//把一個一個物件依據對應背景圖片的屬性建立起來
var labelStyle0 = new labelStyle("600px","590px","80px","gray",10);
var labelStyle1 = new labelStyle("550px","550px","100px","red",13);
var labelStyle2 = new labelStyle("370px","620px","160px","brown",358);
var labelStyle3 = new labelStyle("400px","500px","180px","green",2);
var labelStyle4 = new labelStyle("550px","750px","100px","deeppink",0);

//把這些物件放進陣列中

var labelStyleArray=[labelStyle0,labelStyle1,labelStyle2,labelStyle3,labelStyle4];



window.onload = function() {

    timeLabel=document.getElementById("timeLabel");
    
    
    setInterval(changeBGImage,5000);
    setInterval(updateTimeLabel,1000);
    count=0;
};


function addZero(timeString){
    timeString="0"+timeString;
    return timeString.slice(-2); //取後面兩位數
}


function updateTimeLabel(){
    var now = new Date();
    timeLabel.innerHTML=
        addZero(now.getHours())+ ":" +
        addZero(now.getMinutes())+ ":" +
        addZero(now.getSeconds());
    //01,02,03,04......09,010,011,......059
    //只抓取這個字串的從後面數來兩位數
    
    
}


function changeBGImage(){
    
    currentImageNumber=count%5;
    count++;
    document.body.style.backgroundImage="url('images/Board"+ currentImageNumber+ ".png')";
    timeLabel.style.visibility="visible";
    
    
    //設定timeLabel
    timeLabel.style.top=labelStyleArray[currentImageNumber].locationY;
    timeLabel.style.left=labelStyleArray[currentImageNumber].locationX;
    timeLabel.style.fontSize=labelStyleArray[currentImageNumber].fontSize;
    timeLabel.style.color=labelStyleArray[currentImageNumber].color;
    timeLabel.style.transform="rotate("+labelStyleArray[currentImageNumber].rotateAngle+"deg)";
}