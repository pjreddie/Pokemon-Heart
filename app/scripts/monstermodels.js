var Game = function() {
   var that = {};

   var movesLoaded = false;

   // crude onReady
   that.readyQueue = [];
   that.onReady = function(f) {
      that.readyQueue.push(f);
   }

   that.moves = {};
   that.pokemon = {};
   that.currPlayerPokemon = {};
   that.currComputerPokemon = {};
   that.playerPokemon = [];
   that.computerPokemon = [];

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
            "pp"     : val.pp
         };

         // build the attack function
         that.moves[key].func = function (poke1, poke2) {
            var result = {};

            if (val.moveType === "simple") { // just attempt attack
               result.hitsOpponent = true;
               var A = (2*poke1.level+10)/250;
               var B = poke1.atk/poke2.def;
               var C = val.power;
               // TODO: implement this
               var isSTAB = (val.type == poke1.type);
               console.log("Attack is STAB?: " + isSTAB);
               var STAB = stab ? 1.5 : 1;
               if (Math.random() < val.accuracy) {
                  poke2.damage(A*B*C);
                  result.hitAmount = A*B*C*STAB;
                  result.hitConnected = true;
               } else {
                  result.hitConnected = false;
               }
            }

            return result;
         }
      });
      movesLoaded = true;
   });

   $.getJSON( "/pokemon.json", function(data) {
      while (!movesLoaded) {}
      $.each(data, function(key, val) {
         that.pokemon[key] = {
         "name"         : val.name,
         "id_number"    : key,
         "type"         : val.type1,
         "hp"           : val.baseStats.hp,
         "atk"          : val.baseStats.atk,
         "def"          : val.baseStats.def,
         "spAtk"        : val.baseStats.spAtk,
         "spDef"        : val.baseStats.spDef,
         "speed"        : val.baseStats.speed,
         "evolveTo"     : val.evolveTo,
         "evolveLevel"  : val.evolveLevel,
         "attacks"      : []
         };

        for (l in val.learnset) {
           that.pokemon[key].attacks.push(val.learnset[l].move);
        }

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
   that.type = spec.type;
   that.maxHP = spec.hp;
   that.currHP = spec.hp;
   that.atk = spec.atk;
   that.def = spec.def;
   that.spAtk = spec.spAtk;
   that.spDef = spec.spDef;
   that.speed = spec.speed;
   that.level = 1;
   that.attacks = {};

   // add attacks
   for (idx in spec.attacks)
   {
      var attack_name = spec.attacks[idx];
      var attack_data = Game.moves[attack_name];
      if (typeof attack_data != "undefined") {
         that.attacks[attack_name] = {
            "name"         : attack_data.name,
            "maxPP"        : attack_data.pp,
            "currPP"       : attack_data.pp,
            "attackFunc"   : attack_data.func
         };
      }
   }

   that.useAttack = function(name, opp) {
      if (typeof that.attacks[name] != "undefined") {
         return that.attacks[name].attackFunc(that, opp);
      } else {
         console.log("Used invalid attack!");
         return {};
      }
   }

   that.levelUp = function() { that.level += 1; }

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

   that.isDead = function() {
      console.log(that.name + " is " + ((that.hp < 0) ? "dead" : "alive") + "!");
      return that.hp < 0;
   };

   that.tryEvolve = function() {
      if (that.level >= spec.evolveLevel) {
         return Game.genMonster(spec.evolveTo);
      }
      return that;
   }

   return that;
}

Game.onReady( function() { 
   var bulba = Game.genMonster(4);
   var charm = Game.genMonster(4);
   var squir = Game.genMonster(7);
   var tmp = Game.playerPokemon;
   tmp.push(bulba);
   tmp.push(charm);
   tmp.push(squir);
   Game.currPlayerPokemon = game.playerPokemon[0];

   var bulba = Game.genMonster(14);
   var charm = Game.genMonster(24);
   var squir = Game.genMonster(37);
   var tmp = Game.computerPokemon;
   tmp.push(bulba);
   tmp.push(charm);
   tmp.push(squir);
   Game.currComputerPokemon = game.computerPokemon[0];
});
