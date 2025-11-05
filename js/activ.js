"use strict";
/* -------------- preloader ------------- */
$(document).ready(function () {
  // Add 'no-scroll' class to body
  $("body").addClass("no-scroll");
  // Delay the preloader and hide it
  $(".preloader")
    .delay(3000)
    .fadeOut("slow", function () {
      // Remove the 'no-scroll' class from the body
      $("body").removeClass("no-scroll");
    });
});
/* -------------- preloader ------------- */

/* -------------- scroll-up ------------- */

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-up-btn").fadeIn();
    } else {
      $(".scroll-up-btn").fadeOut();
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
/* -------------- scroll-up ------------- */

/* -------------- NavBar ------------- */

let Nav = document.getElementById("mainNav");
let lastScrollPos = 0;

window.onscroll = () => {
  if (scrollY < 100) {
    Nav.classList.remove("fixed");
  } else if (scrollY > lastScrollPos) {
    Nav.classList.remove("fixed");
  } else {
    Nav.classList.add("fixed");
  }

  lastScrollPos = scrollY;
};
/* -------------- NavBar ------------- */

/* -------------- WOW ------------- */
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotel();
}
// WOW js
document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();
});
/* -------------- WOW ------------- */

/* --------------/ الارسال تالي الGmail /------------- */

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // منع إعادة تحميل الصفحة

  // إرسال البيانات باستخدام EmailJS
  emailjs.sendForm("service_h4n0hf4", "template_z2i76x9", this).then(
    function () {
      alert("Email sent successfully!");
      // إعادة تعيين الحقول بعد النجاح
      form.reset();
    },
    function (error) {
      console.log("Failed to send email:", error);
      alert("Failed to send email, please try again.");
    }
  );
});

/* -------------- / Skills Items / ------------- */
const skills_page = document.querySelector("#Skills .row");
const skillsItems = [
  // HTML
  {
    id: 1,
    name: "HTML",
    description: "Advanced level",
    icon: `<i class='bx bxl-html5'  ></i>`,
  },

  // CSS
  {
    id: 2,
    name: "CSS",
    description: "Advanced level",
    icon: `<i class='bx bxl-css3'   ></i>`,
  },

  // JavaScript
  {
    id: 3,
    name: "JavaScript",
    description: "Advanced level (DOM, BOM, OOP, ES6)",
    icon: `<i class='bx bxl-nodejs'   ></i>`,
  },

  // TypeScript
  {
    id: 4,
    name: "TypeScript",
    description: "Advanced level",
    icon: `<i class='bx bxl-typescript'   ></i>`,
  },

  // Bootstrap
  {
    id: 5,
    name: "Bootstrap",
    description: "Advanced level",
    icon: `<i class='bx bxl-bootstrap'   ></i>`,
  },

  // tailwind-css
  {
    id: 17,
    name: "Tailwind Css",
    description: "Advanced level",
    icon: `<i class='bx bxl-tailwind-css'   ></i>`,
  },

  // Material UI,
  {
    id: 6,
    name: "Material UI,",
    description: "Advanced level",
    icon: `<i class='bx bxl-medium-old'   ></i>`,
  },

  // jQuery
  {
    id: 7,
    name: "jQuery",
    description: "Advanced level",
    icon: `<i class='bx bxl-jquery'   ></i>`,
  },

  // Redux
  {
    id: 8,
    name: "Redux",
    description: "Advanced level",
    icon: `<i class='bx bxl-redux'   ></i>`,
  },

  // JSON
  {
    id: 9,
    name: "JSON",
    description: "Advanced level",
    icon: `<i class='bx bxs-file-json'   ></i>`,
  },

  // Ajax
  {
    id: 10,
    name: "Ajax",
    description: "Advanced level",
    icon: `<i class='bx bxl-nodejs'   ></i>`,
  },

  // API
  {
    id: 11,
    name: "API",
    description: "Advanced level",
    icon: `<i class='bx bx-spreadsheet'></i>`,
  },

  // React
  {
    id: 12,
    name: "React.js",
    description: "Advanced level",
    icon: `<i class='bx bxl-react'   ></i>`,
  },

  // Next
  {
    id: 13,
    name: "Next.js",
    description: "Advanced level",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="10px"><mask height="180" id=":r8:mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style="mask-type: alpha;"><circle cx="90" cy="90" fill="black" r="90"></circle></mask><g mask="url(#:r8:mask0_408_134)"><circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#:r8:paint0_linear_408_134)"></path><rect fill="url(#:r8:paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect></g><defs><linearGradient gradientUnits="userSpaceOnUse" id=":r8:paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id=":r8:paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg>
`,
  },

  // Wordpress
  {
    id: 14,
    name: "Wordpress",
    description: "Beginner level",
    icon: `<i class='bx bxl-wordpress'></i>`,
  },

  // php
  {
    id: 15,
    name: "php",
    description: "Beginner level",
    icon: `<i class="bx bxl-php"></i>`,
  },

  // My SQL
  {
    id: 16,
    name: "My SQL",
    description: "Beginner level",
    icon: ` <i class='bx bxs-data'></i>`,
  },
];

skills_page.innerHTML += skillsItems
  .map((item) => {
    return `
    <div class="col-md-4">
      <div class="item">
        ${item.icon}
        <div class="ms-2">
          <p class="fw-bold titel-skil" >${item.name}</p>
          <p>${item.description}</p>
        </div>
      </div>
    </div>
  `;
  })
  .join("");

/* -------------- / Skills Items / ------------- */

/* -------------- / Projects modal / ------------- */
const body = document.querySelector("#Projects");
const dataProjct = [
  // VIX TEMPLATE
  {
    id_name: "VIX",
    title: "VIX TEMPLATE",
    img_logo: "" /* `<img src="img/Projects/vix/logo.png" alt="" />`*/,
    description: [
      `"vix" is a multilingual website specializing in the sale of
        clothing, shoes, and accessories for children, men, and
        women. It offers a diverse range of trendy and stylish
        products, allowing users to browse a wide selection and
      choose items that suit their preferences.`,

      `The site features a user-friendly interface and supports
       multiple languages to cater to the diverse needs of
       visitors. Additionally, it provides various payment options,
      including Visa cards and cash on delivery.`,

      `Different sections on the website make it easy for users to
       find products, enhancing the efficiency of the shopping
       process. Shoppers will enjoy a comfortable and enjoyable
       shopping experience on this multilingual platform.`,
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "JQuery"],
    img_project: [
      "img/Projects/vix/home.jpeg",
      "img/Projects/vix/CheckOut.jpeg",
      "img/Projects/vix/Item Name.jpeg",
      "img/Projects/vix/login.jpeg",
      "img/Projects/vix/My Account .jpeg",
      "img/Projects/vix/Products.jpeg",
      "img/Projects/vix/Register.jpeg",
    ],
  },

  // Course Academy
  {
    id_name: "Course-Academy",
    title: "Course Academy (NEXT)",
    img_logo: "" /* `<img src="img/Projects/vix/logo.png" alt="" />`*/,
    description: [
      `
        <b> Handling the API: </b> The project showcases my ability to interact with APIs using JSON Server as a
         mediator between the frontend and the database. I fetch data from the API using HTTP requests like
         GET, send data using POST, update it using PUT, and delete it using DELETE.
        `,

      `
        <b> Dashboard: </b> The project includes a dashboard that allows direct management of products. Through
        it, you can add, modify, and delete products based on the permissions granted to the current user.
        `,

      `
        <b> User Management:</b> Additionally, the project provides user management capabilities, where as an
        administrator, you can register new users, update their information, or delete their accounts as
        needed.
        `,
      `
        <b>Login and Registration System:</b> The project includes a comprehensive system for user login and
        registration, ensuring secure access to various functionalities of the dashboard, product
        management, and user administration.
        `,
    ],
    tools: ["NEXT.js", " Json Server "],
    img_project: [
      "img/Projects/Course Academy/home.jpeg",
      "img/Projects/Course Academy/not login.jpeg",
      "img/Projects/Course Academy/login.jpeg",
      "img/Projects/Course Academy/Register.jpeg",
      "img/Projects/Course Academy/New Product.jpeg",
      "img/Projects/Course Academy/product item.jpeg",
      "img/Projects/Course Academy/my Favorite.jpeg",
      "img/Projects/Course Academy/cart.jpeg",
      "img/Projects/Course Academy/check out.jpeg",
      "img/Projects/Course Academy/profile.jpeg",
      "img/Projects/Course Academy/order Profile.jpeg",
      "img/Projects/Course Academy/Dashboard.jpeg.",
    ],
  },

  // Yeshtery Online Stor (React)
  {
    id_name: "Yeshtery",
    title: "Yeshtery Online Stor (React)",
    img_logo: "" /* `<img src="img/Projects/vix/logo.png" alt="" />`*/,
    description: [
      `
        It is a clothing store based on a marketing cart and was created using the React, js and was based on
the props
      `,
    ],
    tools: ["React.js"],
    img_project: [
      "img/Projects/Yeshtery/1.jpeg",
      "img/Projects/Yeshtery/2.jpeg",
    ],
  },

  // Multi Form
  {
    id_name: "Multi-Form",
    title: "Multi Form",
    img_logo: "" /* `<img src="img/Projects/vix/logo.png" alt="" />`*/,
    description: [
      "It is a multi-Form website",
      "Created in a smart way based on your product choices, a purchase invoice is displayed",
      "And it was created to be responsive on all screens",
    ],
    tools: ["Html", "Css", "javaScript"],
    img_project: [
      "img/Projects/Multi Form/1.jpeg",
      "img/Projects/Multi Form/2.jpeg",
      "img/Projects/Multi Form/3.jpeg",
      "img/Projects/Multi Form/4.jpeg",
      "img/Projects/Multi Form/5.jpeg",
      "img/Projects/Multi Form/6.jpeg",
    ],
  },

  // Task Management (React)
  {
    id_name: "Task-Management",
    title: "Task Management (React)",
    img_logo: "" /* `<img src="img/Projects/vix/logo.png" alt="" />`*/,
    description: [
      `
        This site manages daily and monthly tasks and allows saving, editing and editing data using the
            <b> Firebase</b> 
      `,

      `
       and I recommend taking a look at it
      `,

      `
      <b> Libraries used:</b>  ( Firebase - react-firebase-hook - react-helmet-async - react-i18next - react-loading - react-router-dom )
      `,
    ],
    tools: ["React.js", "Firebase"],
    img_project: [
      "img/Projects/Task Management/Screenshot_17-7.jpeg",
      "img/Projects/Task Management/Screenshot_17-1.jpeg",
      "img/Projects/Task Management/Screenshot_17-10.jpeg",
      "img/Projects/Task Management/Screenshot_17-11.jpeg",
      "img/Projects/Task Management/Screenshot_17-2.jpeg",
      "img/Projects/Task Management/Screenshot_17-3.jpeg",
      "img/Projects/Task Management/Screenshot_17-4.jpeg",
      "img/Projects/Task Management/Screenshot_17-5.jpeg",
      "img/Projects/Task Management/Screenshot_17-6.jpeg",
      "img/Projects/Task Management/Screenshot_17-8.jpeg",
      "img/Projects/Task Management/Screenshot_17-9.jpeg",
    ],
  },

  //E-Commerce-Shop (React)
  {
    id_name: "E-Commerce-Shop",
    title: "E-Commerce Shop (React)",
    img_logo: "" /* `<img src="img/Projects/vix/logo.png" alt="" />`*/,
    description: [
      `
         It is a complete online store built using React and Redux
         The product search feature has been added by name
         The filter feature has been added according to the price
         It is designed to be responsive on all different screen sizes 
        `,
    ],
    tools: ["React.js", "Redux", "ApI", "Node.js ", "Express"],
    img_project: [
      "img/Projects/Full Online Store/2.jpeg",
      "img/Projects/Full Online Store/1.jpeg",
      "img/Projects/Full Online Store/3.jpeg",
    ],
  },

  // YOUR CHIF TEMPLATE
  {
    id_name: "YOUR-CHIF",
    title: "YOUR CHIF TEMPLATE",
    img_logo: `<i class="bx bx-pagelines"></i>`,
    description: [
      `"YOUR CHIF" is a website that reveals our dining experience
        online. Enjoy exploring our diverse menu and savor the
        delicious details of our dishes. Get to know the chef and
        the team through their dedicated page and immerse yourself
        in the atmosphere of the restaurant we offer, with a focus
        on the achievements we have accomplished.`,
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "JQuery"],
    img_project: ["img/Projects/Chif/Chif.png", "img/Projects/Chif/your.jpeg"],
  },

  // Lawyer TEMPLATE
  {
    id_name: "Lawyer",
    title: "Lawyer",
    img_logo: `<i class="bx bx-scale-balanced"></i>`,
    description: [
      `
       "A lawyer's website is an online platform designed to
        showcase the legal services provided by the law firm and its
        team. The website features a responsive design, offering a
        user-friendly and convenient experience across various
        devices, including mobile phones and personal computers.
      `,
      `<b>Key Features:</b>`,
      `<b>Service Display:</b>`,
      `<b>Information about the Lawyer and Team:</b>`,
      `<b>Portfolio of Work:</b>`,
      `<b>Forms and Documents:</b>`,
      `<b>Direct Contact:</b>`,
      `
      In this way, the website enhances transparency and effective
      communication between the lawyer and potential clients,
      providing an improved user experience across different
      devices."
      `,
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "JQuery"],
    img_project: ["img/Projects/Lawyer/home.jpeg"],
  },

  // Purchases Calculator (React)
  {
    id_name: "Purchases",
    title: "Purchases Calculator (React)",
    img_logo: "" /*`<i class="fa-solid fa-scale-balanced"></i>`*/,
    description: [
      `
         It is a site that calculates your daily or monthly purchases
          Json server was used in this process
        `,
      `
        It sends the entered data to the API file and calls it from the API file to display it in an effective way
        `,
    ],
    tools: ["React", "Json server"],
    img_project: [
      "img/Projects/Purchases Calculator/1.jpeg",
      "img/Projects/Purchases Calculator/2.jpeg",
    ],
  },

  // CRUDS TEMPLATE
  {
    id_name: "CRUDS",
    title: "CRUDS SYSTEM",
    img_logo: `<i class="bx bx-scale-balanced"></i>`,
    description: [
      `
      "A lawyer's website is an online platform designed to
       showcase the legal services provided by the law firm and its
       team. The website features a responsive design, offering a
       user-friendly and convenient experience across various
       devices, including mobile phones and personal computers.
      `,
      `<b>Key Features:</b>`,
      `<b>Service Display:</b>`,
      `<b>Information about the Lawyer and Team:</b>`,
      `<b>Portfolio of Work:</b>`,
      `<b>Forms and Documents:</b>`,
      `<b>Direct Contact:</b>`,
      `
      In this way, the website enhances transparency and effective
      communication between the lawyer and potential clients,
      providing an improved user experience across different
      devices."
      `,
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    img_project: ["img/Projects/CRUDS/CRUDS1.jpeg"],
  },

  // New CRUDS SYSTEM
  {
    id_name: "new-CRUDS",
    title: "New CRUDS SYSTEM",
    img_logo: "",
    description: [
      "It is the location of the product and store management system",
      `It adds the products, prices and quantity of the store and there is a feature of adding, playing,`,
      `modifying and spraying by name`,
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    img_project: [
      "img/Projects/New CRUDS/1.jpeg",
      "img/Projects/New CRUDS/2.jpeg",
      "img/Projects/New CRUDS/3.jpeg",
    ],
  },

  // A-Cook TEMPLATE
  {
    id_name: "A-Cook",
    title: "A-Cook TEMPLATE",
    img_logo: ``,
    description: [
      `
        "A-Cook TEMPLATE" website is an online platform designed to
         showcase the legal services provided by the law firm and its
         team. The website features a responsive design, offering a
         user-friendly and convenient experience across various
         devices, including mobile phones and personal computers.
        `,
      `<b>Key Features:</b>`,
      `<b>Service Display:</b>`,
      `<b>Information about the Lawyer and Team:</b>`,
      `<b>Portfolio of Work:</b>`,
      `<b>Forms and Documents:</b>`,
      `<b>Direct Contact:</b>`,
      `
        In this way, the website enhances transparency and effective
        communication between the lawyer and potential clients,
        providing an improved user experience across different
        devices."
        `,
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    img_project: ["img/Projects/A Cook/IMG_٢٠٢٤٠١١٠_١٣١٣١٢.jpg"],
  },

  // Div Drive TEMPLATE
  {
    id_name: "Div-Drive",
    title: "Div Drive",
    img_logo: ``,
    description: [
      `
       "A-Cook TEMPLATE" website is an online platform designed to
       showcase the legal services provided by the law firm and its
       team. The website features a responsive design, offering a
       user-friendly and convenient experience across various
       devices, including mobile phones and personal computers.
      `,
      `<b>Key Features:</b>`,
      `<b>Service Display:</b>`,
      `<b>Information about the Lawyer and Team:</b>`,
      `<b>Portfolio of Work:</b>`,
      `<b>Forms and Documents:</b>`,
      `<b>Direct Contact:</b>`,
      `
       In this way, the website enhances transparency and effective
       communication between the lawyer and potential clients,
       providing an improved user experience across different
       devices."
      `,
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    img_project: ["img/Projects/div drive/2.jpg"],
  },

  // Div Drive TEMPLATE
  {
    id_name: "Bank",
    title: "Electronic Bank Representative TEMPLATE",
    img_logo: ``,
    description: [
      `
         "A-Cook TEMPLATE" website is an online platform designed to
         showcase the legal services provided by the law firm and its
         team. The website features a responsive design, offering a
         user-friendly and convenient experience across various
         devices, including mobile phones and personal computers.
        `,
      `<b>Key Features:</b>`,
      `<b>Service Display:</b>`,
      `<b>Information about the Lawyer and Team:</b>`,
      `<b>Portfolio of Work:</b>`,
      `<b>Forms and Documents:</b>`,
      `<b>Direct Contact:</b>`,
      `
         In this way, the website enhances transparency and effective
         communication between the lawyer and potential clients,
         providing an improved user experience across different
         devices."
        `,
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    img_project: [
      "img/Projects/Bank/2.png",
      "img/Projects/Bank/4.jpg",
      "img/Projects/Bank/7.jpg",
      "img/Projects/Bank/3.jpeg",
      "img/Projects/Bank/5.jpg",
      "img/Projects/Bank/6.png",
      "img/Projects/Bank/8.png",
      "img/Projects/Bank/9.png",
      "img/Projects/Bank/10.png",
    ],
  },


// Show modal in body
body.innerHTML += dataProjct
  .map((item) => {
    return `
    <div class="modal fade modal-xl" id="${
      item.id_name
    }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${
              item.title
            }</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body row">
            <div class="col-lg-4 col-12 Right-Bar">
              <div class="head-Nav">
                ${item.img_logo}
                <h4 class="law">${item.title}</h4>
              </div>

              <h5>About the project</h5>
              ${item.description
                .map((description) => `<p>${description}</p>`)
                .join("")}

              <div class="tools">
                <h4>Tools</h4>
                ${item.tools.map((tools) => `<h6>${tools}</h6>`).join("")}
              </div>
              <hr />
            </div>

            <div class="col-lg-8 col-12 img-Nav">
              <h4 class="mt-0">Home Page</h4>
              ${item.img_project
                .map((img) => `<img class="my-3" src="${img}" alt="" /> <hr> `)
                .join("")}
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
  })
  .join("");
/* -------------- / Projects modal / ------------- */

/* -------------- / Projects Items / ------------- */
const itemsContainer = document.getElementById("projectsItems");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const pageNumbersContainer = document.getElementById("pageNumbers");

// Projects Items
const ProjectsItems = [
  // VIX Template
  {
    title: "VIX Template",
    description: `
      It is a comprehensive store for purchasing clothes and shoes
      for men, women, and children. We provide payment methods and
      use a responsive design for all screens..
    `,
    image: "img/Projects/VIX.jpg",
    link_Live: "https://elged194.github.io/VIX-Online-Stor/",
    link_Code: "https://github.com/elged194",
    data_target: "#VIX",
  },

  // Course Academy (NEXT)
  {
    title: "Course Academy (NEXT)",
    description: `
       Handling the API: The project showcases my ability to interact with APIs using JSON Server as a
       mediator between the frontend and the database. I fetch data from the API using HTTP requests like
       GET, send data using POST, update it using PUT, and delete it using DELETE.
      `,
    image: "img/Projects/Course Academy/home.jpeg",
    link_Live: "https://github.com/elged194/Course-Academy-NEXT",
    link_Code: "https://github.com/elged194",
    data_target: "#Course-Academy",
  },

  // Task Management (React)
  {
    title: "Task Management (React)",
    description: `
       This site manages daily and monthly tasks and allows saving, editing and editing data using the
        <b> Firebase </b>
      and I recommend taking a look at it
      `,
    image: "img/Projects/Task Management/Screenshot_17-7.jpeg",
    link_Live: "https://github.com/elged194/Task-Management-React",
    link_Code: "https://github.com/elged194",
    data_target: "#Task-Management",
  },

  //E-Commerce-Shop (React)
  {
    title: "E-Commerce Shop (React)",
    description: `
         It is a complete online store built using React and Redux
         The product search feature has been added by name
         The filter feature has been added according to the price
         It is designed to be responsive on all different screen sizes
        `,
    image: "img/Projects/Full Online Store/2.jpeg",
    link_Live: "https://e-commerce-shop-react.netlify.app/",
    link_Code: "https://github.com/elged194/E-Commerce-Shop",
    data_target: "#E-Commerce-Shop",
  },

  //Purchases Calculator (React)
  {
    title: "Purchases Calculator (React)",
    description: `
           It is a site that calculates your daily or monthly purchases
            Json server was used in this process
          `,
    image: "img/Projects/Purchases Calculator/1.jpeg",
    link_Live: "https://e-commerce-shop-react.netlify.app/",
    link_Code: "https://github.com/elged194/E-Commerce-Shop",
    data_target: "#Purchases",
  },

  //Yeshtery Online Stor (React)
  {
    title: "Yeshtery Online Stor (React)",
    description: `
       It is a clothing store based on a marketing cart and was created using the React, js and was based on
        the props
      `,
    image: "img/Projects/Yeshtery/1.jpeg",
    link_Live: "https://github.com/elged194/Yeshtery-Online-Stor-React",
    link_Code: "https://github.com/elged194/E-Commerce-Shop",
    data_target: "#Yeshtery",
  },

  // YOUR CHIF Template
  {
    title: "YOUR CHIF",
    description: `
      t is the restaurant’s website that displays all the menu
       items, the chef and the workers, and introduces the restaurant
       and the achievements that have been achieved.
    `,
    image: "img/Projects/Chif.png",
    link_Live: "",
    link_Code: "https://github.com/elged194",
    data_target: "#YOUR-CHIF",
  },

  // Multi Form
  {
    title: "Multi Form",
    description: `
        It is a multi-Form website
        Created in a smart way based on your product choices, a purchase invoice is displayed
        And it was created to be responsive on all screens
      `,
    image: "img/Projects/Multi Form/1.jpeg",
    link_Live: "https://elged194.github.io/Task-Multi-Form/",
    link_Code: "https://github.com/elged194/Task-Multi-Form",
    data_target: "#Multi-Form",
  },

  // Lawyer Template
  {
    title: "Lawyer Template",
    image: "img/Projects/Lawyer.jpg",
    description: `
        A lawyer's website to display the work carried out by the
                  lawyer's office and the work team, and responsive screens are
                  used on this website .
      `,
    link_Live: "https://elged194.github.io/Lawyer-Template-/",
    link_Code: "https://github.com/elged194",
    data_target: "#Lawyer",
  },

  // Reve Tive.
  {
    title: "Reve Tive.",
    image: "img/Projects/Reve Tive/1.png",
    description: `
     A Reve Tive website to display the work carried out by the
      Reve Tive's office and the work team, and responsive screens
      are used on this website .
    `,
    link_Live: "",
    link_Code: "https://github.com/elged194",
    data_target: "#",
  },

  // New CRUDS SYSTEM
  {
    title: "New CRUDS SYSTEM",
    image: "img/Projects/New CRUDS/1.jpeg",
    description: `
      t is the location of the product and store management system
      It adds the products, prices and quantity of the store and there is a feature of adding, playing,
      modifying and spraying by name
      `,
    link_Live: "https://elged194.github.io/New-CRUD-SYSTEM/",
    link_Code: "https://github.com/elged194/New-CRUD-SYSTEM",
    data_target: "#new-CRUDS",
  },

  // CRUDS SYSTEM
  {
    title: "CRUDS SYSTEM",
    image: "img/Projects/CRUDS/CRUDS1.jpeg",
    description: `
      A CRUDS website to display the work carried out by the CRUDS
                  office and the work team, and responsive screens are used on
                  this website .
      `,
    link_Live: "https://elged194.github.io/CRUDS/",
    link_Code: "https://github.com/elged194",
    data_target: "#CRUDS",
  },

  // A Cook.
  {
    title: "A Cook Template .",
    image: "img/Projects/A Cook/1.jpg",
    description: `
      A Cook website to display the work carried out by the A Cook
                  office and the work team, and responsive screens are used on
                  this website .
    `,
    link_Live: "",
    link_Code: "https://github.com/elged194",
    data_target: "#A-Cook",
  },

  // Div Drive
  {
    title: "A Cook Template .",
    image: "img/Projects/div drive/1.webp",
    description: `
     A Div Drive website to display the work carried out by the Div
                  Drive office and the work team, and responsive screens are
                  used on this website .
      `,
    link_Live: "",
    link_Code: "https://github.com/elged194",
    data_target: "#Div-Drive",
  },

  // Bank
  {
    title: "Electronic Bank .",
    image: "img/Projects/Bank/1.webp",
    description: `
      A Bank website to display the work carried out by the Bank
                  office and the work team, and responsive screens are used on
                  this website .
        `,
    link_Live: "",
    link_Code: "https://github.com/elged194",
    data_target: "#Bank",
  },
  
// --------/ paginate /---------
let itemsPerPage = 3;
let currentPage = 1;
const totalPages = Math.ceil(ProjectsItems.length / itemsPerPage);

// تقسيم العناصر إلى صفحات
const paginate = (items, pageNumber, itemsPerPage) => {
  // حساب بداية الصفحة: (رقم الصفحة - 1) * عدد العناصر لكل صفحة
  const start = (pageNumber - 1) * itemsPerPage;

  // حساب نهاية الصفحة: بداية الصفحة + عدد العناصر لكل صفحة
  const end = start + itemsPerPage;

  // إعادة جزء من العناصر من البداية إلى النهاية (العناصر ف الصفحة الحالية)
  return items.slice(start, end);
};

const renderItems = (page) => {
  itemsContainer.innerHTML = paginate(ProjectsItems, page, itemsPerPage)
    .map((item) => {
      return `
        <div class="col-lg-4 col-md-6 col-12">
          <div class="card">
            <img src="${item.image}" class="card-img-top" alt="${item.title}" />

            <div class="card-body">
              <div class="card-title">
                <h5 class="">${item.title}</h5>
                <div>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star-half-stroke"></i>
                </div>
              </div>
              <p class="card-text">
                ${item.description}
              </p>
              <a class="btn" href="${item.link_Live}">GO Live Demo</a>
              <a class="btn bt" data-bs-toggle="modal" data-bs-target="${item.data_target}" href="">Go Viewing</a>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
};

const updatePaginationButtons = () => {
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
  renderPageNumbers();
};

// Render Page Numbers
const renderPageNumbers = () => {
  // تفريغ محتوى عنصر الأرقام حتى يتم إعادة تعبئته بالأرقام الجديدة
  pageNumbersContainer.innerHTML = "";

  // إذا كان إجمالي الصفحات أقل من أو يساوي 3، قم بإظهار جميع الأرقام
  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      const pageNumber = document.createElement("span");
      pageNumber.textContent = i;

      // إضافة الفئة 'active' للصفحة الحالية
      if (i === currentPage) {
        pageNumber.classList.add("active");
      }

      // إضافة مستمع للضغط على كل رقم للانتقال للصفحة المعنية
      pageNumber.addEventListener("click", () => {
        currentPage = i;
        renderItems(currentPage); // عرض العناصر الجديدة للصفحة
        updatePaginationButtons(); // تحديث حالة أزرار الترقيم
      });
      pageNumbersContainer.appendChild(pageNumber); // إضافة الرقم إلى عنصر الأرقام
    }
  } else {
    // إذا كان إجمالي الصفحات أكبر من 3، قم بإظهار الأرقام بشكل ديناميكي

    // إظهار الصفحة الأولى إذا لم تكن الصفحة الحالية هي الأولى
    if (currentPage > 1) {
      const firstPage = document.createElement("span");
      firstPage.textContent = "1";
      firstPage.addEventListener("click", () => {
        currentPage = 1;
        renderItems(currentPage);
        updatePaginationButtons();
      });
      pageNumbersContainer.appendChild(firstPage);
    }

    // إضافة '...' إذا كانت الصفحة الحالية أكبر من 2
    if (currentPage > 2) {
      const dots = document.createElement("span");
      dots.textContent = "...";
      pageNumbersContainer.appendChild(dots);
    }

    // إضافة الصفحة الحالية مع تمييزها كـ 'active'
    const currentPageElement = document.createElement("span");
    currentPageElement.textContent = currentPage;
    currentPageElement.classList.add("active");
    pageNumbersContainer.appendChild(currentPageElement);

    // إضافة '...' إذا كانت الصفحة الحالية أقل من ما قبل الأخيرة
    if (currentPage < totalPages - 1) {
      const dots = document.createElement("span");
      dots.textContent = "...";
      pageNumbersContainer.appendChild(dots);
    }

    // إظهار الصفحة الأخيرة إذا لم تكن الصفحة الحالية هي الأخيرة
    if (currentPage < totalPages) {
      const lastPage = document.createElement("span");
      lastPage.textContent = totalPages;
      lastPage.addEventListener("click", () => {
        currentPage = totalPages;
        renderItems(currentPage);
        updatePaginationButtons();
      });
      pageNumbersContainer.appendChild(lastPage);
    }
  }
};

// prev Button
// عند الضغط على زر "السابق"
prevButton.addEventListener("click", () => {
  // تحقق مما إذا كانت الصفحة الحالية أكبر من 1
  // إذا كانت كذلك، انتقل إلى الصفحة السابقة
  if (currentPage > 1) {
    currentPage--; // تقليل رقم الصفحة الحالية
    renderItems(currentPage); // عرض العناصر للصفحة الحالية الجديدة
    updatePaginationButtons(); // تحديث أزرار الترقيم بناءً على الصفحة الحالية الجديدة
  }
});

// next Button
nextButton.addEventListener("click", () => {
  // تحقق مما إذا كانت الصفحة الحالية أقل من إجمالي الصفحات
  // إذا كانت كذلك، انتقل إلى الصفحة التالية
  if (currentPage < totalPages) {
    currentPage++; // زيادة رقم الصفحة الحالية
    renderItems(currentPage); // عرض العناصر للصفحة الحالية الجديدة
    updatePaginationButtons(); // تحديث أزرار الترقيم بناءً على الصفحة الحالية الجديدة
  }
});

// Initial Render
renderItems(currentPage);
updatePaginationButtons();
/* -------------- / Projects Items / ------------- */
