var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ProduksiSawit2023_2 = new ol.format.GeoJSON();
var features_ProduksiSawit2023_2 = format_ProduksiSawit2023_2.readFeatures(json_ProduksiSawit2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProduksiSawit2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProduksiSawit2023_2.addFeatures(features_ProduksiSawit2023_2);
var lyr_ProduksiSawit2023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProduksiSawit2023_2, 
                style: style_ProduksiSawit2023_2,
                popuplayertitle: "Produksi Sawit 2023",
                interactive: true,
    title: 'Produksi Sawit 2023<br />\
    <img src="styles/legend/ProduksiSawit2023_2_0.png" /> 0 - 76<br />\
    <img src="styles/legend/ProduksiSawit2023_2_1.png" /> 76 - 327<br />\
    <img src="styles/legend/ProduksiSawit2023_2_2.png" /> 327 - 592<br />\
    <img src="styles/legend/ProduksiSawit2023_2_3.png" /> 592 - 1221<br />\
    <img src="styles/legend/ProduksiSawit2023_2_4.png" /> 1221 - 1656<br />'
        });
var format_ProduksiKaret2023_3 = new ol.format.GeoJSON();
var features_ProduksiKaret2023_3 = format_ProduksiKaret2023_3.readFeatures(json_ProduksiKaret2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProduksiKaret2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProduksiKaret2023_3.addFeatures(features_ProduksiKaret2023_3);
var lyr_ProduksiKaret2023_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProduksiKaret2023_3, 
                style: style_ProduksiKaret2023_3,
                popuplayertitle: "Produksi Karet 2023",
                interactive: true,
    title: 'Produksi Karet 2023<br />\
    <img src="styles/legend/ProduksiKaret2023_3_0.png" /> 0 - 1,3<br />\
    <img src="styles/legend/ProduksiKaret2023_3_1.png" /> 1,3 - 5,3<br />\
    <img src="styles/legend/ProduksiKaret2023_3_2.png" /> 5,3 - 18,2<br />\
    <img src="styles/legend/ProduksiKaret2023_3_3.png" /> 18,2 - 30,3<br />\
    <img src="styles/legend/ProduksiKaret2023_3_4.png" /> 30,3 - 52,8<br />'
        });
var format_ProduksiJagung2023_4 = new ol.format.GeoJSON();
var features_ProduksiJagung2023_4 = format_ProduksiJagung2023_4.readFeatures(json_ProduksiJagung2023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProduksiJagung2023_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProduksiJagung2023_4.addFeatures(features_ProduksiJagung2023_4);
var lyr_ProduksiJagung2023_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProduksiJagung2023_4, 
                style: style_ProduksiJagung2023_4,
                popuplayertitle: "Produksi Jagung 2023",
                interactive: true,
    title: 'Produksi Jagung 2023<br />\
    <img src="styles/legend/ProduksiJagung2023_4_0.png" /> 0 - 22770<br />\
    <img src="styles/legend/ProduksiJagung2023_4_1.png" /> 22770 - 57785<br />\
    <img src="styles/legend/ProduksiJagung2023_4_2.png" /> 57785 - 135112<br />\
    <img src="styles/legend/ProduksiJagung2023_4_3.png" /> 135112 - 291661<br />\
    <img src="styles/legend/ProduksiJagung2023_4_4.png" /> 291661 - 745651<br />'
        });
var format_ProduksiPadi2023_5 = new ol.format.GeoJSON();
var features_ProduksiPadi2023_5 = format_ProduksiPadi2023_5.readFeatures(json_ProduksiPadi2023_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProduksiPadi2023_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProduksiPadi2023_5.addFeatures(features_ProduksiPadi2023_5);
var lyr_ProduksiPadi2023_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProduksiPadi2023_5, 
                style: style_ProduksiPadi2023_5,
                popuplayertitle: "Produksi Padi 2023",
                interactive: true,
    title: 'Produksi Padi 2023<br />\
    <img src="styles/legend/ProduksiPadi2023_5_0.png" /> 0 - 21310<br />\
    <img src="styles/legend/ProduksiPadi2023_5_1.png" /> 21310 - 48694<br />\
    <img src="styles/legend/ProduksiPadi2023_5_2.png" /> 48694 - 91189<br />\
    <img src="styles/legend/ProduksiPadi2023_5_3.png" /> 91189 - 143824<br />\
    <img src="styles/legend/ProduksiPadi2023_5_4.png" /> 143824 - 312406<br />'
        });
var group_ProduksiKomoditasUnggulan = new ol.layer.Group({
                                layers: [lyr_ProduksiSawit2023_2,lyr_ProduksiKaret2023_3,lyr_ProduksiJagung2023_4,lyr_ProduksiPadi2023_5,],
                                fold: "open",
                                title: "Produksi Komoditas Unggulan"});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_ProduksiSawit2023_2.setVisible(false);lyr_ProduksiKaret2023_3.setVisible(false);lyr_ProduksiJagung2023_4.setVisible(false);lyr_ProduksiPadi2023_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,group_ProduksiKomoditasUnggulan];
lyr_ProduksiSawit2023_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KABUPATEN': 'KABUPATEN', 'FCODE': 'FCODE', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'KDKAB': 'KDKAB', 'Cluster Digitalisasi': 'Cluster Digitalisasi', 'Cluster Jaskeu': 'Cluster Jaskeu', 'Cluster Pangan': 'Cluster Pangan', 'Cluster_Kebun': 'Cluster_Kebun', 'Produksi Kelapa Sawit(ribu ton)_2018': 'Produksi Kelapa Sawit(ribu ton)_2018', 'Produksi Kelapa Sawit(ribu ton)_2019': 'Produksi Kelapa Sawit(ribu ton)_2019', 'Produksi Kelapa Sawit(ribu ton)_2020': 'Produksi Kelapa Sawit(ribu ton)_2020', 'Produksi Kelapa Sawit(ribu ton)_2021': 'Produksi Kelapa Sawit(ribu ton)_2021', 'Produksi Kelapa Sawit(ribu ton)_2022': 'Produksi Kelapa Sawit(ribu ton)_2022', 'Produksi Kelapa Sawit(ribu ton)_2023': 'Produksi Kelapa Sawit(ribu ton)_2023', });
lyr_ProduksiKaret2023_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KABUPATEN': 'KABUPATEN', 'FCODE': 'FCODE', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'KDKAB': 'KDKAB', 'Cluster Digitalisasi': 'Cluster Digitalisasi', 'Cluster Jaskeu': 'Cluster Jaskeu', 'Cluster Pangan': 'Cluster Pangan', 'Cluster_Kebun': 'Cluster_Kebun', 'Produksi Karet(ribu ton)_2018': 'Produksi Karet(ribu ton)_2018', 'Produksi Karet(ribu ton)_2019': 'Produksi Karet(ribu ton)_2019', 'Produksi Karet(ribu ton)_2020': 'Produksi Karet(ribu ton)_2020', 'Produksi Karet(ribu ton)_2021': 'Produksi Karet(ribu ton)_2021', 'Produksi Karet(ribu ton)_2022': 'Produksi Karet(ribu ton)_2022', 'Produksi Karet(ribu ton)_2023': 'Produksi Karet(ribu ton)_2023', });
lyr_ProduksiJagung2023_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KABUPATEN': 'KABUPATEN', 'FCODE': 'FCODE', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'KDKAB': 'KDKAB', 'Cluster Digitalisasi': 'Cluster Digitalisasi', 'Cluster Jaskeu': 'Cluster Jaskeu', 'Cluster Pangan': 'Cluster Pangan', 'Cluster_Kebun': 'Cluster_Kebun', 'Produksi Jagung(ton)_2018': 'Produksi Jagung(ton)_2018', 'Produksi Jagung(ton)_2019': 'Produksi Jagung(ton)_2019', 'Produksi Jagung(ton)_2020': 'Produksi Jagung(ton)_2020', 'Produksi Jagung(ton)_2021': 'Produksi Jagung(ton)_2021', 'Produksi Jagung(ton)_2022': 'Produksi Jagung(ton)_2022', 'Produksi Jagung(ton)_2023': 'Produksi Jagung(ton)_2023', });
lyr_ProduksiPadi2023_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KABUPATEN': 'KABUPATEN', 'FCODE': 'FCODE', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'KDKAB': 'KDKAB', 'Cluster Digitalisasi': 'Cluster Digitalisasi', 'Cluster Jaskeu': 'Cluster Jaskeu', 'Cluster Pangan': 'Cluster Pangan', 'Cluster_Kebun': 'Cluster_Kebun', 'Produksi Padi(ton)_2018': 'Produksi Padi(ton)_2018', 'Produksi Padi(ton)_2019': 'Produksi Padi(ton)_2019', 'Produksi Padi(ton)_2020': 'Produksi Padi(ton)_2020', 'Produksi Padi(ton)_2021': 'Produksi Padi(ton)_2021', 'Produksi Padi(ton)_2022': 'Produksi Padi(ton)_2022', 'Produksi Padi(ton)_2023': 'Produksi Padi(ton)_2023', });
lyr_ProduksiSawit2023_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KABUPATEN': 'TextEdit', 'FCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'KDKAB': 'TextEdit', 'Cluster Digitalisasi': 'TextEdit', 'Cluster Jaskeu': 'TextEdit', 'Cluster Pangan': 'TextEdit', 'Cluster_Kebun': 'TextEdit', 'Produksi Kelapa Sawit(ribu ton)_2018': 'TextEdit', 'Produksi Kelapa Sawit(ribu ton)_2019': 'TextEdit', 'Produksi Kelapa Sawit(ribu ton)_2020': 'TextEdit', 'Produksi Kelapa Sawit(ribu ton)_2021': 'TextEdit', 'Produksi Kelapa Sawit(ribu ton)_2022': 'TextEdit', 'Produksi Kelapa Sawit(ribu ton)_2023': 'TextEdit', });
lyr_ProduksiKaret2023_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KABUPATEN': 'TextEdit', 'FCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'KDKAB': 'TextEdit', 'Cluster Digitalisasi': 'TextEdit', 'Cluster Jaskeu': 'TextEdit', 'Cluster Pangan': 'TextEdit', 'Cluster_Kebun': 'TextEdit', 'Produksi Karet(ribu ton)_2018': 'TextEdit', 'Produksi Karet(ribu ton)_2019': 'TextEdit', 'Produksi Karet(ribu ton)_2020': 'TextEdit', 'Produksi Karet(ribu ton)_2021': 'TextEdit', 'Produksi Karet(ribu ton)_2022': 'TextEdit', 'Produksi Karet(ribu ton)_2023': 'TextEdit', });
lyr_ProduksiJagung2023_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KABUPATEN': 'TextEdit', 'FCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'KDKAB': 'TextEdit', 'Cluster Digitalisasi': 'TextEdit', 'Cluster Jaskeu': 'TextEdit', 'Cluster Pangan': 'TextEdit', 'Cluster_Kebun': 'TextEdit', 'Produksi Jagung(ton)_2018': 'TextEdit', 'Produksi Jagung(ton)_2019': 'TextEdit', 'Produksi Jagung(ton)_2020': 'TextEdit', 'Produksi Jagung(ton)_2021': 'TextEdit', 'Produksi Jagung(ton)_2022': 'TextEdit', 'Produksi Jagung(ton)_2023': 'TextEdit', });
lyr_ProduksiPadi2023_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KABUPATEN': 'TextEdit', 'FCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'KDKAB': 'TextEdit', 'Cluster Digitalisasi': 'TextEdit', 'Cluster Jaskeu': 'TextEdit', 'Cluster Pangan': 'TextEdit', 'Cluster_Kebun': 'TextEdit', 'Produksi Padi(ton)_2018': 'TextEdit', 'Produksi Padi(ton)_2019': 'TextEdit', 'Produksi Padi(ton)_2020': 'TextEdit', 'Produksi Padi(ton)_2021': 'TextEdit', 'Produksi Padi(ton)_2022': 'TextEdit', 'Produksi Padi(ton)_2023': 'TextEdit', });
lyr_ProduksiSawit2023_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KABUPATEN': 'inline label - always visible', 'FCODE': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'KDKAB': 'no label', 'Cluster Digitalisasi': 'inline label - visible with data', 'Cluster Jaskeu': 'inline label - visible with data', 'Cluster Pangan': 'inline label - visible with data', 'Cluster_Kebun': 'inline label - visible with data', 'Produksi Kelapa Sawit(ribu ton)_2018': 'hidden field', 'Produksi Kelapa Sawit(ribu ton)_2019': 'hidden field', 'Produksi Kelapa Sawit(ribu ton)_2020': 'hidden field', 'Produksi Kelapa Sawit(ribu ton)_2021': 'hidden field', 'Produksi Kelapa Sawit(ribu ton)_2022': 'hidden field', 'Produksi Kelapa Sawit(ribu ton)_2023': 'inline label - visible with data', });
lyr_ProduksiKaret2023_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KABUPATEN': 'inline label - always visible', 'FCODE': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'KDKAB': 'no label', 'Cluster Digitalisasi': 'inline label - visible with data', 'Cluster Jaskeu': 'inline label - visible with data', 'Cluster Pangan': 'inline label - visible with data', 'Cluster_Kebun': 'inline label - visible with data', 'Produksi Karet(ribu ton)_2018': 'hidden field', 'Produksi Karet(ribu ton)_2019': 'hidden field', 'Produksi Karet(ribu ton)_2020': 'hidden field', 'Produksi Karet(ribu ton)_2021': 'hidden field', 'Produksi Karet(ribu ton)_2022': 'hidden field', 'Produksi Karet(ribu ton)_2023': 'inline label - visible with data', });
lyr_ProduksiJagung2023_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KABUPATEN': 'inline label - always visible', 'FCODE': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'KDKAB': 'no label', 'Cluster Digitalisasi': 'inline label - visible with data', 'Cluster Jaskeu': 'inline label - visible with data', 'Cluster Pangan': 'inline label - visible with data', 'Cluster_Kebun': 'inline label - visible with data', 'Produksi Jagung(ton)_2018': 'hidden field', 'Produksi Jagung(ton)_2019': 'hidden field', 'Produksi Jagung(ton)_2020': 'hidden field', 'Produksi Jagung(ton)_2021': 'hidden field', 'Produksi Jagung(ton)_2022': 'hidden field', 'Produksi Jagung(ton)_2023': 'inline label - visible with data', });
lyr_ProduksiPadi2023_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KABUPATEN': 'inline label - always visible', 'FCODE': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'KDKAB': 'hidden field', 'Cluster Digitalisasi': 'inline label - visible with data', 'Cluster Jaskeu': 'inline label - visible with data', 'Cluster Pangan': 'inline label - visible with data', 'Cluster_Kebun': 'inline label - visible with data', 'Produksi Padi(ton)_2018': 'hidden field', 'Produksi Padi(ton)_2019': 'hidden field', 'Produksi Padi(ton)_2020': 'hidden field', 'Produksi Padi(ton)_2021': 'hidden field', 'Produksi Padi(ton)_2022': 'hidden field', 'Produksi Padi(ton)_2023': 'inline label - visible with data', });
lyr_ProduksiPadi2023_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});