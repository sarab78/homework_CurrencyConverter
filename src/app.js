import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
new Vue({
  el: "#app",
  data: {
    rates: {},
    baseAmount: 0,
    selectedCurrency: ""


  },
  computed: {
    convertFromEuros: function(){
      return (this.baseAmount * this.rates[this.selectedCurrency])
    }
  },
  filters: {
    twoDecimalPlaces: function(number){
      return number.toFixed(2)
    }
  },

  mounted(){
    fetch("https://api.exchangeratesapi.io/latest")
    .then(res => res.json())
    .then(data => {
      data.rates['EUR'] = 1
      this.rates = data.rates
    })
  }
})
})
