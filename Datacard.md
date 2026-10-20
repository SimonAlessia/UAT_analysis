# Data Card: Proiect U20 - Dezvoltare Teritorială (Ploiești)

## Sursa 1: Suprafață Construită (GHSL - Global Human Settlement Layer)
* **Proveniență:** JRC / GHSL P2023A (extras via Google Earth Engine prin script custom).
* **Perioadă:** 1975 – 2030 (extrase pentru intervalul de analiză: 2010, 2015, 2020, 2025).
* **Rezoluție Spațială:** 100 metri (celulă de grid). Poligon definit prin coordonate geografice aproximative pentru UAT Ploiești (migrare la poligoane oficiale LAU în CP2).
* **Rezoluție Temporală:** Tranșe de 5 ani (date observate și proiectate).
* **Unități:** Kilometri pătrați ($km^2$), calculați prin însumarea pixelilor `built_surface` (`ee.Reducer.sum()`) și împărțirea la $10^6$.
* **Goluri / Lipsuri:** Poligonul manual poate genera un ușor leakage spațial (capturarea de zone periurbane limitrofe).
* **Licență:** Acces deschis (Open Data Copernicus / European Commission).

## Sursa 2: Date Demografice (Eurostat)
* **Proveniență:** Eurostat / Statistici oficiale de populație la nivel local.
* **Perioadă:** 2010 – 2025.
* **Rezoluție Spațială:** Nivel UAT (Municipiul Ploiești).
* **Rezoluție Temporală:** Serii anuale (selectate valorile corespunzătoare pasului de 5 ani: 2010, 2015, 2020, 2025).
* **Unități:** Număr de locuitori (persoane cu reședința / domiciliul înregistrat).
* **Goluri / Lipsuri:** Lipsă date detaliate UAT înainte de 2010; lipsă date INS TEMPO complete pentru anii vechi, ceea ce a impus restrângerea ferestrei temporale la 2010–2025.
* **Licență:** Acces deschis (Eurostat Open Data).
