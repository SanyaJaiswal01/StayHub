
    import * as maplibregl from 'https://unpkg.com/maplibre-gl@6.6.0/dist/maplibre-gl.mjs';

    const map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://tiles.openfreemap.org/styles/bright', //stylesheet location
        center: [77.2090, 28.6139], // starting position
        zoom: 13 // starting zoom
    });


    map.addControl(new maplibregl.FullscreenControl());

    // mapbox
    // const mapToken= mapToken;
    // mapboxgl.accessToken=mapToken;
    // const map = new mapboxgl.Map({
    //     // accessToken: 'pk.eyJ1Ijoic2FubWFwMDFib3giLCJhIjoiY210ZzhsZjR4MG5yaDJ4c2NmYThlcDRpayJ9.ZK2EXFIswwMx3XUG9wkNSQ',
    //     container: 'map', // container ID
    //     style: 'mapbox://styles/mapbox/streets-v12', // stylesheet location
    //     center: [77.2090, 28.6139], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    //     zoom: 9 // starting zoom
    // });
