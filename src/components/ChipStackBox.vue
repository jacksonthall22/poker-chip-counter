<script>
import {defineComponent} from "vue";
import ChipStack from "@/components/ChipStack.vue";

export default defineComponent({
  name: 'ChipStackBox',
  components: {
    ChipStack
  },
  data() {
    return {
      chipStacks: [
        {color: 'white', value: 5},
        {color: 'green', value: 10},
        {color: 'blue', value: 25},
        {color: 'red', value: 50},
        {color: 'black', value: 100}
      ],
    }
  },
  emits: ['totalChanged'],
  methods: {
    computeTotal() {
      // console.log('ChipStackBox.vue: computeTotal() called')
      if (!this.$refs.chipStackComponents) {
        return 0
      }

      let total = 0
      for (const c of this.$refs.chipStackComponents) {
        total += c.totalValue
      }
      // console.log('ChipStackBox.vue: computeTotal(): total=' + total)
      this.$emit("totalChanged", total)
    },
  }
})
</script>

<template>
  <div class="chip-wrapper">
    <ChipStack v-for="c of this.chipStacks"
               :color=c.color
               :value=c.value
               ref="chipStackComponents"
               @value-changed="computeTotal"
               @num-chips-changed="computeTotal"
    />
  </div>
</template>

<style scoped>

.chip-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
}

.chip-wrapper > * {
  width: 15rem;
}

@media (min-width: 1024px) {
  .chip-wrapper {
    min-width: 560px;
  }
}
</style>
