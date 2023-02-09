<template>
  <div class="container__fluid">
    <BreadCrumbs
      subpages="Crypto-Market"
      title="Crypto Currencies"
      page="Crypto Currencies"
    />
    <div class="wrap__card d-flex">
      <div
        v-for="(itemCryptoCard, indexCryptoCard) in cryptoCard"
        :key="indexCryptoCard"
        class="card"
      >
        <div class="card__left">
          <h4>{{ itemCryptoCard.title }}</h4>
          <h3>{{ itemCryptoCard.number }}<span>${{ itemCryptoCard.price }}</span></h3>
          <p>
            <span
              :class="{ red : itemCryptoCard.isRed}"
            >
              {{ itemCryptoCard.percent }}%</span>Volumn -{{ itemCryptoCard.usdt }} USDT
          </p>
        </div>
        <div class="card__right" />
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumb.vue'
export default {
  components: {BreadCrumbs},
  data () {
    return {
      cryptoCard: [
        {
          title: 'BTC / USD',
          number: '34.4324',
          price: '29.42',
          percent: '-0.22',
          usdt: '76,434.57',
          isRed: true
        },
        {
          title: 'ETH / USD',
          number: '29.4124',
          price: '23.15',
          percent: '+0.22',
          usdt: '23,346.56'
        },
        {
          title: 'XRP / USD',
          number: '34.5674',
          price: '45.24',
          percent: '-0.42',
          usdt: '56,456.12',
          isRed: true
        },
        {
          title: 'LTC / USD',
          number: '45.4542',
          price: '63.34',
          percent: '+0.12',
          usdt: '34,462.57'
        },
      ],
    }
  }
}
</script>