$("#getRecipeButton").on("click", getRecipes)
$("#recipesContainer").on("click", "img", alertIngredient)

const renderer = new Renderer
renderer.compileHandlebars()

function getRecipes() {
    const ingredient = $("#ingredientInputField").val()
    const routeURL = `/recipe/?ingredient=${ingredient}`
    $.get(routeURL, function (data) {
        renderer.renderAll(data)
    })
}

function alertIngredient() {
    alert($(this).closest(".recipeContainer").find("li").html())
}