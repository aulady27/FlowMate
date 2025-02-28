document.getElementById('symptoms-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Ambil nilai dari form
    const pain = parseInt(document.querySelector('input[name="pain"]:checked').value);
    const duration = parseInt(document.querySelector('input[name="duration"]:checked').value);
    const flow = parseInt(document.querySelector('input[name="flow"]:checked').value);
    const regularity = parseInt(document.querySelector('input[name="regularity"]:checked').value);
  
    // Analisis gejala
    const totalScore = pain + duration + flow + regularity;
    let resultText = '';
  
    if (totalScore <= 3) {
      resultText = 'Gejala Anda tergolong ringan. Tetap pantau siklus menstruasi Anda.';
    } else if (totalScore <= 6) {
      resultText = 'Gejala Anda tergolong sedang. Pertimbangkan untuk berkonsultasi dengan dokter.';
    } else {
      resultText = 'Gejala Anda tergolong parah. Segera konsultasikan dengan dokter.';
    }
  
    // Tampilkan hasil analisis
    document.getElementById('analysis-result').textContent = resultText;
    document.querySelector('.analysis').classList.remove('hidden');
  });
  
  document.querySelector('.recommendation-button').addEventListener('click', function () {
    const resultText = document.getElementById('analysis-result').textContent;
    let recommendationText = '';
  
    if (resultText.includes('ringan')) {
      recommendationText = 'Anda dapat mencoba tips kesehatan menstruasi di halaman beranda kami.';
    } else if (resultText.includes('sedang')) {
      recommendationText = 'Anda disarankan untuk berkonsultasi dengan dokter untuk pemeriksaan lebih lanjut.';
    } else {
      recommendationText = 'Segera hubungi dokter untuk mendapatkan penanganan yang tepat.';
    }
  
    // Tampilkan rekomendasi
    document.getElementById('recommendation-text').textContent = recommendationText;
    document.querySelector('.recommendation').classList.remove('hidden');
  });