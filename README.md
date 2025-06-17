# Deltakerliste

Nettside for å generere deltakerlister basert på kalenderhendelser fra Microsoft Outlook for eksport til besøksregistreringsløsningen onVisit i henhold til mal. 
---

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


---

## Teknologi

- Frontend: HTML, JavaScript og CSS
- Backend: Pålogging via Microsoft 365 med Enterprise app og tilgang til brukerens kalender via Graph API

---

## Kom i gang

### 🚧 Forutsetninger

- Microsoft 365

### 💾 Installasjon

git clone https://github.com/vestfoldfylke/deltakerliste.git
cd deltakerliste
npm install
npm start

### ⏺️ Konfigurasjojn
Opprett en enterprise app
Gi tilgang til å lese 
