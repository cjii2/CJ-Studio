let getLocalLang = localStorage.getItem('language') || "ar";
let language = getLocalLang;
const changeElemntsLang = document.querySelectorAll("#about-me .Main-Change-Lang")
const languageBtn = document.getElementById("languageSelect");
// بيانات عنوان الصفحة قابله للتغير
// رجاء عدد متواجد في عنوان يكون نفس يلي موجود في بيانات لن ينشئ هاذا سكربت هو فقط للتعديل
const headerData = {
    ar: ["عن المصور", 
        "أنا أحمد، مصور فوتوغرافي محترف مع أكثر من 10 سنوات من الخبرة في التصوير الفوتوغرافي. شغفي هو التقاط اللحظات الخاصة وتحويلها إلى ذكريات خالدة. أؤمن بأن كل صورة تحكي قصة، وهدفي هو سرد قصتك بأجمل طريقة ممكنة. من حفلات الزفاف إلى جلسات التصوير الشخصية، أضع قلبي وروحي في كل عمل.",

        "15+",
        "جائزه",

        "300+",
        "عميل سعيد",

        "500+",
        "جلسة تصوير",


    ],

    en: [
        "About the Photographer",
        "I am Ahmed, a professional photographer with over 10 years of experience, specializing in capturing meaningful moments and transforming them into timeless memories. Every photograph tells a story, and my mission is to tell yours with creativity and passion.",
        "15+",
        "Awards",
        "300+",
        "Happy Clients",
        "500+",
        "Photo Sessions"
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

        ChangeLangForMain(langSelected);
    });
};
languageBtn.value = getLocalLang;

// تغيير البيانات باللغة المختارة في عنوان الصفحة
// لا يوجد ضرورة للتعديل على هذا السكربت لما لم يكن لديك خبرة كافية
function ChangeLangForMain(lang){
    changeElemntsLang.forEach((e,i)=>{
        e.textContent="";
        e.textContent=headerData[lang][i]
    });
};

ChangeLangForMain(language);