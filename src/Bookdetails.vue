<template>
    <div>
        详情id:{{ bookid }}
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
  watch:{
    '$route'(to,from){
      console.log(this)
      console.log(2222)
    }
  }
}
</script>
