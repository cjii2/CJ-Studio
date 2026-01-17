let getLocalLang = localStorage.getItem('language') || "ar";
let language = getLocalLang;
const changeElemntsLang = document.querySelectorAll("#home-section .Home-Change-lang")
const languageBtn = document.getElementById("languageSelect");
// بيانات عنوان الصفحة قابله للتغير
// رجاء عدد متواجد في عنوان يكون نفس يلي موجود في بيانات لن ينشئ هاذا سكربت هو فقط للتعديل
const headerData = {
    ar: ["مصور", 
        "احمد",
        "نلتقط اللحظات الثمينة ونحولها إلى ذكريات خالدة",
        "شاهد اعمالي",
    ],

    en: [
        "Professional Photographer",
        "Ahmed",
        "Capturing moments that last forever",
        "Explore My Portfolio"
    ]

};

// اللغة التي يتم اختيارها من القائمة
// لا يوجد ضرورة للتعديل على هذا السكربت لما لم يكن لديك خبرة كافية
if(languageBtn){
    languageBtn.addEventListener('change',(el)=>{
        let langSelected = el.target.value;
        localStorage.setItem('language',langSelected);

        ChangeLangForHome(langSelected);
    });
};
languageBtn.value = getLocalLang;

// لا يوجد ضرورة للتعديل على هذا السكربت لما لم يكن لديك خبرة كافية
function ChangeLangForHome(lang){
    changeElemntsLang.forEach((e,i)=>{
        e.textContent="";
        e.insertAdjacentText('beforeend',headerData[lang][i])
    });
};

ChangeLangForHome(language);