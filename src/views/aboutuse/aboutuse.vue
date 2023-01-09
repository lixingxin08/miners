<template>
    <div class="products">
        <div class="topimg">
            <img src="../../img/20220913150636.png" alt="" class="extent_box">
            <div class="top_msg">
                <div class="top_title"> Company Profile</div>
                <div class="top_title_b">Home / Miners1688</div>
            </div>
        </div>
        <div class="content flex_fs">
            <!-- <div class="pro_l">
                <div class="extent_box box_shadown">
                    <div class="pro_lt col_f"> About Us</div>
                    <div class="pro_lc">
                        <div class="pro_l_item" v-for="(item,index) in aboutusdata" :key="index"
                            @click="changeaoutlist(index)">
                            <router-link :to="{'name':'aboutus','query':{'usid':index}}">
                                <div :class="aboutusid==index?'color1':'ishover'"> {{item}}</div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="extent_box box_shadown">
                    <div class="pro_lt col_f">
                        All Products
                    </div>
                    <div class="pro_lc">
                        <div class="pro_l_item" v-for="(item,index) in productdata" :key="index">
                            <router-link :to="{'name':'products','query':{'id':index}}">
                                <div class="ishover"> {{item}}</div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div> -->
            <!--Company Profile-->
            <div class="flex_col_fs box_shadown abou_r">
                <div class="extent_box" v-if="aboutusid==0">
                    <div class="extent_box">
                        <div class="abou_r_t">Miners1688</div>
                        <div class="about_carsel">
                            <aboutcarousel></aboutcarousel>
                        </div>
                        <div class="extent_box about_des">
                            <a-descriptions bordered size='small' :column="1">
                                <a-descriptions-item label="Main Market">
                                    Worldwide
                                </a-descriptions-item>
                                <a-descriptions-item label="Business Type">
                                    Distributor/Wholesaler, Agent, Trading Company
                                </a-descriptions-item>
                                <a-descriptions-item label="Brands">
                                    Bitmain、Inno、Whatsminer、Canaan、Ipollo、Goldshell、Ebang
                                </a-descriptions-item>
                                <a-descriptions-item label="No. of Employees">
                                     50~100
                                </a-descriptions-item>
                                <a-descriptions-item label="Annual Sales">
                                    100000000-2000000000
                                </a-descriptions-item>
                                <a-descriptions-item label="Year Established">
                                    2018
                                </a-descriptions-item>
                                <a-descriptions-item label="Export p.c">
                                    60% - 70%
                                </a-descriptions-item>
                            </a-descriptions>
                        </div>
                    </div>
                    <div class="extent_box box_shadown about_rb">
                        <div class="item_title">INTRODUCTION</div>
                        <div class="line"></div>
                        <div class="about_art">
                            <h2>Headquartered in Chengdu, Miners1688 is one of the top three asic miner suppliers
                                in
                                China.</h2>
                            <h2></h2>
                            <h2>As an experienced supplier in this line, Miners1688 has close business
                                relationship
                                with asic manufacturers like Bitmain, Innosilicon, Canaan, MicroBT, Goldshell and it is
                                able
                                to supply the latest models in large quantity.</h2>
                            <h2></h2>
                            <h2>For better customer service, it set up a factory in Dongguan, China with an efficient
                                team
                                to provide services like repairing, upgrading, dust cleaning and packaging. It started
                                an
                                entity store in Saige Plaza Shengzhen China for traditional marketing.</h2>
                            <h2></h2>
                            <h2>As deep as sea. As hot as light. It is searching partner all over the world.</h2>
                        </div>
                        <div v-for="item in 3" :key="item" class="about_img_box">
                            <div><span class="about_img_title">Chengdu company</span>
                                <a href="https://www.youtube.com/watch?v=Ol_ZNkUuz-s"
                                    class="col_0">https://www.youtube.com/watch?v=Ol_ZNkUuz-s </a>
                            </div>
                            <div class="flex_fs about_img">
                                <img src="../../img/remark.jpg" alt="">
                                <img src="../../img/remark.jpg" alt="">
                                <img src="../../img/remark.jpg" alt="">
                                <img src="../../img/remark.jpg" alt="">
                            </div>
                        </div>

                    </div>
                </div>
                <!--Comments & Clients---->
                <div class="extent_box" v-if="aboutusid==1">
                    <div class="item_title">INTRODUCTION</div>
                    <div class="line"></div>
                    <div class="flex_fs about_img Clients_img">
                        <img src="../../img/pl61661430remark.jpg" alt="">
                        <img src="../../img/pl61661430remark.jpg" alt="">
                        <img src="../../img/pl61661430remark.jpg" alt="">
                        <img src="../../img/pl61661430remark.jpg" alt="">
                        <img src="../../img/pl61661430remark.jpg" alt="">
                        <img src="../../img/pl61661430remark.jpg" alt="">
                    </div>
                    <div class="item_title" style="margin-top:64px">COMMENTS</div>
                    <div class="line"></div>
                    <div class="Clients_title">
                        From trustpilot.com
                    </div>
                    <p></p>
                    <div>
                        <a href="https://uk.trustpilot.com/review/www.miners-asic.com"
                            class="col_0">https://uk.trustpilot.com/review/www.miners-asic.com </a>
                    </div>
                    <p></p>
                    <p></p>
                    <div v-for="item in 4" :key="item">
                        <img src="../../img/pl60924380remark.jpg" alt="">
                    </div>

                </div>
                <!--Certificates-->
                <div class="flex_col_fs box_shadown abou_r" v-if="aboutusid==2">
                    <div class="item_title">CERTIFICATES</div>
                    <div class="line"></div>
                    <div class="flex_fs extent_box">
                        <div class="certifi_item" v-for="item in 6" :key="item">
                            <div class="certifi_img">
                                <img src="../../img/20220911003236.png" alt="" class="extent_box toscaleimg">
                            </div>
                            <div class="certifi_msg"> 20220911003236.png</div>
                        </div>
                    </div>

                </div>
                <!--sendmessage-->
                <div class="extent_box box_shadown about_rb">
                    <sendmessage></sendmessage>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Mixin2 } from '../../utils/mixins'
import aboutcarousel from '../../components/carousel/aboutcarousel.vue'
import sendmessage from '../../components/sendmessage/sendmessage.vue'
export default {
    mixins: [Mixin2],
    components: { aboutcarousel, sendmessage },
    data() {
        return {

        }
    },
    computed: {
        aboutusid() {
            return this.$route.query.usid
        }
    },
    methods: {
        changeaoutlist(index) {
            this.$route.query.usid = index
        },

    },
    created() {
    },
    watch: {

    }
}
</script>
<style>
.products {
    margin-bottom: 20px;
}

.topimg {
    width: 90%;
    margin: 0 auto;
    height: 260px;
    color: #fff;
    margin-bottom: 29px;
    position: relative;
    overflow: hidden;
}

.top_msg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.top_title {
    font-weight: bold;
    font-size: 26px;
    text-align: center;
}

.top_title_b {
    text-align: center;
    margin-top: 30px;
}

.pro_l {
    width: 335px;
    margin-right: 20px;
    text-align: left;
}

.pro_lt {
    background-color: #ff4500;
    font-size: 24px;
    padding-left: 18px;
    height: 57px;
    line-height: 57px;
    margin-bottom: 18px;
}

.pro_l_item {
    padding: 12px 0 19px;
    padding-left: 18px;
}

.abou_r {
    flex: 1;
    padding: 32px 32px 40px;
}

.abou_r_t {
    font-size: 28px;
    font-weight: bold;
    line-height: 39px;
    margin-bottom: 32px;
}

.about_carsel {
    width: 675px;
    height: 380px;
    overflow: hidden;
}

.about_des {
    margin-top: 32px;
}

.about_rb {
    margin-top: 20px;
    padding: 32px 32px 38px;
}

.about_art {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
}

.about_img_box {
    margin-bottom: 32px;
}

.about_img_title {
    font-size: 16px;
    font-weight: 900;
    margin-right: 4px;
}

.about_img img {
    width: 36%;
    margin-right: 4px;
    margin-bottom: 4px;
}

.Clients_img img {
    width: 26%;
}

.Clients_title {
    font-size: 20px;
    color: #0000ff;
    margin-top: 32px;
    font-weight: bold;
}
.certifi_item{
    width: 32%;
    margin-bottom: 20px;
}
.certifi_msg{
    text-align: center;
}

.certifi_img {
    width: 100%;
    height: 344px;
    overflow: hidden;
}
</style>