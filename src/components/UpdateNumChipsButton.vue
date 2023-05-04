<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "UpdateNumChipsButton",
  props: {
    dChips: {
      type: Number,
      required: true,
      validator(value: any) : boolean {
        return Number.isInteger(value)
      }
    }
  },
  emits: ['click'],
  methods: {
    handleClick(e): void {
      this.$emit('click', this.dChips)
    }
  },
  computed: {
    isPos() {
      return this.dChips > 0
    },
    buttonText() {
      return (this.isPos ? '+' : '') + this.dChips
    },
    posNegClass() {
      return this.isPos ? 'pos' : 'neg'
    }
  }
})
</script>

<template>
  <button :class="posNegClass" @click="handleClick">{{ buttonText }}</button>
</template>

<style scoped>

.pos {
  background-color: greenyellow;
  color: black;
}

.neg {
  background-color: orangered;
  color: ghostwhite;
}

</style>