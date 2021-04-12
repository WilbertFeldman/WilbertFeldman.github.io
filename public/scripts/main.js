window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    document.querySelector('#scrollButton').style.display = 'block';
  } else {
    document.querySelector('#scrollButton').style.display = 'none';
  }
}

document.querySelector('#scrollButton').onclick = () => {
  document.documentElement.scrollTop = 0; 
}
