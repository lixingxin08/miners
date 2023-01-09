<template>
    <div class="products">
        <div class="content pro_banner flex_fs">
            <div class="hot rel color2 font_f4">
                Hot
            </div>
            <div class="flex_fs pro_bn_i" v-for="item in 3" :key="item">
                <img :src="bannerdata[item].product_img" alt="" class="pro_bn_il">
                <div class="pro_bn_ir flex_a">
                    <div>
                        <div class="font_16 font_f4" style="text-align:left">{{bannerdata[item].title}}</div>
                        <div class="font_16 font_f4" style="text-align:left;margin-top: 10px;">
                            {{bannerdata[item].hashrate|filnum(bannerdata[item].hashrate)}} | <span>
                                {{bannerdata[item].power_watt|filnum(bannerdata[item].power_watt)}}</span> | <span>
                                {{bannerdata[item].power_jth|filnum(bannerdata[item].power_jth)}}</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content" style="margin-bottom:20px">
            <div class="pro_i flex_fs font_14">
                <div class="pro_il">Cryptocurrency</div>
                <div class="pro_ir ">
                    <div class="flex_fs">
                        <div class="pro_ir_i" @click="selpro('')">
                            <div class="ishover font_f4"> All</div>
                        </div>
                        <div class="pro_ir_i font_f4" v-for="(item,index) in productsList.product" :key="index"
                            @click="selpro(item.id)">
                            <div :class="$route.query.id==item.id?'color1':'ishover'" style="cursor: pointer;"> {{item.cname}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pro_i flex_fs font_14">
                <div class="pro_il">Product</div>
                <div class="pro_ir ">
                    <div class="flex_fs">
                        <div class="pro_ir_i" @click="selcompany('')">
                            <div class="ishover"> All</div>
                        </div>
                        <div class="pro_ir_i" v-for="(item,index) in productsList.company" :key="index"
                            @click="selcompany(item.cname,index)">
                            <div :class="selcompanyid==index?'color1':'ishover'" style="cursor: pointer;"> {{item.cname}}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="content flex_fs">
            <div class="pro_r extent_box">
                <div class="pro_r flex_b" v-if="listtype">
                    <div class="box_flex box_shadown pro_r_box" v-for="(item,index) in productsInfo" :key="index">
                        <router-link :to="{'name':'productsdetail','query':{'goods_id':item.id}}">
                            <div class="iscursor font_24 font_f1 col_style2 pro_r_box_t">
                                {{item.title}}</div>
                            <div class="iscursor font_16 font_f4 col_9 pro_r_box_c">
                                <span>{{item.cname}}</span> {{item.algorithm}}
                            </div>
                            <div class="iscursor font_16 font_f4 col_9">
                                {{item.hashrate|filnum(item.hashrate)}} | <span>
                                    {{item.power_watt|filnum(item.power_watt)}}</span> | <span>
                                    {{item.power_jth|filnum(item.power_jth)}}</span>
                            </div>
                            <div class="box_fleximg pro_r_img">

                                <img :src="gallery(item)" alt="" class="toscaleimg pro_r_img" />

                            </div>
                        </router-link>
                        <div class="btn_box3" @click="changevisi(item)">
                           Get Best Price
                                <!-- {{(index+1)+((pagination.current-1)*pagination.pageSize)}} -->
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ispagination flex_a">
            <a-pagination :current="pagination.current" :total="pagination.total" :pageSize="pagination.pageSize"
                @change="onchange">
            </a-pagination>

        </div>
        <subdialogVue :visitype="visitype" @toclose="toclose" :pro_detail="pro_detail"></subdialogVue>
    </div>
</template>
<script>
import { Mixin1 } from '../../utils/mixins'
import { Mixin2 } from '../../utils/mixins'
import { issubdialog } from '../../utils/mixins'
import iscarousel from '../../components/carousel/iscarousel.vue'
import subdialogVue from '../../components/dialog/subdialog.vue'
import resdata from './index.json'
import infodata from './info.json'
import { mapState } from 'vuex'
export default {
    mixins: [Mixin1, Mixin2, issubdialog],
    components: { iscarousel, subdialogVue },
    data() {
        return {
            pagination: {
                "total": 0, //总页数
                "pageSize": 12, //每页中显示10条数据
                "showSizeChanger": true,
                "current": 1, //当前页
                "page": 1, //几页
                "size": "default",
            },
            productsInfo: [],
            bannerdata: '',
            param: {
                product_id: '',
                company_name: ''
            },
            selcompanyid: -1,
            listtype: false
        }
    },
    computed: {
    ...mapState(['productsList'])
  },
    methods: {
        async getBanner() {
            let res = await this.$http.get(this.$api.getBanner)
            if (res.data.code == 200) {
                this.bannerdata = res.data.data
            } else {
                this.$message.error(res.data.msg)
            }
        },
        async getMachineList() {
            // let res = infodata
            // this.productsInfo = res.data
            this.productsInfo = []
            this.listtype = false
            let res = await this.$http.post(this.$api.getMachineList, this.param)
            if (res.data.code == 200) {
                this.productsInfo = res.data.data
                this.listtype = true
            } else {
                this.$message.error(res.data.msg)
            }
        },
        selcompany(val, id) {
            this.param.company_name = val
            this.selcompanyid = id
            this.getMachineList()
        },
        selpro(val) {
            this.param.product_id = val + ''
            this.$route.query.id = val
            this.getMachineList()
        },
        changelist(index) {
            this.pagination = {
                "total": 0, //总页数
                "pageSize": 12, //每页中显示10条数据
                "showSizeChanger": true,
                "current": 1, //当前页
                "page": 1, //几页
                "size": "default",
            }
        },
        gallery(val) {
            let tt = val.gallery.split('|')
            return tt[0]
        },
        onchange(current, pageSize) {
            this.pagination.current = current;
            let aa = this.pro_res[this.$route.query.id].id - ((this.pagination.current - 1) * this.pagination.pageSize)
            if (Math.floor(aa / this.pagination.pageSize) <= 0) {
                this.pro_res_id = aa
            } else {
                this.pro_res_id = this.pagination.pageSize
            }
            window.pageYOffset = 0
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
        },
    },
    created() {
        this.param.product_id = this.$route.query.id + ''
        this.getBanner()
        this.getMachineList()
    },
    watch: {

    }
}
</script>
<style>
.products {
    margin-bottom: 20px;
    
}

.hot {
    width: 60px;
    height: 90px;
    margin-left: 12px;
    margin-right: 12px;
    text-align: center;
    line-height: 60px;
    background: url('//shop-static.bitmain.com/support/assets/images/1ce6cbbb.png') 100% 100% no-repeat;
    background-position: 50%;
    background-size: cover;
    font-size: 16px;
}

.hotimg {
    width: 60px;
    height: 90px;
    z-index: 0;
}

.pro_banner {
    height: 140px;
    background-color: #f3f4f6;
    margin-bottom: 40px;
}

.hot_t {
    width: 60px;
    height: 90px;
    text-align: center;
    line-height: 60px;
    z-index: 99;
}

.pro_bn_i {
    width: 30%;
    height: 124px;
    padding: 12px;
    background-color: #fff;
    margin-right: 12px;
    margin-top: 8px;
}

.pro_bn_ir {
    flex: 1;
    text-align: left;
    height: 100%;
    text-overflow: ellipsis;
}

.pro_bn_il {
    width: 142px;
    height: 100px;
    margin-right: 10px;
}

.pro_bn_ir_btn {
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin: 0;
    margin-top: 40px;
}

.pro_r_b {
    width: 100%;
}

.pro_i {
    width: 100%;
    border: 1px solid #ddd;
    line-height: 67px;
    padding-left: 20px;
}

.pro_i:nth-child(2n-1) {
    border-bottom: none;
}

.pro_i:last-child {
    border: 1px solid #ddd;
}

.pro_il {
    width: 10%;
    color: #989898;
}

.pro_ir {
    flex: 1;

}

.pro_ir_i {
    margin-right: 50px;
}

.procarsel {
    width: 100%;
    height: 220px;
    margin-top: 20px;
    overflow: hidden;
    color: #fff;
    position: relative;
}

.procarselimg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 220px;
    z-index: -22;
}

.pro_r_box {
    height: 422px;
    padding: 20px;
    text-align: center;
}
.pro_r_box_t{
    text-align: center;
    margin-bottom: 16px;
}
.pro_r_box_c{
    margin-bottom: 6px;
}

.pro_r_img {
    width: 150px;
    height: 150px;
    text-align: center;
    overflow: hidden;
    margin: 0 auto;
}

.pro_r {
    flex-wrap: wrap;
}
</style>