// KOMPLETNA BAZA PYTAŃ (1-148)
const rawQuestions = [
  {
    q: 'Pytanie 1: Przy sprężaniu z wykorzystaniem ekspansji betonu:',
    a: [
      'najłatwiej jest uzyskiwać sprężenie równomierne',
      'duże możliwości regulowania położenia wypadkowej siły sprężającej w przekroju',
      'najłatwiej jest uzyskiwać sprężenie nierównomierne',
      'niewielkie możliwości regulowania położenia wypadkowej siły sprężającej w przekroju',
    ],
    c: [0, 3],
  },
  {
    q: 'Pytanie 2: Sprężanie termiczne rur jest najczęściej stosowane:',
    a: [
      'przy usuwaniu skutków awarii',
      'przy masowej produkcji',
      'wyłącznie w zakładach prefabrykacji',
      'przy wzmocnieniach',
    ],
    c: [0, 3],
  },
  {
    q: 'Pytanie 3: Przy sprężaniu kablami wielodrutowymi, w zakotwieniu czynnym stosuje się zakotwienia:',
    a: [
      'z wykorzystaniem rozplecionych elementów cięgna zalanych stopem metali',
      'z zastosowaniem stożkowych szczęk dwu- lub trójdzielnych',
      'gwintowe (nagwintowane cięgno, nakrętka)',
      'z wykorzystaniem tulei (zawalcowanej na cięgnie) zewnętrznie nagwintowanej',
      'tarciowe blokujące',
      'typu stożkowego (np. stożek podłużnie rowkowany)',
      'głowicowe',
    ],
    c: [4, 5, 6],
  },
  {
    q: 'Pytanie 4: Jednym z założeń upraszczających w metodzie analizy sprężystej strefy zakotwień w elemencie kablobetonowym jest przyjęcie, że zasięg strefy zaburzeń jest równy:',
    a: ['wysokość środnika belki', 'szerokość belki', 'wysokość belki'],
    c: [2],
  },
  {
    q: 'Pytanie 5: Wartość straty z tytułu wpływy różnic temperatury, wywołanych obróbką cieplną betonu na długim torze naciągowym będzie:',
    a: ['większa', 'mniejsza', 'taka sama'],
    c: [0],
  },
  {
    q: 'Pytanie 6: Sprawdzając warunek pojawienia się rys ukośnych w belce sprężonej o przekroju dwuteowym, sprawdza się naprężenia we włóknach:',
    a: [
      'na styku środnika i półki górnej',
      'skrajnych górnych',
      'na styku środnika i półki dolnej',
      'na poziomie środka ciężkości przekroju',
      'skrajnych dolnych',
    ],
    c: [0, 2, 3],
  },
  {
    q: 'Pytanie 7: Elektronagrzew stosowany przy naciągu termicznym cięgien polega na przepływie prądu o:',
    a: [
      'wysokim natężeniu i wysokim napięciu',
      'wysokim natężeniu i niskim napięciu',
      'niskim natężeniu i wysokim napięciu',
      'niskim natężeniu i niskim napięciu',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 8: W elementach strunobetonowych długość, wzdłuż której naprężenia normalne w betonie stopniowo rozprzestrzeniają się na cały przekrój i -jak się zakłada- osiągają rozkład liniowy to długość:',
    a: ['transferu', 'dystrybucji', 'transmisji', 'dyspersji', 'zakotwienia'],
    c: [3],
  },
  {
    q: 'Pytanie 9: Metodą nawijania można sprężać rury:',
    a: [
      'zarówno o niewielkich jak i dużych średnicach',
      'wyłącznie o niewielkich średnicach',
      'wyłącznie o dużych średnicach',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 10: Sprężanie z wykorzystaniem ekspansji betonu jest najbardziej przydatne w elementach:',
    a: [
      'osiowo rozciąganych',
      'zginanych',
      'mimośrodowo rozciąganych',
      'osiowo ściskanych',
      'mimośrodowo ściskanych',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 11: Przy produkcji rur sprężonych metodą nawijania, cięgna nawija się na:',
    a: [
      'nieruchomy rdzeń betonowy rury ustawiony w pozycji poziomej',
      'obracający się rdzeń betonowy rury ustawiony w pozycji pionowej',
      'nieruchomy rdzeń betonowy rury ustawiony w pozycji pionowej',
      'obracający się rdzeń betonowy rury ustawiony w pozycji poziomej',
    ],
    c: [1, 3],
  },
  {
    q: 'Pytanie 12: Długość, na której siła sprężająca zostaje w pełni przekazana z cięgien na beton (w elementach strunobetonowych) to długość:',
    a: [
      'strefy zaburzeń',
      'transferu',
      'dystrybucji',
      'zakotwienia',
      'dyspersji',
      'transmisji',
    ],
    c: [5],
  },
  {
    q: 'Pytanie 13: Strata od częściowej relaksacji stali (w strunobetonie) wpływa:',
    a: ['nierównomiernie na całe cięgno', 'równomiernie na całe cięgno'],
    c: [1],
  },
  {
    q: 'Pytanie 14: Przy sprężaniu z wykorzystaniem wygięcia zbrojenia sztywnego, uzyskany w ten sposób element wykazuje:',
    a: [
      'znaczny przyrost nośności na zginanie',
      'znaczny wzrost rysoodporności',
      'niewielki wzrost rysoodporności',
      'znaczny wzrost sztywności',
      'niewielki wzrost sztywności',
      'niewielki przyrost nośności na zginanie',
    ],
    c: [1, 3, 5],
  },
  {
    q: 'Pytanie 15: Wymagane pole przekroju półki dolnej belki kablobetonowej (Apd) można oszacować:',
    a: [
      'Apd ≤ 40 Ap',
      'Apd ≤ 45 Ap',
      'Apd ≤ 50 Ap',
      'Apd ≥ 45 Ap',
      'Apd ≥ 50 Ap',
      'Apd ≥ 40 Ap',
    ],
    c: [5],
  },
  {
    q: 'Pytanie 16: Weryfikując stan graniczny nośności w stadium montażu (lub eksploatacji) dźwigara dwuteowego można otrzymać strefę ściskaną betonu:',
    a: ['teową', 'dwuteową', 'prostokątną'],
    c: [0, 2],
  },
  {
    q: 'Pytanie 17: Wymagane pole przekroju półki dolnej belki strunobetonowej (Apd) można oszacować:',
    a: [
      'Apd ≤ 50 Ap',
      'Apd ≤ 40 Ap',
      'Apd ≥ 40 Ap',
      'Apd ≥ 50 Ap',
      'Apd ≤ 45 Ap',
      'Apd ≥ 45 Ap',
    ],
    c: [3],
  },
  {
    q: 'Pytanie 18: Relaksacja stali sprężającej oznacza:',
    a: [
      'spadek naprężeń w czasie przy stałych odkształceniach',
      'spadek naprężeń w czasie przy zmiennych odkształceniach',
      'wzrost naprężeń w czasie przy stałych odkształceniach',
      'wzrost naprężeń w czasie przy zmiennych odkształceniach',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 19: Produkcja elementów strunobetonowych na torze naciągowym cechuje się:',
    a: [
      'krótkimi drogami transportu wewnętrznego',
      'wydłużonymi drogami transportu wewnętrzenego',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 20: Typowe uszkodzenia strefy zakotwień w elemencie kablobetonowym powstają w wyniku naprężeń:',
    a: ['stycznych', 'rozciągających', 'ściskających'],
    c: [1],
  },
  {
    q: 'Pytanie 21: W elementach kablobetonowych można stosować naciąg:',
    a: [
      'dwustronny ze wspólnym zasilaniem pras',
      'jednostronny',
      'dwustronny z niezależnym zasilaniem prac',
    ],
    c: [0, 1, 2],
  },
  {
    q: 'Pytanie 22: W praktyce stosuje się metody produkcji strunobetonu:',
    a: [
      'metody torów naciągowych',
      'metody sztywnych form',
      'metody sztywnych torów',
      'metody form naciągowych',
    ],
    c: [0, 1],
  },
  {
    q: 'Pytanie 23: Zakotwienie pętlicowe z opornikiem pół-rury to rodzaj zakotwienia biernego:',
    a: [
      'kabla wielodrutowego',
      'kabla specjalnego',
      'kabla linowego',
      'kabla ze splotów',
      'kabla prętowego',
    ],
    c: [0, 3],
  },
  {
    q: 'Pytanie 24: Początek i koniec cięgna mocuje się do powłoki sprężanego zbiornika:',
    a: [
      'za pomocą klejenia',
      'za pomocą śrubowych zacisków',
      'betonując w płaszczu zbiornika',
      'za pomocą spawania',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 25: Sprawdzając warunek rys prostopadłych, powiększoną siłę sprężającą przyjmuje się w stadium:',
    a: ['realizacji (sprężenia)', 'montażu', 'eksploatacji'],
    c: [0],
  },
  {
    q: 'Pytanie 26: Do strat siły sprężającej w konstrukcjach kablobetonowych zalicza się:',
    a: [
      'straty od różnicy temperatury',
      'straty od poślizgu w zakotwieniach',
      'straty od częściowej relaksacji stali',
      'straty od poślizgu w uchwytach technologicznych',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 27: Produkcja elementów strunobetonowych na torze naciągowym cechuje się:',
    a: [
      'znacznymi kosztami torów i urządzeń',
      'niskimi kosztami torów i urządzeń',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 28: W produkcji potokowej formy:',
    a: [
      'znajdują się na jednym stanowisku',
      'poruszają się wzdłuż linii kolejnych stanowisk',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 29: Weryfikacja SGN w stadium montażu (lub eksploatacji) dźwigara to analiza:',
    a: [
      'osiowego ściskania',
      'ścinania',
      'zginania',
      'osiowego rozciągania',
      'mimośrodowego rozciągania',
      'mimośrodowego ściskania',
    ],
    c: [2],
  },
  {
    q: 'Pytanie 30: Jeśli w stadium montażu rysy się nie pojawią, to w stadium eksploatacji warunek:',
    a: [
      'na pewno się sprawdzi',
      'może się sprawdzić lub nie',
      'na pewno się nie sprawdzi',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 31: Tzw. wskaźnik tęgości przekroju dla przekrojów dwuteowych wynosi:',
    a: ['0,30 ÷ 0,35', '0,10 ÷ 0,20', '0,15 ÷ 0,35', '0,18 ÷ 0,30'],
    c: [3],
  },
  {
    q: 'Pytanie 32: W rurach o bardzo dużych średnicach stosuje się:',
    a: [
      'Kable kotwione w specjalnych gniazdach',
      'Kable kotwione w specjalnych pilastrach',
    ],
    c: [0, 1],
  },
  {
    q: 'Pytanie 33: Zasięg strefy ściskanej w SGN w stadium montażu wyznacza się z równania:',
    a: [
      'momentów względem zbrojenia zwykłego',
      'wypadkowych sił w przekroju',
      'momentów względem cięgien sprężających',
      'momentów względem zbrojenia ściskanego',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 34: Weryfikacja SGN w stadium realizacji (sprężania) dźwigara to analiza:',
    a: [
      'osiowego rozciągania',
      'zginania',
      'osiowego ściskania',
      'ścinania',
      'mimośrodowego rozciągania',
      'mimośrodowego ściskania',
    ],
    c: [5],
  },
  {
    q: 'Pytanie 35: Za pomocą pras płaskich i klinów można sprężać:',
    a: [
      'dowolne konstrukcje',
      'jedynie stosunkowo smukłe',
      'gdy podłoże może przenieść siły reakcji',
      'gdy podłoże nie może przenieść reakcji',
      'jedynie stosunkowo krępe konstrukcje',
    ],
    c: [2, 4],
  },
  {
    q: 'Pytanie 36: Przy produkcji elementów strunobetonowych stosuje się:',
    a: [
      'naciąg hydrauliczny lub termiczny',
      'wyłącznie naciąg termiczny',
      'wyłącznie naciąg hydrauliczny',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 37: Przy produkcji elementów strunobetonowych stosuje się przeważnie:',
    a: [
      'sploty 7-drutowe',
      'pręty profilowane ze stali stopowych',
      'kable wielodrutowe',
      'kable ze splotów',
      'kable linowe',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 38: Weryfikując SGN w stadium realizacji (sprężania) należy sprawdzić:',
    a: ['wyłącznie siłę', 'wyłącznie moment', 'zarówno siłę jak i moment'],
    c: [2],
  },
  {
    q: 'Pytanie 39: Pomniejszoną siłę sprężającą (korzystną) przyjmuje się w stadium:',
    a: ['montażu', 'eksploatacji', 'realizacji (sprężenia)'],
    c: [0, 1],
  },
  {
    q: 'Pytanie 40: Walcowe powłoki zbiorników spręża się:',
    a: [
      'tylko na wodę',
      'tylko na materiały sypkie organiczne',
      'na ciecze oraz materiały sypkie',
      'tylko na ciecze',
    ],
    c: [2],
  },
  {
    q: 'Pytanie 41: Strata od poślizgu w uchwytach (strunobeton) na długim torze jest:',
    a: ['praktycznie pomijalna', 'dość duża', 'zależna od rodzaju elementów'],
    c: [0],
  },
  {
    q: 'Pytanie 42: Przy sprężaniu z wykorzystaniem wygięcia zbrojenia sztywnego:',
    a: [
      'dokonuje się zginania z siłą podłużną',
      'dokonuje się zginania bez siły podłużnej',
      'wywołuje się mimośrodowe ściskanie',
      'wywołuje się osiowe ściskanie',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 43: Sprężanie betonem ekspansywnym stosuje się przy masywnych konstrukcjach, gdzie:',
    a: ['wymaga się precyzji sił', 'nie wymaga się dużej precyzji sił'],
    c: [1],
  },
  {
    q: 'Pytanie 44: Sprężanie betonem ekspansywnym stosuje się tam, gdzie naprężenia:',
    a: ['muszą być duże', 'nie muszą być duże'],
    c: [1],
  },
  {
    q: 'Pytanie 45: Sprężenie betonu strunobetonowego następuje w chwili:',
    a: [
      'zakotwienie splotów',
      'przecięcie splotów',
      'naciągu splotów',
      'rozformowania',
      'zwolnienia zakotwień technologicznych',
    ],
    c: [4],
  },
  {
    q: 'Pytanie 46: W SGN w stadium realizacji (sprężania) dźwigara dwuteowego strefa ściskana może być:',
    a: ['dwuteowa', 'prostokątną', 'teowa'],
    c: [1, 2],
  },
  {
    q: 'Pytanie 47: Do strat siły sprężającej w strunobetonie zalicza się:',
    a: [
      'straty od tarcia w zakotwieniu i uchwytach',
      'straty wewnętrzne w urządzeniach',
      'straty od tarcia w kanale kablowym',
    ],
    c: [0, 1],
  },
  {
    q: 'Pytanie 48: Analiza sprężysta strefy zakotwień w kablobetonie pozwala:',
    a: [
      'sprowadzić zadanie do trzech płaskich',
      'rozwiązywać tylko przestrzennie',
      'sprowadzić zadanie do dwóch płaskich',
    ],
    c: [2],
  },
  {
    q: 'Pytanie 49: Przy sprężaniu ciężarem własnym lub balastem:',
    a: [
      'zmienia się położenie osi ciężkości',
      'dokonuje się zmiany trasy cięgien',
      'regułą jest zewnętrzne prowadzenie kabli',
    ],
    c: [0, 2],
  },
  {
    q: 'Pytanie 50: Wskaźnik tęgości przekroju wiąże ze sobą:',
    a: [
      'pole przekroju dźwigara',
      'wysokość dźwigara',
      'szerokość',
      'ciężar własny',
      'rozpiętość',
    ],
    c: [0, 1],
  },
  {
    q: 'Pytanie 51: Naciąg cięgien odginanych może odbywać się:',
    a: [
      'niepełną siłą przy cięgnach prostoliniowych, potem odgięcie',
      'pełną siłą przy prostoliniowych, potem odgięcie',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 52: Weryfikując SGN w stadium realizacji (sprężania) rozważa się:',
    a: [
      'wyłącznie mały mimośród',
      'duży lub mały mimośród',
      'wyłącznie duży mimośród',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 53: Przy sprężaniu odcinkowym zbiorników kablami półobwodowymi wystarczają:',
    a: ['trzy pilastry', 'dwa pilastry', 'cztery pilastry'],
    c: [2],
  },
  {
    q: 'Pytanie 54: Wymagane pole przekroju półki górnej wyznacza się z równania:',
    a: [
      'momentów w fazie montażu',
      'momentów w fazie realizacji',
      'wypadkowych sił w fazie realizacji',
      'wypadkowych sił w fazie montażu',
    ],
    c: [3],
  },
  {
    q: 'Pytanie 55: Warunek rys ukośnych sprawdza się w przekroju:',
    a: [
      'w połowie rozpiętości',
      'w strefie przypodporowej',
      'niebezpiecznym (1/3 rozpiętości)',
      'w miejscu żebra',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 56: Współczesne prasy kołowe Freyssineta nadają się do ciśnienia rzędu:',
    a: ['150 MPa', '1,5 MPa', '15 MPa', '0,15 MPa'],
    c: [2],
  },
  {
    q: 'Pytanie 57: Przy sprężaniu termicznym racjonalne jest stosowanie:',
    a: ['stali wysokowęglowych', 'stali stopowych'],
    c: [1],
  },
  {
    q: 'Pytanie 58: Sprawdzając warunek rys ukośnych należy wyznaczyć:',
    a: [
      'naprężenie normalne podłużne',
      'główne naprężenie rozciągające',
      'naprężenie styczne',
      'naprężenie normalne poprzeczne',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 59: Do strat siły sprężającej w kablobetonie zalicza się:',
    a: [
      'straty od odkształceń sprężystych betonu',
      'straty opóźnione od relaksacji, skurczu i pełzania',
      'straty od opóźnionych odkształceń styków',
    ],
    c: [0, 1, 2],
  },
  {
    q: 'Pytanie 60: Technologię kablobetonu wyróżnia:',
    a: [
      'naciąg po zabetonowaniu',
      'przekazanie siły przez docisk',
      'naciąg przed betonowaniem',
      'przekazanie siły przez przyczepność',
    ],
    c: [0, 1],
  },
  {
    q: 'Pytanie 61: Do strat siły sprężającej w kablobetonie zalicza się:',
    a: [
      'straty od tarcia w kanale kablowym',
      'straty wewnętrzne w urządzeniach',
      'straty od tarcia w zakotwieniu',
    ],
    c: [0, 1],
  },
  {
    q: 'Pytanie 62: Konieczność obliczeń iteracyjnych w SGN dźwigara pojawi się w stadium:',
    a: ['nie pojawia się', 'realizacji (sprężania)', 'montażu', 'eksploatacji'],
    c: [1],
  },
  {
    q: 'Pytanie 63: Zakotwienia dzwonowe występują przy sprężaniu kablami:',
    a: ['specjalnymi', 'ze splotów', 'wielodrutowymi', 'linowymi', 'prętowymi'],
    c: [4],
  },
  {
    q: 'Pytanie 64: Elementy strunobetonowe wytwarza się:',
    a: [
      'wyłącznie w zakładach prefabrykacji',
      'wyłącznie na budowie',
      'w zakładach lub na budowie',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 65: W prasach Freyssineta przemieszczenia dennych części są rzędu:',
    a: ['15 ÷ 35mm', '150 ÷ 350 mm', '1,5 ÷ 3,5 mm'],
    c: [0],
  },
  {
    q: 'Pytanie 66: W strunobetonie cięgna są zakotwione w elementach oporowych na czas:',
    a: ['ustawienia form', 'betonowania i twardnienia', '7 dni', '24 godziny'],
    c: [1],
  },
  {
    q: 'Pytanie 67: Obliczając strefę zakotwień w kablobetonie można założyć, że:',
    a: [
      'należy zmienić metodę przy obciążeniu ścian',
      'ściany boczne nie są obciążone (nawet gdy są)',
      'należy obowiązkowo uwzględnić obciążenie ścian',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 68: Długość umożliwiająca osiągnięcie całej siły zrywającej w SGN to długość:',
    a: ['transmisji', 'zakotwienia', 'transferu', 'dystrybucji', 'dyspersji'],
    c: [1],
  },
  {
    q: 'Pytanie 69: Sprężanie rur obciążonych od wnętrza daje korzyści ekonomiczne:',
    a: ['największe', 'najmniejsue'],
    c: [0],
  },
  {
    q: 'Pytanie 70: Przy sprężaniu przez wygięcie zbrojenia sztywnego wygina się je:',
    a: [
      'prostopadle do płaszczyzny ugięcia',
      'pojedynczo',
      'w kierunku spodziewanego ugięcia eksploatacyjnego',
      'w kierunku przeciwnym',
    ],
    c: [2],
  },
  {
    q: 'Pytanie 71: Eurokod 2 (EC2) określa ile klas relaksacji stali:',
    a: ['jedną', 'dwie', 'trzy', 'cztery'],
    c: [2],
  },
  {
    q: 'Pytanie 72: Wzór na doraźne ugięcie (L^2/8...) dotyczy dźwigara o:',
    a: [
      'stałym przekroju i prostoliniowej trasie cięgien',
      'zmiennym przekroju i prostoliniowej trasie',
      'stałym przekroju i parabolicznej trasie',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 73: Do strat siły sprężającej w strunobetonie zalicza się:',
    a: [
      'poślizgu w zakotwieniach',
      'częściowej relaksacji stali',
      'różnic temperatury',
      'poślizgu w uchwytach technologicznych',
    ],
    c: [1, 2, 3],
  },
  {
    q: 'Pytanie 74: Strata od poślizgu w uchwytach przy sztywnych formach może być:',
    a: [
      '10-krotnie większa niż na długim torze',
      '2-krotnie większa',
      '10-krotnie mniejsza',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 75: W strunobetonie problem docisku w strefie zakotwień jest:',
    a: ['Istotniejszy niż w kablobetonie', 'bezprzedmiotowy', 'tak samo ważny'],
    c: [1],
  },
  {
    q: 'Pytanie 76: Jeśli siły w strefie zakotwień nie działają prostopadle, można:',
    a: [
      'pominąć składowe styczne sił',
      'należy obowiązkowo je uwzględnić',
      'zmienić metodę',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 77: Wady sprężania odcinkowego zbiorników są bardziej istotne przy powłokach:',
    a: [
      'o większych grubościach',
      'o mniejszych grubościach',
      'grubość nie ma znaczenia',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 78: W przypadku zbiorników kołowo-symetrycznych spręża się:',
    a: [
      'powłoki denne wież ciśnień',
      'zasadnicze powłoki walcowe',
      'pierścienie nasadowe kopuł',
    ],
    c: [0, 1, 2],
  },
  {
    q: 'Pytanie 79: Oprócz prostoliniowej trasy w strunobetonie stosuje się:',
    a: ['rozłączane', 'cięgna odginane', 'cięgna rozginane', 'wyłączane'],
    c: [1, 3],
  },
  {
    q: 'Pytanie 80: Przy kolejnym naciągu kabli strata od odkształceń betonu jest największa w:',
    a: ['ostatnim kablu', 'każdym taka sama', 'pierwszym kablu'],
    c: [2],
  },
  {
    q: 'Pytanie 81: Przy sprężaniu odcinkowym zbiorników kable kotwi się:',
    a: [
      'w pilastrach lub specjalnych gniazdach',
      'tylko w gniazdach',
      'tylko w pilastrach',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 82: Sprawdzając rysy prostopadłe, naprężenia w włóknach DOLNYCH sprawdza się w:',
    a: ['montażu', 'realizacji (sprężenia)', 'eksploatacji'],
    c: [0, 2],
  },
  {
    q: 'Pytanie 83: Potrzebną liczbę cięgien można oszacować biorąc pod uwagę:',
    a: [
      'wysokość przekroju',
      'obliczeniowy moment zginający',
      'szerokość',
      'charakterystyczny moment',
    ],
    c: [0, 1],
  },
  {
    q: 'Pytanie 84: Weryfikując SGN w stadium montażu (lub eksploatacji) sprawdza się nośność:',
    a: [
      'wyłącznie na moment',
      'zarówno na siłę jak i moment',
      'wyłącznie na siłę',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 85: Strata od odkształceń sprężystych betonu w strunobetonie jest:',
    a: ['taka sama', 'mniejsza', 'większa niż w kablobetonie'],
    c: [2],
  },
  {
    q: 'Pytanie 86: Zasięg strefy ściskanej w SGN w stadium realizacji wyznacza się względem:',
    a: [
      'środka ciężkości cięgien sprężających',
      'zbrojenia ściskanego',
      'wypadkowych sił',
      'zbrojenia rozciąganego zwykłego',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 87: Prasa płaska Freyssineta jest:',
    a: [
      'płaskim pojemnikiem metalowym z blachy (kołowym/wydłużonym)',
      'odmianą prasy przelotowej',
      'działa na zasadzie śruby rzymskiej',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 88: W elemencie kablobetonowym mogą występować zakotwienia:',
    a: ['czynne i bierne', 'tylko czynne', 'tylko bierne'],
    c: [0],
  },
  {
    q: 'Pytanie 89: Produkcja na torze naciągowym cechuje się:',
    a: [
      'nierównomiernym naciągiem',
      'dużymi odcinkami traconej stali',
      'małymi odcinkami traconej stali',
      'równomiernym naciągiem splotów',
    ],
    c: [2, 3],
  },
  {
    q: 'Pytanie 90: Strata od poślizgu w zakotwieniach (kablobeton) zależy od:',
    a: ['modułu sprężystości stali', 'modułu sprężystości betonu'],
    c: [0],
  },
  {
    q: 'Pytanie 91: Wartość straty od poślizgu w zakotwieniach zależy od:',
    a: [
      'modułu stali',
      'wartości poślizgu',
      'pola przekroju cięgien',
      'odległości od siłownika',
    ],
    c: [0, 1, 2, 3],
  },
  {
    q: 'Pytanie 92: Kształtowanie na torze odbywa się za pomocą form:',
    a: [
      'nie obciążonych siłami naciągu',
      'przejmujących siły naciągu',
      'wyposażonych w siłowniki',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 93: Przy sprężaniu termicznym ograniczenia są związane z:',
    a: ['temperaturą', 'stalą o niskiej granicy', 'komorami próżniowymi'],
    c: [0],
  },
  {
    q: 'Pytanie 94: Zaleca się, aby w kablobetonie cięgna były:',
    a: [
      'w kształcie odwróconej litery T',
      'środek ciężkości cięgien w półce dolnej',
      'nieparzysta liczba kolumn',
      'w kształcie litery T',
    ],
    c: [0, 1, 2],
  },
  {
    q: 'Pytanie 95: Maksymalną siłę naciągu określa się biorąc pod uwagę:',
    a: [
      'pole przekroju cięgna',
      'dopuszczalne naprężenie podczas sprężania',
      'obliczeniową granicę plastyczności',
      'siłę zrywającą',
    ],
    c: [0, 1],
  },
  {
    q: 'Pytanie 96: Sprężenie przez poprzeczne przemieszczenie cięgien stosuje się:',
    a: [
      'w zbiornikach',
      'w elementach belkowych',
      'tylko przy wzmacnianiu',
      'w rurach',
      'w nowych i przy wzmacnianiu',
    ],
    c: [1, 4],
  },
  {
    q: 'Pytanie 97: Sprężanie przez nawijanie zbiorników - powłoka może być:',
    a: [
      'w deskowaniu ślizgowym',
      'w deskowaniu przestawnym',
      'z prefabrykatów',
      'metodą wirowania',
    ],
    c: [0, 1, 2],
  },
  {
    q: 'Pytanie 98: Nawijarka obiegowa to urządzenie, w którym:',
    a: [
      'wózek napędowy na górnej krawędzi',
      'naciąg przez sztywne ramię',
      'sztywne ramię na górnym wózku',
      'platforma na linach',
      'obsługa na platformie',
    ],
    c: [0, 1, 2],
  },
  {
    q: 'Pytanie 99: Technologię strunobetonu wyróżnia:',
    a: [
      'przekazanie siły przez przyczepność',
      'naciąg po zabetonowaniu',
      'naciąg przed betonowaniem',
      'przekazanie siły przez docisk',
    ],
    c: [0, 2],
  },
  {
    q: 'Pytanie 100: Obliczając strefę zakotwień w strunobetonie określa się długość:',
    a: ['dyspersji', 'transmisji'],
    c: [1],
  },
  {
    q: 'Pytanie 101: Ekspansja betonu:',
    a: [
      'eliminuje wpływ skurczu',
      'zwiększa odstępy dylatacji',
      'jest trudna do kontrolowania',
      'jest łatwa',
      'zmniejsza dylatacje',
    ],
    c: [0, 1, 2],
  },
  {
    q: 'Pytanie 102: Strata od odkształceń sprężystych betonu:',
    a: ['zależy od geometrii przekroju', 'nie zależy'],
    c: [0],
  },
  {
    q: 'Pytanie 103: Produkcja elementów strunobetonowych cechuje się:',
    a: [
      'ograniczonymi możliwościami przyspieszania twardnienia',
      'brakiem betonu wysokich klas',
      'zwolnieniem naciągu zaraz po wibrowaniu',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 104: Przy kablach linowych stosuje się zakotwienia:',
    a: [
      'z tuleją nagwintowaną',
      'głowicowanie',
      'szczękowe',
      'rozplecione zalane stopem',
      'tarciowe',
      'gwintowe',
      'stożkowe',
    ],
    c: [0, 3],
  },
  {
    q: 'Pytanie 105: Wzór na ugięcie (L^2/48...) dotyczy dźwigara o:',
    a: [
      'zmiennym przekroju (dwuspadowy) i prostoliniowej trasie',
      'stałym przekroju i parabolicznej',
      'stałym przekroju i prostoliniowej',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 106: Strata od tarcia w kanale zależy od:',
    a: [
      'geometrii przekroju',
      'sumy kątów zakrzywienia trasy',
      'modułu stali',
      'modułu betonu',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 107: Sprężanie termiczne rur polega na:',
    a: [
      'umieszczeniu rozgrzanych obręczy',
      'nawijaniu rozgrzanych cięgien',
      'nawijaniu na rozgrzany rdzeń',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 108: Zakotwienie wachlarzowe to rodzaj zakotwienia biernego:',
    a: ['kabla ze splotów', 'kabla specjalnego', 'kabla wielodrutowego'],
    c: [2],
  },
  {
    q: 'Pytanie 109: W belce kategorii 1a/1b można dopuścić zarysowanie w stadium:',
    a: ['montażu', 'eksploatacji', 'realizacji (sprężenia)'],
    c: [2],
  },
  {
    q: 'Pytanie 110: W produkcji potokowej formy:',
    a: [
      'poruszają się wzdłuż linii stanowisk',
      'znajdują się na jednym stanowisku',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 111: Pilastry w zbiornikach powodują dodatkowe:',
    a: [
      'momenty zginające w powłoce',
      'siły równoleżnikowe',
      'siły południkowe',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 112: Przy kablach ze splotów stosuje się zakotwienia:',
    a: [
      'szczękowe dwu- lub trójdzielne',
      'gwintowe',
      'rozplecione',
      'stożkowe',
      'tuleje nagwintowane',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 113: Zakotwienie półpętlicowe to rodzaj zakotwienia biernego:',
    a: ['kabla wielodrutowego', 'kabla ze splotów', 'kabla specjalnego'],
    c: [1],
  },
  {
    q: 'Pytanie 114: W rurach o bardzo dużych średnicach stosuje się:',
    a: ['kable pełnoobwodowe', 'kable odcinkowe'],
    c: [1],
  },
  {
    q: 'Pytanie 115: W strunobetonie (EC2) określa się długość:',
    a: ['dyspraksji', 'dysleksji', 'dystrybucji', 'dysplazji', 'dyspersji'],
    c: [4],
  },
  {
    q: 'Pytanie 116: W rurach o bardzo dużych średnicach stosuje się kable umieszczone:',
    a: ['w grubości ściany', 'na zewnątrz', 'wewnątrz'],
    c: [1],
  },
  {
    q: 'Pytanie 117: W rurach o bardzo dużych średnicach kable kotwi się:',
    a: ['w specjalnych pilastrach', 'w specjalnych gniazdach'],
    c: [0],
  },
  {
    q: 'Pytanie 118: Szybkość ruchu podłużnego naciągarki przy nawijaniu rur:',
    a: ['nie ma wpływu', 'decyduje o intensywności siły na jednostkę długości'],
    c: [1],
  },
  {
    q: 'Pytanie 119: Przy nowoczesnych zakotwieniach w kablobetonie należy:',
    a: [
      'stosować zalecenia wybiórczo',
      'w pełni bazować na zaleceniach producenta',
      'obliczać samodzielnie',
      'traktować jako opcję',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 120: Zakotwienie pętlicowe z opornikiem to rodzaj zakotwienia biernego:',
    a: ['kabla wielodrutowego', 'kabla ze splotów', 'kabla specjalnego'],
    c: [1],
  },
  {
    q: 'Pytanie 121: Do strat siły w strunobetonie zalicza się:',
    a: [
      'różnic temperatury',
      'częściowej relaksacji stali',
      'poślizgu w uchwytach technologicznych',
      'poślizgu w zakotwieniach',
    ],
    c: [0, 1, 2],
  },
  {
    q: 'Pytanie 122: Sprężanie zbiorników walcowych wykonuje się:',
    a: [
      'metodą nawijania kabli',
      'tylko za pomocą kabli',
      'metodą chuja w dupie',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 123: Formy do produkcji metodą sztywnych form:',
    a: [
      'mogą przenosić siły',
      'nie mogą',
      'muszą przenosić siły naciągu',
      'nie muszą',
    ],
    c: [2],
  },
  {
    q: 'Pytanie 124: Przy kablach prętowych w zakotwieniu czynnym stosuje się:',
    a: ['szczęki', 'gwintowe (nagwintowane cięgno, nakrętka)'],
    c: [1],
  },
  {
    q: 'Pytanie 125: Sprężanie betonem ekspansywnym - naprężenia:',
    a: ['nie muszą być duże', 'muszą być duże'],
    c: [0],
  },
  {
    q: 'Pytanie 126: Przy nawijaniu rur hamowanie cięgna:',
    a: [
      'wywołuje siłę naciągu',
      'zmienia tylko kierunek',
      'odbywa się swobodnie',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 127: Odcinkowe cięgna w zbiornikach wprowadzono przez:',
    a: ['znaczne straty tarcia', 'przepływ cieczy', 'niską wytrzymałość stali'],
    c: [0],
  },
  {
    q: 'Pytanie 128: Wzór na ugięcie (5/48...) dotyczy dźwigara o:',
    a: [
      'stałym przekroju i parabolicznej trasie',
      'zmiennym przekroju i prostoliniowej',
      'stałym przekroju i w osi obojętnej',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 129: Jeśli w stadium montażu rysy się pojawiły, to w stadium eksploatacji:',
    a: [
      'na pewno ich nie będzie',
      'na pewno się pojawią',
      'może się sprawdzić',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 130: Weryfikując SGN realizacji przyjmuje się siłę:',
    a: [
      'po stratach technologicznych i doraźnych',
      'początkową',
      'po stratach całkowitych',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 131: Przy sprężaniu przez wygięcie zbrojenia sztywnego jest nim:',
    a: ['element walcowany o podwyższonej wytrzymałości'],
    c: [0],
  },
  {
    q: 'Pytanie 132: Po ok. 100 godzinach zachodzi ile strat od relaksacji oszacowanych na 1000h:',
    a: ['55 %', '65 %', '45 %', '50 %'],
    c: [0],
  },
  {
    q: 'Pytanie 133: Sprężanie zbiorników jest opłacalne od pojemności:',
    a: ['500 m3', '400 m3', '600 m3'],
    c: [0],
  },
  {
    q: 'Pytanie 134: Do strat w kablobetonie zalicza się:',
    a: [
      'odkształcenia sprężyste',
      'opóźnione (relaksacja, skurcz, pełzanie)',
      'opóźnione odkształcenia styków',
    ],
    c: [0, 1, 2],
  },
  {
    q: 'Pytanie 135: Rysy prostopadłe we włóknach GÓRNYCH sprawdza się w stadium:',
    a: ['realizacji (sprężania)', 'montażu', 'eksploatacji'],
    c: [0],
  },
  {
    q: 'Pytanie 136: W strunobetonie cięgna powinny być w układzie:',
    a: [
      'ortogonalnym',
      'środek ciężkości w półce dolnej',
      'nieparzystej liczby kolumn',
    ],
    c: [0, 1],
  },
  {
    q: 'Pytanie 137: Nawijarka karuzelowa to urządzenie, w którym:',
    a: [
      'napęd i naciąg na jednej platformie',
      'obsługa na platformie',
      'platforma na linach',
    ],
    c: [0, 1, 2],
  },
  {
    q: 'Pytanie 138: Formowanie agregatowe na torze przy stałym przekroju jest:',
    a: ['wskazane', 'niewskazane'],
    c: [0],
  },
  {
    q: 'Pytanie 139: Elektronagrzew rur daje temperatury rzędu:',
    a: ['250-300 °C', '200-300 °C', '300-350 °C'],
    c: [0],
  },
  {
    q: 'Pytanie 140: Liczbę cięgien szacuje się biorąc pod uwagę:',
    a: ['granicę plastyczności stali', 'pole przekroju cięgna'],
    c: [0, 1],
  },
  {
    q: 'Pytanie 141: Długość pełnego przekazania siły na beton w strunobetonie to:',
    a: [
      'dyspersji',
      'dystrybucji',
      'transmisji',
      'transferu',
      'zakotwienia',
      'zaburzeń',
    ],
    c: [2],
  },
  {
    q: 'Pytanie 142: Urządzenia do nawijania na powłokę to nawijarki:',
    a: ['karuzelowe', 'obiegowe'],
    c: [0, 1],
  },
  {
    q: 'Pytanie 143: Moduł Ec,eff uwzględnia:',
    a: ['współczynnik pełzania', 'fctm', 'Poissona'],
    c: [0],
  },
  {
    q: 'Pytanie 144: Otulająca warstwa betonu w rurach to:',
    a: ['tylko natrysk', 'tylko ślizgowa', 'natrysk lub ślizgowa'],
    c: [2],
  },
  {
    q: 'Pytanie 145: Naciąg cięgien odginanych:',
    a: [
      'niepełną siłą przy uchwytach',
      'po stwardnieniu wszystkich przęseł',
      'ciężar własny',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 146: Strata sprężysta w kablobetonie jest procentowo... niż w strunobetonie:',
    a: ['mniejsza', 'większa', 'taka sama'],
    c: [0],
  },
  {
    q: 'Pytanie 147: W strunobetonie (EC2) określa się długość:',
    a: ['transmisji', 'transferu', 'relacji', 'przekazu', 'przesyłu'],
    c: [0],
  },
  {
    q: 'Pytanie 148: Przy prasach płaskich i klinach:',
    a: [
      'obraz złamania jasny',
      'nie grozi wyboczenie',
      'grozi wyboczenie od sprężenia',
    ],
    c: [2],
  },
];

// FUNKCJA MIESZAJĄCA (Fisher-Yates)
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

function updateStats() {
  correctSpan.innerText = correctCount;
  wrongSpan.innerText = wrongCount;
}

function loadQuestion() {
  isChecked = false;
  nextBtn.innerText = 'Sprawdź odpowiedź';
  const qData = questions[currentIdx];

  questionArea.innerHTML = `
        <div style="color: #666; margin-bottom: 10px;">Pytanie ${
          currentIdx + 1
        } z ${questions.length}</div>
        <h3 style="margin-bottom: 20px;">${qData.q}</h3>
    `;

  qData.a.forEach((ans, i) => {
    const div = document.createElement('div');
    div.className = 'option-wrapper';
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
      const score = Math.round((correctCount / questions.length) * 100);
      questionArea.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <h2>Test zakończony!</h2>
                    <p style="font-size: 1.5rem; margin: 20px 0;">Twój wynik: ${correctCount} / ${
        questions.length
      } (${score}%)</p>
                    <p>${
                      score >= 50
                        ? '🎉 Gratulacje! Całkiem nieźle.'
                        : '👨‍🏫 Warto jeszcze trochę poćwiczyć.'
                    }</p>
                </div>`;
      nextBtn.innerText = 'Zacznij od nowa';
      nextBtn.onclick = () => location.reload();
    }
  }
};

loadQuestion();
