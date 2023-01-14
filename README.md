# TJ Start RK

## Instalace a běh
Bohužel se nám nepodařilo rozchodit Docker zde na frontendu, vždy jsme narazili na záhadný problém, kdy část aplikace fungovala a zbytek byl naprosto rozbitý. Po dvou a půl dnech řešení Dockeru jsme tak plně zprovoznili pouze API. Tuto FE část, tedy Svelte aplikaci, je tak nutno spustit manuálně pomocí `Node.js`. Neúspěšný pokus s Dockerem se stále v repozitáři nachází.

```
npm install
npm run dev
```
Aplikace se poté spustí na adrese http://localhost:5173.

***Pro správný chod aplikace je nutné spustit i část s API, repozitář zde:** https://github.com/Tomdooo/java-TJ_Start_RK.git*


## Používání
Při načtení webové stránky s aplikací je nutno se nejprve přihlásit. V API jsou předvytvořené 2 účty:

> username: *tomas*\
> password: *Password123@*\
> role: *USER*

> username: *vasek*\
> password: *Password123@*\
> role: *ADMIN*

### Kalendář
Na stránce s kalendářem se všem zobrazují všechny události, kterých jsou 3 typy:
- tréninky
- zápasy
- akce

Při kliknutí na danou událost se zobrazí její detail. Pokud má uživatel dostatečná oprávnění (Moderátor nebo Admin), může dále přejít na úpravu události.

Při kliknutí na číslo zobrazující aktuální den v měsíci se objeví okno, ve kterém mohou uživatelé přidávat nové události. Běžní uživatelé mohou přidávat pouze vlastní tréninky, moderátoři a administrátoři pak mohou přidávat i týmové tréninky, či zápasy a akce.

### Tabulky
Aplikace dále obsahuje nekolik cest, které slouží k zobrazení tabulek se záznamy z databáze, rozdělené podle databázových entit. Zde vždy mohou moderátoři a administrátoři přidávat záznamy, upravovat je či je odstraňovat.

### Uživatelské účty
Uživatelské účty může přidávat a upravovat vždy jen administrátor - jedná se o malé sdružení, tudíž toto prosté řešení má smysl. Běžní uživatelé své účty nijak nespravují, pouze využívají služby kalendáře.
