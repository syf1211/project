<template>
  <div class="recommend-box">
    <banner :bannerList='bannerList'></banner>
    <content-box>
       <menu-data :menuData='menuData'></menu-data>
    </content-box>
    <content-box>
      <a href='javascrip:;' class='advertise'><img src='//img.haimi.com/Fpt1eouzu2Tmc5C3JMoeN49-4CLe'></a>
    </content-box>
    <content-box>
      <a href='javascrip:;' class='advertise'><img src='//img.haimi.com/FsSof6YcsmmFomdszaRVSy8eqDNO'></a>
    </content-box>
    <content-box title='严选品牌'>
      <div class='yanxuan'>
        <div class='yanxuan-left'>
          <a href='javascrip:;' class='advertise'><img src='//img.haimi.com/FgDc_2t_n2s_5y6sJXq_HC52toxk'></a>
          <a href='javascrip:;' class='advertise'><img src='//img.haimi.com/Fl1dPmAViO5wHlnVKCeX44aqK25X'></a>
        </div>
        <div class='yanxuan-right'><a href='javascrip:;' class='advertise'><img src='//img.haimi.com/Fo6aIswHZTuLTpc1zuFQGT59wfOv'></a></div>
      </div>
    </content-box>

    <content-box title='大家都在买'>
      <imgWord :dataArr='productArr'></imgWord>
    </content-box>
  </div>
</template>

<script>
import banner from './components/banner.vue'
import menuData from './components/menuData.vue'
import ContentBox from '@/components/ContentBox.vue'
import imgWord from '@/views/shouye/components/word'
export default {
  data: function () {
    return {
      msg: '推荐',
      bannerList: [],
      menuData: [
        {
          text: '新人大礼包',
          icon: '//img.haimi.com/FuPMz-_M6cc-EKholObO_ec5niTe'
        },
        {
          text: '领取积分',
          icon: '//img.haimi.com/Fvxjun-u3MAa7vGJnbSiCXlFtepB'
        },
        {
          text: '邀请有礼',
          icon: '//img.haimi.com/Fi2HlhU6SOQ0GqagPJ1whoJAzg57'
        },
        {
          text: '每周新品',
          icon: '//img.haimi.com/Ft0Vx786oXJADIPEamFGp5vew5KY'
        }
      ],
      productArr: []
    }
  },
  components: {
    banner,
    menuData,
    ContentBox,
    imgWord
  },
  created () {
    this.$http.get('/api/banner').then(res => {
      this.bannerList = res.data
    }, error => {
      console.log(error)
    })

    this.$http.get('/api/product', {
      params: {
        type: 0,
        page: 1,
        pageSize: 10
      }
    }).then(res => {
      this.productArr = res.data
    }, error => {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.advertise{
  width:100%;
  display: block;
  img{
    width:100%;
  }
}
.yanxuan{
  width:100%;
  display:flex;
  background:#f7f7f7;
}
.yanxuan-left{
  width:50%;
  a{
    display:block;
    padding-bottom:10px;
  }
}
.yanxuan-right{
  width:50%;
  a{
    display:block;
    img{
      width:100%;
    }
  }
}
</style>
