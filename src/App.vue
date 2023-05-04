<script lang="ts">
import ChipStackBox from "./components/ChipStackBox.vue";


// https://stackoverflow.com/a/16233919/7304977
// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export default {
  components: {ChipStackBox},
  data() {
    return {
      totalValue: 0,
    }
  },
  methods: {
    onTotalValueChange(newTotal) : void {
      this.totalValue = newTotal
    },
    formatTotal(totalValue) : string {
      return formatter.format(totalValue)
    }
  }
}
</script>

<template>
  <header>
    <img alt="Poker Cash Out" class="logo" src="./assets/card-suits.png"/>
    <div class="wrapper">
      <h1 class="green">Poker Cash Out</h1>
      <h3>
        Enter chip values and amounts below.
      </h3>
      <h2>Current total: {{ formatTotal(this.totalValue) }}</h2>
    </div>
  </header>

  <main>
    <ChipStackBox @total-changed=this.onTotalValueChange ref="chipStackBox"/>
  </main>
</template>

<style scoped>

.logo {
  background-color: antiquewhite;
  border-radius: 50%;
  padding: 1rem;
  height: 5rem;
  width: 5rem;
}

header {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  header {
    margin-top: 5rem;
  }
  .logo {
    width: 8rem;
    height: 8rem;
  }
}

</style>
