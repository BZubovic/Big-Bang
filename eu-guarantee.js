/* Big Bang — EU guarantee assets (Implementing Regulation (EU) 2025/1960).
   Two official EU artworks, used verbatim — never recoloured, cropped, re-typeset
   or resized in part. Only the GARAN label's three editable fields are filled in:
   duration in years, producer brand/trademark, model identifier.

       window.BBEU.openNotice()                 harmonised legal-guarantee notice
       window.BBEU.openLabel(garan)             full EU GARAN label + producer statement
       window.BBEU.nestedURI(years)             nested label as an <img> src
       window.BBEU.alt(years)                   accessible text for the nested label
       window.BBEU.qualifies(product)           true when a GARAN guarantee applies

   A "garan" object is { years, brand, model, statement }. */
(function () {
  if (window.BBEU) return;

  var NOTICE_SRC = 'images/eu/legal-guarantee-notice-hr.svg';
  var LABEL_SRC = 'images/eu/garan-label-colour.svg';
  var NOTICE_URL = 'https://europa.eu/youreurope/jamstva_hr';
  var LABEL_URL = 'https://europa.eu/youreurope/commercial-guarantee-durability/index.htm';

  var NESTED = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 368.5 56.69\" xmlns:c2pa=\"http://c2pa.org/manifest\"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTpmYzI3MTZiZi1lZmFmLTQyNmYtODQ3Yi01MDZkMWZiMDAxYzQAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaNKdM9e4Y5jr7lkeVa/UXrcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDo2NjQ3ODE4NS0wZTc0LTRmYTktYTYzNi05M2Q3MjM4YjQwOTBscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoZzK0sJSSBCuFFuOGbLU8/AAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg/EG4WH1PcjwuJSUaH+hCPnUgOkyU8dZ443V34OnqOFOkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaFdhF6qmnxuy2jIlUINi5lwAAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCBUekNP7jU0kJi5lXQZE/pGE8kcvWNBR35lYP3GrKqQXWRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBiWZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmZjMjcxNmJmLWVmYWYtNDI2Zi04NDdiLTUwNmQxZmIwMDFjNC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOjBjNTBkYzZmLTU2ZmQtNGM1Ny04YzliLTczYTkxYjA5Yjg1N3JjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCD8QbhYfU9yPC4lJRof6EI+dSA6TJTx1njjdXfg6eo4U6JjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggGjyIv7sXX+wCBaXN5POnEks067ptjyoqsx6Rgrygzd2iY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFgg10C1HKliGcTM/ypayl398AKAFWxvKPuR0pSZrEOH3x90Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQIYYkcSEnH/f0B+B5BDIcB0YrjNfWbUY6FNBjt7FCeHAmLYQpOBCyQMyPrzjz/r8HolvNpIIIge+p5BVR5LJ3oA=</c2pa:manifest></metadata>\n  <defs>\n    \n  </defs>\n  <g id=\"Layer_3\" data-name=\"Layer 3\">\n    <rect width=\"368.5\" height=\"56.69\" fill=\"#fff\"></rect>\n  </g>\n  <g id=\"Layer_1\" data-name=\"Layer 1\">\n    <line x1=\"93.73\" y1=\"10.49\" x2=\"93.73\" y2=\"46.08\" stroke=\"#231f20\" stroke-miterlimit=\"10\" stroke-width=\".5px\" fill=\"none\"></line>\n    <path d=\"M321.38-1.51v44.63c0,1.97,1.04,3.71,2.56,4.29l15.59,5.98c.76.29,1.58.3,2.35.02l15.55-5.73c1.54-.57,2.6-2.32,2.6-4.3V-1.51h-38.65Z\" fill=\"#034ea2\"></path>\n    <g>\n      <polygon points=\"339.23 16.09 340.71 15.01 342.19 16.09 341.62 14.34 343.13 13.26 341.27 13.26 340.71 11.49 340.14 13.26 338.29 13.26 339.79 14.34 339.23 16.09\" fill=\"#fff200\"></polygon>\n      <polygon points=\"331.56 18.15 333.04 17.07 334.52 18.15 333.96 16.4 335.46 15.32 333.61 15.32 333.04 13.55 332.47 15.32 330.62 15.32 332.12 16.4 331.56 18.15\" fill=\"#fff200\"></polygon>\n      <polygon points=\"327.43 19.17 326.87 20.94 325.01 20.94 326.52 22.02 325.95 23.77 327.43 22.69 328.92 23.77 328.35 22.02 329.86 20.94 328 20.94 327.43 19.17\" fill=\"#fff200\"></polygon>\n      <polygon points=\"325.38 30.34 326.86 31.42 326.3 29.67 327.8 28.59 325.95 28.59 325.38 26.82 324.81 28.6 322.96 28.59 324.46 29.67 323.9 31.42 325.38 30.34\" fill=\"#fff200\"></polygon>\n      <polygon points=\"328 36.27 327.43 34.5 326.87 36.27 325.01 36.27 326.52 37.35 325.95 39.1 327.43 38.02 328.92 39.1 328.35 37.35 329.86 36.27 328 36.27\" fill=\"#fff200\"></polygon>\n      <polygon points=\"333.62 41.89 333.05 40.12 332.49 41.89 330.63 41.89 332.14 42.97 331.57 44.72 333.05 43.64 334.53 44.72 333.97 42.97 335.47 41.89 333.62 41.89\" fill=\"#fff200\"></polygon>\n      <polygon points=\"341.27 43.92 340.71 42.15 340.14 43.93 338.29 43.92 339.79 45 339.23 46.75 340.71 45.67 342.19 46.75 341.62 45 343.13 43.92 341.27 43.92\" fill=\"#fff200\"></polygon>\n      <polygon points=\"348.93 41.89 348.36 40.12 347.79 41.89 345.94 41.89 347.44 42.97 346.88 44.72 348.36 43.64 349.84 44.72 349.28 42.97 350.78 41.89 348.93 41.89\" fill=\"#fff200\"></polygon>\n      <polygon points=\"354.55 36.27 353.98 34.5 353.41 36.27 351.56 36.27 353.06 37.35 352.5 39.1 353.98 38.02 355.46 39.1 354.9 37.35 356.4 36.27 354.55 36.27\" fill=\"#fff200\"></polygon>\n      <polygon points=\"358.44 28.57 356.58 28.57 356.01 26.8 355.45 28.57 353.59 28.57 355.1 29.65 354.54 31.4 356.01 30.32 357.5 31.4 356.93 29.65 358.44 28.57\" fill=\"#fff200\"></polygon>\n      <polygon points=\"352.5 23.74 353.98 22.66 355.46 23.74 354.9 22 356.4 20.92 354.55 20.92 353.98 19.15 353.41 20.92 351.56 20.92 353.06 22 352.5 23.74\" fill=\"#fff200\"></polygon>\n      <polygon points=\"348.38 13.55 347.82 15.32 345.96 15.32 347.46 16.4 346.9 18.15 348.39 17.07 349.86 18.15 349.3 16.4 350.81 15.32 348.95 15.32 348.38 13.55\" fill=\"#fff200\"></polygon>\n    </g>\n    <g>\n      <path d=\"M127.64,23.08c-.28-.92-.67-1.75-1.17-2.48-.49-.73-1.09-1.36-1.77-1.88s-1.47-.92-2.36-1.18-1.85-.4-2.9-.4c-1.88,0-3.55.47-5.01,1.41-1.47.94-2.62,2.33-3.45,4.15-.83,1.82-1.25,4.04-1.25,6.66s.42,4.87,1.24,6.7c.83,1.83,1.98,3.22,3.46,4.17s3.19,1.42,5.15,1.42c1.77,0,3.31-.34,4.61-1.02,1.3-.68,2.3-1.65,3.01-2.91s1.06-2.73,1.06-4.42l1.43.22h-9.48v-4.94h14.16v4.19c0,2.99-.64,5.57-1.91,7.75-1.27,2.18-3.02,3.86-5.25,5.04-2.23,1.18-4.78,1.76-7.67,1.76-3.22,0-6.04-.72-8.46-2.17-2.43-1.45-4.32-3.51-5.68-6.19-1.36-2.68-2.04-5.85-2.04-9.54,0-2.82.4-5.33,1.2-7.55.8-2.22,1.92-4.1,3.37-5.65,1.44-1.55,3.14-2.73,5.08-3.55,1.94-.81,4.06-1.22,6.34-1.22,1.93,0,3.73.28,5.4.84s3.16,1.36,4.46,2.4,2.37,2.26,3.21,3.68,1.39,2.99,1.65,4.7h-6.44Z\" fill=\"#231f20\"></path>\n      <path d=\"M144.37,46.84h-6.75l12.29-34.91h7.81l12.31,34.91h-6.75l-9.32-27.75h-.27l-9.31,27.75ZM144.59,33.16h18.41v5.08h-18.41v-5.08Z\" fill=\"#231f20\"></path>\n      <path d=\"M175.1,46.84V11.93h13.09c2.68,0,4.93.47,6.76,1.4,1.82.93,3.2,2.24,4.14,3.91.94,1.68,1.41,3.63,1.41,5.86s-.47,4.18-1.42,5.82c-.95,1.64-2.34,2.91-4.18,3.8-1.84.89-4.1,1.34-6.78,1.34h-9.32v-5.25h8.47c1.57,0,2.85-.22,3.85-.66s1.74-1.08,2.22-1.93c.48-.85.72-1.89.72-3.13s-.24-2.3-.73-3.18c-.49-.88-1.23-1.55-2.23-2.01s-2.29-.69-3.87-.69h-5.8v29.62h-6.32ZM193.14,31.03l8.64,15.82h-7.06l-8.49-15.82h6.9Z\" fill=\"#231f20\"></path>\n      <path d=\"M211.29,46.84h-6.75l12.29-34.91h7.81l12.31,34.91h-6.75l-9.32-27.75h-.27l-9.31,27.75ZM211.51,33.16h18.41v5.08h-18.41v-5.08Z\" fill=\"#231f20\"></path>\n      <path d=\"M270.72,11.93v34.91h-5.62l-16.45-23.78h-.29v23.78h-6.32V11.93h5.66l16.43,23.8h.31V11.93h6.29Z\" fill=\"#231f20\"></path>\n    </g>\n    <path d=\"M336.7,36.73c-2.6-1.83-4.26-4.71-4.55-7.88l-.45-4.88,4.26-1.96c1.29-.59,2.67-.99,4.09-1.07,1.81-.1,3.57.23,5.2.98l4.45,2.05-.18,2-1.14-.1.11-1.15-3.58-1.69c-.11-.05-.18-.08-.27-.12-1.43-.63-2.95-.91-4.52-.82-1.27.07-2.5.43-3.66.96l-3.54,1.63.37,4.08c.26,2.84,1.74,5.4,4.07,7.05l3.38,2.39,3.31-2.39c1.98-1.4,3.36-3.47,3.88-5.84l.14-.59h-7.36v-1.14h8.61l-.06.62c-.29,3.16-1.95,6.04-4.55,7.88l-4,2.83-4-2.83Z\" fill=\"#fff\"></path>\n    <g>\n      <circle cx=\"286.5\" cy=\"37.57\" r=\"9.18\"></circle>\n      <path d=\"M291.18,43.11s-1.05,1.2-1.41,1.58c-.25.26-.57.73-.96.93-1.02.52-1.22.5-2.24.24-.43-.11-.83-.43-1.16-.73l-6.81-6.08c-.82-.74-.27-2.1.83-2.06l4.27.16c.52.02,1.02.23,1.4.58l6.09,5.36Z\" fill=\"#fff\" stroke=\"#231f20\" stroke-miterlimit=\"10\" stroke-width=\".5px\"></path>\n      <path d=\"M283.68,43.59l2.04,1.82c1.19.84,2.62.87,3.66-.28l12.06-13.48c.69-.78.19-2.02-.88-2.14l-2.02-.24c-.92-.11-1.83.22-2.44.88l-12.42,13.45Z\" fill=\"#fff\" stroke=\"#231f20\" stroke-miterlimit=\"10\" stroke-width=\".5px\"></path>\n    </g>\n    <text id=\"eu-years\" transform=\"translate(10.39 46.65)\" font-family=\"Inter-ExtraBold, Inter\" font-size=\"41.56px\" font-weight=\"700\" letter-spacing=\"-.02em\" fill=\"#231f20\" style=\"font-variation-settings:'wght' 800, 'slnt' 0\"><tspan x=\"0\" y=\"0\">XX</tspan></text>\n    <g>\n      <rect x=\"70.87\" y=\"34.81\" width=\"13.7\" height=\"11.78\" rx=\"1.66\" ry=\"1.66\" stroke=\"#231f20\" stroke-miterlimit=\"10\" stroke-width=\".5px\" fill=\"none\"></rect>\n      <rect x=\"74.42\" y=\"33.22\" width=\"1.62\" height=\"3.22\" rx=\".54\" ry=\".54\" fill=\"#fff\" stroke=\"#231f20\" stroke-miterlimit=\"10\" stroke-width=\".5px\"></rect>\n      <rect x=\"79.38\" y=\"33.22\" width=\"1.62\" height=\"3.22\" rx=\".54\" ry=\".54\" fill=\"#fff\" stroke=\"#231f20\" stroke-miterlimit=\"10\" stroke-width=\".5px\"></rect>\n      <line x1=\"70.87\" y1=\"38.02\" x2=\"84.56\" y2=\"38.02\" stroke=\"#231f20\" stroke-miterlimit=\"10\" stroke-width=\".5px\" fill=\"none\"></line>\n      <g>\n        <path d=\"M73.71,44.59c-.33,0-.62-.06-.88-.17-.25-.11-.45-.27-.6-.47-.15-.2-.22-.43-.22-.69h1.05c0,.09.03.18.09.25.06.07.13.13.23.17.1.04.21.06.33.06s.23-.02.33-.07.17-.11.22-.18c.05-.08.08-.17.08-.27,0-.1-.03-.19-.09-.27-.06-.08-.14-.14-.25-.18s-.24-.07-.38-.07h-.42v-.74h.42c.13,0,.24-.02.34-.06s.17-.1.23-.18.08-.17.08-.27c0-.1-.02-.18-.07-.26s-.11-.13-.2-.17c-.08-.04-.18-.06-.29-.06-.12,0-.22.02-.31.06-.09.04-.17.1-.22.17-.06.07-.08.16-.09.26h-1c0-.26.07-.49.22-.68.14-.2.33-.35.58-.46.24-.11.52-.17.83-.17s.58.05.82.16.42.26.55.44c.13.19.2.4.2.63,0,.24-.08.45-.24.6-.16.16-.37.26-.62.29v.03c.34.04.59.15.76.33s.26.4.25.67c0,.25-.07.47-.22.67-.15.19-.35.35-.61.46-.26.11-.56.17-.9.17Z\" fill=\"#231f20\"></path>\n        <path d=\"M77.77,44.59c-.24,0-.46-.04-.68-.12-.22-.08-.41-.2-.58-.37s-.3-.39-.4-.66c-.1-.27-.15-.61-.14-1,0-.36.04-.68.13-.96.09-.28.21-.53.37-.72.16-.2.35-.35.58-.46.22-.1.47-.16.75-.16.3,0,.57.06.8.18s.42.28.56.47c.14.2.22.42.25.66h-1.03c-.03-.14-.1-.24-.2-.31-.1-.07-.23-.11-.37-.11-.27,0-.46.11-.59.34-.13.23-.2.54-.2.92h.03c.06-.13.14-.24.26-.33s.24-.16.38-.21c.14-.05.3-.08.46-.08.26,0,.49.06.69.18.2.12.35.28.47.49s.17.45.17.71c0,.3-.07.57-.21.8s-.34.41-.59.54c-.25.13-.54.19-.87.19ZM77.76,43.78c.13,0,.24-.03.34-.09s.18-.14.24-.25c.06-.1.09-.22.08-.35,0-.13-.03-.25-.08-.35s-.14-.18-.24-.25-.22-.09-.35-.09c-.09,0-.18.02-.26.05-.08.03-.15.08-.21.15s-.11.14-.14.22c-.03.08-.05.17-.05.27,0,.13.03.24.09.35.06.1.14.19.24.25.1.06.21.09.34.09Z\" fill=\"#231f20\"></path>\n        <path d=\"M81.7,44.59c-.32,0-.6-.06-.84-.17-.25-.11-.44-.27-.58-.47-.14-.2-.22-.43-.22-.69h1.02c0,.16.07.29.19.38s.27.14.43.14c.13,0,.25-.03.35-.09.1-.06.18-.14.24-.24s.09-.23.08-.36c0-.14-.03-.26-.09-.37-.06-.1-.14-.19-.24-.24-.1-.06-.22-.09-.35-.09-.13,0-.24.03-.36.08-.11.06-.2.13-.25.23l-.92-.17.19-2.34h2.78v.84h-1.92l-.1,1.02h.03c.07-.12.19-.22.35-.3s.34-.12.55-.12c.26,0,.49.06.69.18.2.12.36.29.48.5s.18.46.18.73c0,.3-.07.56-.21.79-.14.23-.34.41-.59.54s-.55.2-.88.2Z\" fill=\"#231f20\"></path>\n      </g>\n    </g>\n  </g>\n</svg>";

  var T = { blue: '#0050A0', navy: '#002D73', text: '#101117', sub: '#545F71', border: '#E3E4E9' };

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function fmtYears(y) {
    if (y == null || y === '') return 'XX';
    return String(y).replace('.', ',');
  }
  /* replaces the contents of one editable <text> field, leaving the artwork untouched */
  function setField(svg, id, value) {
    var re = new RegExp('(<text id="' + id + '"[^>]*>)[\\s\\S]*?(</text>)');
    return svg.replace(re, function (m, open, close) {
      return open + '<tspan x="0" y="0">' + esc(value) + '</tspan>' + close;
    });
  }
  function uri(svg) { return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg); }

  var nestedCache = {};
  function nestedURI(years) {
    var k = fmtYears(years);
    if (!nestedCache[k]) nestedCache[k] = uri(setField(NESTED, 'eu-years', k));
    return nestedCache[k];
  }

  var labelRaw = null, labelPending = null;
  function loadLabel() {
    if (labelRaw) return Promise.resolve(labelRaw);
    if (!labelPending) {
      labelPending = fetch(LABEL_SRC).then(function (r) { return r.text(); }).then(function (t) {
        labelRaw = t.replace(/^<\?xml[^>]*\?>/, '').trim();
        return labelRaw;
      });
    }
    return labelPending;
  }
  function labelURI(g) {
    return loadLabel().then(function (raw) {
      var s = setField(raw, 'eu-years', fmtYears(g && g.years));
      if (g && g.brand) s = setField(s, 'eu-brand', g.brand);
      if (g && g.model) s = setField(s, 'eu-model', g.model);
      return uri(s);
    });
  }

  /* 1 godina / 2–4 godine / 5+ godina; decimals take "godine" */
  function yearsLabel(y) {
    var n = parseFloat(String(y).replace(',', '.'));
    var word = 'godina';
    if (!isFinite(n)) word = 'godine';
    else if (n % 1 !== 0) word = 'godine';
    else if (n === 1) word = 'godina';
    else if (n >= 2 && n <= 4) word = 'godine';
    return fmtYears(y) + ' ' + word;
  }
  function alt(years) {
    return 'EU GARAN — proizvođačevo komercijalno jamstvo trajnosti ' + yearsLabel(years) + '. Otvori oznaku.';
  }
  function qualifies(p) {
    var g = p && (p.garan || p);
    return !!(g && g.years && parseFloat(String(g.years).replace(',', '.')) > 2);
  }

  /* ---------- overlay ---------- */
  function host() { return document.querySelector('[data-bb-frame="mobile"]') || document.body; }
  function isMobileHost(h) { return h !== document.body; }

  function keyframes() {
    if (document.getElementById('bbeu-kf')) return;
    var s = document.createElement('style');
    s.id = 'bbeu-kf';
    s.textContent = '@keyframes bbeu-fade{from{opacity:0}to{opacity:1}}' +
      '@keyframes bbeu-pop{from{opacity:0;transform:translateY(10px) scale(.98)}to{opacity:1;transform:none}}' +
      '.bbeu-sb::-webkit-scrollbar{width:6px}.bbeu-sb::-webkit-scrollbar-thumb{background:#C7C7CD;border-radius:3px}';
    document.head.appendChild(s);
  }

  var open = null;
  function close() {
    if (!open) return;
    if (open.parentNode) open.parentNode.removeChild(open);
    open = null;
    document.removeEventListener('keydown', onKey);
  }
  function onKey(e) { if (e.key === 'Escape') close(); }

  function shell(h, width) {
    keyframes();
    close();
    var mob = isMobileHost(h);
    var wrap = document.createElement('div');
    wrap.setAttribute('style', 'position:absolute;inset:0;z-index:4000;display:flex;align-items:center;' +
      'justify-content:center;padding:' + (mob ? '16px' : '32px') + ';background:rgba(16,17,23,0.55);' +
      'animation:bbeu-fade .18s ease both;font-family:Inter,sans-serif');
    if (h === document.body) wrap.style.position = 'fixed';
    wrap.addEventListener('click', function (e) { if (e.target === wrap) close(); });

    var card = document.createElement('div');
    card.setAttribute('role', 'dialog');
    card.setAttribute('aria-modal', 'true');
    card.setAttribute('style', 'background:#fff;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.20);' +
      'max-width:' + (mob ? '100%' : width + 'px') + ';width:100%;max-height:100%;overflow:auto;' +
      'position:relative;animation:bbeu-pop .2s cubic-bezier(0,0,.5,1) both');
    card.className = 'bbeu-sb';

    var x = document.createElement('button');
    x.setAttribute('aria-label', 'Zatvori');
    x.setAttribute('style', 'position:absolute;top:10px;right:10px;width:32px;height:32px;border:none;' +
      'border-radius:50%;background:#F1F1F4;color:' + T.text + ';cursor:pointer;display:flex;' +
      'align-items:center;justify-content:center;padding:0');
    x.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    x.addEventListener('click', close);
    card.appendChild(x);

    wrap.appendChild(card);
    h.appendChild(wrap);
    open = wrap;
    document.addEventListener('keydown', onKey);
    return { card: card, mob: mob };
  }

  function linkRow(url, label) {
    var a = document.createElement('a');
    a.href = url.indexOf('http') === 0 ? url : 'https://' + url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('style', 'display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;' +
      'color:' + T.blue + ';text-decoration:underline;text-underline-offset:2px');
    a.innerHTML = esc(label) + '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>';
    return a;
  }

  function openNotice() {
    var h = host();
    var s = shell(h, 520);
    var pad = s.mob ? '16px' : '24px';
    var body = document.createElement('div');
    body.setAttribute('style', 'padding:' + pad + ';display:flex;flex-direction:column;gap:14px');

    var lead = document.createElement('p');
    lead.setAttribute('style', 'margin:0;padding-right:34px;font-size:13px;line-height:19px;color:' + T.sub);
    lead.textContent = 'Svaki potrošač u EU ima najmanje dvije godine zakonskog jamstva usklađenosti za robu kupljenu u EU.';
    body.appendChild(lead);

    var img = document.createElement('img');
    img.src = NOTICE_SRC;
    img.alt = 'Obavijest EU o zakonskom jamstvu usklađenosti';
    img.setAttribute('style', 'display:block;width:100%;height:auto;border:1px solid ' + T.border + ';border-radius:6px');
    body.appendChild(img);

    body.appendChild(linkRow(NOTICE_URL, 'europa.eu/youreurope/jamstva_hr'));
    s.card.appendChild(body);
  }

  function openLabel(g) {
    g = g || {};
    var h = host();
    var s = shell(h, 620);
    var pad = s.mob ? '16px' : '24px';
    var body = document.createElement('div');
    body.setAttribute('style', 'padding:' + pad + ';display:flex;align-items:flex-start;flex-direction:' +
      (s.mob ? 'column' : 'row') + ';gap:' + (s.mob ? '16px' : '24px'));

    var img = document.createElement('img');
    img.alt = 'Oznaka EU GARAN — proizvođačevo jamstvo trajnosti ' + yearsLabel(g.years);
    img.setAttribute('style', 'display:block;width:' + (s.mob ? '200px' : '232px') + ';height:auto;flex-shrink:0;' +
      'border:1px solid ' + T.border + ';border-radius:6px');
    labelURI(g).then(function (u) { img.src = u; });
    body.appendChild(img);

    var col = document.createElement('div');
    col.setAttribute('style', 'display:flex;flex-direction:column;gap:10px;min-width:0;padding-right:' + (s.mob ? '0' : '18px'));

    var h3 = document.createElement('h3');
    h3.setAttribute('style', 'margin:0;font-size:18px;font-weight:600;letter-spacing:-0.02em;color:' + T.text);
    h3.textContent = 'Komercijalno jamstvo trajnosti ' + yearsLabel(g.years);
    col.appendChild(h3);

    var sub = document.createElement('p');
    sub.setAttribute('style', 'margin:0;font-size:13px;line-height:19px;color:' + T.sub);
    sub.textContent = 'Proizvođač za cijeli proizvod nudi jamstvo trajnosti dulje od dvije godine, bez dodatnih troškova. ' +
      'Ovo jamstvo ne utječe na vaša prava iz zakonskog jamstva usklađenosti.';
    col.appendChild(sub);

    if (g.brand || g.model) {
      var meta = document.createElement('div');
      meta.setAttribute('style', 'display:flex;flex-direction:column;gap:2px;font-size:12px;color:' + T.sub);
      if (g.brand) { var b = document.createElement('span'); b.textContent = 'Proizvođač: ' + g.brand; meta.appendChild(b); }
      if (g.model) { var m = document.createElement('span'); m.textContent = 'Model: ' + g.model; meta.appendChild(m); }
      col.appendChild(meta);
    }

    if (g.statement) {
      var st = document.createElement('p');
      st.setAttribute('style', 'margin:0;padding-top:10px;border-top:1px solid ' + T.border +
        ';font-size:12px;line-height:18px;color:' + T.sub + ';white-space:pre-line');
      st.textContent = g.statement;
      col.appendChild(st);
    }

    col.appendChild(linkRow(LABEL_URL, 'Više o oznaci EU GARAN'));
    body.appendChild(col);
    s.card.appendChild(body);
  }

  window.BBEU = {
    NOTICE_SRC: NOTICE_SRC, LABEL_SRC: LABEL_SRC,
    NOTICE_URL: NOTICE_URL, LABEL_URL: LABEL_URL,
    fmtYears: fmtYears, yearsLabel: yearsLabel, nestedURI: nestedURI, labelURI: labelURI,
    alt: alt, qualifies: qualifies,
    openNotice: openNotice, openLabel: openLabel, close: close
  };
})();
