// this could be rewrited as JSON 
// load information for Menu Buttons

var RESOURCES = {
    buttons: [{ content: null, id: "NewGameButton", src: "Assets/menu/NewGameButton.jpg", x: 180, y: 200 },
    { content: null, id: "ContinueButton", src: "Assets/menu/ContinueButton.jpg", x: 180, y: 238 },
    { content: null, id: "OptionsButton", src: "Assets/menu/OptionsButton.jpg", x: 180, y: 276 }
    ],
    select_chapter_button: [{ content: {width:10,height:40}, id: "Chapter1Button", src: "Assets/select_chapter_menu/chapter1.png", x: 10, y: 10 },
    
    ],
    game_UI_button: [{ content: {width:10,height:40} , id: "gameUIButton", src: "Assets/game_UI/game_UI.jpg", x: 0, y: 0}]
}

module.exports=RESOURCES;