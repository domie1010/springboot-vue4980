const base = {
    get() {
        return {
            url : "http://localhost:8080/matouchuanzhihuogui/",
            name: "matouchuanzhihuogui",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/matouchuanzhihuogui/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "码头船只货柜管理系统"
        } 
    }
}
export default base
