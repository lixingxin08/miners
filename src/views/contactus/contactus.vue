<template>
    <div>
        <div class="contact_t">
            CONTACT WITH BOX TECHNOLOGY GREEN DATA CENTER
            <div class="contact_tb">Contact us and learn more about</div>
        </div>
        <div class="contact_c">
            <div class="content">
                <div class="entent_box flex_fs">
                    <div class="half contact_cl">
                        <div class="contact_cl_i flex_b">
                            <a-input v-model="formdata.country_code" placeholder="+CountryCode" class="contact_inp"
                                style="width:25%;margin-right: 20px;" />
                            <a-input v-model="formdata.phone" placeholder="Your Phone" class="contact_inp"
                                style="flex:1;" />
                        </div>
                        <div class="contact_cl_i flex_b">
                            <a-input v-model="formdata.email" placeholder="Your Email" class="contact_inp"
                                style="width:100%" />
                        </div>
                        <div class="contact_cl_i flex_b">
                            <a-textarea
                                placeholder="Enter product details (such as color,size,materials etc.) and other specific requirements to receive an accurate quote.*"
                                :rows="6" v-model="formdata.description" style="background-color:#FAFAFA" />
                        </div>
                        <div class="contact_cl_i ">
                            <div class="btn_box fool_inp">
                                <div class="btn" @click="setdata()">Send Message</div>
                            </div>
                        </div>
                    </div>
                    <div class="half contact_cr">
                        <div class="font_35 contact_cr_i">We Would Be Happy To Meet You And Learn All About Your
                            Business</div>
                        <div class="font_16 contact_cr_i">If you have any questions about our green data center or want
                            to know more information, please feel free to send us an email, our professional team will
                            reply you as soon as possible!</div>
                    </div>
                </div>
                <div :class="scrolltype?'isopacity':''">
                    <div class="contact_b font_35 ">Let׳s Meet</div>
                    <div class="contact_bt">Please contact us for data center solutions</div>
                    <div class="flex_b">
                        <div class="contact_f box_shadown">
                            <div class="contact_f_icon flex_a">
                                <a-icon type="phone" />
                            </div>
                            <div class="contact_f_ic">Give Us A Call​​</div>
                            <div class="contact_f_ib">{{companyInfo[0].tel}}</div>
                        </div>
                        <div class="contact_f box_shadown">
                            <div class="contact_f_icon flex_a">
                                <a-icon type="bank" />
                            </div>
                            <div class="contact_f_ic">Give Us address</div>
                            <div class="contact_f_ib">{{companyInfo[0].office_address}}</div>
                        </div>
                        <div class="contact_f box_shadown">
                            <div class="contact_f_icon flex_a">
                                <a-icon type="wechat" />
                            </div>
                            <div class="contact_f_ic">Give Us wechat</div>
                            <div class="contact_f_ib">{{companyInfo[0].wechat}}</div>
                        </div>
                        <div class="contact_f box_shadown">
                            <div class="contact_f_icon flex_a">
                                <a-icon type="mail" />
                            </div>
                            <div class="contact_f_ic">Give Us A Email</div>
                            <div class="contact_f_ib">{{companyInfo[0].email}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import resdata from './index.json'
import { mapState } from 'vuex'
import axios from 'axios'
export default {
    data() {
        return {
            scrolltype: false,
            formdata: {
                country_code: '',
                phone: '',
                email: '',
                description: ''
            }
        }
    },
    computed: {
        ...mapState(['companyInfo'])
    },
    methods: {
        async feedback() {
            // let res = resdata
            // this.bannerdata = res.data
            const formData = new FormData()
            let _that = this
            formData.append('country_code', _that.formdata.country_code)
            formData.append('phone', _that.formdata.phone)
            formData.append('email', _that.formdata.email)
            formData.append('description', _that.formdata.description)
            let res = await axios({
                url: _that.$api.feedback,
                method: 'post',
                data:formData
                
            })
            if (res.data.code == 200) {
                this.$message.succes(res.data.msg)
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
        ishandleScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
            if (scrollTop > 50) {
                this.scrolltype = true
            } else {
                this.scrolltype = false
            }
        }
    },
    created() {

    },
    mounted() {
        window.addEventListener('scroll', this.ishandleScroll)
    },
}
</script>
<style scoped>
.contact_t {
    font-size: 35px;
    font-weight: 700;
    padding-top: 90px;
    text-align: center;
    background-color: #F4852A;
    color: #fff;
    padding-bottom: 70px;
}

.contact_tb {
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
}

.contact_c {
    background-color: #FAFAFA;
    padding-top: 90px;
    padding-bottom: 20px;
}

.contact_cl {
    height: 416px;
    padding: 20px;
    background-color: #fff;
}

.contact_cr {
    height: 416px;
    padding-top: 20px;
    padding-left: 40px;
}

.contact_cl_i {
    margin-bottom: 20px;
}

.contact_inp {
    height: 48.5px;
    background-color: #FAFAFA;
}

.contact_cr_i {
    width: 456px;
    margin-top: 20px;
    text-align: left;
}

.contact_b {
    margin-top: 60px;
    text-align: center;
}

.contact_bt {
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 40px;
    color: #7A7A7A;
}

.contact_f {
    width: 24%;
    height: 288px;
    background-color: #fff;
    border-radius: 30px 30px 30px 90px;
    text-align: center;
    color: #3d4459;
    padding: 0px 20px;
}

.contact_f_icon {
    font-size: 45px;
    color: #F4852A;
    height: 140px;
}

.contact_f_ic {
    font-size: 18px;
    font-weight: 600;
    color: #3d4459;
    font-family: "Poppins", Sans-serif;
    text-align: center;
}

.contact_f_ib {
    font-size: 16px;
    font-weight: 300;
    color: #3d4459;
    margin-bottom: 40px;
    text-align: center;
}

.isopacity {
    opacity: 0.1;
    animation: opacityin 3s ease 0s 1;
    animation-fill-mode: forwards;
}

@keyframes opacityin {
    0% {
        opacity: 0.1;
    }

    100% {
        opacity: 1;
    }
}
</style>