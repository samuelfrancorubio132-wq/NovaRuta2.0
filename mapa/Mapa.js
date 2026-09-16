// Obtener ubicación del usuario
navigator.geolocation.getCurrentPosition(function (position) {
    const userLat = position.coords.latitude;
    const userLng = position.coords.longitude;

    // Crear mapa centrado en la ubicación del usuario
    const map = L.map('map').setView([userLat, userLng], 13);

    // Agregar capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors',
        maxZoom: 19, // Establece el máximo nivel de zoom permitido
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
    }).addTo(map);

    // Agregar marcador en la ubicación del usuario
    L.marker([userLat, userLng]).addTo(map);

    // Obtener datos de rutas y agregar al mapa
    fetch('https://services6.arcgis.com/PtpS85InlUyG2Gqs/arcgis/rest/services/Rutas_Servicio_Publico/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson')
        .then(response => response.json())
        .then(data => {
            console.log('Datos recibidos:', data);
            let selectedLayers = []; // Variable para almacenar las capas seleccionadas
            const mapLayer = L.geoJSON(data, {
                style: function (feature) {
                    const colors = ['#FF0000', '#00FF00', '#0000FF',]; // Colores disponibles
                    const index = feature.id % colors.length; // Calcular índice basado en el FID
                    return {
                        color: colors[index], // Usar el color correspondiente
                        weight: 4,
                    };
                },
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.ROUTE_ID && feature.properties.NOMBRE_RUT) {
                        layer.bindPopup("Ruta: " + feature.properties.ROUTE_ID + "<br>Nombre: " + feature.properties.NOMBRE_RUT + "<br>Empresa: " + feature.properties.EMPRESA + "<br>Vehículo: " + feature.properties.VEHICULO);
                        layer.on('click', function () {
                            // Restablecer el estilo de las capas seleccionadas previamente
                            selectedLayers.forEach(l => {
                                l.setStyle({
                                    color: '#ff0000',
                                    weight: 4,
                                });
                            });
                            // Obtener todas las capas de características de la ruta seleccionada
                            const layers = mapLayer.getLayers().filter(l => l.feature.properties.ROUTE_ID === feature.properties.ROUTE_ID);
                            // Aplicar un estilo diferente a cada capa
                            layers.forEach(l => {
                                l.setStyle({
                                    color: '#00ff00',
                                    weight: 6,
                                }).bringToFront();
                                selectedLayers.push(l); // Agregar la capa seleccionada a la lista de capas seleccionadas
                            });
                        });
                    }
                },
            }).addTo(map);
            // Restablecer el estilo de las capas seleccionadas previamente cuando se hace clic en otra parte del mapa
            map.on('click', function () {
                selectedLayers.forEach(l => {
                    l.setStyle({
                        color: '#ff0000',
                        weight: 4,
                    });
                });
                selectedLayers = []; // Limpiar la lista de capas seleccionadas
            });
        })
        .catch(error => {
            console.log('Hubo un error:', error);
        });
}); // Cierra la función que obtiene la ubicación del usuario