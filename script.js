// navigation Script
const menuIcon = document.querySelector('.fa-bars');
const mobileMenuList = document.querySelector('.mobile-menu-pane');
const mobileHeader = document.querySelector('.intro');
const bodyS = document.querySelector('.body');

menuIcon.addEventListener('click', () => {
  mobileHeader.classList.toggle('header-bg');
  menuIcon.classList.toggle('fa-xmark');
  mobileMenuList.classList.toggle('opened');
  bodyS.classList.toggle('stopScroll');
});

function removeStuffs() {
  mobileMenuList.classList.remove('opened');
  menuIcon.classList.remove('fa-xmark');
  mobileHeader.classList.remove('header-bg');
  bodyS.classList.remove('stopScroll');
}

// Speaker object prototype
function Speaker(fullname, title, desc, img) {
  this.fullname = fullname;
  this.title = title;
  this.desc = desc;
  this.img = img;
}

function getSpeakers() {
// create array to store projects
  let speakers = [];
  const speakerInfo1 = new Speaker('Dr Mahamudu Bawumia', ' Associate Professor of Innovation and Entrepreneurship', 'A Design Strategist and a Tech Enthusiast', 'img/alhaji-mahamudu-bawumia.jpeg');
  const speakerInfo2 = new Speaker('Hon. Ursula Owusu', 'Minister of Communication and Digital Economy', 'A Design Strategist and a Tech Enthusiast', 'img/ursula-owusu.hpeg.jpg');
  const speakerInfo3 = new Speaker('Hon. Dr. Kwaku Afriyie', 'Minister, Environment, Science, Technology and Innovation (MESTI)', 'A Design Strategist and a Tech Enthusiast', 'img/hon-kwaku-afriyie.jpeg');
  const speakerInfo4 = new Speaker('Dr Gordon Adomdza', 'Associate Professor of Innovation and Entrepreneurship', 'A Design Strategist and a Tech Enthusiast', 'img/gordon.jpg');
  const speakerInfo5 = new Speaker('Dr Mudasir Issah', 'Associate Professor of Innovation and Entrepreneurship', 'A Design Strategist and a Tech Enthusiast', 'img/mypic.jpg');
  const speakerInfo6 = new Speaker('Dr Abiola Adeniyi Atohulla', 'Associate Professor of Innovation and Entrepreneurship', 'A Design Strategist and a Tech Enthusiast', 'img/AbiOla.jpeg');
  speakers = [speakerInfo1, speakerInfo2, speakerInfo3, speakerInfo4, speakerInfo5, speakerInfo6];
  return speakers;
}

function prepareSpeaker(speakers) {
  const speakerSection = document.getElementById('speakers');
  const buttomDiv = document.createElement('div');
  const bottomP = document.createElement('p');
  bottomP.innerHTML = 'MORE';
  const bottomI = document.createElement('i');
  bottomI.classList.toggle('fa-solid', 'fa-chevron-down');
  bottomI.classList.toggle('fa-chevron-down');
  buttomDiv.classList.toggle('border-speakers');
  const heading = document.createElement('h3');
  const divider = document.createElement('hr');
  speakerSection.appendChild(heading);
  speakerSection.appendChild(divider);
  divider.classList.toggle('divider');
  const speakersContainer = document.createElement('div');
  speakersContainer.classList.toggle('speakers');
  heading.innerHTML = 'Featured Speakers';
  for (let i = 0; i < speakers.length; i += 1) {
    const speakerContainer = document.createElement('div');
    speakerContainer.classList.toggle('speaker');
    const speakerImage = document.createElement('img');
    const speakerDetailsContainer = document.createElement('div');
    const speakerName = document.createElement('h3');
    const speakerTitle = document.createElement('cite');
    speakerTitle.classList.toggle('subtitle');
    const speakerTitleDivider = document.createElement('div');
    speakerTitleDivider.classList.toggle('divide-cite');
    const speakerDescription = document.createElement('p');

    // Set Values to the elements
    speakerImage.src = speakers[i].img;
    speakerName.innerHTML = speakers[i].fullname;
    speakerTitle.innerHTML = speakers[i].title;
    speakerDescription.innerHTML = speakers[i].desc;

    // Append Elements to their right Div
    speakerContainer.appendChild(speakerImage);
    speakerDetailsContainer.appendChild(speakerName);
    speakerDetailsContainer.appendChild(speakerTitle);
    speakerDetailsContainer.appendChild(speakerTitleDivider);
    speakerDetailsContainer.appendChild(speakerDescription);
    speakerContainer.appendChild(speakerDetailsContainer);

    // Attach to main Section
    speakersContainer.appendChild(speakerContainer);
    speakerSection.append(speakersContainer);
  }
  buttomDiv.appendChild(bottomP);
  buttomDiv.appendChild(bottomI);
  speakerSection.append(buttomDiv);
}

function displayWorks() {
  prepareSpeaker(getSpeakers());
}