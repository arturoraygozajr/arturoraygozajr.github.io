words = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran", "nidorina", "nidoqueen", "nidoran", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mrmime",
    "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew"];

$( document ).ready(function() {
    var wordIndex = Math.floor(Math.random() * words.length) + 0;
    console.log(wordIndex);

    console.log(words[wordIndex]);
    var word = words[wordIndex];
    var underscore = "";
    for(i = 0; i < word.length; i++) {
        underscore = underscore + "_ "
    }
    $('#underscore').html(underscore);
    var misses = 10;
    $('#misses').html(misses);
    var currentLetter = 0;

    $("body").css("text-align", "center");
    $("body").keypress(function(event) {
        var letter = String.fromCharCode(event.which);
        console.log( event.which + " which was " + letter );


//        insted of current letter create divs for each underscore and use them to replace with
//        actual letter, so that user can choose letter that are not in a particular order.

        if ( letter == word[currentLetter]) {
            console.log("Horraaayyy");
            currentLetter++;
        } else {
            misses--;
            $('#misses').html(misses);
        }

        if (currentLetter == word.length) {
            console.log("You win!");
        }

        if (misses == 0) {
            console.log("You lose!");
        }




    });
});


