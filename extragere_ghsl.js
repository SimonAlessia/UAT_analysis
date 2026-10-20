// Urban Expansion Analysis Using GHSL Built-up Surface Data in Google Earth Engine (1975–2020)



// 1. Define coordinates forming a polygon around the region of interest

var boundaryCoordinates = [

  [25.962642164500952, 44.96574224360879],

          [25.960582227977515, 44.93731462137919],

          [25.978778333934546, 44.92540485263526],

          [26.01311060932517, 44.88649861348248],

          [26.04316773470635, 44.88293204471778],

          [26.0514074808001, 44.8950938271938],

          [26.085739756190726, 44.91260227631472],

          [26.10015931185479, 44.91697855542167],

          [26.10359253939385, 44.9335081577246],

          [26.099815989100883, 44.9478461648536],

          [26.087799692714164, 44.95440643152414],

          [26.062737131679008, 44.95489234737367],

          [26.055870676600883, 44.95319162389959],

          [26.04522767122979, 44.95975127957408],

          [26.035614634120414, 44.9641239667687],

          [26.030121470057914, 44.966067276323834],

          [26.007118845546195, 44.97626857144405],

          [25.991669321620414, 44.97724002872779],

          [25.975189829432914, 44.96533854295528]

];



// Convert the coordinates into a multipolygon geometry

//var studyArea = ee.Geometry.MultiPolygon([boundaryCoordinates]);

// Convert the coordinates into a single Polygon geometry

var studyArea = ee.Geometry.Polygon([boundaryCoordinates]);



// Center the map on the study area

Map.centerObject(studyArea);



// 2. Load the GHSL built-up surface dataset and select only the 'built_surface' band

var builtUpCollection = ee.ImageCollection("JRC/GHSL/P2023A/GHS_BUILT_S")

  .select(['built_surface'])

  .filterBounds(studyArea);



// 3. Visualize the GHSL bands as a combined multi-band image

var builtUpStacked = builtUpCollection.toBands();



// Add it to the map (turned off by default for clarity)

Map.addLayer(builtUpStacked.clip(studyArea), {}, 'GHSL Built-up Stacked', false);



// 4. Export the built-up multi-band image (stacked) to Google Drive

Export.image.toDrive({

  image: builtUpStacked.clip(studyArea).float(),

  description: 'GHSL_Builtup_Stacked',

  region: studyArea,

  scale: 100,

  maxPixels: 1e13,

  folder: 'urban_expansion_output',

  crs: builtUpStacked.getInfo().crs

});



// 6. Extract the built-up surface for the year 1975

var built1975 = builtUpCollection.filter(ee.Filter.eq('system:index', '1975')).toBands();



var areaBuilt1975 = ee.Number(

  built1975.reduceRegion({

    reducer: ee.Reducer.sum(),

    geometry: studyArea,

    scale: 100

  }).values().get(0)

);



print('Built-up Area in 1975 (km²):', areaBuilt1975.divide(1e6));





// Extract the built-up surface for the year 2020

var built2020 = builtUpCollection.filter(ee.Filter.eq('system:index', '2020')).toBands();



var areaBuilt2020 = ee.Number(

  built2020.reduceRegion({

    reducer: ee.Reducer.sum(),

    geometry: studyArea,

    scale: 100

  }).values().get(0)

);



print('Built-up Area in 2020 (km²):', areaBuilt2020.divide(1e6));



// Convert built-up surface values to area in km² for time series

var builtUpAreaSeries = builtUpCollection.map(function(image) {

  return image.divide(1e6).copyProperties(image, image.propertyNames());

});


// 7. Generate and display a column chart showing total built-up area per year

print(

  ui.Chart.image.series(builtUpAreaSeries, studyArea, ee.Reducer.sum(), 100, 'system:time_start')

    .setOptions({

      title: 'Urban Expansion Over Time (km²)',

      vAxis: {title: 'Built-up Area (km²)'},

      hAxis: {title: 'Year'},

      series: {0: {color: 'indigo'}},

      chartArea: {width: '80%'}

    })

    .setChartType('ColumnChart')

);
