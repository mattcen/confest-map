# confest-map
Map of ConFest site

# Website with all relevant info

[Online previews and downloads of this map](https://mattcen.github.io/confest-map/) are available.

# How to use this data

In short, there's a confest.qgs file, which is compatible with QGIS 3.34.4-Prizren.

This pulls data from the following files:

- [`data/10cm_contours_cropped.gpkg`](data/10cm_contours_cropped.gpkg): 10cm contour lines
- [`data/AU_ORG_DTE.gpkg`](data/AU_ORG_DTE.gpkg): Most data collected over the last decade or so by Confest folks
- [`data/NSW_SIX_Imagery.tif`](data/NSW_SIX_Imagery.tif): Aerial imagery of site by NSW government
- [`data/dem_woorooma.tif`](data/dem_woorooma.tif): Elevation data as a DEM
- [`old/fromgeojson.gpkg`](old/fromgeojson.gpkg): Previously used data (much of which came from `AU_ORG_DTE.gpkg` originally) which is now only used by disabled layers, but kept just in case.

# uMap

As of 2019, this data has been [published to uMap](https://umap.openstreetmap.fr/en/map/confest-autumn-2019_293972) by @mattcen, and on [Google Maps](https://www.google.com/maps/d/viewer?mid=1jgy2DENfk7HpVSI6hJ-0msGcs_jDB0Kd).

# Dropbox

Finally, this data, and some other data it didn't make sense to publish in Git, is available in a [Dropbox folder](https://www.dropbox.com/sh/j4c8o9xj2wx2p67/AAAuJDneK7WgTZE9Mv25ncu4a?dl=0).
