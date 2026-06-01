// Territorios parroquiales de Pinto
// Coordenadas en formato GeoJSON [longitud, latitud]
// Todos los límites — inter-parroquiales y perímetros municipales — son precisos.

const TERRITORIOS_GEOJSON = {
  type: "FeatureCollection",
  features: [

    // ── Santo Domingo de Silos ────────────────────────────────────────
    {
      type: "Feature",
      properties: {
        id:     "sds",
        nombre: "Santo Domingo de Silos",
        color:  "#1a3a5c",
        clase:  "sds",
        tel:    "91 691 36 25",
        href:   "santo-domingo/index.html"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          // Frontera SDS/SFJ — puntos precisos (O → E)
          [-3.73698, 40.24252],   // límite municipal O — inicio frontera SDS/SFJ
          [-3.73282, 40.24370],   // frontera SDS/SFJ (tramo O-1)
          [-3.72840, 40.24365],   // frontera SDS/SFJ (tramo O-2)
          [-3.72181, 40.24465],   // frontera SDS/SFJ (tramo O-3)
          [-3.71716, 40.24509],   // frontera SDS/SFJ (tramo O-4)
          [-3.713701, 40.245083], // Calle Águilas
          [-3.707381, 40.246319], // Paseo de las Artes
          [-3.702435, 40.247384], // Calle Cataluña (tramo O)
          [-3.701320, 40.248022], // Calle Cataluña (tramo E)
          [-3.698906, 40.249873], // final Calle Cataluña
          [-3.695033, 40.248211], // Calle Cataluña (tramo medio)
          [-3.69336, 40.24617],   // confluencia — Rotonda Guardia Civil
          // Frontera SDS/SJ — puntos precisos (C/ San Juan, C/ Infanta Isabel, C/ San Martín, Av. España, C/ Pedro Faura, C/ Torrejón, C/ Fernando VII)
          [-3.693380, 40.245938],
          [-3.694110, 40.245205],
          [-3.695676, 40.242474],
          [-3.695939, 40.242208], // Calle San Juan
          [-3.696052, 40.242290],
          [-3.696567, 40.241520], // Calle Infanta Isabel
          [-3.696438, 40.241340],
          [-3.697677, 40.241549], // Calle San Martín
          [-3.697766, 40.241524],
          [-3.697817, 40.240832],
          [-3.698726, 40.239796],
          [-3.699262, 40.239534],
          [-3.700255, 40.239338], // Av. España
          [-3.701647, 40.240691], // Calle Pedro Faura
          [-3.703498, 40.239825],
          [-3.703924, 40.239499], // Calle Torrejón
          [-3.703669, 40.238772],
          [-3.703487, 40.238175],
          [-3.703101, 40.237347],
          [-3.702382, 40.236365],
          [-3.701642, 40.235537],
          [-3.701465, 40.235316], // Calle Fernando VII
          [-3.701186, 40.235492],
          [-3.69184,  40.22676],
          [-3.69005,  40.22455],
          [-3.68943,  40.22298],
          [-3.68892,  40.22144],
          [-3.68810,  40.21991],
          [-3.68688,  40.21872],
          [-3.68602,  40.21816],
          [-3.68480,  40.21749],  // límite municipal SE
          // Límite municipal S/SO — puntos precisos
          [-3.69510, 40.20680],
          [-3.74754, 40.20720],
          [-3.74187, 40.24121],
          // Cierre (tramo O hasta inicio frontera SDS/SFJ)
          [-3.73698, 40.24252]
        ]]
      }
    },

    // ── San José ──────────────────────────────────────────────────────
    {
      type: "Feature",
      properties: {
        id:     "sj",
        nombre: "San José",
        color:  "#2e5c3a",
        clase:  "sj",
        tel:    "91 691 28 73",
        href:   "san-jose/index.html"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          // Frontera SFJ/SJ — puntos precisos (O → E)
          [-3.69336, 40.24617],   // confluencia — Rotonda Guardia Civil
          [-3.689926, 40.245664],
          [-3.687887, 40.244575], // frontera SFJ/SJ (tramo medio)
          [-3.683971, 40.241655], // ramal enlace A-4/M-506
          [-3.68154, 40.24149],
          [-3.67922, 40.24103],
          [-3.67776, 40.24008],
          [-3.67602, 40.23896],
          [-3.66999, 40.23723],
          [-3.66647, 40.23644],
          [-3.66362, 40.23492],
          [-3.66085, 40.23392],
          [-3.65740, 40.23238],
          [-3.64918, 40.23059],
          [-3.64433, 40.22902],   // límite municipal E
          // Límite municipal E/SE — puntos precisos
          [-3.66737, 40.21972],
          [-3.67630, 40.21965],
          [-3.68480, 40.21749],   // límite municipal SE — inicio frontera SDS/SJ
          // Frontera SDS/SJ — puntos precisos (S → N)
          [-3.68602,  40.21816],
          [-3.68688,  40.21872],
          [-3.68810,  40.21991],
          [-3.68892,  40.22144],
          [-3.68943,  40.22298],
          [-3.69005,  40.22455],
          [-3.69184,  40.22676],
          [-3.701186, 40.235492],
          [-3.701465, 40.235316], // Calle Fernando VII
          [-3.701642, 40.235537],
          [-3.702382, 40.236365],
          [-3.703101, 40.237347],
          [-3.703487, 40.238175],
          [-3.703669, 40.238772],
          [-3.703924, 40.239499], // Calle Torrejón
          [-3.703498, 40.239825],
          [-3.701647, 40.240691], // Calle Pedro Faura
          [-3.700255, 40.239338], // Av. España
          [-3.699262, 40.239534],
          [-3.698726, 40.239796],
          [-3.697817, 40.240832],
          [-3.697766, 40.241524],
          [-3.697677, 40.241549], // Calle San Martín
          [-3.696438, 40.241340],
          [-3.696567, 40.241520], // Calle Infanta Isabel
          [-3.696052, 40.242290],
          [-3.695939, 40.242208], // Calle San Juan
          [-3.695676, 40.242474],
          [-3.694110, 40.245205],
          [-3.693380, 40.245938],
          // Cierre
          [-3.69336, 40.24617]
        ]]
      }
    },

    // ── San Francisco Javier ──────────────────────────────────────────
    {
      type: "Feature",
      properties: {
        id:     "sfj",
        nombre: "San Francisco Javier",
        color:  "#7a3030",
        clase:  "sfj",
        tel:    "91 691 82 23",
        href:   "san-francisco-javier/index.html"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          // Límite exterior SFJ — puntos precisos (O → N → NE → E → SE)
          [-3.73698, 40.24252],
          [-3.73484, 40.25497],
          [-3.74093, 40.25588],
          [-3.73887, 40.27439],
          [-3.72115, 40.27016],
          [-3.70377, 40.27095],
          [-3.69076, 40.27275],
          [-3.67403, 40.27743],
          [-3.64806, 40.29445],
          [-3.61862, 40.27101],
          [-3.63369, 40.25569],
          [-3.64433, 40.22902],   // límite municipal E — inicio frontera SFJ/SJ
          // Frontera SFJ/SJ — puntos precisos (E → O)
          [-3.64918, 40.23059],
          [-3.65740, 40.23238],
          [-3.66085, 40.23392],
          [-3.66362, 40.23492],
          [-3.66647, 40.23644],
          [-3.66999, 40.23723],
          [-3.67602, 40.23896],
          [-3.67776, 40.24008],
          [-3.67922, 40.24103],
          [-3.68154, 40.24149],
          [-3.683971, 40.241655], // ramal enlace A-4/M-506
          [-3.687887, 40.244575], // frontera SFJ/SJ (tramo medio)
          [-3.689926, 40.245664],
          [-3.69336, 40.24617],   // confluencia — Rotonda Guardia Civil
          // Frontera SFJ/SDS — puntos precisos (E → O)
          [-3.695033, 40.248211], // Calle Cataluña (tramo medio)
          [-3.698906, 40.249873], // final Calle Cataluña
          [-3.701320, 40.248022], // Calle Cataluña (tramo E)
          [-3.702435, 40.247384], // Calle Cataluña (tramo O)
          [-3.707381, 40.246319], // Paseo de las Artes
          [-3.713701, 40.245083], // Calle Águilas
          [-3.71716, 40.24509],   // frontera SDS/SFJ (tramo O-4)
          [-3.72181, 40.24465],   // frontera SDS/SFJ (tramo O-3)
          [-3.72840, 40.24365],   // frontera SDS/SFJ (tramo O-2)
          [-3.73282, 40.24370],   // frontera SDS/SFJ (tramo O-1)
          [-3.73698, 40.24252]    // cierre
        ]]
      }
    }

  ]
};

// Marcadores de las iglesias
const IGLESIAS = [
  { nombre: "Parroquia de Santo Domingo de Silos", lat: 40.243113, lng: -3.697994, color: "#1a3a5c" },
  { nombre: "Parroquia de San José",               lat: 40.240660, lng: -3.696175, color: "#2e5c3a" },
  { nombre: "Parroquia de San Francisco Javier",   lat: 40.254004, lng: -3.699029, color: "#7a3030" }
];
