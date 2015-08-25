/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
   * etc. depending on your default view engine) your home page.              *
   *                                                                          *
   * (Alternatively, remove this and add an `index.ejs` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': {
    view: 'index'
  },

  /***************************************************************************
   *                                                                          *
   * Custom routes here...                                                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the custom routes above, it   *
   * is matched against Sails route blueprints. See `config/blueprints.js`    *
   * for configuration options and examples.                                  *
   *                                                                          *
   ***************************************************************************/
  /**
   * All Post routes (for creation)
   */
  'post /api/pages': {controller: 'PagesController', action: 'pagePost'},
  // The two below can be combined, but for now they will be split.
  'post /api/pages/:pageName/plugins': {controller: 'PluginsController', action: 'pluginPost'},
  'post /api/pages/:pageName/plugins/:pluginId': {controller: 'PluginsController', action: 'confPost'},

  /**
   * All Delete routes (for deletion)
   */
  'delete /api/pages/:pageName': {controller: 'PagesController', action: 'pageDelete'},
  // The two below can be combined, but for now they will be split.
  'delete /api/pages/:pageName/plugins/:pluginId': {controller: 'PluginsController', action: 'pluginDelete'},
  'delete /api/pages/:pageName/plugins/:pluginId/:confName': {controller: 'PluginsController', action: 'confDelete'},

  /**
   * All Get routes (for fetching information)
   */
  'get /api/pages/:pageName?': {controller: 'PagesController', action: 'pagesFetch'},
  // The two below can be combined, but for now they will be split.
  'get /api/pages/:pageName/plugins/:pluginId?': {controller: 'PluginsController', action: 'pluginsFetch'},
  'get /api/pages/:pageName/plugins/:pluginId/:confName': {controller: 'PluginsController', action: 'confFetch'},

};
