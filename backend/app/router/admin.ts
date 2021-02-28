const router_admin = app=>{
    const { router,controller }=app;
    router.get('/admin/index',controller.admin.main.index)
}
export default router_admin;