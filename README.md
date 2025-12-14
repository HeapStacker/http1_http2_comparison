Lab 4 – HTTP/2 demo on nginx
=============================

Sadržaj
--------

- `conf/nginx.conf`
- `html/lab4/` (demo stranica s assetima)
- `http2.har`, `no_http2.har`
- `http2.jpg`, `no_http2.jpg`

SSL cert (self-signed)
----------------------
- Primjer generiranja (u rootu repo-a):  
  `openssl req -x509 -nodes -newkey rsa:2048 -keyout conf/ssl.key -out conf/ssl.crt -days 365 -subj "/CN=localhost"`
- Putanje u `nginx.conf` za `ssl_certificate` i `ssl_certificate_key` mogu biti relativne na lokaciju samog `nginx.conf` (npr. `ssl.crt`, `ssl.key`), nisu relativne na `nginx.exe`.

Kako pokrenuti
--------------

1) U rootu (gdje je `nginx.exe`): `.\nginx.exe -t -c conf/nginx.conf`
   - Ako traži `conf/conf/ssl.crt`, stavi apsolutne putanje na cert/key u `conf/nginx.conf`.
2) Pokreni ili reloadaj:
   - `.\nginx.exe -c conf/nginx.conf` (ako nije pokrenut)
   - `.\nginx.exe -s reload` (ako je već pokrenut)

Testiranje HTTP/2 vs HTTP/1.1
-----------------------------

URL: `https://localhost/lab4/`

1) Chrome DevTools → Network: Disable cache, uključi kolonu Protocol. Napomena: razlika je jasnija uz throttling (npr. “Fast 3G”).
2) HTTP/2 run: `http2 on;` u `conf/nginx.conf`, `nginx -t`, `nginx -s reload`, reload stranice → Protocol `h2`.
3) HTTP/1.x run: ukloni/zakomentiraj `http2 on;`, `nginx -t`, `nginx -s reload`, reload stranice → Protocol `http/1.1`.
4) Export HAR za oba runa (Network → Export HAR) → `http2.har`, `no_http2.har`.
5) Screenshot Network taba (vidljivi header/lista/footer) → `http2.jpg`, `no_http2.jpg`.

Bilješke o sadržaju
---------------------

- Stranica koristi višestruke male assete kako bi se vidio efekt multiplexinga u HTTP/2 (bez 6-per-host limita).
- Ako želiš naglasiti razliku, koristi throttling i/ili veće/brojnije assete, ali zadrži umjereno veličine za HAR/screenshot.
