Lab 4 – HTTP/2 demo on nginx
============================

Sadržaj repozitorija
-------------------
- `conf/nginx.conf` – konfiguracija s HTTPS i opcionalnim `http2 on;`
- `html/lab4/` – demo stranica sa 6 CSS, 6 JS i 12 PNG resursa + error stranice
- (po potrebi dodaj) `http2.har`, `no_http2.har`, `http2.jpg`, `no_http2.jpg` nakon mjerenja

Kako pokrenuti
--------------
1) Otvori terminal u rootu (gdje je `nginx.exe`):  
   `cd <putanja_do_nginx_korijena>`  (npr. `cd C:\nginx-1.28.0`)
2) Provjeri konfiguraciju (relativne putanje na cert/key):  
   `.\nginx.exe -t -c conf/nginx.conf`
   - Ako javlja da traži `conf/conf/ssl.crt`, u `conf/nginx.conf` postavi cert/key na **apsolutne** putanje, npr.:  
     `ssl_certificate     <apsolutna_putanja_do_conf>/ssl.crt;`  
     `ssl_certificate_key <apsolutna_putanja_do_conf>/ssl.key;`
3) Pokreni ili reloadaj:  
   - ako nije pokrenut: `.\nginx.exe -c conf/nginx.conf`  
   - ako je pokrenut: `.\nginx.exe -s reload`

Testiranje HTTP/2 vs HTTP/1.1
-----------------------------
URL: `https://localhost/lab4/`

Postupak mjerenja:
1) Chrome DevTools → Network: isključi cache, uključi kolonu Protocol.
2) (Opcionalno radi vidljive razlike) Throttling npr. “Fast 3G”.
3) HTTP/2 run: u `conf/nginx.conf` drži `http2 on;`, zatim `nginx -t` i `nginx -s reload`. Reload stranice i provjeri da Protocol pokazuje `h2`.
4) HTTP/1.x run: zakomentiraj/ukloni `http2 on;`, `nginx -t`, `nginx -s reload`, reload stranice; Protocol treba biti `http/1.1`.
5) Exportaj HAR za oba runa (Network → Export HAR) i spremi kao `http2.har` i `no_http2.har`.
6) Napravi screenshot Network taba (s kolonom Protocol, header/footer vidljivi) i spremi kao `http2.jpg` i `no_http2.jpg`.

Bilješke o sadržaju
-------------------
- Stranica koristi višestruke male assete kako bi se vidio efekt multiplexinga u HTTP/2 (bez 6-per-host limita).  
- Ako želiš naglasiti razliku, koristi throttling i/ili veće/brojnije assete, ali zadrži umjereno veličine za HAR/screenshot.

Što predati
-----------
- Link na public repo s: `conf/nginx.conf`, `html/lab4/` sadržajem, `http2.har`, `no_http2.har`, `http2.jpg`, `no_http2.jpg`.
- Kratke napomene (u ovom README-u ili u commit poruci): je li sve uspješno, eventualne poteškoće.

