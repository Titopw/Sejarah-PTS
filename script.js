
const questions = [
    {
        question: 'Apa yang dimaksud dengan Demokrasi Terpimpin di Indonesia?',
        userAnswer: null,
        answers: [
            { text: 'Sistem pemerintahan yang dipimpin oleh Presiden', correct: false },
            { text: 'Sistem pemerintahan otoriter dengan kendali militer', correct: true },
            { text: 'Sistem pemerintahan yang memberi kekuasaan penuh kepada rakyat', correct: false },
            { text: 'Sistem pemerintahan yang dipimpin oleh partai politik', correct: false }
        ]
    },
    {
        question: 'Siapa yang menjadi presiden pada masa Demokrasi Terpimpin di Indonesia?',
        userAnswer: null,
        answers: [
            { text: 'Soekarno', correct: true },
            { text: 'Soeharto', correct: false },
            { text: 'Megawati Soekarnoputri', correct: false },
            { text: 'Abdurrahman Wahid', correct: false }
        ]
    },
    {
        question: '.Apa tujuan utama dari kebijakan ekonomi pada masa Demokrasi Terpimpin?',
        userAnswer: null,
        answers: [
            { text: 'Meningkatkan kesejahteraan rakyat', correct: false },
            { text: 'Menjaga stabilitas ekonomi nasional', correct: false },
            { text: 'Mencapai kemandirian ekonomi', correct: true },
            { text: 'Meningkatkan daya saing global', correct: false }
        ]
    },
    {
        question: 'Bagaimana hubungan antara pemerintah dan dunia usaha pada masa Demokrasi Terpimpin?',
        userAnswer: null,
        answers: [
            { text: 'Dunia usaha bebas dari campur tangan pemerintah', correct: false },
            { text: 'Terdapat kerjasama antara pemerintah dan dunia usaha dalam pembangunan ekonomi', correct: true },
            { text: 'Pemerintah mengendalikan sepenuhnya dunia usaha', correct: false },
            { text: 'Dunia usaha dipinggirkan oleh pemerintah', correct: false }
        ]
    },
    {
        question: 'Apa dampak dari kebijakan politik yang otoriter pada perkembangan demokrasi di Indonesia pada masa Demokrasi Terpimpin?',
        userAnswer: null,
        answers: [
            { text: 'Terbatasnya kebebasan berorganisasi dan berpendapat', correct: true },
            { text: 'Meningkatnya partisipasi politik rakyat', correct: false },
            { text: 'Berkembangnya ruang kebebasan berpendapat', correct: false },
            { text: 'Memperkuat sistem demokrasi multipartai', correct: false }
        ]
    },
    {
        question: 'Apa peran militer dalam politik pada masa Demokrasi Terpimpin?',
        userAnswer: null,
        answers: [
            { text: 'Militer bertindak sebagai pengawal konstitusi', correct: false },
            { text: 'Militer tidak memiliki peran politik', correct: false },
            { text: 'Militer turut campur dalam pembuatan kebijakan politik', correct: true },
            { text: 'Militer hanya bertanggung jawab pada keamanan nasional', correct: false }
        ]
    },
    {
        question: 'Salah satu ciri utama kehidupan politik pada masa Demokrasi Terpimpin adalah...',
        userAnswer: null,
        answers: [
            { text: 'Dominasi satu partai politik', correct: true },
            { text: 'Kebebasan berpendapat yang luas', correct: false },
            { text: 'Rotasi kekuasaan secara demokratis', correct: false },
            { text: 'Sistem multi-partai yang kuat', correct: false }
        ]
    },
    {
        question: 'Bagaimana pengaruh kebijakan politik Demokrasi Terpimpin terhadap perkembangan ekonomi Indonesia?',
        userAnswer: null,
        answers: [
            { text: 'Penurunan kemiskinan dan pengangguran secara signifikan', correct: false },
            { text: 'Peningkatan investasi asing dan pertumbuhan sektor manufaktur', correct: false },
            { text: 'Inflasi yang rendah dan defisit anggaran yang terkendali', correct: false },
            { text: 'Stabilisasi ekonomi dan pertumbuhan yang tinggi', correct: true }
        ]
    },
    {
        question: 'Apa yang menjadi fokus utama pemerintah dalam kebijakan ekonomi pada masa Demokrasi Terpimpin?',
        userAnswer: null,
        answers: [
            { text: 'Pengembangan sektor industri berat', correct: false },
            { text: 'Peningkatan produksi bahan pokok', correct: false },
            { text: 'Pembangunan infrastruktur kota besar', correct: false },
            { text: 'Pemberdayaan ekonomi rakyat kecil', correct: true }
        ]
    },
    {
        question: 'Bagaimana pengaruh kebijakan politik Demokrasi Terpimpin terhadap hubungan diplomasi Indonesia dengan negara-negara lain?',
        userAnswer: null,
        answers: [
            { text: 'Terjadi isolasi diplomatik karena kebijakan nonblok', correct: false },
            { text: 'Terjalin hubungan yang erat dengan blok Timur', correct: false },
            { text: 'Terjalin hubungan yang erat dengan blok Barat', correct: true },
            { text: 'Terjalin kerjasama diplomasi yang luas dengan berbagai negara di dunia', correct: false }
        ]
    },
];
const defaultTimeLimit = 30; // detik
let timeLimit = defaultTimeLimit;
let score = 0;
let time = 0;
let currentQuestionIndex = 0;
let timer;

// Declare missing variables
let questionContainer, answerButtonsContainer, timeElement, nextButton;

function startQuiz() {
    currentQuestionIndex = 0; // Atur indeks pertanyaan ke 0
    score = 0; // Atur skor ke 0
    time = 0; // Inisialisasi ulang waktu
    timer = setInterval(updateTimer, 1000);
    questionContainer = document.getElementById('question-container'); // Tambahkan deklarasi
    answerButtonsContainer = document.getElementById('answer-buttons'); // Tambahkan deklarasi
    timeElement = document.getElementById('time'); // Tambahkan deklarasi
    nextButton = document.getElementById('next-button'); // Tambahkan deklarasi
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    time = 0; // Atur waktu kembali ke 0 setiap kali pertanyaan baru ditampilkan
    questionContainer.innerText = question.question;
    resetButtons();

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsContainer.appendChild(button);
    });

    // Sembunyikan tombol "Next" saat pertanyaan baru ditampilkan
    nextButton.style.display = 'none';
}

function resetButtons() {
    while (answerButtonsContainer.firstChild) {
        answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
    }
}

function selectAnswer(answer) {
    const selectedButton = event.target;

    // Memeriksa apakah jawaban yang dipilih benar
    if (answer.correct) {
        setButtonStatus(selectedButton, 'btn-correct');
        // Tambahkan skor jika jawaban benar
        score += 10;
    } else {
        setButtonStatus(selectedButton, 'btn-incorrect');
    }
    // Tampilkan tombol "Next" setelah pengguna memilih jawaban
    nextButton.style.display = 'block';
}

function setButtonStatus(selectedButton, status) {
    selectedButton.classList.add(status);
    // Tampilkan tombol "Next" setelah mengatur status tombol
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (!nextButton.style.display) {
        score = 0;
    }

    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        resetButtonStatus();
    } else {
        endQuiz();
    }
}

function resetButtonStatus() {
    const selectedButton = document.querySelector('.btn');
    selectedButton.classList.remove('btn-correct', 'btn-incorrect');

    // Tampilkan tombol "Next"
    nextButton.style.display = 'none';

    // Aktifkan tombol untuk pertanyaan baru
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.disabled = false;
    });
}

function endQuiz() {
    clearInterval(timer);

    // Tampilkan elemen skor
    const scoreContainer = document.getElementById('score-container');
    const scoreElement = document.getElementById('score');

    scoreElement.textContent = score;

    scoreContainer.style.display = 'block';
    questionContainer.style.display = 'none';
    answerButtonsContainer.style.display = 'none';
    nextButton.style.display = 'none';
}

function restartQuiz() {
    // Reset pertanyaan dan jawaban
    questions.forEach(question => {
        question.userAnswer = null;
    });

    // Kembali ke halaman utama
    window.location.href = 'index.html';
}

function updateTimer() {
    if (time < timeLimit) {
        time++;
        timeElement.innerText = (timeLimit - time) + ' seconds';
    } else {
        // Waktunya habis, lanjutkan ke pertanyaan berikutnya
        nextQuestion();
    }
}

// Mulai kuis saat halaman dimuat
startQuiz();
