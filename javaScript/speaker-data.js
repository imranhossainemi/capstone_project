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
  for (let b = 0; b < sDataArrLen; b += 1) {
    const speaker = document.createElement('div');
    speaker.className = 'speaker';
    const sPimg = document.createElement('div');
    sPimg.className = 's-img';
    const sPdetails = document.createElement('div');
    sPdetails.className = 's-details';
    const sPbar = document.createElement('div');
    sPbar.className = 's-bar';
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
    sPimg.appendChild(imgSpeaker);
    speaker.appendChild(sPimg);
    speakerList.appendChild(speaker);
    sPdetails.appendChild(sH2Name);
    sPdetails.appendChild(sJobTitle);
    sPdetails.appendChild(sPbar);
    sPdetails.appendChild(sWord);
    speaker.appendChild(sPdetails);
    speakerList.appendChild(speaker);
  }
  return speakerList;
}

speakerDataAdd();
