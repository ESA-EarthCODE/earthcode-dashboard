---
layout: home

hero:
  text: "FAIR Science for Earth Action"
  tagline: "Create, find, and collaborate on Earth system science experiments, unlocking the full potential of Earth Observation for the benefit of society - from research to policy"
  background: "https://earthcode.esa.int/img/earthcode-infographic-pillars-Nologo.jpg"  
  image: "https://earthcode.esa.int/img/earthcode-infographic-pillars.jpg"
  actions:
    - theme: cta
      text: Explore Dashboard
      link: /explore
    # - theme: alt
    #   text: Discover Stories
    #   link: /stories
---
<section class="light-grey">

## Interactive Datacube Visualizations

The Dashboard now hosts interactive web visualizations for the two GeoZarr datacubes, developed as part of the ESA EarthCODE hackathons. These datacubes provide standardized spatial and temporal grids, enabling multi-variable exploration directly in the browser with interactive variable selection, depth slicing, dynamic range adjustments, and time navigation.

### ESA Mediterranean Sea Datacubes

The [ESA Mediterranean Sea Datacube](https://esa-earthcode.github.io/ocean_hackathon/datacube/intro/) brings selected marine datasets onto a unified 1/24° latitude/longitude grid (EPSG:4326) across the Mediterranean basin. By aligning physical and biogeochemical observations, variables can be inspected and compared without manual spatial realignment.

Hosted collections:
- **Daily Surface Fields:** Sea surface salinity, density, sea level anomalies, absolute dynamic topography, and finite-size Lyapunov exponents.
- **Monthly Fields:** Total and size-fractionated phytoplankton carbon, marine heatwaves, cold spells, and composite hazard indicators.
- **3D Biophysics:** Daily temperature, salinity, primary production, euphotic depth, mixed layer depth, and geostrophic velocities across 18 depth levels.
- **Hourly Currents:** Zonal and meridional surface currents, ageostrophic components, and total current velocities.

### ESA Antarctica Datacubes

The [ESA Antarctica Datacube](https://esa-earthcode.github.io/polar_hackathon/intro/) integrates Antarctic scientific datasets into analysis-ready Zarr stores, standardizing them onto common polar coordinate systems to eliminate preprocessing overhead like reprojection, resampling, and spatial joins.

Hosted collections:
- **Land Ice (EPSG:3031):**
  - **Internal Ice Temperature:** 3D thermal structure modeled across 91 vertical depth levels below the ice sheet surface.
  - **Surface Elevation Change (SEC):** Rate of elevation change, uncertainties, surface classifications, and IMBIE basin identifiers across 27 observation periods.
  - **Combined Bed & Ice Sheet:** Bedrock topography, ice thickness, surface elevation, firn air content, geoid height, and grounding line locations.
  - **Composite Ice Mask:** Multi-temporal Antarctic ice-front composite masks spanning 1997–2021.
  - **Ice Velocity:** Surface velocity magnitude, directional velocity components (easting, northing, vertical), and measurement counts over 87 time steps.
- **Sea Ice (EPSG:6932):**
  - Sea-ice floe density, radar freeboard, sea-ice thickness, snow depth, and proximity to open ocean and leads across 146 observation dates.

</section>
