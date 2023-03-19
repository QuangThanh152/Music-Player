const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const heading = $('header h2')
const cdThumb = $('.cd-frame')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.control-toggle_play')
const player = $('.player')
const progress = $('#progress')
const nextBtn = $('.control-next')
const prevBtn = $('.control-prev')
const randomBtn = $('.control-random')
const repeatSong = $('.control-repeat')
const playlistClick = $('.playlist')

const app = {
    // play, pause ,next music
    currentIndex: 0,
    isplaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: 'Bật tình yêu lên',
            singer: 'Hòa Minz - Tăng Nhật Tâng',
            path: '/assets/music/BatTinhYeuLen-TangDuyTanHoaMinzy-8715666.mp3',
            image: '/assets/img/battylen.jpg'
        },
        {
            name: 'Sao Cũng Được',
            singer: 'Quang Thành hehe',
            path: '/assets/music/Sao-Cung-Duoc-Thanh-Dat.mp3',
            image: '/assets/img/11.jpg'
        },
        {
            name: 'Suy Nghĩ Trong Anh',
            singer: 'Khắc Việt',
            path: '/assets/music/suynghitronganh.mp3',
            image: '/assets/img/3.jpg'
        },
        {
            name: 'Đến Sau 1 Người',
            singer: 'Châu Khải Phong',
            path: '/assets/music/DenSauMotNguoi-ChauKhaiPhong-5530819.mp3',
            image: '/assets/img/4.jpg'
        },
        {
            name: 'Kiếp Má Hồng',
            singer: 'TLong',
            path: '/assets/music/kiepmahong.mp3',
            image: '/assets/img/5.jpg'
        },
        {
            name: 'Em Là Kẻ Đáng Thương',
            singer: 'Phát Huy T4',
            path: '/assets/music/EmLaKeDangThuong-PhatHuyT4-8504796.mp3',
            image: '/assets/img/6.jpg'
        },
        {
            name: 'Người Đáng Thương Là Anh',
            singer: 'Only C',
            path: '/assets/music/NguoiDangThuongLaAnhGuhancciRemix-OnlyC-8540439.mp3',
            image: '/assets/img/7.jpg'
        },
        {
            name: 'Đừng Như Thói Quen',
            singer: 'Jaykii FT Ai Đó',
            path: '/assets/music/dungnhuthoiquen.mp3',
            image: '/assets/img/8.jpg'
        },
        {
            name: 'Tận Cùng Của Nổi Nhớ',
            singer: 'Will FT Hansara',
            path: '/assets/music/tancungnoinho.mp3',
            image: '/assets/img/9.jpg'
        },
        {
            name: 'Người Ấy',
            singer: 'Trịnh T.Bình',
            path: '/assets/music/nguoiay.mp3',
            image: '/assets/img/10.jpg'
        },
        {
            name: 'Em Đồng Ý',
            singer: 'Đực Phúc',
            path: '/assets/music/emdongy.mp3',
            image: '/assets/img/emdongy.jpg'
        },
        {
            name: 'Kiếp Má Hồng Remix',
            singer: '......',
            path: '/assets/music/KiepMaHongRinRemix-TLong-7584148.mp3',
            image: '/assets/img/fallinlove.jpg'
        },
        {
            name: 'Nhất Trên ĐờiĐời',
            singer: 'Vanh',
            path: '/assets/music/nhattrendoi.mp3',
            image: '/assets/img/nhattrendoi.jpg'
        },
        {
            name: 'Fall In Love',
            singer: 'Na',
            path: '/assets/music/fallinlove.mp3',
            image: '/assets/img/fallinlove.jpg'
        },
        {
            name: '11:11P',
            singer: 'Bảo Uyên với Ai Đó ',
            path: '/assets/music/111111Gio11Phut-MiiNaDREAMeRRIN9BaoUyenDREAMeRVietNam-8822645.mp3',
            image: '/assets/img/fallinlove.jpg'
        },
        {
            name: 'Không Yêu Xin Đừng Nói',
            singer: 'của Thằng Nào Đó mà Nhát Search =))',
            path: '/assets/music/khongyeuxindungnoi.mp3',
            image: '/assets/img/cuoi.jpg'
        },
        {
            name: 'Cơn Mưa Ngang Qua',
            singer: 'Sếp',
            path: '/assets/music/sep.mp3',
            image: '/assets/img/hahaah.jpg'
        },
        {
            name: 'Sóng 5 Củ',
            singer: 'Jack 5 Trịu',
            path: '/assets/music/jack5cu.mp3',
            image: '/assets/img/hahaah.jpg'
        },
    ],
    // Render songs
    render: function() {
        const htmls = this.songs.map((song, index)=> {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index = ${index}>
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            `
        })
        playlistClick.innerHTML = htmls.join('')
    },
    // Scroll Top
    handleEvents: function() {
        const _this = this
        const cdWidth = cd.offsetWidth
        // xử lý CD quay / dừng
        const cdThumAnimation = cdThumb.animate([
            {
                transform: 'rotate(360deg)'
            }
        ],
            {
                duration: 10000, //10 giây
                iterations: Infinity //iterations: quay bnh lần 
            })
        // pause lại lúc đầu vào không cho CD quay
        cdThumAnimation.pause();
        //xử lý phóng to thu nhỏ cd
        document.onscroll = function () {
            const scrollt = window.scrollY || document.documentElement.scrollTop
            const newcdWidth = cdWidth - scrollt

            cd.style.width = newcdWidth > 0 ? newcdWidth + 'px' : 0
            cd.style.opacity = newcdWidth / cdWidth
        }
        //xử lý click play để chạy / dừng
        playBtn.onclick = function() {
            if (_this.isplaying) {
                audio.pause()
            }else {
            audio.play()
            }
        }
        // khi song được play
        audio.onplay = function () {
            _this.isplaying = true
            player.classList.add('playing')
            cdThumAnimation.play()

        }
        // khi song bị dừng
        audio.onpause = function () {
            _this.isplaying = false
            player.classList.remove('playing')
            cdThumAnimation.pause()
        }
        // xử lý tiến độ bài hát
        audio.ontimeupdate = function() {
            if (audio.duration) {
                //duration là tổng số giây của bài hát
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
                
            }
            // _this.currentIndex++
            // isplaying:true
        }
        // xử lý khi tua bài hát
        progress.onchange = function(e) {
            const seekTime = audio.duration / 100 * progress.value
            audio.currentTime = seekTime
        }

        // next bài hát
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong()
            }else {
                _this.nextSong()  
            }
           audio.play()
           _this.render()
           _this.scrollToActiveSong();
        }
        //prev bài hát
        prevBtn.onclick = function () {
            if (_this.isRandom) {
                    _this.playRandomSong()
                }else {
                    _this.prevSong()
                }
            audio.play()
           _this.render()
           _this.scrollToActiveSong();
        }
        // random bài hát
        //" người dùng click vào button này, chương trình sẽ làm hai việc:Đảo ngược giá trị của biến isRandom hiện tại. Ban đầu, isRandom được khởi tạo là false. Khi người dùng click vào button, giá trị của biến này sẽ được đảo ngược, nghĩa là nếu ban đầu isRandom là false thì sau khi click, isRandom sẽ thành true."
        //Thêm hoặc xóa class "active" cho element button được chọn (tức là randomBtn) dựa trên giá trị của biến isRandom. Nếu isRandom là true thì class "active" sẽ được thêm vào button, ngược lại class "active" sẽ được xóa bỏ khỏi button.
        //Về cơ bản, đoạn code này sẽ thay đổi trạng thái của button và biến isRandom. Nếu isRandom là true thì button sẽ thêm class "active" và ngược lại.
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active',_this.randomBtn)
        }
        // lặp lại bài hát
        repeatSong.onclick = function(e) {
            _this.isRepeat = !_this.isRepeat
            repeatSong.classList.toggle('active', _this.repeatSong)
        }
        //xử lý khi next bài
        audio.onended = function() {   
            if (_this.isRepeat){
                audio.play()
            }else {
                nextBtn.click();
            }
        }

        //xử lý khi click vào song thì nhận
        playlistClick.onclick = function (e) {
            const songActive = e.target.closest(".song:not(.active)");
            const optionSong = e.target.closest('.option')
            // xử lý khi click vào song
            if (songActive || optionSong) {
                // vì currentIndex là số, nhưng khi get ra từ dataset là thành chuỗi nên convert sang Number
                if (songActive) {
                    _this.currentIndex = Number(songActive.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }
                // xử lý khi click vào lựa chọn(option) của song
                if (optionSong){

                }
            }
        }
    },

    defineProperties: function() {
        //phương thức "get" để trả về giá trị hiện tại của thuộc tính
        Object.defineProperty(this, "currentSong", {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    scrollToActiveSong: function () {
        setTimeout(() => {
          $(".song.active").scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });
        }, 300);
      },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    // next bài hát
    nextSong: function() {
        //tăng bài hát lên
        this.currentIndex++
        // nếu nó đến cuối những bài hát thì cho nó quay về bài đầu tiên
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        // gọi loadCurrentSong cho nó tải lại thông tin mới
        this.loadCurrentSong()
    },
    // prev bài hát
    prevSong: function() {
        //giảm bài hát lên
        this.currentIndex--
        //nếu giá trị của nó mà bé hơn 0 thì "this.songs.length - 1" cho nó resest về phần tử cuối mảng
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        // gọi loadCurrentSong cho nó tải lại thông tin mới
        this.loadCurrentSong()
    },
    //Biến newIndex sẽ được khởi tạo để lưu vị trí của bài hát mới sẽ được chọn ngẫu nhiên.
    //Hàm Math.floor(Math.random() * this.songs.length) sẽ tạo ra một số nguyên không âm ngẫu nhiên từ 0 đến (số bài hát có trong danh sách - 1).
    //Vòng lặp do-while nhằm để đảm bảo rằng bài hát mới được chọn ngẫu nhiên phải khác với bài hát đang được phát (tức là newIndex === this.currentIndex) để tránh việc chọn lại bài hát đang chơi, Nếu số nguyên được tạo ra vẫn là bài hát đang phát, vòng lặp sẽ tiếp tục cho đến khi tạo ra một số nguyên khác.
    //Sau khi có được vị trí của bài hát mới, this.currentIndex sẽ được cập nhật để trỏ đến bài hát mới được chọn, và hàm this.loadCurrentSong() được gọi để tải bài hát mới lên để phát.
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while(newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },


    start: function() {
        // render playlist
        this.render();
        // Lắng nghe/ xử lý các bài hát
        this.handleEvents();
        //định nghĩa các thuộc tính cho object
        this.defineProperties();
        // tải thông tin bài hát đầu tiên
        this.loadCurrentSong();
        randomBtn.classList.toggle("active", this.isRandom);
    }
}
app.start()