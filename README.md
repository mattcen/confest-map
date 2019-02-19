# confest-map
Map of ConFest site

# How to use this data

This data is a bit all over the place currently, but we're getting there.

In short, there's a confest.qgs file, which is compatible with QGIS 2.14.

This pulls data from the following files:

* [`AU_ORG_DTE.sqlite`](AU_ORG_DTE.sqlite): Previously collected data in a SQLite database; mostly not used for the site as of 2018
* [`confest_2018.geojson`](confest_2018.geojson): Most of the latest data for the site frome 2018 onwards
* [`John20180310/grid.geojson`](John20180310/grid.geojson): A simple grid used for prettying up cartography. Generated with QGIS

There are various other files floating around too.

# uMap

As of 2018, this data has been [published to uMap](https://umap.openstreetmap.fr/en/map/confest-2018_200042) by @mattcen. He also intends to update a [2019 version](https://umap.openstreetmap.fr/en/map/confest-autumn-2019_293972) soon.

# Dropbox

Finally, this data, and some other data it didn't make sense to publish in Git, is available in a [Dropbox folder](https://www.dropbox.com/sh/j4c8o9xj2wx2p67/AAAuJDneK7WgTZE9Mv25ncu4a?dl=0). This folder needs even more tidying up, but at least all the data's there, for now.
