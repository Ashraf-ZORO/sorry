// كود لتوليد قلوب عائمة عشوائية في الخلفية تلقائياً
function createHeart() {
    const container = document.getElementById('heartsContainer');
    if (!container) return;

    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    
    // تحديد موقع أفقي عشوائي وحجم عشوائي للقلب
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    
    // تحديد سرعة حركة عشوائية لكل قلب
    const duration = Math.random() * 3 + 3; // بين 3 إلى 6 ثواني
    heart.style.animationDuration = duration + 's';
    
    container.appendChild(heart);
    
    // حذف القلب بعد ما تخلص حركته عشان المتصفح ميهنجش
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// تشغيل إنتاج القلوب كل 400 مللي ثانية
setInterval(createHeart, 400);

// محاولة تشغيل الأغنية تلقائياً بمجرد ما تضغط في أي مكان في الصفحة
document.addEventListener('click', () => {
    const music = document.getElementById('bgMusic');
    if (music && music.paused) {
        music.play().catch(err => console.log("المتصفح يحتاج تفاعل لتشغيل الصوت: ", err));
    }
});
