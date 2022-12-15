<template>
    <div class="fool">
        <div class="flex_fs fool_main">
            <div class="fool_item fool1">
                <div class="fol_title">
                    Marine King Miner
                </div>
                <div class="fool_message">
                    <a-icon type="mail" />  {{companyInfo[0].email}}
                </div>
                <div class="fool_message">
                    <a-icon type="phone" theme="filled" />  {{companyInfo[0].tel}}
                </div>
                <div class="fool_message">
                    <a-icon type="environment" /> {{companyInfo[0].office_address}}
                </div>
                <div class="font_22">
                    <a-icon type="facebook" class="fool_message iscursor" />
                    <a-icon type="twitter" class="fool_message iscursor" />
                    <a-icon type="youtube" class="fool_message iscursor" />
                </div>
            </div>
            <div class="fool_item fool2">
                <div class="fol_title">
                    About
                </div>
                <div class="fool_message">
                    <router-link :to="{'name':'aboutus','query':{'usid':0}}">
                        <span class="fool_message col_f"> Company Profile</span>
                    </router-link>
                </div>
                <div class="fool_message">
                    <router-link :to="{'name':'aboutus','query':{'usid':2}}">
                        <span class="fool_message col_f"> Quality Control</span>
                    </router-link>
                </div>
                <div class="fool_message">
                    <router-link :to="{'name':'contactus'}">
                        <span class="fool_message col_f"> Contact Us</span>
                    </router-link>

                </div>
                <div class="fool_message">Sitemap</div>
                <div class="fool_message">Privacy Policy</div>
            </div>


            <div class="fool_item fool3">
                <div class="fol_title">
                    Products
                </div>
                <div class="fool_message"  v-for="(item,index) in productsList" :key="index">
                    <router-link :to="{'name':'products','query':{'id':item.id}}">
                        <span class="fool_message col_f"> {{item.cname}}</span>
                    </router-link>
                </div>
            </div>
            <div class="fool_item fool4">
                <div class="fol_title">
                    Mail Us
                </div>
                <div class="fool_message">Let us know your requirement. We will connect best products with you.</div>
                <div class="flex_f" style="margin-bottom: 10px;margin-top: 10px">
                    <a-input ref="userNameInput" v-model="formdata.country_code" placeholder="+CountryCode"
                        style="width:84px;margin-right: 6px">
                        <a-icon slot="prefix" type="phone" theme="filled" style="color: #ff4500;" />
                    </a-input>
                    <a-input style="flex:1;" v-model="formdata.phone" placeholder="Your Phone" />
                </div>
                <div class="fool_inp">
                    <a-input placeholder="Your E-mail" v-model="formdata.email" />
                </div>
                <div class="fool_inp"><template>
                        <a-textarea
                            placeholder="Enter product details (such as color,size,materials etc.) and other specific requirements to receive an accurate quote.*"
                            :rows="4" v-model="formdata.description" />
                    </template>
                </div>


                <div class="btn_box fool_inp">
                    <div class="btn" @click="setdata()">Send Message</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
export default {
    data() {
        return {
            opentype: 0,
            showtype: true,
            productsList: '',
            formdata: {
                country_code: '',
                phone: '',
                email: '',
                description: ''
            }
        };
    },
    computed:{
        ...mapState(['companyInfo'])
    },
    created(){
         this.getProductsList()
    },
    methods: {
        async getProductsList() {
            // let res = resdata.productlist
            // this.productsList = res.data
            let res = await this.$http.get(this.$api.getProductsList)
            if (res.data.code == 200) {
                this.productsList = res.data.data.product
            } else {
                this.$message.error(res.message)
            }
        },
        async feedback() {
            let res = await this.$http.post(this.$api.feedback, this.formdata)
            if (res.data.code == 200) {
                this.$message.succes(res.message)
            } else {
                this.$message.error(res.message)
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
    height: 400px;
    background-color: #000;
    color: #fff;
}

.fool_main {
    width: 960px;
    margin: 0 auto;
    padding-top: 40px;
    flex-wrap: nowrap;
}

.fool_item {
    margin-right: 20px;

}

.fol_title {
    font-size: 16px;
    font-weight: 600;
}

.fool_message {
    margin-top: 22px;
    font-weight: normal;
}

.fool_message:hover {
    color: #ff4500;
}

.fool1 {
    width: 400px;
}

.fool2 {
    width: 150px;
}

.fool3 {
    width: 200px;
}

.fool4 {
    width: 300px;
}

.fool_inp {
    margin-top: 6px;
    padding: 0;
}
</style>