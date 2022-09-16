const projects = [
  {
    name: 'Tonic',
    clases1: 'CANOPY',
    clases2: '• Back End Dev',
    clases3: '• 2015',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, srambled it 1960s Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releaw, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    ftdImage: './images/works/tonic.png',
    ftdImage1: './images/works/popup.png',
    technologies0: 'html',
    technologies1: 'css',
    technologies2: 'javaScript',
    technologies3: 'github',
    technologies4: 'ruby',
    technologies5: 'bootstrap',
    liveVersion6: 'See live',
    liveVersion: 'See live',
    source: 'See Source',
    closeButton: './images/closeModal.png',
    liveButton: 'images/liveLink.png',
    sourceButton: 'images/sourceLink.png',
  },
  {
    name: 'MultiPost Stories',
    clases1: 'FACEBOOK',
    clases2: '• Full Stack Dev',
    clases3: '• 2015',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    ftdImage: './images/works/stories.png',
    technologies0: 'html',
    technologies1: 'css',
    technologies2: 'javaScript',
    technologies3: 'github',
    technologies4: 'ruby',
    technologies5: 'bootstrap',
    liveVersion6: 'See live',
    liveVersion: 'See live',
    source: 'See Source',
    closeButton: './images/closeModal.png',
    liveButton: 'images/liveLink.png',
    sourceButton: 'images/sourceLink.png',
  },
  {
    name: 'Facebook 360',
    clases1: 'FACEBOOK',
    clases2: '• Full Stack Dev',
    clases3: '• 2015',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    ftdImage: './images/works/tonic2.png',
    technologies0: 'html',
    technologies1: 'css',
    technologies2: 'javaScript',
    technologies3: 'github',
    technologies4: 'ruby',
    technologies5: 'bootstrap',
    liveVersion6: 'See live',
    liveVersion: 'See live',
    source: 'See Source',
    closeButton: './images/closeModal.png',
    liveButton: 'images/liveLink.png',
    sourceButton: 'images/sourceLink.png',
  },
  {
    name: 'Uber Navigation',
    clases1: 'Uber',
    clases2: '• Lead Developer',
    clases3: '• 2018',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    ftdImage: './images/works/stories2.png',
    technologies0: 'html',
    technologies1: 'css',
    technologies2: 'javaScript',
    technologies3: 'github',
    technologies4: 'ruby',
    technologies5: 'bootstrap',
    liveVersion6: 'See live',
    liveVersion: 'See live',
    source: 'See Source',
    closeButton: './images/closeModal.png',
    liveButton: 'images/liveLink.png',
    sourceButton: 'images/sourceLink.png',
  },
];

document.getElementById('seeTonic').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';

  document.getElementById('project-name').textContent = projects[0].name;
  document.getElementById('modal_li1').textContent = projects[0].clases1;
  document.getElementById('modal_li2').textContent = projects[0].clases2;
  document.getElementById('modal_li3').textContent = projects[0].clases3;
  document.getElementById('project-image').src = projects[0].ftdImage;
  document.getElementById('modal_li4').textContent = projects[0].technologies0;
  document.getElementById('modal_li5').textContent = projects[0].technologies1;
  document.getElementById('modal_li6').textContent = projects[0].technologies2;
  document.getElementById('modal_li7').textContent = projects[0].technologies3;
  document.getElementById('modal_li8').textContent = projects[0].technologies4;
  document.getElementById('modal_li9').textContent = projects[0].technologies5;
  document.getElementById('modal-description').textContent = projects[0].description;
  document.getElementById('live-link').textContent = projects[0].liveVersion;
  document.getElementById('source-link').textContent = projects[0].source;
  document.getElementById('modal-close').src = projects[0].closeButton;
  document.getElementById('liveIMG').src = projects[0].liveButton;
  document.getElementById('srcIMG').src = projects[0].sourceButton;
});

document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'none';
});

document.getElementById('seeMultiPost').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';

  document.getElementById('project-name').textContent = projects[1].name;
  document.getElementById('modal_li1').textContent = projects[1].clases1;
  document.getElementById('modal_li2').textContent = projects[1].clases2;
  document.getElementById('modal_li3').textContent = projects[1].clases3;
  document.getElementById('project-image').src = projects[1].ftdImage;
  document.getElementById('modal_li4').textContent = projects[1].technologies0;
  document.getElementById('modal_li5').textContent = projects[1].technologies1;
  document.getElementById('modal_li6').textContent = projects[1].technologies2;
  document.getElementById('modal_li7').textContent = projects[1].technologies3;
  document.getElementById('modal_li8').textContent = projects[1].technologies4;
  document.getElementById('modal_li9').textContent = projects[1].technologies5;
  document.getElementById('modal-description').textContent = projects[1].description;
  document.getElementById('live-link').textContent = projects[1].liveVersion;
  document.getElementById('source-link').textContent = projects[1].source;
  document.getElementById('modal-close').src = projects[1].closeButton;
  document.getElementById('liveIMG').src = projects[1].liveButton;
  document.getElementById('srcIMG').src = projects[1].sourceButton;
});

document.getElementById('seeFacebook').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';

  document.getElementById('project-name').textContent = projects[2].name;
  document.getElementById('modal_li1').textContent = projects[2].clases1;
  document.getElementById('modal_li2').textContent = projects[2].clases2;
  document.getElementById('modal_li3').textContent = projects[2].clases3;
  document.getElementById('project-image').src = projects[2].ftdImage;
  document.getElementById('modal_li4').textContent = projects[2].technologies0;
  document.getElementById('modal_li5').textContent = projects[2].technologies1;
  document.getElementById('modal_li6').textContent = projects[2].technologies2;
  document.getElementById('modal_li7').textContent = projects[2].technologies3;
  document.getElementById('modal_li8').textContent = projects[2].technologies4;
  document.getElementById('modal_li9').textContent = projects[2].technologies5;
  document.getElementById('modal-description').textContent = projects[2].description;
  document.getElementById('live-link').textContent = projects[2].liveVersion;
  document.getElementById('source-link').textContent = projects[2].source;
  document.getElementById('modal-close').src = projects[2].closeButton;
  document.getElementById('liveIMG').src = projects[2].liveButton;
  document.getElementById('srcIMG').src = projects[2].sourceButton;
});

document.getElementById('seeUber').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';

  document.getElementById('project-name').textContent = projects[3].name;
  document.getElementById('modal_li1').textContent = projects[3].clases1;
  document.getElementById('modal_li2').textContent = projects[3].clases2;
  document.getElementById('modal_li3').textContent = projects[3].clases3;
  document.getElementById('project-image').src = projects[3].ftdImage;
  document.getElementById('modal_li4').textContent = projects[3].technologies0;
  document.getElementById('modal_li5').textContent = projects[3].technologies1;
  document.getElementById('modal_li6').textContent = projects[3].technologies2;
  document.getElementById('modal_li7').textContent = projects[3].technologies3;
  document.getElementById('modal_li8').textContent = projects[3].technologies4;
  document.getElementById('modal_li9').textContent = projects[3].technologies5;
  document.getElementById('modal-description').textContent = projects[3].description;
  document.getElementById('live-link').textContent = projects[3].liveVersion;
  document.getElementById('source-link').textContent = projects[3].source;
  document.getElementById('modal-close').src = projects[3].closeButton;
  document.getElementById('liveIMG').src = projects[3].liveButton;
  document.getElementById('srcIMG').src = projects[3].sourceButton;
});

// desktop

document.getElementById('seeTonic2').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';
  document.getElementById('project-name').textContent = projects[0].name;
  document.getElementById('modal_li1').textContent = projects[0].clases1;
  document.getElementById('modal_li2').textContent = projects[0].clases2;
  document.getElementById('modal_li3').textContent = projects[0].clases3;
  document.getElementById('project-image').src = projects[0].ftdImage1;
  document.getElementById('modal_li4').textContent = projects[0].technologies0;
  document.getElementById('modal_li5').textContent = projects[0].technologies1;
  document.getElementById('modal_li6').textContent = projects[0].technologies2;
  document.getElementById('modal_li7').textContent = projects[0].technologies3;
  document.getElementById('modal_li8').textContent = projects[0].technologies4;
  document.getElementById('modal_li9').textContent = projects[0].technologies5;
  document.getElementById('modal-description').textContent = projects[0].description;
  document.getElementById('live-link').textContent = projects[0].liveVersion;
  document.getElementById('source-link').textContent = projects[0].source;
  document.getElementById('modal-close').src = projects[0].closeButton;
  document.getElementById('liveIMG').src = projects[0].liveButton;
  document.getElementById('srcIMG').src = projects[0].sourceButton;
});

document.getElementById('seeMultiPost2').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';

  document.getElementById('project-name').textContent = projects[1].name;
  document.getElementById('modal_li1').textContent = projects[1].clases1;
  document.getElementById('modal_li2').textContent = projects[1].clases2;
  document.getElementById('modal_li3').textContent = projects[1].clases3;
  document.getElementById('project-image').src = projects[0].ftdImage1;
  document.getElementById('modal_li4').textContent = projects[0].technologies0;
  document.getElementById('modal_li5').textContent = projects[0].technologies1;
  document.getElementById('modal_li6').textContent = projects[0].technologies2;
  document.getElementById('modal_li7').textContent = projects[0].technologies3;
  document.getElementById('modal_li8').textContent = projects[0].technologies4;
  document.getElementById('modal_li9').textContent = projects[0].technologies5;
  document.getElementById('modal-description').textContent = projects[0].description;
  document.getElementById('live-link').textContent = projects[0].liveVersion;
  document.getElementById('source-link').textContent = projects[0].source;
  document.getElementById('modal-close').src = projects[0].closeButton;
  document.getElementById('liveIMG').src = projects[0].liveButton;
  document.getElementById('srcIMG').src = projects[0].sourceButton;
});

document.getElementById('seeFacebook2').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';

  document.getElementById('project-name').textContent = projects[2].name;
  document.getElementById('modal_li1').textContent = projects[2].clases1;
  document.getElementById('modal_li2').textContent = projects[2].clases2;
  document.getElementById('modal_li3').textContent = projects[2].clases3;
  document.getElementById('project-image').src = projects[0].ftdImage1;
  document.getElementById('modal_li4').textContent = projects[0].technologies0;
  document.getElementById('modal_li5').textContent = projects[0].technologies1;
  document.getElementById('modal_li6').textContent = projects[0].technologies2;
  document.getElementById('modal_li7').textContent = projects[0].technologies3;
  document.getElementById('modal_li8').textContent = projects[0].technologies4;
  document.getElementById('modal_li9').textContent = projects[0].technologies5;
  document.getElementById('modal-description').textContent = projects[0].description;
  document.getElementById('live-link').textContent = projects[0].liveVersion;
  document.getElementById('source-link').textContent = projects[0].source;
  document.getElementById('modal-close').src = projects[0].closeButton;
  document.getElementById('liveIMG').src = projects[0].liveButton;
  document.getElementById('srcIMG').src = projects[0].sourceButton;
});

document.getElementById('seeUber2').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';

  document.getElementById('project-name').textContent = projects[3].name;
  document.getElementById('modal_li1').textContent = projects[3].clases1;
  document.getElementById('modal_li2').textContent = projects[3].clases2;
  document.getElementById('modal_li3').textContent = projects[3].clases3;
  document.getElementById('project-image').src = projects[0].ftdImage1;
  document.getElementById('modal_li4').textContent = projects[0].technologies0;
  document.getElementById('modal_li5').textContent = projects[0].technologies1;
  document.getElementById('modal_li6').textContent = projects[0].technologies2;
  document.getElementById('modal_li7').textContent = projects[0].technologies3;
  document.getElementById('modal_li8').textContent = projects[0].technologies4;
  document.getElementById('modal_li9').textContent = projects[0].technologies5;
  document.getElementById('modal-description').textContent = projects[0].description;
  document.getElementById('live-link').textContent = projects[0].liveVersion;
  document.getElementById('source-link').textContent = projects[0].source;
  document.getElementById('modal-close').src = projects[0].closeButton;
  document.getElementById('liveIMG').src = projects[0].liveButton;
  document.getElementById('srcIMG').src = projects[0].sourceButton;
});