# Deltakerliste
Nettside for å generere deltakerlister basert på kalenderhendelser fra Microsoft Outlook og eksport til besøksregistreringsløsningen onVisit i henhold til mal. .


## 🧭 Innholdsfortegnelse

- [Om prosjektet](#om-prosjektet)  
- [Demo / skjermbilder](#demo--skjermbilder)  
- [Teknologi](#teknologi)  
- [Kom i gang](#kom-i-gang)  
  - [Forutsetninger](#forutsetninger)  
  - [Installasjon](#installasjon)  
- [Bruk](#bruk)  
- [Bidra](#bidra)  
- [Licence](#license)  
- [Kontakt](#kontakt)  
- [Bidragsytere](#bidragsytere)  

---

## Om prosjektet

`Deltakerliste` er utviklet for å **vise og eksportere deltakerlister** til arrangementer i fylkeskommunen, for å enkelt skrive ut gjestebevis ved større arrangementer. 
Tanken er å tilby en enkelt og effektivt verktøy, både for ansatte som har ansvar for å skrive ut gjestebevis og arrangører som skal melde i fra hvem som skal besøke fylkeskommunen på aktuelt tidspunkt.

### Bakgrunn ###
Bakgrunnen for løsningen var behovet om forenkling av deltakerregistrering for navnelapper, på store møter. Som ble inmeldt av en ansatt via Idéportalen til fylkeskommunen, idé 35.

---

## Bruk
Brukergrensesnittet inneholder følgende funksjoner:
- Autentisering
- Kalenderintegrasjon
- Deltakerhåndtering
- Eksport og utskrift
- Responsivt design
- Brukerinteraksjon
 
## Demo / skjermbilder
![content](https://github.com/user-attachments/assets/18046bc4-837d-4bc0-8341-61fa8758e77b)

---

## Teknologi

- Frontend: HTML, JavaScript og CSS
- Backend: Pålogging via Microsoft 365 med Enterprise app og tilgang til brukerens kalender via Graph API

Løsningen er i stor grad utviklet ved bruk av Kunstig intelligens igjennom Github Copilot i Visual Studio code.
---

## Kom i gang

### 🚧 Forutsetninger

#### Git
Du må ha Git installert på systemet ditt for å kunne klone repositoriet.
Installasjon: Last ned og installer Git.

#### Node.js og npm
Verktøyet krever Node.js og npm (Node Package Manager) for å installere og kjøre avhengigheter.
Installasjon: Last ned og installer Node.js og npm.

#### Nødvendige avhengigheter
Etter å ha klonet repositoriet, må du installere alle nødvendige avhengigheter.

Kjør npm install i prosjektets rotkatalog for å installere alle avhengigheter


### 💾 Installasjon

git clone https://github.com/vestfoldfylke/deltakerliste.git
cd deltakerliste
npm install
npm start

### ⏺️ Konfigurasjon
Opprett en enterprise app via Microsoft Azure Portal
Gi tilgang til å lese brukerprofil, kalender og opprettholde tilgangen til dataene
Oppdater koden med appid og tenantid


