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
about.className = 'about-me-section'
about.id = 'about';


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
        <img id="img1" src="images/Img Placeholder.png" alt="">
        <img id="img2" src="images/Img Placeholder (3).png" alt="">
    </div>        
    <div class="work-content">
        <h2>Multi-Post-Stories</h2>
        <p>
            A daily selection of privately personalized 
            <br> reads; no accounts or sign-ups required.
            <br> has been the industry's standard dummy
             text ever since the 1500s, when an 
            <br> unknown printer took a standard dummy
            <br> text.
        </p>
        <div class="btn">
            <ul>
                <li>CSS</li>
                <li>HTML</li>
                <li>Bootstrap</li>
                <li>Rubyy</li>
            </ul>
        </div>
        <div class="see_more_btn">
            <button class="view-project">See Projects</button>
        </div> 
    </div>
</div>
<div class="work-container">
    <div class="project-section first-em">
      <h2>Profesional Art <br>
          Printing Data
      </h2>
      <p>
          A daily selection of privately  <br> 
          personalized reads; no accounts or <br> 
          sign-ups required. Has been the <br> 
          industry's standard.
      </p>
      <div class="btn">
          <ul>
              <li>HTML</li>
              <li>Bootstrap</li>
              <li>Ruby</li>
          </ul>
      </div>
      <div class="see-btn">
          <button class="view-project">See Projects</button>
      </div>
      </div>
      <div class="project-section first-mob">
        <h2>Profesional Art <br>
            Printing Data
        </h2>
        <p>
            A daily selection of privately  <br> 
            personalized reads; no accounts or <br> 
            sign-ups required. Has been the <br> 
            industry's standard.
        </p>
        <div class="btn">
            <ul>
                <li>HTML</li>
                <li>Bootstrap</li>
                <li>Ruby</li>
            </ul>
        </div>
        <div class="see-btn">
            <button>See Projects</button>
        </div>
        </div>
        <div class="project-section first-mob">
            <h2>Profesional Art <br>
                Printing Data
            </h2>
            <p>
                A daily selection of privately  <br> 
                personalized reads; no accounts or <br> 
                sign-ups required. Has been the <br> 
                industry's standard.
            </p>
            <div class="btn">
                <ul>
                    <li>HTML</li>
                    <li>Bootstrap</li>
                    <li>Ruby</li>
                </ul>
            </div>
            <div class="see-btn">
                <button>See Projects</button>
            </div>
            </div>
            <div class="project-section first-mob">
                <h2>Profesional Art <br>
                    Printing Data
                </h2>
                <p>
                    A daily selection of privately  <br> 
                    personalized reads; no accounts or <br> 
                    sign-ups required. Has been the <br> 
                    industry's standard.
                </p>
                <div class="btn">
                    <ul>
                        <li>HTML</li>
                        <li>Bootstrap</li>
                        <li>Ruby</li>
                    </ul>
                </div>
                <div class="see-btn">
                    <button>See Projects</button>
                </div>
                </div>
                <div class="project-section first-mob">
                    <h2>Profesional Art <br>
                        Printing Data
                    </h2>
                    <p>
                        A daily selection of privately  <br> 
                        personalized reads; no accounts or <br> 
                        sign-ups required. Has been the <br> 
                        industry's standard.
                    </p>
                    <div class="btn">
                        <ul>
                            <li>HTML</li>
                            <li>Bootstrap</li>
                            <li>Ruby</li>
                        </ul>
                    </div>
                    <div class="see-btn">
                        <button>See Projects</button>
                    </div>
                    </div>
                    <div class="project-section first-mob">
                        <h2>Profesional Art <br>
                            Printing Data
                        </h2>
                        <p>
                            A daily selection of privately  <br> 
                            personalized reads; no accounts or <br> 
                            sign-ups required. Has been the <br> 
                            industry's standard.
                        </p>
                        <div class="btn">
                            <ul>
                                <li>HTML</li>
                                <li>Bootstrap</li>
                                <li>Ruby</li>
                            </ul>
                        </div>
                        <div class="see-btn">
                            <button>See Projects</button>
                        </div>
                        </div>
      <div class="project-section second desk-btn">
        <div class="project-section-box">
            <h2>Data Dashboard <br>
                Healthcare
             </h2>
              <p>
                  A daily selection of privately  <br> 
                  personalized reads; no accounts or <br> 
                  sign-ups required. Has been the <br> 
                  industry's standard.
              </p>
              <div class="btn">
                  <ul>
                      <li>HTML</li>
                      <li>Bootstrap</li>
                      <li>Ruby</li>
                  </ul>
              </div>
              <div class="see-btn">
                  <button>See Projects</button>
              </div>
        </div>
      </div>
      <div class="project-section third desk-btn">
          <div class="project-section-box">
              <h2>Website Portfolio</h2>
              <p>
                  A daily selection of privately  <br> 
                  personalized reads; no accounts or <br> 
                  sign-ups required. Has been the <br> 
                  industry's standard.
              </p>
              <div class="btn">
                  <ul>
                      <li>HTML</li>
                      <li>Bootstrap</li>
                      <li>Ruby</li>
                  </ul>
              </div>
              <div class="see-btn">
                  <button>See Projects</button>
              </div>
          </div>
            
      </div>
      <div class="project-section desk-btn">
        <div class="project-section-box">
            <h2>Profesional Art <br>
                Printing Data
            </h2>
            <p>
                A daily selection of privately  <br> 
                personalized reads; no accounts or <br> 
                sign-ups required. Has been the <br> 
                industry's standard.
            </p>
            <div class="btn">
                <ul>
                    <li>HTML</li>
                    <li>Bootstrap</li>
                    <li>Ruby</li>
                </ul>
            </div>
            <div class="see-btn">
                <button>See Projects</button>
            </div>
        </div>
         
      </div>
      <div class="project-section second desk-btn">
        <div class="project-section-box">
            <h2>Data Dashboard <br>
                Healthcare
             </h2>
              <p>
                  A daily selection of privately  <br> 
                  personalized reads; no accounts or <br> 
                  sign-ups required. Has been the <br> 
                  industry's standard.
              </p>
              <div class="btn">
                  <ul>
                      <li>HTML</li>
                      <li>Bootstrap</li>
                      <li>Ruby</li>
                  </ul>
              </div>
              <div class="see-btn">
                  <button>See Projects</button>
              </div>
        </div>
        
      </div>
      <div class="project-section third desk-btn">
        <div class="project-section-box">
            <h2>Website Portfolio</h2>
            <p>
                A daily selection of privately  <br> 
                personalized reads; no accounts or <br> 
                sign-ups required. Has been the <br> 
                industry's standard.
            </p>
            <div class="btn">
                <ul>
                    <li>HTML</li>
                    <li>Bootstrap</li>
                    <li>Ruby</li>
                </ul>
            </div>
            <div class="see-btn">
                <button>See Projects</button>
            </div>
        </div>
          
      </div>
  </div>
`;
portfolio.appendChild(portfolioContainer);
body.appendChild(portfolio);

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
//about.appendChild(aboutMe);
body.appendChild(about);


// /* ---------------------hamburger start here! below----------------------------- */
// const hamburger = document.querySelector('.hamburger');
// const Menu = document.querySelector('.navtabs');
// const backMenu = document.querySelectorAll('#list');

// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('active');
//   Menu.classList.toggle('active');
// });

// backMenu.forEach((element) => element.addEventListener('click', () => {
//   hamburger.classList.remove('active');
//   Menu.classList.remove('active');
// }));

// /* ---------------------hamburger code above----------------------------- */

// /* ---------------------Windows popup code below----------------------------- */

// const view = document.querySelectorAll('.view-project');
// view.forEach((element) => element.addEventListener('click', () => {
//   const show = document.createElement('div');
//   const detailPop = document.createElement('div');
//   show.className = 'show';
//   detailPop.className = 'pop';
//   detailPop.innerHTML = `
//                   <div class="popup-header">
//                     <h2>Keeping track of hundreds 
//                      of components website</h2>
//                     <span id="close">&times;</span>
//                   </div>
//                     <div class="popup-button">
//                       <button>HTML</button>
//                       <button>Boostrap</button>
//                       <button>Ruby on rails</button>
//                     </div>
//                   <div class="popup-body">
//                     <img src="images/Snap.png" alt="">
//                     <div class="pop-details">
//                       <p>
//                       Lorem Ipsum is simply dummy text of the 
//                       printing and typesetting industry. 
//                       Lorem Ipsum has been the industry's 
//                       standard dummy text ever since the 1500s, 
//                       when an unknown printer took a
//                        galley of type and scrambled it 1960s.
//                       </p>

//                       <p>
//                       Lorem Ipsum is simply dummy text of the printing and 
//                       typesetting industry. Lorem Ipsum has been the industry's 
//                       standard dummy text ever since the 1500s,
//                        when an unknown 
//                       printer took a galley of type
//                        and scrambled it 1960s 
//                       with the releax map lapora verita.
//                       </p>
//                       <div class="popup-button">
//                         <button class="popup-btn">See live</button>
//                         <button class="popup-btn">See Source <i class="fa fa-github" aria-hidden="true"></i></button>
//                       </div>
//                     </div>
//                   </div>

//   `;
//   show.appendChild(detailPop);
//   body.appendChild(show);

//   const close = document.querySelector('#close');

//   close.addEventListener('click', () => {
//     body.removeChild(show);
//   });
// }));

// /* ---------------------Windows popup code above----------------------------- */
