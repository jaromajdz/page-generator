export const cities =[
  {
    filter: "Knonaueramt(ZH) Zürich 29575",
    options: [
    "Aeugst am Albis",
    "Affoltern am Albis",
    "Bonstetten",
    "Hausen am Albis",
    "Hedingen",
    "Kappel am Albis",
    "Knonau",
    "Maschwanden",
    "Mettmenstetten",
    "Obfelden",
    "Ottenbach",
    "Rifferswil",
    "Stallikon",
    "Wettswil am Albis"
    ]
},
{
    filter: "Rontal(LU) Luzern 29576",
    options: [
      "Inwil",
      "Buchrain",
      "Dierikon",
      "Ebikon",
      "Gisikon",
      "Greppen",
      "Honau",
      "Root",
      "Udligenswil",
    ]
},
  {
    filter: "Talkessel Schwyz Schwyz 29577",
    options: [
              "Gersau",
              "Immensee",
              "Merlischachen",
              "Küssnacht(SZ)",
              "Arth",
              "Oberarth",
              "Goldau",
              "Ingenbohl",
              "Brunnen",
              "Lauerz",
              "Sewen",
              "Schwyz",
              "Steinen",
              "Steinerberg"
    ]
  },
  {
   filter: "Zug Berggemeinden Zug 29578",
   options: [
      "Baar",
      "Cham",
      "Zug",
     ]
  },
{
  filter: "Zug Talgemeinden Zug 29579",
  options: [
    "Hünenberg",
    "Menzingen",
    "Neuheim",
    "Oberägeri",
    "Risch",
    "Steinhausen",
    "Unterägeri",
    "Walchwil",
]
},
  {
    filter: "Oberes Freiamt(AG) Aargau 29580",
    options: [
      "Abtwil",
      "Aristau",
      "Auw",
      "Beinwil",
      "Besenbüren",
      "Bettwil",
      "Boswil",
      "Bünzen",
      "Buttwil",
      "Dietwil",
      "Geltwil",
      "Kallern",
      "Merenschwand",
      "Mühlau",
      "Muri (AG)",
      "Oberrüti",
      "Rottenschwil",
      "Sins",
      "Waltenschwil"
    ]
  }
]
export const canton = [
  {label: "Zürich", value: "Zürich", filter: "Knonaueramt(ZH) Zürich"},
  {label: "Luzern", value: "Luzern",filter: "Rontal(LU) Luzern"},
  {label: "Schwyz", value: "Schwyz", filter: "Talkessel Schwyz Schwyz"},
  {label: "Zug",value: "Zug", filter: "Talgemeinden Zug"},
  {label: "Aargau", value: "Aargau", filter: "Oberes Freiamt(AG) Aargau"}
]

export const regions = [
  {label: 'Knonaueramt(ZH)', value: 29575, filter: 'Zürich' },
  {label: 'Oberes Freiamt(AG)', value: 29580, filter: 'Aargau'},
  {label: 'Rontal (LU)', value: 29576, filter: 'Luzern' },
  {label: 'Talkessel Schwyz', value: 29577, filter: 'Schwyz'},
  {label: 'Zug Berggemeinden', value: 29578, filter: 'Zug' },
  {label: 'Zug Talgemeinden', value: 29579, filter:'Zug' }
]

/* old version
export const regions = [
  {label: 'Knonaueramt(ZH)', value: 'Knonaueramt(ZH)', filter: 'Zürich' },
  {label: 'Oberes Freiamt(AG)', value: 'Oberes Freiamt(AG)', filter: 'Argau'},
  {label: 'Rontal (LU)', value: 'Rontal(LU)', filter: 'Luzern' },
  {label: 'Talkessel Schwyz', value: 'Talkessel Schwyz', filter: 'Schwyz'},
  {label: 'Zug Berggemeinden', value: 'Zug Berggemeinden', filter: 'Zug' },
  {label: 'Zug Talgemeinden', value: 'Zug Talgemeinden', filter:'Zug' }
]
*/

export const cities_post_code = [
  [8914,'Aeugst am Albis'],
  [8910,'Affoltern am Albis'],
  [8906,'Bonstetten'],
  [8915,'Hausen am Albis'],
  [8908 ,'Hedingen'],
  [8926,'Kappel am Albis'],
  [8934,'Knonau'],
  [8933,'Maschwanden'],
  [8932,'Mettmenstetten'],
  [8912,'Obfelden'],
  [8913,'Ottenbach'],
  [8911,'Rifferswil'],
  [8143,'Stallikon'],
  [8907,'Wettswil am Albis'],
  [6038,'Inwil'],
  [6033,'Buchrain'],
  [6036,'Dierikon'],
  [6030,'Ebikon'],
  [6038,'Gisikon'],
  [6404,'Greppen'],
  [6038,'Honau'],
  [6037,'Root'],
  [6044,'Udligenswil'],
  [6442,'Gersau'],
  [6405,'Immensee'],
  [6402,'Merlischachen'],
  [6403,'Küssnacht(SZ)'],
  [6415,'Arth'],
  [6414,'Oberarth'],
  [6410,'Goldau'],
  [6440,'Brunnen'],
  [6424,'Lauerz'],
  [6423,'Sewen'],
  [6430,'Schwyz'],
  [6422,'Steinen'],
  [6416,'Steinerberg'],
  [6340,'Baar'],
  [6330,'Cham'],
  [6331,'Hünenberg'],
  [6313,'Menzingen'],
  [6345,'Neuheim'],
  [6315,'Oberägeri'],
  [6343,'Risch'],
  [6312,'Steinhausen'],
  [6314,'Unterägeri'],
  [6318,'Walchwil'],
  [6300,'Zug'],
  [5646,'Abtwil'],
  [5628,'Aristau'],
  [5544,'Auw'],
  [5637,'Beinwil(Freiamt)'],
  [5627,'Besenbüren'],
  [5618,'Bettwil'],
  [5623,'Boswil'],
  [5624,'Bünzen'],
  [5632,'Buttwil'],
  [6042,'Dietwil'],
  [5637,'Geltwil'],
  [5625,'Kallern'],
  [5634,'Merenschwand'],
  [5642,'Mühlau'],
  [5630,'Muri(AG)'],
  [5647,'Oberrüti'],
  [8919,'Rottenschwil'],
  [5643,'Sins'],
  [5622,'Waltenschwil'],
]
