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
const view = document.querySelector('.view-project');
view.addEventListener('click', () => {
  const show = document.createElement('div');
  const detailPop = document.createElement('div');
  show.className = 'show';
  detailPop.className = 'pop';
  detailPop.innerHTML = `
                  <div class="popup-header">
                    <h2>Project Name</h2>
                    <span id="close">&times;</span>
                  </div>
                    <div class="popup-button">
                      <button>1233</button>
                      <button>4322333</button>
                      <button>3333333</button>
                    </div>
                  <div class="popup-body">
                    <img src="images/Snap.png" alt="">
                      <p>
                      Lorem Ipsum is simply dummy text of the 
                      printing and typesetting industry. 
                      Lorem Ipsum has been the industry's 
                      standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it 1960s.

                      Lorem Ipsum is simply dummy text of the printing and 
                      typesetting industry. Lorem Ipsum has been the industry's 
                      standard dummy text ever since the 1500s, when an unknown 
                      printer took a galley of type and scrambled it 1960s 
                      with the releax map lapora verita.
                      </p>
                    <div class="popup-button">
                      <button>444444</button>
                      <button>444444444</button>
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

/* ---------------------Windows popup code above----------------------------- */
