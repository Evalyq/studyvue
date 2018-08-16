<template>
    <div>
        详情id:{{ bookid }}
        <button @click="gotoOther">点击</button>
    </div>
</template>
<style>

</style>

<script>
export default {
    data () {
        return {
            bookid: undefined
        }
    },
    created () {
        const bookID = this.$route.params.id;
        this.bookid = bookID;
    },
     mounted(){
        console.log(this.bookid)
    },
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
  methods:{
        gotoOther(){
            this.$router.push({name:'Bookdetails',params:{id:0}})
        }
    },
  watch:{
    '$route'(to,from){
      console.log(this)
      console.log(2222)
    }
  }
}
</script>
