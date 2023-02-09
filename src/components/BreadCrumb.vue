<template>
  <div class="breadcrumb d-flex">
    <div class="breadcrumb__left">
      <h2 class="breadcrumb__title">
        {{ title }}
      </h2>
      <ul class="breadcrumb__link d-flex">
        <li class="breadcrumb__link-items">
          <router-link :to="{ name: 'Home'}">
            {{ page }}
          </router-link>
        </li>
        <li class="breadcrumb__link-items">
          {{ subpages }}
        </li>
      </ul>
    </div>
    <div class="breadcrumb__right d-flex">
      <div
        v-for="(itemsBreadcrumb, index) in btnBreadcrumb"
        :key="index"
        class="breadcrumb__btn d-flex"
      >
        <i :class="itemsBreadcrumb.icon" />
        {{ itemsBreadcrumb.btn }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['subpages', 'title', 'page'],
  data () {
    return {
      btnBreadcrumb: [
        {
          icon: 'fa-light fa-download',
          btn: 'Import'
        },
        {
          icon: 'fa-regular fa-filter',
          btn: 'Filter'
        },
        {
          icon: 'fa-light fa-cloud-arrow-down',
          btn: 'Download Report'
        },
      ]
    }
  }
}
</script>