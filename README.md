# Map of ConFest site

## How to use this data

In short, there's a `confest.qgs` file, which is compatible with QGIS
3.36.2-Maidenhead.

This pulls data from the following files:

- [`data/10cm_contours_cropped.gpkg`](data/10cm_contours_cropped.gpkg): 10cm
  contour lines
- [`data/AU_ORG_DTE.gpkg`](data/AU_ORG_DTE.gpkg): Most data collected over the
  last decade or so by ConFest folks
- [`data/NSW_SIX_Imagery.tif`](data/NSW_SIX_Imagery.tif): Aerial imagery of
  site by NSW government
- [`data/dem_woorooma.tif`](data/dem_woorooma.tif): Elevation data as a DEM
- [`old/fromgeojson.gpkg`](old/fromgeojson.gpkg): Previously used data (much of
  which came from `AU_ORG_DTE.gpkg` originally) which is now only used by
  disabled layers, but kept just in case.

## Dropbox

Finally, this data, and some other data it didn't make sense to publish in Git,
is available in a [Dropbox
folder](https://www.dropbox.com/sh/j4c8o9xj2wx2p67/AAAuJDneK7WgTZE9Mv25ncu4a?dl=0).

## QGIS primer

- The `.qgs` file is the QGIS "project". This does _not_ contain the actual
  geospatial data, but includes basically everything else
- The geospatial data should be kept in the `data/` folder. If you import data
  into the project from elsewhere, it's likely that when you share the project
  with others, they won't see/have access to that data. Just keep the data in
  `data/`.

### Anatomy of a QGIS project

- A project has "layers"
- Each layer displays data from a geospatial data source
- Each layer has a style determining how the points, lines, polygons, and
  labels on that layer should look
- Styles can be conditional based on data fields (e.g. tracks of type "road"
  could be thicker than tracks of type "path")
- A project has map "themes"
- A map "theme" is a collection of "layers" that are visible (e.g. a plumbing
  theme has taps and pipes visible, but no other layers)
- A project has "layouts"
- A "layout" is a print layout of how to display a map and its legend, scale,
  and other data, on a page that can be exported as a PDF, printed on paper,
  etc.
- A "layout" can be tied to a map "theme", so that the "layout" only shows
  certain "layers", regardless of which layers are enabled in the main QGIS
  window.
