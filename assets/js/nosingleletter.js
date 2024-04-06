const setup = ()  => {
  const pList = document.querySelectorAll('p');
  pList.forEach(p => noMoreLonelyWords(p));
};

const clearWordBreaks = (target) => target.textContent = target.textContent.replace(/\u00a0/g, ' ');

const noMoreLonelyWords = (target) => {
  // Do not touch MathJax elements
  if (target.querySelector('.MathJax')) return;

  let textArray = target.textContent.split(' ');
  let newTextArray = [];
  textArray.forEach((word, i, list) => {
    let textEntry = '';
    if(word.length === 1)
      textEntry = word + '\xa0';
    else
      textEntry = word + ' ';
    newTextArray.push(textEntry);
  });
  target.textContent = newTextArray.join('');
};

const updateWordBreaks = (target) => {
  clearWordBreaks(target);
  noMoreLonelyWords(target);
};

// Load
window.addEventListener('load', setup);
