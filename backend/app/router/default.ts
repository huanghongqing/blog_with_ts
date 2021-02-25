const router_default = app=>{
    const { router,controller }=app;
    router.get('/default/index',controller.default.home.index)
    router.get('/default/getArticleList',controller.default.home.getArticleList)
}
export default router_default;