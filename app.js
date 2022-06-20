// var lang | 0 - ENG (Default) | 1 - TH
var lang = 0

//ฟังก์ชั่นเปลี่ยนภาษา เป็น ภาษาอังกฤษ
function EN_lang(){
    lang = 0
    page_update()
}

//ฟังก์ชั่นเปลี่ยนภาษา เป็น ภาษาไทย
function TH_lang(){
    lang = 1
    page_update()
}

//ฟังก์ชั่น Update หน้า Website
function page_update(){
    switch(lang){
        case 0:
            // Navigation Bar Language
            document.getElementById("nav-home").innerHTML = "home"
            document.getElementById("nav-about").innerHTML = "about me"
            document.getElementById("nav-portfolio").innerHTML = "portfolio"
            document.getElementById("nav-testimonials").innerHTML = "testimonials"
            document.getElementById("nav-contact").innerHTML = "contact"
            // Footer Language
            document.getElementById("footer-home").innerHTML = "home"
            document.getElementById("footer-about").innerHTML = "about me"
            document.getElementById("footer-portfolio").innerHTML = "portfolio"
            document.getElementById("footer-testimonials").innerHTML = "testimonials"
            document.getElementById("footer-contact").innerHTML = "contact"
            break;
        case 1:
            // Navigation Bar Language
            document.getElementById("nav-home").innerHTML = "หน้าหลัก"
            document.getElementById("nav-about").innerHTML = "เกี่ยวกับตัวฉัน"
            document.getElementById("nav-portfolio").innerHTML = "ผลงาน"
            document.getElementById("nav-testimonials").innerHTML = "คำรับรอง"
            document.getElementById("nav-contact").innerHTML = "ติดต่อ"
            // Footer Language
            document.getElementById("footer-home").innerHTML = "หน้าหลัก"
            document.getElementById("footer-about").innerHTML = "เกี่ยวกับตัวฉัน"
            document.getElementById("footer-portfolio").innerHTML = "ผลงาน"
            document.getElementById("footer-testimonials").innerHTML = "คำรับรอง"
            document.getElementById("footer-contact").innerHTML = "ติดต่อ"
            break;
    }
}