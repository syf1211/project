<template>
  <div class='setFocus'>
    <h1>{{msg}}</h1>
    <chart :options='polar'></chart>
    <table-header></table-header>
    <table-bar :tableList='tableList' @getStaffList='getStaffList'></table-bar>
  </div>
</template>

<script>
import tableHeader from './components/tableHeader'
import tableBar from './components/tableBar'
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableList: [],
      msg: '员工管理',
      polar: {
        title: {
          text: '南丁格尔玫瑰图',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        series: [
          {
            name: '半径模式',
            type: 'pie',
            radius: [20, 80],
            center: ['55%', '50%'],
            roseType: 'radius',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              {value: 10, name: 'rose1'},
              {value: 5, name: 'rose2'},
              {value: 15, name: 'rose3'},
              {value: 25, name: 'rose4'},
              {value: 20, name: 'rose5'},
              {value: 35, name: 'rose6'},
              {value: 30, name: 'rose7'},
              {value: 40, name: 'rose8'}
            ]
          }
        ]
      }
    }
  },
  components: {
    tableBar,
    tableHeader
  },
  methods: {
    getStaffList ({page = 1, pageSize = 5}) {
      this.$http.get('/api/tableList', {
        params: {
          page: page - 1,
          pageSize
        }
      }).then(res => {
        this.tableList = res
      })
    }
  },
  created () {
    this.getStaffList({})
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
h1{
  font-weight:bold;
  font-size:20px;
  border-bottom:1px solid #ccc;
  line-height:40px;
  padding-left:20px;
  box-sizing:border-box;
}
.echarts{
  height: 300px;
  width: 300px;
}
.echarts div{
  width:300px;
}
canvas{
    width:300px;
}
</style>
