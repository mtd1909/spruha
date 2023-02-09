<template>
  <div class="card__title">
    <div class="dashboard__box-title">
      {{ title }}
    </div>
    <div class="dashboard__box-text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'text']
}
</script>