define(['./module.js'], function (module) {
  'use strict';
  return module.factory('actions', function actionsProvider() {
    return {
      main_menu: function ($content) {
        console.log("Just ran the Main Menu action. No callback can be done.");
      }


    };
  }).factory('filters', function filtersProvider() {
    return {
      main_menu: function ($content) {
        console.log("Just ran the Main Menu action. A callback has been done. The content returned was the addition of a menu ");
        console.log("Started with " + $content);
        $content.push({menu_name: "Google", menu_priority: 2, menu_href: "http://www.Google.com"});

        return $content;
      }
    };
  }).factory('menu', function filtersProvider() {
    return {
      main_menu: [
        {},
        {},
        {}
      ]
    };
  });


});
