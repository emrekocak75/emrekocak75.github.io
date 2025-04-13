// Şifreyi kontrol et
function checkPassword() {
  const password = document.getElementById('password').value;
  const correctPassword = '010621'; // Şifreyi buraya gir

  if (password === correctPassword) {
    // Giriş başarılı, galeriyi göster
    document.getElementById('login').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';

    // Müzik çalmaya başlasın
    const music = document.getElementById('background-music');
    music.play(); // Müzik başlasın
  } else {
    // Şifre yanlışsa hata mesajını göster
    document.getElementById('error-message').style.display = 'block';
  }
}
