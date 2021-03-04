const router_admin = app=>{
    const { router,controller }=app;
    router.post('/admin/checkLogin',controller.admin.main.checkLogin)
    var adminauth= app.middleware.adminauth() //路由守卫中间件
    router.get('/admin/index',adminauth,controller.admin.main.index) //添加了路由守卫的路由，每次访问index都要验证是否登录
    router.get('/admin/getTypeInfo',adminauth,controller.admin.main.getTypeInfo)
    router.post('/admin/addArticle',adminauth,controller.admin.main.addArticle)
    router.post('/admin/updateArticle',adminauth,controller.admin.main.updateArticle)
}
export default router_admin;