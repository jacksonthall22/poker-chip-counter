<script lang="ts">
import {defineComponent} from "vue";
// import AutosizeInput from 'vue-autosize-input';

const SUPPORTED_COLORS = [
  'white',
  'red',
  'blue',
  'green',
  'black',
  // 'purple',
  // 'yellow',
  // 'gray',
  // 'orange',
  // 'pink'
] as const;

interface ColorData {
  bgColor: String,
  textColor: String,
}

type ColorDataMap = {
  [K in typeof SUPPORTED_COLORS[number]]: ColorData
}

const COLOR_DATA_MAP: ColorDataMap = {
  white: {
    bgColor: '#f5f0e2',
    textColor: '#231f20',
  },
  red: {
    bgColor: '#bc2943',
    textColor: '#f7f5f0',
  },
  blue: {
    bgColor: '#1d5e84',
    textColor: '#f7f5f0',
  },
  green: {
    bgColor: '#40b658',
    textColor: '#f7f5f0',
  },
  black: {
    bgColor: '#231f20',
    textColor: '#f7f5f0',
  },
  // yellow: {
  //   bgColor: '#eec35d',
  //   textColor: '',
  // }
};

export default defineComponent({
  name: "PokerChip",
  components: {
    // AutosizeInput
  },
  props: {
    value: Number,
    color: String,
  },
  data() {
    return {
      value1: '',
      bgColor: COLOR_DATA_MAP[this.color].bgColor,
      textColor: COLOR_DATA_MAP[this.color].textColor
    }
  },
  emits: ['valueChanged'],
  methods: {
    onInput(e) : void {
      let newValue = Math.max(parseInt(e.target.value.trim()), 0);

      if (!isNaN(newValue)) {
        this.$emit("valueChanged", newValue)
        // console.log('New chip value emitted: ' + newValue)
      }
      // else {
      //   console.log('New chip value INVALID, not emitted: ' + newValue)
      // }
    },
    onChange(e) : void {
      e.target.value = this.$props.value;
    }
  }
})
</script>

<template>
<!--  <autosize-input-->
<!--      v-model="value1"-->
<!--      @change="onChange"-->
<!--  />-->
  <div class="chip">
    <input id="input"
           type="number"
           min=0
           :value="value"
           @input="onInput"
           @change="onChange"
    >
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap');

.chip {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 10rem;
  width: 10rem;

  background-color: v-bind(bgColor);
  color: v-bind(textColor);
  border: 1.5rem dashed v-bind(textColor);
  border-radius: 50%;

  font-family: 'Raleway', sans-serif;
}

.chip p {
  line-height: 1;
  display: inline-block;
  font-size: 1rem;
  text-align: right;
}

.chip input {
  width: 50%;
  height: 50%;
  line-height: 1rem;
  border: none;
  border-radius: 50%;
  fill-opacity: 0.8;

  padding: 0;
  margin: 0 5px;

  font-weight: bold;
  font-size: 1.75rem;
  vertical-align: middle;

  background-color: v-bind(textColor);
  color: v-bind(bgColor);
  text-align: center;
}
.chip:before {
  content: '$';
  position: absolute;
  left: 0.5rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: v-bind(textColor);
}

/* Chrome, Safari, Edge, Opera */
.chip input::-webkit-outer-spin-button,
.chip input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.chip input[type=number] {
  -moz-appearance: textfield;
}

</style>