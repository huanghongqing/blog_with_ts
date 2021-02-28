const router_admin = app=>{
    const { router,controller }=app;
    var adminauth= app.middleware.adminauth() //路由守卫
    router.get('/admin/index',adminauth,controller.admin.main.index) //添加了路由守卫的路由，每次访问index都要验证是否登录
    router.post('/admin/checkLogin',controller.admin.main.checkLogin)
}
export default router_admin;