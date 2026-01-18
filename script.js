const questions = [
  {
    q: 'Pytanie 1/148: Przy sprężaniu z wykorzystaniem ekspansji betonu:',
    a: [
      'najłatwiej jest uzyskiwać sprężenie równomierne',
      'duże możliwości regulowania położenia wypadkowej siły sprężającej w przekroju',
      'najłatwiej jest uzyskiwać sprężenie równomierne',
      'niewielkie możlwiości regulowania położenia wypadkowej siły sprężającej w przekroju',
    ],
    c: [0, 3],
  },
  {
    q: 'Pytanie 2/148: Sprężanie termiczne rur jest najczęściej stosowane:',
    a: [
      'przy usuwaniu skutków awarii',
      'przy masowej produkcji',
      'wyłącznie w zakładach prefabrykacji',
      'przy wzmocnieniach',
    ],
    c: [3],
  },
  {
    q: 'Pytanie 3/148: Przy sprężaniu kablami wielodrutowymi, w zakotwieniu czynnym stosuje się zakotwienia:',
    a: [
      'z wykorzystaniem rozplecionych elementów cięgna zalanych stopem metali',
      'z zastosowaniem stożkowych szczęk dwu- lub trójdzielnych',
      'gwintowe (nagwintowane cięgno, nakrętka)',
      'z wykorzystaniem tulei (zawalcowanej na cięgnie) zewnętrzenie nagwintowanej',
      'tarciowe blokujące',
      'typu stożkowego (np. stożek podłużnie rowkowany)',
      'głowicowe',
    ],
    c: [5],
  },
  {
    q: 'Pytanie 4/148: Jednym z założeń upraszczających w metodzie analizy sprężystej strefy zakotwień w elemencie kablobetonowym jest przyjęcie, że zasięg strefy zaburzeń jest równy:',
    a: ['wysokość środnika belki', 'szerokość belki', 'wysokość belki'],
    c: [2],
  },
  {
    q: 'Pytanie 5/148: Wartość straty z tytułu wpływy różnic temperatury, wywołanych obróbką cieplną betonu na długim torze naciągowym będzie ___ niż w przypadku produkcji metodą sztywnych form:',
    a: ['większa', 'mniejsza', 'taka sama'],
    c: [1],
  },
  {
    q: 'Pytanie 6/148: Sprawdzając warunek pojawienia się rys ukośnych w belce sprężonej o przekroju dwuteowym, sprawdza się naprężenia:',
    a: [
      'we włóknach',
      'na styku środnika i półki górnej',
      'skrajnych górnych',
      'na styku środnika i półki dolnej',
      'na poziomie środka ciężkości przekroju',
      'skrajnych dolnych',
    ],
    c: [1, 3, 4],
  },
  {
    q: 'Pytanie 7/148: Elektronagrzew stosowany przy naciągu termicznym cięgien polega na przepływie prądu o:',
    a: [
      'wysokim natężeniu i wysokim napęciu',
      'wysokim natężeniu i niskim napięciu',
      'niskim natężeniu i wysokim napięciu',
      'niskim natężeniu i niskim napięciu',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 8/148: W elementach strunobetonowych długość... (rozkład liniowy na końcu):',
    a: ['transferu', 'dystrybucji', 'transmisji', 'dyspersji', 'zakotwienia'],
    c: [3],
  },
  {
    q: 'Pytanie 9/148: Metodą nawijania można sprężać rury:',
    a: [
      'zarówno o niewielkich jak i dużych średnicach',
      'wyłącznie o niewielkich średnicach',
      'wyłącznie o dużych średnicach',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 10/148: Sprężanie z wykorzystaniem ekspansji betonu jest najbardziej przydatne w elementach:',
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
    q: 'Pytanie 11/148: Przy produkcji rur sprężonych metodą nawijania, cięgna nawija się na:',
    a: [
      'nieruchomy rdzeń betonowy rury ustawiony w pozycji poziomej',
      'obracający się rdzeń betonowy rury ustawiony w pozycji pionowej',
      'nieruchomy rdzeń betonowy rury ustawiony w pozycji pionowej',
      'obracający się rdzeń betonowy rury ustawiony w pozycji poziomej',
    ],
    c: [3],
  },
  {
    q: 'Pytanie 12/148: Długość, na której siła sprężająca zostaje w pełni przekazana z cięgien na beton to długość:',
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
    q: 'Pytanie 13/148: Strata od częściowej relaksacji stali (w strunobetonie) wpływa:',
    a: ['nierównomiernie na całe cięgno', 'równomiernie na całe cięgno'],
    c: [1],
  },
  {
    q: 'Pytanie 14/148: Przy sprężaniu z wykorzystaniem wygięcia zbrojenia sztywnego, element wykazuje:',
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
    q: 'Pytanie 15/148: Wymagane pole przekroju półki dolnej belki kablobetonowej (Apd):',
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
    q: 'Pytanie 16/148: Weryfikując SGN w stadium montażu dźwigara dwuteowego można otrzymać strefę ściskaną:',
    a: ['teową', 'dwuteową', 'prostokątną'],
    c: [0, 2],
  },
  {
    q: 'Pytanie 17/148: Wymagane pole przekroju półki dolnej belki strunobetonowej (Apd):',
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
    q: 'Pytanie 18/148: Relaksacja stali sprężającej oznacza:',
    a: [
      'spadek naprężeń w czasie przy stałych odkształceniach',
      'spadek naprężeń w czasie przy zmiennych odkształceniach',
      'wzrost naprężeń w czasie przy stałych odkształceniach',
      'wzrost naprężeń w czasie przy zmiennych odkształceniach',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 19/148: Produkcja na torze naciągowym cechuje się:',
    a: [
      'krótkimi drogami transportu wewnętrznego',
      'wydłużonymi drogami transportu wewnętrzenego',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 20/148: Uszkodzenia strefy zakotwień powstają w wyniku naprężeń:',
    a: ['stycznych', 'rozciągających', 'ściskających'],
    c: [1],
  },
  {
    q: 'Pytanie 21/148: W elementach kablobetonowych można stosować naciąg:',
    a: [
      'dwustronny ze wspólnym zasilaniem pras',
      'jednostronny',
      'dwustronny z niezależnym zasilaniem prac',
    ],
    c: [0, 1, 2],
  },
  {
    q: 'Pytanie 22/148: Metody produkcji strunobetonu:',
    a: [
      'metody torów naciągowych',
      'metody sztywnych form',
      'metody sztywnych torów',
      'metody form naciągowych',
    ],
    c: [0, 1],
  },
  {
    q: 'Pytanie 23/148: Zakotwienie pętlicowe z opornikiem pół-rury to rodzaj zakotwienia biernego:',
    a: [
      'kabla wielodrutowego',
      'kabla specjalnego',
      'kabla linowego',
      'kabla ze splotów',
      'kabla prętowego',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 24/148: Początek i koniec cięgna mocuje się do powłoki zbiornika:',
    a: [
      'za pomocą klejenia',
      'za pomocą śrubowych zacisków',
      'betonując w płaszczu zbiornika',
      'za pomocą spawania',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 25/148: Powiększoną siłę sprężającą (niekorzystną) przyjmuje się w stadium:',
    a: ['realizacji (sprężenia)', 'montażu', 'eksploatacji'],
    c: [0],
  },
  {
    q: 'Pytanie 26/148: Do strat w kablobetonie zalicza się:',
    a: [
      'straty od różnicy temperatury',
      'straty od poślizgu w zakotwieniach',
      'straty od częściowej relaksacji stali',
      'straty od poślizgu w uchwytach technologicznych',
    ],
    c: [1, 2],
  },
  {
    q: 'Pytanie 27/148: Produkcja na torze naciągowym cechuje się:',
    a: [
      'znacznymi kosztami torów i urządzeń towarzyszących',
      'niskimi kosztami torów i urządzeń towarzyszących',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 28/148: W produkcji potokowej formy:',
    a: [
      'znajdują się na jednym stanowisku',
      'poruszają się wzdłuż linii stanowisk',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 29/148: Weryfikacja SGN montażu/eksploatacji to zazwyczaj:',
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
    q: 'Pytanie 30/148: Jeśli warunek rys spełniono w montażu, to w eksploatacji:',
    a: [
      'na pewno się sprawdzi',
      'może się sprawdzić lub nie',
      'na pewno się nie sprawdzi',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 31/148: Wskaźnik tęgości dla przekrojów dwuteowych:',
    a: ['0,30 ÷ 0,35', '0,10 ÷ 0,20', '0,15 ÷ 0,35', '0,18 ÷ 0,30'],
    c: [3],
  },
  {
    q: 'Pytanie 32/148: W rurach o bardzo dużych średnicach stosuje się:',
    a: [
      'Kable kotwione w specjalnych gniazdach',
      'Kable kotwione w specjalnych pilastrach',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 33/148: Zasięg strefy ściskanej SGN wyznacza się z równania:',
    a: [
      'momentów względem stali rozciąganej',
      'wypadkowych sił w przekroju',
      'momentów względem cięgien sprężających',
      'momentów względem stali ściskanej',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 34/148: Weryfikacja SGN w stadium realizacji (sprężania) to:',
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
    q: 'Pytanie 35/148: Za pomocą pras płaskich i klinów można sprężać:',
    a: [
      'dowolne konstrukcje',
      'jedynie smukłe',
      'gdy podłoże przeniesie reakcję',
      'gdy podłoże nie przeniesie reakcji',
      'jedynie krępe',
    ],
    c: [2],
  },
  {
    q: 'Pytanie 36/148: Przy produkcji strunobetonu stosuje się:',
    a: [
      'hydrauliczny naciąg lub termiczny',
      'wyłącznie termiczny',
      'wyłącznie hydrauliczny',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 37/148: Przy produkcji strunobetonu stosuje się przeważnie:',
    a: [
      'sploty 7-drutowe',
      'pręty profilowane',
      'kable wielodrutowe',
      'kable ze splotów',
      'kable linowe',
    ],
    c: [0],
  },
  {
    q: 'Pytanie 38/148: W SGN realizacji sprawdza się nośność:',
    a: [
      'wyłącznie z uwagi na siłę',
      'wyłącznie z uwagi na moment',
      'zarówno z uwagi na siłę jak i na moment',
    ],
    c: [2],
  },
  {
    q: 'Pytanie 39/148: Pomniejszoną siłę sprężającą (korzystną) przyjmuje się w stadium:',
    a: ['montażu', 'eksploatacji', 'realizacji (sprężenia)'],
    c: [0, 1],
  },
  {
    q: 'Pytanie 40/148: Walcowe powłoki zbiorników spręża się:',
    a: [
      'tylko na wodę',
      'tylko na sypkie organiczne',
      'na ciecze i materiały sypkie',
      'tylko na ciecze',
      'tylko na sypkie nieorganiczne',
    ],
    c: [2],
  },
  {
    q: 'Pytanie 41/148: Strata od poślizgu w uchwytach na długim torze jest:',
    a: ['pomijalna', 'dość duża', 'zależna od rodzaju elementu'],
    c: [0],
  },
  {
    q: 'Pytanie 42/148: Przy sprężaniu przez wygięcie zbrojenia sztywnego:',
    a: [
      'wstępne zginanie z siłą podłużną',
      'wstępne zginanie bez siły podłużnej',
      'mimośrodowe ściskanie',
      'osiowe ściskanie',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 43/148: Sprężanie betonem ekspansywnym stosuje się gdy:',
    a: ['wymaga się precyzji', 'nie wymaga się dużej precyzji'],
    c: [1],
  },
  {
    q: 'Pytanie 44/148: Sprężanie betonem ekspansywnym - naprężenia:',
    a: ['muszą być duże', 'nie muszą być duże'],
    c: [1],
  },
  {
    q: 'Pytanie 45/148: Sprężenie w strunobetonie następuje w chwili:',
    a: [
      'zakotwienie w oporach',
      'przecięcie splotów',
      'naciągu',
      'rozformowania',
      'zwolnienia zakotwień technologicznych',
      'zakończenia dojrzewania',
    ],
    c: [4],
  },
  {
    q: 'Pytanie 46/148: W SGN realizacji dźwigara dwuteowego strefa ściskana może być:',
    a: ['dwuteowa', 'prostokątna', 'teowa'],
    c: [1, 2],
  },
  {
    q: 'Pytanie 47/148: Straty w strunobetonie:',
    a: [
      'tarcie w zakotwieniu i uchwytach',
      'straty wewnętrzne w urządzeniach',
      'tarcie w kanale',
    ],
    c: [0, 1],
  },
  {
    q: 'Pytanie 48/148: Analiza sprężysta strefy zakotwień kablobetonu pozwala:',
    a: [
      'sprowadzić 3D do trzech zadań płaskich',
      'tylko 3D',
      'sprowadzić 3D do dwóch zadań płaskich',
    ],
    c: [2],
  },
  {
    q: 'Pytanie 49/148: Przy sprężaniu ciężarem własnym lub balastem:',
    a: [
      'zmienia się oś ciężkości',
      'zmienia się trasa',
      'zewnętrzne prowadzenie kabli',
      'wewnętrzne prowadzenie kabli',
    ],
    c: [2],
  },
  {
    q: 'Pytanie 50/148: Wskaźnik tęgości wiąże:',
    a: [
      'pole przekroju',
      'wysokość',
      'szerokość',
      'ciężar własny',
      'rozpiętość',
    ],
    c: [0, 1],
  },
  {
    q: 'Pytanie 51/148: Naciąg cięgien odginanych odbywa się:',
    a: ['niepełną siłą przed odgięciem', 'pełną siłą przed odgięciem'],
    c: [0],
  },
  {
    q: 'Pytanie 52/148: W SGN realizacji (sprężania) rozważa się:',
    a: ['tylko mały mimośród', 'duży lub mały mimośród', 'tylko duży mimośród'],
    c: [1],
  },
  {
    q: 'Pytanie 53/148: Przy sprężaniu odcinkowym kablami półobwodowymi wystarczają:',
    a: ['trzy pilastry', 'dwa pilastry', 'cztery pilastry'],
    c: [1, 2],
  },
  {
    q: 'Pytanie 54/148: Pole półki górnej (Apg) wyznacza się z:',
    a: [
      'momentów w montażu',
      'momentów w realizacji',
      'wypadkowych sił w realizacji',
      'wypadkowych sił w montażu',
    ],
    c: [1, 2],
  },
  {
    q: 'Pytanie 55/148: Rysy ukośne sprawdza się:',
    a: [
      'w połowie',
      'w strefie przypodporowej',
      'w 1/3 lub 1/4',
      'w miejscu żebra',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 56/148: Prasy kołowe Freyssineta - ciśnienie:',
    a: ['150 MPa', '1,5 MPa', '15 MPa', '0,15 MPa'],
    c: [2],
  },
  {
    q: 'Pytanie 57/148: Sprężanie termiczne - racjonalna stal:',
    a: ['wysokowęglowa', 'stopowa'],
    c: [1],
  },
  {
    q: 'Pytanie 58/148: Przy rysach ukośnych wyznacza się:',
    a: [
      'naprężenie normalne podłużne',
      'główne naprężenie rozciągające',
      'naprężenie styczne',
      'naprężenie normalne poprzeczne',
      'główne naprężenie ściskające',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 59/148: Straty w kablobetonie:',
    a: [
      'elast. betonu',
      'opóźnione (relaksacja, skurcz, pełzanie)',
      'odkształcenia styków',
    ],
    c: [0, 1, 2],
  },
  {
    q: 'Pytanie 60/148: Cechy kablobetonu:',
    a: ['naciąg po betonie', 'docisk', 'naciąg przed betonem', 'przyczepność'],
    c: [0, 1],
  },
  {
    q: 'Pytanie 61/148: Straty w kablobetonie:',
    a: [
      'tarcie w kanale',
      'wewn. w urządzeniach',
      'tarcie w zakotwieniu i uchwytach',
    ],
    c: [0, 1, 2],
  },
  {
    q: 'Pytanie 62/148: Iteracje w SGN mogą pojawić się:',
    a: ['nigdy', 'w realizacji', 'w montażu', 'w eksploatacji'],
    c: [1, 2, 3],
  },
  {
    q: 'Pytanie 63/148: Zakotwienia dzwonowe - kable:',
    a: ['specjalne', 'ze splotów', 'wielodrutowe', 'linowe', 'prętowe'],
    c: [2],
  },
  {
    q: 'Pytanie 64/148: Strunobeton wytwarza się:',
    a: ['tylko w prefabrykacji', 'tylko na budowie', 'tu i tu'],
    c: [0],
  },
  {
    q: 'Pytanie 65/148: Przemieszczenia prasy Freyssineta:',
    a: ['15-35mm', '150-350mm', '1.5-3.5mm'],
    c: [0],
  },
  {
    q: 'Pytanie 66/148: Cięgna w strunobetonie są w oporach na czas:',
    a: [
      'ustawienia form',
      'betonowania i twardnienia',
      '7 dni',
      '24h',
      'relaksacji',
      'mieszanki',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 67/148: Analiza strefy zakotwień kablobetonu:',
    a: [
      'zmienić metodę przy obciążonych bokach',
      'uprościć boki nieobciążone',
      'uwzględnić boki',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 68/148: Długość do siły zrywającej to długość:',
    a: [
      'transmisji',
      'zakotwienia',
      'transferu',
      'dystrybucji',
      'strefy zaburzeń',
      'dyspersji',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 69/148: Sprężanie rur obciążonych od wewnątrz:',
    a: ['największe korzyści', 'najmniejsze'],
    c: [0],
  },
  {
    q: 'Pytanie 70/148: Zbrojenie sztywne wygina się:',
    a: ['poprzecznie', 'pojedynczo', 'w kierunku ugięcia', 'przeciwnie'],
    c: [2],
  },
  {
    q: 'Pytanie 71/148: Klasy relaksacji stali w EC2:',
    a: ['1', '2', '3', '4'],
    c: [2],
  },
  {
    q: 'Pytanie 72/148: Ugięcie (wzór bez rys.):',
    a: ['stały i prosta', 'zmienny i prosta', 'stały i parabola'],
    c: [0],
  },
  {
    q: 'Pytanie 73/148: Straty w strunobetonie:',
    a: [
      'poślizg w zakotwieniach',
      'częściowa relaksacja',
      'temp.',
      'poślizg w uchwytach',
    ],
    c: [1, 2, 3],
  },
  {
    q: 'Pytanie 74/148: Poślizg w uchwytach (sztywne formy):',
    a: ['10x większy', '2x większy', '10x mniejs', '2x mniejs'],
    c: [0],
  },
  {
    q: 'Pytanie 75/148: Docisk w zakotwieniach strunobetonu:',
    a: ['istotniejszy', 'bezprzedmiotowy', 'tak samo ważny'],
    c: [1],
  },
  {
    q: 'Pytanie 76/148: Siły nieprostopadłe w zakotwieniu:',
    a: ['pominąć styczne', 'uwzględnić styczne', 'zmienić metodę'],
    c: [1],
  },
  {
    q: 'Pytanie 77/148: Wady sprężania odcinkowego zbiorników:',
    a: ['duże grubości', 'małe grubości', 'bez znaczenia'],
    c: [1],
  },
  {
    q: 'Pytanie 78/148: W zbiornikach spręża się:',
    a: ['powłoki denne', 'walcowe', 'pierścienie kopuł'],
    c: [1, 2],
  },
  {
    q: 'Pytanie 79/148: W strunobetonie stosuje się:',
    a: [
      'rozłączane',
      'odginane',
      'rozginane',
      'przełączane',
      'rozplatane',
      'wyłączane',
    ],
    c: [1, 5],
  },
  {
    q: 'Pytanie 80/148: Strata elast. przy kolejnym naciągu (kabel):',
    a: ['ostatni', 'każdy taki sam', 'pierwszy'],
    c: [2],
  },
  {
    q: 'Pytanie 81/148: Kotwienie w zbiornikach odcinkowych:',
    a: ['pilastry lub gniazda', 'tylko gniazda', 'tylko pilastry'],
    c: [0],
  },
  {
    q: 'Pytanie 82/148: Rysy prostopadłe - włókna dolne w stadium:',
    a: ['montażu', 'realizacji', 'eksploatacji'],
    c: [2],
  },
  {
    q: 'Pytanie 83/148: Liczbę cięgien szacuje się wg:',
    a: ['wysokości', 'momentu obl.', 'szerokości', 'momentu char.'],
    c: [3],
  },
  {
    q: 'Pytanie 84/148: SGN montażu/eksploatacji - sprawdzamy:',
    a: ['tylko moment', 'siłę i moment', 'tylko siłę'],
    c: [0],
  },
  {
    q: 'Pytanie 85/148: Strata elast. w strunobetonie vs kablobeton:',
    a: ['taka sama', 'mniejsza', 'większa'],
    c: [2],
  },
  {
    q: 'Pytanie 86/148: Strefa ściskana SGN realizacji z:',
    a: [
      'momentów cięgna',
      'momentów stali ścisk.',
      'wypadkowych sił',
      'momentów stali rozc.',
    ],
    c: [2],
  },
  {
    q: 'Pytanie 87/148: Prasa płaska Freyssineta:',
    a: ['płaski pojemnik blaszany kołowy/wydłużony'],
    c: [0],
  },
  {
    q: 'Pytanie 88/148: W kablobetonie zakotwienia:',
    a: ['czynne i bierne', 'tylko czynne', 'tylko bierne'],
    c: [0],
  },
  {
    q: 'Pytanie 89/148: Produkcja na torze:',
    a: [
      'nierównomierny naciąg',
      'duże straty stali',
      'małe straty stali',
      'równomierny naciąg',
    ],
    c: [1, 3],
  },
  {
    q: 'Pytanie 90/148: Strata poślizgu w kablobetonie zależy od:',
    a: ['modułu stali', 'modułu betonu'],
    c: [0],
  },
  {
    q: 'Pytanie 91/148: Strata poślizgu w kablobetonie zależy od:',
    a: [
      'modułu stali',
      'wartości poślizgu',
      'pola cięgien',
      'odległości od siłownika',
    ],
    c: [0, 1, 3],
  },
  {
    q: 'Pytanie 92/148: Formy na torze są:',
    a: ['nie obciążone naciągiem'],
    c: [0],
  },
  {
    q: 'Pytanie 93/148: Ograniczenia naciągu termicznego:',
    a: ['temperatura'],
    c: [0],
  },
  {
    q: 'Pytanie 94/148: Rozmieszczenie cięgien kablobeton:',
    a: [
      'odwrócone T',
      'S.C. w półce dolnej',
      'nieparzyste kolumny',
      'kształt T',
      'parzyste kolumny',
    ],
    c: [1, 4],
  },
  {
    q: 'Pytanie 95/148: Max siła naciągu - parametry:',
    a: ['pole cięgna', 'naprężenie dop.', 'granica plast.', 'siła zrywająca'],
    c: [0, 1, 3],
  },
  {
    q: 'Pytanie 96/148: Sprężenie poprzeczne:',
    a: [
      'zbiorniki',
      'belki',
      'tylko wzmocnienia',
      'rury',
      'tylko nowe',
      'nowe i wzmocnienia',
    ],
    c: [1, 5],
  },
  {
    q: 'Pytanie 97/148: Powłoka zbiornika (nawijanie):',
    a: ['ślizgowa', 'przestawna', 'prefabrykat', 'wirowana'],
    c: [0, 1, 2],
  },
  {
    q: 'Pytanie 98/148: Nawijarka obiegowa:',
    a: [
      'wózek na górze',
      'sztywne ramię',
      'sztywne ramię na wózku',
      'platforma na linach',
      'napęd na platformie',
      'obsługa na platformie',
    ],
    c: [0, 4, 5],
  },
  {
    q: 'Pytanie 99/148: Cechy strunobetonu:',
    a: ['przyczepność', 'naciąg po betonie', 'naciąg przed betonem', 'docisk'],
    c: [0, 2],
  },
  {
    q: 'Pytanie 100/148: Długości strunobeton (EC2):',
    a: ['dyspersji', 'transmisji'],
    c: [0, 1],
  },
  {
    q: 'Pytanie 101/148: Ekspansja betonu:',
    a: [
      'eliminuje skurcz',
      'zwiększa dylatacje',
      'trudna kontrola',
      'łatwa kontrola',
      'nie eliminuje skurczu',
      'zmniejsza dylatacje',
    ],
    c: [0, 1, 2],
  },
  {
    q: 'Pytanie 102/148: Strata elast. betonu:',
    a: ['zależy od geometrii', 'nie zależy'],
    c: [0],
  },
  {
    q: 'Pytanie 103/148: Produkcja strunobetonu:',
    a: ['ograniczone przyspieszanie twardnienia'],
    c: [0],
  },
  {
    q: 'Pytanie 104/148: Zakotwienie kabli linowych:',
    a: [
      'tuleja gwint.',
      'głowicowanie',
      'szczęki stożkowe',
      'zalanie stopem',
      'tarciowe',
      'gwintowe',
      'typ stożkowy',
    ],
    c: [3, 4],
  },
  {
    q: 'Pytanie 105/148: Ugięcie (parabola):',
    a: ['zmienny i prosta', 'stały i parabola', 'stały i prosta'],
    c: [1],
  },
  {
    q: 'Pytanie 106/148: Tarcie w kanale:',
    a: ['geometria', 'suma kątów', 'moduł stali', 'moduł betonu'],
    c: [1],
  },
  {
    q: 'Pytanie 107/148: Sprężanie termiczne rur:',
    a: ['gorące obręcze', 'gorące cięgna', 'gorący rdzeń'],
    c: [0, 1],
  },
  {
    q: 'Pytanie 108/148: Zakotwienie wachlarzowe bierne:',
    a: ['sploty', 'specjalne', 'wielodrutowe'],
    c: [2],
  },
  {
    q: 'Pytanie 109/148: Rysy prostopadłe belka 1a/1b:',
    a: ['montaż', 'eksploatacja', 'realizacja'],
    c: [2],
  },
  {
    q: 'Pytanie 110/148: Produkcja potokowa - formy:',
    a: ['poruszają się', 'stoją'],
    c: [0],
  },
  {
    q: 'Pytanie 111/148: Pilastry - dodatkowe:',
    a: ['momenty', 'siły równol.', 'siły połudn.'],
    c: [0],
  },
  {
    q: 'Pytanie 112/148: Zakotwienie kabli ze splotów:',
    a: [
      'szczęki',
      'gwint',
      'stop',
      'stożek',
      'tuleja',
      'tarciowe',
      'głowicowe',
    ],
    c: [0, 5],
  },
  {
    q: 'Pytanie 113/148: Zakotwienie półpętlicowe bierne:',
    a: ['wielodrutowe', 'sploty', 'specjalne'],
    c: [1],
  },
  {
    q: 'Pytanie 114/148: Rury duże - kable:',
    a: ['pełnoobwodowe', 'odcinkowe'],
    c: [1],
  },
  {
    q: 'Pytanie 115/148: Długość (EC2):',
    a: ['dyspraksji', 'dysleksji', 'dystrybucji', 'dysplazji', 'dyspersji'],
    c: [4],
  },
  {
    q: 'Pytanie 116/148: Kable w rurach dużych:',
    a: ['w ścianie', 'na zewnątrz'],
    c: [1],
  },
  {
    q: 'Pytanie 117/148: Kotwienie rury duże:',
    a: ['pilastry', 'gniazda'],
    c: [0],
  },
  {
    q: 'Pytanie 118/148: Szybkość naciągarki:',
    a: ['bez wpływu', 'decyduje o sile'],
    c: [1],
  },
  {
    q: 'Pytanie 119/148: Zbrojenie strefy zakotwień:',
    a: [
      'wybiórczo',
      'w pełni bazować na producent',
      'samodzielnie liczyć',
      'opcja',
    ],
    c: [1],
  },
  {
    q: 'Pytanie 120/148: Zakotwienie pętlicowe bierne:',
    a: ['wielodrutowe', 'sploty', 'specjalne'],
    c: [1],
  },
  {
    q: 'Pytanie 121/148: Straty strunobeton:',
    a: ['temp.', 'relaksacja', 'uchwyty', 'zakotwienia'],
    c: [0, 1, 2],
  },
];

let currentIdx = 0;
let correctCount = 0;
let wrongCount = 0;
let isChecked = false; // Nowa zmienna: czy aktualne pytanie zostało już sprawdzone

const questionArea = document.getElementById('question-area');
const nextBtn = document.getElementById('next-btn');
const correctSpan = document.getElementById('correct-count');
const wrongSpan = document.getElementById('wrong-count');
const totalSpan = document.getElementById('total-score');

function updateStats() {
  correctSpan.innerText = correctCount;
  wrongSpan.innerText = wrongCount;
  totalSpan.innerText = correctCount;
}

function loadQuestion() {
  isChecked = false;
  nextBtn.innerText = 'Sprawdź / Dalej';
  const qData = questions[currentIdx];
  questionArea.innerHTML = `<h3>${qData.q}</h3>`;

  qData.a.forEach((ans, i) => {
    const div = document.createElement('div');
    div.className = 'option';
    div.id = `opt-${i}`; // ID do łatwego kolorowania
    div.innerHTML = `<label style="display:block; width:100%; cursor:pointer;">
                            <input type="checkbox" value="${i}" class="ans-checkbox"> ${ans}
                         </label>`;
    questionArea.appendChild(div);
  });
}

nextBtn.onclick = () => {
  const checkboxes = document.querySelectorAll('.ans-checkbox');
  const selected = Array.from(checkboxes)
    .filter(i => i.checked)
    .map(i => parseInt(i.value));

  if (selected.length === 0 && !isChecked) {
    alert('Wybierz odpowiedź!');
    return;
  }

  const correct = questions[currentIdx].c;

  // FAZA 1: SPRAWDZENIE I PODŚWIETLENIE
  if (!isChecked) {
    const isOk =
      selected.length === correct.length &&
      selected.every(v => correct.includes(v));

    if (isOk) {
      correctCount++;
    } else {
      wrongCount++;
    }

    updateStats();

    // Podświetlanie odpowiedzi
    checkboxes.forEach((cb, i) => {
      const optionDiv = document.getElementById(`opt-${i}`);
      cb.disabled = true; // Blokujemy możliwość zmiany po sprawdzeniu

      if (correct.includes(i)) {
        // To była poprawna odpowiedź - na zielono
        optionDiv.style.backgroundColor = '#d4edda';
        optionDiv.style.borderColor = '#c3e6cb';
        optionDiv.style.color = '#155724';
      } else if (cb.checked) {
        // To była błędna zaznaczona odpowiedź - na czerwono
        optionDiv.style.backgroundColor = '#f8d7da';
        optionDiv.style.borderColor = '#f5c6cb';
        optionDiv.style.color = '#721c24';
      }
    });

    nextBtn.innerText = 'Następne pytanie »';
    isChecked = true;
  }
  // FAZA 2: PRZEJŚCIE DALEJ
  else {
    currentIdx++;
    if (currentIdx < questions.length) {
      loadQuestion();
    } else {
      questionArea.innerHTML = `<h2>Test zakończony!</h2>
                                      <p>Twoje statystyki końcowe są widoczne w panelu obok.</p>
                                      <button onclick="location.reload()">Zacznij od nowa</button>`;
      nextBtn.style.display = 'none';
    }
  }
};

loadQuestion();
