export default {
    state:{
        announcements:[],
        promotions:[],
        recommended:[]
    },
    getters:{
        announcements:state => state.announcements,
        promotions:state => state.promotions,
        recommended:state => state.recommended,
        totalPromotions:state => state.promotions.length,
        totalRecommended:state => state.recommended.length
    }
}