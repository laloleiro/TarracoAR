// El ORDEN de esta lista = el orden de las imágenes al compilar targets.mind
// Coordenadas APROXIMADAS: ajústalas en openstreetmap.org (clic derecho > "Mostrar dirección")
const POINTS = [
  { id: "amfiteatre", lat: 41.1139, lng: 1.2596, model: "models/amfiteatre.glb",
    name: { ca: "Amfiteatre", es: "Anfiteatro", en: "Amphitheatre" },
    text: {
      ca: "Patrimoni Mundial de la UNESCO. Es va edificar a la segona meitat del segle I dC i es va reformar l'any 221.",
      es: "Patrimonio Mundial de la UNESCO. Se edificó en la segunda mitad del siglo I d.C. y se reformó en el año 221.",
      en: "UNESCO World Heritage site. Built in the second half of the 1st century AD and renovated in 221." } },
  { id: "circ", lat: 41.1171, lng: 1.2583, model: "models/circ.glb",
    name: { ca: "Circ romà", es: "Circo romano", en: "Roman Circus" },
    text: {
      ca: "Aquí es disputaven curses de carros. Es va construir a finals del segle I dC i el seu estat de conservació és excepcional.",
      es: "Aquí se disputaban carreras de carros. Se construyó a finales del siglo I d.C. y su estado de conservación es excepcional.",
      en: "Chariot races were held here. Built in the late 1st century AD, it is exceptionally well preserved." } },
  { id: "muralla", lat: 41.1190, lng: 1.2555, model: "models/muralla.glb",
    name: { ca: "Passeig Arqueològic", es: "Paseo Arqueológico", en: "Archaeological Walk" },
    text: {
      ca: "Les muralles de Tarragona són la construcció romana més antiga conservada fora d'Itàlia.",
      es: "Las murallas de Tarragona son la construcción romana más antigua conservada fuera de Italia.",
      en: "Tarragona's walls are the oldest surviving Roman construction outside Italy." } },
  { id: "forum", lat: 41.1163, lng: 1.2528, model: "models/forum.glb",
    name: { ca: "Fòrum de la Colònia", es: "Foro de la Colonia", en: "Colony Forum" },
    text: {
      ca: "Va ser el centre neuràlgic de Tàrraco, construït cap a l'any 30 aC. Només se'n conserva una part de la basílica.",
      es: "Fue el centro neurálgico de Tàrraco, construido hacia el año 30 a.C. Solo se conserva una parte de la basílica.",
      en: "The nerve centre of Tàrraco, built around 30 BC. Only part of the basilica survives." } }
];

const UI = {
  title: { ca: "Tàrraco en realitat augmentada", es: "Tàrraco en realidad aumentada", en: "Tàrraco in augmented reality" },
  open:  { ca: "Veure en AR", es: "Ver en AR", en: "View in AR" },
  back:  { ca: "Torna al mapa", es: "Volver al mapa", en: "Back to map" },
  hint:  { ca: "Apunta la càmera al cartell d'aquest punt.", es: "Apunta la cámara al cartel de este punto.", en: "Point your camera at this stop's poster." },
  privacy: {
    ca: "La càmera només s'utilitza per detectar el cartell. No es grava ni s'envia cap imatge.",
    es: "La cámara se usa solo para detectar el cartel. No se graba ni se envía ninguna imagen.",
    en: "The camera is only used to detect the poster. No image is recorded or sent." }
};

function getLang() {
  const q = new URLSearchParams(location.search).get("l");
  const n = navigator.language.slice(0, 2);
  return ["ca", "es", "en"].includes(q) ? q : ["ca", "es", "en"].includes(n) ? n : "ca";
}
