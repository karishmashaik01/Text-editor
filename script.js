document.getElementById("bold-btn").addEventListener("click",function(){
    document.execCommand("bold");
});
document.getElementById("italic-btn").addEventListener("click",function(){
    document.execCommand("italic");
});
document.getElementById("underline-btn").addEventListener("click", function(){
    document.execCommand("underline");
});
document.getElementById("number-btn").addEventListener("click", function(){
    document.execCommand("insertOrderedList");
});
document.getElementById("bullet-btn").addEventListener("click", function(){
    document.execCommand("insertUnorderedList");
});
document.getElementById("left-align-btn").addEventListener("click", function(){
    document.execCommand("justifyLeft");
});
document.getElementById("right-align-btn").addEventListener("click", function(){
    document.execCommand("justifyRight");
});
document.getElementById("center-align-btn").addEventListener("click", function(){
    document.execCommand("justifyCenter");
});
document.getElementById("font-size-select").addEventListener("change", function(){
    const fontSize = this.value;
    const editor = document.getElementById("editor");
    editor.style.fontSize = `${fontSize * 2}px`;

});
document.getElementById("font-family-select").addEventListener("change", function(){
    const fontFamily = this.value;
    document.execCommand("fontName", false,fontFamily);
});
document.getElementById("font-color").addEventListener("input", function(){
    const color = this.value;
    document.execCommand("foreColor", false,color);
});