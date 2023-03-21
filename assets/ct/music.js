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
            name: 'Love Yourself',
            singer: 'Justin Bieber',
            path: 'https://docs.google.com/uc?id=19es-5kiY7FlFn6nWXqMH96-6jON-IFdf',
            image: 'https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-dep-de-thuong.jpg'
        },
        {
            name: 'Để Giành Khi thức giấc',
            singer: 'Sivan',
            path: 'https://docs.google.com/uc?id=1ypKkpBp7nHtUjrzrf2WZdbq3FxiNl6wo',
            image: 'https://i1.sndcdn.com/artworks-Q94S8OYvGR6YOdzM-5uDpJg-t500x500.jpg'
        },
        {
            name: 'Hẹn em ở lần yêu thứ 2',
            singer: 'Nguyenn Ft Đặng Tuấn Vũ',
            path: 'https://docs.google.com/uc?id=1iLXtos6krnt8XW-jAiDJq2IFgj_p5Z3J',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2023/03/14/a/6/c/5/1678761772034_640.jpg'
        },
        {
            name: 'Là Anh (成为)',
            singer: 'Mộng Nhiên',
            path: 'https://docs.google.com/uc?id=1cdCoxAC8LMzioVNWLAL5a4xvHTsvF9AO',
            image: 'https://bedental.vn/wp-content/uploads/2022/11/hot-girl.jpg'
        },
        {
            name: 'Darkside',
            singer: 'Alan Walker',
            path: 'https://docs.google.com/uc?id=1yOolip1Pdo-mMt_k32MlEtREiBanOQUT',
            image: 'https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg'
        },
        {
            name: 'Playdate',
            singer: 'Melanie Martinez',
            path: 'https://docs.google.com/uc?id=1fz5--b6-2l3FHJ6dlJqrJkDf0_mEs-52',
            image: 'https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/w660/Uploaded/lce_jwqqc/2020_10_13/3_1602581704108161769165.jpg'
        },
        {
            name: 'Clean Bandit',
            singer: 'Symphony',
            path: 'https://docs.google.com/uc?id=1zNKzuT05eWCitcP7TrhxTSkTzaxVfYEA',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XXqG65fLWHO1_UD6MlO3eIZM4ncNECNTxw&usqp=CAU'
        },
        {
            name: 'Chỉ là muốn nói 3000',
            singer: 'Khải',
            path: 'https://docs.google.com/uc?id=1dUk8ltEAWfftd1M2eo08iZkSNVbQ1r8N',
            image: 'https://i.ex-cdn.com/giadinhonline.vn/files/content/2021/07/31/hotgirl-le-phuong-anh-13-1402588.jpg'
        },
        {
            name: 'Imagine',
            singer: 'Demons',
            path: 'https://docs.google.com/uc?id=1_FCKWjnmFMeMpA2cqOksl3w4O1ZU6a8M',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5aohD4OfYpzHbABdxn0wkBfISqirmmCMQ7A&usqp=CAU'
        },
        {
            name: 'Âm Thầm Bên Ghệ',
            singer: 'Sơn Tùng MTP',
            path: 'https://docs.google.com/uc?id=1Z7bywLAsWiVuYgcddGHhXVgsredXecLK',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9Y851PDT9_nI-Km35WDoG-tJFw21mD7ZKnE8VFLYBNkNfqC0EwYCQysZz3m8yvLEf7s&usqp=CAU'
        },
        {
            name: 'Unstoppable Remix',
            singer: 'Sia',
            path: 'https://docs.google.com/uc?id=1RIQVVoUqW-CAn78jIqoeSN42DAV2S7zT',
            image: 'https://m.media-amazon.com/images/M/MV5BMjI4NDQwMDM0N15BMl5BanBnXkFtZTcwMzY1ODMwNA@@._V1_FMjpg_UX1000_.jpg'
        },
        {
            name: 'Why Not Me',
            singer: 'Enrique Iglesias',
            path: 'https://docs.google.com/uc?id=1M5dwvKWf3qMTHTNOtsukhj7vM4YWvFSi',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2018/09/20/2/c/a/3/1537413925557_640.jpg'
        },
        {
            name: 'We Dont Talk Anymore',
            singer: 'Charlie Puth',
            path: 'https://docs.google.com/uc?id=1YYq8n_x03_RI8F5F0HiYFpJJcbx0yC7h',
            image: 'https://thenewsmexico.com/wp-content/uploads/2019/06/image5-12.jpg'
        },
        {
            name: 'gió',
            singer: 'Jank',
            path: 'https://docs.google.com/uc?id=1HCPLOMfLJl0N22aohkHQo5ypWMj07ySd',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/3/6/d/536dc591405fc70b6f4932eeb18337e8.jpg'
        },
        ///////////////////////////////////////
        {
            name: 'Bật tình yêu lên',
            singer: 'Hòa Minz - Tăng Nhật Tâng',
            path: 'https://docs.google.com/uc?id=1rzT3E8CjRfeW528pZQq_O-1h9hvmSI8C',
            image: 'https://i.scdn.co/image/ab67616d0000b27353d06fd3155c1b64bf3d25ca'
        },
        {
            name: 'Sao Cũng Được',
            singer: 'Quang Thành hehe',
            path: 'https://docs.google.com/uc?id=1KfTADnbqZ_JmBw3G5F0Lp2y9u46jsbEo',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/6/5/5/a65573e6905dc4f29f59c49ea04866cf.jpg'
        },
        {
            name: 'Suy Nghĩ Trong Anh',
            singer: 'Khắc Việt',
            path: 'https://docs.google.com/uc?id=1Uh5uBpyDVgEw4NRCu1ADMjHA4Jq2Xs6c',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/4/c/e/b4ce00d6c2ef8e46f86a8eabdf717116.jpg'
        },
        {
            name: 'Đến Sau 1 Người',
            singer: 'Châu Khải Phong',
            path: 'https://docs.google.com/uc?id=1Gi3cb91TaBZ1tLgdNEBTjUoKn1FUT7Hb',
            image: 'https://i.scdn.co/image/ab67616d0000b273ac5a6914ac4eed929a75033b'
        },
        {
            name: 'Kiếp Má Hồng',
            singer: 'TLong',
            path: 'https://docs.google.com/uc?id=1CCJPBTvlb3BVS0mUciRIP1pv4uM6EjPw',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/9/2/2/d922bc6bb76d3cbf319b2877a199ef6f.jpg'
        },
        {
            name: 'Kiếp Má Hồng Remix',
            singer: 'TLong Remiz',
            path: 'https://docs.google.com/uc?id=1dcfrQha4yl9Non4DUAqFrPLvQktiwZ05',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/9/2/2/d922bc6bb76d3cbf319b2877a199ef6f.jpg'
        },
        {
            name: 'Em Là Kẻ Đáng Thương',
            singer: 'Phát Huy T4',
            path: 'https://docs.google.com/uc?id=1xLMYR631WrVWp9U08s-zgd3jTXt5kvvj',
            image: 'https://i.scdn.co/image/ab67616d0000b273e6f362e9f1966e14e0056764'
        },
        {
            name: 'Người Đáng Thương Là Anh',
            singer: 'Only C',
            path: 'https://docs.google.com/uc?id=16_Wr_i9_RAdOgPArrz7r82vRqGm1sPIa',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/1/a/d/71adfd9bf22ced6fbe5f36806fd2d030.jpg'
        },
        {
            name: 'Đừng Như Thói Quen',
            singer: 'Jaykii FT Ai Đó',
            path: 'https://docs.google.com/uc?id=1mT-IA0YOeP0df_HRLD6tqMEHWfXsYrY2',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/8/5/3/0853118a8d14808d8526bc717409ac90.jpg'
        },
        {
            name: 'Tận Cùng Của Nổi Nhớ',
            singer: 'Will FT Hansara',
            path: 'https://docs.google.com/uc?id=1vj3YX66MDnpEKYilFefgS4DT-FRkEM-S',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/1/a/1/f/1a1f5688569dfc52005abf304676ea63.jpg'
        },
        {
            name: 'Người Ấy',
            singer: 'Trịnh T.Bình',
            path: 'https://docs.google.com/uc?id=1DTQ9QVHq7lPiR6-2mvlH9edemCIwozjI',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/covers/c/a/ca79cd05ebbc2de2536374d3a710df85_1356577120.jpg'
        },
        {
            name: 'Em Đồng Ý',
            singer: 'Đức Phúc',
            path: 'https://docs.google.com/uc?id=1sMEO9Sur6qL2jBb57sE_uNfPsoZpiU9t',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/a/4/a/0a4ad6914b4a26304b843ba464acbd6b.jpg'
        },
        {
            name: 'Nhất Trên Đời',
            singer: 'Vanh',
            path: 'https://docs.google.com/uc?id=1BO73UltrMVFpth7HZsr6VxfYB6qeB-pa',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/b/6/d/db6de68045be6546a9e361b6dbe7d5c7.jpg'
        },
        {
            name: 'Fall In Love',
            singer: 'Na',
            path: 'https://docs.google.com/uc?id=1six2VX81SskL-HDN9hT1eN5Lr-OAWJs9',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/d/b/4/9db4ac04f83b52d6d0cff947a7bc707a.jpg'
        },
        {
            name: '11:11P',
            singer: 'Bảo Uyên Ft Ai Đó ',
            path: 'https://docs.google.com/uc?id=1six2VX81SskL-HDN9hT1eN5Lr-OAWJs9',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/2/5/6/22569c92ca5e856f643d1ead533f5d6d.jpg'
        },
        {
            name: 'Không Yêu Xin Đừng Nói',
            singer: 'của Thằng Nào Đó mà Nhát Search =))',
            path: 'https://docs.google.com/uc?id=1CCZYz0NvU9zPzDaoxJKdLSjpYm1KXIE3',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/4/5/9/f459f1c68cb8be999b8a88022153ae40.jpg'
        },
        {
            name: 'Cơn Mưa Ngang Qua',
            singer: 'Sếp',
            path: 'https://docs.google.com/uc?id=11oFSbBupE1K4oc-tIUCbite24tNlqnIS',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/a/a/b/8aab7a0386dd9c24b90adcc5ef5a7814.jpg'
        },
        {
            name: 'Sóng 5 Củ',
            singer: 'Jack 5 Trịu',
            path: 'https://docs.google.com/uc?id=1KyRBN8Z-tjgoCg8R3vBECyE4P6vexrC9',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKIbEW9TH2ixLW6EDNdLZBZGlogLXDOp7OXBMN_lvL4ROsSvmXNZxwCq1gRsJ00XuFIc&usqp=CAU'
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