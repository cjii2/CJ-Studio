let getLocalLang = localStorage.getItem('language') || "ar";
let language = getLocalLang;
const changeElemntsLang = document.querySelectorAll("#contect-me-section .contect-change-lang")
const languageBtn = document.getElementById("languageSelect");
// بيانات عنوان الصفحة قابله للتغير
// رجاء عدد متواجد في عنوان يكون نفس يلي موجود في بيانات لن ينشئ هاذا سكربت هو فقط للتعديل
const headerData = {
    ar: [
        "تواصل معي",
        "هل لديك مشروع تصوير في ذهنك؟ دعنا نتحدث ونحول رؤيتك إلى واقع",

        "الهاتف",
        "0544888307",

        "ايميل",
        "ahmed12345m3@gmail.com",

        "الموقع",
        "الرياض حي النسيم حاره سابعه البيت ثالث",

        "انستقرام",
        "CJ.II4",

    ],

    en: [
        "Contact Me",
        "Do you have a photography project in mind? Let’s talk and turn your vision into reality.",

        "Phone",
        "0544888307",

        "Email",
        "ahmed12345m3@gmail.com",

        "Location",
        "Riyadh, Al Naseem District, Seventh Street, Third House",

        "Instagram",
        "CJ.II4",

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