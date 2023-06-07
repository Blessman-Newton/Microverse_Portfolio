const projectData = document.querySelector('#work-card');
const heroSection = document.querySelector('#portfolio');
const projectsMob = document.querySelector('#work-card-mobile');

// JavaScript arrays containing work section information

const projects = [
  {
    title: '',
    image: 'images/Img Placeholder (6).png',
    description: '',
    technologies: [],
    button: 'See Project',
  },
  {
    title: 'Data Dashboard Healthcare',
    image: 'images/Img Placeholder (4).png',
    description: `A daily selection of privately personalized
    reads; no accounts or sign-ups required.
     has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',

  },
  {
    title: 'Website Portfolio',
    image: 'images/Img Placeholder (5).png',
    description: `A daily selection of privately 
    personalized reads; no accounts or 
    sign-ups required
    personalized reads; no accounts or 
    sign-ups required. Has been the
     industry's standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    image: 'images/Img Placeholder (2).png',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Data Dashboard Healthcare',
    image: 'images/Img Placeholder (4).png',
    description: `A daily selection of privately personalized reads;
   no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Website Portfolio',
    image: 'images/Img Placeholder (5).png',
    description: `A daily selection of privately 
    personalized reads; no accounts or 
    sign-ups required
    personalized reads; no accounts or 
    sign-ups required. Has been the
     industry's standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
];

const portfolio = [
  {
    title: 'My Recent Works',
    header: 'Multi Post Stories',
    technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    image: 'images/Img Placeholder.png',
    imageMob: 'images/Img Placeholder (3).png',
    description: `A daily selection
    of privately personalized reads; 
    no accounts or sign-ups <br> required. 
    This has been the industry's 
    standard dummy <br> text ever since 
    the 1500s, when an unknown
     printer took a <br>
    standard dummy text.`,
    button: 'See Project',
  },
];

const popup = [
  {
    title: 'Keeping track of hundreds of components website',
    titleMob: 'Multi Post Stories',
    button: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/aya.png',
    imageMob: 'images/snapsmall.png',
    description: `Lorem Ipsum is simply dummy text of
     the printing and typesetting industry. Lorem Ipsum has been the 
     industry's standard dummy text ever since the 1500s, when an unknown
     make a type specimen book.
       It has survived not only five centuries,
     but also the leap into electronic typesetting, remaining essent`,
    descriptionMob: `Lorem Ipsum is simply dummy text of
    the printing and typesetting industry. Lorem Ipsum has been the 
    industry's standard dummy text ever since the 1500s, when an unknown
      make a type specimen book.
      It has survived not only five centuries,
    but also the leap into electronic typesetting, remaining essent`,
    links: ['See live', 'See source'],
    linkImg: ['images/link.png', 'images/Vector.png'],
    linkSource: ['https://blessman-newton.github.io/Microverse_Portfolio/', 'https://github.com/Blessman-Newton/Microverse_Portfolio'],

  },
];
// JavaScript arrays containing work section information
const projectsMobile = [
  {
    title: 'Profesional Art Printing Data',
    image: 'images/Img Placeholder (2).png',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    image: 'images/Img Placeholder (2).png',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    image: 'images/Img Placeholder (2).png',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    image: 'images/Img Placeholder (2).png',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    image: 'images/Img Placeholder (2).png',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    image: 'images/Img Placeholder (2).png',
    description: `A daily selection of privately personalized reads;
    no accounts or sign-ups required.
    has been the industry standard.`,
    technologies: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
];

// Recent section template
let portfolioTemplate = '';

portfolio.forEach((recent) => {
  let technologies = '';
  recent.technologies.forEach((tech) => {
    technologies += `<li>${tech}</li>`;
  });
  const tag = `
  <div class="work-section">
  <div class="recent-work">
      <h3>${recent.title}</h3>
      <hr class="recent-hr">
  </div>
  <div class="project-box">
      <div class="img-holder">
          <img id="img1" src="${recent.image}" alt="">
          <img id="img2" src="${recent.imageMob}" alt="">
      </div>        
      <div class="work-content">
          <h2>${recent.header}</h2>
          <p>
          ${recent.description}
          </p>
          <div class="btn">
              <ul>
              ${technologies}
              </ul>
          </div>
          <div class="see_more_btn">
              <button class="view-project" type="button">${recent.button}</button>
          </div> 
      </div>
  </div>
</div>
    `;
  portfolioTemplate += tag;
});
heroSection.innerHTML = portfolioTemplate;
// Recent section template

// Work section template
let desktopTemplate = '';

projects.forEach((project) => {
  let technologies = '';
  project.technologies.forEach((tech) => {
    technologies += `<li>${tech}</li>`;
  });
  const tag = `
    <div class="card">
    <img class="card-img" src="${project.image}" alt="">
    <div class="cont">
        <h2>${project.title}</h2>
    <p>
      ${project.description}
    </p>
    <ul class="tech-list">
        ${technologies}
    </ul>
   
    </div>
    <div class="card-button">
    <button type="button" class="view-project" >${project.button}</button>
</div>
</div>
    `;
  desktopTemplate += tag;
});
projectData.innerHTML = desktopTemplate;

// Work section template

// Mobile template
let MobileTemplate = '';

projectsMobile.forEach((projectMob) => {
  let technologies = '';
  projectMob.technologies.forEach((tech) => {
    technologies += `<li>${tech}</li>`;
  });
  const code = `
    <div class="card">
    <img class="card-img" src="${projectMob.image}" alt="">
    <div class="cont">
        <h2>${projectMob.title}</h2>
    <p>
      ${projectMob.description}
    </p>
    <ul>
        ${technologies}
    </ul>
   
    </div>
    <div class="card-button">
    <button type="button" class="view-project" >${projectMob.button}</button>
</div>
</div>
    `;
  MobileTemplate += code;
});
projectsMob.innerHTML = MobileTemplate;
// Mobile template

/* ---------------------hamburger start here! below----------------------------- */

/* ---------------------hamburger start here! below----------------------------- */
const hamburger = document.querySelector('.hamburger');
const Menu = document.querySelector('.navtabs');
const backMenu = document.querySelectorAll('#list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  Menu.classList.toggle('active');
});

backMenu.forEach((element) => element.addEventListener('click', () => {
  hamburger.classList.remove('active');
  Menu.classList.remove('active');
}));

/* ---------------------hamburger code above----------------------------- */

/* ---------------------Windows popup code below----------------------------- */
const body = document.querySelector('body');
const view = document.querySelectorAll('.view-project');

view.forEach((element) => element.addEventListener('click', () => {
  popup.forEach((pop) => {
    const show = document.createElement('div');
    const detailPop = document.createElement('div');
    show.className = 'show';
    detailPop.className = 'pop';
    detailPop.innerHTML = `
                      <div class="popup-header">
                        <h2 class="desktop" id="desktop">${pop.title}</h2>
                         <h2 class="mob-title">Multi Post Stories</h2>
                        <span id="close">&times;</span>
                      </div>
                        <div class="popup-button">
                          <button id="lists">${pop.button[0]}</button>
                          <button id="lists">${pop.button[1]}</button>
                          <button id="lists">${pop.button[2]}</button>
                        </div>
                      <div class="popup-body">
                        <img class="desktop" src="${pop.image}" alt="">
                        <img class="mob" src="${pop.imageMob}" alt="">
                        <div class="pop-details">
                          <p>
                          ${pop.description}
                          </p>

                          <p class="desktop">
                          ${pop.descriptionMob}
                          </p>
                         
                          <div class="popup-button">
                            <button class="popup-btn git"><a href="${pop.linkSource[0]}">${pop.links[0]} <img class="link-img" src="${pop.linkImg[0]}" />
                            </a></button>
                            <button class="popup-btn git"><a href="${pop.linkSource[1]}">${pop.links[1]} <img class="link-img" src="${pop.linkImg[1]}" />
                             </a>
                            </button>
                          </div>
                        </div>
                      </div>
    
      `;

    show.appendChild(detailPop);
    body.appendChild(show);

    const close = document.querySelector('#close');

    close.addEventListener('click', () => {
      body.removeChild(show);
    });
  });
}));
// /* ---------------------Windows popup code above----------------------------- */

// /* ---------------------Form validation code below----------------------------- */

const form = document.getElementById('myForm');
function handleSubmit(event) {
  event.preventDefault(); // Prevents the form from being submitted
  const emailField = document.getElementById('emailField');
  const errorMessage = document.getElementById('errorField');
  const inputValue = emailField.value;
  // Check if the input contains any lowercase letters
  if (/[A-Z]/.test(inputValue)) {
    errorMessage.textContent = 'Please, email field should be in lower-case.';
  } else {
    errorMessage.textContent = ''; // Clear the error message
    // Proceed with form submission
    form.submit();
  }
}
form.addEventListener('submit', handleSubmit);
/* ---------------------Form validation code above----------------------------- */

/* ---------------------Local storage code above----------------------------- */

window.addEventListener('DOMContentLoaded', () => {
  const formData = localStorage.getItem('formData');
  if (formData) {
    const { name, email, message } = JSON.parse(formData);
    document.getElementById('usernameField').value = name || '';
    document.getElementById('emailField').value = email || '';
    document.getElementById('messageField').value = message || '';
  }
});

// Save form data to local storage whenever the input fields change
document.getElementById('myForm').addEventListener('input', () => {
  const name = document.getElementById('usernameField').value;
  const email = document.getElementById('emailField').value;
  const message = document.getElementById('messageField').value;
  const formData = { name, email, message };
  localStorage.setItem('formData', JSON.stringify(formData));
});
/* ---------------------Local storage code above----------------------------- */
