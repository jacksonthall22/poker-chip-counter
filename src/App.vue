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

  <footer>
    <a href="https://github.com/jacksonthall22/poker-chip-counter/tree/main">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    </a>
  </footer>
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
  margin-top: 2rem;
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

footer {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;

  margin: 2rem auto;
}

footer a {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

footer svg {
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 0.1rem;
  border-radius: 50%;
  opacity: 0.1;
  transition: all 0.1s ease-in-out;
}
footer svg:hover {
  opacity: 0.8;
}

</style>
