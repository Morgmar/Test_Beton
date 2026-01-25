let wrongQuestionsPool = [];
const rawQuestions = [
  {
    q: 'Pytanie 1 \nPrzy sprężaniu z wykorzystaniem ekspansji betonu:',
    a: [
      'A.	najłatwiej jest uzyskiwać sprężenie równomierne ',
      'B.	duże możliwości regulowania położenia wypadkowej siły sprężającej w przekroju',
      'C. najłatwiej jest uzyskiwać sprężenie nierównomierne',
      'D. niewielkie możliwości regulowania położenia wypadkowej siły sprężającej w przekroju ',
    ],
    c: [0, 3],
    img: '',
  },
  {
    q: 'Pytanie 2 \nSprężanie termiczne rur jest najczęściej stosowane:',
    a: [
      'A. przy usuwaniu skutków awarii rurociągów',
      'B. przy masowej produkcji elementów',
      'C. wyłącznie w zakładach prefabrykacji',
      'D. przy wzmacnianiu istniejących konstrukcji',
    ],
    c: [0, 3],
    img: '',
  },
  {
    q: 'Pytanie 3 \nPrzy sprężaniu kablami wielodrutowymi, w zakotwieniu czynnym stosuje się zakotwienia:',
    a: [
      'A.	z wykorzystaniem rozplecionych elementów cięgna zalanych stopem metali',
      'B.	z zastosowaniem stożkowych szczęk dwu- lub trójdzielnych',
      'C.	gwintowe (nagwintowane cięgno, nakrętka)',
      'D.	z wykorzystaniem tulei (zawalcowanej na cięgnie) zewnętrznie nagwintowanej',
      'E.	tarciowe blokujące',
      'F.	typu stożkowego (np. stożek podłużnie rowkowany)',
      'G.	głowicowe',
    ],
    c: [4, 5, 6],
    img: '',
  },
  {
    q: 'Pytanie 4 \nJednym z założeń upraszczających w metodzie analizy sprężystej strefy zakotwień w elemencie kablobetonowym jest przyjęcie, że zasięg strefy zaburzeń jest równy:',
    a: ['A.	wysokość środnika belki', 'B. szerokość belki', 'C. wysokość belki'],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 5 \nWartość straty z tytułu wpływy różnic temperatury, wywołanych obróbką cieplną betonu na długim torze naciągowym będzie ___ niż w przypadku produkcji metodą sztywnych form:(1odp)',
    a: ['A. większa', 'B. mniejsza', 'C. taka sama'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 6 \nSprawdzając warunek pojawienia się rys ukośnych w belce sprężonej o przekroju dwuteowym, sprawdza się naprężenia we włóknach:',
    a: [
      'A. na styku środnika i półki górnej',
      'B. skrajnych górnych',
      'C. na styku środnika i półki dolnej',
      'D. na poziomie środka ciężkości przekroju',
      'E. skrajnych dolnych',
    ],
    c: [0, 2, 3],
    img: '',
  },
  {
    q: 'Pytanie 7 \nElektronagrzew stosowany przy naciągu termicznym cięgien polega na przepływie prądu o:',
    a: [
      'A. wysokim natężeniu i wysokim napięciu',
      'B. wysokim natężeniu i niskim napięciu',
      'C. niskim natężeniu i wysokim napięciu',
      'D. niskim natężeniu i niskim napięciu',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 8 \nW elementach strunobetonowych długość, wzdłuż której naprężenia normalne w betonie stopniowo rozprzestrzeniają się na cały przekrój i -jak się zakłada- osiągają rozkład liniowy w przekroju poprzecznym leżącym na końcu tej długości, to długość…',
    a: [
      'A. transferu',
      'B. dystrybucji',
      'C. transmisji',
      'D. dyspersji',
      'E. zakotwienia',
    ],
    c: [3],
    img: '',
  },
  {
    q: 'Pytanie 9 \nMetodą nawijania można sprężać rury:',
    a: [
      'A. zarówno o niewielkich jak i dużych średnicach',
      'B. wyłącznie o niewielkich średnicach',
      'C. wyłącznie o dużych średnicach',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 10 \nSprężanie z wykorzystaniem ekspansji betonu jest najbardziej przydatne w elementach:',
    a: [
      'A. osiowo rozciąganych',
      'B. zginanych',
      'C. mimośrodowo rozciąganych',
      'D. osiowo ściskanych',
      'E. mimośrodowo ściskanych',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 11 \nPrzy produkcji rur sprężonych metodą nawijania, cięgna nawija się na:',
    a: [
      'A. nieruchomy rdzeń betonowy rury ustawiony w pozycji poziomej',
      'B. obracający się rdzeń betonowy rury ustawiony w pozycji pionowej',
      'C. nieruchomy rdzeń betonowy rury ustawiony w pozycji pionowej',
      'D. obracający się rdzeń betonowy rury ustawiony w pozycji poziomej',
    ],
    c: [1, 3],
    img: '',
  },
  {
    q: 'Pytanie 12 \nDługość, na której siła sprężająca zostaje w pełni przekazana z cięgien na beton (w elementach strunobetonowych) to długość:',
    a: [
      'A. strefy zaburzeń',
      'B. transferu',
      'C. dystrybucji',
      'D. zakotwienia',
      'E. dyspersji',
      'F. transmisji',
    ],
    c: [5],
    img: '',
  },
  {
    q: 'Pytanie 13 \nStrata od częściowej relaksacji stali (w strunobetonie) wpływa:',
    a: ['A. nierównomiernie na całe cięgno', 'B. równomiernie na całe cięgno'],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 14 \nPrzy sprężaniu z wykorzystaniem wygięcia zbrojenia sztywnego, uzyskany w ten sposób element sprężony wykazuje:',
    a: [
      'A. znaczny przyrost nośności na zginanie',
      'B. znaczny wzrost rysoodporności',
      'C. niewielki wzrost rysoodporności',
      'D. znaczny wzrost sztywności',
      'E. niewielki wzrost sztywności',
      'F. niewielki przyrost nośności na zginanie',
    ],
    c: [1, 3, 5],
    img: '',
  },
  {
    q: 'Pytanie 15 \nWymagane pole przekroju półki dolnej belki kablobetonowej (Apd) można oszacować, uzależniając je od pola przekroju cięgien sprężających (Ap):',
    a: [
      'A. Apd ≤ 40 Ap',
      'B. Apd ≤ 45 Ap',
      'C. Apd ≤ 50 Ap',
      'D. Apd ≥ 45 Ap',
      'E. Apd ≥ 50 Ap',
      'F. Apd ≥ 40 Ap',
    ],
    c: [5],
    img: '',
  },
  {
    q: 'Pytanie 16 \nWeryfikując stan graniczny nośności w stadium montażu (lub eksploatacji) dźwigara dwuteowego można otrzymać strefę ściskaną betonu:',
    a: ['A. teową', 'B. dwuteową', 'C. prostokątną'],
    c: [0, 2],
    img: '',
  },
  {
    q: 'Pytanie 17 \nWymagane pole przekroju półki dolnej belki strunobetonowej (Apd) można oszacować, uzależniając je od pola przekroju cięgien sprężających (Ap):',
    a: [
      'A. Apd ≤ 50 Ap',
      'B. Apd ≤ 40 Ap',
      'C. Apd ≥ 40 Ap',
      'D. Apd ≥ 50 Ap',
      'E. Apd ≤ 45 Ap',
      'F. Apd ≥ 45 Ap',
    ],
    c: [3],
    img: '',
  },
  {
    q: 'Pytanie 18 \nRelaksacja stali sprężającej oznacza:',
    a: [
      'A. spadek naprężeń w czasie przy stałych odkształceniach',
      'B. spadek naprężeń w czasie przy zmiennych odkształceniach',
      'C. wzrost naprężeń w czasie przy stałych odkształceniach',
      'D. wzrost naprężeń w czasie przy zmiennych odkształceniach',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 19 \nProdukcja elementów strunobetonowych na torze naciągowym cechuje się:',
    a: [
      'A. krótkimi drogami transportu wewnętrznego',
      'B. wydłużonymi drogami transportu wewnętrznego',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 20 \nTypowe uszkodzenia strefy zakotwień w elemencie kablobetonowym (rozłupanie, rozszczepienie, odspojenie) powstają w wyniku powstania nadmiernych naprężeń:',
    a: ['A. stycznych', 'B. rozciągających', 'C. ściskających'],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 21 \nW elementach kablobetonowych można stosować naciąg:',
    a: [
      'A. dwustronny ze wspólnym zasilaniem pras',
      'B. jednostronny',
      'C. dwustronny z niezależnym zasilaniem prac',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 22 \nW praktyce stosuje się różne warianty technologii strunobetonu, sprowadzające się do następujących metod produkcji:',
    a: [
      'A. metody torów naciągowych',
      'B. metody sztywnych form',
      'C. metody sztywnych torów',
      'D. metody form naciągowych',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 23 \nZakotwienie pętlicowe z opornikiem pół-rury, to rodzaj zakotwienia biernego:',
    a: [
      'A. kabla wielodrutowego',
      'B. kabla specjalnego',
      'C. kabla linowego',
      'D. kabla ze splotów',
      'E. kabla prętowego',
    ],
    c: [0, 3],
    img: '',
  },
  {
    q: 'Pytanie 24 \nPoczątek i koniec cięgna mocuje się najczęściej do powłoki sprężanego zbiornika:',
    a: [
      'A. za pomocą klejenia',
      'B. za pomocą śrubowych zacisków',
      'C. betonując w płaszczu zbiornika',
      'D. za pomocą spawania',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 25 \nSprawdzając warunek pojawienia się rys prostopadłych do osi elementu, powiększoną do celów obliczeniowych siłę sprężającą (gdyż działa niekorzystnie), przyjmuje się w stadium:',
    a: ['A. realizacji (sprężenia)', 'B. montażu', 'C. eksploatacji'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 6 Sprawdzając warunek pojawienia się rys ukośnych w belce sprężonej o przekroju dwuteowym, sprawdza się naprężenia we włóknach:',
    a: [
      'A.	transferu',
      'B. dystrybucji',
      'C. transmisji',
      'D. dyspersji',
      'E. zakotwienia',
    ],
    c: [3],
    img: '',
  },
  {
    q: 'Pytanie 26 \nDo strat siły sprężającej w konstrukcjach kablobetonowych zalicza się:',
    a: [
      'A. straty od różnicy temperatury',
      'B. straty od poślizgu w zakotwieniach',
      'C. straty od częściowej relaksacji stali',
      'D. straty od poślizgu w uchwytach technologicznych',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 27 \nProdukcja elementów strunobetonowych na torze naciągowym cechuje się:',
    a: [
      'A. znacznymi kosztami torów i urządzeń towarzyszących',
      'B. niskimi kosztami torów i urządzeń towarzyszących',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 28 \nW produkcji potokowej formy:',
    a: [
      'A. znajdują się na jednym stanowisku, na którym kolejno wykonuje się: naciąg, betonowanie, pielęgnacje betonu, sprężenie i rozformowanie elementów',
      'B. poruszają się wzdłuż linii kolejnych wyspecjalizowanych stanowisk, często łącznie z tunelem przyspieszonego dojrzewania betonu',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 29 \nWeryfikacja stanu granicznego nośności w stadium montażu (lub eksploatacji) dźwigara najczęściej sprowadza się do analizy zagadnienia:',
    a: [
      'A. osiowego ściskania',
      'B. ścinania',
      'C. zginania',
      'D. osiowego rozciągania',
      'E. mimośrodowego rozciągania',
      'F. mimośrodowego ściskania',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 30 \nJeśli w trakcie sprawdzania warunku zarysowania (rysy prostopadłe) w stadium montażu dźwigara spełniono warunek (rysy się nie pojawią), to w stadium eksploatacji warunek:',
    a: [
      'A. na pewno się sprawdzi (rysy się nie pojawią)',
      'B. może się sprawdzić lub nie',
      'C. na pewno się nie sprawdzi (rysy się pojawią)',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 31 \nTzw. wskaźnik tęgości przekroju dla przekrojów dwuteowych przyjmuje się w granicach:',
    a: ['A. 0,30 ÷ 0,35', 'B. 0,10 ÷ 0,20', 'C. 0,15 ÷ 0,35', 'D. 0,18 ÷ 0,30'],
    c: [3],
    img: '',
  },
  {
    q: 'Pytanie 32 \nW rurach o bardzo dużych średnicach stosuje się:',
    a: [
      'A. Kable kotwione w specjalnych gniazdach',
      'B. Kable kotwione w specjalnych pilastrach',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 33 \nZasięg strefy ściskanej w stanie granicznym nośności w stadium montażu (lub eksploatacji) dźwigara wyznacza się z równania równowagi:',
    a: [
      'A. momentów względem środka ciężkości zbrojenia rozciąganego ze stali zwykłej',
      'B. wypadkowych sił w przekroju',
      'C. momentów względem środka ciężkości cięgien sprężających',
      'D. momentów względem środka ciężkości zbrojenia ściskanego ze stali zwykłej',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 34 \nWeryfikacja stanu granicznego nośności w stadium granicznym realizacji (sprężania) dźwigara sprowadza się do analizy zagadnienia:',
    a: [
      'A. osiowego rozciągania',
      'B. zginania',
      'C. osiowego ściskania',
      'D. ścinania',
      'E. mimośrodowego rozciągania',
      'F. mimośrodowego ściskania',
    ],
    c: [5],
    img: '',
  },
  {
    q: 'Pytanie 35 \nZa pomocą pras płaskich i klinów można sprężać:',
    a: [
      'A. dowolne konstrukcje',
      'B. jedynie stosunkowo smukłe konstrukcje',
      'C. konstrukcje, gdy podłoże lub inna konstrukcja mogą przenieść siły reakcji',
      'D. konstrukcje, gdy podłoże lub inna konstrukcja nie mogą przenieść siły reakcji',
      'E. jedynie stosunkowo krępe konstrukcje',
    ],
    c: [2, 4],
    img: '',
  },
  {
    q: 'Pytanie 36 \nPrzy produkcji elementów strunobetonowych stosuje się:',
    a: [
      'A. hydrauliczny naciąg podłużny za pomocą pras naciągowych lub naciąg z wykorzystaniem wydłużenia termicznego cięgien',
      'B. wyłącznie naciąg z wykorzystaniem wydłużenia termicznego cięgien',
      'C. wyłącznie hydrauliczny naciąg podłużny za pomocą pras naciągowych',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 37 \nPrzy produkcji elementów strunobetonowych stosuje się przeważnie:',
    a: [
      'A. sploty 7-drutowe',
      'B. pręty profilowane ze stali stopowych',
      'C. kable wielodrutowe',
      'D. kable ze splotów',
      'E. kable linowe',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 38 \nWeryfikując stan graniczny nośności w stadium realizacji (sprężania) dźwigara należy sprawdzić nośność:',
    a: [
      'A. wyłącznie z uwagi na siłę',
      'B. wyłącznie z uwagi na moment',
      'C. zarówno z uwagi na siłę jak i na moment',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 39 \nSprawdzając warunek pojawienia się rys prostopadłych do osi elementu, pomniejszoną do celów obliczeniowych siłę sprężającą (gdyż działa korzystnie), przyjmuje się w stadium:',
    a: ['A. montażu', 'B. eksploatacji', 'C. realizacji (sprężenia)'],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 40 \nWalcowe powłoki zbiorników spręża się:',
    a: [
      'A. tylko w przypadku zbiorników na wodę',
      'B. tylko w przypadku zbiorników na materiały sypki organiczne',
      'C. zarówno w przypadku zbiorników na ciecze, jak tez na materiały sypkie',
      'D. tylko w przypadku zbiorników na ciecze',
      'E. tylko w przypadku zbiorników na materiały sypkie nieorganiczne',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 41 \nWartość strat od poślizgu w uchwytach technologicznych (w strunobetonie) na długim torze naciągowym jest:',
    a: [
      'A. praktycznie pomijalna',
      'B. dość duża',
      'C. zależna od rodzaju produkowanych na torze elementów (drobno- czy wielkowymiarowe)',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 42 \nPrzy sprężaniu z wykorzystaniem wygięcia zbrojenia sztywnego:',
    a: [
      'A. dokonuje się wstępnego zginania z udziałem siły podłużnej',
      'B. dokonuje się wstępnego zginania bez udziału siły podłużnej',
      'C. wywołuje się mimośrodowe ściskanie',
      'D. wywołuje się osiowe ściskanie',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 43 \nSprężanie z wykorzystaniem betonu ekspansywnego stosuje się przede wszystkim przy masywnych konstrukcjach w których:',
    a: [
      'A. wymaga się dużej precyzji w realizacji sił sprężających',
      'B. nie wymaga się dużej precyzji w realizacji sił sprężających',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 44 \nSprężanie z wykorzystaniem betonu ekspansywnego stosuje się przede wszystkim przy masywnych konstrukcjach, gdzie naprężenia w betonie:',
    a: ['A. muszą być duże', 'B. nie muszą być duże'],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 45 \nPrzy produkcji strunobetonu właściwe sprężenie betonu, który uzyskał odpowiednie parametry wytrzymałościowe następuje w chwili:',
    a: [
      'A. zakotwienie splotów w elementach oporowych',
      'B. przecięcie splotów',
      'C. naciągu splotów',
      'D. rozformowania elementu',
      'E. zwolnienia zakotwień technologicznych',
      'F. zakończenia procesów przyśpieszonego dojrzewania',
    ],
    c: [4],
    img: '',
  },
  {
    q: 'Pytanie 46 \nWeryfikując stan graniczny nośności w stadium realizacji (sprężania) dźwigara dwuteowego można otrzymać strefę ściskaną betonu:',
    a: ['A. dwuteową', 'B. prostokątną', 'C. teową'],
    c: [1, 2],
    img: '',
  },
  {
    q: 'Pytanie 47 \nDo strat siły sprężającej w konstrukcjach strunobetonowych zalicza się:',
    a: [
      'A. straty od tarcia w zakotwieniu i uchwytach',
      'B. straty wewnętrzne w urządzeniach naciągowych',
      'C. straty od tarcia w kanale kablowym',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 48 \nObliczając metodą analizy sprężystej strefę zakotwień w elemencie kablobetonowym:',
    a: [
      'A. można sprowadzić zagadnienie przestrzenne do analizy trzech zagadnień płaskich',
      'B. należy obowiązkowo rozwiązywać zagadnienia przestrzenne',
      'C. można sprowadzić zagadnienie przestrzenne do analizy dwóch zagadnień płaskich',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 49 \nPrzy sprężaniu ciężarem własnym lub balastem:',
    a: [
      'A. zmienia się położenie osi ciężkości elementu sprężanego',
      'B. dokonuje się zmiany trasy cięgien',
      'C. regułą jest zewnętrzne prowadzenie kabli',
      'D. regułą jest wewnętrzne prowadzenie kabli',
    ],
    c: [0, 2],
    img: '',
  },
  {
    q: 'Pytanie 50 \nTzw wskaźnik tęgości przekroju bezpośrednio wiąże ze sobą:',
    a: [
      'A. pole przekroju dźwigara',
      'B. wysokość dźwigara',
      'C. szerokość dźwigara',
      'D. ciężar własny dźwigara',
      'E. rozpiętość dźwigara',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 51 \nNaciąg cięgien odginanych może odbywać się:',
    a: [
      'A. niepełną siłą przy cięgnach prostoliniowych i dopiero po ich zakotwieniu dokonuje się ich odgięcia',
      'B. pełną siłą przy cięgnach prostoliniowych i dopiero po ich zakotwieniu dokonuje się ich odgięcia',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 52 \nWeryfikując stan graniczny nośności w stadium realizacji (sprężania) dźwigara rozważa się zagadnienie:',
    a: [
      'A. wyłącznie małego mimośrodu',
      'B. dużego mimośrodu lub małego mimośrodu',
      'C. wyłącznie dużego mimośrodu',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 53 \nPrzy sprężaniu odcinkowym zbiorników walcowych kablami półobwodowymi, wystarczają na obwodzie:',
    a: ['A. trzy pilastry', 'B. dwa pilastry', 'C. cztery pilastry'],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 54 \nWymagane pole przekroju półki górnej (Apg) belki sprężonej można wyznaczyć (z pewnym zapasem) z równania równowagi:',
    a: [
      'A. momentów w przekroju w fazie montażu (lub eksploatacji)',
      'B. momentów w przekroju w fazie realizacji (sprężania)',
      'C. wypadkowych sił w przekroju w fazie realizacji (sprężania)',
      'D. wypadkowych sił w przekroju w fazie montażu (lub eksploatacji)',
    ],
    c: [3],
    img: '',
  },
  {
    q: 'Pytanie 55 \nWarunek pojawienia się rys ukośnych sprawdza się w przekroju:',
    a: [
      'A. w połowie rozpiętości belki',
      'B. w strefie przypodporowej, w pobliżu bloku podporowego',
      'C. niebezpiecznym (w 1/3 lub ¼ rozpiętości belki)',
      'D. w miejscu żebra usztywniającego środnik',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 56 \nWspółczesne zunifikowane prasy kołowe Freyssineta, nadają się do ciśnienia rzędu:',
    a: ['A. 150 MPa', 'B. 1,5 MPa', 'C. 15 MPa', 'D. 0,15 MPa'],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 57 \nPrzy sprężaniu termicznym, z uwagi na większą odporność na wpływ temperatury, racjonalne jest stosowanie:',
    a: ['A. stali wysokowęglowych', 'B. stali stopowych'],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 58 \nSprawdzając warunek pojawienia się rys ukośnych należy wyznaczyć i porównać z wartością średniej wytrzymałości betonu na rozciąganie:',
    a: [
      'A. naprężenie normalne w kierunku równoległym do osi podłużnej elementu',
      'B. główne naprężenie rozciągające',
      'C. naprężenie styczne',
      'D. naprężenie normalne w kierunku prostopadłym do osi podłużnej elementu',
      'E. główne naprężenie ściskające',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 59 \nDo strat siły sprężającej w konstrukcjach kablobetonowych zalicza się:',
    a: [
      'A. straty od odkształceń sprężystych betonu',
      'B. straty opóźnione od relaksacji stali oraz skurczu i pełzania betonu',
      'C. straty od opóźnionych odkształceń styków',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 60 \nTechnologię kablobetonu wyróżniają następujące cechy:',
    a: [
      'A. naciąg cięgien wykonuje się po zabetonowaniu elementu',
      'B. przekazanie siły sprężającej na beton następuje poprzez docisk',
      'C. naciąg cięgien wykonuje się przed betonowaniem elementu',
      'D. przekazanie siły sprężającej na beton następuje za pomocą przyczepności',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 61 \nDo strat siły sprężającej w konstrukcjach kablobetonowych zalicza się:',
    a: [
      'A. straty od tarcia w kanale kablowym',
      'B. straty wewnętrzne w urządzeniach naciągowych',
      'C. straty od tarcia w zakotwieniu i uchwytach',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 62 \nWeryfikując stan graniczny nośności dźwigara sprężonego, konieczność obliczeń iteracyjnych pojawi się (z dużym prawdopodobieństwem):',
    a: [
      'A. konieczność obliczeń iteracyjnych nie pojawia się w żadnym stadium',
      'B. w stadium realizacji (sprężania) dźwigara',
      'C. w stadium montażu',
      'D. w stadium eksploatacji',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 63 \nZakotwienia dzwonowe występują przy sprężaniu kablami:',
    a: [
      'A. specjalnymi',
      'B. ze splotów',
      'C. wielodrutowymi',
      'D. linowymi',
      'E. prętowymi',
    ],
    c: [4],
    img: '',
  },
  {
    q: 'Pytanie 64 \nElementy strunobetonowe wytwarza się:',
    a: [
      'A. wyłącznie w zakładach prefabrykacji',
      'B. wyłącznie na budowie',
      'C. w zakładach prefabrykacji lub na budowie',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 65 \nWe współczesnych, zunifikowanych prasach kołowych Freyssineta, przemieszczenia dennych części prasy są rzędu:',
    a: ['A. 15 ÷ 35mm', 'B. 150 ÷ 350 mm', 'C. 1,5 ÷ 3,5 mm'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 66 \nPrzy produkcji strunobetonu cięgna sprężające są zakotwione w elementach oporowych na czas:',
    a: [
      'A. potrzebny do ustawienia form na torze',
      'B. betonowania i twardnienia betonu',
      'C. 7 dni',
      'D. 24 godziny',
      'E. relaksacji stali sprężającej',
      'F. niezbędny do przygotowania mieszanki betonowej',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 67 \nObliczając metodą analizy sprężystej strefę zakotwień w elemencie kablobetonowym:',
    a: [
      'A. należy zmienić metodę obliczeń, gdy ściany boczne elementu są obciążone',
      'B. można przyjąć uproszczenie, że ściany boczne elementu nie są obciążone (nawet gdy są)',
      'C. należy obowiązkowo uwzględnić obciążenie ścian bocznych elementu',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 68 \nW elementach strunobetonowych długość umożliwiająca osiągnięcie całej siły zrywającej cięgno w stanie granicznym nośności, to długość…',
    a: [
      'A. transmisji',
      'B. zakotwienia',
      'C. transferu',
      'D. dystrybucji',
      'E. strefy zaburzeń',
      'F. dyspersji',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 69 \nSprężanie rur lub konstrukcji kołowosymetrycznych, obciążonych od wnętrza daje… korzyści ekonomiczne:',
    a: ['A. największe', 'B. najmniejsze'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 70 \nPrzy sprężaniu z wykorzystaniem wygięcia zbrojenia sztywnego, zbrojenie sztywne wygina się wstępnie:',
    a: [
      'A. parami, rozpychając je wzajemnie prostopadle do płaszczyzny spodziewanego ugięcia eksploatacyjnego',
      'B. pojedynczo',
      'C. parami, rozpychając je wzajemnie w kierunku spodziewanego ugięcia eksploatacyjnego',
      'D. parami, rozpychając je wzajemnie w kierunku przeciwnym spodziewanego ugięcia eksploatacyjnego',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 71 \nEurokod 2 (EC2) określa … relaksacji stali:',
    a: ['A. jedną klasę', 'B. dwie klasy', 'C. trzy klasy', 'D. cztery klasy'],
    c: [2],
    img: 'images/71.png',
  },
  {
    q: 'Pytanie 72 \nPrzedstawiony powyżej wzór pozwala obliczyć doraźne ugięcie od sprężania w przypadku dźwigara o:',
    a: [
      'A. stałym przekroju i prostoliniowej trasie cięgien',
      'B. zmiennym przekroju (dźwigar dwuspadowy) i prostoliniowej trasie cięgien',
      'C. stałym przekroju i parabolicznej trasie cięgien',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 73 \nDo strat siły sprężającej w konstrukcjach strunobetonowych zalicza się:',
    a: [
      'A. straty od poślizgu w zakotwieniach',
      'B. straty od częściowej relaksacji stali',
      'C. straty od różnic temperatury',
      'D. straty od poślizgu w uchwytach technologicznych',
    ],
    c: [1, 2, 3],
    img: '',
  },
  {
    q: 'Pytanie 74 \nWartość straty od poślizgu w uchwytach technologicznych (w strunobetonie), przy produkcji metodą sztywnych form (krótkiej formie), może być nawet … od analogicznej straty na długim torze naciągowym:',
    a: [
      'A. 10-krotnie większa',
      'B. 2-krotnie większa',
      'C. 10-krotnie mniejsza',
      'D. 2-krotnie mniejsza',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 75 \nW konstrukcjach strunobetonowych, problem docisku w strefie zakotwień jest:',
    a: [
      'A. Istotniejszy niż w konstrukcjach kablobetonowych',
      'B. bezprzedmiotowy',
      'C. tak samo ważny jak w konstrukcjach kablobetonowych',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 76 \nObliczając metodą analizy sprężystej strefę zakotwień w elemencie kablobetonowym, jeśli stwierdza się, że siły nie działają prostopadle do płaszczyzny elementu:',
    a: [
      'A. można, upraszczając zagadnienie, pominąć składowe styczne sił',
      'B. należy obowiązkowo uwzględnić składowe styczne sił',
      'C. należy zmienić metodę obliczeń',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 77 \nWady sprężania odcinkowego zbiorników walcowych są bardziej istotne przy powłokach:',
    a: [
      'A. o większych grubościach',
      'B. o mniejszych grubościach',
      'C. grubość ściany nie ma w tym przypadku znaczenia',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 78 \nW przypadku zbiorników kołowo-symetrycznych spręża się:',
    a: [
      'A. powłoki denne zbiorników wyniesionych (wież ciśnień)',
      'B. zasadnicze powłoki walcowe (ściany zbiornika)',
      'C. pierścienie nasadowe kopuł (elementy przykrycia)',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 79 \nOprócz prostoliniowej trasy cięgien przy produkcji strunobetonu stosuje się:',
    a: [
      'A. rozłączane',
      'B. cięgna odginane',
      'C. cięgna rozginane',
      'D. przełączane',
      'E. cięgna rozplatane',
      'F. wyłączane',
    ],
    c: [1, 5],
    img: '',
  },
  {
    q: 'Pytanie 80 \nPrzy kolejnym naciągu kabli (w kablobetonie) strata z tytułu odkształceń sprężystych betonu jest największa w kablu:',
    a: [
      'A. kotwionym jako ostatni',
      'B. w każdym jest taka sama',
      'C. kotwionym jako pierwszy',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 81 \nPrzy sprężaniu odcinkowym zbiorników walcowych kable kotwi się:',
    a: [
      'A. w specjalnych pilastrach lub specjalnych gniazdach wciętych w powłokę',
      'B. tylko w specjalnych gniazdach wciętych w powłokę',
      'C. tylko w specjalnych pilastrach',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 82 \nSprawdzając warunek pojawienia się rys prostopadłych do osi elementu, naprężenia w skrajnych włóknach dolnych przekroju sprawdza się w stadium:',
    a: ['A. montażu', 'B. realizacji (sprężenia)', 'C. eksploatacji'],
    c: [0, 2],
    img: '',
  },
  {
    q: 'Pytanie 83 \nPotrzebną liczbę cięgien sprężających można oszacować biorąc pod uwagę m.in.:',
    a: [
      'A. wysokość przekroju dźwigara',
      'B. obliczeniowy moment zginający w rozpatrywanym przekroju',
      'C. szerokość przekroju dźwigara',
      'D. charakterystyczny moment zginający w rozpatrywanym przekroju',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 84 \nWeryfikując stan graniczny nośności w stadium montażu (lub eksploatacji) dźwigara wystarczy sprawdzić nośność:',
    a: [
      'A. wyłącznie z uwagi na moment',
      'B. zarówno z uwagi na siłę jak i moment',
      'C. wyłącznie z uwagi na siłę',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 85 \nStrata od odkształceń sprężystych betonu w strunobetonie jest procentowo …... niż w kablobetonie.',
    a: ['A. taka sama', 'B. mniejsza', 'C. większa'],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 86 \nZasięg strefy ściskanej w stanie granicznym nośności w stadium realizacji (sprężania) dźwigara wyznacza się z równania równowagi:',
    a: [
      'A. momentów względem środka ciężkości cięgien sprężających',
      'B. momentów względem środka ciężkości zbrojenia ściskanego ze stali zwykłej',
      'C. wypadkowych sił w przekroju',
      'D. momentów względem środka ciężkości zbrojenia rozciąganego ze stali zwykłej',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 87 \nPrasa płaska Freyssineta jest:',
    a: [
      'A. płaskim pojemnikiem metalowym z odkształcalnej blachy najczęściej o kształcie kołowym, czasem wydłużonym',
      'B. odmianą prasy przelotowej stosowaną wyłącznie do naciągu pojedynczych splotów o średnicy do 15,5 mm',
      'C. działa na zasadzie śruby rzymskiej, rozpychając konstrukcję poprzez mechaniczny obrót gwintowanego rdzenia',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 88 \nW elemencie kablobetonowym mogą występować zakotwienia:',
    a: ['A. czynne i bierne', 'B. tylko czynne', 'C. tylko bierne'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 89 \nProdukcja elementów strunobetonowych na torze naciągowym cechuje się:',
    a: [
      'A. nierównomiernym naciągiem splotów',
      'B. dużymi odcinkami traconej stali sprężającej, potrzebnej na zakotwienia technologiczne',
      'C. małymi odcinkami traconej stali sprężającej, potrzebnej na zakotwienia technologiczne',
      'D. równomiernym naciągiem splotów',
    ],
    c: [2, 3],
    img: '',
  },
  {
    q: 'Pytanie 90 \nWartość straty od poślizgu w zakotwieniach (w kablobetonie) zależy od:',
    a: [
      'A. modułu sprężystości stali sprężającej',
      'B. modułu sprężystości betonu',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 91 \nWartość straty od poślizgu w zakotwieniach (w kablobetonie) zależy od:',
    a: [
      'A. modułu sprężystości stali sprężającej',
      'B. wartość poślizgu',
      'C. pola powierzchni przekroju cięgien sprężających',
      'D. odległości rozpatrywanego przekroju od punktu przyłożenia siłownika naciągowego',
    ],
    c: [0, 1, 2, 3],
    img: '',
  },
  {
    q: 'Pytanie 92 \nKształtowanie elementów na torze odbywa się za pomocą stałych lub przesuwnych form:',
    a: [
      'A. nie obciążonych siłami naciągu',
      'B. przejmujących w całości siły naciągu cięgien podczas procesu dojrzewania betonu',
      'C. wyposażonych w zintegrowane siłowniki hydrauliczne utrzymujące naciąg każdego cięgna z osobna',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 93 \nPrzy sprężaniu termicznym są ograniczenia technologiczne związane z:',
    a: [
      'A. temperaturą',
      'B. zastosowaniem wyłącznie stali o niskiej granicy plastyczności',
      'C. koniecznością prowadzenia procesu wyłącznie w komorach próżniowych',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 94 \nZaleca się, aby w konstrukcjach kablobetonowych cięgna były rozmieszczone:',
    a: [
      'A. tak aby układ cięgien przyjmował kształt odwróconej litery T (jako najbardziej korzystny)',
      'B. tak, by środek ciężkości cięgien pokrywał się ze środkiem ciężkości półki dolnej (w miarę możliwości)',
      'C. przy zachowaniu nieparzystej liczby kolumn',
      'D. tak, by układ cięgien przyjmował kształt litery T (jako najbardziej korzystny)',
      'E. przy zachowaniu parzystej liczby kolumn',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 95 \nMaksymalną siłę naciągu określa się biorąc pod uwagę:',
    a: [
      'A. pole przekroju cięgna',
      'B. dopuszczalne maksymalne naprężenie w cięgnie podczas sprężania',
      'C. obliczeniową granicę plastyczności stali sprężającej',
      'D. siłę zrywającą cięgno (określoną w europejskiej aprobacie technicznej)',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 96 \nSprężenie przez poprzeczne przemieszczenie cięgien stosuje się:',
    a: [
      'A. przy sprężaniu zbiorników walcowych',
      'B. w elementach belkowych',
      'C. wyłącznie przy wzmacnianiu istniejących konstrukcji',
      'D. przy sprężaniu rur',
      'E. wyłącznie w nowych konstrukcjach',
      'F. zarówno w nowych jak i przy wzmacnianiu istniejących',
    ],
    c: [1, 5],
    img: '',
  },
  {
    q: 'Pytanie 97 \nSprężanie przez nawijanie zbiorników walcowych polega na tym, że nawija się spiralne druty na powłokę zbiornika, która może być:',
    a: [
      'A. wykonana w deskowaniu ślizgowym',
      'B. wykonana w deskowaniu przestawnym',
      'C. zestawiona z prefabrykatów',
      'D. wykonana metodą wirowania',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 98 \nNawijarka obiegowa to takie urządzenie, w którym:',
    a: [
      'A. wózek napędowy wraz z obsługą usytuowany jest na górnej krawędzi powłoki',
      'B. naciąg realizowany jest za pomocą sztywnego ramienia',
      'C. sztywne ramię zamocowane jest na górnym wózku napędowym',
      'D. platforma zawieszona jest na linach łączących ją z górnym wózkiem tocznym',
      'E. urządzenia napędowe i naciągowe umieszczone są na jednej platformie',
      'F. obsługa sterująca nawijaniem przebywa na platformie',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 99 \nTechnologię strunobetonu wyróżniają następujące cechy:',
    a: [
      'A. przekazanie siły sprężającej na beton następuje za pomocą przyczepności',
      'B. naciąg cięgien wykonuje się po zabetonowaniu elementu',
      'C. naciąg cięgien wykonuje się przed betonowaniem elementu',
      'D. przekazanie siły sprężającej na beton następuje poprzez docisk',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 100 \nObliczając strefę zakotwień w elemencie strunobetonowym, określa się (zgodnie z EC2) m.in. długość zwaną długością:',
    a: [
      'A. dyspersji',
      'B. transmisji',
      'C. transferu',
      'D. Relacji',
      'E. Przekazu',
      'F. Przesyłu',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 101 \nEkspansja betonu:',
    a: [
      'A. eliminuje wpływ skurczu',
      'B. umożliwia zwiększenie odstępów dylatacji',
      'C. jest trudna do kontrolowania',
      'D. jest łatwa do kontrolowania',
      'E. nie eliminuje wpływów skurczu',
      'F. wymusza zmniejszenie odstępów dylatacji',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 102 \nWartość straty od odkształceń sprężystych betonu:',
    a: [
      'A. zależy od charakterystyk geometrycznych przekroju',
      'B. nie zależy od charakterystyk geometrycznych przekroju',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 103 \nProdukcja elementów strunobetonowych cechuje się:',
    a: [
      'A. ograniczonymi możliwościami zabiegów przyspieszających twardnienie betonu',
      'B. brakiem konieczności stosowania betonów o wysokich klasach wytrzymałości (powyżej C20/25)',
      'C. możliwością zwolnienia naciągu cięgien natychmiast po zawibrowaniu mieszanki betonowej w formach',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 104 \nPrzy sprężaniu kablami linowymi w zakotwieniu czynnym stosuje się zakotwienie:',
    a: [
      'A. z wykorzystaniem tulei (zagwintowanej na cięgnie) zewnętrznie nagwintowanej',
      'B. głowicowanie',
      'C. z wykorzystaniem stożkowych szczęk dwu- lub trójdzielnych',
      'D. z wykorzystaniem rozplecionych elementów cięgna zalanych stopem metali',
      'E. tarciowe blokujące',
      'F. gwintowane (nagwintowane cięgno, nakrętka)',
      'G. typu stożkowego (np. stożek podłużnie rowkowany)',
    ],
    c: [0, 3],
    img: '',
  },
  {
    q: 'Pytanie 105 \nPrzedstawiony powyżej wzór pozwala na obliczyć doraźne ugięcie od sprężania w przypadku dźwigara o:',
    a: [
      'A. zmiennym przekroju (dźwigar dwuspadowy) i prostoliniowej trasie cięgien',
      'B. stałym przekroju i parabolicznej trasie cięgien',
      'C. stałym przekroju i prostoliniowej trasie cięgien',
    ],
    c: [0],
    img: 'images/105.png',
  },
  {
    q: 'Pytanie 106 \nWartość straty od tarcia w kanale kablowym zależy od:',
    a: [
      'A. charakterystyka geometrycznych przekroju',
      'B. suma kątów zakrzywienia trasy cięgna',
      'C. moduł sprężystości stali sprężającej',
      'D. moduł sprężystości betonu',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 107 \nSprężanie termiczne rur polega na:',
    a: [
      'A. umieszczeniu na rurze rozgrzanych obręczy metalowych',
      'B. nawijaniu na rdzeń rury rozgrzanych cięgien',
      'C. nawijaniu cięgien na rozgrzany rdzeń rury',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 108 \nZakotwienie wachlarzowe, z indywidualnymi zakotwieniami biernymi, to rodzaj zakotwienia biernego:',
    a: [
      'A. kabla ze splotów',
      'B. kabla specjalnego',
      'C. kabla wielodrutowego',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 109 \nProjektując niezarysowaną belkę sprężoną (kategorii 1a lub 1b) można dopuścić niespełnienie warunku pojawienia się rys prostopadłych do elementu w stadium:',
    a: ['A. montażu', 'B. eksploatacji', 'C. realizacji (sprężenia)'],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 110 \nPrzy produkcji potokowej formy:',
    a: [
      'A. poruszają się wzdłuż linii kolejnych wyspecjalizowanych stanowisk, często łącznie z tunelem przyspieszonego dojrzewania betonu',
      'B. znajdują się na jednym stanowisku, na którym kolejno wykonuje się: naciąg, betonowanie, pielęgnację betonu, sprężenie i rozformowanie elementów',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 111 \nSprężanie odcinkowe zbiorników walcowych wiąże się z koniecznością konstruowania lokalnych pogrubień (pilastrów) celem umożliwienia kotwienia cięgien. Jest to przyczyną powstawania dodatkowych:',
    a: [
      'A. momentów zginających w powłoce',
      'B. sił równoleżnikowych w powłoce',
      'C. sił południkowych w powłoce',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 112 \nPrzy sprężaniu kablami ze splotów, w zakotwieniu czynnym stosuje się zakotwienia:',
    a: [
      'A. z zastosowaniem stożkowych szczęk dwu- lub trójdzielnych',
      'B. gwintowe (nagwintowane cięgno, nakrętka)',
      'C. z wykorzystaniem rozplecionych elementów cięgna zalanych stopem metali',
      'D. typu stożkowego (np. Stożek podłużnie rowkowany)',
      'E. z wykorzystaniem tulei (zawalcowanej na cięgnie) zewnętrznie nagwintowanej',
      'F. tarciowe blokujące',
      'G. głowicowe',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 113 \nZakotwienie półpętlicowe z opornikiem, to rodzaj zakotwienia biernego:',
    a: [
      'A. kabla wielodrutowego',
      'B. kabla ze splotów',
      'C. kabla specjalnego',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 114 \nW rurach o bardzo dużych średnicach stosuje się:',
    a: ['A. kable pełnoobwodowe', 'B. kable odcinkowe'],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 115 \nObliczając strefę zakotwień w elemencie strunobetonowym, określa się (zgodnie z EC2) m.in. długość zwaną długością:',
    a: [
      'A. dyspraksji',
      'B. dysleksji',
      'C. dystrybucji',
      'D. dysplazji',
      'E. dyspersji',
    ],
    c: [4],
    img: '',
  },
  {
    q: 'Pytanie 116 \nW rurach o bardzo dużych średnicach stosuje się:',
    a: [
      'A. kable umieszczone w grubości ściany rury',
      'B. kable umieszczone na zewnętrznej powierzchni ściany rury',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 117 \nW rurach o bardzo dużych średnicach stosuje się:',
    a: [
      'A. kable kotwione w specjalnych pilastrach',
      'B. kable kotwione w specjalnych gniazdach',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 118 \nPrzy produkcji rur sprężonych metodą nawijania szybkość ruchu podłużnego naciągarki:',
    a: [
      'A. nie ma wpływu na intensywność siły sprężającej przekazywanej na jednostkę długości rury',
      'B. decyduje o intensywności siły sprężającej przekazywanej na jednostkę długości rury',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 119 \nW przypadku konstrukcji kablobetonowych przy nowoczesnych zakotwieniach ze stalowymi odlewami bloków kotwiących... konstruując zbrojenie strefy zakotwień:',
    a: [
      'A. można wybiórczo stosować zalecenia producenta zakotwień',
      'B. należy w pełni bazować na zaleceniach producenta zakotwień',
      'C. przede wszystkim należy samodzielnie przeprowadzić stosowne obliczenia, opcjonalnie stosując wybrane zalecenia producenta zakotwień',
      'D. należy traktować zalecenia producenta zakotwień jako jedną z możliwych opcji',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 120 \nZakotwienie pętlicowe z opornikiem, to rodzaj zakotwienia biernego:',
    a: [
      'A. kabla wielodrutowego',
      'B. kabla ze splotów',
      'C. kabla specjalnego',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 121 \nDo strat siły sprężającej w konstrukcjach strunobetonowych zalicza się:',
    a: [
      'A. straty od różnic temperatury',
      'B. straty od częściowej relaksacji stali',
      'C. straty od poślizgu w uchwytach technologicznych',
      'D. straty od poślizgu w zakotwieniach',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 122 \nSprężanie zbiorników walcowych wykonuje się:',
    a: [
      'A. metodą nawijania kabli',
      'B. tylko za pomocą kabli',
      'C. metodą naciągu sukcesywnego',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 123 \nFormy do produkcji elementów strunobetonowych metodą sztywnych form:',
    a: [
      'A. mogą przenosić siły naciągu cięgien',
      'B. nie mogą przenosić sił naciągu cięgien',
      'C. muszą przenosić siły naciągu cięgien',
      'D. nie muszą przenosić sił naciągu cięgien',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 124 \nPrzy sprężaniu kablami prętowymi, w zakotwieniu czynnym stosuje się zakotwienia:',
    a: [
      'A. z zastosowaniem stożkowych szczęk dwu- lub trójdzielnych',
      'B. gwintowe (nagwintowane cięgno, nakrętka)',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 125 \nSprężanie z wykorzystaniem betonu ekspansywnego stosuje się przede wszystkim przy masywnych konstrukcjach, gdzie naprężenia w betonie:',
    a: ['A. nie muszą być duże', 'B. muszą być duże'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 126 \nPrzy produkcji rur sprężonych metodą nawijania, hamowanie cięgna:',
    a: [
      'A. wywołuje siłę naciągu',
      'B. służy wyłącznie do zmiany kierunku prowadzenia drutu bez wpływu na jego naprężenie',
      'C. odbywa się poprzez swobodne rozwijanie kręgu stali bez użycia jakichkolwiek urządzeń dociskowych',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 127 \nZastosowanie kablobetonu przy sprężaniu powłok zbiorników rozpoczęto od używania cięgien podzielonych na kilka odcinków na obwodzie, ze względu na:',
    a: [
      'A. znaczne straty naciągu, powodowane tarciem',
      'B. konieczność zapewnienia swobodnego przepływu cieczy wewnątrz kanałów kablowych przed ich zainiektowaniem',
      'C. wymóg stosowania wyłącznie krótkich odcinków stali ze względu na jej niską wytrzymałość na rozciąganie przy dużych długościach',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 128 \nPrzedstawiony poniżej wzór pozwala obliczyć doraźne ugięcie od sprężania w przypadku dźwigara o:',
    a: [
      'A. stałym przekroju i parabolicznej trasie cięgien',
      'B. zmiennym przekroju i prostoliniowej trasie cięgien ułożonych wzdłuż górnej półki',
      'C. stałym przekroju i cięgnach ułożonych w osi obojętnej elementu na całej jego długości',
    ],
    c: [0],
    img: 'images/128.png',
  },
  {
    q: 'Pytanie 129 \nJeśli w trakcie sprawdzania warunku zarysowania (rysy prostopadłe) w stadium montażu dźwigara nie spełniono warunku (rysy się pojawią), to w stadium eksploatacji warunek:',
    a: [
      'A. na pewno się sprawdził (rysy się nie pojawią)',
      'B. na pewno się nie sprawdził (rysy się pojawią)',
      'C. może się sprawdzić lub nie',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 130 \nWeryfikując stan graniczny nośności w stadium realizacji (sprężania) dźwigara przyjmuje się odpowiednio powiększoną siłę sprężającą:',
    a: [
      'A. po stratach technologicznych i doraźnych',
      'B. początkową',
      'C. po stratach całkowitych',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 131 \nPrzy sprężaniu z wykorzystaniem wygięcia zbrojenia sztywnego, zbrojeniem sprężającym jest sztywny element:',
    a: [
      'A. walcowany o stali o podwyższonej wytrzymałości',
      'B. betonowy prefabrykowany o wysokiej klasie wytrzymałości',
      'C. drewniany o przekroju prostokątnym wzmocniony żywicą',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 132 \nW normalnej temperaturze (20°C) po ok. 4 dniach (100 godzin) zachodzi ____ strat od relaksacji oszacowanych dla ok. 40 dni (1000 godzin):',
    a: ['A. 55 %', 'B. 65 %', 'C. 45 %', 'D. 50 %'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 133 \nSprężanie zbiorników walcowych jest opłacalne już od pojemności:',
    a: ['A. 500 m3', 'B. 400 m3', 'C. 600 m3'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 134 \nDo strat siły sprężającej w konstrukcjach kablobetonowych zalicza się:',
    a: [
      'A. straty od odkształceń sprężystych betonu',
      'B. straty opóźnione od relaksacji stali oraz skurczu i pełzania betonu',
      'C. straty od opóźnionych odkształceń styków',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 135 \nSprawdzając warunek pojawienia się rys prostopadłych do osi elementu, naprężenia w skrajnych włóknach górnych przekroju sprawdza się w stadium:',
    a: [
      'A. stadium realizacji (sprężania)',
      'B. w stadium montażu',
      'C. w stadium eksploatacji',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 136 \nZaleca się, aby w konstrukcjach strunobetonowych cięgna rozmieszczone były:',
    a: [
      'A. w układzie ortogonalnym',
      'B. tak, by środek ciężkości cięgien pokrywał się ze środkiem ciężkości półki dolnej (w miarę możliwości)',
      'C. przy zachowaniu nieparzystej liczby kolumn',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 137 \nNawijarka karuzelowa to takie urządzenie, w którym:',
    a: [
      'A. urządzenie napędowe i naciągowe umieszczone na jednej platformie',
      'B. obsługa sterująca nawijaniem przebywa na platformie',
      'C. platforma zawieszona jest na linach łączących ją z górnym wózkiem tocznym',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 138 \nPrzy stałym przekroju elementu strunobetonowego formowanie agregatowe na torze jest:',
    a: ['A. wskazane', 'B. niewskazane'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 139 \nStosując elektronagrzew przy sprężaniu termicznym rur uzyskuje się temperatury rzędu:',
    a: ['A. 250-300 °C', 'B. 200-300 °C', 'C. 300-350 °C'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 140 \nPotrzebną liczbę cięgien sprężających można oszacować biorąc pod uwagę m.in.:',
    a: [
      'A. obliczeniową granicę plastyczności stali sprężającej',
      'B. pole przekroju pojedynczego cięgna',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 141 \nDługość, na której siła sprężająca zostaje w pełni przekazana z cięgien na beton (w elementach strunobetonowych), to długość:',
    a: [
      'A. dyspersji',
      'B. dystrybucji',
      'C. transmisji',
      'D. transferu',
      'E. zakotwienia',
      'F. strefy zaburzeń',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 142 \nUrządzenia do nawijania drutów lub splotów na powłokę zbiornika, to nawijarki:',
    a: ['A. karuzelowe', 'B. obiegowe'],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 143 \nWyznaczając efektywny moduł sprężystości betonu Ec,eff należy uwzględnić:',
    a: [
      'A. współczynnik pełzania',
      'B. wyłącznie doraźną wytrzymałość betonu na rozciąganie fctm',
      'C. współczynnik Poissona dla stali sprężającej',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 144 \nPrzy produkcji rur sprężonych metodą nawijania, ułożenie zewnętrznej, otulającej warstwy betonu wykonuje się:',
    a: [
      'A. wyłącznie poprzez natrysk',
      'B. wyłącznie za pomocą ślizgowej formy',
      'C. poprzez natrysk lub za pomocą ślizgowej formy',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 145 \nNaciąg cięgien odginanych może odbywać się:',
    a: [
      'A. niepełną siłą przy założeniu specjalnych uchwytów',
      'B. wyłącznie po całkowitym stwardnieniu betonu we wszystkich przęsłach konstrukcji jednocześnie',
      'C. bez użycia jakichkolwiek urządzeń pomocniczych, wykorzystując jedynie ciężar własny elementu',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 146 \nStrata od odkształceń sprężystych betonu w kablobetonie jest procentowo... niż w strunobetonie:',
    a: ['A. mniejsza', 'B. większa', 'C. taka sama'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 147 \nObliczając strefę zakotwień w elemencie strunobetonowym, określa się (zgodnie z EC2) m.in. długość zwaną długością:',
    a: [
      'A. transmisji',
      'B. transferu',
      'C. relacji',
      'D. przekazu',
      'E. przesyłu',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 148 \nPrzy sprężaniu prasami płaskimi i klinami:',
    a: [
      'A. obraz stanu granicznego złamania jest jasny i czytelny',
      'B. elementom konstrukcji nie grozi wyboczenie od sprężenia',
      'C. elementom konstrukcji grozi wyboczenie od sprężenia',
      'D. niejasny jest obraz stanu granicznego złamania',
    ],
    c: [2, 3],
    img: '',
  },
  {
    q: 'Pytanie 149 \nPotrzebną liczbę cięgien sprężających można oszacować biorąc pod uwagę m.in.:',
    a: [
      'A. wysokość przekroju dźwigara',
      'B. obliczeniowy moment zginający w rozpatrywanym przekroju',
      'C. szerokość przekroju dźwigara',
      'D. charakterystyczny moment zginający w rozpatrywanym przekroju',
    ],
    c: [1, 2],
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
function resetMainStats() {
  correctCount = 0;
  wrongCount = 0;
  currentIdx = 0; // Resetujemy indeks pytania do 0 (pierwsze pytanie)
  // Jeśli używasz procentów w statystykach, updateStats wszystko przeliczy
  updateStats(); // Odświeżamy widoczne statystyki punktowe
  loadQuestion(); // Ładujemy pierwsze pytanie od nowa, co zaktualizuje napis "Pytanie 1 z 148"
  console.log('Statystyki testu zostały zresetowane po poprawieniu błędów.');
}
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
function renderImage(qData) {
  // 1. Sprawdzamy, czy w obiekcie pytania jest ścieżka do zdjęcia
  if (qData.img && qData.img !== '') {
    const imgDiv = document.createElement('div');

    // Nadajemy style, aby obrazek był wycentrowany i dopasowany
    imgDiv.style.cssText = 'margin: 15px 0; text-align: center; width: 100%;';

    imgDiv.innerHTML = `
      <img src="${qData.img}" alt="Ilustracja do pytania" 
           style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.15);">
    `;

    // Dodajemy obrazek do questionArea (zostanie dodany pod tekstem pytania)
    questionArea.appendChild(imgDiv);
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
  //  WYWOŁANIE FUNKCJI OBRAZKA (to dodajemy teraz)
  renderImage(qData);
  qData.a.forEach((ans, i) => {
    const div = document.createElement('div');
    div.id = `opt-container-${i}`;
    // div.style.cssText =
    //   'padding: 12px; margin: 8px 0; border: 1px solid #ddd; border-radius: 8px; cursor: pointer; transition: 0.3s; display: flex; align-items: center;';
    // USUNĘLIŚMY cssText, ZAMIAST TEGO DODAJEMY KLASĘ:
    div.className = 'answer-card';

    div.innerHTML = `
        <input type="checkbox" value="${i}" class="ans-checkbox" 
               style="margin-right: 15px; transform: scale(1.2); pointer-events: none;">
        <span style="font-size: 1.05rem; pointer-events: none;">${ans}</span>
    `;
    // Usunąłem label, aby nie dublować kliknięć. Używamy spanu.
    div.innerHTML = `
        <input type="checkbox" value="${i}" class="ans-checkbox" 
               style="margin-right: 15px; transform: scale(1.2); pointer-events: none;">
        <span style="font-size: 1.05rem; pointer-events: none;">${ans}</span>
    `;

    div.onclick = () => {
      if (isChecked) return;

      const cb = div.querySelector('input');
      cb.checked = !cb.checked; // Ręcznie przełączamy stan

      // Opcjonalne: Wizualne podświetlenie kafelka po zaznaczeniu
      if (cb.checked) {
        div.style.backgroundColor = '#eef6ff';
        div.style.borderColor = '#007bff';
      } else {
        div.style.backgroundColor = '#fff';
        div.style.borderColor = '#ddd';
      }
    };

    questionArea.appendChild(div);
  });
  startTimer();
}

nextBtn.onclick = () => {
  const checkboxes = document.querySelectorAll('.ans-checkbox');
  const selected = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => parseInt(cb.value));
  const qData = questions[currentIdx]; // Pobieramy dane aktualnego pytania
  const correct = qData.c;

  if (selected.length === 0 && !isChecked) {
    alert('Wybierz odpowiedź!');
    return;
  }

  if (!isChecked) {
    clearInterval(timerInterval); // Zatrzymujemy odliczanie po kliknięciu "Sprawdź"
    const isCorrect =
      selected.length === correct.length &&
      selected.every(val => correct.includes(val));

    if (isCorrect) {
      correctCount++;
    } else {
      wrongCount++;

      // --- NOWA LOGIKA PULI BŁĘDÓW (Dodana bez usuwania reszty) ---
      if (!wrongQuestionsPool.some(q => q.q === qData.q)) {
        wrongQuestionsPool.push(qData);
        updateWrongBadge(); // Ta funkcja musi być zdefiniowana w Twoim kodzie
      }
      // ----------------------------------------------------------
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
let timerInterval; // Zmienna przechowująca interwał odliczania
const TIME_LIMIT = 60; // Limit czasu w sekundach

function startTimer() {
  let timeLeft = TIME_LIMIT;
  const display = document.getElementById('timer-display');
  display.innerText = timeLeft + 's';
  display.style.color = '#e74c3c'; // Reset koloru na czerwony/standardowy

  // Czyścimy stary interwał, jeśli istniał
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    display.innerText = timeLeft + 's';

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeIsUp(); // Wywołujemy funkcję końca czasu
    }
  }, 1000);
}

function timeIsUp() {
  if (isChecked) return;

  isChecked = true;
  clearInterval(timerInterval); // Zatrzymujemy timer

  wrongCount++;
  updateStats();

  const qData = questions[currentIdx];
  const correctAnswers = qData.c; // Tablica z indeksami poprawnych odp.

  // Przechodzimy przez wszystkie kafelki, aby pokazać poprawne odpowiedzi
  qData.a.forEach((ans, i) => {
    const div = document.getElementById(`opt-container-${i}`);
    if (div) {
      if (correctAnswers.includes(i)) {
        // Podświetlamy poprawną odpowiedź na zielono
        div.style.backgroundColor = '#d4edda';
        div.style.borderColor = '#28a745';
        div.style.color = '#155724';
        div.style.fontWeight = 'bold';
      } else {
        // Resztę lekko wygaszamy
        div.style.opacity = '0.6';
      }
    }
  });

  // Informacja dla użytkownika
  questionArea.innerHTML += `
        <div style="color: #e74c3c; font-weight: bold; text-align: center; margin-top: 20px; padding: 10px; border: 2px dashed #e74c3c; border-radius: 8px;">
            CZAS MINĄŁ! <br> <span style="color: #28a745;">Zielonym kolorem zaznaczono poprawne odpowiedzi.</span>
        </div>
    `;

  nextBtn.innerText = 'Następne pytanie »';
}
loadQuestion();
// --- LOGIKA OBSŁUGI MODALA I POWTÓREK ---

const modal = document.getElementById('wrong-modal');
const openModalBtn = document.getElementById('open-wrong-btn');
const closeModal = document.getElementById('close-modal');
const modalQuestionArea = document.getElementById('modal-question-area');
const modalNextBtn = document.getElementById('modal-next-btn');
const modalHintBtn = document.getElementById('modal-hint-btn');

modalHintBtn.onclick = () => {
  const qData = wrongQuestionsPool[currentModalIdx];
  const correctIndices = qData.c; // Pobieramy indeksy poprawnych odpowiedzi

  // Pobieramy wszystkie kafelki w modalu
  const cards = modalQuestionArea.querySelectorAll('.answer-card');

  cards.forEach((card, index) => {
    if (correctIndices.includes(index)) {
      // Podświetlamy poprawne na delikatny zielony
      card.style.border = '2px dashed #27ae60';
      card.style.backgroundColor = '#f0fff4';

      // Opcjonalnie: zaznaczamy checkbox za użytkownika
      const cb = card.querySelector('input');
      if (cb) cb.checked = true;
    }
  });

  modalHintBtn.innerText = 'Podpowiedziano!';
  modalHintBtn.disabled = true;
  modalHintBtn.style.opacity = '0.6';
};
let currentModalIdx = 0;
let isModalChecked = false;
// RESET PRZYCISKU PODPOWIEDZI
modalHintBtn.innerText = 'Pokaż poprawne odpowiedzi (Podpowiedź)';
modalHintBtn.disabled = false;
modalHintBtn.style.opacity = '1';

modalNextBtn.innerText = 'Sprawdź odpowiedź';
// Funkcja aktualizująca czerwony przycisk (pokazuje/ukrywa i odświeża licznik)
function updateWrongBadge() {
  const badge = document.getElementById('wrong-count-badge');
  const btn = document.getElementById('open-wrong-btn');
  if (badge && btn) {
    badge.innerText = wrongQuestionsPool.length;
    btn.style.display = wrongQuestionsPool.length > 0 ? 'block' : 'none';
  }
}

// Otwieranie okna powtórek
openModalBtn.onclick = () => {
  if (wrongQuestionsPool.length === 0) return;
  currentModalIdx = 0;
  modal.style.display = 'block';
  loadModalQuestion();
};

// Zamykanie okna
closeModal.onclick = () => {
  modal.style.display = 'none';
};

// Ładowanie pytania do okna powtórek
function loadModalQuestion() {
  isModalChecked = false;
  if (modalHintBtn) {
    modalHintBtn.innerText = 'Pokaż poprawne odpowiedzi (Podpowiedź)';
    modalHintBtn.disabled = false;
    modalHintBtn.style.opacity = '1';
    modalHintBtn.style.background = '#f39c12';
  }
  modalNextBtn.innerText = 'Sprawdź odpowiedź';
  modalNextBtn.style.background = '#27ae60';
  const qData = wrongQuestionsPool[currentModalIdx];

  modalQuestionArea.innerHTML = `
        <div style="color: #e74c3c; font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
            TRYB POWTÓRKI: Zostało ${wrongQuestionsPool.length} pytań
        </div>
        <h3 style="margin-bottom: 20px;">${qData.q}</h3>
    `;

  qData.a.forEach((ans, i) => {
    const div = document.createElement('div');
    div.className = 'answer-card';
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.padding = '12px';
    div.style.margin = '8px 0';
    div.style.border = '1px solid #ddd';
    div.style.borderRadius = '8px';
    div.style.cursor = 'pointer';

    div.innerHTML = `
            <input type="checkbox" value="${i}" class="modal-cb" style="margin-right: 15px; pointer-events: none;">
            <span style="pointer-events: none;">${ans}</span>
        `;

    div.onclick = () => {
      if (isModalChecked) return;
      const cb = div.querySelector('input');
      cb.checked = !cb.checked;
      div.style.backgroundColor = cb.checked ? '#eef6ff' : '#fff';
    };
    modalQuestionArea.appendChild(div);
  });
}

// Logika przycisku podpowiedzi (Hint)
modalHintBtn.onclick = () => {
  const qData = wrongQuestionsPool[currentModalIdx];
  const correctIndices = qData.c;
  const cards = modalQuestionArea.querySelectorAll('.answer-card');

  cards.forEach((card, index) => {
    const cb = card.querySelector('input');
    if (correctIndices.includes(index)) {
      // Podświetlamy tylko faktycznie poprawne odpowiedzi
      card.style.border = '2px dashed #27ae60';
      card.style.backgroundColor = '#f0fff4';
      if (cb) cb.checked = true;
    } else {
      // Czyścimy wszystko inne, co użytkownik mógł zaznaczyć błędnie
      card.style.border = '1px solid #ddd';
      card.style.backgroundColor = '#fff';
      if (cb) cb.checked = false;
    }
  });

  modalHintBtn.innerText = 'Podpowiedziano!';
  modalHintBtn.disabled = true;
  modalHintBtn.style.opacity = '0.6';
};

// Logika przycisku "Dalej" wewnątrz okna powtórek
modalNextBtn.onclick = () => {
  const qData = wrongQuestionsPool[currentModalIdx];

  if (!isModalChecked) {
    const selected = Array.from(document.querySelectorAll('.modal-cb'))
      .filter(cb => cb.checked)
      .map(cb => parseInt(cb.value));

    const isCorrect =
      selected.length === qData.c.length &&
      selected.every(val => qData.c.includes(val));

    if (isCorrect) {
      wrongQuestionsPool.splice(currentModalIdx, 1);
      modalQuestionArea.innerHTML += `<div style="color: #27ae60; font-weight: bold; margin-top: 15px; text-align: center;">✔ Dobrze! Pytanie usunięte z listy błędów.</div>`;
      if (currentModalIdx >= wrongQuestionsPool.length) currentModalIdx = 0;
    } else {
      currentModalIdx = (currentModalIdx + 1) % wrongQuestionsPool.length;
      modalQuestionArea.innerHTML += `<div style="color: #e74c3c; font-weight: bold; margin-top: 15px; text-align: center;">✖ Nadal błąd! Pytanie wróci do Ciebie w tej pętli.</div>`;
    }

    isModalChecked = true;
    modalNextBtn.innerText = 'Następne';
    modalNextBtn.style.background = '#3498db';
    updateWrongBadge();
  } else {
    if (wrongQuestionsPool.length === 0) {
      modal.style.display = 'none';
      resetMainStats();
      alert(
        'Gratulacje! Wszystkie błędy poprawione. Statystyki główne zostały wyzerowane.',
      );
    } else {
      if (currentModalIdx >= wrongQuestionsPool.length) currentModalIdx = 0;
      loadModalQuestion();
    }
  }
};
