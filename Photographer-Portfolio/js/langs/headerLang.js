let getLocalLang = localStorage.getItem('language') || "ar";
let language = getLocalLang;
const changeElemntsLangForHeader = document.querySelectorAll("#navbar-section ul li a")
const languageBtn = document.getElementById("languageSelect");

// بيانات عنوان الصفحة قابله للتغير
// رجاء عدد متواجد في عنوان يكون نفس يلي موجود في بيانات لن ينشئ هاذا سكربت هو فقط للتعديل
const headerData = {
    ar: ["الرئيسيه",
        "عني",
        "المعرض",
        "الخدمات",
        "تواصل معنا"
    ],

    en: ['Home page',
        'About me',
        'Exhibtion',
        'services',
        'contect'
    ],
};

// اللغة التي يتم اختيارها من القائمة
// لا يوجد ضرورة للتعديل على هذا السكربت لما لم يكن لديك خبرة كافية
if(languageBtn){
    languageBtn.addEventListener('change',(el)=>{
        let langSelected = el.target.value;
        localStorage.setItem('language',langSelected);
        if(localStorage.getItem('language') !== "en"){
            document.body.style.textAlign='right'
        }else{
            document.body.style.textAlign="left"
        }
        insertDataIntoHeader(langSelected);
    });
};
languageBtn.value = getLocalLang;

// تغيير البيانات باللغة المختارة في عنوان الصفحة
// لا يوجد ضرورة للتعديل على هذا السكربت لما لم يكن لديك خبرة كافية
function insertDataIntoHeader(lang){
    changeElemntsLangForHeader.forEach((e,i)=>{
        e.textContent="";
        e.insertAdjacentText('beforeend',headerData[lang][i])
    });
};

insertDataIntoHeader(language);