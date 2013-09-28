var moves = {};
var pokemon = {}

$.getJSON( "/moves.json", function(data) {
   $.each(data, function(key, val) {
      moves[key] = {
         "name"   : val.name,
         "type"   : val.type,
         "pp"     : val.pp,
         "power"  : val.power
      };
   });
});

$.getJSON( "/pokemon.json", function(data) {
   $.each(data, function(key, val) {
      pokemon[key] = {
         "name"         : val.name,
         "hp"           : val.baseStats.hp,
         "atk"          : val.baseStats.atk,
         "def"          : val.baseStats.def,
         "speed"        : val.baseStats.speed,
         "evolveTo"     : val.evolveTo,
         "evolveLevel"  : val.evolveLevel
      };
   });
});

//var Attack = function (name, ap) {
   //return {
      //"name"         : name,
      //"atk"  : atk
   //}
//}

var Monster = function (name) {
   for (m in pokemon)
   {
      var monster = pokemon[m];

      if (monster.name === name)
      {
         return {
            "name"         : monster.name,
            "maxHP"        : monster.hp,
            "currentHP"    : monster.hp,
            "atk"          : monster.atk,
            "def"          : monster.def,
            "speed"        : monster.speed,
            "evolveTo"     : monster.evolveTo,
            "evolveLevel"  : monster.evolveLevel
         };
      }
   }
   // no monster data
   return {
      "name"         : "MissingNo",
      "maxHP"        : 9999,
      "currentHP"    : 9999,
      "atk"          : 9999,
      "def"          : 9999,
      "speed"        : 9999,
      "evolveTo"     : -1,
      "evolveLevel"  : -1,
   };
}
