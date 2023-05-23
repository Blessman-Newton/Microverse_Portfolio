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
                    <h2>Keeping track of hundreds 
                     of components website</h2>
                    <span id="close">&times;</span>
                  </div>
                    <div class="popup-button">
                      <button>HTML</button>
                      <button>Boostrap</button>
                      <button>Ruby on rails</button>
                    </div>
                  <div class="popup-body">
                    <img src="images/Snap.png" alt="">
                    <div class="pop-details">
                      <p>
                      Lorem Ipsum is simply dummy text of the 
                      printing and typesetting industry. 
                      Lorem Ipsum has been the industry's 
                      standard dummy text ever since the 1500s, 
                      when an unknown printer took a
                       galley of type and scrambled it 1960s.
                      </p>

                      <p>
                      Lorem Ipsum is simply dummy text of the printing and 
                      typesetting industry. Lorem Ipsum has been the industry's 
                      standard dummy text ever since the 1500s,
                       when an unknown 
                      printer took a galley of type
                       and scrambled it 1960s 
                      with the releax map lapora verita.
                      </p>
                      <div class="popup-button">
                        <button class="popup-btn">See live</button>
                        <button class="popup-btn">See Source <i class="fa fa-github" aria-hidden="true"></i></button>
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

/* ---------------------Windows popup code above----------------------------- */
