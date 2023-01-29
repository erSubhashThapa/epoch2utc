document.addEventListener("mouseup", function(){
var selectedText = window.getSelection().toString();
if(selectedText.length == 10 && !isNaN(selectedText)){
var epochTime = selectedText;
var localTime = new Date(epochTime * 1000);
var utcTime = new Date(localTime.toUTCString());
var timezone = localTime.toString().match(/([A−Za−z\s].*)/);
if (timezone && timezone[1]) {
timezone = timezone[1];
} else {
timezone = "UTC";
}
var localTimeStr = localTime.toLocaleString();
var utcTimeStr = utcTime.toISOString().slice(0, -5) + " UTC";
var displayTime = utcTimeStr + " | " + localTimeStr + " Local";
var range = window.getSelection().getRangeAt(0);
var newNode = document.createElement("span");
newNode.style.backgroundColor = "yellow";
newNode.innerHTML = displayTime;
range.deleteContents();
range.insertNode(newNode);
var selected = window.getSelection();
var range = document.createRange();
range.selectNodeContents(newNode);
selected.removeAllRanges();
selected.addRange(range);
document.execCommand("copy");
}
});




