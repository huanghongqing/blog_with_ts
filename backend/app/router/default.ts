const router_default = app=>{
    const { router,controller }=app;
    router.get('/default/index',controller.default.home.index)
}
export default router_default;