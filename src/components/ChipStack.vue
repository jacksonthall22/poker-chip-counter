<script lang="ts">
import {defineComponent} from "vue";
import PokerChip from "./PokerChip.vue";
import UpdateNumChipsButton from "./UpdateNumChipsButton.vue";

export default defineComponent({
  name: "ChipStack",
  components: {UpdateNumChipsButton, PokerChip},
  props: {
    value: Number,
    color: String
  },
  data() {
    return {
      numChips: 0,
      localValue: this.value,
    }
  },
  emits: ['valueChanged', 'numChipsChanged'],
  methods: {
    onValueChanged(newValue: Number) : void {
      this.localValue = newValue
      this.$emit('valueChanged')
      // console.log('ChipStack.vue: new value ' + newValue + ' emitted')
    },
    updateNumChips(dChips: Number) : void {
      this.numChips += dChips;
      this.numChips = Math.max(this.numChips, 0);
      this.$emit('numChipsChanged')
    }
  },
  computed: {
    totalValue() {
      return this.numChips * this.localValue;
    }
  }
})
</script>

<template>
  <div class="wrapper">
    <PokerChip :value="localValue"
               :color="color"
               @value-changed="onValueChanged"
               ref="chip" />
    <p>× {{numChips}}</p>
    <div class="button-row">
      <UpdateNumChipsButton :d-chips=1 @click="updateNumChips" />
      <UpdateNumChipsButton :d-chips=5 @click="updateNumChips" />
      <UpdateNumChipsButton :d-chips=10 @click="updateNumChips" />
    </div>
    <div class="button-row">
      <UpdateNumChipsButton :d-chips=-1 @click="updateNumChips" />
      <UpdateNumChipsButton :d-chips=-5 @click="updateNumChips" />
      <UpdateNumChipsButton :d-chips=-10 @click="updateNumChips" />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap');

input {
  text-align: center;
}

.wrapper {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin: 20px;
  border-radius: 0.5em;
}

.wrapper p {
  font-size: 2em;
}

.button-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.button-row * {
  width: 50px;
  height: 50px;
  font-family: 'Raleway', sans-serif;
  font-size: 1em;
}

</style>
