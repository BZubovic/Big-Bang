/* @ds-bundle: {"format":4,"namespace":"BigBangDesignSystem_019e02","components":[],"sourceHashes":{"ui_kits/webshop/Footer.jsx":"d9f3951ea931","ui_kits/webshop/Header.jsx":"5d567dbc79df","ui_kits/webshop/LogoData.js":"c630f96220f3","ui_kits/webshop/ProductCard.jsx":"4436750c6dfd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BigBangDesignSystem_019e02 = window.BigBangDesignSystem_019e02 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/webshop/Footer.jsx
try { (() => {
// Footer.jsx — Big Bang Webshop Footer

Object.assign(window, {
  BBFooter
});
function BBFooter() {
  const cols = [{
    title: 'Kupovina',
    links: ['Kategorije', 'Akcije i promocije', 'Bang Cijena', 'Bestselleri', 'Novo u ponudi']
  }, {
    title: 'Pomoć',
    links: ['Kontakt', 'Najčešća pitanja', 'Reklamacije', 'Povrat robe', 'Jamstvo']
  }, {
    title: 'O nama',
    links: ['O Big Bangu', 'Prodavatelji', 'Prodajna mjesta', 'Karijere', 'Mediji']
  }, {
    title: 'Plaćanje i dostava',
    links: ['Načini plaćanja', 'Plaćanje na rate', 'Dostava', 'Poslovnice', 'Click & Collect']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#171C51',
      color: '#fff',
      padding: '48px 40px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr repeat(4, auto)',
      gap: 48,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: window.BB_LOGO_WHITE,
    alt: "Big Bang",
    style: {
      height: 26,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.6)',
      lineHeight: 1.6,
      maxWidth: 220
    }
  }, "Va\u0161 partner za tehni\u010Dku robu i ku\u0107anske aparate u Hrvatskoj i Sloveniji.")), cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 12,
      color: '#fff'
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.6)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.target.style.color = '#fff',
    onMouseLeave: e => e.target.style.color = 'rgba(255,255,255,0.6)'
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.12)',
      paddingTop: 20,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.4)'
    }
  }, "\xA9 2024 Big Bang d.o.o. Sva prava pridr\u017Eana."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, ['Privatnost', 'Uvjeti', 'Kolačići'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.4)',
      textDecoration: 'none'
    }
  }, l)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webshop/Header.jsx
try { (() => {
// Header.jsx — Big Bang Webshop Header
// Top bar: Primary Blue (#0050A0) · Nav bar: Dark Blue (#002D73)

Object.assign(window, {
  BBHeader
});
function BBHeader({
  cartCount = 3
}) {
  const [searchVal, setSearchVal] = React.useState('');
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 12px rgba(0,0,0,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0050A0',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      padding: '0 40px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.BB_LOGO_WHITE,
    alt: "Big Bang",
    style: {
      height: 26,
      flexShrink: 0,
      position: 'relative',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 560
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: searchVal,
    onChange: e => setSearchVal(e.target.value),
    placeholder: "Koji proizvod tra\u017Ei\u0161? Unesi pojam za pretragu...",
    style: {
      width: '100%',
      height: 44,
      borderRadius: 22,
      border: 'none',
      padding: '0 44px 0 18px',
      fontFamily: 'Inter,sans-serif',
      fontSize: 14,
      letterSpacing: '-0.02em',
      color: '#101117',
      background: '#fff',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#818181',
      pointerEvents: 'none'
    },
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17",
    y1: "17",
    x2: "22",
    y2: "22"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      marginLeft: 'auto',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: topIconBtn,
    title: "Popis \u017Eelja"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21C12 21 3 14 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 13-9 13z"
  }))), /*#__PURE__*/React.createElement("button", {
    style: topIconBtn,
    title: "Moj ra\u010Dun"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 20c0-4 3.6-7 8-7s8 3 8 7"
  }))), /*#__PURE__*/React.createElement("button", {
    style: {
      ...topIconBtn,
      position: 'relative'
    },
    title: "Ko\u0161arica"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10a4 4 0 0 1-8 0"
  })), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      background: '#FFC857',
      color: '#101117',
      borderRadius: '50%',
      width: 18,
      height: 18,
      fontSize: 10,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: 1
    }
  }, cartCount)))), /*#__PURE__*/React.createElement("nav", {
    style: {
      background: '#002D73',
      height: 44,
      display: 'flex',
      alignItems: 'center',
      padding: '0 40px',
      gap: 4
    }
  }, [{
    label: 'Proizvodi',
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "21",
      y2: "18"
    }))
  }, {
    label: 'Akcije i promocije',
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
    }))
  }, {
    label: 'B2B',
    icon: null
  }, {
    label: 'Prodajna mjesta',
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "9",
      r: "2.5"
    }))
  }, {
    label: 'Prodavatelji',
    icon: null
  }].map(({
    label,
    icon
  }) => /*#__PURE__*/React.createElement("button", {
    key: label,
    style: navBtnStyle
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      opacity: 0.9
    }
  }, icon), label))));
}
const topIconBtn = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  position: 'relative'
};
const navBtnStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: 'rgba(255,255,255,0.88)',
  fontFamily: 'Inter,sans-serif',
  fontSize: 13,
  fontWeight: 500,
  padding: '0 12px',
  height: 44,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  transition: 'color 0.15s',
  whiteSpace: 'nowrap'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webshop/LogoData.js
try { (() => {
// Auto-generated logo data URIs — all fills forced white
const BB_LOGO_WHITE = "data:image/svg+xml;base64,PHN2ZyBzdHlsZT0iZmlsbDp3aGl0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTI4Ljk0MiIgaGVpZ2h0PSIyNi4yODkiIHZpZXdCb3g9IjAgMCAxMjguOTQyIDI2LjI4OSIgZmlsbD0id2hpdGUiPgogIDxwYXRoIGQ9Ik0gMTAuMjA4IDAgTCAyLjY4NiAwIEMgMS4yNCAwIDAgMS4xMjggMCAyLjYwNyBMIDAgMjMuNjggQyAwIDI1LjE1NiAxLjI0IDI2LjI4NiAyLjY4NiAyNi4yODYgTCAxMC4yMDggMjYuMjg2IEMgMTQuNzk4IDI2LjI4NiAxNy4wNDMgMjQuNTI3IDE3LjA0MyAxOS41NzIgTCAxNy4wNDMgMTcuODMgQyAxNy4wNDMgMTUuMzcyIDE2LjM5NiAxMy41OTMgMTUuNDkzIDEzLjE0NCBDIDE2LjQzMSAxMi42MzcgMTcuMDQzIDExLjA0NCAxNy4wNDMgOC40NTggTCAxNy4wNDMgNi43MTYgQyAxNy4wNDMgMi4xMTMgMTQuODY1IDAgMTAuMjA4IDAgWiBNIDEyLjgyOSA5LjgxMiBDIDEyLjgyOSAxMC41MyAxMi4yMzYgMTEuMTExIDExLjUwNyAxMS4xMTEgTCA2Ljk0NyAxMS4xMTQgTCA2Ljk0NyAxNS4xODIgTCAxMS41MDcgMTUuMTc1IEMgMTIuMjM2IDE1LjE3NSAxMi44MjkgMTUuNzU4IDEyLjgyOSAxNi40NzcgTCAxMi44MjkgMjAuOTIzIEMgMTIuODI5IDIxLjY0IDEyLjIzNiAyMi4yMjQgMTEuNTA3IDIyLjIyNCBMIDQuNDQzIDIyLjIyNCBDIDQuMTcyIDIyLjIyNCA0LjE0MSAyMi4yMTkgNC4xNDEgMjEuODU3IEwgNC4xNDEgNC40MzEgQyA0LjE0MSA0LjA2NyA0LjE3MiA0LjA2NCA0LjQ0MyA0LjA2NCBMIDExLjUwNyA0LjA2NCBDIDEyLjIzNiA0LjA2NCAxMi44MjkgNC42NDcgMTIuODI5IDUuMzY2IEwgMTIuODI5IDkuODEyIFogTSA0NC4yNzEgMTQuMzQyIEwgNDQuMjc2IDIwLjkyIEMgNDQuMjc2IDIzLjg4NiA0MS44MjkgMjYuMjg4IDM4LjgxNCAyNi4yODggTCAzMi44OTEgMjYuMjg4IEMgMjkuODYzIDI2LjI4OCAyNy40MiAyMy44ODUgMjcuNDIgMjAuOTIgTCAyNy40MiA1LjM2OCBDIDI3LjQyIDIuNDA0IDI5Ljg2MiAwIDMyLjg3OCAwIEwgMzkuMTI3IDAgQyA0MC4xOTUgMCA0MS4wNjIgMC44NTEgNDEuMDYyIDEuOTAxIEwgNDEuMDYyIDIuMTcgQyA0MS4wNjIgMy4yMTggNDAuMTk1IDQuMDY4IDM5LjEyNyA0LjA2OCBMIDM1Ljc4NSA0LjA2OCBMIDMyLjk1NSA0LjA2MyBDIDMyLjgyIDQuMDYzIDMyLjcwNyA0LjA4NiAzMi43MDcgNC4wODYgQyAzMi4xIDQuMjAzIDMxLjYzMiA0LjczNiAzMS42MzIgNS4zNjcgTCAzMS42MzIgMjAuOTc2IEMgMzEuNjMyIDIxLjYwOCAzMi4xIDIyLjEzNyAzMi43MDcgMjIuMjU2IEMgMzIuNzA3IDIyLjI1NiAzMi44MTkgMjIuMjc3IDMyLjkxMiAyMi4yNzcgTCAzOC45MDUgMjIuMjc3IEMgMzkuMDQyIDIyLjI3NyAzOS4xNTQgMjIuMjU2IDM5LjE1NCAyMi4yNTYgQyAzOS43NjIgMjIuMTM3IDQwLjIyOCAyMS42MDggNDAuMjI4IDIwLjk3NiBMIDQwLjIyOCAxNS4xMzIgTCAzNC45MDUgMTUuMTMyIEwgMzQuOTA3IDExLjA2NyBMIDQyLjExOCAxMS4wNjQgTCA0Mi4zODIgMTEuMDY0IEMgNDMuNDIzIDExLjA2NCA0NC4yNjggMTEuODk0IDQ0LjI2OCAxMi45MTcgTCA0NC4yNzEgMTQuMzQyIFogTSA4My40MTkgMCBMIDc3LjAzOCAwIEMgNzQuMDA5IDAgNzEuNjggMi40MTIgNzEuNjggNS4zNjggTCA3MS42ODcgMjQuNDMyIEMgNzEuNjg3IDI1LjQ1OSA3Mi41MzQgMjYuMjg4IDczLjU3MyAyNi4yODggTCA3My44NDEgMjYuMjg4IEMgNzQuODg1IDI2LjI4OCA3NS43MjggMjUuNDU5IDc1LjcyOCAyNC40MzIgTCA3NS43MjUgMTYuNTI2IEMgNzUuNzY2IDE2LjUzIDc1LjgwNyAxNi41MzcgNzUuODQ4IDE2LjUzNyBMIDg0LjgzMiAxNi41MzQgTCA4NC44MjggMjQuNDMzIEMgODQuODI4IDI1LjQ2IDg1LjY3MiAyNi4yODkgODYuNzE1IDI2LjI4OSBMIDg2Ljk4MiAyNi4yODkgQyA4OC4wMjUgMjYuMjg5IDg4Ljg2OSAyNS40NiA4OC44NjkgMjQuNDMzIEwgODguODc4IDUuMzY5IEMgODguODc4IDIuNDA0IDg2LjQzNCAwIDgzLjQxOSAwIFogTSA4NC44MzMgMTIuNTYyIEwgNzUuODQ5IDEyLjU2MiBDIDc1LjgwNyAxMi41NjIgNzUuNzY3IDEyLjU2NyA3NS43MjYgMTIuNTY3IEwgNzUuNzIzIDUuMzA5IEMgNzUuNzIzIDQuNjggNzYuMTkxIDQuMTUgNzYuNzk4IDQuMDMzIEMgNzYuODM2IDQuMDIgNzYuOTExIDQuMDExIDc3LjAwNSA0LjAxMSBMIDgzLjU1NSA0LjAxMSBDIDgzLjY0NiA0LjAxMSA4My43MTYgNC4wMiA4My43NiA0LjAzMyBDIDg0LjM2NyA0LjE1IDg0LjgzNiA0LjY4IDg0LjgzNiA1LjMwOSBMIDg0LjgzMyAxMi41NjIgWiBNIDEwOS4wMDcgNS4zNjggTCAxMDkuMDMxIDI0LjM0MiBDIDEwOS4wMzEgMjUuNDE2IDEwOC4xNDMgMjYuMjg4IDEwNy4wNDkgMjYuMjg4IEwgMTA2Ljc2OCAyNi4yODggQyAxMDUuNjc0IDI2LjI4OCAxMDQuNzg2IDI1LjQxNiAxMDQuNzg2IDI0LjM0MiBMIDEwNC43OTIgNS4zNjggQyAxMDQuNzkyIDQuNjQ4IDEwNC4yIDQuMDY0IDEwMy40NzEgNC4wNjQgTCA5Ni40MDUgNC4wNjQgQyA5Ni4xNCA0LjA2NCA5Ni4xMDkgNC4wNjQgOTYuMTA5IDQuNDI4IEwgOTYuMDkyIDI0LjM5IEMgOTYuMDkyIDI1LjQzOCA5NS4yMjkgMjYuMjg4IDk0LjE2MiAyNi4yODggTCA5My44ODcgMjYuMjg4IEMgOTIuODE5IDI2LjI4OCA5MS45NTUgMjUuNDM3IDkxLjk1NSAyNC4zOSBMIDkxLjk2NyAyLjYwNyBDIDkxLjk2NyAxLjEzMiA5My4yMDYgMCA5NC42NTIgMCBMIDEwMy41NSAwIEMgMTA2LjU2NiAwIDEwOS4wMDggMi40MDQgMTA5LjAwOCA1LjM2OCBNIDI0LjEwMSAxLjkwMSBMIDI0LjEwMSAyNC4zODkgQyAyNC4xMDEgMjUuNDM3IDIzLjIzNCAyNi4yODcgMjIuMTY3IDI2LjI4NyBMIDIxLjg5NCAyNi4yODcgQyAyMC44MjcgMjYuMjg3IDE5Ljk2NCAyNS40MzYgMTkuOTY0IDI0LjM4OSBMIDE5Ljk2NCAxLjkwMSBDIDE5Ljk2NCAwLjg1MSAyMC44MjcgMCAyMS44OTQgMCBMIDIyLjE2NyAwIEMgMjMuMjM0IDAgMjQuMTAxIDAuODUxIDI0LjEwMSAxLjkwMSBaIE0gNjEuODc5IDAuMDAyIEwgNTQuMzU1IDAuMDAyIEMgNTIuOTE1IDAuMDAyIDUxLjY3NCAxLjEzIDUxLjY3NCAyLjYwOCBMIDUxLjY3NCAyMy42ODIgQyA1MS42NzQgMjUuMTU4IDUyLjkxNCAyNi4yODggNTQuMzU1IDI2LjI4OCBMIDYxLjg3OSAyNi4yODggQyA2Ni40NjYgMjYuMjg4IDY4LjcxNSAyNC41MjggNjguNzE1IDE5LjU3MyBMIDY4LjcxNSAxNy44MzEgQyA2OC43MTUgMTUuMzc0IDY4LjA3IDEzLjU5NSA2Ny4xNjcgMTMuMTQ2IEMgNjguMTA1IDEyLjYzOCA2OC43MTUgMTEuMDQ1IDY4LjcxNSA4LjQ1OSBMIDY4LjcxNSA2LjcxNiBDIDY4LjcxNSAyLjExNSA2Ni41MzYgMC4wMDIgNjEuODc5IDAuMDAyIFogTSA2NC41MDUgOS44MTQgQyA2NC41MDUgMTAuNTMyIDYzLjkxIDExLjExMyA2My4xNzYgMTEuMTEzIEwgNTguNjIgMTEuMTE2IEwgNTguNjIgMTUuMTg0IEwgNjMuMTc2IDE1LjE3NyBDIDYzLjkxIDE1LjE3NyA2NC41MDUgMTUuNzYgNjQuNTA1IDE2LjQ3OSBMIDY0LjUwNSAyMC45MjQgQyA2NC41MDUgMjEuNjQxIDYzLjkxIDIyLjIyNiA2My4xNzYgMjIuMjI2IEwgNTYuMTE0IDIyLjIyNiBDIDU1Ljg0NCAyMi4yMjYgNTUuODE2IDIyLjIyIDU1LjgxNiAyMS44NTggTCA1NS44MTYgNC40MzMgQyA1NS44MTYgNC4wNjggNTUuODQ0IDQuMDY2IDU2LjExNCA0LjA2NiBMIDYzLjE3NiA0LjA2NiBDIDYzLjkxIDQuMDY2IDY0LjUwNSA0LjY0OSA2NC41MDUgNS4zNjggTCA2NC41MDUgOS44MTQgWiBNIDEyOC45NDIgMjAuOTIxIEMgMTI4Ljk0MiAyMy44ODYgMTI2LjQ5NSAyNi4yODggMTIzLjQ4IDI2LjI4OCBMIDExNy41NTkgMjYuMjg4IEMgMTE0LjUyOSAyNi4yODggMTEyLjA4NSAyMy44ODYgMTEyLjA4NSAyMC45MjEgTCAxMTIuMDg1IDUuMzY4IEMgMTEyLjA4NSAyLjQwNCAxMTQuNTI5IDAgMTE3LjU0NSAwIEwgMTIzLjc5NSAwIEMgMTI0Ljg2MiAwIDEyNS43MjYgMC44NTEgMTI1LjcyNiAxLjkwMSBMIDEyNS43MjYgMi4xNyBDIDEyNS43MjYgMy4yMTggMTI0Ljg2MiA0LjA2OCAxMjMuNzk1IDQuMDY4IEwgMTE3LjYyMyA0LjA2MyBDIDExNy40ODUgNC4wNjMgMTE3LjM3IDQuMDg2IDExNy4zNyA0LjA4NiBDIDExNi43NjQgNC4yMDMgMTE2LjI5NSA0LjczNiAxMTYuMjk1IDUuMzY3IEwgMTE2LjI5NSAyMC45NzYgQyAxMTYuMjk1IDIxLjYwOCAxMTYuNzY0IDIyLjEzNyAxMTcuMzcgMjIuMjU2IEMgMTE3LjM3IDIyLjI1NiAxMTcuNDg1IDIyLjI3NyAxMTcuNTgxIDIyLjI3NyBMIDEyMy41NzMgMjIuMjc3IEMgMTIzLjcwOSAyMi4yNzcgMTIzLjgyMSAyMi4yNTYgMTIzLjgyMSAyMi4yNTYgQyAxMjQuNDI0IDIyLjEzNyAxMjQuODk4IDIxLjYwOCAxMjQuODk4IDIwLjk3NiBMIDEyNC44OTggMTUuMTMyIEwgMTE5LjU3IDE1LjEzMiBMIDExOS41NzIgMTEuMDY3IEwgMTI2Ljc4NCAxMS4wNjQgTCAxMjcuMDQ4IDExLjA2NCBDIDEyOC4wODggMTEuMDY0IDEyOC45MzYgMTEuODk0IDEyOC45MzYgMTIuOTE3IEwgMTI4Ljk0MiAyMC45MTkgTCAxMjguOTQyIDIwLjkyMSBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=";
Object.assign(window, {
  BB_LOGO_WHITE
});
const BB_ICON_TRUCK = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDI1IDE1IiBmaWxsPSJ3aGl0ZSI+CiAgPHBhdGggZD0iTSA0LjA4MiAtMSBDIDMuNTI5IC0xIDMuMDgyIC0wLjU1MiAzLjA4MiAwIEMgMy4wODIgMC41NTIgMy41MjkgMSA0LjA4MiAxIEwgNC4wODIgLTEgWiBNIDE1LjgxNiAwIEwgMTUuODE2IDEgTCAxNS44MTYgMCBaIE0gMTYuODM3IDExLjc4NiBMIDE3LjgzNyAxMS43ODYgTCAxNy44MzcgMTEuNzg2IEwgMTYuODM3IDExLjc4NiBaIE0gNC4wODIgMTEuODU3IEMgMy41MjkgMTEuODU3IDMuMDgyIDEyLjMwNSAzLjA4MiAxMi44NTcgQyAzLjA4MiAxMy40MDkgMy41MjkgMTMuODU3IDQuMDgyIDEzLjg1NyBMIDQuMDgyIDExLjg1NyBaIE0gMTYuODM3IDMuMjE0IEwgMTUuODM3IDMuMjE0IEwgMTUuODM3IDMuMjE0IEwgMTYuODM3IDMuMjE0IFogTSAyMS4yMTcgMi40NTcgTCAyMS45NDEgMS43NjcgTCAyMS45NDEgMS43NjcgTCAyMS4yMTcgMi40NTcgWiBNIDI0LjcwMSA2LjExNSBMIDI1LjQyNSA1LjQyNSBMIDI1LjQyNSA1LjQyNSBMIDI0LjcwMSA2LjExNSBaIE0gNy4xNDMgNS4yODYgQyA3LjY5NSA1LjI4NiA4LjE0MyA0LjgzOCA4LjE0MyA0LjI4NiBDIDguMTQzIDMuNzMzIDcuNjk1IDMuMjg2IDcuMTQzIDMuMjg2IEwgNy4xNDMgNS4yODYgWiBNIDAgMy4yODYgQyAtMC41NTIgMy4yODYgLTEgMy43MzMgLTEgNC4yODYgQyAtMSA0LjgzOCAtMC41NTIgNS4yODYgMCA1LjI4NiBMIDAgMy4yODYgWiBNIDUuMTAyIDkuNTcxIEMgNS42NTQgOS41NzEgNi4xMDIgOS4xMjQgNi4xMDIgOC41NzEgQyA2LjEwMiA4LjAxOSA1LjY1NCA3LjU3MSA1LjEwMiA3LjU3MSBMIDUuMTAyIDkuNTcxIFogTSAyLjA0MSA3LjU3MSBDIDEuNDg5IDcuNTcxIDEuMDQxIDguMDE5IDEuMDQxIDguNTcxIEMgMS4wNDEgOS4xMjQgMS40ODkgOS41NzEgMi4wNDEgOS41NzEgTCAyLjA0MSA3LjU3MSBaIE0gNC4wODIgMSBMIDE1LjgxNiAxIEwgMTUuODE2IC0xIEwgNC4wODIgLTEgTCA0LjA4MiAxIFogTSAxNS44MzcgMS4wNzEgTCAxNS44MzcgMTEuNzg2IEwgMTcuODM3IDExLjc4NiBMIDE3LjgzNyAxLjA3MSBMIDE1LjgzNyAxLjA3MSBaIE0gNi4xMjIgMTEuODU3IEwgNC4wODIgMTEuODU3IEwgNC4wODIgMTMuODU3IEwgNi4xMjIgMTMuODU3IEwgNi4xMjIgMTEuODU3IFogTSAxNS44MTYgMTEuODU3IEwgMTAuMjA0IDExLjg1NyBMIDEwLjIwNCAxMy44NTcgTCAxNS44MTYgMTMuODU3IEwgMTUuODE2IDExLjg1NyBaIE0gMTUuODM3IDExLjc4NiBDIDE1LjgzNyAxMS44MjEgMTUuODI0IDExLjg0MyAxNS44MTQgMTEuODU0IEMgMTUuODA5IDExLjg1OSAxNS44MDYgMTEuODYgMTUuODA4IDExLjg1OSBDIDE1LjgxIDExLjg1OCAxNS44MTQgMTEuODU3IDE1LjgxNiAxMS44NTcgTCAxNS44MTYgMTMuODU3IEMgMTYuOTc4IDEzLjg1NyAxNy44MzcgMTIuODgzIDE3LjgzNyAxMS43ODYgTCAxNS44MzcgMTEuNzg2IFogTSAxNS44MTYgMSBDIDE1LjgxNCAxIDE1LjgxIDAuOTk5IDE1LjgwOCAwLjk5OCBDIDE1LjgwNiAwLjk5NyAxNS44MDkgMC45OTggMTUuODE0IDEuMDAzIEMgMTUuODI0IDEuMDE0IDE1LjgzNyAxLjAzNiAxNS44MzcgMS4wNzEgTCAxNy44MzcgMS4wNzEgQyAxNy44MzcgLTAuMDI2IDE2Ljk3OCAtMSAxNS44MTYgLTEgTCAxNS44MTYgMSBaIE0gMTcuODM3IDExLjc4NiBMIDE3LjgzNyAzLjIxNCBMIDE1LjgzNyAzLjIxNCBMIDE1LjgzNyAxMS43ODYgTCAxNy44MzcgMTEuNzg2IFogTSAxNy44NTcgMy4xNDMgTCAyMC40OTYgMy4xNDMgTCAyMC40OTYgMS4xNDMgTCAxNy44NTcgMS4xNDMgTCAxNy44NTcgMy4xNDMgWiBNIDI0IDYuODcyIEwgMjQgMTEuNzg2IEwgMjYgMTEuNzg2IEwgMjYgNi44NzIgTCAyNCA2Ljg3MiBaIE0gMjAuNDkzIDMuMTQ2IEwgMjMuOTc3IDYuODA0IEwgMjUuNDI1IDUuNDI1IEwgMjEuOTQxIDEuNzY3IEwgMjAuNDkzIDMuMTQ2IFogTSAxOC44NzggMTEuODU3IEwgMTcuODU3IDExLjg1NyBMIDE3Ljg1NyAxMy44NTcgTCAxOC44NzggMTMuODU3IEwgMTguODc4IDExLjg1NyBaIE0gMjMuOTggMTEuODU3IEwgMjIuOTU5IDExLjg1NyBMIDIyLjk1OSAxMy44NTcgTCAyMy45OCAxMy44NTcgTCAyMy45OCAxMS44NTcgWiBNIDI2IDYuODcyIEMgMjYgNi4zMzggMjUuNzk4IDUuODE3IDI1LjQyNSA1LjQyNSBMIDIzLjk3NyA2LjgwNCBDIDIzLjk4NyA2LjgxNCAyNCA2LjgzOCAyNCA2Ljg3MiBMIDI2IDYuODcyIFogTSAyMC40OTYgMy4xNDMgQyAyMC40OTEgMy4xNDMgMjAuNDg4IDMuMTQyIDIwLjQ4NyAzLjE0MSBDIDIwLjQ4NiAzLjE0MSAyMC40ODkgMy4xNDIgMjAuNDkzIDMuMTQ2IEwgMjEuOTQxIDEuNzY3IEMgMjEuNTY3IDEuMzc0IDIxLjA0OCAxLjE0MyAyMC40OTYgMS4xNDMgTCAyMC40OTYgMy4xNDMgWiBNIDE1LjgzNyAxMS43ODYgQyAxNS44MzcgMTIuODgzIDE2LjY5NiAxMy44NTcgMTcuODU3IDEzLjg1NyBMIDE3Ljg1NyAxMS44NTcgQyAxNy44NiAxMS44NTcgMTcuODYzIDExLjg1OCAxNy44NjYgMTEuODU5IEMgMTcuODY3IDExLjg2IDE3Ljg2NSAxMS44NTkgMTcuODYgMTEuODU0IEMgMTcuODUgMTEuODQzIDE3LjgzNyAxMS44MjEgMTcuODM3IDExLjc4NiBMIDE1LjgzNyAxMS43ODYgWiBNIDI0IDExLjc4NiBDIDI0IDExLjgyMSAyMy45ODcgMTEuODQzIDIzLjk3NyAxMS44NTQgQyAyMy45NzIgMTEuODU5IDIzLjk2OSAxMS44NiAyMy45NzEgMTEuODU5IEMgMjMuOTczIDExLjg1OCAyMy45NzcgMTEuODU3IDIzLjk4IDExLjg1NyBMIDIzLjk4IDEzLjg1NyBDIDI1LjE0MSAxMy44NTcgMjYgMTIuODgzIDI2IDExLjc4NiBMIDI0IDExLjc4NiBaIE0gMTcuODM3IDMuMjE0IEMgMTcuODM3IDMuMTc5IDE3Ljg1IDMuMTU3IDE3Ljg2IDMuMTQ2IEMgMTcuODY1IDMuMTQxIDE3Ljg2NyAzLjE0IDE3Ljg2NiAzLjE0MSBDIDE3Ljg2MyAzLjE0MiAxNy44NiAzLjE0MyAxNy44NTcgMy4xNDMgTCAxNy44NTcgMS4xNDMgQyAxNi42OTYgMS4xNDMgMTUuODM3IDIuMTE3IDE1LjgzNyAzLjIxNCBMIDE3LjgzNyAzLjIxNCBaIE0gOS4yMDQgMTIuODU3IEMgOS4yMDQgMTMuNTM1IDguNjkzIDE0IDguMTYzIDE0IEwgOC4xNjMgMTYgQyA5Ljg4OCAxNiAxMS4yMDQgMTQuNTQ2IDExLjIwNCAxMi44NTcgTCA5LjIwNCAxMi44NTcgWiBNIDguMTYzIDE0IEMgNy42MzQgMTQgNy4xMjIgMTMuNTM1IDcuMTIyIDEyLjg1NyBMIDUuMTIyIDEyLjg1NyBDIDUuMTIyIDE0LjU0NiA2LjQzOCAxNiA4LjE2MyAxNiBMIDguMTYzIDE0IFogTSA3LjEyMiAxMi44NTcgQyA3LjEyMiAxMi4xNzkgNy42MzQgMTEuNzE0IDguMTYzIDExLjcxNCBMIDguMTYzIDkuNzE0IEMgNi40MzggOS43MTQgNS4xMjIgMTEuMTY4IDUuMTIyIDEyLjg1NyBMIDcuMTIyIDEyLjg1NyBaIE0gOC4xNjMgMTEuNzE0IEMgOC42OTMgMTEuNzE0IDkuMjA0IDEyLjE3OSA5LjIwNCAxMi44NTcgTCAxMS4yMDQgMTIuODU3IEMgMTEuMjA0IDExLjE2OCA5Ljg4OCA5LjcxNCA4LjE2MyA5LjcxNCBMIDguMTYzIDExLjcxNCBaIE0gMjEuOTU5IDEyLjg1NyBDIDIxLjk1OSAxMy41MzUgMjEuNDQ4IDE0IDIwLjkxOCAxNCBMIDIwLjkxOCAxNiBDIDIyLjY0MyAxNiAyMy45NTkgMTQuNTQ2IDIzLjk1OSAxMi44NTcgTCAyMS45NTkgMTIuODU3IFogTSAyMC45MTggMTQgQyAyMC4zODkgMTQgMTkuODc4IDEzLjUzNSAxOS44NzggMTIuODU3IEwgMTcuODc4IDEyLjg1NyBDIDE3Ljg3OCAxNC41NDYgMTkuMTk0IDE2IDIwLjkxOCAxNiBMIDIwLjkxOCAxNCBaIE0gMTkuODc4IDEyLjg1NyBDIDE5Ljg3OCAxMi4xNzkgMjAuMzg5IDExLjcxNCAyMC45MTggMTEuNzE0IEwgMjAuOTE4IDkuNzE0IEMgMTkuMTk0IDkuNzE0IDE3Ljg3OCAxMS4xNjggMTcuODc4IDEyLjg1NyBMIDE5Ljg3OCAxMi44NTcgWiBNIDIwLjkxOCAxMS43MTQgQyAyMS40NDggMTEuNzE0IDIxLjk1OSAxMi4xNzkgMjEuOTU5IDEyLjg1NyBMIDIzLjk1OSAxMi44NTcgQyAyMy45NTkgMTEuMTY4IDIyLjY0MyA5LjcxNCAyMC45MTggOS43MTQgTCAyMC45MTggMTEuNzE0IFogTSA3LjE0MyAzLjI4NiBMIDAgMy4yODYgTCAwIDUuMjg2IEwgNy4xNDMgNS4yODYgTCA3LjE0MyAzLjI4NiBaIE0gNS4xMDIgNy41NzEgTCAyLjA0MSA3LjU3MSBMIDIuMDQxIDkuNTcxIEwgNS4xMDIgOS41NzEgTCA1LjEwMiA3LjU3MSBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=";
const BB_ICON_SHIELD = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxOS4wNTYiIHZpZXdCb3g9IjAgMCAxNyAxOS4wNTYiIGZpbGw9IndoaXRlIj4KICA8cGF0aCBkPSJNIDE2LjYxOCAzLjA0IEwgMTcuNTg2IDIuNzg5IEMgMTcuNDY3IDIuMzMgMTcuMDQxIDIuMDE3IDE2LjU2NyAyLjA0MSBMIDE2LjYxOCAzLjA0IFogTSA4LjUgMCBMIDkuMTY3IC0wLjc0NSBDIDguNzg3IC0xLjA4NSA4LjIxMyAtMS4wODUgNy44MzMgLTAuNzQ1IEwgOC41IDAgWiBNIDAuMzgyIDMuMDQgTCAwLjQzMyAyLjA0MSBDIC0wLjA0MSAyLjAxNyAtMC40NjcgMi4zMyAtMC41ODYgMi43ODkgTCAwLjM4MiAzLjA0IFogTSA4LjUgMTkuMDU2IEwgOC4xODQgMjAuMDA0IEMgOC4zODkgMjAuMDczIDguNjExIDIwLjA3MyA4LjgxNiAyMC4wMDQgTCA4LjUgMTkuMDU2IFogTSA2LjIwNyA4LjM0OSBDIDUuODE3IDcuOTU4IDUuMTgzIDcuOTU4IDQuNzkzIDguMzQ5IEMgNC40MDIgOC43MzkgNC40MDIgOS4zNzIgNC43OTMgOS43NjMgTCA2LjIwNyA4LjM0OSBaIE0gNy41IDExLjA1NiBMIDYuNzkzIDExLjc2MyBDIDcuMTgzIDEyLjE1MyA3LjgxNyAxMi4xNTMgOC4yMDcgMTEuNzYzIEwgNy41IDExLjA1NiBaIE0gMTIuMjA3IDcuNzYzIEMgMTIuNTk4IDcuMzcyIDEyLjU5OCA2LjczOSAxMi4yMDcgNi4zNDkgQyAxMS44MTcgNS45NTggMTEuMTgzIDUuOTU4IDEwLjc5MyA2LjM0OSBMIDEyLjIwNyA3Ljc2MyBaIE0gMTYuNTY3IDIuMDQxIEMgMTYuMzggMi4wNTEgMTYuMTkgMi4wNTYgMTYgMi4wNTYgTCAxNiA0LjA1NiBDIDE2LjIyNCA0LjA1NiAxNi40NDcgNC4wNSAxNi42NjkgNC4wMzkgTCAxNi41NjcgMi4wNDEgWiBNIDE2IDIuMDU2IEMgMTMuMjI4IDIuMDU2IDExLjE1MiAxLjAzMiA5LjE2NyAtMC43NDUgTCA3LjgzMyAwLjc0NSBDIDEwLjA5NCAyLjc2OSAxMi42MjYgNC4wNTYgMTYgNC4wNTYgTCAxNiAyLjA1NiBaIE0gNy44MzMgLTAuNzQ1IEMgNS44NDggMS4wMzIgMy43NzIgMi4wNTYgMSAyLjA1NiBMIDEgNC4wNTYgQyA0LjM3NSA0LjA1NiA2LjkwNiAyLjc2OSA5LjE2NyAwLjc0NSBMIDcuODMzIC0wLjc0NSBaIE0gMSAyLjA1NiBDIDAuODEgMi4wNTYgMC42MjEgMi4wNTEgMC40MzMgMi4wNDEgTCAwLjMzMiA0LjAzOSBDIDAuNTUzIDQuMDUgMC43NzYgNC4wNTYgMSA0LjA1NiBMIDEgMi4wNTYgWiBNIC0wLjU4NiAyLjc4OSBDIC0wLjg2NCAzLjg2NCAtMSA1LjQ2NiAtMSA2LjU1NiBMIDEgNi41NTYgQyAxIDUuNTYyIDEuMTMgNC4xNDMgMS4zNSAzLjI5IEwgLTAuNTg2IDIuNzg5IFogTSAtMSA2LjU1NiBDIC0xIDkuNDk2IC0wLjM0MyAxMi4zMTcgMS4xNTUgMTQuNjg3IEMgMi42NiAxNy4wNjkgNC45NzcgMTguOTM2IDguMTg0IDIwLjAwNCBMIDguODE2IDE4LjEwNyBDIDYuMDIzIDE3LjE3NiA0LjA5IDE1LjU4OSAyLjg0NSAxMy42MTggQyAxLjU5MyAxMS42MzYgMSA5LjIwNyAxIDYuNTU2IEwgLTEgNi41NTYgWiBNIDguODE2IDIwLjAwNCBDIDEyLjAyMyAxOC45MzYgMTQuMzQgMTcuMDY5IDE1Ljg0NSAxNC42ODcgQyAxNy4zNDMgMTIuMzE3IDE4IDkuNDk2IDE4IDYuNTU2IEwgMTYgNi41NTYgQyAxNiA5LjIwNyAxNS40MDcgMTEuNjM2IDE0LjE1NSAxMy42MTggQyAxMi45MSAxNS41ODggMTAuOTc3IDE3LjE3NiA4LjE4NCAxOC4xMDcgTCA4LjgxNiAyMC4wMDQgWiBNIDE4IDYuNTU2IEMgMTggNS40NjYgMTcuODY0IDMuODY0IDE3LjU4NiAyLjc4OSBMIDE1LjY1IDMuMjkxIEMgMTUuODcxIDQuMTQzIDE2IDUuNTYyIDE2IDYuNTU2IEwgMTggNi41NTYgWiBNIDQuNzkzIDkuNzYzIEwgNi43OTMgMTEuNzYzIEwgOC4yMDcgMTAuMzQ5IEwgNi4yMDcgOC4zNDkgTCA0Ljc5MyA5Ljc2MyBaIE0gOC4yMDcgMTEuNzYzIEwgMTIuMjA3IDcuNzYzIEwgMTAuNzkzIDYuMzQ5IEwgNi43OTMgMTAuMzQ5IEwgOC4yMDcgMTEuNzYzIFoiIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KPC9zdmc+Cg==";
const BB_ICON_LIBRARY = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4IiBmaWxsPSJ3aGl0ZSI+CiAgPHBhdGggZD0iTSAyIDcgQyAyIDYuNDQ4IDEuNTUyIDYgMSA2IEMgMC40NDggNiAwIDYuNDQ4IDAgNyBMIDIgNyBaIE0gMTggNyBDIDE4IDYuNDQ4IDE3LjU1MiA2IDE3IDYgQyAxNi40NDggNiAxNiA2LjQ0OCAxNiA3IEwgMTggNyBaIE0gMTcgMTggTCAxNyAxOSBDIDE3LjU1MiAxOSAxOCAxOC41NTIgMTggMTggTCAxNyAxOCBaIE0gMSAxOCBMIDAgMTggQyAwIDE4LjU1MiAwLjQ0OCAxOSAxIDE5IEwgMSAxOCBaIE0gNi41IDkuNSBMIDYuNSA4LjUgQyA1Ljk0OCA4LjUgNS41IDguOTQ4IDUuNSA5LjUgTCA2LjUgOS41IFogTSA1LjUgMTggQyA1LjUgMTguNTUyIDUuOTQ4IDE5IDYuNSAxOSBDIDcuMDUyIDE5IDcuNSAxOC41NTIgNy41IDE4IEwgNS41IDE4IFogTSAxLjUgMCBMIDEuNSAtMSBDIDEuMDcgLTEgMC42ODcgLTAuNzI1IDAuNTUxIC0wLjMxNiBMIDEuNSAwIFogTSAxMS41IDkuNSBMIDEyLjUgOS41IEMgMTIuNSA4Ljk0OCAxMi4wNTIgOC41IDExLjUgOC41IEwgMTEuNSA5LjUgWiBNIDEwLjUgMTggQyAxMC41IDE4LjU1MiAxMC45NDggMTkgMTEuNSAxOSBDIDEyLjA1MiAxOSAxMi41IDE4LjU1MiAxMi41IDE4IEwgMTAuNSAxOCBaIE0gMTYuNSAwIEwgMTcuNDQ5IC0wLjMxNiBDIDE3LjMxMyAtMC43MjUgMTYuOTMgLTEgMTYuNSAtMSBMIDE2LjUgMCBaIE0gNCA1LjUgQyA0IDQuOTQ4IDMuNTUyIDQuNSAzIDQuNSBDIDIuNDQ4IDQuNSAyIDQuOTQ4IDIgNS41IEwgNCA1LjUgWiBNIDcgNS41IEMgNyA0Ljk0OCA2LjU1MiA0LjUgNiA0LjUgQyA1LjQ0OCA0LjUgNSA0Ljk0OCA1IDUuNSBMIDcgNS41IFogTSAxMCA1LjUgQyAxMCA0Ljk0OCA5LjU1MiA0LjUgOSA0LjUgQyA4LjQ0OCA0LjUgOCA0Ljk0OCA4IDUuNSBMIDEwIDUuNSBaIE0gMTMgNS41IEMgMTMgNC45NDggMTIuNTUyIDQuNSAxMiA0LjUgQyAxMS40NDggNC41IDExIDQuOTQ4IDExIDUuNSBMIDEzIDUuNSBaIE0gMTYgNS41IEMgMTYgNC45NDggMTUuNTUyIDQuNSAxNSA0LjUgQyAxNC40NDggNC41IDE0IDQuOTQ4IDE0IDUuNSBMIDE2IDUuNSBaIE0gMCA0LjUgTCAtMC45NDkgNC4xODQgQyAtMC45ODMgNC4yODYgLTEgNC4zOTMgLTEgNC41IEwgMCA0LjUgWiBNIDE4IDQuNSBMIDE5IDQuNSBDIDE5IDQuMzkzIDE4Ljk4MyA0LjI4NiAxOC45NDkgNC4xODQgTCAxOCA0LjUgWiBNIDE2IDcgTCAxNiAxOCBMIDE4IDE4IEwgMTggNyBMIDE2IDcgWiBNIDE3IDE3IEwgMSAxNyBMIDEgMTkgTCAxNyAxOSBMIDE3IDE3IFogTSAyIDE4IEwgMiA3IEwgMCA3IEwgMCAxOCBMIDIgMTggWiBNIDUuNSA5LjUgTCA1LjUgMTggTCA3LjUgMTggTCA3LjUgOS41IEwgNS41IDkuNSBaIE0gMTAuNSA5LjUgTCAxMC41IDE4IEwgMTIuNSAxOCBMIDEyLjUgOS41IEwgMTAuNSA5LjUgWiBNIDEuNSAxIEwgOC41IDEgTCA4LjUgLTEgTCAxLjUgLTEgTCAxLjUgMSBaIE0gOC41IDEgTCAxNi41IDEgTCAxNi41IC0xIEwgOC41IC0xIEwgOC41IDEgWiBNIDYuNSAxMC41IEwgMTEuNSAxMC41IEwgMTEuNSA4LjUgTCA2LjUgOC41IEwgNi41IDEwLjUgWiBNIC0xIDUuNSBDIC0xIDYuMjcxIC0wLjcwMSA2LjkyMyAtMC4xOTYgNy4zNzIgQyAwLjI5MSA3LjgwNSAwLjkxMiA4IDEuNSA4IEMgMi4wODggOCAyLjcwOSA3LjgwNSAzLjE5NiA3LjM3MiBDIDMuNzAxIDYuOTIzIDQgNi4yNzEgNCA1LjUgTCAyIDUuNSBDIDIgNS43MjkgMS45MjQgNS44MjcgMS44NjcgNS44NzggQyAxLjc5MSA1Ljk0NSAxLjY2MiA2IDEuNSA2IEMgMS4zMzggNiAxLjIwOSA1Ljk0NSAxLjEzMyA1Ljg3OCBDIDEuMDc2IDUuODI3IDEgNS43MjkgMSA1LjUgTCAtMSA1LjUgWiBNIDIgNS41IEMgMiA2LjI3MSAyLjI5OSA2LjkyMyAyLjgwNCA3LjM3MiBDIDMuMjkxIDcuODA1IDMuOTEyIDggNC41IDggQyA1LjA4OCA4IDUuNzA5IDcuODA1IDYuMTk2IDcuMzcyIEMgNi43MDEgNi45MjMgNyA2LjI3MSA3IDUuNSBMIDUgNS41IEMgNSA1LjcyOSA0LjkyNCA1LjgyNyA0Ljg2NyA1Ljg3OCBDIDQuNzkxIDUuOTQ1IDQuNjYyIDYgNC41IDYgQyA0LjMzOCA2IDQuMjA5IDUuOTQ1IDQuMTMzIDUuODc4IEMgNC4wNzYgNS44MjcgNCA1LjcyOSA0IDUuNSBMIDIgNS41IFogTSA1IDUuNSBDIDUgNi4yNzEgNS4yOTkgNi45MjMgNS44MDQgNy4zNzIgQyA2LjI5MSA3LjgwNSA2LjkxMiA4IDcuNSA4IEMgOC4wODggOCA4LjcwOSA3LjgwNSA5LjE5NiA3LjM3MiBDIDkuNzAxIDYuOTIzIDEwIDYuMjcxIDEwIDUuNSBMIDggNS41IEMgOCA1LjcyOSA3LjkyNCA1LjgyNyA3Ljg2NyA1Ljg3OCBDIDcuNzkxIDUuOTQ1IDcuNjYyIDYgNy41IDYgQyA3LjMzOCA2IDcuMjA5IDUuOTQ1IDcuMTMzIDUuODc4IEMgNy4wNzYgNS44MjcgNyA1LjcyOSA3IDUuNSBMIDUgNS41IFogTSA4IDUuNSBDIDggNi4yNzEgOC4yOTkgNi45MjMgOC44MDQgNy4zNzIgQyA5LjI5MSA3LjgwNSA5LjkxMiA4IDEwLjUgOCBDIDExLjA4OCA4IDExLjcwOSA3LjgwNSAxMi4xOTYgNy4zNzIgQyAxMi43MDEgNi45MjMgMTMgNi4yNzEgMTMgNS41IEwgMTEgNS41IEMgMTEgNS43MjkgMTAuOTI0IDUuODI3IDEwLjg2NyA1Ljg3OCBDIDEwLjc5MSA1Ljk0NSAxMC42NjIgNiAxMC41IDYgQyAxMC4zMzggNiAxMC4yMDkgNS45NDUgMTAuMTMzIDUuODc4IEMgMTAuMDc2IDUuODI3IDEwIDUuNzI5IDEwIDUuNSBMIDggNS41IFogTSAxNCA1LjUgQyAxNCA2LjI3MSAxNC4yOTkgNi45MjMgMTQuODA0IDcuMzcyIEMgMTUuMjkxIDcuODA1IDE1LjkxMiA4IDE2LjUgOCBDIDE3LjA4OCA4IDE3LjcwOSA3LjgwNSAxOC4xOTYgNy4zNzIgQyAxOC43MDEgNi45MjMgMTkgNi4yNzEgMTkgNS41IEwgMTcgNS41IEMgMTcgNS43MjkgMTYuOTI0IDUuODI3IDE2Ljg2NyA1Ljg3OCBDIDE2Ljc5MSA1Ljk0NSAxNi42NjIgNiAxNi41IDYgQyAxNi4zMzggNiAxNi4yMDkgNS45NDUgMTYuMTMzIDUuODc4IEMgMTYuMDc2IDUuODI3IDE2IDUuNzI5IDE2IDUuNSBMIDE0IDUuNSBaIE0gMTEgNS41IEMgMTEgNi4yNzEgMTEuMjk5IDYuOTIzIDExLjgwNCA3LjM3MiBDIDEyLjI5MSA3LjgwNSAxMi45MTIgOCAxMy41IDggQyAxNC4wODggOCAxNC43MDkgNy44MDUgMTUuMTk2IDcuMzcyIEMgMTUuNzAxIDYuOTIzIDE2IDYuMjcxIDE2IDUuNSBMIDE0IDUuNSBDIDE0IDUuNzI5IDEzLjkyNCA1LjgyNyAxMy44NjcgNS44NzggQyAxMy43OTEgNS45NDUgMTMuNjYyIDYgMTMuNSA2IEMgMTMuMzM4IDYgMTMuMjA5IDUuOTQ1IDEzLjEzMyA1Ljg3OCBDIDEzLjA3NiA1LjgyNyAxMyA1LjcyOSAxMyA1LjUgTCAxMSA1LjUgWiBNIDAuNTUxIC0wLjMxNiBMIC0wLjk0OSA0LjE4NCBMIDAuOTQ5IDQuODE2IEwgMi40NDkgMC4zMTYgTCAwLjU1MSAtMC4zMTYgWiBNIC0xIDQuNSBMIC0xIDUuNSBMIDEgNS41IEwgMSA0LjUgTCAtMSA0LjUgWiBNIDE1LjU1MSAwLjMxNiBMIDE3LjA1MSA0LjgxNiBMIDE4Ljk0OSA0LjE4NCBMIDE3LjQ0OSAtMC4zMTYgTCAxNS41NTEgMC4zMTYgWiBNIDE3IDQuNSBMIDE3IDUuNSBMIDE5IDUuNSBMIDE5IDQuNSBMIDE3IDQuNSBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=";
const BB_ICON_REPEAT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE2IDE4IiBmaWxsPSJ3aGl0ZSI+CiAgPHBhdGggZD0iTSAtMSA5IEMgLTEgOS41NTIgLTAuNTUyIDEwIDAgMTAgQyAwLjU1MiAxMCAxIDkuNTUyIDEgOSBMIC0xIDkgWiBNIDMgMyBMIDMgMiBMIDMgMyBaIE0gMTYgMyBMIDE2LjcwNyAzLjcwNyBDIDE3LjA5OCAzLjMxNyAxNy4wOTggMi42ODMgMTYuNzA3IDIuMjkzIEwgMTYgMyBaIE0gMTMuNzA3IC0wLjcwNyBDIDEzLjMxNyAtMS4wOTggMTIuNjgzIC0xLjA5OCAxMi4yOTMgLTAuNzA3IEMgMTEuOTAyIC0wLjMxNyAxMS45MDIgMC4zMTcgMTIuMjkzIDAuNzA3IEwgMTMuNzA3IC0wLjcwNyBaIE0gMTIuMjkzIDUuMjkzIEMgMTEuOTAyIDUuNjgzIDExLjkwMiA2LjMxNyAxMi4yOTMgNi43MDcgQyAxMi42ODMgNy4wOTggMTMuMzE3IDcuMDk4IDEzLjcwNyA2LjcwNyBMIDEyLjI5MyA1LjI5MyBaIE0gMTcgOSBDIDE3IDguNDQ4IDE2LjU1MiA4IDE2IDggQyAxNS40NDggOCAxNSA4LjQ0OCAxNSA5IEwgMTcgOSBaIE0gMTYgMTIgTCAxNyAxMiBMIDE2IDEyIFogTSAxMyAxNSBMIDEzIDE2IEwgMTMgMTUgWiBNIDAgMTUgTCAtMC43MDcgMTQuMjkzIEMgLTEuMDk4IDE0LjY4MyAtMS4wOTggMTUuMzE3IC0wLjcwNyAxNS43MDcgTCAwIDE1IFogTSAyLjI5MyAxOC43MDcgQyAyLjY4MyAxOS4wOTggMy4zMTcgMTkuMDk4IDMuNzA3IDE4LjcwNyBDIDQuMDk4IDE4LjMxNyA0LjA5OCAxNy42ODMgMy43MDcgMTcuMjkzIEwgMi4yOTMgMTguNzA3IFogTSAzLjcwNyAxMi43MDcgQyA0LjA5OCAxMi4zMTcgNC4wOTggMTEuNjgzIDMuNzA3IDExLjI5MyBDIDMuMzE3IDEwLjkwMiAyLjY4MyAxMC45MDIgMi4yOTMgMTEuMjkzIEwgMy43MDcgMTIuNzA3IFogTSAxIDkgTCAxIDYgTCAtMSA2IEwgLTEgOSBMIDEgOSBaIE0gMSA2IEMgMSA1LjQ3IDEuMjExIDQuOTYxIDEuNTg2IDQuNTg2IEwgMC4xNzIgMy4xNzIgQyAtMC41NzkgMy45MjIgLTEgNC45MzkgLTEgNiBMIDEgNiBaIE0gMS41ODYgNC41ODYgQyAxLjk2MSA0LjIxMSAyLjQ3IDQgMyA0IEwgMyAyIEMgMS45MzkgMiAwLjkyMiAyLjQyMSAwLjE3MiAzLjE3MiBMIDEuNTg2IDQuNTg2IFogTSAzIDQgTCAxNiA0IEwgMTYgMiBMIDMgMiBMIDMgNCBaIE0gMTIuMjkzIDAuNzA3IEwgMTUuMjkzIDMuNzA3IEwgMTYuNzA3IDIuMjkzIEwgMTMuNzA3IC0wLjcwNyBMIDEyLjI5MyAwLjcwNyBaIE0gMTUuMjkzIDIuMjkzIEwgMTIuMjkzIDUuMjkzIEwgMTMuNzA3IDYuNzA3IEwgMTYuNzA3IDMuNzA3IEwgMTUuMjkzIDIuMjkzIFogTSAxNSA5IEwgMTUgMTIgTCAxNyAxMiBMIDE3IDkgTCAxNSA5IFogTSAxNSAxMiBDIDE1IDEyLjUzIDE0Ljc4OSAxMy4wMzkgMTQuNDE0IDEzLjQxNCBMIDE1LjgyOCAxNC44MjggQyAxNi41NzkgMTQuMDc4IDE3IDEzLjA2MSAxNyAxMiBMIDE1IDEyIFogTSAxNC40MTQgMTMuNDE0IEMgMTQuMDM5IDEzLjc4OSAxMy41MyAxNCAxMyAxNCBMIDEzIDE2IEMgMTQuMDYxIDE2IDE1LjA3OCAxNS41NzkgMTUuODI4IDE0LjgyOCBMIDE0LjQxNCAxMy40MTQgWiBNIDEzIDE0IEwgMCAxNCBMIDAgMTYgTCAxMyAxNiBMIDEzIDE0IFogTSAzLjcwNyAxNy4yOTMgTCAwLjcwNyAxNC4yOTMgTCAtMC43MDcgMTUuNzA3IEwgMi4yOTMgMTguNzA3IEwgMy43MDcgMTcuMjkzIFogTSAwLjcwNyAxNS43MDcgTCAzLjcwNyAxMi43MDcgTCAyLjI5MyAxMS4yOTMgTCAtMC43MDcgMTQuMjkzIEwgMC43MDcgMTUuNzA3IFoiIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KPC9zdmc+Cg==";
Object.assign(window, {
  BB_ICON_TRUCK,
  BB_ICON_SHIELD,
  BB_ICON_LIBRARY,
  BB_ICON_REPEAT
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/LogoData.js", error: String((e && e.message) || e) }); }

// ui_kits/webshop/ProductCard.jsx
try { (() => {
// ProductCard.jsx — Big Bang Grid Product Card

Object.assign(window, {
  BBProductCard
});
function BBProductCard({
  product,
  onAddToCart
}) {
  const [wished, setWished] = React.useState(false);
  const {
    name,
    specs,
    price,
    oldPrice,
    discount,
    badge,
    rating,
    reviewCount,
    inStock = true,
    freeShipping = true,
    seller = 'Big Bang',
    promoCode
  } = product;
  return /*#__PURE__*/React.createElement("div", {
    style: cardStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 180,
      background: '#F3F3F3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#D2D2D7",
    strokeWidth: "1.2"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "21 15 16 10 5 21"
  })), discount && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8,
      background: '#DA0D00',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      padding: '3px 8px',
      borderRadius: 5
    }
  }, "-", discount, "%"), badge === 'bang' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 8,
      left: 8,
      background: '#F65F04',
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      padding: '2px 7px',
      borderRadius: 5
    }
  }, "Bang Cijena"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setWished(w => !w),
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: wished ? '#DA0D00' : 'none',
    stroke: wished ? '#DA0D00' : '#545F71',
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21C12 21 3 14 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 13-9 13z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 12px 8px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#101117',
      lineHeight: 1.35,
      marginBottom: 3
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: '#545F71',
      lineHeight: 1.5,
      marginBottom: 6
    }
  }, specs), rating && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FFC857',
      fontSize: 12,
      lineHeight: 1
    }
  }, '★'.repeat(Math.round(rating)), '☆'.repeat(5 - Math.round(rating))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9B9EAB',
      fontSize: 10
    }
  }, rating, " (", reviewCount, ")")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      marginBottom: 0
    }
  }, inStock ? /*#__PURE__*/React.createElement("div", {
    style: {
      ...metaRowStyle,
      color: '#1FB549'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#1FB549",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 12 11 14 15 10"
  })), /*#__PURE__*/React.createElement("span", null, "Na zalihi", freeShipping ? ' · Besplatna dostava' : '')) : /*#__PURE__*/React.createElement("div", {
    style: {
      ...metaRowStyle,
      color: '#DA0D00'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#DA0D00",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  })), /*#__PURE__*/React.createElement("span", null, "Nije dostupno")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...metaRowStyle,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#545F71",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l1-6h16l1 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9v11h14V9"
  })), /*#__PURE__*/React.createElement("span", null, "Trgovac: ", seller))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: '#DA0D00'
    }
  }, price), oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#9B9EAB',
      textDecoration: 'line-through'
    }
  }, oldPrice)), promoCode && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#1FB549',
      color: '#000',
      fontSize: 11,
      fontWeight: 700,
      padding: '4px 12px',
      borderRadius: 6,
      marginTop: 4,
      display: 'inline-block'
    }
  }, promoCode))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 12px 12px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onAddToCart && onAddToCart(product),
    disabled: !inStock,
    style: {
      width: '100%',
      height: 40,
      background: '#fff',
      color: inStock ? '#0050A0' : '#B6B6B6',
      border: `2px solid ${inStock ? '#0050A0' : '#B6B6B6'}`,
      borderRadius: 20,
      fontFamily: 'Inter,sans-serif',
      fontSize: 13,
      fontWeight: 700,
      cursor: inStock ? 'pointer' : 'not-allowed',
      transition: 'all 0.2s'
    },
    onMouseEnter: e => {
      if (inStock) {
        e.currentTarget.style.background = '#0050A0';
        e.currentTarget.style.color = '#fff';
      }
    },
    onMouseLeave: e => {
      if (inStock) {
        e.currentTarget.style.background = '#fff';
        e.currentTarget.style.color = '#0050A0';
      }
    }
  }, inStock ? 'Dodaj u košaricu' : 'Nedostupno')));
}
const cardStyle = {
  background: '#fff',
  borderRadius: 12,
  overflow: 'hidden',
  border: '1px solid #F1F1F4',
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
};
const metaRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 5,
  fontSize: 11,
  color: '#545F71',
  lineHeight: 1.4
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webshop/ProductCard.jsx", error: String((e && e.message) || e) }); }

})();
