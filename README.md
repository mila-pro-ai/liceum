# Głos Liceum — strona gazety szkolnej

Lekka, statyczna strona WWW dla XXIV LO im. Jana Pawła II w Krakowie. Projekt ma jasne tło, granatowo-niebieskie elementy i żółte akcenty nawiązujące do identyfikacji szkoły.

## Co znajduje się w projekcie
- `index.html` — struktura strony głównej
- `styles.css` — wygląd i responsywność
- `script.js` — przykładowa zawartość i demonstracyjna sonda
- `assets/` — logo szkoły (wykadrowane z przesłanego plakatu)
- `data/articles.json` — wpisy wyświetlane automatycznie na stronie głównej
- `.pages.yml` — konfiguracja panelu redakcyjnego Pages CMS

## Ważne: jak uczniowie będą dodawać materiały
GitHub Pages publikuje statyczną stronę. Sam GitHub Pages nie daje formularza redakcyjnego ani bazy danych. Dlatego projekt przygotowano do połączenia z **Pages CMS** (pagescms.org). Panel CMS pozwala uprawnionym redaktorom dodawać i edytować pliki Markdown oraz zdjęcia w repozytorium GitHub bez ręcznego edytowania HTML.

## Publikacja przez GitHub Pages
1. Utwórz nowe publiczne repozytorium na GitHub, np. `glos-liceum`.
2. Wgraj całą zawartość tego folderu do głównego katalogu repozytorium (wraz z ukrytym plikiem `.pages.yml`).
3. Otwórz repozytorium: **Settings → Pages**.
4. W sekcji Build and deployment wybierz **Deploy from a branch**.
5. Wybierz branch `main` i folder `/ (root)`, zapisz.
6. Po chwili GitHub pokaże adres strony w ustawieniach Pages.

## Panel redakcyjny Pages CMS
1. Otwórz https://pagescms.org/ i zaloguj się przez GitHub.
2. Przyznaj dostęp tylko do repozytorium gazety.
3. Otwórz repozytorium w Pages CMS. Konfiguracja formularzy znajduje się w `.pages.yml`.
4. Dodaj artykuł w sekcji **Artykuły**; dodaj zdjęcie, tytuł, rubrykę, autora, zajawkę i treść.
5. Zapisz zmiany. CMS zapisze plik w repozytorium; GitHub Pages automatycznie przebuduje i opublikuje stronę.

## Jak dodać redaktorów
W GitHub → Settings → Collaborators and teams dodaj nauczycieli/redaktorów. Daj uczniom tylko taki poziom dostępu, jaki zatwierdzi administrator szkoły. Nie udostępniaj wspólnego hasła. Zanim dodasz uczniów, ustal szkolne zasady moderacji, zgód na publikację zdjęć/wideo i ochrony danych osobowych.

## Obecne ograniczenia demonstracyjnej wersji
- Artykuły są przechowywane w `data/articles.json`. Strona główna pobiera ten plik automatycznie, a Pages CMS udostępnia redaktorom formularz do edycji listy artykułów. Wpisy oznaczone `featured: true` trafiają do wyróżnionego bloku.
- Sonda jest tylko wizualnym przykładem: głos zapisuje się jedynie w stanie bieżącej strony i nie jest wspólnym głosowaniem dla wszystkich. Do prawdziwego głosowania należy podłączyć osobny formularz/usługę (np. Microsoft Forms lub Google Forms).
- Galeria i wideo to miejsca na przyszłe materiały; przed publikacją trzeba dodać właściwe zdjęcia i osadzone filmy.
- Formularz zgłoszeniowy nie jest jeszcze podłączony. Na start uczniowie mogą przesyłać materiały przez szkolny formularz Google/Microsoft Forms, a redakcja publikuje zaakceptowane teksty przez CMS.

## Bezpieczeństwo i prawa do publikacji
Nie publikuj danych wrażliwych, prywatnych danych kontaktowych ani zdjęć/nagrań rozpoznawalnych uczniów bez wymaganych zgód. Redakcja powinna zatwierdzać każdy materiał przed publikacją.
