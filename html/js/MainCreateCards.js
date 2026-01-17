export class Galleries {
    constructor(Father, jsonPath) {
        this.Father = document.querySelector(Father);
        this.jsonPath = jsonPath;
    };
    
    async loadElements() {
        const res = await fetch(this.jsonPath + "?nocache=" + Date.now());
        const data = await res.json();

        for (const items of data.group) {
            try{
                if (!items || items.length === 0) continue;
                // إضافة الصور
                const fig1 = document.createElement("figure");
                fig1.className = "img-container";

                const img1 = document.createElement("img");
                img1.src = items.img;
                img1.alt = items.title || "Image";

                fig1.appendChild(img1);
                this.Father.appendChild(fig1);
            }
            catch(err){
                console.error("Error creating gallery section:", err);
            };
        };

        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting)
                    entry.target.classList.add("show");
                else{
                    entry.target.classList.remove("show");
                };
            });
        },{
            rootMargin: "40px 0px -40px 0px"
        });
        
        const cardsElements = document.querySelectorAll(".img-container");
        cardsElements.forEach(el => {
            observer.observe(el);
        });
    };
 
    scroll(){

        
    }

        
    activeApp() {
        this.loadElements();
    };
};