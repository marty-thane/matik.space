const setup = ()  => {
  const pList = document.querySelectorAll('p, li');
  pList.forEach(p => noMoreLonelyWords(p));
};

const clearWordBreaks = (target) => target.textContent = target.textContent.replace(/\u00a0/g, ' ');

const hasOnlyText = (element) => {
  return element.childNodes.every(node => node.nodeType === Node.TEXT_NODE);
};

const noMoreLonelyWords = (target) => {
  // Do not touch paragraphs with non-text children
  if !hasOnlyText(target)) return;

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
