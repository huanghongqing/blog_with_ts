const router_admin = app=>{
    const { router,controller }=app;
    router.get('/admin/index',controller.admin.main.index)
    router.get('/admin/login',controller.admin.main.checkLogin)
}
export default router_admin;