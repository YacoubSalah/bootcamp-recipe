$("#getRecipeButton").on("click" , getRecipes)

/* const renderer= new Renderer
renderer.compileHandlerbars() */

function getRecipes(){
    const ingredient = $("#ingredientInputField").val()
    const routeURL = `/recipe/?ingredient=${ingredient}`
    $.get(routeURL , function(data){
        console.log(data)
    })
}