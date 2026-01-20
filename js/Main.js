const OpensideBar = document.getElementById("openSideBar");
const closeSideBar = document.getElementById("closeSideBar");
function videoChange(){
    const vd = document.getElementById('video');
    const WindowWidth = window.innerWidth
    
    if(WindowWidth < 700){
        vd.src = "video/videoWebFilming.mp4"
    }else{
        vd.src = "video/potoPro.mp4"
    }
}

OpensideBar.addEventListener('click',()=>{
    document.getElementById("navbar-section").classList.add("active");
    OpensideBar.classList.add("hide")
});

closeSideBar.addEventListener('click',()=>{
    document.getElementById("navbar-section").classList.remove("active");
    OpensideBar.classList.remove("hide")
})

window.addEventListener('resize',videoChange);