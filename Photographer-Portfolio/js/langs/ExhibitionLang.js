let getLocalLang = localStorage.getItem('language') || "ar";
let language = getLocalLang;
const changeElemntsLang = document.querySelectorAll("#Exhibition-section .Exhibition-change-lang")
const languageBtn = document.getElementById("languageSelect");
// بيانات عنوان الصفحة قابله للتغير
// رجاء عدد متواجد في عنوان يكون نفس يلي موجود في بيانات لن ينشئ هاذا سكربت هو فقط للتعديل
const headerData = {
    ar: ["معرض الاعمال",
        "مجموعة مختارة من أفضل أعمالي في مجال التصوير الفوتوغرافي", 
        
        "طبيعة",
        "تصوير طبيعي",

        "أفراح",
        "تصوير زفاف",

        "بورتريه",
        "تصوير احترافي",

        "منتجات",
        "تصوير تجاري",

        "فعاليات",
        "تصوير فعاليات",

        "بوتريته",
        "تصوير شخصيه",
    ],

    en: [
        "Portfolio",
        "A curated selection of my best photography work",

        "Nature",
        "Nature Photography",

        "Weddings",
        "Wedding Photography",

        "Portrait",
        "Professional Portrait Photography",

        "Products",
        "Product Photography",

        "Events",
        "Event Photography",

        "Portraits",
        "Personal Photography"
    ]

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

        ChangeLangForExhibition(langSelected);
    });
};
languageBtn.value = getLocalLang;

// تغيير البيانات باللغة المختارة في عنوان الصفحة
// لا يوجد ضرورة للتعديل على هذا السكربت لما لم يكن لديك خبرة كافية
function ChangeLangForExhibition(lang){
    changeElemntsLang.forEach((e,i)=>{
        e.textContent="";
        e.textContent=headerData[lang][i]
    });
};

ChangeLangForExhibition(language);