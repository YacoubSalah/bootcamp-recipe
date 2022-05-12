$("#getRecipeButton").on("click" , getRecipes)

const renderer = new Renderer
renderer.compileHandlebars()

function getRecipes(){
    const ingredient = $("#ingredientInputField").val()
    const routeURL = `/recipe/?ingredient=${ingredient}`
    $.get(routeURL , function(data){
        renderer.renderAll(data)
    })
}