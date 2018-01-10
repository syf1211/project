<template>
  <div class="health-box">
    <h1>健康告知</h1>
    <div class="health-con">
      <div
        class='healthy-content'
        v-for='(item, index) in healthData.questions'
        :key='index'
      >
        <p >{{item.question_sort}}、{{item.content}}</p>
        <aside class="aside" v-if='item.answers.length >= 1'>
          <span class="label" v-for='(val, ind) in item.answers' :key='ind'>
            <input 
              type="radio"
              :value="val.value"
              :id="`${index}-${ind}`"
              :name="item.key_code"
              v-model="item.control_value"
            >
            <label for="`${index}-${ind}`">{{val.name}}</label>
          </span>
        </aside>
      </div>
    </div>
    <div class="nextBtn"><button @click='nextBtn'>下一步</button></div>
  </div>
</template>
<script>
export default {
  props: ['healthData', 'detailsData'],
  data () {
    return {
      health_id: ''
    }
  },
  methods: {
    nextBtn () {
      this.$store.dispatch('productList/submitHeadthy', {
        product_id: this.detailsData.product.product_id,
        healthy_id: this.healthData.health_id,
        questions: this.healthData.questions,
        genes: this.detailsData.genes
      }).then((res) => {
        this.health_id = res.health_id
        this.$emit('nextBtn', this.health_id)
      })
    }
  },
  created () {
    // console.log(this.healthData, 'aaa')
  }
}
</script>

<style scoped lang='less'>
.health-box{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  box-sizing: border-box;
  padding: 0 0.5rem;
  h1{
    height: 1.5rem;
    line-height:1.5rem;
    text-align:center;
    font-size: 0.5rem;
  }
  .aside{
    margin-top:0.5rem; 
    .label{
      margin-right: 0.3rem;
    }
  }
  .health-con{
    width: 100%;
    p{
      line-height: 0.5rem;
      font-size: 0.3rem;
    }
  }
  .nextBtn{
   text-align: center;
   margin-top:0.5rem; 
   button{
    width: 5rem;
    height: 0.8rem;
    border-radius: 0.5rem;
    background: #f09;
    border:0;
    color: #fff;
    font-size: 0.38rem;
   }
  }
}
</style>
