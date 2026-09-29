navigator.geolocation.getCurrentPosition(function (position) {
    const userLat = position.coords.latitude;
    const userLng = position.coords.longitude;

    const map = L.map('map').setView([userLat, userLng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors',
        maxZoom: 19,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
    }).addTo(map);

    L.marker([userLat, userLng]).addTo(map);

    fetch('https://services6.arcgis.com/PtpS85InlUyG2Gqs/arcgis/rest/services/Rutas_Servicio_Publico/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson')
        .then(response => response.json())
        .then(data => {
            console.log('Datos recibidos:', data);
            let selectedLayers = [];
            const mapLayer = L.geoJSON(data, {
                style: function (feature) {
                    const colors = ['#FF0000', '#00FF00', '#0000FF',];
                    const index = feature.id % colors.length;
                    return {
                        color: colors[index],
                        weight: 4,
                    };
                },
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.ROUTE_ID && feature.properties.NOMBRE_RUT) {
                        layer.bindPopup("Ruta: " + feature.properties.ROUTE_ID + "<br>Nombre: " + feature.properties.NOMBRE_RUT + "<br>Empresa: " + feature.properties.EMPRESA + "<br>Vehículo: " + feature.properties.VEHICULO);
                        layer.on('click', function () {
                            selectedLayers.forEach(l => {
                                l.setStyle({
                                    color: '#ff0000',
                                    weight: 4,
                                });
                            });
                            const layers = mapLayer.getLayers().filter(l => l.feature.properties.ROUTE_ID === feature.properties.ROUTE_ID);
                            layers.forEach(l => {
                                l.setStyle({
                                    color: '#00ff00',
                                    weight: 6,
                                }).bringToFront();
                                selectedLayers.push(l);
                            });
                        });
                    }
                },
            }).addTo(map);
            map.on('click', function () {
                selectedLayers.forEach(l => {
                    l.setStyle({
                        color: '#ff0000',
                        weight: 4,
                    });
                });
                selectedLayers = [];
            });
        })
        .catch(error => {
            console.log('Hubo un error:', error);
        });
});