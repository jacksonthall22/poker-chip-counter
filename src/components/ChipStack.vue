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
    },
    onInput(e) : void {
      let newNumChips = Math.max(parseInt(e.target.value.trim()), 0);

      if (!isNaN(newNumChips)) {
        this.numChips = newNumChips
        this.$emit("numChipsChanged", newNumChips)
      } else {
        this.numChips = 0
      }
    },
    onChange(e) : void {
      e.target.value = this.numChips
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
    <p>× <input type="number"
                :value="numChips"
                min=0
                @input="onInput"
                @change="onChange" /></p>
    <div class="button-box">
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
  row-gap: 1rem;

  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  //margin: 20px;
  border-radius: 0.5rem;
}

@media only screen and (max-width: 600px) {
  .wrapper {
    padding: 20px;
  }

  .button-box {
    display: none;
  }
}

.wrapper p {
  font-size: 2rem;
}

.wrapper input {
  width: 5rem;
  text-align: center;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  color: inherit;
  font-size: inherit;
}

/* Chrome, Safari, Edge, Opera */
.wrapper input::-webkit-outer-spin-button,
.wrapper input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.wrapper input[type=number] {
  -moz-appearance: textfield;
}

.button-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.button-row > * {
  font-size: 1rem;
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  flex-grow: 0;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
}

</style>
