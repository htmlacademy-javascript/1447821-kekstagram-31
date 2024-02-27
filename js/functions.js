function result (string, maxSymbols){
  return (string.length <= maxSymbols) ? 'true' : 'false';
}

function comparesStringLength (string, length) {
  if (string.length <= length){
    return true;
  } else {
  return false;
  }
}
