const speakerList = document.querySelector('.speaker-list');
const speakerOne = {
  sName: 'Lorem ipsum',
  jobTitle: 'Lorem ipsum dolor sit amet',
  sImg: 'images/speak.png',
  sWords: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, quisquam!',
};
const speakerTwo = {
  sName: 'Lorem ipsum',
  jobTitle: 'Lorem ipsum dolor sit amet',
  sImg: 'images/speak.png',
  sWords: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, quisquam!',
};
const speakerThree = {
  sName: 'Lorem ipsum',
  jobTitle: 'Lorem ipsum dolor sit amet',
  sImg: 'images/speak.png',
  sWords: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, quisquam!',
};
const speakerFour = {
  sName: 'Lorem ipsum',
  jobTitle: 'Lorem ipsum dolor sit amet',
  sImg: 'images/speak.png',
  sWords: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, quisquam!',
};
const speakerDataArr = [speakerOne, speakerTwo, speakerThree, speakerFour];
const speaker = document.createElement('div');
speaker.className = 'speaker';
const s_img = document.createElement('div');
s_img.className = 's-img';
const s_details = document.createElement('div');
const s_bar = document.createElement('div');
