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
            // Change Language
            // Navigation Bar Language
            document.getElementById("nav-home").innerHTML = "home"
            document.getElementById("nav-about").innerHTML = "about me"
            document.getElementById("nav-portfolio").innerHTML = "portfolio"
            // document.getElementById("nav-testimonials").innerHTML = "testimonials"
            document.getElementById("nav-contact").innerHTML = "contact"
            // Home Language
            document.getElementById("home-1").innerHTML = "Natchapol Mingmahaphan"
            document.getElementById("home-2").innerHTML = "A college student and a freelance web developer."
            // About Language
            document.getElementById("about-1").innerHTML = "About me"
            document.getElementById("about-2").innerHTML = "Name: Natchapol Mingmahaphan"
            document.getElementById("about-3").innerHTML = "Education: <br>Bachelor of Science in ICT | Faculty of ICT, Mahidol University | 2022 - Present"
            document.getElementById("about-4").innerHTML = "Work Experience: <br>Freelance Web Developer | 2022 - Present"
            document.getElementById("about-5").innerHTML = "Skills: HTML, CSS, JS, SASS/SCSS"
            // Portfolio Language
            document.getElementById("portfolio-1").innerHTML = "Portfolio"
            switch(port_img){
              case 0:
                document.getElementById("port-topic").innerHTML = "- DekCom Website -"
                document.getElementById("port-context").innerHTML = "DekCom Website is a computer club website that I created when I was in high school."
                document.getElementById("port-img").src = "img/port-1.png"
                break;
              case 1:
                document.getElementById("port-topic").innerHTML = "-"
                document.getElementById("port-context").innerHTML = "-"
                document.getElementById("port-img").src = "img/port-2.png"
                break;
            }
            // Contact Language
            document.getElementById("contact-title").innerHTML = "Contact"
            document.getElementById("contact-name").innerHTML = "Name"
            document.getElementById("contact-email").innerHTML = "Email"
            document.getElementById("contact-context").innerHTML = "Context"
            // Footer Language
            document.getElementById("footer-home").innerHTML = "home"
            document.getElementById("footer-about").innerHTML = "about me"
            document.getElementById("footer-portfolio").innerHTML = "portfolio"
            // document.getElementById("footer-testimonials").innerHTML = "testimonials"
            document.getElementById("footer-contact").innerHTML = "contact"
            //
            // Change Font Style
            // Navigation Bar Font Style
            document.getElementById("nav-home").style.fontFamily = "Poiret One, cursive";
            document.getElementById("nav-about").style.fontFamily = "Poiret One, cursive";
            document.getElementById("nav-portfolio").style.fontFamily = "Poiret One, cursive";
            // document.getElementById("nav-testimonials").style.fontFamily = "Poiret One, cursive";
            document.getElementById("nav-contact").style.fontFamily = "Poiret One, cursive";
            document.getElementById("nav-1").style.fontFamily = "Poiret One, cursive";
            document.getElementById("nav-2").style.fontFamily = "Poiret One, cursive";
            document.getElementById("nav-3").style.fontFamily = "Poiret One, cursive";
            // Home Font Style
            document.getElementById("home-1").style.fontFamily = "Poiret One, cursive";
            document.getElementById("home-2").style.fontFamily = "Poiret One, cursive";
            // About Font Style
            document.getElementById("about-1").style.fontFamily = "Poiret One, cursive";
            document.getElementById("about-2").style.fontFamily = "Poiret One, cursive";
            document.getElementById("about-3").style.fontFamily = "Poiret One, cursive";
            document.getElementById("about-4").style.fontFamily = "Poiret One, cursive";
            document.getElementById("about-5").style.fontFamily = "Poiret One, cursive";
            // Portfolio Font Style
            document.getElementById("portfolio-1").style.fontFamily = "Poiret One, cursive";
            document.getElementById("port-topic").style.fontFamily = "Poiret One, cursive";
            document.getElementById("port-context").style.fontFamily = "Poiret One, cursive";
            document.getElementById("port-prev").style.fontFamily = "Poiret One, cursive";
            document.getElementById("port-next").style.fontFamily = "Poiret One, cursive";
            // Contact Font Style
            document.getElementById("contact-title").style.fontFamily = "Poiret One, cursive";
            document.getElementById("contact-name").style.fontFamily = "Poiret One, cursive";
            document.getElementById("contact-email").style.fontFamily = "Poiret One, cursive";
            document.getElementById("contact-context").style.fontFamily = "Poiret One, cursive";
            // Footer Font Style
            document.getElementById("footer-home").style.fontFamily = "Poiret One, cursive";
            document.getElementById("footer-about").style.fontFamily = "Poiret One, cursive";
            document.getElementById("footer-portfolio").style.fontFamily = "Poiret One, cursive";
            // document.getElementById("footer-testimonials").style.fontFamily = "Poiret One, cursive";
            document.getElementById("footer-contact").style.fontFamily = "Poiret One, cursive";
            document.getElementById("footer-1").style.fontFamily = "Poiret One, cursive";
            document.getElementById("footer-2").style.fontFamily = "Poiret One, cursive";
            document.getElementById("footer-3").style.fontFamily = "Poiret One, cursive";
            document.getElementById("footer-4").style.fontFamily = "Poiret One, cursive";
            //
            break;
        case 1:
            // Change Language
            // Navigation Bar Language
            document.getElementById("nav-home").innerHTML = "หน้าหลัก"
            document.getElementById("nav-about").innerHTML = "เกี่ยวกับตัวฉัน"
            document.getElementById("nav-portfolio").innerHTML = "ผลงาน"
            // document.getElementById("nav-testimonials").innerHTML = "คำรับรอง"
            document.getElementById("nav-contact").innerHTML = "ติดต่อ"
            // Home Language
            document.getElementById("home-1").innerHTML = "ณัชพล มิ่งมหาพันธ์"
            document.getElementById("home-2").innerHTML = "นักศึกษาปริญญาตรี และ นักพัฒนาเว็บไซต์ฟรีแลนซ์"
            // About Language
            document.getElementById("about-1").innerHTML = "เกี่ยวกับตัวฉัน"
            document.getElementById("about-2").innerHTML = "ชื่อ: ณัชพล มิ่งมหาพันธ์"
            document.getElementById("about-3").innerHTML = "การศึกษา: <br>หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศและการสื่อสาร (นานาชาติ)<br>คณะเทคโนโลยีสารสนเทศและการสื่อสาร, มหาวิทยาลัยมหิดล | 2565 - ปัจจุบัน"
            document.getElementById("about-4").innerHTML = "ประวัติการทำงาน: <br>นักพัฒนาเว็บไซต์ฟรีแลนซ์ | 2565 - ปัจจุบัน"
            document.getElementById("about-5").innerHTML = "ความสามารถ: HTML, CSS, JS, SASS/SCSS"
            // Portfolio Language
            document.getElementById("portfolio-1").innerHTML = "ผลงาน"
            switch(port_img){
              case 0:
                document.getElementById("port-topic").innerHTML = "- เว็บไซต์ชมรมเด็กคอม -"
                document.getElementById("port-context").innerHTML = "เว็บไซต์ชมรมเด็กคอม เป็นเว็บไซต์ชมรมคอมพิวเตอร์ที่ฉันสร้างขึ้นตอนมัธยมปลาย"
                document.getElementById("port-img").src = "img/port-1.png"
                break;
              case 1:
                document.getElementById("port-topic").innerHTML = "-"
                document.getElementById("port-context").innerHTML = "-"
                document.getElementById("port-img").src = "img/port-2.png"
                break;
            }
            // Contact Language
            document.getElementById("contact-title").innerHTML = "ติดต่อ"
            document.getElementById("contact-name").innerHTML = "ชื่อ"
            document.getElementById("contact-email").innerHTML = "Email"
            document.getElementById("contact-context").innerHTML = "ข้อความ"
            // Footer Language
            document.getElementById("footer-home").innerHTML = "หน้าหลัก"
            document.getElementById("footer-about").innerHTML = "เกี่ยวกับตัวฉัน"
            document.getElementById("footer-portfolio").innerHTML = "ผลงาน"
            // document.getElementById("footer-testimonials").innerHTML = "คำรับรอง"
            document.getElementById("footer-contact").innerHTML = "ติดต่อ"
            //
            // Change Font Style
            // Navigation Bar Font Style
            document.getElementById("nav-home").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("nav-about").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("nav-portfolio").style.fontFamily = "Athiti, sans-serif";
            // document.getElementById("nav-testimonials").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("nav-contact").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("nav-1").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("nav-2").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("nav-3").style.fontFamily = "Athiti, sans-serif";
            // Home Font Style
            document.getElementById("home-1").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("home-2").style.fontFamily = "Athiti, sans-serif";
            // About Font Style
            document.getElementById("about-1").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("about-2").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("about-3").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("about-4").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("about-5").style.fontFamily = "Athiti, sans-serif";
            // Portfolio Font Style
            document.getElementById("portfolio-1").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("port-topic").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("port-context").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("port-prev").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("port-next").style.fontFamily = "Athiti, sans-serif";
            // Contact Font Style
            document.getElementById("contact-title").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("contact-name").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("contact-email").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("contact-context").style.fontFamily = "Athiti, sans-serif";
            // Footer Font Style
            document.getElementById("footer-home").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("footer-about").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("footer-portfolio").style.fontFamily = "Athiti, sans-serif";
            // document.getElementById("footer-testimonials").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("footer-contact").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("footer-1").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("footer-2").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("footer-3").style.fontFamily = "Athiti, sans-serif";
            document.getElementById("footer-4").style.fontFamily = "Athiti, sans-serif";
            //
            break;
    }
}

// // Image Slider Function
// var port_img = 0;

// function Image_slider_prev(){
//   if(port_img <= 0){
//     port_img = 1
//   }
//   else{
//     port_img = port_img - 1
//   }
//   page_update()
// }

// function Image_slider_next(){
//   if(port_img >= 1){
//     port_img = 0
//   }
//   else{
//     port_img = port_img + 1
//   }
//   page_update()
// }