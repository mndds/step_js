<script setup>
import {numbers, signs, result, input, reset, calc} from './Calculator.vue'
</script>

<template>
  <div class="grid">
      <input v-model="result" type="text" placeholder="0"/>
      <button @click="input(number)" class="cell" v-for="number in numbers" :key="number">{{ number }}</button>
      <button @click="input(sign)" class="cell sign" v-for="sign in signs" :key="sign">{{ sign }}</button>
      <button @click="reset" class="cell sign">C</button>
      <button @click="calc" class="cell sign">=</button>
  </div>
</template>

<style>
.grid {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 200px;
}
.cell {
  flex: 33%;
  height: 50px;
  font-size: 18px;
  margin-bottom: 2%;
  font-weight: 400;
  border: none;
  color: #fff;
  background-color: #182530;
}

.sign {
    background-color: orange;
}

.cell:hover{
  background-color: #243849;
}

input{
    height: 40px;
    margin: 10px;
    text-align: right;
}
</style>
