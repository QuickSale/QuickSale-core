/**
 * PluginsController
 *
 * @description :: Server-side logic for managing Plugins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  // Fetch one or all pages
  pagesFetch: function (req, res) {
    /* Do a lookup for the confName and pluginId */
    var filter = {};
    if (req.param('pageName') !== undefined)
      filter = {pageName: req.param('pageName')};

    Pages.find(filter).exec(function (err, record) {
      if (err) return res.notFound(err);
      if (!record) return res.notFound('Page(s) not found.');
      return res.ok(record);
    });
  },
  // Add or modify a page
  pagePost: function (req, res) {
    /* Do a lookup for the confName and pluginId */
    if (req.param('pageName') === undefined) return res.badRequest('Page name must be set.');
    var pageName = req.param('pageName');

    Pages.findOrCreate({pageName: pageName}, {pageName: pageName}).exec(function (err, record) {
      if (err) return res.notFound(err);
      if (!record) return res.notFound('Page not found? This should not happen...');

      /*
       Any record update methods should be written here... For example:
       if (req.param('displayName') !== undefined){
       record.displayName = req.param(('displayName'));
       }
       Would set the displayName property of the record if the displayName parameter was present.
       */

      record.save(function (error) {
        if (error) return res.notFound(error);
        return res.ok(record);
      });
    });
  },

  // Delete a page
  pageDelete: function (req, res) {
    var pageName = req.param('pageName');// Page name should never be undefined

    Pages.destroy({pageName: pageName}).exec(function (err, record) {
      if (err) return res.notFound(err);
      if (!record) return res.notFound('Page not found.');

      // Instead of doing a find, we will use Sail's callback to check what was deleted, and if nothing was, then we just return a not-found.
      if (record.length == 0)
        return res.notFound('Page not found.');
      else
        return res.ok(record);
    });
  }
};

