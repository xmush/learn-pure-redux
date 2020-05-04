const {createStore} = require('redux')


Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

// initiating state
initalState = {
    playerName : 'xmush',
    hero : 'Pudge',
    gold : 1065,
    health : 120,
    mana : 80,
    damage : 55,
    level : 10,
    experience : {
        currentXp : 45,
        totXp : 100 
    },
    skill : {
        active : ['Meat Hook', 'Dismember'],
        passive : ['Rot', 'Flesh Heap']
    },
    kda : {
        kill : 2,
        death : 0,
        assist : 4
    },
    items : ['Tranquil Boots', 'Hood of Defiance', 'Aether Lens']
}

const reducer = (state = initalState, actions) => {
    switch(actions.type) {
        case 'ADD_GOLD' :
            return {
                ...state,
                gold : state.gold + actions.gold,
                action : 'ADD_GOLD'
            }

        case 'SUBSTRACT_GOLD' :
            return {
                ...state,
                gold : state.gold - actions.gold,
                action : 'SUBSTRACT_GOLD'

            }
        case 'ADD_ITEM' :
            return {
                ...state,
                items : state.items.concat(actions.item),
                action : 'ADD_ITEM'
            }
            
        case 'DELETE_ITEM' :
            return {
                ...state,
                items : state.items.remove(actions.item),
                action : 'DELETE_ITEM'
                    
            }
        
        case 'CHANGE_PLAYER_NAME' :
        return {
            ...state,
            playerName : actions.name,
            action : 'CHANGE_PLAYER_NAME'
        }

        case 'CHANGE_HERO_NAME' :
        return {
            ...state,
            hero : actions.heroName,
            action : 'CHANGE_HERO_NAME'
        }

        case 'ADD_HEALTH' :
        return {
            ...state,
            health : state.health + actions.health,
            action : 'ADD_HEALTH'
        }


        case 'MIN_HEALTH' :
        return {
            ...state,
            health : state.health - actions.health,
            action : 'MIN_HEALTH'
        }


        case 'ADD_MANA' :
        return {
            ...state,
            mana : state.mana + actions.mana,
            action : 'ADD_MANA'
        }


        case 'MIN_MANA' :
        return {
            ...state,
            mana : state.mana - actions.mana,
            action : 'MIN_MANA'
        }


        case 'ADD_DAMAGE' :
        return {
            ...state,
            damage : state.damage + 20,
            action : 'ADD_DAMAGE'
        }

        case 'MIN_DAMAGE' :
        return {
            ...state,
            damage : state.damage - 10,
            action : 'MIN_DAMAGE'
        }
        
        case 'ADD_LEVEL' :
        return {
            ...state,
            level : state.level + 1,
            action : 'ADD_LEVEL'
        }

        case 'ADD_CURENTXP' :
        return {
            ...state,
            experience : {
                currentXp : state.experience.currentXp + actions.xp,
                totXp : state.experience.totXp
            },
            action : 'ADD_CURENTXP'
        }
        
        case 'ADD_PASIF_SKILL' :
        return {
            ...state,
            skill : {
                active : state.skill.active,
                passive : state.skill.passive,
                new_Skill : actions.skill
            },
            action : 'ADD_PASIF_SKILL'
        }
        
        case 'ADD_KDA' :
        return {
            ...state,
            kda : {
                kill : state.kda.kill + actions.kill,
                death : state.kda.death + actions.death,
                assist : state.kda.assist +actions.assist
            },
            action : 'ADD_KDA'
        }     

        default :
            return {
                ...state
            }
        
    }
}

// // create new state
const addGold = (gold) => ({
    type :  'ADD_GOLD',
    gold
})

const subGold = (gold) => ({
    type :  'SUBSTRACT_GOLD',
    gold
})

const addItem = (item) => ({
    type : 'ADD_ITEM',
    item
})

const delItem = (item) => ({
    type : 'DELETE_ITEM',
    item
})

const changePlayerName = (name) => ({
    type : 'CHANGE_PLAYER_NAME',
    name
})

const changeHeroName = (heroName) => ({
    type : 'CHANGE_HERO_NAME',
    heroName
})


const addHealth = (health) => ({
    type : 'ADD_HEALTH',
    health
})

const minHealth = (health) => ({
    type : 'MIN_HEALTH',
    health
})

const addMana = (mana) => ({
    type : 'ADD_MANA',
    mana
})

const minMana = (mana) => ({
    type : 'MIN_MANA',
    mana
})

const addCurenXP = (xp) => ({
    type : 'ADD_CURENTXP',
    xp
})

const addSkill = (skill) => ({
    type : 'ADD_PASIF_SKILL',
    skill
})

const addKDA = (kill, death, assist) => ({
    type : 'ADD_KDA',
    kill, death, assist
})



// // initiating store
const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState());
})

// // dispatch to connecting store with reducer

store.dispatch(addGold(30))
store.dispatch(subGold(20))
store.dispatch(addItem('Aghanim Scepter'))
store.dispatch(delItem('Aether Lens'))
store.dispatch(changePlayerName('XMUSH'))
store.dispatch(changeHeroName('Butcher')) 
store.dispatch(addHealth(15)) 
store.dispatch(minHealth(15))
store.dispatch(addMana(15))
store.dispatch(minMana(6))
store.dispatch(addKDA(3,1,5))
store.dispatch(addSkill('Finger of Death'))

// store.dispatch(chooseBagas)