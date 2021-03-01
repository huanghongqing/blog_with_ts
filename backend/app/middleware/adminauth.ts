export default ()=>{
    return async function adminauth(ctx,next){ 
        console.log(ctx.session.openId)
        if(ctx.session.openId){ //通过openId是否存在判断是否登录
            await next
        }else{
            ctx.body={data:'No Login'}
        }
    }
}