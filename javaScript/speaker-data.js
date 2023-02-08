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
const sDataArrLen = speakerDataArr.length;
function speakerDataAdd() {
  for (let b = 0; b < sDataArrLen; b++) {
    const speaker = document.createElement('div');
    speaker.className = 'speaker';
    const s_img = document.createElement('div');
    s_img.className = 's-img';
    const s_details = document.createElement('div');
    s_details.className = 's-details';
    const s_bar = document.createElement('div');
    s_bar.className = 's-bar';
    const imgSpeaker = document.createElement('img');
    const sH2Name = document.createElement('h2');
    sH2Name.className = 'black';
    const sJobTitle = document.createElement('p');
    sJobTitle.className = 'job-title orange';
    const sWord = document.createElement('p');
    sWord.className = 'black s-word';
    imgSpeaker.src = speakerDataArr[b].sImg;
    sH2Name.textContent = speakerDataArr[b].sName;
    sJobTitle.textContent = speakerDataArr[b].jobTitle;
    sWord.textContent = speakerDataArr[b].sWords;
    s_img.appendChild(imgSpeaker);
    speaker.appendChild(s_img);
    speakerList.appendChild(speaker);
    s_details.appendChild(sH2Name);
    s_details.appendChild(sJobTitle);
    s_details.appendChild(s_bar);
    s_details.appendChild(sWord);
    speaker.appendChild(s_details);
    speakerList.appendChild(speaker);
  }
  return speakerList;
}

speakerDataAdd();
