// eslint-disable-next-line no-unused-vars
function result (string, maxSymbols){
  return (string.length <= maxSymbols) ? 'true' : 'false';
}

// eslint-disable-next-line no-unused-vars
function comparesStringLength (string, length) {
  if (string.length <= length){
    return true;
  } else {
    return false;
  }
}
