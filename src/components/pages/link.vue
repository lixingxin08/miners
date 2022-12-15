<template>
  <div class="link">
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
          <div class="flex_f" style="margin-bottom: 10px">
            <a-input ref="userNameInput" v-model="formdata.country_code" placeholder="+" style="width:84px;margin-right: 6px">
              <a-icon slot="prefix" type="phone" theme="filled" style="color: #ff4500;" />
            </a-input>
            <a-input style="flex:1;" v-model="formdata.phone"  />
          </div>
          <div class="flex_f" style="margin-bottom: 10px;">
            <a-input ref="userNameInput" v-model="formdata.email" placeholder="Email">
              <a-icon slot="prefix" type="mail" theme="filled" style="color: #ff4500;" />
            </a-input>
          </div>
          <div class="flex_f" style="margin-bottom: 10px;">
            <template>
              <a-textarea
              v-model="formdata.description"
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
      " >
        <div>
          <a-icon type="phone" @click="closelink()" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      opentype: 0,
      showtype: true,
      formdata:{
        country_code:'',
        phone:'',
        email:'',
        description:''
      }
    };
  },
  methods: {
    async feedback() {
      // let res = resdata
      // this.bannerdata = res.data
     
      let res = await this.$http.post(this.$api.feedback,this.formdata)
      if(res.data.code==200){
        this.$message.succes(res.message)
      }else {
        this.$message.error(res.message)
      }
    },
    setdata(){
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
  },
};
</script>
<style>
.link {
  width: 300px;
  height: 450px;
  position: fixed;
  right: 5px;
  bottom: 5px;
  overflow: hidden;
  z-index: 999;
}

.link_box {
  position: relative;
}

.card {
  width: 300px;
  height: 450px;
  position: absolute;
  background-color: #fff;
  border: 4px solid orange;
}

.card_t {
  width: 100%;
  background-color: orange;
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
  animation: toclone 3s ease 0s 1;
  animation-fill-mode: forwards;
}

.ishow {
  animation: toshow 3s ease 0s 1;
  animation-fill-mode: forwards;
}

.cardimg {
  width: 300px;
  height: 450px;
  position: absolute;
  font-size: 40px;
  color: orange;
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
