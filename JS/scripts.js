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
    // 各セクションIDに応じてページ移動
    if (sectionId === 'hero') {
        // Homeの場合
        if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
            // 既にindex.htmlにいる場合はヒーローセクションにスクロール
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
        } else {
            // 他のページからindex.htmlに移動
            window.location.href = 'index.html';
        }
    } else if (sectionId === 'like-section') {
        // like.htmlに移動
        if (window.location.pathname.includes('like.html')) {
            // 既にlike.htmlにいる場合はページトップにスクロール
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        } else {
            window.location.href = 'like.html';
        }
    } else if (sectionId === 'anime-section') {
        // anime.htmlに移動
        if (window.location.pathname.includes('anime.html')) {
            // 既にanime.htmlにいる場合はページトップにスクロール
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        } else {
            window.location.href = 'anime.html';
        }
    } else if (sectionId === 'game-section') {
        // game.htmlに移動
        if (window.location.pathname.includes('game.html')) {
            // 既にgame.htmlにいる場合はページトップにスクロール
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        } else {
            window.location.href = 'game.html';
        }
    } else if (sectionId === 'about-section') {
        // about-sectionを表示する（index.htmlでのみ）
        if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
            showAboutSection();
        } else {
            // 他のページからindex.htmlに移動してからabout-sectionを表示
            sessionStorage.setItem('scrollToSection', sectionId);
            window.location.href = 'index.html';
        }
    } else if (sectionId === 'contact-section') {
        // contact.htmlに移動
        if (window.location.pathname.includes('contact.html')) {
            // 既にcontact.htmlにいる場合はページトップにスクロール
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        } else {
            window.location.href = 'contact.html';
        }
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

// Contact フォーム処理
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // フォームデータを取得
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // 簡単なバリデーション
            if (!name || !email || !message) {
                alert('すべての項目を入力してください。');
                return;
            }
            
            // 送信成功のメッセージ（実際の送信処理はサーバー側で実装）
            alert('お問い合わせを受け付けました。ありがとうございます！\n\n※これはデモ画面です。実際の送信は行われません。');
            
            // フォームをリセット
            contactForm.reset();
        });
    }
});

// like.html用の詳細表示機能
function toggleLikeDetail(detailId) {
    const detailElement = document.getElementById(detailId);
    if (!detailElement) return;
    
    const isVisible = detailElement.style.display !== 'none';
    
    if (isVisible) {
        // フェードアウト
        detailElement.style.opacity = '0';
        detailElement.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            detailElement.style.display = 'none';
        }, 300);
    } else {
        // フェードイン
        detailElement.style.display = 'block';
        detailElement.style.opacity = '0';
        detailElement.style.transform = 'translateY(-20px)';
        
        // 強制的にスタイルを適用
        detailElement.offsetHeight;
        
        detailElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        detailElement.style.opacity = '1';
        detailElement.style.transform = 'translateY(0)';
        
        // スムーススクロール
        setTimeout(() => {
            detailElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'nearest'
            });
        }, 100);
    }
}
