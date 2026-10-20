# Data Card: Proiect U20 - Dezvoltare Teritorială (Ploiești)

## Sursa 1: Suprafață Construită (GHSL - Global Human Settlement Layer)
* **Proveniență:** JRC / GHSL P2023A (extras via Google Earth Engine prin script custom).
* **Perioadă:** 1975 – 2030 (extras pentru anii 2005, 2010, 2015, 2020, 2025).
* **Rezoluție Spațială:** 100 metri (celulă de grid). Poligon de extragere definit prin limitele administrativ-teritoriale (LAU).
* **Rezoluție Temporală:** Interpolare în tranșe de 5 ani.
* **Unități:** Kilometri pătrați ($km^2$), obținuți prin însumarea pixelilor de „built_surface” (`ee.Reducer.sum()`) și împărțirea la $1e6$.
* **Goluri / Lipsuri:** Datele reprezintă estimări globale; limitele pot depăși strict granița administrativă dacă poligonul de decupaj (Bounding Box) capturează localități limitrofe.
* **Licență:** Acces deschis.

## Sursa 2: Date Demografice (Eurostat)
* **Proveniență:** Recensăminte oficiale.
* **Perioadă:** 2010 - 2025 
* **Rezoluție Spațială:** Nivel de Unitate Administrativ-Teritorială (UAT - Municipiul Ploiești).
* **Rezoluție Temporală:** Anual / La intervale de recensământ (ex: 2010, 2020).
* **Unități:** Număr de locuitori (Populație).
* **Goluri / Lipsuri:** În anul 2005, recensamantul lipseste. Datele cenzitare nu se aliniază perfect cu gridul de 5 ani al GHSL fără interpolare.
* **Licență:** Acces deschis.
