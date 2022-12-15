export const Mixin1 = {
  filters: {
    toelis(targin, num) {
      let consultArray = targin;
      if (consultArray.length <= num) {
        return;
      } else {
        targin = consultArray.substr(0, num) + "...";
        return targin
      }
    },
    timestampToTime(value) {
      let date = new Date(value * 1000);
      var Y = date.getFullYear();
      var M = date.getMonth() + 1;
      var D = date.getDate();
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
      return Y + "-" + M + "-" + D + " " + h + ":" + (m < 10 ? "0" + m : m);
    },
    gallery(val) {
      let tt = val.gallery.split('|')
      return tt[0]
    },
    filnum(val) {
       let tt = val.split('±')
       return tt[0]
    },
  },
  methods: {
    toeli(targin, num) {
      let consultArray = targin.innerHTML;
      if (consultArray.length <= num) {
        return;
      } else {
        targin.innerHTML = consultArray.substr(0, num) + "...";
      }
    },
    toel2(targin, num) {
      let consultArray = targin;
      if (consultArray.length <= num) {
        return;
      } else {
        targin = consultArray.substr(0, num) + "...";
        return targin
      }
    },
    gallery_0(val) {
      let tt = val.split('|')
      return tt[0]
    },
  }
};
export const Mixin2 = {
  data() {
    return {
      aboutusdata: ['company profile'],
      productdata: ['Asic Miner Machine', 'BTC Miner Machine', 'Ethereum Miner Machine', 'LTC Miner Machine', 'DCR Coin Miner', 'KDA Coin Miner', 'Grin Coin miner', 'Mining Rig Machine', 'Mining Rig Graphics Card', 'Asic Miner Parts']
    }
  },
  methods: {}
};
import img1 from '../img/kuang1.png'
import img2 from '../img/kuang2.png'
export const issubdialog = {
  data() {
    return {
      pro_res: [{
        id: 23,
        url: '22',
        msg: '33'
      }],
      pro_res_id: 0,
      visitype: false,
      pro_detail: {}
    }
  },
  computed: {
    active_id() {
      return this.$route.query.id
    }
  },
  methods: {
    async getdata() {
      // let param = {
      //     roleId: item.roleId
      // }
      // let res = await this.$http.post(this.$api.rolesystemremove, param);
      let res = [{
          id: 21,
          url: img1,
          msg: "Bitmain Antminer S19 S19j Pro 110t 104t 100t 96t 95t 90t For Asic Bitcoin Mining Machine"
        },
        {
          id: 1,
          url: img2,
          msg: "Bitmain Antminer S19 S19j Pro 110t 104t 100t 96t 95t 90t For Asic Bitcoin Mining Machine"
        },
        {
          id: 2,
          url: img1,
          msg: "Bitmain Antminer S19 S19j Pro 110t 104t 100t 96t 95t 90t For Asic Bitcoin Mining Machine"
        },
        {
          id: 3,
          url: img2,
          msg: "Bitmain Antminer S19 S19j Pro 110t 104t 100t 96t 95t 90t For Asic Bitcoin Mining Machine"
        },
        {
          id: 4,
          url: img1,
          msg: "Bitmain Antminer S19 S19j Pro 110t 104t 100t 96t 95t 90t For Asic Bitcoin Mining Machine"
        },
        {
          id: 5,
          url: img2,
          msg: "Bitmain Antminer S19 S19j Pro 110t 104t 100t 96t 95t 90t For Asic Bitcoin Mining Machine"
        },
        {
          id: 6,
          url: img1,
          msg: "Bitmain Antminer S19 S19j Pro 110t 104t 100t 96t 95t 90t For Asic Bitcoin Mining Machine"
        },
        {
          id: 7,
          url: img2,
          msg: "Bitmain Antminer S19 S19j Pro 110t 104t 100t 96t 95t 90t For Asic Bitcoin Mining Machine"
        },
        {
          id: 8,
          url: img1,
          msg: "Bitmain Antminer S19 S19j Pro 110t 104t 100t 96t 95t 90t For Asic Bitcoin Mining Machine"
        },
        {
          id: 18,
          url: img2,
          msg: "Bitmain Antminer S19 S19j Pro 110t 104t 100t 96t 95t 90t For Asic Bitcoin Mining Machine"
        }
      ]
      this.pro_res = res
      let ids = this.$route.query.id
      if (this.pro_res.length) {
        this.restype = true
        for (let i = 0; i < this.pro_res.length; i++) {
          this.pro_res[i].msg = this.toel2(this.pro_res[i].msg, 50)
        }
      }
      if (this.pro_res[ids].id > this.pagination.pageSize) {
        this.pagination.total = this.pro_res[ids].id
        this.pro_res_id = this.pagination.pageSize
      } else {
        this.pro_res_id = this.pro_res[ids].id
      }

    },
    changevisi(val) {
      console.log(val, 'val');
      this.visitype = !this.visitype
      this.pro_detail = val
    },
    toclose(val) {
      this.visitype = !this.visitype
    },
  }
};
