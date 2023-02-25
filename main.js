
const apiManager = new APIManager()
const renderer = new Renderer();

const loadData = () => apiManager.loadData()
const renderData = () => renderer.render(apiManager.data)
