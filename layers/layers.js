ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:9518").setExtent([114.775544, -8.855536, 115.833293, -8.216128]);
var wms_layers = [];

var format_TPS3R_0 = new ol.format.GeoJSON();
var features_TPS3R_0 = format_TPS3R_0.readFeatures(json_TPS3R_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_TPS3R_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPS3R_0.addFeatures(features_TPS3R_0);
var lyr_TPS3R_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TPS3R_0, 
                style: style_TPS3R_0,
                interactive: true,
    title: 'TPS3R<br />\
    <img src="styles/legend/TPS3R_0_0.png" /> Private<br />\
    <img src="styles/legend/TPS3R_0_1.png" /> Public<br />\
    <img src="styles/legend/TPS3R_0_2.png" /> <br />'
        });
var format_TPSTsreprojected_1 = new ol.format.GeoJSON();
var features_TPSTsreprojected_1 = format_TPSTsreprojected_1.readFeatures(json_TPSTsreprojected_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_TPSTsreprojected_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPSTsreprojected_1.addFeatures(features_TPSTsreprojected_1);
var lyr_TPSTsreprojected_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TPSTsreprojected_1, 
                style: style_TPSTsreprojected_1,
                interactive: true,
                title: '<img src="styles/legend/TPSTsreprojected_1.png" /> TPSTs (reprojected)'
            });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasDesa_3 = new ol.format.GeoJSON();
var features_BatasDesa_3 = format_BatasDesa_3.readFeatures(json_BatasDesa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_BatasDesa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_3.addFeatures(features_BatasDesa_3);
var lyr_BatasDesa_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasDesa_3, 
                style: style_BatasDesa_3,
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_3.png" /> Batas Desa'
            });
var format_AdministrasiDesa_4 = new ol.format.GeoJSON();
var features_AdministrasiDesa_4 = format_AdministrasiDesa_4.readFeatures(json_AdministrasiDesa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_AdministrasiDesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiDesa_4.addFeatures(features_AdministrasiDesa_4);
var lyr_AdministrasiDesa_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdministrasiDesa_4, 
                style: style_AdministrasiDesa_4,
                interactive: true,
                title: '<img src="styles/legend/AdministrasiDesa_4.png" /> Administrasi Desa'
            });
var format_6DesaPilot_5 = new ol.format.GeoJSON();
var features_6DesaPilot_5 = format_6DesaPilot_5.readFeatures(json_6DesaPilot_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_6DesaPilot_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6DesaPilot_5.addFeatures(features_6DesaPilot_5);
var lyr_6DesaPilot_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_6DesaPilot_5, 
                style: style_6DesaPilot_5,
                interactive: true,
                title: '<img src="styles/legend/6DesaPilot_5.png" /> 6 Desa Pilot'
            });
var format_Servicearealines_6 = new ol.format.GeoJSON();
var features_Servicearealines_6 = format_Servicearealines_6.readFeatures(json_Servicearealines_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_Servicearealines_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_6.addFeatures(features_Servicearealines_6);
var lyr_Servicearealines_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Servicearealines_6, 
                style: style_Servicearealines_6,
                interactive: true,
                title: '<img src="styles/legend/Servicearealines_6.png" /> Service area (lines)'
            });
var format_BatasAdministrasiKabKotaBali_7 = new ol.format.GeoJSON();
var features_BatasAdministrasiKabKotaBali_7 = format_BatasAdministrasiKabKotaBali_7.readFeatures(json_BatasAdministrasiKabKotaBali_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_BatasAdministrasiKabKotaBali_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKabKotaBali_7.addFeatures(features_BatasAdministrasiKabKotaBali_7);
var lyr_BatasAdministrasiKabKotaBali_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdministrasiKabKotaBali_7, 
                style: style_BatasAdministrasiKabKotaBali_7,
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKabKotaBali_7.png" /> Batas Administrasi Kab/Kota Bali'
            });
var format_BatasKecamatan_8 = new ol.format.GeoJSON();
var features_BatasKecamatan_8 = format_BatasKecamatan_8.readFeatures(json_BatasKecamatan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_BatasKecamatan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_8.addFeatures(features_BatasKecamatan_8);
var lyr_BatasKecamatan_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKecamatan_8, 
                style: style_BatasKecamatan_8,
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_8.png" /> Batas Kecamatan'
            });
var group_TPSTTPS3R = new ol.layer.Group({
                                layers: [lyr_TPS3R_0,lyr_TPSTsreprojected_1,],
                                title: "TPST & TPS3R"});

lyr_TPS3R_0.setVisible(true);lyr_TPSTsreprojected_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_BatasDesa_3.setVisible(true);lyr_AdministrasiDesa_4.setVisible(true);lyr_6DesaPilot_5.setVisible(true);lyr_Servicearealines_6.setVisible(true);lyr_BatasAdministrasiKabKotaBali_7.setVisible(true);lyr_BatasKecamatan_8.setVisible(true);
var layersList = [group_TPSTTPS3R,lyr_OSMStandard_2,lyr_BatasDesa_3,lyr_AdministrasiDesa_4,lyr_6DesaPilot_5,lyr_Servicearealines_6,lyr_BatasAdministrasiKabKotaBali_7,lyr_BatasKecamatan_8];
lyr_TPS3R_0.set('fieldAliases', {'Name': 'Name', 'descriptio': 'Category', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descript_1': 'descript_1', 'altitude_1': 'altitude_1', 'Ownership': 'Ownership', 'layer': 'layer', 'path': 'path', });
lyr_TPSTsreprojected_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'Coverage', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BatasDesa_3.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AdministrasiDesa_4.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Have TPS3R': 'Have TPS3R', });
lyr_6DesaPilot_5.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'Village', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'District (Kecamatan)', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Have TPS3R': 'Have TPS3R', });
lyr_Servicearealines_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'type': 'type', 'start': 'start', });
lyr_BatasAdministrasiKabKotaBali_7.set('fieldAliases', {});
lyr_BatasKecamatan_8.set('fieldAliases', {'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'SUMBER': 'SUMBER', '%coverage': '%coverage', });
lyr_TPS3R_0.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'descript_1': 'TextEdit', 'altitude_1': 'TextEdit', 'Ownership': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_TPSTsreprojected_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_BatasDesa_3.set('fieldImages', {'KARKTR': 'TextEdit', 'STSBTS': 'TextEdit', 'FCODE': 'TextEdit', 'KELAS': 'TextEdit', 'UUPP': 'TextEdit', 'LOKASI': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'TextEdit', 'PJGBTS': 'TextEdit', 'KLBADM': 'TextEdit', 'TIPLOK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_AdministrasiDesa_4.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Have TPS3R': 'TextEdit', });
lyr_6DesaPilot_5.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Have TPS3R': 'TextEdit', });
lyr_Servicearealines_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_BatasAdministrasiKabKotaBali_7.set('fieldImages', {});
lyr_BatasKecamatan_8.set('fieldImages', {'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'SUMBER': 'TextEdit', '%coverage': 'TextEdit', });
lyr_TPS3R_0.set('fieldLabels', {});
lyr_TPSTsreprojected_1.set('fieldLabels', {});
lyr_BatasDesa_3.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AdministrasiDesa_4.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Have TPS3R': 'no label', });
lyr_6DesaPilot_5.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'inline label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Have TPS3R': 'no label', });
lyr_Servicearealines_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_BatasAdministrasiKabKotaBali_7.set('fieldLabels', {});
lyr_BatasKecamatan_8.set('fieldLabels', {'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'SUMBER': 'no label', '%coverage': 'no label', });
lyr_BatasKecamatan_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});