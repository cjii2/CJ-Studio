const OpensideBar = document.getElementById("openSideBar");
const closeSideBar = document.getElementById("closeSideBar");

OpensideBar.addEventListener('click',()=>{
    document.getElementById("navbar-section").classList.add("active");
    OpensideBar.classList.add("hide")
});

closeSideBar.addEventListener('click',()=>{
    document.getElementById("navbar-section").classList.remove("active");
    OpensideBar.classList.remove("hide")
})