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
          [-3.713701, 40.245083], // Calle Águilas
          [-3.707381, 40.246319], // Paseo de las Artes
          [-3.698906, 40.249873], // final Calle Cataluña
          [-3.69336, 40.24617],   // confluencia — Rotonda Guardia Civil
          // Frontera SDS/SJ — puntos precisos (C/ San Juan, C/ Infanta Isabel, C/ San Martín, Av. España, C/ Pedro Faura, C/ Torrejón, C/ Fernando VII)
          [-3.695939, 40.242208], // Calle San Juan
          [-3.696052, 40.242290],
          [-3.696567, 40.241520], // Calle Infanta Isabel
          [-3.696438, 40.241340],
          [-3.697677, 40.241549], // Calle San Martín
          [-3.700212, 40.239204], // Av. España
          [-3.701647, 40.240691], // Calle Pedro Faura
          [-3.703924, 40.239499], // Calle Torrejón
          [-3.701465, 40.235316], // Calle Fernando VII
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
          [-3.683971, 40.241655], // ramal enlace A-4/M-506
          [-3.64433, 40.22902],   // límite municipal E
          // Límite municipal E/SE — puntos precisos
          [-3.66737, 40.21972],
          [-3.67630, 40.21965],
          [-3.68480, 40.21749],   // límite municipal SE — inicio frontera SDS/SJ
          // Frontera SDS/SJ — puntos precisos (S → N)
          [-3.701465, 40.235316], // Calle Fernando VII
          [-3.703924, 40.239499], // Calle Torrejón
          [-3.701647, 40.240691], // Calle Pedro Faura
          [-3.700212, 40.239204], // Av. España
          [-3.697677, 40.241549], // Calle San Martín
          [-3.696438, 40.241340],
          [-3.696567, 40.241520], // Calle Infanta Isabel
          [-3.696052, 40.242290],
          [-3.695939, 40.242208], // Calle San Juan
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
          [-3.683971, 40.241655], // ramal enlace A-4/M-506
          [-3.689926, 40.245664],
          [-3.69336, 40.24617],   // confluencia — Rotonda Guardia Civil
          // Frontera SFJ/SDS — puntos precisos (E → O)
          [-3.698906, 40.249873], // final Calle Cataluña
          [-3.707381, 40.246319], // Paseo de las Artes
          [-3.713701, 40.245083], // Calle Águilas
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
