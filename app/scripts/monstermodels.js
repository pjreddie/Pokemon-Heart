var Game = function() {
   var that = {};

   var movesLoaded = false;
   that.isReady = false;
   that.readyQueue = [];

   // crude onReady
   that.onReady = function(f) {
      that.readyQueue.push(f);
   }

   that.moves = {};
   that.pokemon = {};
   that.playerPokemon = [];
   that.computerPokemon = [];

   that.getPlayerPokemon = function() { return that.playerPokemon; };
   that.getComputerPokemon = function() { return that.computerPokemon; };

   that.genMonster = function (id_number) {
      if (id_number < 1 || id_number > 151)
      {
         return Monster({
            "name"         : "MissingNo",
            "hp"        : 9999,
            "atk"          : 9999,
            "def"          : 9999,
            "speed"        : 9999,
            "evolveTo"     : -1,
            "evolveLevel"  : -1
         });
      } else {
         return Monster(that.pokemon[id_number]);
      }
   }

   // Load data
   $.getJSON( "/moves.json", function(data) {
      $.each(data, function(key, val) {
         that.moves[key] = {
         "name"   : val.name,
         "type"   : val.type,
         "pp"     : val.pp,
         "power"  : val.power
         };
      });
      movesLoaded = true;
   });

   $.getJSON( "/pokemon.json", function(data) {
      while (!movesLoaded) {}
      $.each(data, function(key, val) {
         that.pokemon[key] = {
         "name"         : val.name,
         "id_number"    : key,
         "hp"           : val.baseStats.hp,
         "atk"          : val.baseStats.atk,
         "def"          : val.baseStats.def,
         "speed"        : val.baseStats.speed,
         "evolveTo"     : val.evolveTo,
         "evolveLevel"  : val.evolveLevel,
         "attacks"      : []
         };
      });

      while (that.readyQueue.length > 0) {
             (that.readyQueue.shift())();   
      }
   });

   return that;
}();

var Monster = function(spec) {
   var that = {};

   that.name = spec.name;
   that.id_number = spec.id_number;
   that.maxHP = spec.hp;
   that.currHP = spec.hp;
   that.atk = spec.atk;
   that.def = spec.def;
   that.speed = spec.speed;

   that.damage = function(dmg) {
      that.currHP = that.currHP - dmg;
      if (that.currHP < 0) {
         console.log("Underflowed HP!");
         that.currHP = 0;
      }
   };
   
   that.heal = function(hlth) {
      that.currHP = that.currHP - hlth;
      if (that.currHP > that.maxHP) { 
         console.log("Overflowed HP!");
         that.currHP = that.maxHP;
      }
   };

   that.getAttacks = function() {
      return that.attacks;
   }

   that.isDead = function() {
      console.log(that.name + " is " + ((that.hp < 0) ? "dead" : "alive") + "!");
      return that.hp < 0;
   };

   return that;
}

Game.onReady( function() { 
   var bulba = Game.genMonster(4);
   var charm = Game.genMonster(4);
   var squir = Game.genMonster(7);
   var tmp = Game.getPlayerPokemon();
   tmp.push(bulba);
   tmp.push(charm);
   tmp.push(squir);
});
