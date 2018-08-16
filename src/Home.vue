<template>
    <div v-if="page_data">
        <div class="section">
            <slider :slides="page_data.top"></slider>
            <div class="announcement">
                <label>快讯</label>
                <span>今日上架的图书全部8折</span>
            </div>
        </div>
        <div class="section">
            <book-list :books="page_data.promotions"
                       heading="最新更新"
                       @select="preview($event)"><!--@子组件定义的事件名-->
            </book-list>
        </div>
        <div class="section">
            <book-list :books="page_data.recommended"
                       heading="编辑推荐">
            </book-list>
        </div>
        <modal-dialog ref="dialog"><!--获取当前元素-->
            <div slot="heading"></div>
            <div>
                <div v-if="selected">
                    <h2>{{ selected.title }}</h2>
                </div>
            </div>
        </modal-dialog>
    </div>
</template>
<style>
.announcement {
  font-size: 12px;
  padding: 5px;
  background: #fff;
}

.announcement > label {
  padding: 3px 10px;
  margin: 3px 10px;
  background: #faccb7;
  border-radius: 3px;
  color: #ff5102;
}

.announcement > span {
  padding: 3px 10px;
  color: #333;
  display: inline-block;
}
</style>
<script>
import Slider from "./components/slider.vue";
import bookList from "./books/list.vue";
import ModalDialog from "./components/dialog.vue";
import faker from "./fixtures/faker";
export default {
  data() {
    return {
      page_data: undefined,
      selected: undefined,
      msg: 111
    };
  },
  mounted() {
    document.title = "Book store";
    console.log(1111)
  },
  created() {
    this.page_data = faker.getHomeData();
  },
  components: { Slider, bookList, ModalDialog },
  beforeRouteEnter(to,from,next){
     console.log('beforeRouteEnter')
     next()
  },
  beforeRouteUpdate(to,from,next){
    console.log('beforeRouteUpdate')
     next()
  },
  beforeRouteLeave(to,from,next){
    console.log('beforeRouteLeave')
     next()
  },
  // computed:{
  //   announcements(){
  //     return this.$store.getters.announcements
  //   },
  //   promotions(){
  //     return this.$store.getters.recommended
  //   },
  //   recommended(){
  //     return this.$store.getters.totalPromotions
  //   },
  //   recommended(){
  //     return this.$store.getters.totalRecommended
  //   }
  // },
  methods: {
    preview(book) {
      alert("显示图书详情");
      console.log(111111);
      this.selected = book;
      this.$refs.dialog.open(); //减少dom节点的消耗，触发模态窗口打开事件
    }
    // bookdetail(){
    //     router.push({
    //         path:'Bookdetails',
    //         query:{bookId:this.bookdetail.id}
    //     })
    // }
  }
};
</script>