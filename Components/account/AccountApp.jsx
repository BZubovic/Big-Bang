/* Big Bang — account (profile + auth) mount.
   Wraps the ported imperative app in profile-app.js; the DOM below is the static
   shell (sidebar + detail slot + registration column), everything inside
   #bb-content / #bb-reg-col is rendered by the app itself. */

const MARKUP = `
<main class="bb-main">
  <div class="bb-panel" data-screen-label="Profile">
    <!-- SIDEBAR -->
    <aside class="bb-sidebar">
      <div class="bb-user">
        <div class="bb-avatar">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8.5" r="3.5"/>
            <path d="M4.5 20c0-3.6 3.4-6.5 7.5-6.5s7.5 2.9 7.5 6.5"/>
          </svg>
        </div>
        <div>
          <div class="bb-user-name">Janez Novak</div>
          <div class="bb-user-addr">Prešernova ulica 21, 1000<br>Ljubljana</div>
        </div>
      </div>

      <button class="bb-menu-item active" data-route="pregled">
        <span class="bb-menu-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" >
<path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </span>
        Pregled
        <span class="bb-menu-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></span>
      </button>

      <button class="bb-menu-item" data-route="orders">
        <span class="bb-menu-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" >
<path d="M14.8604 3.25C15.0591 3.25009 15.2501 3.32916 15.3906 3.46973C15.5312 3.61036 15.6104 3.80117 15.6104 4C15.6104 4.19883 15.5312 4.38964 15.3906 4.53027C15.2501 4.67084 15.0591 4.74991 14.8604 4.75H6C5.66848 4.75 5.35063 4.88179 5.11621 5.11621C4.88179 5.35063 4.75 5.66848 4.75 6V18C4.75 18.3315 4.88179 18.6494 5.11621 18.8838C5.35063 19.1182 5.66848 19.25 6 19.25H18C18.3315 19.25 18.6494 19.1182 18.8838 18.8838C19.1182 18.6494 19.25 18.3315 19.25 18V10.29C19.25 10.0911 19.3291 9.90042 19.4697 9.75977C19.6104 9.61911 19.8011 9.54004 20 9.54004C20.1989 9.54004 20.3896 9.61911 20.5303 9.75977C20.6709 9.90042 20.75 10.0911 20.75 10.29V18C20.75 18.7293 20.4601 19.4286 19.9443 19.9443C19.4286 20.4601 18.7293 20.75 18 20.75H6C5.27065 20.75 4.57139 20.4601 4.05566 19.9443C3.53994 19.4286 3.25 18.7293 3.25 18V6C3.25 5.27065 3.53994 4.57139 4.05566 4.05566C4.57139 3.53994 5.27065 3.25 6 3.25H14.8604ZM19.4502 4.9375C19.603 4.96374 19.7439 5.03685 19.8535 5.14648C19.9632 5.25612 20.0363 5.397 20.0625 5.5498C20.0887 5.70266 20.0668 5.86005 20 6L11 15C10.8724 15.1455 10.6929 15.2352 10.5 15.25C10.3071 15.2352 10.1276 15.1455 10 15L7 12C6.93316 11.86 6.91127 11.7027 6.9375 11.5498C6.96375 11.397 7.03685 11.2561 7.14648 11.1465C7.25612 11.0368 7.39699 10.9637 7.5498 10.9375C7.70267 10.9113 7.86005 10.9332 8 11L10.4697 13.4697L19 5C19.14 4.93316 19.2973 4.91127 19.4502 4.9375Z" fill="currentColor"></path>
</svg>
        </span>
        Moja naročila
        <span class="bb-menu-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></span>
      </button>

      <button class="bb-menu-item" data-route="postopki">
        <span class="bb-menu-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" >
<path d="M5.63604 18.3637C2.12132 14.8489 2.12132 9.15046 5.63604 5.63574M18.364 5.63574C21.8787 9.15046 21.8787 14.8489 18.364 18.3637M8.46447 15.5352C6.51184 13.5826 6.51184 10.4168 8.46447 8.46417M15.5355 8.46417C17.4882 10.4168 17.4882 13.5826 15.5355 15.5352M13 11.9997C13 12.552 12.5523 12.9997 12 12.9997C11.4477 12.9997 11 12.552 11 11.9997C11 11.4474 11.4477 10.9997 12 10.9997C12.5523 10.9997 13 11.4474 13 11.9997Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </span>
        Aktivni postopki
        <span class="bb-menu-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></span>
      </button>

      <button class="bb-menu-item" data-route="naprave">
        <span class="bb-menu-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" >
<path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </span>
        Moje naprave
        <span class="bb-menu-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></span>
      </button>

      <button class="bb-menu-item" data-route="narocnine">
        <span class="bb-menu-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" >
<path d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </span>
        Moje naročnine
        <span class="bb-menu-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></span>
      </button>

      <button class="bb-menu-item" data-route="mojikuponi">
        <span class="bb-menu-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" >
<path d="M20.1527 10.478L14.764 5.08919C14.6382 4.96345 14.4676 4.8916 14.288 4.8916H3.9236C3.55536 4.8916 3.25 5.19696 3.25 5.5652V12.6424C3.25 12.8221 3.32185 12.9927 3.44759 13.1184L8.83635 18.4982C9.23152 18.8934 9.75244 19.1089 10.3093 19.1089C10.8661 19.1089 11.396 18.8934 11.7822 18.4982L11.9798 18.3006C12.0157 18.3725 12.0516 18.4443 12.1145 18.4982C12.5187 18.9024 13.0575 19.1089 13.5874 19.1089C14.1173 19.1089 14.6562 18.9024 15.0693 18.4982L20.1438 13.4238C20.9521 12.6155 20.9521 11.2952 20.1438 10.478H20.1527ZM10.8392 17.5462C10.6955 17.6899 10.5158 17.7618 10.3183 17.7618C10.1207 17.7618 9.93206 17.6809 9.79734 17.5462L4.59719 12.364V6.23879H10.7224L15.9136 11.43C16.201 11.7174 16.201 12.1844 15.9136 12.4718L10.8392 17.5462ZM19.2007 12.4718L14.1263 17.5462C13.8389 17.8336 13.3629 17.8336 13.0755 17.5462C13.0126 17.4833 12.9498 17.4474 12.8689 17.4115L16.8566 13.4238C17.6649 12.6065 17.6649 11.2863 16.8566 10.478L12.6175 6.23879H14.0006L19.1918 11.43C19.4792 11.7174 19.4792 12.1844 19.1918 12.4718H19.2007ZM8.63876 8.86132C8.63876 9.48103 8.13581 9.98398 7.5161 9.98398C6.89639 9.98398 6.39344 9.48103 6.39344 8.86132C6.39344 8.24161 6.89639 7.73866 7.5161 7.73866C8.13581 7.73866 8.63876 8.24161 8.63876 8.86132Z" fill="currentColor"></path>
</svg>
        </span>
        Moji kuponi
        <span class="bb-menu-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></span>
      </button>

      <button class="bb-menu-item" data-route="klub">
        <span class="bb-menu-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" >
<g clip-path="url(#clip0_10347_116544)">
<path d="M11.049 2.92664C11.3483 2.00537 12.6517 2.00538 12.951 2.92664L14.4699 7.60055C14.6038 8.01254 14.9877 8.29148 15.4209 8.29149L20.3354 8.29168C21.3041 8.29172 21.7068 9.53127 20.9232 10.1007L16.9474 12.9895C16.5969 13.2441 16.4503 13.6955 16.5841 14.1075L18.1026 18.7815C18.4019 19.7028 17.3475 20.4689 16.5638 19.8995L12.5878 17.011C12.2373 16.7564 11.7627 16.7564 11.4122 17.011L7.43622 19.8995C6.65252 20.4689 5.5981 19.7028 5.8974 18.7815L7.41589 14.1075C7.54974 13.6955 7.40309 13.2441 7.05263 12.9895L3.07683 10.1007C2.29317 9.53127 2.69592 8.29172 3.66461 8.29168L8.57911 8.29149C9.01231 8.29148 9.39623 8.01254 9.53011 7.60055L11.049 2.92664Z" stroke="currentColor" stroke-width="1.4"></path>
</g>
<defs>
<clipPath id="clip0_10347_116544">
<rect width="24" height="24" fill="white"></rect>
</clipPath>
</defs>
</svg>
        </span>
        Klubska kartica
        <span class="bb-menu-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></span>
      </button>

      <button class="bb-menu-item" data-route="naslovi">
        <span class="bb-menu-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.59 21.1202C11.7093 21.2061 11.853 21.2517 12 21.2502C12.147 21.2517 12.2907 21.2061 12.41 21.1202C12.75 20.9302 19.75 16.2002 19.75 10.4502C19.75 8.39477 18.9335 6.42352 17.4801 4.97012C16.0267 3.51671 14.0554 2.7002 12 2.7002C9.94457 2.7002 7.97333 3.51671 6.51992 4.97012C5.06652 6.42352 4.25 8.39477 4.25 10.4502C4.25 16.2002 11.29 20.9302 11.59 21.1202ZM7.59238 6.05723C8.7642 4.89479 10.3494 4.24488 12 4.2502C13.6506 4.24488 15.2358 4.89479 16.4076 6.05723C17.5794 7.21967 18.2421 8.79963 18.25 10.4502C18.25 14.6602 13.46 18.5102 12 19.5802C10.54 18.5102 5.75 14.6602 5.75 10.4502C5.75794 8.79963 6.42056 7.21967 7.59238 6.05723ZM10.4722 12.2867C10.9244 12.5889 11.4561 12.7502 12 12.7502C12.7293 12.7502 13.4288 12.4605 13.9445 11.9447C14.4603 11.429 14.75 10.7295 14.75 10.0002C14.75 9.45629 14.5887 8.9246 14.2865 8.47237C13.9844 8.02013 13.5549 7.66766 13.0524 7.45952C12.5499 7.25137 11.997 7.19692 11.4635 7.30302C10.9301 7.40913 10.4401 7.67105 10.0555 8.05564C9.67086 8.44023 9.40895 8.93024 9.30284 9.46369C9.19673 9.99713 9.25119 10.5501 9.45933 11.0526C9.66747 11.5551 10.0199 11.9846 10.4722 12.2867ZM11.3055 8.96085C11.5111 8.82349 11.7528 8.75018 12 8.75018C12.3315 8.75018 12.6495 8.88188 12.8839 9.1163C13.1183 9.35072 13.25 9.66866 13.25 10.0002C13.25 10.2474 13.1767 10.4891 13.0393 10.6946C12.902 10.9002 12.7068 11.0604 12.4784 11.155C12.2499 11.2496 11.9986 11.2744 11.7561 11.2262C11.5137 11.1779 11.2909 11.0589 11.1161 10.8841C10.9413 10.7093 10.8223 10.4865 10.774 10.244C10.7258 10.0016 10.7505 9.75024 10.8452 9.52183C10.9398 9.29342 11.1 9.0982 11.3055 8.96085Z" fill="currentColor"></path>
</svg>
        </span>
        Moji naslovi
        <span class="bb-menu-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></span>
      </button>

      <button class="bb-menu-item" data-route="arhiva">
        <span class="bb-menu-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" >
<path d="M5 19C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H9L11 7H15C16.1046 7 17 7.89543 17 9V10M5 19H19C20.1046 19 21 18.1046 21 17V12C21 10.8954 20.1046 10 19 10H9C7.89543 10 7 10.8954 7 12V17C7 18.1046 6.10457 19 5 19Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"></path>
</svg>
        </span>
        Arhiva kupnje
        <span class="bb-menu-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></span>
      </button>

      <button class="bb-menu-item" data-route="podatki">
        <span class="bb-menu-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5596 11.8701C9.81789 11.8701 9.09287 11.6502 8.47618 11.2381C7.8595 10.8261 7.37885 10.2404 7.09502 9.55518C6.8112 8.86996 6.73693 8.11596 6.88163 7.38853C7.02632 6.6611 7.38347 5.99292 7.90792 5.46847C8.43237 4.94402 9.10055 4.58687 9.82798 4.44217C10.5554 4.29748 11.3094 4.37174 11.9946 4.65557C12.6799 4.9394 13.2655 5.42005 13.6776 6.03673C14.0896 6.65341 14.3096 7.37844 14.3096 8.12012C14.3069 9.11387 13.911 10.0662 13.2083 10.7689C12.5056 11.4715 11.5533 11.8675 10.5596 11.8701ZM10.5596 5.87012C10.1146 5.87012 9.67955 6.00208 9.30954 6.24931C8.93953 6.49655 8.65114 6.84795 8.48084 7.25908C8.31055 7.67021 8.26599 8.12261 8.35281 8.55907C8.43962 8.99553 8.65391 9.39644 8.96858 9.71111C9.28325 10.0258 9.68416 10.2401 10.1206 10.3269C10.5571 10.4137 11.0095 10.3691 11.4206 10.1988C11.8317 10.0286 12.1831 9.74016 12.4304 9.37015C12.6776 9.00014 12.8096 8.56513 12.8096 8.12012C12.8096 7.52338 12.5725 6.95109 12.1506 6.52913C11.7286 6.10717 11.1563 5.87012 10.5596 5.87012ZM3.55957 18.8701C3.36066 18.8701 3.16989 18.7911 3.02924 18.6504C2.88859 18.5098 2.80957 18.319 2.80957 18.1201C2.80957 13.3701 8.23957 13.3701 10.5596 13.3701C11.2796 13.3701 11.9196 13.3701 12.4996 13.4401C12.6969 13.4555 12.8801 13.5482 13.0093 13.698C13.1386 13.8479 13.2034 14.0427 13.1896 14.2401C13.1717 14.4383 13.0769 14.6215 12.9255 14.7505C12.774 14.8795 12.578 14.944 12.3796 14.9301C12.1251 14.9301 11.8573 14.9168 11.5742 14.9027H11.5741H11.5741C11.2563 14.8869 10.9191 14.8701 10.5596 14.8701C5.37957 14.8701 4.30957 16.1701 4.30957 18.1201C4.31092 18.219 4.29244 18.3171 4.25522 18.4087C4.21801 18.5003 4.16281 18.5835 4.0929 18.6534C4.02298 18.7234 3.93977 18.7786 3.84817 18.8158C3.75657 18.853 3.65843 18.8715 3.55957 18.8701ZM12.1396 19.4102C12.2801 19.5509 12.4707 19.63 12.6696 19.6302L12.7396 19.6002L14.6796 19.4202C14.8541 19.4036 15.0171 19.3257 15.1396 19.2002L20.6596 13.6802C20.8314 13.5045 20.9667 13.2965 21.0577 13.0682C21.1486 12.8399 21.1935 12.5959 21.1896 12.3502C21.1937 12.0836 21.1446 11.8189 21.045 11.5716C20.9454 11.3243 20.7973 11.0994 20.6096 10.9102C20.2287 10.5573 19.7287 10.3613 19.2096 10.3613C18.6904 10.3613 18.1904 10.5573 17.8096 10.9102L12.2896 16.4302C12.1663 16.5572 12.0919 16.7236 12.0796 16.9002L11.9196 18.8202C11.9091 18.9288 11.9235 19.0383 11.9616 19.1405C11.9998 19.2427 12.0606 19.3349 12.1396 19.4102ZM13.4896 18.0502L13.5496 17.2902L18.8696 12.0002C18.9679 11.9271 19.0871 11.8877 19.2096 11.8877C19.332 11.8877 19.4513 11.9271 19.5496 12.0002C19.6396 12.1064 19.6892 12.241 19.6896 12.3802C19.6946 12.4783 19.6625 12.5747 19.5996 12.6502L14.2696 17.9802L13.4896 18.0502Z" fill="currentColor"></path>
</svg>
        </span>
        Moji podatki
        <span class="bb-menu-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></span>
      </button>

      <button class="bb-menu-item" data-route="pomocnik">
        <span class="bb-menu-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" >
<path d="M5 3V7M3 5H7M6 17V21M4 19H8M13 3L15.2857 9.85714L21 12L15.2857 14.1429L13 21L10.7143 14.1429L5 12L10.7143 9.85714L13 3Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </span>
        UAU pomoćnik
        <span class="bb-menu-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></span>
      </button>

      <button class="bb-menu-item logout">
        <span class="bb-menu-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 3.5H6a2.5 2.5 0 0 0-2.5 2.5v12A2.5 2.5 0 0 0 6 20.5h4"/>
            <polyline points="16 16 21 12 16 8"/>
            <line x1="21" y1="12" x2="9.5" y2="12"/>
          </svg>
        </span>
        Odjava
      </button>
    </aside>

    <!-- CONTENT -->
    <div class="bb-detail" id="bb-detail">
      <div class="bb-mbar">
        <button class="bb-mbar-back" id="bb-mbar-back" aria-label="Nazaj"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 6 9 12 15 18"/></svg></button>
        <span class="bb-mbar-title" id="bb-mbar-title"></span>
      </div>
      <section class="bb-content" id="bb-content"></section>
    </div>
  </div>
</main>
<div id="bb-reg"><div class="bb-reg-wrap"><div class="bb-reg-col" id="bb-reg-col"></div></div></div>
`;

function useLatest(v) { const r = React.useRef(v); r.current = v; return r; }

function AccountApp(props) {
  const hostRef = React.useRef(null);
  const apiRef = React.useRef(null);
  const cb = useLatest(props);

  React.useEffect(() => {
    let dead = false;
    const host = hostRef.current;
    host.innerHTML = MARKUP;
    const boot = () => {
      if (dead || !window.BBAccountMount) return !!window.BBAccountMount;
      apiRef.current = window.BBAccountMount(host, {
        layout: cb.current.variant === 'mobile' ? 'mobile' : 'desktop',
        mode: cb.current.mode === 'auth' ? 'registracija' : 'profile',
        klubMember: cb.current.klubMember !== false,
        newUser: !!cb.current.newUser
      }, {
        onAuthDone: (where) => cb.current.onAuthDone && cb.current.onAuthDone(where),
        onLogout: () => cb.current.onLogout && cb.current.onLogout()
      });
      return true;
    };
    if (!boot()) {
      const t = setInterval(() => { if (boot()) clearInterval(t); }, 40);
      return () => { dead = true; clearInterval(t); };
    }
    return () => {
      dead = true;
      if (apiRef.current && apiRef.current.destroy) apiRef.current.destroy();
      document.querySelectorAll('.bb-flyout-overlay, .bb-modal-overlay, .bb-confirm-overlay').forEach(n => n.remove());
      document.body.classList.remove('bb-mobile');
      apiRef.current = null;
    };
  }, []);

  React.useEffect(() => {
    if (!apiRef.current) return;
    apiRef.current.setOpts({
      layout: props.variant === 'mobile' ? 'mobile' : 'desktop',
      mode: props.mode === 'auth' ? 'registracija' : 'profile',
      klubMember: props.klubMember !== false,
      newUser: !!props.newUser
    });
  }, [props.variant, props.mode, props.klubMember, props.newUser]);

  return React.createElement('div', { id: 'bb-app', ref: hostRef });
}

module.exports = { AccountApp };
