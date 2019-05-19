<template>
  <div class="calculator" onselectstart="return false">
    <div class="display">
      {{ display }}
    </div>
    <div class="button darker" @click="clear">
      C
    </div>
    <div class="button darker" @click="sign">
      +/-
    </div>
    <div class="button darker" @click="percent">
      %
    </div>
    <div class="button operator" @click="divide">
      ÷
    </div>
    <div class="button" @click="append(7)">
      7
    </div>
    <div class="button" @click="append(9)">
      9
    </div>
    <div class="button" @click="append(8)">
      8
    </div>
    <div class="button operator" @click="multiply">
      x
    </div>
    <div class="button" @click="append(4)">
      4
    </div>
    <div class="button" @click="append(5)">
      5
    </div>
    <div class="button" @click="append(6)">
      6
    </div>
    <div class="button operator" @click="subtract">
      -
    </div>
    <div class="button" @click="append(1)">
      1
    </div>
    <div class="button" @click="append(2)">
      2
    </div>
    <div class="button" @click="append(3)">
      3
    </div>
    <div class="button operator" @click="add">
      +
    </div>
    <div class="button zero" @click="append(0)">
      0
    </div>
    <div class="button darker" @click="decimal">
      .
    </div>
    <div class="button operator" @click="equal">
      =
    </div>
  </div>
</template>

<script>
  import ICalculator from "../rest/ICalculator" // generated REST API

  export default {
    data() {
      return {
        previous: null,
        display: 0,
        operator: null,
        operatorClicked: false
      };
    },
    methods: {
      clear() {
        this.display = 0;
      },
      append(s) {
        if (this.operatorClicked === true) {
          this.display = "";
          this.operatorClicked = false;
        }
        this.display =
          this.display === 0
            ? (this.display = s)
            : "" + this.display + s;
      },
      decimal() {
        if(this.display.toString().indexOf(".") === -1) {
          this.append(".");
        }
      },
      sign() {
        this.display = -this.display;
      },
      percent() {
        ICalculator.percent(this.display)
          .then(response => (this.display = response.data));
      },
      divide() {
        this.operator = ICalculator.divide;
        this.previous = this.display;
        this.operatorClicked = true;
      },
      multiply() {
        this.operator = ICalculator.multiply;
        this.previous = this.display;
        this.operatorClicked = true;
      },
      subtract() {
        this.operator = ICalculator.subtract;
        this.previous = this.display;
        this.operatorClicked = true;
      },
      add() {
        this.operator = ICalculator.add;
        this.previous = this.display;
        this.operatorClicked = true;
      },
      equal() {
        // result of REST API
        this.operator(this.previous, this.display)
          .then(response => (this.display = response.data));
        this.previous = null;
        this.operatorClicked = true;
      }
    }
  };
</script>

<style scoped>
  .calculator {
    margin: auto;
    width: 80vw;
    font-size: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(10vh, auto);
    border: 1px solid #111;
    line-height: 10vh;
  }

  .display {
    grid-column: 1 / 5;
    background-color: #ececec;
    border: 1px solid #111;
    font-size: 2.5rem;
    cursor: default;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 1rem;
  }

  .zero {
    grid-column: 1 / 3;
  }

  .button {
    background-color: hsl(0, 0%, 75%);
    border: 1px solid #111;
    cursor: pointer;
  }

  .operator {
    background-color: hsl(73, 60%, 60%);
  }

  .darker {
    background-color: hsl(0, 0%, 65%);
  }

  @media only screen and (min-width: 768px) {
    .calculator {
      width: 50vw;
      grid-auto-rows: minmax(7.5vh, auto);
      line-height: 7.5vh;
    }
  }

  @media only screen and (min-width: 1024px) {
    .calculator {
      width: 30vw;
      grid-auto-rows: minmax(7.5vh, auto);
      line-height: 7.5vh;
    }
  }

  @media only screen and (min-width: 1280px) {
    .calculator {
      width: 20vw;
    }
  }

  @media only screen and (min-width: 1600px) {
    .calculator {
      width: 15vw;
    }
  }
</style>
