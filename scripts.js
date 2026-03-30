// ===== PLAYLIST DATA =====
const playlist = [
    {
        title: "Iris",
        artist: "Goo Goo Dolls",
        album: "Dizzy Up The Girl",
        year: "1998",
        src: "iris-goo-goo-dolls.mp3",
        cover: "https://pbs.twimg.com/amplify_video_thumb/1308529629615943680/img/edgHGc8avhOs_ZN1.jpg",
        duration: "4:09"
    },
    {
        title: "Just Pretend",
        artist: "Bad Omens",
        album: "The Death of Peace of Mind",
        year: "2022",
        src: "just-pretend-bad-omens.mp3",
        cover: "https://upload.wikimedia.org/wikipedia/en/a/af/TheDeathOfPeaceOfMind.jpg",
        duration: "3:25"
    },
    {
        title: "LoSt",
        artist: "Bring Me The Horizon",
        album: "Post Human: Survival Horror",
        year: "2020",
        src: "lost-bring-me-the-horizon.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b273df51a3d66223e5b01813e0c4",
        duration: "3:25"
    },
    {
        title: "Drown",
        artist: "Bring Me The Horizon",
        album: "That's the Spirit",
        year: "2014",
        src: "drown-bring-me-the-horizon.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b273dcd553dee87b1736d18cc932",
        duration: "3:42"
    },
    {
        title: "Helena",
        artist: "My Chemical Romance",
        album: "Three Cheers for Sweet Revenge",
        year: "2004",
        src: "helena.mp3",
        cover: "https://upload.wikimedia.org/wikipedia/id/7/73/MCRThreeCheers.jpg",
        duration: "3:22"
    },
    {
        title: "I'm Not Okay (I Promise)",
        artist: "My Chemical Romance",
        album: "Three Cheers for Sweet Revenge",
        year: "2004",
        src: "im-not-okay.mp3",
        cover: "https://upload.wikimedia.org/wikipedia/id/7/73/MCRThreeCheers.jpg",
        duration: "3:08"
    },
    {
        title: "I Don't Love You",
        artist: "My Chemical Romance",
        album: "The Black Parade",
        year: "2006",
        src: "i-dont-love-you.mp3",
        cover: "https://upload.wikimedia.org/wikipedia/en/e/ea/Blackparadecover.jpg",
        duration: "3:58"
    },
    {
        title: "Cancer",
        artist: "My Chemical Romance",
        album: "The Black Parade",
        year: "2006",
        src: "cancer.mp3",
        cover: "https://upload.wikimedia.org/wikipedia/en/e/ea/Blackparadecover.jpg",
        duration: "2:22"
    },
    {
        title: "The World Is Ugly",
        artist: "My Chemical Romance",
        album: "Conventional Weapons",
        year: "2013",
        src: "the-world-is-ugly.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b273a67cf0d53d5f2170077e8ef5",
        duration: "4:54"
    },
    {
        title: "December",
        artist: "Neck Deep",
        album: "Life's Not Out to Get You",
        year: "2015",
        src: "december.mp3",
        cover: "https://f4.bcbits.com/img/a2588659074_16.jpg",
        duration: "3:38"
    }
];

// ===== HSK DATA =====
const hskWords = [
    { char: '细节', pinyin: '', meaning: 'bahagia, gembira' },
    { char: '电台', pinyin: 'kāixīn', meaning: 'senang, riang' },
    { char: '恩爱', pinyin: 'yīnyuè', meaning: 'musik' },
    { char: '对比', pinyin: 'péngyou', meaning: 'teman' },
    { char: '入围', pinyin: 'xǐhuān', meaning: 'suka, menyukai' },
    { char: '评委', pinyin: 'mèngxiǎng', meaning: 'mimpi, impian' },
    { char: '如何', pinyin: 'nǔlì', meaning: 'berusaha keras' },
    { char: '瘫痪', pinyin: "kě'ài", meaning: 'lucu, menggemaskan' },
    { char: '离婚', pinyin: 'xuéxí', meaning: 'belajar' },
    { char: '自杀', pinyin: 'měilì', meaning: 'indah, cantik' },
    { char: '抱怨', pinyin: 'xìngfú', meaning: 'kebahagiaan' },
    { char: '爱护', pinyin: 'jīntiān', meaning: 'hari ini' },
    { char: '婚姻', pinyin: 'míngtiān', meaning: 'besok' },
    { char: '吵架', pinyin: 'hē chá', meaning: 'minum teh' },
    { char: '相敬如宾', pinyin: 'hǎochī', meaning: 'enak, lezat' },
    { char: '暗暗', pinyin: 'jiāyóu', meaning: 'semangat!' },
    { char: '轮', pinyin: 'kuàilè', meaning: 'bahagia, gembira' },
    { char: '不耐烦', pinyin: 'kāixīn', meaning: 'senang, riang' },
    { char: '靠', pinyin: 'yīnyuè', meaning: 'musik' },
    { char: '肩膀', pinyin: 'péngyou', meaning: 'teman' },
    { char: '喊', pinyin: 'xǐhuān', meaning: 'suka, menyukai' },
    { char: '伸', pinyin: 'mèngxiǎng', meaning: 'mimpi, impian' },
    { char: '手指', pinyin: 'nǔlì', meaning: 'berusaha keras' },
    { char: '歪歪扭扭', pinyin: "kě'ài", meaning: 'lucu, menggemaskan' },
    { char: '递', pinyin: 'xuéxí', meaning: 'belajar' },
    { char: '脑袋', pinyin: 'měilì', meaning: 'indah, cantik' },
    { char: '叙述', pinyin: 'xìngfú', meaning: 'kebahagiaan' },
    { char: '居然', pinyin: 'jīntiān', meaning: 'hari ini' },
    { char: '催', pinyin: 'míngtiān', meaning: 'besok' },
    { char: '等待', pinyin: 'hē chá', meaning: 'minum teh' },
    { char: '蚊子', pinyin: 'hǎochī', meaning: 'enak, lezat' },
    { char: '半夜', pinyin: 'jiāyóu', meaning: 'semangat!' },
    { char: '叮', pinyin: 'kuàilè', meaning: 'bahagia, gembira' },
    { char: '老婆', pinyin: 'kāixīn', meaning: 'senang, riang' },
    { char: '吵', pinyin: 'yīnyuè', meaning: 'musik' },
    { char: '对', pinyin: 'péngyou', meaning: 'teman' },
    { char: '入围', pinyin: 'xǐhuān', meaning: 'suka, menyukai' },
    { char: '评委', pinyin: 'mèngxiǎng', meaning: 'mimpi, impian' },
    { char: '如何', pinyin: 'nǔlì', meaning: 'berusaha keras' },
    { char: '瘫痪', pinyin: "kě'ài", meaning: 'lucu, menggemaskan' },
    { char: '离婚', pinyin: 'xuéxí', meaning: 'belajar' },
    { char: '自杀', pinyin: 'měilì', meaning: 'indah, cantik' },
    { char: '抱怨', pinyin: 'xìngfú', meaning: 'kebahagiaan' },
    { char: '爱护', pinyin: 'jīntiān', meaning: 'hari ini' },
    { char: '婚姻', pinyin: 'míngtiān', meaning: 'besok' },
    { char: '吵架', pinyin: 'hē chá', meaning: 'minum teh' },
    { char: '相敬如宾', pinyin: 'hǎochī', meaning: 'enak, lezat' },
    { char: '暗暗', pinyin: 'jiāyóu', meaning: 'semangat!' },
];

// ===== ANIME DATA ===7==
const animeList = [
    {
        image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
        title: 'Demon Slayer',
        genre: 'Action · Fantasy',
        rating: '⭐ 9.0'
    },
    {
        image: 'https://cdn.myanimelist.net/images/anime/1441/122795.jpg',
        title: 'Spy x Family',
        genre: 'Comedy · Slice of Life',
        rating: '⭐ 8.8'
    },
    {
        image: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg',
        title: 'Nanatsu No Tanzai',
        genre: 'Action · Fantasy',
        rating: '⭐ 9.5'
    },
    {
        image: 'https://cdn.myanimelist.net/images/anime/1522/128039.jpg',
        title: 'Re:Zero',
        genre: 'Drama · Fantasy',
        rating: '⭐ 9.9'
    },
    {
        image: 'https://cdn.myanimelist.net/images/anime/1613/102576.jpg',
        title: 'Dr. Stone',
        genre: 'Sci-Fi · Adventure',
        rating: '⭐ 9.8'
    },
    {
        image: 'https://cdn.myanimelist.net/images/anime/1070/99783.jpg',
        title: 'A Silent Voice',
        genre: 'Drama · Romance',
        rating: '⭐ 9.3'
    },
    {
        image: 'https://cdn.myanimelist.net/images/anime/1244/138851.jpg',
        title: 'One Piece',
        genre: 'Adventure · Fantasy',
        rating: '⭐ 9.4'
    },
    {
        image: 'https://cdn.myanimelist.net/images/anime/1398/154957.jpg',
        title: "Howl's Moving Castle",
        genre: 'Fantasy · Romance',
        rating: '⭐ 9.2'
    },
];

// ===== PLAYER STATE =====
let currentTrack = 0;
let isShuffled = false;
let isRepeating = false;
let shuffledOrder = [];
let previousVolume = 0.7;

// DOM refs
const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const nowBarPlay = document.getElementById('nowBarPlay');
const vinylEl = document.getElementById('vinylRecord');

// ===== CLOCK =====
function updateClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2,'0');
    const m = now.getMinutes().toString().padStart(2,'0');
    const days = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'];
    document.getElementById('headerTime').textContent = `${days[now.getDay()]}, ${h}:${m}`;
}
updateClock();
setInterval(updateClock, 10000);

// ===== PANEL NAVIGATION =====
function openPage(name) {
    document.getElementById('panel-' + name).classList.add('open');
    document.getElementById('panelOverlay').classList.add('visible');
    // Bounce animation on card
    const card = document.querySelector(`.card-${name}`);
    if (card) {
        card.style.transform = 'scale(0.93)';
        setTimeout(() => { card.style.transform = ''; }, 200);
    }
}

function closePanel(name) {
    document.getElementById('panel-' + name).classList.remove('open');
    document.getElementById('panelOverlay').classList.remove('visible');
}

function closeAllPanels() {
    document.querySelectorAll('.side-panel').forEach(p => p.classList.remove('open'));
    document.getElementById('panelOverlay').classList.remove('visible');
}

function openAbout() {
    document.getElementById('aboutModal').classList.add('open');
}

function closeAbout() {
    document.getElementById('aboutModal').classList.remove('open');
}

function closeAboutCheck(e) {
    if (e.target === document.getElementById('aboutModal')) closeAbout();
}

// ===== RENDER PLAYLIST =====
function renderPlaylist() {
    const container = document.getElementById('playlistContainer');
    container.innerHTML = '';
    const order = isShuffled ? shuffledOrder : playlist.map((_, i) => i);

    order.forEach(trackIdx => {
        const track = playlist[trackIdx];
        const isActive = trackIdx === currentTrack;
        const el = document.createElement('div');
        el.className = 'playlist-item' + (isActive ? ' active' : '');
        el.innerHTML = `
            <img src="${track.cover}" alt="${track.title}" class="pl-cover"
                 onerror="this.src='https://placehold.co/44x44/6bab6b/ffffff?text=♪'">
            <div class="pl-info">
                <div class="pl-title">${track.title}</div>
                <div class="pl-artist">${track.artist}</div>
            </div>
            <span class="pl-dur">${track.duration}</span>
            <span class="pl-icon">${isActive ? '🔊' : '▶'}</span>
        `;
        el.addEventListener('click', () => {
            currentTrack = trackIdx;
            loadTrack(currentTrack);
            if (audio.paused) togglePlay();
        });
        container.appendChild(el);
    });

    updatePlaylistStats();
}

function updatePlaylistStats() {
    const totalSecs = playlist.reduce((acc, t) => {
        const [m, s] = t.duration.split(':').map(Number);
        return acc + m * 60 + s;
    }, 0);
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    document.getElementById('playlistStats').textContent =
        `${playlist.length} lagu · ${mins}:${secs.toString().padStart(2,'0')}`;
}

// ===== LOAD TRACK =====
function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.src;
    audio.load();

    document.getElementById('nowPlayingTitle').textContent = track.title;
    document.getElementById('nowPlayingArtist').textContent = track.artist;
    document.getElementById('nowPlayingAlbum').textContent = `${track.album} (${track.year})`;

    const cover = document.getElementById('nowPlayingCover');
    cover.src = track.cover;
    cover.onerror = () => { cover.src = 'https://placehold.co/88x88/6bab6b/ffffff?text=♪'; };

    document.getElementById('nowBarTitle').textContent = track.title;
    document.getElementById('nowBarArtist').textContent = track.artist;

    renderPlaylist();
}

// ===== PLAY / PAUSE =====
function togglePlay() {
    if (audio.paused) {
        audio.play().catch(() => {});
        setPlayingUI(true);
    } else {
        audio.pause();
        setPlayingUI(false);
    }
}

function setPlayingUI(playing) {
    const icon = playing ? '⏸' : '▶';
    playPauseBtn.textContent = icon;
    nowBarPlay.textContent = icon;

    const wave = document.getElementById('nowBarWave');
    if (playing) {
        vinylEl.classList.add('playing');
        document.getElementById('eqWrapper').classList.add('eq-playing');
        wave.classList.add('playing');
    } else {
        vinylEl.classList.remove('playing');
        document.getElementById('eqWrapper').classList.remove('eq-playing');
        wave.classList.remove('playing');
    }
}

// ===== PROGRESS =====
audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    document.getElementById('progressFill').style.width = pct + '%';
    const m = Math.floor(audio.currentTime / 60);
    const s = Math.floor(audio.currentTime % 60);
    document.getElementById('currentTime').textContent = m + ':' + (s < 10 ? '0' : '') + s;
});

audio.addEventListener('loadedmetadata', () => {
    const m = Math.floor(audio.duration / 60);
    const s = Math.floor(audio.duration % 60);
    document.getElementById('totalTime').textContent = m + ':' + (s < 10 ? '0' : '') + s;
});

function seek(e) {
    const rect = document.getElementById('progressBar').getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = pct * audio.duration;
}

// ===== VOLUME =====
document.getElementById('volumeSlider').addEventListener('input', function() {
    const v = parseFloat(this.value);
    audio.volume = v;
    previousVolume = v;
    updateVolumeUI(v);
});

function updateVolumeUI(v) {
    document.getElementById('volumeLevel').style.width = (v * 100) + '%';
    document.getElementById('volumePercent').textContent = Math.round(v * 100) + '%';
    document.getElementById('volumeIcon').textContent = v === 0 ? '🔇' : v < 0.5 ? '🔉' : '🔊';
}

function toggleMute() {
    if (audio.volume > 0) {
        previousVolume = audio.volume;
        audio.volume = 0;
        document.getElementById('volumeSlider').value = 0;
        updateVolumeUI(0);
    } else {
        audio.volume = previousVolume;
        document.getElementById('volumeSlider').value = previousVolume;
        updateVolumeUI(previousVolume);
    }
}

// ===== PREV / NEXT =====
function getOrder() {
    return isShuffled ? shuffledOrder : playlist.map((_, i) => i);
}

function prevTrack() {
    const order = getOrder();
    const pos = order.indexOf(currentTrack);
    currentTrack = order[pos > 0 ? pos - 1 : order.length - 1];
    loadTrack(currentTrack);
    if (!audio.paused) audio.play().catch(() => {});
}

function nextTrack() {
    const order = getOrder();
    const pos = order.indexOf(currentTrack);
    if (pos < order.length - 1) {
        currentTrack = order[pos + 1];
    } else if (isRepeating) {
        currentTrack = order[0];
    } else {
        setPlayingUI(false);
        return;
    }
    loadTrack(currentTrack);
    if (!audio.paused) audio.play().catch(() => {});
}

audio.addEventListener('ended', () => {
    if (isRepeating) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
    } else {
        nextTrack();
    }
});

// ===== SHUFFLE / REPEAT =====
function toggleShuffle() {
    isShuffled = !isShuffled;
    if (isShuffled) {
        const others = playlist.map((_, i) => i).filter(i => i !== currentTrack);
        for (let i = others.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [others[i], others[j]] = [others[j], others[i]];
        }
        shuffledOrder = [currentTrack, ...others];
    }
    document.getElementById('shuffleBtn').classList.toggle('on', isShuffled);
    renderPlaylist();
}

function toggleRepeat() {
    isRepeating = !isRepeating;
    document.getElementById('repeatBtn').classList.toggle('on', isRepeating);
}

// ===== KEYBOARD =====
document.addEventListener('keydown', e => {
    if (e.target.matches('input, textarea')) return;
    if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
    if (e.code === 'ArrowRight' && e.ctrlKey) { e.preventDefault(); nextTrack(); }
    if (e.code === 'ArrowLeft' && e.ctrlKey) { e.preventDefault(); prevTrack(); }
    if (e.code === 'Escape') closeAllPanels();
});

// ===== KEWEN (课文) DATA =====
const kwn = [
    { 
        id: 1,
        title: '课文 1 · 恩爱夫妻', 
        content: '电台要选出一堆最恩爱的夫妻。对比后，有三对夫妻入围。评委问他们："你们是如何保持恩爱的？"第一对夫妻说："我们每天都会说晚安。"第二对夫妻说："我们从不吵架。"第三对夫妻说："我们相敬如宾，互相爱护。"评委听后非常感动。'
    },
    { 
        id: 2,
        title: '课文 2 · 生活小故事', 
        content: '小明每天都很努力学习中文。他喜欢听电台，也喜欢看中国电视剧。有一天，他在路上遇到一个中国朋友。朋友问他："你的中文怎么这么好？"小明笑着说："因为我每天都练习啊！"朋友竖起大拇指说："你真厉害！"'
    },
    { 
        id: 3,
        title: '课文 3 · 我的梦想', 
        content: '每个人都有自己的梦想。我的梦想是去中国旅行。我想看长城，想吃北京烤鸭，还想交很多中国朋友。虽然学习中文很难，但是我会坚持。妈妈说："只要有梦想，就要努力去实现。"我点点头说："我一定会加油的！"'
    }
];

// State untuk kewen
let currentKwnId = null;

// ===== RENDER DAFTAR KEWEN (hanya judul) =====
function renderKwn() {
    const container = document.getElementById('kwnList');
    if (!container) return;
    
    container.innerHTML = '';
    
    kwn.forEach(item => {
        const lessonDiv = document.createElement('div');
        lessonDiv.className = 'lesson-item';
        if (currentKwnId === item.id) lessonDiv.classList.add('active');
        lessonDiv.dataset.id = item.id;
        lessonDiv.dataset.title = item.title;
        lessonDiv.dataset.content = item.content;
        lessonDiv.dataset.search = (item.title + item.content).toLowerCase();
        
        lessonDiv.innerHTML = `
            <span class="lesson-title">${item.title}</span>
            <span class="lesson-badge">📖 baca</span>
        `;
        
        lessonDiv.onclick = () => {
            // Hapus active dari semua
            document.querySelectorAll('#kwnList .lesson-item').forEach(el => {
                el.classList.remove('active');
            });
            lessonDiv.classList.add('active');
            currentKwnId = item.id;
            showKwnContent(item.id, getCurrentKwnSearchKeyword());
        };
        
        container.appendChild(lessonDiv);
    });
}

// ===== TAMPILKAN KONTEN KEWEN YANG DIPILIH =====
function showKwnContent(id, keyword = '') {
    const item = kwn.find(i => i.id === id);
    if (!item) return;
    
    const contentArea = document.getElementById('kwnContentArea');
    if (!contentArea) return;
    
    let contentHtml = item.content;
    
    // Highlight keyword jika ada
    if (keyword && keyword.trim() !== '') {
        const regex = new RegExp(`(${escapeRegex(keyword)})`, 'gi');
        contentHtml = contentHtml.replace(regex, '<mark>$1</mark>');
    }
    
    contentArea.innerHTML = `
        <div class="lesson-full-title">${item.title}</div>
        <div class="lesson-full-content">${contentHtml}</div>
    `;
}

// ===== FILTER KEWEN (highlight pada daftar dan konten) =====
let kwnSearchTimeout;

function filterKwn() {
    const searchInput = document.getElementById('kewenSearch');
    if (!searchInput) return;
    
    const keyword = searchInput.value.toLowerCase();
    const items = document.querySelectorAll('#kwnList .lesson-item');
    
    let visibleCount = 0;
    
    items.forEach(item => {
        const searchData = item.dataset.search;
        if (keyword === '' || searchData.includes(keyword)) {
            item.style.display = 'flex';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });
    
    // Jika ada konten yang sedang dibuka, update highlight-nya
    if (currentKwnId !== null && keyword !== '') {
        showKwnContent(currentKwnId, keyword);
    } else if (currentKwnId !== null) {
        showKwnContent(currentKwnId, '');
    }
    
    // Tampilkan empty state jika tidak ada hasil
    const contentArea = document.getElementById('kwnContentArea');
    if (visibleCount === 0 && contentArea && !contentArea.querySelector('.lesson-full-title')) {
        contentArea.innerHTML = `
            <div class="empty-state">
                🦆 tidak ada课文 dengan kata "${keyword}"~
            </div>
        `;
    }
}

// Helper function untuk escape regex
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
// ===== RENDER DAFTAR HSK (hanya judul/karakter) =====
let currentHskIndex = null;

function renderHskList() {
    const container = document.getElementById('hskList');
    if (!container) return;
    
    container.innerHTML = '';
    
    hskWords.forEach((item, index) => {
        const wordDiv = document.createElement('div');
        wordDiv.className = 'lesson-item';
        if (currentHskIndex === index) wordDiv.classList.add('active');
        wordDiv.dataset.index = index;
        wordDiv.dataset.char = item.char;
        wordDiv.dataset.pinyin = item.pinyin;
        wordDiv.dataset.meaning = item.meaning;
        wordDiv.dataset.search = (item.char + item.pinyin + item.meaning).toLowerCase();
        
        wordDiv.innerHTML = `
            <span class="lesson-title">${item.char} · ${item.meaning}</span>
            <span class="lesson-badge">📖 pelajari</span>
        `;
        
        wordDiv.onclick = () => {
            document.querySelectorAll('#hskList .lesson-item').forEach(el => {
                el.classList.remove('active');
            });
            wordDiv.classList.add('active');
            currentHskIndex = index;
            showHskContent(index, getCurrentHskSearchKeyword());
        };
        
        container.appendChild(wordDiv);
    });
}

// ===== TAMPILKAN KONTEN HSK =====
function showHskContent(index, keyword = '') {
    const item = hskWords[index];
    if (!item) return;
    
    const contentArea = document.getElementById('hskContentArea');
    if (!contentArea) return;
    
    let meaningHtml = item.meaning;
    let pinyinHtml = item.pinyin;
    
    // Highlight keyword
    if (keyword && keyword.trim() !== '') {
        const regex = new RegExp(`(${escapeRegex(keyword)})`, 'gi');
        meaningHtml = meaningHtml.replace(regex, '<mark>$1</mark>');
        pinyinHtml = pinyinHtml.replace(regex, '<mark>$1</mark>');
    }
    
    contentArea.innerHTML = `
        <div class="lesson-full-title">
            <span style="font-size: 2rem;">${item.char}</span>
        </div>
        <div class="lesson-full-content">
            <p><strong>📖 Arti:</strong> ${meaningHtml}</p>
            <p><strong>🔤 Pinyin:</strong> ${pinyinHtml || '-'}</p>
            <hr style="margin: 16px 0; border-color: rgba(107,171,107,0.2);">
            <p style="font-size: 0.9rem; color: var(--text-soft);">
                💡 <em>${item.char}</em> adalah kata HSK yang sering digunakan~
            </p>
        </div>
    `;
}

// ===== FILTER HSK =====
let hskSearchTimeout;

function filterHsk() {
    const searchInput = document.getElementById('hskSearch');
    if (!searchInput) return;
    
    const keyword = searchInput.value.toLowerCase();
    const items = document.querySelectorAll('#hskList .lesson-item');
    
    let visibleCount = 0;
    
    items.forEach(item => {
        const searchData = item.dataset.search;
        if (keyword === '' || searchData.includes(keyword)) {
            item.style.display = 'flex';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });
    
    // Update highlight konten yang sedang dibuka
    if (currentHskIndex !== null && keyword !== '') {
        showHskContent(currentHskIndex, keyword);
    } else if (currentHskIndex !== null) {
        showHskContent(currentHskIndex, '');
    }
    
    // Empty state
    const contentArea = document.getElementById('hskContentArea');
    if (visibleCount === 0 && contentArea && !contentArea.querySelector('.lesson-full-title')) {
        contentArea.innerHTML = `
            <div class="empty-state">
                🐸 tidak ada kata dengan "${keyword}"~
            </div>
        `;
    }
}

function getCurrentKwnSearchKeyword() {
    const input = document.getElementById('kewenSearch');
    return input ? input.value : '';
}

function getCurrentHskSearchKeyword() {
    const input = document.getElementById('hskSearch');
    return input ? input.value : '';
}
// ===== TAMPILKAN KONTEN KEWEN YANG DIPILIH =====
function showKwnContent(id, keyword = '') {
    const item = kwn.find(i => i.id === id);
    if (!item) return;
    
    const contentArea = document.getElementById('kwnContentArea');
    if (!contentArea) return;
    
    let contentHtml = item.content;
    
    // Highlight keyword jika ada
    if (keyword && keyword.trim() !== '') {
        const regex = new RegExp(`(${escapeRegex(keyword)})`, 'gi');
        contentHtml = contentHtml.replace(regex, '<mark>$1</mark>');
    }
    
    contentArea.innerHTML = `
        <div class="lesson-full-title">${item.title}</div>
        <div class="lesson-full-content">${contentHtml}</div>
    `;
}

function filterKwn() {
    const searchInput = document.getElementById('kewenSearch');
    if (!searchInput) return;
    
    const keyword = searchInput.value.toLowerCase();
    const items = document.querySelectorAll('#kwnList .lesson-item');
    
    let visibleCount = 0;
    
    items.forEach(item => {
        const searchData = item.dataset.search;
        if (keyword === '' || searchData.includes(keyword)) {
            item.style.display = 'flex';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });
    
    // Jika ada konten yang sedang dibuka, update highlight-nya
    if (currentKwnId !== null && keyword !== '') {
        showKwnContent(currentKwnId, keyword);
    } else if (currentKwnId !== null) {
        showKwnContent(currentKwnId, '');
    }
    
    // Tampilkan empty state jika tidak ada hasil
    const contentArea = document.getElementById('kwnContentArea');
    if (visibleCount === 0 && contentArea && !contentArea.querySelector('.lesson-full-title')) {
        contentArea.innerHTML = `
            <div class="empty-state">
                🦆 tidak ada课文 dengan kata "${keyword}"~
            </div>
        `;
    }
}

// Helper function untuk escape regex
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ===== RENDER ANIME =====
function renderAnime() {
    const grid = document.getElementById('animeGrid');
    animeList.forEach((a, i) => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.style.animationDelay = (i * 0.05) + 's';
        card.innerHTML = `
            <div class="anime-img-wrap">
                <img src="${a.image}" alt="${a.title}" class="anime-img"
                     onerror="this.parentElement.innerHTML='<div class=anime-img-fallback>🎬</div>'">
            </div>
            <div class="anime-title">${a.title}</div>
            <div class="anime-genre">${a.genre}</div>
            <div class="anime-rating">${a.rating}</div>
        `;
        grid.appendChild(card);
    });
}


// ===== QUIZ DATA HSK 4-5 =====
const quizWords = [
    // HSK 4
    { char: '爱好',   pinyin: 'àihào',    meaning: 'hobi, kegemaran' },
    { char: '安静',   pinyin: 'ānjìng',   meaning: 'tenang, hening' },
    { char: '按时',   pinyin: 'ànshí',    meaning: 'tepat waktu' },
    { char: '帮忙',   pinyin: 'bāngmáng', meaning: 'membantu' },
    { char: '表示',   pinyin: 'biǎoshì',  meaning: 'menunjukkan, menyatakan' },
    { char: '出发',   pinyin: 'chūfā',    meaning: 'berangkat' },
    { char: '聪明',   pinyin: 'cōngmíng', meaning: 'cerdas, pintar' },
    { char: '打算',   pinyin: 'dǎsuàn',   meaning: 'berencana, bermaksud' },
    { char: '担心',   pinyin: 'dānxīn',   meaning: 'khawatir, cemas' },
    { char: '地方',   pinyin: 'dìfāng',   meaning: 'tempat, daerah' },
    { char: '方便',   pinyin: 'fāngbiàn', meaning: 'mudah, nyaman' },
    { char: '感谢',   pinyin: 'gǎnxiè',   meaning: 'berterima kasih' },
    { char: '关心',   pinyin: 'guānxīn',  meaning: 'peduli, perhatian' },
    { char: '记得',   pinyin: 'jìde',     meaning: 'ingat, masih ingat' },
    { char: '将来',   pinyin: 'jiānglái', meaning: 'masa depan' },
    { char: '决定',   pinyin: 'juédìng',  meaning: 'memutuskan, keputusan' },
    { char: '礼貌',   pinyin: 'lǐmào',    meaning: 'sopan, kesopanan' },
    { char: '麻烦',   pinyin: 'máfán',    meaning: 'merepotkan, masalah' },
    { char: '认为',   pinyin: 'rènwéi',   meaning: 'menganggap, berpendapat' },
    { char: '声音',   pinyin: 'shēngyīn', meaning: 'suara, bunyi' },
    { char: '提高',   pinyin: 'tígāo',    meaning: 'meningkatkan' },
    { char: '完成',   pinyin: 'wánchéng', meaning: 'menyelesaikan' },
    { char: '兴趣',   pinyin: 'xìngqù',   meaning: 'minat, ketertarikan' },
    { char: '要求',   pinyin: 'yāoqiú',   meaning: 'menuntut, persyaratan' },
    { char: '影响',   pinyin: 'yǐngxiǎng',meaning: 'pengaruh, mempengaruhi' },
    { char: '重要',   pinyin: 'zhòngyào', meaning: 'penting' },
    { char: '注意',   pinyin: 'zhùyì',    meaning: 'memperhatikan' },
    { char: '发展',   pinyin: 'fāzhǎn',   meaning: 'berkembang, perkembangan' },
    { char: '经济',   pinyin: 'jīngjì',   meaning: 'ekonomi' },
    { char: '解决',   pinyin: 'jiějué',   meaning: 'memecahkan, menyelesaikan' },
    // HSK 5
    { char: '抱怨',   pinyin: 'bàoyuàn',  meaning: 'mengeluh, mengadu' },
    { char: '成就',   pinyin: 'chéngjiù', meaning: 'pencapaian, prestasi' },
    { char: '传统',   pinyin: 'chuántǒng',meaning: 'tradisi, tradisional' },
    { char: '道德',   pinyin: 'dàodé',    meaning: 'moral, etika' },
    { char: '独立',   pinyin: 'dúlì',     meaning: 'mandiri, independen' },
    { char: '反对',   pinyin: 'fǎnduì',   meaning: 'menentang, oposisi' },
    { char: '丰富',   pinyin: 'fēngfù',   meaning: 'kaya, melimpah' },
    { char: '公平',   pinyin: 'gōngpíng', meaning: 'adil, keadilan' },
    { char: '鼓励',   pinyin: 'gǔlì',     meaning: 'mendorong, memberi semangat' },
    { char: '环境',   pinyin: 'huánjìng', meaning: 'lingkungan' },
    { char: '坚持',   pinyin: 'jiānchí',  meaning: 'bertahan, gigih' },
    { char: '建立',   pinyin: 'jiànlì',   meaning: 'membangun, mendirikan' },
    { char: '交流',   pinyin: 'jiāoliú',  meaning: 'komunikasi, bertukar' },
    { char: '紧张',   pinyin: 'jǐnzhāng', meaning: 'tegang, gugup' },
    { char: '科技',   pinyin: 'kējì',     meaning: 'sains dan teknologi' },
    { char: '困难',   pinyin: 'kùnnán',   meaning: 'kesulitan, sulit' },
    { char: '目标',   pinyin: 'mùbiāo',   meaning: 'tujuan, sasaran' },
    { char: '培养',   pinyin: 'péiyǎng',  meaning: 'melatih, mengembangkan' },
    { char: '批评',   pinyin: 'pīpíng',   meaning: 'mengkritik, kritik' },
    { char: '确认',   pinyin: 'quèrèn',   meaning: 'mengkonfirmasi' },
    { char: '热情',   pinyin: 'rèqíng',   meaning: 'antusias, bersemangat' },
    { char: '社会',   pinyin: 'shèhuì',   meaning: 'masyarakat, sosial' },
    { char: '态度',   pinyin: 'tàidu',    meaning: 'sikap, perilaku' },
    { char: '体验',   pinyin: 'tǐyàn',    meaning: 'mengalami, pengalaman' },
    { char: '文化',   pinyin: 'wénhuà',   meaning: 'budaya, kebudayaan' },
    { char: '现代',   pinyin: 'xiàndài',  meaning: 'modern, era modern' },
    { char: '信心',   pinyin: 'xìnxīn',   meaning: 'kepercayaan diri, keyakinan' },
    { char: '严格',   pinyin: 'yángé',    meaning: 'ketat, disiplin' },
    { char: '意义',   pinyin: 'yìyì',     meaning: 'makna, arti penting' },
    { char: '智慧',   pinyin: 'zhìhuì',   meaning: 'kebijaksanaan, kecerdasan' },
];

// ===== QUIZ STATE (PERSISTENT) =====
let quizXP          = parseInt(localStorage.getItem('quizXP') || '0');
let quizStreak      = parseInt(localStorage.getItem('quizStreak') || '0');
let quizBestStreak  = parseInt(localStorage.getItem('quizBestStreak') || '0');
let quizTotalAns    = parseInt(localStorage.getItem('quizTotalAns') || '0');
let quizTotalRight  = parseInt(localStorage.getItem('quizTotalRight') || '0');

// Session state
let subMode         = 'both';   // 'both' | 'meaning' | 'pinyin'
let sessionQ        = 0;
let sessionCorrect  = 0;
let sessionWrong    = 0;
let sessionXPGained = 0;
let sessionStreak   = 0;
let sessionBestStreak = 0;
let lives           = 3;
let answered        = false;
let quizQueue       = [];
let wrongWords      = [];        // words answered wrong this session
let currentWord     = null;
let currentQType    = null;     // 'meaning' | 'pinyin'
const SESSION_LEN   = 10;
const XP_PER_LEVEL  = 100;
const PREVIEW_CHARS = ['学','习','语','好','乐','智','心','梦'];
let previewIdx = 0;

// ── HELPERS ──────────────────────────────────────────────
function saveQuiz() {
    localStorage.setItem('quizXP',         quizXP);
    localStorage.setItem('quizStreak',     quizStreak);
    localStorage.setItem('quizBestStreak', quizBestStreak);
    localStorage.setItem('quizTotalAns',   quizTotalAns);
    localStorage.setItem('quizTotalRight', quizTotalRight);
}

function setSubMode(mode) {
    subMode = mode;
    document.querySelectorAll('.submode-pill').forEach(p => p.classList.remove('active'));
    document.getElementById('sm-' + mode).classList.add('active');
}

function updateQuizUI() {
    const level    = Math.floor(quizXP / XP_PER_LEVEL) + 1;
    const xpInLv   = quizXP % XP_PER_LEVEL;
    const pct      = (xpInLv / XP_PER_LEVEL) * 100;
    const acc      = quizTotalAns > 0 ? Math.round((quizTotalRight / quizTotalAns) * 100) : 0;

    document.getElementById('xpBarFill').style.width  = pct + '%';
    document.getElementById('xpBarLabel').textContent = xpInLv + ' / ' + XP_PER_LEVEL + ' XP';
    document.getElementById('xpLevel').textContent    = 'Lv.' + level;
    document.getElementById('qhStreak').textContent   = '🔥 ' + quizStreak;
    document.getElementById('qhXP').textContent       = '⭐ ' + quizXP + ' XP';
    document.getElementById('cardStreak').textContent = '🔥 ' + quizStreak;
    document.getElementById('cardXP').textContent     = '⭐ ' + quizXP + ' XP';

    document.getElementById('statTotal').textContent      = quizTotalAns;
    document.getElementById('statCorrect').textContent    = quizTotalRight;
    document.getElementById('statAccuracy').textContent   = acc + '%';
    document.getElementById('statBestStreak').textContent = quizBestStreak;

    // Rotate preview character on home
    const heroEl = document.getElementById('qheroChar');
    if (heroEl) heroEl.textContent = PREVIEW_CHARS[previewIdx % PREVIEW_CHARS.length];
}

// Animate hero char every 2s while panel open
setInterval(() => {
    previewIdx++;
    const el = document.getElementById('qheroChar');
    if (el) {
        el.style.animation = 'none';
        el.offsetHeight; // reflow
        el.style.animation = '';
        el.textContent = PREVIEW_CHARS[previewIdx % PREVIEW_CHARS.length];
    }
}, 2200);

// ── SCREENS ──────────────────────────────────────────────
function showQuizHome() {
    document.getElementById('quizHome').style.display   = 'block';
    document.getElementById('quizArena').style.display  = 'none';
    document.getElementById('quizResult').style.display = 'none';
    updateQuizUI();
}

function stopQuiz() { showQuizHome(); }

// ── START ─────────────────────────────────────────────────
function startQuiz() {
    // Reset session
    sessionQ = sessionCorrect = sessionWrong = sessionXPGained = sessionStreak = sessionBestStreak = 0;
    lives    = 3;
    answered = false;
    wrongWords = [];

    // Shuffle & slice
    quizQueue = [...quizWords].sort(() => Math.random() - 0.5).slice(0, SESSION_LEN);

    document.getElementById('quizHome').style.display   = 'none';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizArena').style.display  = 'block';

    renderLives();
    loadQuestion();
}

// ── LIVES ─────────────────────────────────────────────────
function renderLives() {
    const row = document.getElementById('livesRow');
    row.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const h = document.createElement('span');
        h.className = 'life-heart' + (i >= lives ? ' lost' : '');
        h.textContent = '❤️';
        row.appendChild(h);
    }
}

function loseLife() {
    lives = Math.max(0, lives - 1);
    renderLives();
    if (lives === 0) {
        // Game over → show result immediately after brief delay
        setTimeout(showResult, 900);
    }
}

// ── LOAD QUESTION ─────────────────────────────────────────
function loadQuestion() {
    if (sessionQ >= SESSION_LEN) { showResult(); return; }

    answered    = false;
    currentWord = quizQueue[sessionQ];

    // Determine question type
    if (subMode === 'both') {
        currentQType = Math.random() > 0.5 ? 'meaning' : 'pinyin';
    } else {
        currentQType = subMode;
    }

    // Progress
    const pct = (sessionQ / SESSION_LEN) * 100;
    document.getElementById('quizProgFill').style.width   = pct + '%';
    document.getElementById('quizProgLabel').textContent  = (sessionQ + 1) + ' / ' + SESSION_LEN;

    // Badge
    document.getElementById('quizTypeBadge').textContent =
        currentQType === 'meaning' ? '🇮🇩 tebak artinya' : '🔤 tebak pinyin-nya';

    // Question card
    const qCard = document.getElementById('quizQCard');
    if (currentQType === 'meaning') {
        qCard.innerHTML = `
            <div class="q-char">${currentWord.char}</div>
            <div class="q-prompt">apa artinya?</div>
        `;
    } else {
        qCard.innerHTML = `
            <div class="q-char">${currentWord.char}</div>
            <div class="q-pinyin-hint">${currentWord.meaning}</div>
            <div class="q-prompt">bagaimana pinyin-nya?</div>
        `;
    }

    // Feedback / buttons reset
    const fb = document.getElementById('quizFeedback');
    fb.style.display = 'none';
    fb.className     = 'quiz-feedback';
    document.getElementById('quizNextBtn').style.display = 'none';
    document.getElementById('quizSkipBtn').style.display = 'block';

    // Build 4 options
    buildOptions();
}

// ── BUILD OPTIONS ─────────────────────────────────────────
function buildOptions() {
    const correctAns = currentQType === 'meaning' ? currentWord.meaning : currentWord.pinyin;

    // Pick 3 unique wrong answers
    const pool = quizWords.filter(w => w.char !== currentWord.char);
    const shuffledPool = pool.sort(() => Math.random() - 0.5);
    const wrongs = shuffledPool.slice(0, 3)
        .map(w => currentQType === 'meaning' ? w.meaning : w.pinyin);

    const options = [correctAns, ...wrongs].sort(() => Math.random() - 0.5);

    const container = document.getElementById('mcOptions');
    container.innerHTML = '';

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className   = 'mc-option';
        btn.textContent = opt;
        btn.onclick     = () => checkAnswer(btn, opt, correctAns);
        container.appendChild(btn);
    });
}

// ── CHECK ANSWER ──────────────────────────────────────────
function checkAnswer(btn, chosen, correct) {
    if (answered) return;
    answered = true;

    // Disable all
    document.querySelectorAll('.mc-option').forEach(b => b.disabled = true);

    const isCorrect = chosen === correct;

    if (isCorrect) {
        btn.classList.add('correct');
        handleCorrect();
    } else {
        btn.classList.add('wrong');
        btn.classList.add('shake');
        // Highlight correct answer
        document.querySelectorAll('.mc-option').forEach(b => {
            if (b.textContent === correct) b.classList.add('correct');
        });
        handleWrong();
    }

    document.getElementById('quizNextBtn').style.display = 'block';
    document.getElementById('quizSkipBtn').style.display = 'none';
    sessionQ++;
}

function handleCorrect() {
    sessionStreak++;
    sessionCorrect++;
    quizStreak++;
    quizTotalAns++;
    quizTotalRight++;

    // XP: base 10 + streak bonus
    const bonus = Math.floor(sessionStreak / 3) * 5;
    const gained = 10 + bonus;
    quizXP        += gained;
    sessionXPGained += gained;

    if (quizStreak    > quizBestStreak)    quizBestStreak    = quizStreak;
    if (sessionStreak > sessionBestStreak) sessionBestStreak = sessionStreak;

    const streakEl = document.getElementById('arenaStreak');
    streakEl.textContent = '🔥 ' + sessionStreak;
    if (sessionStreak >= 3) {
        streakEl.classList.add('hot');
        setTimeout(() => streakEl.classList.remove('hot'), 400);
    }

    const msgs = [
        '✅ benar! 🌿',
        '✅ yesss! 🎉',
        '✅ 对了！✨',
        '✅ mantap! 💪',
    ];
    let msg = msgs[Math.floor(Math.random() * msgs.length)];
    if (sessionStreak >= 3) msg += ` · combo ×${sessionStreak} 🔥 +${bonus} bonus XP!`;
    else msg += ` · +${gained} XP`;

    showFeedback(msg, true);
    saveQuiz();
    updateQuizUI();
}

function handleWrong() {
    sessionStreak = 0;
    sessionWrong++;
    quizStreak    = 0;
    quizTotalAns++;
    wrongWords.push(currentWord);

    document.getElementById('arenaStreak').textContent = '🔥 0';

    const msgs = ['❌ hampir!', '❌ belum nih~', '❌ coba lagi!'];
    const correctLabel = currentQType === 'meaning'
        ? `artinya: ${currentWord.meaning}`
        : `pinyin-nya: ${currentWord.pinyin}`;
    showFeedback(msgs[Math.floor(Math.random() * msgs.length)] + ' · ' + correctLabel, false);

    loseLife();
    saveQuiz();
    updateQuizUI();
}

// ── FEEDBACK ──────────────────────────────────────────────
function showFeedback(msg, correct) {
    const fb = document.getElementById('quizFeedback');
    fb.textContent = msg;
    fb.className   = 'quiz-feedback ' + (correct ? 'correct-fb' : 'wrong-fb');
    fb.style.display = 'block';
}

// ── NEXT / SKIP ───────────────────────────────────────────
function nextQuestion() {
    if (lives === 0) { showResult(); return; }
    loadQuestion();
}

function skipQuestion() {
    sessionQ++;
    sessionStreak = 0;
    quizStreak    = 0;
    document.getElementById('arenaStreak').textContent = '🔥 0';
    updateQuizUI();
    if (sessionQ >= SESSION_LEN || lives === 0) showResult();
    else loadQuestion();
}

// ── RESULT ────────────────────────────────────────────────
function showResult() {
    document.getElementById('quizArena').style.display  = 'none';
    document.getElementById('quizResult').style.display = 'block';

    const total = sessionCorrect + sessionWrong;
    const pct   = total > 0 ? Math.round((sessionCorrect / total) * 100) : 0;

    let emoji = '😅', title = 'Terus semangat ya~';
    if (pct === 100)    { emoji = '🏆'; title = 'Sempurna! 完美！'; }
    else if (pct >= 80) { emoji = '🎉'; title = 'Luar biasa!'; }
    else if (pct >= 60) { emoji = '🌿'; title = 'Bagus nih~'; }
    else if (pct >= 40) { emoji = '🐸'; title = 'Lumayan!'; }

    document.getElementById('resultEmoji').textContent = emoji;
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultSub').textContent   =
        `${pct}% benar · streak terbaik: ${sessionBestStreak} 🔥`;
    document.getElementById('rCorrect').textContent = sessionCorrect;
    document.getElementById('rWrong').textContent   = sessionWrong;
    document.getElementById('rXP').textContent      = '+' + sessionXPGained;

    // Wrong review section
    const reviewSection = document.getElementById('wrongReview');
    const reviewList    = document.getElementById('reviewList');
    if (wrongWords.length > 0) {
        reviewSection.style.display = 'block';
        reviewList.innerHTML = wrongWords.map(w => `
            <div class="review-item">
                <span class="review-char">${w.char}</span>
                <div class="review-info">
                    <div class="review-meaning">${w.meaning}</div>
                    <div class="review-pinyin">${w.pinyin}</div>
                </div>
            </div>
        `).join('');
    } else {
        reviewSection.style.display = 'none';
    }
}

// ===== RENDER KEWEN (课文) =====
function renderKwn() {
    const container = document.getElementById('kwnList');
    if (!container) return;
    
    container.innerHTML = '';
    
    kwn.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'kwn-card';
        // Simpan data untuk pencarian
        card.dataset.search = (item.title + item.content).toLowerCase();
        card.innerHTML = `
            <div class="kwn-title">${item.title}</div>
            <div class="kwn-content">${item.content}</div>
        `;
        container.appendChild(card);
    });
}

// ===== FILTER KEWEN (cari课文) =====
function filterKwn() {
    const searchInput = document.getElementById('kewenSearch');
    if (!searchInput) return;
    
    const keyword = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('#kwnList .kwn-card');
    
    cards.forEach(card => {
        const searchData = card.dataset.search;
        if (keyword === '' || searchData.includes(keyword)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


// ===== INIT =====
audio.volume = 0.7;
updateVolumeUI(0.7);
renderPlaylist();
loadTrack(0);
renderHskList();
renderAnime();
updateQuizUI();
renderKwn();