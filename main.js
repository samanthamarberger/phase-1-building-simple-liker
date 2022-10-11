// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartBtn  = document.getElementsByClassName('like-glyph');

function heartTapped(event) {
  const btn = event.target;
  mimicServerCall()
  .then(function(serverMessage){
    //alert(serverMessage);
    if (btn.innerText === EMPTY_HEART) {
      btn.innerText = FULL_HEART;
      btn.className = 'activated-heart';
    }
    else {
      btn.innerText = EMPTY_HEART;
      //btn.className = '';
      btn.classList.remove('activated-heart');
    }
  })
  .catch(function(error) {
    //alert(error.message);

    const regularHeader = document.getElementById("modal")
    regularHeader.classList.remove('hidden');
    regularHeader.innerText = error;
    console.log(error);
    setTimeout(() => regularHeader.className = 'hidden', 3000);


    /*const errorMessage = document.createElement('div');
    errorMessage.innerHTML = '<div id="modal"><h2>Error!</h2><p id="modal-message></p></div>';
    regularHeader.parentNode.replaceChild(errorMessage, regularHeader);
    setTimeout(errorMessage.parentNode.replaceChild(regularHeader, errorMessage, 3000));
    */
  });
}

for (const button of heartBtn) {
  button.addEventListener ("click", heartTapped);
}

/*for (button of heartBtn) {
  button.addEventListener('click', function() {
    mimicServerCall()
    .then(function (data){
      let heart = document.querySelector(`<span class="like-glyph>">'♡'</span>`);
      const newItem = document.createElement('li');
      newItem.innerHTML = `<span class="like-glyph">'♥'</span>`;
      heart.parentNode.replaceChild(newItem, heart);
    })
    .catch(function(e) {
      alert(e.message);

      const regularHeader = document.getElementById("modal")
      const errorMessage = document.createElement('div');
      errorMessage.innerHTML = '<div id="modal"><h2>Error!</h2><p id="modal-message></p></div>';
      regularHeader.parentNode.replaceChild(errorMessage, regularHeader);
    })
  });
}*/




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
