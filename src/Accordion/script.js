let acc = document.getElementsByClassName("section-button");
for(var i=0;i<acc.length;i++) {
    acc[i].addEventListener("click",function(){
        this.classList.toggle("bg-slate-200");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else{
             panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}