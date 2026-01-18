const rawQuestions = [
  {
    q: 'Pytanie 101/148\nEkspansja betonu:',
    a: [
      'A.     eliminuje wpływ skurczu',
      'B.     umożliwia zwiększenie odstępów dylatacji',
      'C.    jest trudna do kontrolowania',
      'D.    jest łatwa do kontrolowania',
      'E.      nie eliminuje wpływów skurczu',
      'F.      wymusza zmniejszenie odstępów dylatacji',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 102/148\nWartość straty od odkształceń sprężystych betonu:',
    a: [
      'A.     zależy od charakterystyk geometrycznych\nprzekroju',
      'B.     nie zależy od charakterystyk geometrycznych\nprzekroju',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 103/148\nProdukcja elementów strunobetonowych cechuje się:',
    a: [
      'A.     ograniczonymi możliwościami zabiegów\nprzyspieszających twardnienie betonu',
      'B.     brakiem konieczności stosowania betonów o\nwysokich klasach wytrzymałości (powyżej C20/25)',
      'C.    możliwością zwolnienia naciągu cięgien\nnatychmiast po zawibrowaniu mieszanki betonowej w formach',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 104/148\nPrzy sprężaniu kablami linowymi w zakotwieniu czynnym\nstosuje się zakotwienie:',
    a: [
      'A.     z wykorzystaniem tulei (zagwintowanej na\ncięgnie) zewnętrznie nagwintowanej',
      'B.     głowicowanie',
      'C.    z wykorzystaniem stożkowych szczęk dwu- lub\ntrójdzielnych',
      'D.    z wykorzystaniem rozplecionych elementów cięgna\nzalanych stopem metali',
      'E.      tarciowe blokujące',
      'F.      gwintowane (nagwintowane cięgno, nakrętka)',
      'G.    typu stożkowego (np. stożek podłużnie rowkowany)',
    ],
    c: [0, 3],
    img: '',
  },
  {
    q: 'Pytanie 105/148\n\n \nPrzedstawiony powyżej wzór pozwala na obliczyć doraźne\nugięcie od sprężania in przypadku dźwigara o:',
    a: [
      'A.     zmiennym przekroju (dźwigar dwuspadowy) i\nprostoliniowej trasie cięgien',
      'B.     stałym przekroju i parabolicznej trasie cięgien',
      'C.    stałym przekroju i prostoliniowej trasie cięgien',
    ],
    c: [0],
    img: 'images/105.png',
  },
  {
    q: 'Pytanie 106/148\nWartość straty od tarcia in kanale kablowym zależy od:',
    a: [
      'A.     charakterystyka geometrycznych przekroju',
      'B.     suma kątów zakrzywienia trasy cięgna',
      'C.    moduł sprężystości stali sprężającej',
      'D.    moduł sprężystości betonu',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 107/148\nSprężanie termiczne rur polega na:',
    a: [
      'A.     umieszczeniu na rurze rozgrzanych obręczy\nmetalowych',
      'B.     nawijaniu na rdzeń rury rozgrzanych cięgien',
      'C.    nawijaniu cięgien na rozgrzany rdzeń rury',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 108/148\nZakotwienie wachlarzowe, z indywidualnymi zakotwieniami\nbiernymi, to rodzaj zakotwienia biernego:',
    a: [
      'A.     kabla ze splotów ',
      'B.     kabla specjalnego',
      'C.    kabla wielodrutowego',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 109/148\nProjektując niezarysowaną belkę sprężoną (kategorii 1a lub\n1b) można dopuścić niespełnienie warunku pojawienia się rys prostopadłych do\nelementu in stadium:',
    a: [
      'A.     montażu',
      'B.     eksploatacji',
      'C.    realizacji (sprężenia)',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 110/148\nPrzy produkcji potokowej formy:',
    a: [
      'A.     poruszają się wzdłuż linii kolejnych\nwyspecjalizowanych stanowisk, często łącznie z tunelem przyspieszonego dojrzewania\nbetonu',
      'B.     znajdują się na jednym stanowisku, na którym\nkolejno wykonuje się: naciąg, betonowanie, pielęgnację betonu, sprężenie i\nrozformowanie elementów',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 111/148\nSprężanie odcinkowe zbiorników walcowych wiąże się z\nkoniecznością konstruowania lokalnych pogrubień (pilastrów) celem umożliwienia\nkotwienia cięgien. Jest to przyczyną powstawania dodatkowych:',
    a: [
      'A.     momentów zginających in powłoce',
      'B.     sił równoleżnikowych in powłoce',
      'C.    sił południkowych in powłoce',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 112/148\nPrzy sprężaniu kablami ze splotów, in zakotwieniu czynnym\nstosuje się zakotwienia:',
    a: [
      'A.     z zastosowaniem stożkowych szczęk dwu- lub\ntrójdzielnych  ',
      'B.     gwintowe (nagwintowane cięgno, nakrętka) ',
      'C.    z wykorzystaniem rozplecionych elementów cięgna\nzalanych stopem metali ',
      'D.    typu stożkowego (np. Stożek podłużnie rowkowany)',
      'E.      z wykorzystaniem tulei (zawalcowanej na cięgnie)\nzewnętrznie nagwintowanej',
      'F.      tarciowe blokujące',
      'G.    głowicowe',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 113/148\nZakotwienie półpętlicowe z opornikiem, to rodzaj zakotwienia\nbiernego:',
    a: [
      'A.     kabla wielodrutowego',
      'B.     kabla ze splotów',
      'C.    kabla specjalnego',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 114/148\nW rurach o bardzo dużych średnicach stosuje się:',
    a: ['A.     kable pełnoobwodowe', 'B.     kable odcinkowe'],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 115/148\nObliczając strefę zakotwień in elemencie strunobetonowym,\nokreśla się (zgodnie z EC2) m.in. długość zwaną długością:',
    a: [
      'A.     dyspraksji',
      'B.     dysleksji',
      'C.    dystrybucji',
      'D.    dysplazji',
      'E.      dyspersji',
    ],
    c: [4],
    img: '',
  },
  {
    q: 'Pytanie 116/148\nW rurach o bardzo dużych średnicach stosuje się:',
    a: [
      'A.     kable umieszczone in grubości ściany rury',
      'B.     kable umieszczone na zewnętrznej powierzchni\nściany rury',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 117/148\nW rurach o bardzo dużych średnicach stosuje się:',
    a: [
      'A.     kable kotwione in specjalnych pilastrach',
      'B.     kable kotwione in specjalnych gniazdach',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 118/148\nPrzy produkcji rur sprężonych metodą nawijania szybkość\nruchu podłużnego naciągarki:',
    a: [
      'A.     nie ma wpływu na intensywność siły sprężającej\nprzekazywanej na jednostkę długości rury',
      'B.     decyduje o intensywności siły sprężającej\nprzekazywanej na jednostkę długości rury',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 119/148\nW przypadku konstrukcji kablobetonowych przy nowoczesnych\nzakotwieniach ze stalowymi odlewami bloków kotwiących, umieszczanymi in betonie\nelementu sięgającymi in głąb na kilkadziesiąt centymetrów wyposażonymi in\npośrednie kołnierze dociskowe konstruując zbrojenie strefy zakotwień:',
    a: [
      'A.     można wybiórczo stosować zalecenia producenta\nzakotwień',
      'B.     należy in pełni bazować na zaleceniach producenta\nzakotwień',
      'C.    przede wszystkim należy samodzielnie\nprzeprowadzić stosowne obliczenia, opcjonalnie stosując wybrane zalecenia\nproducenta zakotwień',
      'D.    należy traktować zalecenia producenta zakotwień\njako jedną z możliwych opcji',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 120/148\nZakotwienie pętlicowe z opornikiem, to rodzaj zakotwienia\nbiernego:',
    a: [
      'A.     kabla wielodrutowego',
      'B.     kabla ze splotów',
      'C.    kabla specjalnego',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 121/148\nDo strat siły sprężającej in konstrukcjach strunobetonowych\nzalicza się:',
    a: [
      'A.     straty od różnic temperatury',
      'B.     straty od częściowej relaksacji stali',
      'C.    straty od poślizgu in uchwytach technologicznych',
      'D.    straty od poślizgu in zakotwieniach',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 122/148\nSprężanie zbiorników walcowych wykonuje się:',
    a: [
      'A.     metodą nawijania kabli',
      'B.     tylko za pomocą kabli',
      'C.    metodą chuja w dupie',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 123/148\nFormy do produkcji elementów strunobetonowych metodą\nsztywnych form',
    a: [
      'A.     mogą przenosić siły naciągu cięgien',
      'B.     nie mogą przenosić sił naciągu cięgien',
      'C.    muszę przenosić siły naciągu cięgien',
      'D.    nie musza przenosić sił naciągu cięgien',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 124/148\nPrzy sprężaniu kablami prętowymi, in zakotwieniu czynnym\nstosuje się zakotwienia:',
    a: [
      'A.     z zastosowaniem stożkowych szczęk dwu- lub\ntrójdzielnych ',
      'B.     gwintowe (nagwintowane cięgno, nakrętka)',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 125/148\nSprężanie z wykorzystaniem betonu ekspansywnego stosuje się\nprzede wszystkim przy masywnych konstrukcjach, gdzie naprężenia in betonie:',
    a: ['A.     nie muszą być duże', 'B.     muszą być duże'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 126/148\nPrzy produkcji rur sprężonych metodą nawijania, hamowanie\ncięgna:',
    a: [
      'A.     wywołuje siłę naciągu',
      'B.     służy wyłącznie do zmiany kierunku prowadzenia\ndrutu bez wpływu na jego naprężenie',
      'C.    odbywa się poprzez swobodne rozwijanie kręgu\nstali bez użycia jakichkolwiek urządzeń dociskowych',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 127/148\nZastosowanie kablobetonu przy sprężaniu powłok zbiorników\nrozpoczęto od używania cięgien podzielonych na kilka odcinków na obwodzie, ze\nwzględu na:',
    a: [
      'A.     znaczne straty naciągu, powodowane tarciem',
      'B.     konieczność zapewnienia swobodnego przepływu\ncieczy wewnątrz kanałów kablowych przed ich zainiektowaniem',
      'C.    wymóg stosowania wyłącznie krótkich odcinków\nstali ze względu na jej niską wytrzymałość na rozciąganie przy dużych\ndługościach',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 128/148\n\nPrzedstawiony powyżej wzór pozwala obliczyć doraźne ugięcie\nod sprężania in przypadku dźwigara o: ',
    a: [
      'A.     stałym przekroju i parabolicznej trasie cięgien',
      'B.     zmiennym przekroju i prostoliniowej trasie\ncięgien ułożonych wzdłuż górnej półki',
      'C.    stałym przekroju i cięgnach ułożonych in osi\nobojętnej elementu na całej jego długości',
    ],
    c: [0],
    img: 'images/128.png',
  },
  {
    q: 'Pytanie 129/148\nJeśli in trakcie sprawdzania warunku zarysowania (rysy\nprostopadłe) in stadium montażu dźwigara nie spełniono warunku (rysy się\nnie pojawią), to in stadium eksploatacji warunek:',
    a: [
      'A.     na pewno się sprawdził (rysy się nie pojawią)',
      'B.     na pewno się nie sprawdził (rysy się pojawią)',
      'C.    może się sprawdzić lub nie',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 130/148\nWeryfikując stan graniczny nośności in stadium realizacji\n(sprężania dźwigara przyjmuje się odpowiednio powiększoną siłę sprężającą:',
    a: [
      'A.     po stratach technologicznych i doraźnych',
      'B.     początkową',
      'C.    po stratach całkowitych',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 131/148\nPrzy sprężaniu z wykorzystaniem wygięcia zbrojenia\nsztywnego, zbrojeniem sprężającym jest sztywny element:',
    a: [
      'A.     walcowany o stali o podwyższonej wytrzymałości',
      'B.     betonowy prefabrykowany o wysokiej klasie\nwytrzymałości',
      'C.    drewniany o przekroju prostokątnym wzmocniony\nżywicą',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 132/148\nW normalnej temperaturze (20oC) po ok. 4 dniach (100 godzin)\nzachodzi ____ strat od relaksacji oszacowanych dla ok 40 dni (1000 godzin)\n(Slajd 319)',
    a: ['A.     55 %', 'B.     65 %', 'C.    45 %', 'D.    50 %'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 133/148\nSprężanie zbiorników walcowych jest opłacalne już od\npojemności:',
    a: ['A.     500 m3', 'B.     400 m3', 'C.    600 m3'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 134/148\nDo strat siły sprężającej in konstrukcjach kablobetonowych\nzalicza się:',
    a: [
      'A.     straty od odkształceń sprężystych betonu',
      'B.     straty opóźnione od relaksacji stali odraz\nskurczu i pełzania betonu',
      'C.    straty od opóźnionych odkształceń styków',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 135/148\nSprawdzając warunek pojawienia się rys prostopadłych do os\nelementu, naprężenia in skrajnych włóknach górnych przekroju sprawdza się in\nstadium:',
    a: [
      'A.     stadium realizacji (sprężania)',
      'B.     w stadium montażu',
      'C.    w stadium eksploatacji',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 136/148\nZaleca się, aby in konstrukcjach strunobetonowych cięgna\nrozmieszczone były:',
    a: [
      'A.     w układzie ortogonalnym',
      'B.     tak, by środek ciężkości cięgien pokrywał się ze\nśrodkiem ciężkości półki dolnej (w miarę możliwości)',
      'C.    przy zachowaniu nieparzystej liczby kolumn ',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 137/148\nNawijarka karuzelowa to takie urządzenie, in którym:',
    a: [
      'A.     urządzenie napędowe i naciągowe umieszczone na\njednej platformie',
      'B.     obsługa sterująca nawijaniem przebywa na\nplatformie',
      'C.    platforma zawieszona jest na linach łączących je\nz górnym wózkiem tocznym',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 138/148\nPrzy stałym przekroju elementu strunobetonowego formowanie\nagregatowe na torze jest:',
    a: ['A.     wskazane', 'B.     niewskazane'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 139/148\nStosując elektronagrzew przy sprężaniu termicznym rur\nuzyskuje się temperatury rzędu:',
    a: ['A.     250-300 oC', 'B.     200-300 oC', 'C.    300-350 oC'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 140/148\nPotrzebną liczbę cięgien sprężających można oszacować biorąc\npod uwagę m.in.:',
    a: [
      'A.     obliczeniową granicę plastyczności stali\nsprężającej',
      'B.     pole przekroju pojedynczego cięgna',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 141/148\nDługość, na której siła sprężająca zostaje in pełni\nprzekazana z cięgien na beton (w elementach strunobetonowych), to długość:',
    a: [
      'A.     dyspersji',
      'B.     dystrybucji',
      'C.    transmisji',
      'D.    transferu',
      'E.      zakotwienia',
      'F.      strefy zaburzeń',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 142/148\nUrządzenia do nawijania drutów lub splotów na powłokę\nzbiornika, to nawijarki:',
    a: ['A.     karuzelowe', 'B.     obiegowe'],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 143/148\nWyznaczając efektywny moduł sprężystości betonu Ec,eff\nnależy uwzględnić:',
    a: [
      'A.     współczynnik pełzania',
      'B.     wyłącznie doraźną wytrzymałość betonu na\nrozciąganie fctm',
      'C.    współczynnik Poissona dla stali sprężającej',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 144/148\nPrzy produkcji rur sprężonych metodą nawijania, ułożenie\nzewnętrznej, otulającej warstwy betonu wykonuje się:',
    a: [
      'A.     wyłącznie poprzez natrysk',
      'B.     wyłącznie za pomocą ślizgowej formy',
      'C.    poprzez natrysk lub za pomocą ślizgowej formy',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 145/148\nNaciąg cięgien odginanych może odbywać się:',
    a: [
      'A.     niepełną siłą przy założeniu specjalnych\nuchwytów',
      'B.     wyłącznie po całkowitym stwardnieniu betonu we\nwszystkich przęsłach konstrukcji jednocześnie',
      'C.    bez użycia jakichkolwiek urządzeń pomocniczych,\nwykorzystując jedynie ciężar własny elementu',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 146/148\nStrata od odkształceń sprężystych betonu in kablobetonie jest\nprocentowo... niż in strunobetonie',
    a: ['A.     mniejsza', 'B.     większa', 'C.    taka sama'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 147/148\nObliczając strefę zakotwień in elemencie strunobetonowym,\nokreśla się (zgodnie z EC2) m in. długość zwaną długością',
    a: [
      'A.     transmisji',
      'B.     transferu',
      'C.    relacji',
      'D.    przekazu',
      'E.      przesyłu',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 148/148\nPrzy sprężaniu prasami płaskimi i klinami',
    a: [
      'A.     obraz stanu granicznego złamania jest jasny i\nczytelny',
      'B.     elementom konstrukcji nie grozi wyboczenie od\nsprężenia',
      'C.    elementom konstrukcji grozi wyboczenie od\nsprężenia',
      'D.    niejasny jest obraz stanu granicznego złamania',
    ],
    c: [2, 3],
    img: '',
  },
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let questions = shuffle([...rawQuestions]);
let currentIdx = 0;
let correctCount = 0;
let wrongCount = 0;
let isChecked = false;

const questionArea = document.getElementById('question-area');
const nextBtn = document.getElementById('next-btn');
const correctSpan = document.getElementById('correct-count');
const wrongSpan = document.getElementById('wrong-count');
const scoreSpan = document.getElementById('score-percentage');

function updateStats() {
  correctSpan.innerText = correctCount;
  wrongSpan.innerText = wrongCount;

  // OBLICZANIE PROCENTU: Poprawne / Suma udzielonych odpowiedzi
  const totalAnswered = correctCount + wrongCount;
  const percentage =
    totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  if (scoreSpan) {
    scoreSpan.innerText = percentage + '%';
  }
}

function loadQuestion() {
  isChecked = false;
  nextBtn.innerText = 'Sprawdź odpowiedź';
  const qData = questions[currentIdx];

  questionArea.innerHTML = `
        <div style="color: #666; margin-bottom: 10px;">Pytanie ${currentIdx + 1} z ${questions.length}</div>
        <h3 style="margin-bottom: 20px;">${qData.q}</h3>
    `;

  qData.a.forEach((ans, i) => {
    const div = document.createElement('div');
    div.id = `opt-container-${i}`;
    div.style.cssText =
      'padding: 12px; margin: 8px 0; border: 1px solid #ddd; border-radius: 8px; cursor: pointer; transition: 0.3s;';

    div.innerHTML = `
            <label style="display: flex; align-items: center; cursor: pointer; width: 100%;">
                <input type="checkbox" value="${i}" class="ans-checkbox" style="margin-right: 15px; transform: scale(1.2);">
                <span style="font-size: 1.05rem;">${ans}</span>
            </label>
        `;

    div.onclick = e => {
      if (isChecked) return;
      const cb = div.querySelector('input');
      if (e.target !== cb) cb.checked = !cb.checked;
    };

    questionArea.appendChild(div);
  });
}

nextBtn.onclick = () => {
  const checkboxes = document.querySelectorAll('.ans-checkbox');
  const selected = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => parseInt(cb.value));
  const correct = questions[currentIdx].c;

  if (selected.length === 0 && !isChecked) {
    alert('Wybierz odpowiedź!');
    return;
  }

  if (!isChecked) {
    const isCorrect =
      selected.length === correct.length &&
      selected.every(val => correct.includes(val));

    if (isCorrect) {
      correctCount++;
    } else {
      wrongCount++;
    }

    // Wywołujemy aktualizację statystyk ZARAZ po zmianie licznika
    updateStats();

    checkboxes.forEach((cb, i) => {
      cb.disabled = true;
      const container = document.getElementById(`opt-container-${i}`);
      if (correct.includes(i)) {
        container.style.backgroundColor = '#d4edda';
        container.style.borderColor = '#28a745';
      } else if (cb.checked) {
        container.style.backgroundColor = '#f8d7da';
        container.style.borderColor = '#dc3545';
      }
    });

    nextBtn.innerText = 'Następne pytanie »';
    isChecked = true;
  } else {
    currentIdx++;
    if (currentIdx < questions.length) {
      loadQuestion();
    } else {
      const finalScore = Math.round((correctCount / questions.length) * 100);
      questionArea.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <h2>Test zakończony!</h2>
                    <p style="font-size: 2rem; margin: 20px 0; font-weight: bold;">Skuteczność: ${finalScore}%</p>
                    <p>Poprawne: ${correctCount} | Błędne: ${wrongCount}</p>
                </div>`;
      nextBtn.innerText = 'Zacznij od nowa';
      nextBtn.onclick = () => location.reload();
    }
  }
};

loadQuestion();
