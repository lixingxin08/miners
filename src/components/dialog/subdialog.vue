<template>
    <div id="components-modal-demo-position" v-if="visitype">
        <a-modal v-model="visitype" centered :footer="null" :maskClosable="false"
            :bodyStyle="{ 'background-color': '#fff', 'width': '716px', 'height': '520px', 'padding': 0 }"
            :closable="false">

            <div slot='header' class="model_t flex_b">
            </div>
            <div class="dialog_box flex_f">
                <div class="flex_col_start dialog_l">
                    <div class="dialog_l_img">
                        <img :src="gallery_0(this.pro_detail.gallery)" alt="" class="dialog_l_img toscaleimg">
                    </div>
                    <div class="dialog_l_item" style=" font-size: 12px;"></div>
                    <div class="dialog_l_item">title:</div>
                    <div class="dialog_l_item">{{ pro_detail.title }}</div>
                    <div class="dialog_l_item">Algorithm:</div>
                    <div class="dialog_l_item">{{ pro_detail.algorithm }}</div>
                    <div class="dialog_l_item">Power Consumption:</div>
                    <div class="dialog_l_item">{{ pro_detail.power_watt }}</div>
                    <div class="dialog_l_item">Hashrate:</div>
                    <div class="dialog_l_item"> {{ pro_detail.hashrate }}</div>
                </div>
                <div class="flex_col_start dialog_r">
                    <div class="close flex_b" @click="close()">
                        <div></div>
                        <a-icon type="close" class="ishover" />
                    </div>
                    <div class="dialog_r_t">
                        Leave a Message
                    </div>
                    <div class="dialog_r_t">
                        We will call you back soon!
                    </div>
                    <div class="flex_f" style="margin-bottom: 10px;margin-top:20px;width: 100%;">
                        <template>
                            <a-textarea v-model="formdata.description" placeholder="Please enter your inquiry details."
                                :rows="6">
                            </a-textarea>
                        </template>
                    </div>
                    <div class="flex_f" style="margin-bottom: 10px;width: 100%;">
                        <a-input v-model="formdata.email" placeholder="Enter your E-mail" style="height: 44px;">
                        </a-input>
                    </div>

                    <div class="flex_f" style="margin-bottom: 10px;width: 100%;">
                        <a-input v-model="formdata.country_code" placeholder="+CountryCode"
                            style="width:84px;height:44px;margin-right: 6px">
                        </a-input>
                        <a-input style="flex:1;height: 44px;" v-model="formdata.phone" placeholder="Phone Number" />
                    </div>
                    <div class="btn_box2" style="width:200px;height: 44px;margin-top: 40px;" @click="setdata()">
                        <div class="btn">Submit</div>
                    </div>
                </div>
            </div>
        </a-modal>
    </div>
</template>
<script>
import { Mixin1 } from '../../utils/mixins';
import axios from 'axios'
export default {
    props: {
        visitype: Boolean,
        pro_detail: Object
    },
    mixins: [Mixin1],
    computed: {
    },
    mounted() {
    },
    data() {
        return {
            formdata: {
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
                this.$message.warning('Wrong format of country code number')
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
        close() {
            this.$emit('toclose', false)
        }
    },
};
</script>
<style scoped>
.dialog_box {
    width: 716px;
    height: 520px;
    padding: 20px;
}

.close {
    width: 100%;
    font-size: 16px;
}

.dialog_l_item {
    font-size: 14px;
    color: #000;
    margin-top: 3px;
}

.dialog_l_item:nth-child(2n+1) {
    color: #757575;
}

.dialog_l {
    width: 200px;
    height: 100%;
    margin-right: 20px;
    justify-self: start;
    align-items: start;
}

.dialog_l_img {
    width: 200px;
    height: 200px;
    overflow: hidden;
}

.dialog_r {
    flex: 1;
    height: 100%;
    justify-self: start;
    align-items: start;
}

.dialog_r_t {
    text-align: left;
    font-size: 24px;
    font-weight: 450;
}
</style>
