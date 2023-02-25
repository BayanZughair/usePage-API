class Renderer {
    
    _renderUsers(user) {
        $(".user-container").empty();
        let source = $("#user-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(user)
        $(".user-container").append(newHTML)
    }

    _renderFriends(friends) {
        $(".friends-container").empty();
        let source = $("#friends-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template({friends})
        $(".friends-container").append(newHTML)
    }

    _renderQuote(quote) {
        $(".quote-container").empty();
        let source = $("#quote-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(quote)
        $(".quote-container").append(newHTML)
    }

    _renderPokemon(pokemon) {
        $(".pokemon-container").empty();
        let source = $("#pokemon-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(pokemon)
        $(".pokemon-container").append(newHTML)
    }

    _renderMeat(meat) {
        $(".meat-container").empty();
        let source = $("#meat-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(meat)
        $(".meat-container").append(newHTML)
    }

    render(data){
        this._renderUsers(data.user)
        this._renderFriends(data.friends)
        this._renderQuote(data.quote)
        this._renderPokemon(data.pokemon)
        this._renderMeat(data.meat)
      
    }
}

