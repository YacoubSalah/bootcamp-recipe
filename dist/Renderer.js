class Renderer{
    constructor(){
        this.recipesContainer = $("#recipesContainer")
        this.recipesTempalte = ""
    }

    compileHandlebars(){
        const source= $("#recipesTemplate").html()
        this.recipesTempalte = Handlebars.compile(source)
    }

    renderAll(results){
        this.recipesContainer.empty()
        const recipesHTML = this.recipesTempalte({results})
        this.recipesContainer.append(recipesHTML)
    }
}