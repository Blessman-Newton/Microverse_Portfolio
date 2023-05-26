const projectData = document.querySelector('#work-card');
const projectsMob = document.querySelector('#work-card-mobile');

// JavaScript arrays containing work section information

const projects = [
  {
    title: '',
    image: 'images/Img Placeholder (6).png',
    description: '',
    technologies: [],
    button: 'See Project',
    link: '',
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
// Work section template

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
    <ul>
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
// Work section template

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
  const show = document.createElement('div');
  const detailPop = document.createElement('div');
  show.className = 'show';
  detailPop.className = 'pop';
  detailPop.innerHTML = `
                      <div class="popup-header">
                        <h2 class="desktop" id="desktop">Keeping track of hundreds
                         of components website</h2>
                         <h2 class="mob-title">Multi Post Stories</h2>
                        <span id="close">&times;</span>
                      </div>
                        <div class="popup-button">
                          <button id="lists">HTML</button>
                          <button id="lists">Boostrap</button>
                          <button id="lists">Ruby on rails</button>
                        </div>
                      <div class="popup-body">
                        <img class="desktop" src="images/aya.png" alt="">
                        <img class="mob" src="images/snapsmall.png" alt="">
                        <div class="pop-details">
                          <p>
                          Lorem Ipsum is simply dummy text of the
                          printing and typesetting industry.
                          Lorem Ipsum has been the industry's
                          standard dummy text ever since the 1500s,
                          when an unknown printer took a
                           galley of type and scrambled it 1960s.
                          </p>

                          <p class="desktop">
                          Lorem Ipsum is simply dummy text of the
                          printing and typesetting industry.
                          Lorem Ipshum has been the industry's
                          standard dummy text ever since the 1500s,
                          when an unknown printer took a
                           galley of type and scrambled it 1960s.
                          </p>
                         
                          <div class="popup-button">
                            <button class="popup-btn"><a href="">See live  <img class="link-img" src="images/link.png" />
                            </a></button>
                            <button class="popup-btn git"><a href="">See Source <img class="link-img" src="images/vector.png" />
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
}));
// /* ---------------------Windows popup code above----------------------------- */
