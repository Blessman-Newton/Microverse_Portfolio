const workData = [
  {
    image: ['images/Img Placeholder (3).png', 'images/holder.png'],
    title: 'Multi-Post-Stories',
    description: `
          A daily selection of privately personalized reads; no accounts 
          or sign-ups required. has been the industry standard dummy text 
          ever since the 1500s, when anunknown printer took a standard dummy text.',
  
        `,
    list: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
    link: 'https://github.com/Blessman-Newton/Microverse_Portfolio',
    live_see: 'https://blessman-newton.github.io/Microverse_Portfolio/',
  },
];

const portfolioData = [
  {
    image: ['images/Img Placeholder (6).png',
      'images/holder.png',
      'images/Img Placeholder (2).png',
      'images/Img Placeholder (4).png',
      'images/Placeholder.png',
      'images/aya.png',
      'images/snapsmall.png'],
    title: 'Data Dashboard Healthcare',
    description: `
        A daily selection of privately reads;
         no accounts or sign-ups
         required. has been the industry standard.
    
          `,
    list: ['HTML', 'Boostrap', 'Ruby'],
  },
  {
    title: 'Website Portfolio',
    list: ['HTML', 'Boostrap', 'Ruby'],
  },
  {
    image: ['images/Img Placeholder (3).png', 'images/holder.png'],
    title: 'Profesional Art <br> Printing Data',
    description: `
          A daily selection of privately personalized reads; no accounts 
          or sign-ups required. has been the industry standard. 
      
            `,
    list: ['HTML', 'Boostrap', 'Ruby'],
    button: 'See Project',
  },
];

const hr = document.createElement('hr');
hr.className = 'hr';

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
document.addEventListener('DOMContentLoaded', () => {
  /*
    variable to be use to create
    html tag in js
*/

  const body = document.querySelector('body');

  const homeSection = document.createElement('section');
  homeSection.id = 'home';
  const container = document.createElement('div');
  container.className = 'container';

  const portfolio = document.createElement('section');
  portfolio.id = 'portfolio';
  const portfolioContainer = document.createElement('div');
  portfolioContainer.className = 'work-section';

  const about = document.createElement('section');
  about.className = 'about-me-section';
  about.id = 'about';

  const contact = document.createElement('section');
  contact.id = 'contact';
  contact.className = 'contact-form';

  const footer = document.createElement('footer');
  footer.className = 'footer';
  /*
    variable to be use to create
    html tag in js ---Ends here---
*/
  /*
    Work section
      and
    hero section below
*/
  container.innerHTML = `
  <div class="row">
  <div class="header-content">
      <h1>Hey There. <br> I'm Blessman.</h1>
      <h2>I'm a Software Developer</h2>
      <p class="text">
          I can help you build a product , feature
          or website Look through some of my 
          work and experience! If you like what you 
          see and have a project you need coded, 
          don’t hesitate to contact me.
      </p>
  </div>
  <div class="icon">
      <ul>
          <li><a href="https://github.com/BlessmanNewton"><i class="fa fa-github" aria-hidden="true"></i></a></li>
          <li><a href="https://linkedin.com/BlessmanNewton"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="https://angellist.com/BlessmanNewton"><i class="fa fa-angellist" aria-hidden="true"></i></a></li>
          <li><a href="https://twitter.com/BlessmanNewton"><i class="fa fa-twitter" aria-hidden="true"></i></i></a></li>
          <li><a href="https://medium.com/BlessmanNewton"><i class="fa fa-medium" aria-hidden="true"></i></a></li>
      </ul>
  </div>       
  </div>
  </div>
  `;
  homeSection.appendChild(container);
  body.appendChild(homeSection);

  portfolioContainer.innerHTML = `
  <div class="recent-work">
      <h3>My Recent Works</h3>
      <hr class="recent-hr">
  </div>
  <div class="project-box">
      <div class="img-holder">
          <img id="img1" src="${workData[0].image[1]}" alt="">
          <img id="img2" src="${workData[0].image[0]}" alt="">
      </div>        
      <div class="work-content">
          <h2>${workData[0].title}</h2>
          <p>
              ${workData[0].description}
          </p>
          <div class="btn">
              <ul>
              <li>${workData[0].list[0]}</li>
              <li>${workData[0].list[1]}</li>
              <li>${workData[0].list[2]}</li>
              <li>${workData[0].list[3]}</li>
              </ul>
          </div>
          <div class="see_more_btn">
              <button class="view-project">${workData[0].button}</button>
          </div> 
      </div>
  </div>
  <div class="work-container">
      <div class="project-section first-em">
        <h2>
        ${portfolioData[2].title}
        </h2>
        <p>
        ${portfolioData[2].description}
        </p>
        <div class="btn">
            <ul>
                <li>${portfolioData[2].list[0]}</li>
                <li>${portfolioData[2].list[1]}</li>
                <li>${portfolioData[2].list[2]}</li>
            </ul>
        </div>
        <div class="see-btn">
            <button class="view-project">${portfolioData[2].button}</button>
        </div>
        </div>
        <div class="project-section first-mob">
          <h2>
          ${portfolioData[2].title}
          </h2>
          <p>
          ${portfolioData[2].description}
          </p>
          <div class="btn">
              <ul>
              <li>${portfolioData[2].list[0]}</li>
              <li>${portfolioData[2].list[1]}</li>
              <li>${portfolioData[2].list[2]}</li>
              </ul>
          </div>
          <div class="see-btn">
              <button class="view-project">${portfolioData[2].button}</button>
          </div>
          </div>
          <div class="project-section first-mob">
              <h2>${portfolioData[2].title}
              </h2>
              <p>
                  A daily selection of privately  <br> 
                  personalized reads; no accounts or <br> 
                  sign-ups required. Has been the <br> 
                  industry's standard.
              </p>
              <div class="btn">
                  <ul>
                      <li>${portfolioData[2].list[0]}</li>
                      <li>${portfolioData[2].list[1]}</li>
                      <li>${portfolioData[2].list[2]}</li>
                  </ul>
              </div>
              <div class="see-btn">
                  <button class="view-project">See Projects</button>
              </div>
              </div>
              <div class="project-section first-mob">
                  <h2>
                    ${portfolioData[2].title}
                  </h2>
                  <p>
                      ${portfolioData[2].description}
                  </p>
                  <div class="btn">
                      <ul>
                            <li>${portfolioData[2].list[0]}</li>
                            <li>${portfolioData[2].list[1]}</li>
                            <li>${portfolioData[2].list[2]}</li>
                      </ul>
                  </div>
                  <div class="see-btn">
                      <button class="view-project">See Projects</button>
                  </div>
                  </div>
                  <div class="project-section first-mob">
                      <h2>
                        ${portfolioData[2].title}
                      </h2>
                      <p>
                          ${portfolioData[2].description}
                      </p>
                      <div class="btn">
                          <ul>
                              <li>${portfolioData[2].list[0]}</li>
                            <li>${portfolioData[2].list[1]}</li>
                            <li>${portfolioData[2].list[2]}</li>
                          </ul>
                      </div>
                      <div class="see-btn">
                          <button class="view-project">See Projects</button>
                      </div>
                      </div>
                      <div class="project-section first-mob">
                          <h2>
                            ${portfolioData[2].title}
                          </h2>
                          <p>
                             ${portfolioData[2].description}
                          </p>
                          <div class="btn">
                              <ul>
                                  <li>${portfolioData[2].list[0]}</li>
                            <li>${portfolioData[2].list[1]}</li>
                            <li>${portfolioData[2].list[2]}</li>
                              </ul>
                          </div>
                          <div class="see-btn">
                              <button class="view-project">See Projects</button>
                          </div>
                          </div>
        <div class="project-section second desk-btn">
          <div class="project-section-box">
              <h2>
                ${portfolioData[0].title}
               </h2>
                <p>
                    ${portfolioData[2].description}
                </p>
                <div class="btn">
                    <ul>
                        <li>${portfolioData[2].list[0]}</li>
                            <li>${portfolioData[2].list[1]}</li>
                            <li>${portfolioData[2].list[2]}</li>
                    </ul>
                </div>
                <div class="see-btn">
                    <button class="view-project">See Projects</button>
                </div>
          </div>
        </div>
        <div class="project-section third desk-btn">
            <div class="project-section-box">
                <h2>${portfolioData[1].title}</h2>
                <p>
                    ${portfolioData[2].description}
                </p>
                <div class="btn">
                    <ul>
                        <li>${portfolioData[2].list[0]}</li>
                            <li>${portfolioData[2].list[1]}</li>
                            <li>${portfolioData[2].list[2]}</li>
                    </ul>
                </div>
                <div class="see-btn">
                    <button class="view-project">See Projects</button>
                </div>
            </div>
              
        </div>
        <div class="project-section desk-btn">
          <div class="project-section-box">
              <h2>
                    ${portfolioData[2].title}
              </h2>
              <p>
                 ${portfolioData[2].description}
              </p>
              <div class="btn">
                  <ul>
                      <li>${portfolioData[2].list[0]}</li>
                            <li>${portfolioData[2].list[1]}</li>
                            <li>${portfolioData[2].list[2]}</li>
                  </ul>
              </div>
              <div class="see-btn">
                  <button class="view-project">See Projects</button>
              </div>
          </div>
           
        </div>
        <div class="project-section second desk-btn">
          <div class="project-section-box">
              <h2>${portfolioData[0].title}
               </h2>
                <p>
                    ${portfolioData[2].description}
                </p>
                <div class="btn">
                    <ul>
                        <li>${portfolioData[2].list[0]}</li>
                            <li>${portfolioData[2].list[1]}</li>
                            <li>${portfolioData[2].list[2]}</li>
                    </ul>
                </div>
                <div class="see-btn">
                    <button class="view-project">See Projects</button>
                </div>
          </div>
          
        </div>
        <div class="project-section third desk-btn">
          <div class="project-section-box">
              <h2>${portfolioData[1].title}</h2>
              <p>
                  ${portfolioData[2].description}
              </p>
              <div class="btn">
                  <ul>
                      <li>${portfolioData[2].list[0]}</li>
                            <li>${portfolioData[2].list[1]}</li>
                            <li>${portfolioData[2].list[2]}</li>
                  </ul>
              </div>
              <div class="see-btn">
                  <button class="view-project">See Projects</button>
              </div>
          </div>
            
        </div>
    </div>
  
  `;

  portfolio.appendChild(portfolioContainer);
  body.appendChild(portfolio);
  /*
    Work section
      and
    hero section above
*/
  /*
    about section
      and
    get resume section below
*/
  about.innerHTML = `
  <div class="about-me">
      <h1>About me</h3>
      <p>
          Hello I’m a software developer! I can help <br>
          you build a product , feature or website <br>
          Look through some of my work and <br> 
          experience! If you like what you see and 
          <br> have a project you need coded, don’t 
          <br> hesitate to contact me.
      </p>
      <div class="resume-btn">
          <button>Get my resume</button>
      </div>
  </div>
  <hr>
  <div class="about_footer">
  <div class="profile">
     <ul class="ul">
         <li class="list-style Language">Language
             <ul>
                  <li>JavaScript</li>
                  <li>Ruby</li>
                  <li>HTML</li>
                  <li>CSS</li>
              </ul>
          </li>
          <li class="list-style framework">Framework
              <ul>
                  <li>React.js</li>
                  <li>Ruby on Rails</li>
                  <li>RSpec</li>
                  <li>Capybara</li>
               </ul>
           </li>
           <li class="list-style skills">Skills
              <span class="span">................</span>
              <ul>
                  <li>Database Management</li>
                  <li>Version</li>
                  <li>CLI</li>
                  <li>API</li>
                  <li>Web Development</li>
               </ul>
           </li>
     </ul>
     
  </div>
  </div>
  `;
  body.appendChild(about);

  /*  about section
      and
    get resume section above
*/

  // ----contact section below -----

  contact.innerHTML = `
  <div class="contact-info">
      <p>
          I'm always <br> interested in 
          hearing  <br> about new projects, 
          <br> so if you'd like to <br> chat please 
          get in  <br> touch.
      </p>
  </div>
  <form class="contact-form" id="myForm" action="https://formspree.io/f/mdovbjlz" method="post">
      <div class="form-group">
          <input class="input" type="text" name="name" maxlength="30" placeholder="Full name" rows="10" required>
          <input class="input" id="emailField"  type="email" name="email" placeholder="Email address" required>
          <span id="errorField" class="error"></span>
          <textarea name="send" maxlength="399" required>Write me something</textarea>
          <input class="submit" type="submit" value="Get in touch">
          
      </div>
  </form>
  
  `;
  body.appendChild(contact);
  // ----contact section below -----

  hr.innerHTML = `
    <hr class="hr">
  `;
  body.appendChild(hr);


  // Add event listener to the form
  var myForm = document.getElementById("myForm");
  myForm.addEventListener("submit", handleSubmit);
  // ----footer section below -----
  footer.innerHTML = `
  <div class="icon">
      <ul class="nav-menu">
          <li><a href="https://github.com/BlessmanNewton"><i class="fa fa-github" aria-hidden="true"></i></a></li>
          <li><a href="https://linkedin.com/BlessmanNewton"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="https://angellist.com/BlessmanNewton"><i class="fa fa-angellist" aria-hidden="true"></i></a></li>
          <li><a href="https://twitter.com/BlessmanNewton"><i class="fa fa-twitter" aria-hidden="true"></i></i></a></li>
          <li><a href="https://medium.com/BlessmanNewton"><i class="fa fa-medium" aria-hidden="true"></i></a></li>
      </ul>
  </div>
  <hr class="hr_footer">
  `;

  body.appendChild(footer);
  // ----contact section above -----

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
                        <img class="desktop" src="${portfolioData[0].image[5]}" alt="">
                        <img class="mob" src="${portfolioData[0].image[6]}" alt="">
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
                          Lorem Ipsum has been the industry's
                          standard dummy text ever since the 1500s,
                          when an unknown printer took a
                           galley of type and scrambled it 1960s.
                          </p>
                         
                          <div class="popup-button">
                            <button class="popup-btn"><a href="${workData[0].live_see}">See live
                            <i class="fa fa-external-link" aria-hidden="true"></i></a></button>
                            <button class="popup-btn git"><a href="${workData[0].link}">See Source
                                <i class="fa fa-github" aria-hidden="true">
                                </i></a>
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
});
// /* ---------------------Windows popup code above----------------------------- */

