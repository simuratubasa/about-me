window.addEventListener('DOMContentLoaded', () => {
    console.log('自己紹介サイトが読み込まれました！');
    
    // sessionStorageから移動すべきセクションを取得
    const targetSection = sessionStorage.getItem('scrollToSection');
    if (targetSection) {
        sessionStorage.removeItem('scrollToSection');
        setTimeout(() => {
            scrollToSection(targetSection);
        }, 100);
    }
});

// ナビゲーション機能
function scrollToSection(sectionId) {
    // 現在のページがlike.htmlの場合
    if (window.location.pathname.includes('like.html')) {
        if (sectionId === 'like-section') {
            // 既にlike.htmlにいるので、ページトップにスクロール
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        } else {
            // 他のセクションの場合はindex.htmlに移動してからセクションに移動
            sessionStorage.setItem('scrollToSection', sectionId);
            window.location.href = 'index.html';
        }
        return;
    }
    
    // index.htmlでの既存の処理
    if (sectionId === 'hero') {
        // Homeの場合はヒーローセクションにスクロール
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // 他のセクションを非表示にする
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.style.display = 'none';
        }
    } else if (sectionId === 'about-section') {
        // about-sectionを表示する
        showAboutSection();
    } else if (sectionId === 'like-section') {
        // like.htmlに移動
        window.location.href = 'like.html';
    } else if (sectionId === 'skills-section') {
        // hobbyセクションの場合（将来の拡張用）
        alert('hobby セクションは準備中です');
    } else if (sectionId === 'contact-section') {
        // contactセクションの場合（将来の拡張用）
        alert('contact セクションは準備中です');
    } else {
        // 他のセクションの場合（将来の拡張用）
        alert(`${sectionId} セクションは準備中です`);
    }
}

// About セクション表示機能
function showAboutSection() {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection.style.display === 'none' || aboutSection.style.display === '') {
        aboutSection.style.display = 'block';
        aboutSection.style.animation = 'fadeIn 0.5s ease-in-out';
        // スムーススクロール
        setTimeout(() => {
            aboutSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    } else {
        aboutSection.style.animation = 'fadeOut 0.5s ease-in-out';
        setTimeout(() => {
            aboutSection.style.display = 'none';
        }, 500);
    }
}

// like.html用のナビゲーション機能
function goToIndexPage() {
    window.location.href = 'index.html';
}
