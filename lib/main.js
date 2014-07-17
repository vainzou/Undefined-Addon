//////

var tabs = require("sdk/tabs");
var windows = require("sdk/windows").browserWindows;
//
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
//
var { ActionButton } = require('sdk/ui/button/action');
var { Toolbar } = require("sdk/ui/toolbar");
////
//var buttons = require('sdk/ui/button/action');
var tab = require('sdk/tabs').activeTab;


 ///////////////////////////////////////////NAVIGATION 
 //////////////////////////////////Dedoublement


var nav_dedoublement = ActionButton({
  id: "nav_dedoublement",
  label: "Navigation : dedoublement",
  icon: "./icons/navigation/dedoublement.png",
    onClick:function() {
      tabs.activeTab.attach({
      contentScriptFile: [self.data.url("jquery-2.1.0.min.js"), self.data.url("dedoublement_nav.js")]
    });
  }
});


 //////////////////////////////////Duperie
 //A debugger. => Mauvaise Url

var nav_disparition = ActionButton({
  id: "nav_disparition",
  label: "Navigation : disparition",
  icon: "./icons/navigation/disparition.png",
    onClick:function() {
      tabs.activeTab.attach({
      contentScriptFile: [self.data.url("jquery-2.1.0.min.js"), self.data.url("disparition_nav.js")]
    });
  }
});

 //////////////////////////////////timidite
 //A debugger. => Mauvaise Url

var nav_timidite = ActionButton({
  id: "nav_timidite",
  label: "Navigation : timidite",
  icon: "./icons/navigation/timidite.png",
    onClick:function() {
      tabs.activeTab.attach({
      contentScriptFile: [self.data.url("jquery-2.1.0.min.js"), self.data.url("timidite_nav.js")]
    });
  }
});



 //////////////////////////////////epanouissement
// a debuger => timing
var nav_epanouissement = ActionButton({
  id: "nav_epanouissement",
  label: "Navigation : epanouissement",
  icon: "./icons/navigation/epanouissement.png",
    onClick:function() {
      tabs.activeTab.attach({
      contentScriptFile: [self.data.url("jquery-2.1.0.min.js"), self.data.url("epanouissement_nav.js")]
    });
  }
});



 //////////////////////////////////passivite
 // ne marche pas quand en xpi


var nav_passivite = ActionButton({

  id: "nav_passivite",
  label: "Navigation : passivité",
  icon: "./icons/navigation/passivite.png",
   onClick:handleClick

});

function handleClick(state) {
  //tabs.open("https://www.mozilla.org/");
  
      tab.on('ready', function() {
      tab.attach({
             // tabs.activeTab.attach({
        contentScriptFile:[self.data.url("jquery-2.1.0.min.js"), self.data.url("passivite_nav.js")]
      });
    });

}



/////////////////////////////////////////// RECHERCHE
//////////////////////////////////Dedoublement
//fonctionne a peu prés

var search_dedoublement = ActionButton({
  id: "search_dedoublement",
  label: "Search : dedoublement",
  icon: "./icons/search/dedoublement.png",
  onClick: getKey1

});

function getKey1(state) {

      tab.attach({
        contentScriptFile:[self.data.url("jquery-2.1.0.min.js"),self.data.url("lib/shred.bundle.js"),self.data.url("lib/swagger.js"),self.data.url("dedoublement_rech.js")]
      });
  }

//////////////////////////////////passivite
//problémer pop

var search_passivite = ActionButton({
  id: "search_passivite",
  label: "Search : passivité",
  icon: "./icons/search/passivite.png",
  onClick: getKey2
});

function getKey2(state) {

      tab.attach({
        contentScriptFile:[self.data.url("jquery-2.1.0.min.js"),self.data.url("lib/shred.bundle.js"),self.data.url("lib/swagger.js"),self.data.url("passivite_rech.js")]
      });
  }



  //////////////////////////////////epanouissement_rech


var search_epanouissement = ActionButton({
  id: "search_epanouissement",
  label: "Search : épanouissement",
  icon: "./icons/search/epanouissement.png",
  onClick: getKey3

});

function getKey3(state) {

      tab.attach({
        contentScriptFile:[self.data.url("jquery-2.1.0.min.js"),self.data.url("lib/shred.bundle.js"),self.data.url("lib/swagger.js"),self.data.url("epanouissement_rech.js")]
      });
  }

    //////////////////////////////////disparition_rech


var search_disparition = ActionButton({
  id: "search_disparition",
  label: "Search : disparition",
  icon: "./icons/search/disparition.png",
  onClick: getKey3

});

function getKey3(state) {

      tab.attach({
        contentScriptFile:[self.data.url("jquery-2.1.0.min.js"),self.data.url("lib/shred.bundle.js"),self.data.url("lib/swagger.js"),self.data.url("disparition_rech.js")]
      });
  }


/*
/////////////////////////////////////////// CURSEUR
//////////////////////////////////follow

var mouse = ActionButton({
  id: "mouse",
  label: "mouse",
  icon: "./icons/cursor.png",
  onClick:function() {
  tabs.activeTab.attach({
  contentScriptFile: [self.data.url("jquery-2.1.0.min.js"), self.data.url("mouse.js")]
  });
  } 
});

//////////////////////////////////hide

var mouseHide = ActionButton({
  id: "mouseHide",
  label: "mouseHide",
  icon: "./icons/cursor.png",
  onClick:function() {
  tabs.activeTab.attach({
  contentScriptFile: [self.data.url("jquery-2.1.0.min.js"), self.data.url("mouseDisp.js")]
  });
  }
});
*/

////////////////////////////////// dedoublement

var cursor_passivite = ActionButton({
  id: "cursor_passivite",
  label: "Cursor : passivité",
  icon: "./icons/cursor/passivite.png",
  onClick:function() {
  tabs.activeTab.attach({
  contentScriptFile: [self.data.url("jquery-2.1.0.min.js"), self.data.url("passivite_mouse.js")]
  });
  }
});


////////////////////////////////// dedoublement

var cursor_dedoublement = ActionButton({
  id: "cursor_dedoublement",
  label: "Cursor : dedoublement",
  icon: "./icons/cursor/dedoublement.png",
  onClick:function() {
  tabs.activeTab.attach({
  contentScriptFile: [self.data.url("jquery-2.1.0.min.js"), self.data.url("dedoublement_mouse.js")]
  });
  }
});


////////////////////////////////// dispariton

var cursor_timidite = ActionButton({
  id: "cursor_timidite",
  label: "Cursor : timidite",
  icon: "./icons/cursor/timidite.png",
  onClick:function() {
  tabs.activeTab.attach({
  contentScriptFile: [self.data.url("jquery-2.1.0.min.js"), self.data.url("timidite_mouse.js")]
  });
  }
});

 /////////////////////////////////////////// TOOLBAR

var toolbar = Toolbar({
  title: "Undefined",
  items: [nav_dedoublement,nav_disparition,nav_timidite, nav_epanouissement,nav_passivite,search_dedoublement,search_disparition,search_passivite,search_epanouissement,cursor_passivite,cursor_dedoublement,cursor_timidite]

  });



