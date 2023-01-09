<template>
  <div class="link">
    <div class="link_top">
      <div class="link_topimg" :class="opentype == 1?'link_topimg':'link_topimg2'">
        <div  @mouseenter="changehover()" @mouseleave="leavehover()"> <img src="../../img/linklogo1.png" alt="" class="link_toplogo"></div>
        <div class="link_top_msg flex_a" v-if="hovertype">
          <img src="../../img/erweima.png" alt="">
        </div>
      </div>

    </div>
    <div class="link_box">
      <div class="card" :class="
        opentype == 0
          ? ''
          : '' || opentype == 1
            ? 'isclone'
            : '' || opentype == 2
              ? 'ishow'
              : ''
      ">
        <div class="card_t flex_b">
          <div>
            <a-icon type="edit" theme="filled" class="edit" />Leave A Message
          </div>
          <div @click="closelink()" style="cursor: pointer;">
            <a-icon type="close" />
          </div>
        </div>
        <div class="card_c">
          <div style="color:#a6a6a6;margin-bottom:16PX ;">
            If you are interested in our products and want to know more
            details,please leave a message here,we will reply you as soon as we
            can.
          </div>
          <div class="fool_inp" style="display:flex; align-items: center; margin-bottom: 6px;margin-top: 10px">
            <a-input placeholder="Name" v-model="formdata.name" style="margin-right:6px" />
            <a-input placeholder="Whatapp/tele" v-model="formdata.contact" />
          </div>
          <div class="flex_f" style="margin-bottom: 10px">
            <a-input ref="userNameInput" v-model="formdata.country_code" placeholder="+"
              style="width:84px;margin-right: 6px">
              <a-icon slot="prefix" type="phone" theme="filled" style="color: #4361ff;" />
            </a-input>
            <a-input style="flex:1;" v-model="formdata.phone" />
          </div>
          <div class="flex_f" style="margin-bottom: 10px;">
            <a-input ref="userNameInput" v-model="formdata.email" placeholder="Email">
              <a-icon slot="prefix" type="mail" theme="filled" style="color: #4361ff;" />
            </a-input>
          </div>
          <div class="flex_f" style="margin-bottom: 10px;">
            <template>
              <a-textarea v-model="formdata.description"
                placeholder="Enter product details (such as color,size,materials etc.) and other specific requirements to receive an accurate quote.*"
                :rows="6">
              </a-textarea>
            </template>
          </div>
          <div class="btn_box2" @click="setdata()">
            <div class="btn">Submit</div>
          </div>

        </div>
      </div>
      <div class="cardimg flex_c_e phonecardimg" :class="
        opentype == 0
          ? ''
          : '' || opentype == 1
            ? 'ishow'
            : '' || opentype == 2
              ? 'isclone'
              : ''
      ">
        <div>
          <img src="../../img/linklogo2.png" alt=""  class="link_toplogo" @click="closelink()">
        
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      opentype: 1,
      hovertype: false,
      showtype: true,
      formdata: {
        name: '',
        contact: '',
        country_code: '',
        phone: '',
        email: '',
        description: ''
      }
    };
  },
  methods: {
    async feedback() {
      // let res = resdata
      // this.bannerdata = res.data
      const formData = new FormData()
      let _that = this
      formData.append('name', _that.formdata.name)
      formData.append('contact', _that.formdata.contact)
      formData.append('country_code', _that.formdata.country_code)
      formData.append('phone', _that.formdata.phone)
      formData.append('email', _that.formdata.email)
      formData.append('description', _that.formdata.description)
      let res = await axios({
        url: _that.$api.feedback,
        method: 'post',
        data: formData

      })
      if (res.data.code == 10001) {
                this.$message.success(res.data.msg)
                return
            }
      if (res.data.code == 200) {
        
        this.$message.success(res.data.msg)
      } else {
        this.$message.error(res.data.msg)
      }
    },
    setdata() {
      if (!this.$utils.verNum(this.formdata.country_code)) {
        this.$message.warning('Wrong format of Country Code')
        return
      }
      if (!this.$utils.verNum(this.formdata.phone)) {
        this.$message.warning('Wrong format of mobile phone number')
        return
      }
      if (!this.$utils.verEmail3(this.formdata.email)) {
        this.$message.warning('Wrong format of email')
        return
      }
      this.feedback()
    },
    closelink() {
      if (this.opentype == 0) {
        this.opentype = 1;
      } else if (this.opentype == 1) {
        this.opentype = 2;
      } else if (this.opentype == 2) {
        this.opentype = 1;
      }
    },
    changehover() {
      this.hovertype = true
    },
    leavehover() {
      this.hovertype = false
    }
  },
};
</script>
<style>
.link {
  width: 300px;
  height: 550px;
  position: fixed;
  right: 5px;
  bottom: 5px;
  z-index: 999;
}

.link_top {
  position: relative;
  left: 200px;
}

.link_topimg {
  position: relative;
  top: 150px;
  z-index: 999;
  left: -10px;
}
.link_topimg2{
  position: relative;
  top: 150px;
  z-index: 0;
  left: -10px;
}
.link_toplogo{
  width: 50px;
  height: 50px;
}

.link_top_msg {
  width: 150px;
  height: 150px;
  position: absolute;
  left: -160px;
  top: -75px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;
}

.link_top_msg img {
  width: 100px;
  height: 100px;
}

.link_box {
  position: relative;
}

.card {
  width: 300px;
  height: 450px;
  position: absolute;
  background-color: #fff;
  border: 4px solid #4361ff;
}

.card_t {
  width: 100%;
  background-color: #4361ff;
  color: #fff;
  padding: 10px;
  font-weight: 600;
}

.card_c {
  padding: 10px;
  text-align: left;
  word-break: break-all;
}

.edit {
  margin-right: 10px;
}

.isclone {
  animation: toclone 2s ease 0s 1;
  animation-fill-mode: forwards;

}

.ishow {
  animation: toshow 2s ease 0s 1;
  animation-fill-mode: forwards;
}

.cardimg {
  width: 300px;
  height: 450px;
  position: absolute;
  font-size: 40px;
  color: #4361ff;
  padding-right: 60px;
  left: 300px;
  top: 450px;
}

.cardimg>div {
  cursor: pointer;
}

@keyframes toclone {
  0% {
    left: 0;
    top: 0;
  }

  100% {
    left: 300px;
    top: 450px;
  }
}

@keyframes toshow {
  0% {
    left: 300px;
    top: 450px;
  }

  100% {
    left: 0;
    top: 0;
  }
}
</style>
