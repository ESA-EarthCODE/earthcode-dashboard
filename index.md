---
layout: home
---

<script setup>
const antarcticaCollections = [
  {
    Name: "OSC - Antarctic Land-Ice Datacube",
    Url: "https://osc.earthcode.eox.at/data-collections/antarctic-land/collection",
  },
  {
    Name: "OSC - Antarctic Sea-Ice Datacube",
    Url: "https://osc.earthcode.eox.at/data-collections/antarctic-sea/collection",
  },
];

const oceanCollections = [
  {
    Name: "OSC - Mediterranean Sea Datacube",
    Url: "https://osc.earthcode.eox.at/data-collections/mediterranean-sea/collection",
  },
];
</script>

<section class="blue">

##

</section>
<section class="light-grey">

<CollectionCard title="ESA Antarctica Datacube" icon="/assets/polar-science-cluster-logo.png" headerTextColor="#007a87" exploreLink="/explore?indicator=antarctica_cube" :collections="antarcticaCollections">

The **ESA Antarctica Datacube** brings together openly available datasets for Antarctica and the Southern Ocean in analysis-ready, cloud-optimized formats that can be accessed and analysed together. The datasets were produced in the frame of ESA Polar Science Cluster activities.

</CollectionCard>

<CollectionCard title="ESA Mediterranean Datacube" icon="/assets/ocean-science-cluster-logo.png" headerTextColor="#003247" exploreLink="/explore?indicator=ocean_cube" :collections="oceanCollections">

The **ESA Ocean Science Cluster** supports research to better understand the ocean's role in interconnected Earth system processes. It addresses major knowledge gaps across physical oceanography, biogeochemistry, ecology, and ocean-atmosphere-land-cryosphere interactions. By combining EO satellite data, in-situ and citizen observations with advanced modelling, the cluster enables truly interdisciplinary ocean science. ESA-funded projects bring together diverse expertise, data , and technologies to generate results created than the sum of their parts. Through strong European and international partnerships under FutureEO, the cluster helps build a robust Ocean research community.

</CollectionCard>

</section>
