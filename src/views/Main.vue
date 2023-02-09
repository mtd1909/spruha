<template>
  <div class="wrapper">
    <Sidebar />
    <Header />
    <div class="main">
      <router-view />
    </div>
    <Footer />
    <div class="back-to-top" @click="backToTop">
      <i class="fa-solid fa-arrow-up" />
    </div>
    <div class="overlay__container" />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Sidebar, Header, Footer },
  mounted () {
    //===== Click Show Sidebar =====//
    const sidebar = document.querySelector('.sidebar')
    const btn = document.querySelector('.header__btn-menu')
    const btnBackTop = document.querySelector('.back-to-top')
    const overlayContainer = document.querySelector('.overlay__container')

    window.addEventListener('scroll', () => {
      var y = window.scrollY;
      if (y > 0) {
        btnBackTop.classList.add('open');
      }
      else {
        btnBackTop.classList.remove('open');
      }
    });
    if (window.innerWidth >= 992) {
      btn.addEventListener('click', () => {
        sidebar.classList.toggle('close')
        overlayContainer.classList.toggle('menu_bars_overlay')
      })
    }
 else {
      sidebar.classList.add('hide')
       btn.addEventListener('click', () => {
        sidebar.classList.toggle('hide')
      })
    }
    btn.addEventListener('click', () => {
      overlayContainer.classList.toggle('menu_bars_overlay')
    })
    overlayContainer.addEventListener('click', () => {
      overlayContainer.classList.remove('menu_bars_overlay')
      sidebar.classList.add('hide')
    })
    },
  methods: {
    backToTop () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
}
</script>
