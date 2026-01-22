let wrongQuestionsPool = [];
const rawQuestions = [
  {
    q: 'Pytanie 1 \nSprężanie kablobetonowe stosuje się najczęściej:',
    a: [
      'A.     przy usuwaniu skutków awarii rurociągów',
      'B.     przy masowej produkcji elementów',
      'C.    wyłącznie w zakładach prefabrykacji',
      'D.    na placu budowy lub w wytwórniach polowych',
    ],
    c: [3],
    img: '',
  },
  {
    q: 'Pytanie 2 \nSprężanie termiczne rur jest najczęściej stosowane:',
    a: [
      'A.     przy usuwaniu skutków awarii rurociągów',
      'B.     przy masowej produkcji elementów',
      'C.    wyłącznie w zakładach prefabrykacji',
      'D.    przy wzmacnianiu istniejących konstrukcji',
    ],
    c: [1, 2],
    img: '',
  },
  {
    q: 'Pytanie 3 \nW elementach sprężonych kablem bez przyczepności (ang. unbonded\npost-tensioned), cięgna są:',
    a: [
      'A.     połączone z betonem na całej długości za pomocą iniektu',
      'B.     trwale oddzielone od betonu osłonkami i zabezpieczone smarem',
      'C.    kotwione tylko na końcach elementu',
      'D.    poddawane naciągowi przed zabetonowaniem elementu',
    ],
    c: [1, 2],
    img: '',
  },
  {
    q: 'Pytanie 4 \nDługość transferu (transmisji) siły sprężającej w elementach\nstrunobetonowych zależy od:',
    a: [
      'A.     średnicy cięgna',
      'B.     wytrzymałości betonu w chwili zwolnienia naciągu',
      'C.    rodzaju powierzchni cięgna (gładka, żebrowana, splot)',
      'D.    stopnia nawilżenia betonu podczas pielęgnacji',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 5 \nStraty doraźne siły sprężającej w konstrukcjach kablobetonowych\nto:',
    a: [
      'A.     straty od tarcia cięgien o ścianki kanałów',
      'B.     straty od poślizgu w zakotwieniach',
      'C.    straty od skurczu betonu',
      'D.    straty od relaksacji stali',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 6 \nW konstrukcji strunobetonowej siła sprężająca jest przekazywana\nna beton:',
    a: [
      'A.     poprzez zakotwienia mechaniczne na końcach elementu',
      'B.     przez przyczepność na całej długości cięgna',
      'C.    tylko po stwardnieniu iniektu w kanałach',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 7 \nStale sprężające charakteryzują się:',
    a: [
      'A.     bardzo wysoką granicą plastyczności',
      'B.     dużą ciągliwością (wydłużeniem przy zerwaniu)',
      'C.    niską relaksacją',
      'D.    wysoką zawartością węgla lub obróbką mechaniczną/termiczną',
    ],
    c: [0, 2, 3],
    img: '',
  },
  {
    q: 'Pytanie 8 \nZaletą konstrukcji sprężonych w porównaniu do żelbetowych\njest:',
    a: [
      'A.     zwiększenie sztywności i ograniczenie ugięć',
      'B.     możliwość stosowania większych rozpiętości',
      'C.    eliminacja lub ograniczenie zarysowania',
      'D.    niższy koszt robocizny i prostsza technologia wykonania',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 9\nZjawisko relaksacji stali sprężającej polega na:',
    a: [
      'A.     wzroście naprężeń przy stałym wydłużeniu',
      'B.     spadku naprężeń przy stałym wydłużeniu w czasie',
      'C.    wydłużaniu się cięgna pod stałym obciążeniem',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 10\nDo sprężania najczęściej wykorzystuje się:',
    a: [
      'A.     druty stalowe gładkie i profilowane',
      'B.     sploty siedmiodrutowe',
      'C.    pręty o wysokiej wytrzymałości',
      'D.    siatki zgrzewane',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 11\nSprężanie "bierne" (ang. self-stressing) z wykorzystaniem\nbetonu ekspansywnego polega na:',
    a: [
      'A.     wykorzystaniu pęcznienia betonu ograniczonego zbrojeniem',
      'B.     podgrzewaniu cięgien prądem elektrycznym',
      'C.    naciąganiu cięgien prasami hydraulicznymi',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 12\nZwolnienie naciągu w strunobetonie może nastąpić, gdy:',
    a: [
      'A.     beton osiągnie projektowaną wytrzymałość na ściskanie',
      'B.     beton osiągnie klasę min. C12/15',
      'C.    przyczepność między stalą a betonem jest wystarczająca',
    ],
    c: [0, 2],
    img: '',
  },
  {
    q: 'Pytanie 13\nIniekcja kanałów kablowych ma na celu:',
    a: [
      'A.     ochronę antykorozyjną cięgien',
      'B.     zapewnienie przyczepności między kablem a betonem',
      'C.    zmniejszenie strat od tarcia',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 14\nWspółczynnik tarcia w kanale kablowym zależy od:',
    a: [
      'A.     materiału rurki osłonowej (stal, tworzywo)',
      'B.     stanu powierzchni stali sprężającej',
      'C.    typu zakotwienia',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 15\nCięgna zewnętrzne (ang. external tendons) są stosowane\ngłównie:',
    a: [
      'A.     w mostach skrzynkowych',
      'B.     przy wzmacnianiu istniejących konstrukcji',
      'C.    w cienkich płytach stropowych',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 16\nZjawisko pełzania betonu powoduje:',
    a: [
      'A.     wzrost siły sprężającej w czasie',
      'B.     spadek siły sprężającej w czasie (strata reologiczna)',
      'C.    zwiększenie ugięć elementów zginanych',
    ],
    c: [1, 2],
    img: '',
  },
  {
    q: 'Pytanie 17\nKable sprężające w belkach ciągłych prowadzi się zazwyczaj:',
    a: [
      'A.     dołem w przęsłach, górą nad podporami',
      'B.     zawsze w osi obojętnej przekroju',
      'C.    zgodnie z obrysem wykresu momentów zginających',
    ],
    c: [0, 2],
    img: '',
  },
  {
    q: 'Pytanie 18\nMinimalna klasa betonu w konstrukcjach sprężonych (wg EC2)\nto zazwyczaj:',
    a: [
      'A.     C20/25 dla strunobetonu',
      'B.     C30/37 dla strunobetonu',
      'C.    C25/30 dla kablobetonu',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 19\nKotwienie splotów w zakotwieniach szczękowych opiera się na:',
    a: [
      'A.     tarciu i klinowaniu się szczęk w głowicy',
      'B.     zgrzewaniu końcówek stali',
      'C.    połączeniu gwintowym',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 20\nWpływ temperatury na siłę sprężającą jest istotny w:',
    a: [
      'A.     produkcji na długich torach strunobetonowych (podgrzewanie betonu)',
      'B.     konstrukcjach poddanych pożarowi',
      'C.    każdym przypadku bez względu na warunki klimatyczne',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 21\nWspółczynnik relaksacji stali zależy od:',
    a: [
      'A.     poziomu wytężenia stali (stosunku naprężenia początkowego do wytrzymałości)',
      'B.     temperatury',
      'C.    czasu',
      'D.    klasy relaksacji stali',
    ],
    c: [0, 1, 2, 3],
    img: '',
  },
  {
    q: 'Pytanie 22\nPróbna metoda obciążania pali (pali próbnych) jest stosowana w celu:',
    a: [
      'A.     wyznaczenia nośności pala',
      'B.     sprawdzenia poprawności wykonania pali',
      'C.    wyznaczenia osiadań pali',
    ],
    c: [0, 2],
    img: '',
  },
  {
    q: 'Pytanie 23\nPrzy sprężaniu na torze naciągowym, straty siły sprężającej od różnicy temperatur występują:',
    a: [
      'A.     w chwili betonowania elementu',
      'B.     podczas obróbki termicznej (naparowania) betonu, gdy cięgna są zakotwione na sztywnych stanowiskach toru',
      'C.    wyłącznie w fazie eksploatacji',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 24\nZastosowanie splotów zamiast drutów gładkich w strunobetonie pozwala na:',
    a: [
      'A.     skrócenie długości transferu siły sprężającej dzięki lepszej przyczepności',
      'B.     zmniejszenie liczby cięgien przy tej samej sile sprężającej',
      'C.    wyeliminowanie zjawiska relaksacji',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 25\nW metodzie sprężania zewnętrznego cięgna są prowadzone:',
    a: [
      'A.     wewnątrz przekroju betonu, ale bez przyczepności',
      'B.     poza przekrojem betonu (np. wewnątrz skrzynki mostu lub pod belką)',
      'C.    wyłącznie w rurkach stalowych wypełnionych betonem',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 26\nGraniczna wartość siły naciągu cięgna podczas sprężania jest ograniczona ze względu na:',
    a: [
      'A.     bezpieczeństwo pracowników',
      'B.     ryzyko zerwania cięgna',
      'C.    nośność zakotwień i urządzeń naciągowych',
      'D.    ograniczenie naprężeń w betonie w fazie realizacji',
    ],
    c: [1, 2, 3],
    img: '',
  },
  {
    q: 'Pytanie 27\nZbrojenie rozdzielcze (siatki) w strefie zakotwień kablobetonowych projektuje się w celu:',
    a: [
      'A.     przejęcia naprężeń rozrywających (poprzecznych) powstałych od skupionej siły sprężającej',
      'B.     zwiększenia wytrzymałości betonu na ściskanie pod płytką kotwiącą',
      'C.    ochrony antykorozyjnej zakotwienia',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 28\nSkurcz betonu w konstrukcjach sprężonych powoduje:',
    a: [
      'A.     zmniejszenie ugięć',
      'B.     stratę siły sprężającej',
      'C.    skrócenie elementu sprężonego',
    ],
    c: [1, 2],
    img: '',
  },
  {
    q: 'Pytanie 29\nWspółczynnik pełzania betonu zależy od:',
    a: [
      'A.     wilgotności otoczenia',
      'B.     wieku betonu w chwili obciążenia (sprężenia)',
      'C.    składu mieszanki betonowej',
      'D.    pola powierzchni przekroju elementu',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 30\nKotwienie splotów w zakotwieniu czynnym (naciągowym) odbywa się zazwyczaj przez:',
    a: [
      'A.     dokręcenie nakrętki na gwintowanym końcu splotu',
      'B.     wciśnięcie szczęk (klinów) w otwory stożkowe głowicy pod wpływem siły naciągu',
      'C.    zabetonowanie końcówki cięgna',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 31\nSmar w kablach bez przyczepności pełni funkcję:',
    a: [
      'A.     antykorozyjną',
      'B.     zmniejszającą tarcie podczas naciągu',
      'C.    zwiększającą przyczepność do betonu',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 32\nMetoda naciągu cięgien "drabinkowa" w strunobetonie polega na:',
    a: [
      'A.     naciąganiu każdego cięgna z osobna',
      'B.     jednoczesnym naciągu wszystkich cięgien zamocowanych do wspólnej poprzeczki',
      'C.    schodkowym zwiększaniu siły naciągu w czasie betonowania',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 33\nMinimalna odległość między osiami kanałów kablowych jest ograniczona ze względu na:',
    a: [
      'A.     możliwość poprawnego ułożenia i zagęszczenia mieszanki betonowej',
      'B.     wytrzymałość betonu na ściskanie między kanałami',
      'C.    wymiary pras hydraulicznych do naciągu',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 34\nW fazie sprężania (przekazywania siły na beton) w belce swobodnie podpartej sprężonej kablem parabolicznym dołem:',
    a: [
      'A.     włókna dolne są ściskane',
      'B.     włókna górne mogą być rozciągane',
      'C.    belka wygina się do góry (strzałka odwrotna)',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 35\nIniekt w kanałach kablowych powinien cechować się:',
    a: [
      'A.     niskim współczynnikiem w/c (woda/cement)',
      'B.     brakiem osiadania i skurczu (może być lekko ekspansywny)',
      'C.    wysoką płynnością podczas tłoczenia',
      'D.    dużą zawartością chlorków dla przyspieszenia twardnienia',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 36\nDo zalet strunobetonu należy:',
    a: [
      'A.     wysoki stopień uprzemysłowienia produkcji',
      'B.     brak kosztownych zakotwień mechanicznych w gotowym elemencie',
      'C.    możliwość sprężania elementów o dowolnym kształcie na budowie',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 37\nStraty siły sprężającej od tarcia w kablobetonie występują:',
    a: [
      'A.     na prostych odcinkach trasy kabla (tarcie pasożytnicze)',
      'B.     na łukach (zakrzywieniach) trasy kabla',
      'C.    tylko w chwili iniekcji kanału',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 38\nBetonowanie elementów sprężonych wymaga szczególnej uwagi przy:',
    a: [
      'A.     zagęszczaniu betonu w strefie zakotwień (gęste zbrojenie)',
      'B.     stabilizacji położenia kanałów kablowych',
      'C.    pielęgnacji betonu (wpływ na skurcz i pełzanie)',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 39\nUrządzenia naciągowe (prasy) muszą posiadać aktualne świadectwa cechowania (kalibracji) w celu:',
    a: [
      'A.     zapewnienia precyzyjnego pomiaru siły sprężającej poprzez ciśnienie w układzie',
      'B.     kontroli wydłużenia cięgien',
      'C.    potwierdzenia mocy silnika pompy',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 40\nW elementach sprężonych siła sprężająca ulega redukcji w czasie z powodu:',
    a: [
      'A.     relaksacji stali',
      'B.     skurczu betonu',
      'C.    pełzania betonu',
      'D.    korozji stali',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 41\nPrzewody (rurki) osłonowe w kablobetonie powinny być:',
    a: [
      'A.     szczelne, aby zapobiec przedostaniu się\nmieszanki betonowej do wnętrza',
      'B.     odporne na uszkodzenia mechaniczne podczas\nbetonowania',
      'C.    wykonane wyłącznie z metalu',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 42\nWspółczynnik tarcia w kanale kablobetonowym przyjmuje się w\nzależności od:',
    a: [
      'A.     rodzaju powierzchni cięgna',
      'B.     rodzaju (materiału) rurki osłonowej',
      'C.    wieku betonu',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 43\nW strunobetonie, po zwolnieniu naciągu cięgien, naprężenia w\nbetonie są:',
    a: [
      'A.     największe na końcach elementu',
      'B.     stałe na całej długości elementu (poza strefami\nzakotwień)',
      'C.    zerowe na końcach elementu i rosną na długości\ntransmisji',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 44\nZjawisko "przeciągania" (ang. overstressing) cięgien\nstosuje się czasem w celu:',
    a: [
      'A.     zredukowania strat od tarcia',
      'B.     zredukowania strat od relaksacji stali',
      'C.    sprawdzenia wytrzymałości cięgien',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 45\nBetonowanie konstrukcji kablobetonowych może odbywać się:',
    a: [
      'A.     tylko po zainstalowaniu rurek osłonowych i\nzakotwień',
      'B.     po naciągnięciu cięgien',
      'C.    w dowolnej kolejności względem montażu kabli',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 46\nKable sprężające bez przyczepności (ang. unbonded) stosuje\nsię głównie w:',
    a: [
      'A.     płaskich stropach budynków kubaturowych',
      'B.     wielkich mostach o rekordowych rozpiętościach',
      'C.    fundamentach pod maszyny',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 47\nW strefie zakotwień kablobetonowych występuje:',
    a: [
      'A.     bardzo wysokie, lokalne ściskanie betonu pod\npłytką kotwiącą',
      'B.     rozciąganie poprzeczne (tzw. splitting)',
      'C.    czyste zginanie',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 48\nPrzy sprężaniu na torze naciągowym, długość toru ma wpływ\nna:',
    a: [
      'A.     wielkość strat od poślizgu w uchwytach\n(procentowo)',
      'B.     liczbę elementów, które można jednocześnie\nprodukować',
      'C.    wytrzymałość betonu',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 49\nZjawisko "odsychania" (ang. draw-in) klinów w\nzakotwieniu powoduje:',
    a: [
      'A.     wzrost siły sprężającej',
      'B.     stratę siły sprężającej (doraźną)',
      'C.    konieczność ponownego naciągu',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 50\nProjektowanie konstrukcji sprężonych wg EC2 wymaga\nsprawdzenia:',
    a: [
      'A.     stanu granicznego nośności (ULS)',
      'B.     stanu granicznego użytkowalności (SLS) - ugięcia\ni zarysowanie',
      'C.    stanów granicznych w fazie realizacji',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 51\nWspółczynnik tarcia w zakotwieniu jest istotny przy:',
    a: [
      'A.     wyznaczaniu siły naciągu na prasie',
      'B.     obliczaniu wydłużeń cięgien',
      'C.    określaniu trwałości zakotwienia',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 52\nZastosowanie betonu wysokiej wytrzymałości w konstrukcjach\nsprężonych pozwala na:',
    a: [
      'A.     wcześniejsze wprowadzenie siły sprężającej',
      'B.     zmniejszenie przekroju poprzecznego elementów',
      'C.    redukcję strat od pełzania i skurczu',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 53\nPodczas naciągu kabli wielosplotowych, prasa hydrauliczna:',
    a: [
      'A.     naciąga wszystkie sploty jednocześnie',
      'B.     może naciągać sploty pojedynczo (w systemie\nmonostrand)',
      'C.    blokuje kliny automatycznie po osiągnięciu\nzadanej siły',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 54\nBłędy w montażu trasy kabla (odchyłki od projektu) wpływają\nna:',
    a: [
      'A.     zmianę wartości strat od tarcia',
      'B.     zmianę nośności elementu na zginanie i ścinanie',
      'C.    wartość sił poprzecznych od sprężenia',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 55\nOchrona antykorozyjna cięgien w kablobetonie z\nprzyczepnością jest zapewniona przez:',
    a: [
      'A.     alkaliczne środowisko iniektu cementowego',
      'B.     szczelność rurek osłonowych',
      'C.    otulinę betonową rurki osłonowej',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 56\nIniekt cementowy powinien być wprowadzany do kanału:',
    a: [
      'A.     od najniższego punktu trasy kabla',
      'B.     pod ciśnieniem, aż do wypłynięcia przez odpowietrzniki',
      'C.    wyłącznie grawitacyjnie',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 57\nW strunobetonie siła sprężająca rośnie od zera do pełnej\nwartości na długości:',
    a: [
      'A.     transmisji (transferu)',
      'B.     zakotwienia',
      'C.    całego elementu',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 58\nCięgna sprężające powinny być wolne od:',
    a: [
      'A.     rdzy luźnej (płatowej)',
      'B.     zanieczyszczeń tłustych (smarów, olejów) - dotyczy\nkabli z przyczepnością',
      'C.    nalotu rdzy nalotowej (niepłatowej)',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 59\nZastosowanie naciągu obustronnego (z dwóch końców kabla)\npozwala na:',
    a: [
      'A.     wyrównanie strat od tarcia na długości kabla',
      'B.     zwiększenie efektywnej siły sprężającej w środku\nrozpiętości',
      'C.    skrócenie czasu sprężania',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 60\nPrzy sprężaniu termicznym, wydłużenie cięgna jest\nwywołane:',
    a: [
      'A.     rozszerzalnością cieplną stali pod wpływem prądu\nlub gorącej pary',
      'B.     prasą hydrauliczną',
      'C.    pęcznieniem betonu',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 101\nEkspansja betonu:',
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
    q: 'Pytanie 61\nW konstrukcjach strunobetonowych, pozycjonowanie cięgien w\nformie odbywa się za pomocą:',
    a: [
      'A.     płyt rozdzielczych na końcach toru',
      'B.     grzebieni lub specjalnych uchwytów wewnątrz\nformy',
      'C.    podkładek dystansowych (jeśli dopuszczalne)',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 62\nPrzy obliczaniu strat doraźnych w kablobetonie, uwzględnia\nsię poślizg w zakotwieniu, który wynosi zazwyczaj:',
    a: [
      'A.     0 mm',
      'B.     4-8 mm (zależnie od typu zakotwienia)',
      'C.    15-20 mm',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 63\nStrunobetonowe płyty kanałowe (HC) są produkowane głównie\nmetodą:',
    a: [
      'A.     ekstruzji (wytłaczania) na długich torach',
      'B.     odlewania w pojedynczych formach',
      'C.    wirowania',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 64\nWspółczynnik relaksacji stali klasy 2 (niskorelaksacyjnej) po\n1000 godzinach przy naprężeniu 0.7fpk wynosi około:',
    a: ['A.     2.5%', 'B.     8.0%', 'C.    1.0%'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 65\nZastosowanie cięgien odgiętych w belkach sprężonych ma na\ncelu:',
    a: [
      'A.     równoważenie obciążeń poprzecznych (ścinania)',
      'B.     zmniejszenie naprężeń rozciągających przy\npodporach w górnych włóknach',
      'C.    zwiększenie nośności na docisk',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 66\nKotwienie splotów "na cebulkę" (ang. onion anchorage)\nto rodzaj zakotwienia:',
    a: [
      'A.     biernego (martwego) wewnątrz elementu',
      'B.     czynnego (naciągowego)',
      'C.    wyłącznie dla kabli zewnętrznych',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 67\nW elementach sprężonych siła sprężająca powoduje w przekroju\nbetonowym:',
    a: [
      'A.     siłę osiową ściskającą',
      'B.     moment zginający (jeśli siła działa na mimośrodzie)',
      'C.    wyłącznie naprężenia rozciągające',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 68\nMinimalna grubość ścianki rurki osłonowej ze stali\nkarbowanej wynosi zazwyczaj:',
    a: ['A.     0.1 mm', 'B.     0.3-0.5 mm', 'C.    1.0 mm'],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 69\nZjawisko "pasożytniczych" momentów zginających\nwystępuje w:',
    a: [
      'A.     belkach statycznie wyznaczalnych',
      'B.     konstrukcjach statycznie niewyznaczalnych (np.\nbelki ciągłe, ramy)',
      'C.    płytach wspornikowych',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 70\nPrzy sprężaniu kablobetonowym, wydłużenie cięgna mierzy się\nod momentu:',
    a: [
      'A.     włożenia cięgna do kanału',
      'B.     skasowania luzów i uzyskania siły wstępnej (tzw.\nslack)',
      'C.    zakończenia betonowania',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 71\nPodczas iniekcji, odpowietrzniki (rurki odpowietrzające)\numieszcza się w:',
    a: [
      'A.     najwyższych punktach trasy kabla',
      'B.     zakotwieniach',
      'C.    najniższych punktach trasy kabla',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 72\nW strunobetonie, zjawisko poślizgu cięgna przy zwolnieniu\nnaciągu (tzw. draw-in) świadczy o:',
    a: [
      'A.     niedostatecznej przyczepności lub zbyt niskiej\nwytrzymałości betonu',
      'B.     bardzo dobrej współpracy stali z betonem',
      'C.    konieczności użycia iniektu',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 73\nSiła sprężająca efektywna to siła:',
    a: [
      'A.     naciągu na prasie',
      'B.     po uwzględnieniu wszystkich strat (doraźnych i\nopóźnionych)',
      'C.    wprowadzona w chwili zwolnienia naciągu',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 74\nStrefa przekazywania siły sprężającej (transmisji) w\nstrunobetonie jest zazwyczaj:',
    a: [
      'A.     krótsza dla splotów niż dla drutów gładkich o\ntej samej średnicy',
      'B.     dłuższa dla cięgien o większej średnicy',
      'C.    niezależna od klasy betonu',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 75\nPręty sprężające wysokiej wytrzymałości (np. SAS, Gewi) są\nczęsto stosowane do:',
    a: [
      'A.     sprężania pionowego (np. ścian, pylonów)',
      'B.     podwieszeń i kotew gruntowych',
      'C.    produkcji strunobetonowych płyt stropowych',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 76\nPrzyczyną strat siły sprężającej od tarcia "pasożytniczego"\njest:',
    a: [
      'A.     niezamierzone pofalowanie kanałów kablowych\npodczas montażu i betonowania',
      'B.     celowe zakrzywienie trasy kabla',
      'C.    chropowatość stali sprężającej',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 77\nW fazie eksploatacji, ugięcia belek sprężonych są zazwyczaj:',
    a: [
      'A.     większe niż w belkach żelbetowych o tych samych\ngabarytach',
      'B.     znacznie mniejsze dzięki przeciwdziałaniu siły\nsprężającej (podniesienie)',
      'C.    identyczne',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 78\nWarunek niespękania (niezarysowania) betonu w stadium\neksploatacji jest kluczowy dla:',
    a: [
      'A.     klasy sprężenia 1 (pełne sprężenie)',
      'B.     ochrony cięgien przed korozją w środowisku\nagresywnym',
      'C.    zapewnienia szczelności zbiorników',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 79\nPodczas naciągu "etapowego", część cięgien naciąga się\nwcześniej, aby:',
    a: [
      'A.     zrównoważyć ciężar własny elementu w fazie\nmontażu',
      'B.     umożliwić transport prefabrykatu bez ryzyka\nzarysowania',
      'C.    wyeliminować relaksację',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 80\nWspółczynnik bezpieczeństwa dla siły naciągu podczas\noperacji sprężania (wg EC2) wynosi zazwyczaj:',
    a: [
      'A.     max 0.80 fpk lub 0.90 fp0.1k',
      'B.     zawsze 1.0 fpk',
      'C.    0.50 fpk',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 81\nPrzy sprężaniu kablobetonowym, straty doraźne od odkształcenia\nsprężystego betonu występują, gdy:',
    a: [
      'A.     naciąga się wszystkie kable jednocześnie',
      'B.     kable naciągane są kolejno jeden po drugim',
      'C.    nie występują nigdy w kablobetonie',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 82\nWspółczynnik tarcia "u" dla kabla w rurce stalowej\nwynosi zazwyczaj około:',
    a: ['A.     0.10 - 0.15', 'B.     0.18 - 0.25', 'C.    0.40 - 0.50'],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 83\nPrzewody odpowietrzające w kanałach kablowych powinny\nwystawać ponad górną powierzchnię betonu, aby:',
    a: [
      'A.     umożliwić swobodne ujście powietrza i wody\npodczas iniekcji',
      'B.     służyć jako uchwyty transportowe',
      'C.    mierzyć temperaturę iniektu',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 84\nSmar stosowany w kablach bez przyczepności (ang. CP grease)\nmusi być:',
    a: [
      'A.     chemicznie obojętny dla stali i osłonki PE',
      'B.     odporny na starzenie i utlenianie',
      'C.    rozpuszczalny w wodzie',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 85\nW strunobetonie, siła sprężająca jest wprowadzana do betonu:',
    a: [
      'A.     stopniowo, poprzez powolne luzowanie naciągu na\ntorze',
      'B.     gwałtownie, przez przecięcie cięgien palnikiem',
      'C.    dopiero po poddaniu elementu obciążeniu użytkowemu',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 86\nZbrojenie "strefy rozproszonej" w elemencie\nsprężonym ma na celu:',
    a: [
      'A.     przejęcie naprężeń rozciągających poza bezpośrednią\nstrefą zakotwienia',
      'B.     zapewnienie nośności na ścinanie',
      'C.    ułatwienie betonowania',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 87\nKable zewnętrzne (ang. external tendons) są zazwyczaj\nkotwione w:',
    a: [
      'A.     poprzecznicach podporowych',
      'B.     specjalnych blokach oporowych (dewiatorach)',
      'C.    dowolnym miejscu środnika belki',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 88\nMinimalna klasa betonu dla strunobetonu (wg polskich\npraktyk projektowych i EC2) to zazwyczaj:',
    a: ['A.     C30/37', 'B.     C40/50', 'C.    C20/25'],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 89\nZjawisko "karbu" na stali sprężającej (np. od\nszczęk) może powodować:',
    a: [
      'A.     lokalne osłabienie przekroju i ryzyko zerwania\ncięgna',
      'B.     poprawę przyczepności',
      'C.    zmniejszenie relaksacji',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 90\nPrzy sprężaniu zbiorników walcowych metodą nawijania\n(metoda BBR), drut jest:',
    a: [
      'A.     przeciągany przez matrycę kalibrującą, co\nwywołuje naciąg i nagrzewa drut',
      'B.     naciągany tylko prasami hydraulicznymi',
      'C.    układany luźno i zalewany betonem',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 91\nIniekt cementowy po stwardnieniu powinien mieć\nwytrzymałość min.:',
    a: ['A.     10 MPa', 'B.     25-30 MPa', 'C.    50 MPa'],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 92\nWspółczynnik "k" (tzw. tarcie pasożytnicze) uwzględnia:',
    a: [
      'A.     błędy wykonawcze ułożenia kanału',
      'B.     zmianę kierunku kabla w pionie i poziomie',
      'C.    rodzaj iniektu',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 93\nStosowanie splotów galwanizowanych (ocynkowanych) ma na\ncelu:',
    a: [
      'A.     zwiększenie ochrony antykorozyjnej w trudnych\nwarunkach',
      'B.     zwiększenie przyczepności do betonu',
      'C.    obniżenie kosztów materiałowych',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 94\nPrzy obliczaniu nośności przekroju sprężonego na zginanie\n(ULS), stal sprężającą traktuje się jako:',
    a: [
      'A.     zbrojenie rozciągane o bardzo wysokiej\nwytrzymałości',
      'B.     siłę zewnętrzną skupioną',
      'C.    element niebiorący udziału w nośności po\nzarysowaniu',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 95\nW kablobetonie bez przyczepności, przyrost siły w kablu\nod obciążeń zewnętrznych jest:',
    a: [
      'A.     taki sam jak w kablu z przyczepnością',
      'B.     znacznie mniejszy i rozłożony na całej długości\nkabla',
      'C.    zerowy',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 96\nMontaż zakotwień czynnych wymaga:',
    a: [
      'A.     prostopadłego ustawienia osi kabla względem\npłaszczyzny oporowej',
      'B.     zachowania czystości powierzchni klinów i głowic',
      'C.    użycia smaru na powierzchniach styku klin-splot\n(tylko w specyficznych systemach)',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 97\nDla belek strunobetonowych o zmiennej wysokości (np.\ndwuspadowych), środek ciężkości cięgien zazwyczaj:',
    a: [
      'A.     jest prowadzony równolegle do dolnego włókna',
      'B.     jest prowadzony równolegle do górnego włókna',
      'C.    znajduje się zawsze w środku wysokości przekroju',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 98\nPodczas iniekcji kabli, ciśnienie tłoczenia nie powinno\nprzekraczać zazwyczaj:',
    a: [
      'A.     0.1 MPa',
      'B.     1.0 - 2.0 MPa (aby nie rozerwać kanału)',
      'C.    10 MPa',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 99\nZaletą stosowania prefabrykatów strunobetonowych jest:',
    a: [
      'A.     możliwość uzyskania bardzo wysokiej jakości\nbetonu w warunkach fabrycznych',
      'B.     skrócenie czasu budowy obiektu',
      'C.    niskie koszty transportu ciężkich elementów',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 100\nPo zakończeniu sprężania i iniekcji, końcówki cięgien\nwystające z zakotwień:',
    a: [
      'A.     odcina się (najlepiej mechanicznie) i zabezpiecza\nbetonem lub kapturkiem',
      'B.     zostawia się do ewentualnego dociągu w\nprzyszłości',
      'C.    zagina się pod kątem 90 stopni',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 102\nWartość straty od odkształceń sprężystych betonu:',
    a: [
      'A.     zależy od charakterystyk geometrycznych\nprzekroju',
      'B.     nie zależy od charakterystyk geometrycznych\nprzekroju',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 103\nProdukcja elementów strunobetonowych cechuje się:',
    a: [
      'A.     ograniczonymi możliwościami zabiegów\nprzyspieszających twardnienie betonu',
      'B.     brakiem konieczności stosowania betonów o\nwysokich klasach wytrzymałości (powyżej C20/25)',
      'C.    możliwością zwolnienia naciągu cięgien\nnatychmiast po zawibrowaniu mieszanki betonowej w formach',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 104\nPrzy sprężaniu kablami linowymi w zakotwieniu czynnym\nstosuje się zakotwienie:',
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
    q: 'Pytanie 105\n\n \nPrzedstawiony poniżej wzór pozwala obliczyć doraźne\nugięcie od sprężania w przypadku dźwigara o:',
    a: [
      'A.     zmiennym przekroju (dźwigar dwuspadowy) i\nprostoliniowej trasie cięgien',
      'B.     stałym przekroju i parabolicznej trasie cięgien',
      'C.    stałym przekroju i prostoliniowej trasie cięgien',
    ],
    c: [0],
    img: 'images/105.png',
  },
  {
    q: 'Pytanie 106\nWartość straty od tarcia w kanale kablowym zależy od:',
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
    q: 'Pytanie 107\nSprężanie termiczne rur polega na:',
    a: [
      'A.     umieszczeniu na rurze rozgrzanych obręczy\nmetalowych',
      'B.     nawijaniu na rdzeń rury rozgrzanych cięgien',
      'C.    nawijaniu cięgien na rozgrzany rdzeń rury',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 108\nZakotwienie wachlarzowe, z indywidualnymi zakotwieniami\nbiernymi, to rodzaj zakotwienia biernego:',
    a: [
      'A.     kabla ze splotów ',
      'B.     kabla specjalnego',
      'C.    kabla wielodrutowego',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 109\nProjektując niezarysowaną belkę sprężoną (kategorii 1a lub\n1b) można dopuścić niespełnienie warunku pojawienia się rys prostopadłych do\nelementu w stadium:',
    a: [
      'A.     montażu',
      'B.     eksploatacji',
      'C.    realizacji (sprężenia)',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 110\nPrzy produkcji potokowej formy:',
    a: [
      'A.     poruszają się wzdłuż linii kolejnych\nwyspecjalizowanych stanowisk, często łącznie z tunelem przyspieszonego dojrzewania\nbetonu',
      'B.     znajdują się na jednym stanowisku, na którym\nkolejno wykonuje się: naciąg, betonowanie, pielęgnację betonu, sprężenie i\nrozformowanie elementów',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 111\nSprężanie odcinkowe zbiorników walcowych wiąże się z\nkoniecznością konstruowania lokalnych pogrubień (pilastrów) celem umożliwienia\nkotwienia cięgien. Jest to przyczyną powstawania dodatkowych:',
    a: [
      'A.     momentów zginających w powłoce',
      'B.     sił równoleżnikowych w powłoce',
      'C.    sił południkowych w powłoce',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 112\nPrzy sprężaniu kablami ze splotów, w zakotwieniu czynnym\nstosuje się zakotwienia:',
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
    q: 'Pytanie 113\nZakotwienie półpętlicowe z opornikiem, to rodzaj zakotwienia\nbiernego:',
    a: [
      'A.     kabla wielodrutowego',
      'B.     kabla ze splotów',
      'C.    kabla specjalnego',
      'D.    kabla linowego',
      'E.    kabla prętowego',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 114\nW rurach o bardzo dużych średnicach stosuje się:',
    a: ['A.     kable pełnoobwodowe', 'B.     kable odcinkowe'],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 115\nObliczając strefę zakotwień w elemencie strunobetonowym,\nokreśla się (zgodnie z EC2) m.in. długość zwaną długością:',
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
    q: 'Pytanie 116\nW rurach o bardzo dużych średnicach stosuje się:',
    a: [
      'A.     kable umieszczone w grubości ściany rury',
      'B.     kable umieszczone na zewnętrznej powierzchni\nściany rury',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 117\nW rurach o bardzo dużych średnicach stosuje się:',
    a: [
      'A.     kable kotwione w specjalnych pilastrach',
      'B.     kable kotwione w specjalnych gniazdach',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 118\nPrzy produkcji rur sprężonych metodą nawijania szybkość\nruchu podłużnego naciągarki:',
    a: [
      'A.     nie ma wpływu na intensywność siły sprężającej\nprzekazywanej na jednostkę długości rury',
      'B.     decyduje o intensywności siły sprężającej\nprzekazywanej na jednostkę długości rury',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 119\nW przypadku konstrukcji kablobetonowych przy nowoczesnych\nzakotwieniach ze stalowymi odlewami bloków kotwiących, umieszczanymi w betonie\nelementu sięgającymi w głąb na kilkadziesiąt centymetrów wyposażonymi w\npośrednie kołnierze dociskowe konstruując zbrojenie strefy zakotwień:',
    a: [
      'A.     można wybiórczo stosować zalecenia producenta\nzakotwień',
      'B.     należy w pełni bazować na zaleceniach producenta\nzakotwień',
      'C.    przede wszystkim należy samodzielnie\nprzeprowadzić stosowne obliczenia, opcjonalnie stosując wybrane zalecenia\nproducenta zakotwień',
      'D.    należy traktować zalecenia producenta zakotwień\njako jedną z możliwych opcji',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 120\nZakotwienie pętlicowe z opornikiem, to rodzaj zakotwienia\nbiernego:',
    a: [
      'A.     kabla wielodrutowego',
      'B.     kabla ze splotów',
      'C.    kabla specjalnego',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 121\nDo strat siły sprężającej w konstrukcjach strunobetonowych\nzalicza się:',
    a: [
      'A.     straty od różnic temperatury',
      'B.     straty od częściowej relaksacji stali',
      'C.    straty od poślizgu w uchwytach technologicznych',
      'D.    straty od poślizgu w zakotwieniach',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 122\nSprężanie zbiorników walcowych wykonuje się:',
    a: ['A.     metodą nawijania kabli', 'B.     tylko za pomocą kabli'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 123\nFormy do produkcji elementów strunobetonowych metodą\nsztywnych form',
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
    q: 'Pytanie 124\nPrzy sprężaniu kablami prętowymi, w zakotwieniu czynnym\nstosuje się zakotwienia:',
    a: [
      'A.     z zastosowaniem stożkowych szczęk dwu- lub\ntrójdzielnych ',
      'B.     gwintowe (nagwintowane cięgno, nakrętka)',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 125\nSprężanie z wykorzystaniem betonu ekspansywnego stosuje się\nprzede wszystkim przy masywnych konstrukcjach, gdzie naprężenia w betonie:',
    a: ['A.     nie muszą być duże', 'B.     muszą być duże'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 126\nPrzy produkcji rur sprężonych metodą nawijania, hamowanie\ncięgna:',
    a: [
      'A.     wywołuje siłę naciągu',
      'B.     służy wyłącznie do zmiany kierunku prowadzenia\ndrutu bez wpływu na jego naprężenie',
      'C.    odbywa się poprzez swobodne rozwijanie kręgu\nstali bez użycia jakichkolwiek urządzeń dociskowych',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 127\nZastosowanie kablobetonu przy sprężaniu powłok zbiorników\nrozpoczęto od używania cięgien podzielonych na kilka odcinków na obwodzie, ze\nwzględu na:',
    a: [
      'A.     znaczne straty naciągu, powodowane tarciem',
      'B.     konieczność zapewnienia swobodnego przepływu\ncieczy wewnątrz kanałów kablowych przed ich zainiektowaniem',
      'C.    wymóg stosowania wyłącznie krótkich odcinków\nstali ze względu na jej niską wytrzymałość na rozciąganie przy dużych\ndługościach',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 128\n\nPrzedstawiony poniżej wzór pozwala obliczyć doraźne ugięcie\nod sprężania w przypadku dźwigara o: ',
    a: [
      'A.    stałym przekroju i parabolicznej trasie cięgien',
      'B.    zmiennym przekroju i prostoliniowej trasie\ncięgien ułożonych wzdłuż górnej półki',
      'C.    stałym przekroju i cięgnach ułożonych w osi\nobojętnej elementu na całej jego długości',
    ],
    c: [0],
    img: 'images/128.png',
  },
  {
    q: 'Pytanie 129\nJeśli w trakcie sprawdzania warunku zarysowania (rysy\nprostopadłe) w stadium montażu dźwigara nie spełniono warunku (rysy się\nnie pojawią), to w stadium eksploatacji warunek:',
    a: [
      'A.     na pewno się sprawdził (rysy się nie pojawią)',
      'B.     na pewno się nie sprawdził (rysy się pojawią)',
      'C.    może się sprawdzić lub nie',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 130\nWeryfikując stan graniczny nośności w stadium realizacji\n(sprężania dźwigara przyjmuje się odpowiednio powiększoną siłę sprężającą:',
    a: [
      'A.     po stratach technologicznych i doraźnych',
      'B.     początkową',
      'C.    po stratach całkowitych',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 131\nPrzy sprężaniu z wykorzystaniem wygięcia zbrojenia\nsztywnego, zbrojeniem sprężającym jest sztywny element:',
    a: [
      'A.     walcowany o stali o podwyższonej wytrzymałości',
      'B.     betonowy prefabrykowany o wysokiej klasie\nwytrzymałości',
      'C.    drewniany o przekroju prostokątnym wzmocniony\nżywicą',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 132\nW normalnej temperaturze (20oC) po ok. 4 dniach (100 godzin)\nzachodzi ____ strat od relaksacji oszacowanych dla ok 40 dni (1000 godzin)\n(Slajd 319)',
    a: ['A.     55 %', 'B.     65 %', 'C.    45 %', 'D.    50 %'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 133\nSprężanie zbiorników walcowych jest opłacalne już od\npojemności:',
    a: ['A.     500 m3', 'B.     400 m3', 'C.    600 m3'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 134\nDo strat siły sprężającej w konstrukcjach kablobetonowych\nzalicza się:',
    a: [
      'A.     straty od odkształceń sprężystych betonu',
      'B.     straty opóźnione od relaksacji stali odraz\nskurczu i pełzania betonu',
      'C.    straty od opóźnionych odkształceń styków',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 135\nSprawdzając warunek pojawienia się rys prostopadłych do os\nelementu, naprężenia w skrajnych włóknach górnych przekroju sprawdza się w\nstadium:',
    a: [
      'A.     stadium realizacji (sprężania)',
      'B.     w stadium montażu',
      'C.    w stadium eksploatacji',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 136\nZaleca się, aby w konstrukcjach strunobetonowych cięgna\nrozmieszczone były:',
    a: [
      'A.     w układzie ortogonalnym',
      'B.     tak, by środek ciężkości cięgien pokrywał się ze\nśrodkiem ciężkości półki dolnej (w miarę możliwości)',
      'C.    przy zachowaniu nieparzystej liczby kolumn ',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 137\nNawijarka karuzelowa to takie urządzenie, w którym:',
    a: [
      'A.     urządzenie napędowe i naciągowe umieszczone na\njednej platformie',
      'B.     obsługa sterująca nawijaniem przebywa na\nplatformie',
      'C.    platforma zawieszona jest na linach łączących je\nz górnym wózkiem tocznym',
    ],
    c: [0, 1, 2],
    img: '',
  },
  {
    q: 'Pytanie 138\nPrzy stałym przekroju elementu strunobetonowego formowanie\nagregatowe na torze jest:',
    a: ['A.     wskazane', 'B.     niewskazane'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 139\nStosując elektronagrzew przy sprężaniu termicznym rur\nuzyskuje się temperatury rzędu:',
    a: ['A.     250-300 oC', 'B.     200-300 oC', 'C.    300-350 oC'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 140\nPotrzebną liczbę cięgien sprężających można oszacować biorąc\npod uwagę m.in.:',
    a: [
      'A.     obliczeniową granicę plastyczności stali\nsprężającej',
      'B.     pole przekroju pojedynczego cięgna',
    ],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 141\nDługość, na której siła sprężająca zostaje w pełni\nprzekazana z cięgien na beton (w elementach strunobetonowych), to długość:',
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
    q: 'Pytanie 142\nUrządzenia do nawijania drutów lub splotów na powłokę\nzbiornika, to nawijarki:',
    a: ['A.     karuzelowe', 'B.     obiegowe'],
    c: [0, 1],
    img: '',
  },
  {
    q: 'Pytanie 143\nWyznaczając efektywny moduł sprężystości betonu Ec,eff\nnależy uwzględnić:',
    a: [
      'A.     współczynnik pełzania',
      'B.     wyłącznie doraźną wytrzymałość betonu na\nrozciąganie fctm',
      'C.    współczynnik Poissona dla stali sprężającej',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 144\nPrzy produkcji rur sprężonych metodą nawijania, ułożenie\nzewnętrznej, otulającej warstwy betonu wykonuje się:',
    a: [
      'A.     wyłącznie poprzez natrysk',
      'B.     wyłącznie za pomocą ślizgowej formy',
      'C.    poprzez natrysk lub za pomocą ślizgowej formy',
    ],
    c: [2],
    img: '',
  },
  {
    q: 'Pytanie 145\nNaciąg cięgien odginanych może odbywać się:',
    a: [
      'A.     niepełną siłą przy założeniu specjalnych\nuchwytów',
      'B.     wyłącznie po całkowitym stwardnieniu betonu we\nwszystkich przęsłach konstrukcji jednocześnie',
      'C.    bez użycia jakichkolwiek urządzeń pomocniczych,\nwykorzystując jedynie ciężar własny elementu',
    ],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 146\nStrata od odkształceń sprężystych betonu w kablobetonie jest\nprocentowo... niż w strunobetonie',
    a: ['A.     mniejsza', 'B.     większa', 'C.    taka sama'],
    c: [0],
    img: '',
  },
  {
    q: 'Pytanie 147\nObliczając strefę zakotwień w elemencie strunobetonowym,\nokreśla się (zgodnie z EC2) m in. długość zwaną długością',
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
    q: 'Pytanie 148\nPrzy sprężaniu prasami płaskimi i klinami',
    a: [
      'A.     obraz stanu granicznego złamania jest jasny i\nczytelny',
      'B.     elementom konstrukcji nie grozi wyboczenie od\nsprężenia',
      'C.    elementom konstrukcji grozi wyboczenie od\nsprężenia',
      'D.    niejasny jest obraz stanu granicznego złamania',
    ],
    c: [2, 3],
    img: '',
  },
  {
    q: 'Pytanie 149\nPrzedstawiony poniżej wzór pozwala obliczyć doraźne\nugięcie od sprężania w przypadku dźwigara o:',
    a: [
      'A. Zmiennym przekroju (dźwigar dwuspadowy) i\nprostoliniowej trasie cięgien',
      'B. Stałym przekroju i parabolicznej trasie cięgien',
      'C. Stałym przekroju i prostoliniowej trasie cięgien',
    ],
    c: [2],
    img: 'images/149.png',
  },
  {
    q: 'Pytanie 150\nWymagane pole przekroju półki dolnej belki strunobetonowej Apd\nmożna oszacować, uzależniając je od pola przekroju cięgien sprężających Ap.',
    a: [
      'A. Apd =< 50 Ap',
      'B. Apd =< 40 Ap',
      'C. Apd >= 40 Ap',
      'D. Apd =< 45 Ap',
      'E. Apd >= 45 Ap',
      'F. Apd =< 50 Ap',
    ],
    c: [5],
    img: '',
  },
  {
    q: 'Pytanie 151\nWymagane pole przekroju półki dolnej belki kablobetonowej Apd\nmożna oszacować, uzależniając je od pola przekroju cięgien sprężających Ap.',
    a: [
      'A. Apd =< 50 Ap',
      'B. Apd =< 40 Ap',
      'C. Apd >= 40 Ap',
      'D. Apd =< 45 Ap',
      'E. Apd >= 45 Ap',
      'F. Apd =< 50 Ap',
    ],
    c: [1],
    img: '',
  },
  {
    q: 'Pytanie 152\nW Elementach Kablobetonowych mogą wystepować zakotwienia',
    a: ['A. tylko czynne', 'B. tylko bierne', 'F. Apd =< 50 Ap'],
    c: [2],
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
    div.className = 'answer-card'; // Używamy Twoich stylów kafelków
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

// Logika przycisku wewnątrz okna powtórek
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
      // DOBRA ODPOWIEDŹ -> usuwamy z listy błędów
      wrongQuestionsPool.splice(currentModalIdx, 1);
      modalQuestionArea.innerHTML += `<div style="color: #27ae60; font-weight: bold; margin-top: 15px; text-align: center;">✔ Dobrze! Pytanie usunięte z listy błędów.</div>`;
      if (currentModalIdx >= wrongQuestionsPool.length) currentModalIdx = 0;
    } else {
      // BŁĄD -> pytanie zostaje, idziemy do następnego w kolejce
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

      // --- NOWA LOGIKA RESETU ---
      resetMainStats();
      // --------------------------

      alert(
        'Gratulacje! Wszystkie błędy poprawione. Statystyki główne zostały wyzerowane.',
      );
    } else {
      if (currentModalIdx >= wrongQuestionsPool.length) currentModalIdx = 0;
      loadModalQuestion();
    }
  }
};
