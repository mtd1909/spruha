<template>
  <div class="header">
    <div class="container__fluid">
      <div class="wrap__header d-flex">
        <div class="header__left d-flex">
          <div href="#" class="header__btn-menu">
            <span />
          </div>
          <div class="header__input d-flex">
            <div class="header__input-select">
              <el-select v-model="value" placeholder="Choose one">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <input type="search" class="header__input-search" placeholder="Search for anything...">
            <button class="header__btn-search">
              <i class="ti-search" />
            </button>
          </div>
        </div>
        <div class="header__right d-flex">
          <a class="header__right-items">
            <i class="fa-light fa-moon" />
          </a>
          <a class="header__right-items">
            <img src="assets/images/Flag_of_the_United_Kingdom.png" alt="flag United Kingdom">
          </a>
          <a class="header__right-items">
            <i class="fa-regular fa-expand" />
          </a>
          <a class="header__right-items">
            <i class="fa-regular fa-bell" />
            <span>4</span>
          </a>
          <a class="header__right-items">
            <i class="fa-regular fa-message" />
            <span>6</span>
          </a>
          <a class="header__right-items">
            <img src="assets/images/avt.jpg" alt="avatar image">
          </a>
          <a class="header__right-items">
            <i class="fa-regular fa-align-right" />
          </a>
          <a class="header__right-items">
            <i class="fa-regular fa-gear" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: 'IT Projects',
        label: 'IT Projects'
      }, {
        value: 'Business Case',
        label: 'Business Case'
      }, {
        value: 'Microsoft Project',
        label: 'Microsoft Project'
      }, {
        value: 'Risk Management',
        label: 'Risk Management'
      }, {
        value: 'Team Building',
        label: 'Team Building'
      }],
      value: '',
    }
  }
}
</script>