<template>
    <div class="fool">
        <div class="flex_fs fool_main font_f4">
            <div class="fool_item fool1">
                <div class="foollogo">
                    <img src="../../img/foollogo.png" alt="">
                </div>
                <div class="fool_message">
                    <a-icon type="mail" /> {{ companyInfo[0].email }}
                </div>
                <div class="fool_message">
                    <a-icon type="phone" theme="filled" /> {{ companyInfo[0].tel }}
                </div>
                <div class="fool_message">
                    <a-icon type="environment" /> {{ companyInfo[0].office_address }}
                </div>
                <div class="fool_b_logo">
                   <a href="#">
                    <img src="../../img/Facebook.png" class="telegram_img" alt="">
                   </a>
                   <a href="#">
                    <img src="../../img/Twitter.png" class="telegram_img" alt="">
                   </a>
                   <a href="#">
                    <img src="../../img/Youtube.png" class="telegram_img" alt="">
                   </a>
                   <a href="#">
                    <img src="../../img/Telegram.png" class="telegram_img" alt="">
                   </a>
                </div>
            </div>
            <div class="fool_item fool2">
                <div class="fol_title font_f1">
                    About
                </div>
                <div class="fool_message">
                    <router-link :to="{ 'name': 'aboutus', 'query': { 'usid': 0 } }">
                        <span class="fool_message col_f">> Company Profile</span>
                    </router-link>
                </div>
                <div class="fool_message">
                    <router-link :to="{ 'name': 'aboutus', 'query': { 'usid': 2 } }">
                        <span class="fool_message col_f">> Quality Control</span>
                    </router-link>
                </div>
                <div class="fool_message">
                    <router-link :to="{ 'name': 'contactus' }">
                        <span class="fool_message col_f">> Contact Us</span>
                    </router-link>

                </div>
                <div class="fool_message">> Sitemap</div>
                <div class="fool_message">> Privacy Policy</div>
            </div>


            <div class="fool_item fool3">
                <div class="fol_title font_f1">
                    COMPANY POLICY
                </div>
                <div class="fool_message" v-for="(item, index) in productsList" :key="index">
                    <router-link :to="{ 'name': item.name}">
                        <span class="fool_message col_f" style="cursor:pointer">> {{ item.cname }}</span>
                    </router-link>
                </div>
            </div>
            <div class="fool_item fool4">
                <div class="fol_title font_f1">
                    Mail Us
                </div>
                <div class="fool_message">Let us know your requirement. We will connect best products with you.</div>
                <div class="fool_inp" style="display:flex; align-items: center; margin-bottom: 6px;margin-top: 10px">
                    <a-input placeholder="Name" v-model="formdata.name" style="margin-right:6px" class="footer_inp" />
                    <a-input placeholder="Whatapp/tele" v-model="formdata.contact"  class="footer_inp" />
                </div>
                <div class="flex_f" style="margin-bottom: 6px;">
                    <a-input   v-model="formdata.country_code" placeholder="CountryCode" style="width:50%;margin-right: 6px;" class="footer_inp" />

                    <a-input style="flex:1;" v-model="formdata.phone" placeholder="Your Phone" class="footer_inp" />
                </div>
                <div class="fool_inp">
                    <a-input placeholder="Your E-mail" v-model="formdata.email" class="footer_inp" />
                </div>
                <div  style="margin-top:8px"><template>
                        <a-textarea
                            placeholder="Fill in your basic plans and budgets(e.g. machine type,name or model,parts,accessories,shipping and delivery)to get free quote with the best machine for you."
                            :rows="4" v-model="formdata.description" class="footer_inp" />
                    </template>
                </div>
                    <div class="foot_btn" @click="setdata()">Send Message</div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
    data() {
        return {
            opentype: 0,
            showtype: true,
            productsList: [{
                cname: 'Shipping & Payment Policies',name:'Shipping'
            }, {
                cname: 'Warranty & Refund Policy',name:'Warranty'
            }, {
                cname: 'Privacy policy',name:'Privacy'
            }, {
                cname: 'Terms & Conditions',name:'Terms'
            }],
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
    computed: {
        ...mapState(['companyInfo'])
    },
    created() {
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
            }
             else {
                this.$message.error(res.data.msg)
            }
        },
        setdata() {
            if (!this.$utils.verNum(this.formdata.country_code)) {
                this.$message.warning('Wrong format of mobile Country Code')
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
    },
};
</script>

<style scoped>
.fool {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #131838, #1E2C59, #2D5382, #367898);
    color: #fff;
    padding-bottom: 40px;

}
.foollogo{
    width: 188px;
    height: 40PX;
}
.foollogo img{
    width: 100%;
    height: 100%;
}
.telegram_img{
    font-size: 26px;
    width: 26px;
    height: 26px;
    margin-right: 20px;
}
.fool_main {
    width: 75%;
    margin: 0 auto;
    padding-top: 40px;
    flex-wrap: nowrap;
}

.fool_item {
    margin-right: 20px;

}

.fol_title {
    font-size: 24px;
    font-weight: 600;
}

.fool_message {
    margin-top: 22px;
    font-weight: normal;
    font-size: 16px;
}

.fool_message:hover {
    opacity: 0.3;
}

.fool1 {
    width: 30%;
}

.fool2 {
    width: 20%;
}

.fool3 {
    width: 20%;
}

.fool4 {
    width: 30%;
}
.fool_icon{
    margin-right: 20px;
    color: #fff;
    font-size: 26px;
}
.footer_inp{
    border-radius: 16px;
    background-color: #376080;
    border: 1px solid #496C8A;
    color: #fff;
    margin-bottom: 10px;
}
.foot_btn{
    width: 100%;
    height: 32px;
    border: 1px solid #496C8A;
    background-color: #376080;
    color: #fff;
    text-align: center;
    line-height: 32px;
    border-radius: 16px;
    cursor: pointer;
    /* margin-top: 10px; */
}
.fool_b_logo{
    margin-top: 22px;
}
</style>
