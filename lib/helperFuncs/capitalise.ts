export default function capitalise(text, capitaliseAll = false) {
  if (capitaliseAll) {
    let parts = text.split(' ');
    let returnSentence = '';
    parts.forEach((part, i) => {
      if (i === 0) {
        returnSentence = part;
      } else {
        returnSentence += ` ${part}`;
      }
    })
    return returnSentence;
  }
  return `${text.substr(0,1).toUpperCase()}${text.substr(1)}`;
}
