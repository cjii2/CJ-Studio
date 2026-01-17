let getLocalLang = localStorage.getItem('language') || "ar";
let language = getLocalLang;
const createElemnts = document.querySelector("#services-section .cards-container")
const des = document.querySelectorAll("#services-section .Services-change-lang")
const languageBtn = document.getElementById("languageSelect");
// بيانات عنوان الصفحة قابله للتغير
// رجاء عدد متواجد في عنوان يكون نفس يلي موجود في بيانات لن ينشئ هاذا سكربت هو فقط للتعديل
// هاذي بيانات قابله للزياده حسب حاجه فقط الكروت

// اذا تتسائل ايش direction هو اتجاه عناصر عشان اللغه افضل انك تحط اتجاه عشان شكل
const cardsData = {
    ar:[
        
        {
            direction:'right',
            title:"تصوير الافراح",
            desc:"التقاط أجمل لحظات يومك الخاص بأعلى جودة واحترافية، مع تغطية كاملة للحفل والتحضيرات.",
            priceText:"يبدأ من ",
            price:"5000",
            coin:"ريال",
            imgLocation:"img/svg/serivec-svgs/heart-temp.svg",
        },

        {
            direction:'right',
            title:"تصوير الفعاليات",
            desc:"تغطية شاملة للفعاليات والمؤتمرات والحفلات بفريق متكامل من المصورين المحترفين.",
            priceText:"يبدأ من ",
            price:"2000",
            coin:"ريال",
            imgLocation:"img/svg/serivec-svgs/camera-temp.svg",
        },

        {
            direction:'right',
            title:"تصوير المنتجات",
            desc:"تصوير احترافي للمنتجات والإعلانات التجارية بإضاءة وخلفيات مثالية.",
            priceText:"يبدأ من ",
            price:"1500",
            coin:"ريال",
            imgLocation:"img/svg/serivec-svgs/box-temp.svg",
        },

        {
            direction:'right',
            title:"تصوير البورتريه",
            desc:"جلسات تصوير شخصية وعائلية في الاستوديو أو في الموقع، مع تحرير احترافي للصور.",
            priceText:"يبدأ من ",
            price:"800",
            coin:"ريال",
            imgLocation:"img/svg/serivec-svgs/tow-person-temp.svg",
        },
    ],

    en: [
        {
            direction:'left',
            title: "Wedding Photography",
            desc: "Capturing the most beautiful moments of your special day with the highest quality and professionalism, including full coverage of the event and preparations.",
            priceText: "Starting from ",
            price: "5000",
            coin:"SAR",
            imgLocation: "img/svg/serivec-svgs/heart-temp.svg",
        },

        {
            direction:'left',
            title: "Event Photography",
            desc: "Comprehensive coverage of events, conferences, and celebrations with a professional team of photographers.",
            priceText: "Starting from ",
            price: "2000",
            coin:"SAR",
            imgLocation: "img/svg/serivec-svgs/camera-temp.svg",
        },

        {
            direction:'left',
            title: "Product Photography",
            desc: "Professional product and commercial photography with perfect lighting and backgrounds.",
            priceText: "Starting from ",
            price: "1500",
            coin:"SAR",
            imgLocation: "img/svg/serivec-svgs/box-temp.svg",
        },

        {
            direction:'left',
            title: "Portrait Photography",
            desc: "Personal and family photo sessions in the studio or on location, with professional photo editing.",
            priceText: "Starting from ",
            price: "800",
            coin:"SAR",
            imgLocation: "img/svg/serivec-svgs/tow-person-temp.svg",
        },

    ]

};


const descriptionsData={
    ar:[
        "الخدمات",
        'نقدم مجموعة متنوعة من خدمات التصوير الفوتوغرافي لتلبية جميع احتياجاتك',
    ],

    en: [
        "Services",
        "We offer a wide range of photography services to meet all your needs",
    ]

}
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
    createElemnts.innerHTML = "";
    des.forEach(e=>e.textContent='')
    cardsData[lang].forEach((e)=>{
        // console.log(e.title);
        createElemnts.insertAdjacentHTML('beforeend',`
            <article class="card">
                <figure>
                    <img change-text-align src="${e.imgLocation}" alt="">
                </figure>

                <main>
                    <h3 class='change-text-align'>${e.title}</h3>
                    <p class='change-text-align'>${e.desc}</p>
                </main>

                <footer>
                    <p class='change-text-align'>${e.priceText} <strong>${e.price}</strong> <span>${e.coin}</span> </p>
                </footer>
            </article>
            `);
    });
    document.querySelectorAll('.card').forEach(e=>{
        if(localStorage.getItem('language') !== "ar"){
            e.classList.add('left')
        }else{
            e.classList.remove('left');
        }
    })
    descriptionsData[lang].forEach((e,i)=>{
        des[i].insertAdjacentText('beforeend',e);
    });
};

ChangeLangForHome(language);