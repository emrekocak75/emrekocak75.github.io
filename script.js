function checkPassword() {
  const password = document.getElementById('password').value;
  const correctPassword = '010621';

  if (password === correctPassword) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';

    const music = document.getElementById('background-music');
    music.play();
  } else {
    document.getElementById('error-message').style.display = 'block';
  }
}
