---
layout: home
---

<script client-only>
  if(window && !customElements.get('eox-itemfilter')) import("@eox/itemfilter");
</script>

Explore the Narratives below.

<script setup>
  import { ref, onMounted } from 'vue';
  import { withBase, useRouter } from 'vitepress';
  import { trackEvent } from "@eox/pages-theme-eox/src/helpers.js";

  const router = useRouter();
  const items = ref([]);

  const filterProps = [{
    "keys": [
      "title",
      "subtitle"
    ],
    "title": "Search",
    "type": "text",
    "placeholder": "Search in title or subtitle",
    "expanded": true
  }, {
    "key": 'theme',
    "title": 'Theme',
    "expanded": true,
    "type": "select"
  }
  ];

  onMounted(async () => {
    try {
      const response = await fetch('https://ESA-EarthCODE.github.io/earthcode-narratives/narratives.json');
      const results = await response.json();
      results.forEach((res)=>{
        if (res['cover-image'] && res['cover-image'].startsWith('build')){
            // Adapt image urls in case locally built and not absolute
            res['cover-image'] = 'https://ESA-EarthCODE.github.io/earthcode-narratives/'+res['cover-image']
        }
    });
      items.value = results;
    } catch (error) {
      console.error('Error fetching JSON:', error);
    }
  });

  // Click event handler
  const handleResultClick = (evt) => {
    const sections = evt.detail.file.split("/");
    const filename = sections[sections.length-1].split(".")[0];
    trackEvent(['stories', 'select', filename]);
    router.go(withBase(`/story?id=${filename}`));
  };
</script>

<section class="blue">
</section>
<section class="white">

**Explore** and **filter** the RACE stories to find out how indicators can provide value for citizens and businesses.
<client-only>
  <eox-itemfilter
    :items="items"
    titleProperty="title"
    imageProperty="cover-image"
    subTitleProperty="subtitle"
    aggregateResults=""
    :filterProperties="filterProps"
    resultType="cards"
    @select="handleResultClick"
    style="--form-flex-direction: row;--card-width: 300px; --card-height: 350px; --card-border-radius: 0px;--card-gap:40px"
  ></eox-itemfilter>
</client-only>
</section>
