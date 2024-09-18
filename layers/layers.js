var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Exclosure_1 = new ol.format.GeoJSON();
var features_Exclosure_1 = format_Exclosure_1.readFeatures(json_Exclosure_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Exclosure_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exclosure_1.addFeatures(features_Exclosure_1);
var lyr_Exclosure_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exclosure_1, 
                style: style_Exclosure_1,
                popuplayertitle: "Exclosure",
                interactive: true,
                title: '<img src="styles/legend/Exclosure_1.png" /> Exclosure'
            });
var format_TimberDams55_2 = new ol.format.GeoJSON();
var features_TimberDams55_2 = format_TimberDams55_2.readFeatures(json_TimberDams55_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TimberDams55_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TimberDams55_2.addFeatures(features_TimberDams55_2);
var lyr_TimberDams55_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TimberDams55_2, 
                style: style_TimberDams55_2,
                popuplayertitle: "Timber Dams (55)",
                interactive: true,
                title: '<img src="styles/legend/TimberDams55_2.png" /> Timber Dams (55)'
            });
var format_Coir198_3 = new ol.format.GeoJSON();
var features_Coir198_3 = format_Coir198_3.readFeatures(json_Coir198_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coir198_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coir198_3.addFeatures(features_Coir198_3);
var lyr_Coir198_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coir198_3, 
                style: style_Coir198_3,
                popuplayertitle: "Coir (198)",
                interactive: true,
                title: '<img src="styles/legend/Coir198_3.png" /> Coir (198)'
            });
var format_SheepFleece9_4 = new ol.format.GeoJSON();
var features_SheepFleece9_4 = format_SheepFleece9_4.readFeatures(json_SheepFleece9_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SheepFleece9_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SheepFleece9_4.addFeatures(features_SheepFleece9_4);
var lyr_SheepFleece9_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SheepFleece9_4, 
                style: style_SheepFleece9_4,
                popuplayertitle: "Sheep Fleece (9)",
                interactive: true,
                title: '<img src="styles/legend/SheepFleece9_4.png" /> Sheep Fleece (9)'
            });
var format_ReprofiledHaggs15_5 = new ol.format.GeoJSON();
var features_ReprofiledHaggs15_5 = format_ReprofiledHaggs15_5.readFeatures(json_ReprofiledHaggs15_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReprofiledHaggs15_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReprofiledHaggs15_5.addFeatures(features_ReprofiledHaggs15_5);
var lyr_ReprofiledHaggs15_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReprofiledHaggs15_5, 
                style: style_ReprofiledHaggs15_5,
                popuplayertitle: "Reprofiled Haggs (15)",
                interactive: true,
                title: '<img src="styles/legend/ReprofiledHaggs15_5.png" /> Reprofiled Haggs (15)'
            });
var format_StoneDams38_6 = new ol.format.GeoJSON();
var features_StoneDams38_6 = format_StoneDams38_6.readFeatures(json_StoneDams38_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StoneDams38_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StoneDams38_6.addFeatures(features_StoneDams38_6);
var lyr_StoneDams38_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StoneDams38_6, 
                style: style_StoneDams38_6,
                popuplayertitle: "Stone Dams (38)",
                interactive: true,
                title: '<img src="styles/legend/StoneDams38_6.png" /> Stone Dams (38)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Exclosure_1.setVisible(true);lyr_TimberDams55_2.setVisible(true);lyr_Coir198_3.setVisible(true);lyr_SheepFleece9_4.setVisible(true);lyr_ReprofiledHaggs15_5.setVisible(true);lyr_StoneDams38_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Exclosure_1,lyr_TimberDams55_2,lyr_Coir198_3,lyr_SheepFleece9_4,lyr_ReprofiledHaggs15_5,lyr_StoneDams38_6];
lyr_Exclosure_1.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_TimberDams55_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', });
lyr_Coir198_3.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', });
lyr_SheepFleece9_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', });
lyr_ReprofiledHaggs15_5.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', });
lyr_StoneDams38_6.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', });
lyr_Exclosure_1.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', });
lyr_TimberDams55_2.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', });
lyr_Coir198_3.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', });
lyr_SheepFleece9_4.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', });
lyr_ReprofiledHaggs15_5.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', });
lyr_StoneDams38_6.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', });
lyr_Exclosure_1.set('fieldLabels', {'id': 'hidden field', 'Area': 'hidden field', });
lyr_TimberDams55_2.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'header label - visible with data', });
lyr_Coir198_3.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'header label - visible with data', });
lyr_SheepFleece9_4.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'header label - visible with data', });
lyr_ReprofiledHaggs15_5.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'header label - visible with data', });
lyr_StoneDams38_6.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'header label - visible with data', });
lyr_StoneDams38_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});