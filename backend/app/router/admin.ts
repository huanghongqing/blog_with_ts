const router_admin = app=>{
    const { router,controller }=app;
    router.get('/admin/index',controller.admin.main.index)
    router.post('/admin/checkLogin',controller.admin.main.checkLogin)
}
export default router_admin;