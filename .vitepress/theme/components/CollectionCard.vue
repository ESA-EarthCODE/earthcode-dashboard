<template>
  <div class="collection-card">
    <div
      class="collection-card__header"
      :style="{
        backgroundColor: resolvedHeaderBg,
        color: headerTextColor,
      }"
    >
      <slot name="header">
        <h3 class="collection-card__title">{{ title }}</h3>
      </slot>
    </div>
    <div class="collection-card__body">
      <div
        v-if="resolvedIcon || $slots.icon"
        class="collection-card__icon-wrapper"
      >
        <slot name="icon">
          <img
            :src="resolvedIcon"
            :alt="iconAlt || title"
            class="collection-card__icon"
            loading="lazy"
          />
        </slot>
      </div>
      <div class="collection-card__content">
        <div class="collection-card__text">
          <slot>
            <p v-if="description" v-html="description"></p>
          </slot>
        </div>

        <div
          v-if="
            resolvedExploreLink || parsedCollections.length || $slots.actions
          "
          class="collection-card__actions"
        >
          <slot name="actions">
            <div
              v-if="parsedCollections.length"
              class="collection-card__collections"
            >
              <span class="collection-card__collections-label">
                Collection details:
              </span>
              <div class="collection-card__collections-list">
                <a
                  v-for="col in parsedCollections"
                  :key="col.Name || col.name"
                  :href="col.Url || col.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="collection-card__collection-link"
                >
                  {{ col.Name || col.name }}
                  <svg
                    class="collection-card__external-icon"
                    viewBox="0 0 24 24"
                    width="13"
                    height="13"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div v-if="resolvedExploreLink" class="collection-card__explore">
              <a
                :href="resolvedExploreLink"
                class="VPButton collection-card__btn-explore"
              >
                {{ exploreText }}
                <svg
                  class="collection-card__btn-arrow"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4Z"
                  />
                </svg>
              </a>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { withBase } from "vitepress";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  iconAlt: {
    type: String,
    default: "",
  },
  headerBgColor: {
    type: String,
    default: "#eef2f5",
  },
  headerColor: {
    type: String,
    default: "",
  },
  headerTextColor: {
    type: String,
    default: "#003247",
  },
  exploreLink: {
    type: String,
    default: "",
  },
  exploreText: {
    type: String,
    default: "Explore on Map",
  },
  collections: {
    type: [Array, String],
    default: () => [],
  },
  description: {
    type: String,
    default: "",
  },
});

const resolvedHeaderBg = computed(() => {
  return props.headerColor || props.headerBgColor || "#eef2f5";
});

const resolvedIcon = computed(() => {
  if (!props.icon) return "";
  if (
    props.icon.startsWith("http://") ||
    props.icon.startsWith("https://") ||
    props.icon.startsWith("data:")
  ) {
    return props.icon;
  }
  const clean = props.icon.replace(/^(\.\/|\/)/, "");
  return withBase(`/${clean}`);
});

const resolvedExploreLink = computed(() => {
  if (!props.exploreLink) return "";
  if (
    props.exploreLink.startsWith("http://") ||
    props.exploreLink.startsWith("https://")
  ) {
    return props.exploreLink;
  }
  const clean = props.exploreLink.replace(/^(\.\/|\/)/, "");
  return withBase(`/${clean}`);
});

const parsedCollections = computed(() => {
  if (!props.collections) return [];
  if (Array.isArray(props.collections)) return props.collections;
  if (typeof props.collections === "string") {
    try {
      return JSON.parse(props.collections);
    } catch {
      return [];
    }
  }
  return [];
});
</script>

<style scoped>
.collection-card {
  background: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
}

.collection-card__header {
  padding: 0.5rem 0.5rem;
  background-color: #eef2f5;
  color: #003247;
  display: flex;
  align-items: center;
}

.collection-card__title {
  margin: 0;
  font-family: "NotesESAbold", Arial, sans-serif;
  font-size: 1.35rem;
  line-height: 1.3;
  color: inherit;
  font-weight: 700;
}

.collection-card__body {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  gap: 2.5rem;
  background: #ffffff;
}

.collection-card__icon-wrapper {
  flex-shrink: 0;
  width: 200px;
  min-width: 200px;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.collection-card__icon {
  width: 200px;
  max-width: 200px;
  max-height: 240px;
  object-fit: contain;
  display: block;
}

.collection-card__content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.collection-card__text {
  color: #101213;
  font-family: Arial, sans-serif;
  font-size: 1.05rem;
  line-height: 1.65;
}

.collection-card__text :deep(p) {
  margin: 0;
  color: #101213;
}

.collection-card__text :deep(p + p) {
  margin-top: 1rem;
}

.collection-card__text :deep(strong) {
  font-weight: 700;
  color: #003247;
}

.collection-card__actions {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid #eef2f5;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
}

.collection-card__collections {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.collection-card__collections-label {
  font-family: "NotesESAbold", Arial, sans-serif;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #556b78;
}

.collection-card__collections-list {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.collection-card__collection-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #003247 !important;
  text-decoration: none;
  border-bottom: 1.5px solid #00ae9d !important;
  padding-bottom: 2px;
  width: fit-content;
}

.collection-card__collection-link:hover {
  color: #00ae9d !important;
  border-color: #00838f !important;
}

.collection-card__external-icon {
  flex-shrink: 0;
  opacity: 0.8;
}

.collection-card__btn-explore {
  background-color: #003247 !important;
  color: #ffffff !important;
  border-radius: 3px !important;
  border: none !important;
  border-bottom: none !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  font-family: Arial, sans-serif !important;
  letter-spacing: 0.06rem !important;
  text-transform: uppercase !important;
  font-size: 0.8rem !important;
  font-weight: 600 !important;
  padding: 10px 18px !important;
  text-decoration: none !important;
}

.collection-card__btn-explore:hover {
  background-color: #00ae9d !important;
  color: #ffffff !important;
}

.collection-card__btn-arrow {
  flex-shrink: 0;
}


@media (max-width: 768px) {
  .collection-card__header {
    padding: 0.875rem 1.25rem;
  }

  .collection-card__title {
    font-size: 1.15rem;
  }

  .collection-card__body {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 0.25rem 0.25rem;
  }

  .collection-card__icon-wrapper {
    width: 160px;
    min-width: 160px;
    max-width: 160px;
  }

  .collection-card__icon {
    width: 160px;
    max-width: 160px;
  }

  .collection-card__content {
    font-size: 0.95rem;
    width: 100%;
  }

  .collection-card__actions {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .collection-card__btn-explore {
    width: 100%;
    justify-content: center;
  }
}
</style>
