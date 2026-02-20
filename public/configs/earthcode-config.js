function isMobile() {
  // only on app start but good for now
  const minWidth = 768;
  return window.innerWidth < minWidth || screen.width < minWidth;
}

const itemFilterConfig = {
  enableHighlighting: false,
  filterProperties: [
    {
      keys: ["title"],
      title: "Search",
      placeholder: "Search by name",
      type: "text",
      expanded: isMobile() ? false : true,
    },
    {
      key: "themes",
      title: "Themes",
      placeholder: "Filter by theme",
      type: "multiselect",
      expanded: isMobile() ? false : true,
    },
    {
      key: "tags",
      title: "Tags",
      placeholder: "Filter by tags",
      type: "multiselect",
      expanded: false,
    },
    {
      key: "providers",
      title: "Providers",
      placeholder: "Filter by provider",
      type: "multiselect",
      expanded: false,
    },
  ],
  aggregateResults: "collection_group",
  resultType: "cards",
  subTitleProperty: "subtitle",
  imageProperty: "thumbnail",
  style: {
    "--select-filter-max-items": 7,
  },
}

export default {
  id: "earthcode",
  stacEndpoint:
    "https://ESA-EarthCODE.github.io/earthcode-catalog/earthcode/catalog.json",
  brand: {
    noLayout: true,
    name: "EarthCODE",
    theme: {
      colors: {
        primary: "#003247",
        secondary: "#00ae92",
        surface: "#ffff",
      },
      variables: {
        "surface-opacity": 0.85,
        "primary-opacity": 0.85,
      },
      // Bank-Wong palette
      collectionsPalette: [
        "#009E73",
        "#E69F00",
        "#56B4E9",
        "#599111",
        "#F0E442",
        "#0072B2",
        "#D55E00",
        "#CC79A7",
        "#994F00",
      ],
    },
    footerText: "",
  },
  templates: {
    expert: {
      loading: {
        id: Symbol(),
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "background-map-expert",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: true,
            zoomToExtent: true,
            btns: {
              enableExportMap: true,
              enableCompareIndicators: true,
              enableSearch: true,
              enableBackToPOIs: true,
              enableGlobe: false,
            },
            btnsPosition: {
              x: "12/8/9",
              y: 1,
              gap: 32
            },
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 2 },
          widget: {
            name: "EodashTools",
            properties: {
              layoutTarget: "light",
              layoutIcon:
                "M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z",
              itemFilterConfig,
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  title: "Layers",
                  layout: { x: 0, y: 1, w: "3/3/2", h: 11 },
                  widget: {
                    name: "EodashLayerControl",
                    properties: {
                      cssVars: {
                        "--layer-toggle-button-visibility": "flex",
                        "--list-padding": "1rem",
                      },
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  title: "Information",
                  layout: { x: "8/8/9", y: 0, w: "4/4/3", h: 6 },
                  type: "internal",
                  widget: {
                    name: "EodashStacInfo",
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  layout: { x: 4, y: 3, w: 4, h: 9 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                            on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) =>
            window.eodashStore.actions.includesProcess(selectedSTAC)
            ? {
                id: "Processes",
                type: "internal",
                title: "Processes",
                layout: { x: "8/8/9", y: 6, w: "4/4/3", h: 6 },
                widget: {
                  name: "EodashProcess",
                },
            }
            : null
        },
        {
          defineWidget: () =>
            window.eodashStore.actions.shouldShowChartWidget() && {
              id: "ProcessResultChart",
              type: "internal",
              title: "Chart",
              layout: { x: 0, y: 0, w: 12, h: 8 },
              widget: {
                name: "EodashChart",
              },
            },
        },
      ],
    },
    compare: {
      gap: 16,
      loading: {
        id: "Loading Compare",
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "background-map-compare",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            enableCompare: true,
            zoomToExtent: true,
            btns: {
              enableExportMap: false,
              enableCompareIndicators: {
                fallbackTemplate: "expert",
                itemFilterConfig,
              },
              enableBackToPOIs: false,
              enableSearch: true,
              enableGlobe: false,
            },
            btnsPosition: {
              x: "12/9/10",
              y: 1,
              gap: 32
            },
          },
        },
      },
      widgets: [
        {
          id: "Tools",
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 2 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              itemFilterConfig,
            },
          },
        },
        // compare indicators
        {
          id: "Compare Tools",
          type: "internal",
          title: "Compare Tools",
          layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 2 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              indicatorBtnText: "Select second indicator",
              itemFilterConfig: {
                ...itemFilterConfig,
                enableCompare: true,
              },
            },
          },
        },
        {
          id: "Layers",
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 1, w: "3/3/2", h: 5 },
          widget: {
            name: "EodashLayerControl",
            properties: {
              cssVars: {
                "--list-padding": "1rem"
              },
            },
          },
        },
        {
          id: "Comparison Layers",
          title: "Comparison Layers",
          layout: { x: "9/9/10", y: 1, w: "3/3/2", h: 5 },
          type: "internal",
          widget: {
            name: "EodashLayerControl",
            properties: {
              map: "second",
              cssVars: {
                "--list-padding": "1rem"
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Date Picker",
                  type: "internal",
                  layout: { x: 4, y: 3, w: 4, h: 9 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                                on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) =>
            window.eodashStore.actions.includesProcess(selectedSTAC) && {
              id: "Process",
              type: "internal",
              title: "Processes",
              layout: { x: 0, y: 6, w: "3/3/2", h: 5 },
              widget: {
                name: "EodashProcess",
              },
            },
        },
        {
          defineWidget: (_, updatedCompareStac) =>
            window.eodashStore.actions.includesProcess(updatedCompareStac, true) && {
              id: "CompareMapProcess",
              type: "internal",
              title: "Processes",
              layout: { x: 9, y: 6, w: "3/3/2", h: 5 },
              widget: {
                name: "EodashProcess",
                properties: {
                  enableCompare: true,
                },
              },
            },
        },
                {
          defineWidget: () =>
            window.eodashStore.actions.shouldShowChartWidget() && {
              id: "ProcessResultChart",
              type: "internal",
              title: "Chart",
              layout: { x: 0, y: 0, w: 6, h: 8 },
              widget: {
                name: "EodashChart",
              },
            },
        },
        {
          defineWidget: () =>
            window.eodashStore.actions.shouldShowChartWidget(true) && {
              id: "ProcessResultChartCompare",
              type: "internal",
              title: "Compare Chart",
              layout: { x: 6, y: 0, w: 6, h: 8 },
              widget: {
                name: "EodashChart",
                properties: {
                  enableCompare: true,
                },
              },
            },
        },
      ],
    },
  },
};
