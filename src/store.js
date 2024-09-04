import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      currencyList: ['USD', 'EUR', 'RUB'],
      defaultCurrency: 'RUB',
      selectedCurrency: null,

      choiceCurrency(currencyName) {
        this.selectedCurrency = currencyName;
        localStorage.setItem('selected-currency', currencyName);
      },
      setCurrency() {
        const selectedCurrency = localStorage.getItem('selected-currency');
        if (selectedCurrency) {
          this.selectedCurrency = selectedCurrency;
        } else {
          this.choiceCurrency(this.defaultCurrency);
        }
      },

      course: undefined,
      getCourse() {
        fetch('https://status.neuralgeneration.com/api/currency')
          .then((response) => response.json())
          .then((data) => {
            this.course = data;
          })
          .catch(() => {
            this.course = null;
          });
      },
    };
  },
});

export default store;
