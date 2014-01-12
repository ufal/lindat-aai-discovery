'use strict';
(function(window){
  function AAI() {
    var host = 'https://' + window.location.hostname,
        ourEntityID = host.match("lindat.mff.cuni.cz") ? "https://ufal-point.mff.cuni.cz" : host;
    this.defaults = {
      //host : 'https://ufal-point.mff.cuni.cz',
      host : host, //better default (useful when testing on ufal-point-dev)
      // do not add protocol because an error will appear in the DJ dialog
      // seems to no longer be an issue
      responseUrl: host + '/xmlui/themes/UFAL/lib/html/disco-juice.html?',
      ourEntityID: ourEntityID + '/shibboleth/eduid/sp',
      serviceName: '',
      metadataFeed: host + '/xmlui/discojuice/feeds',
      selector: 'a.signon', // selector for login button
      autoInitialize: true // auto attach DiscoJuice to DOM
    };
    this.setup = function(options) {
      var opts = jQuery.extend({}, this.defaults, options),
          defaultCallback = function(e) {
            window.location = opts.host + '/Shibboleth.sso/Login?SAMLDS=1&target=' + opts.target + '&entityID=' + window.encodeURIComponent(e.entityID);
          };
      //console.log(opts);
      if(!opts.target){
        throw 'You need to set the \'target\' parameter.';
      }
      // call disco juice setup
      if (!opts.autoInitialize || $(opts.selector).size() > 0) {
        if(! window.DiscoJuice ){
          throw 'Failed to find DiscoJuice. Did you include all that is necessary?';
        }
        var djc = DiscoJuice.Hosted.getConfig(
          opts.serviceName,
          opts.ourEntityID,
          opts.responseUrl,
          [ ],
          opts.host + '/Shibboleth.sso/DS?SAMLDS=1&target='+opts.target+'&entityID=');
        djc.metadata = [opts.metadataFeed];
        djc.subtitle = "Select your Identity Provider (e.g., Home Institution)";

        djc.inlinemetadata = typeof opts.inlinemetadata === 'object' ? opts.inlinemetadata : [];
        djc.inlinemetadata.push({
          'country': '_all_',
          'entityID': 'https://idp.clarin.eu',
          'geo': {'lat': 51.833298, 'lon': 5.866699},
          'title': 'Clarin.eu website account',
          'weight': 1000
        });
        djc.inlinemetadata.push({
          'country': 'CZ',
          'entityID': 'https://cas.cuni.cz/idp/shibboleth',
          'geo': {'lat': '50.0705102', 'lon': '14.4198844'},
          'title': 'Univerzita Karlova v Praze',
          'weight': -1000
        });

        if(opts.localauth) {
          djc.inlinemetadata.push(
            {
              'entityID': 'local://',
              'auth': 'local',
              'title': 'Local authentication',
              'country': '_all_',
              'geo': null,
              'weight': 1000
            });
          djc.callback = function(e){
            var auth = e.auth || null;
            switch(auth) {
              case 'local':
                DiscoJuice.UI.setScreen(opts.localauth);
                jQuery('input#login').focus();
                break;
              //case 'saml':
              default:
                defaultCallback(e);
                break;
            }
          };
        }

        if (opts.callback && typeof opts.callback === 'function') {
          djc.callback = function(e) {
            opts.callback(e, opts, defaultCallback);
          };
        }

        if (opts.autoInitialize) {
          jQuery(opts.selector).DiscoJuice( djc );
        }

        return djc;
      } //if jQuery(selector)
    };
  }

  if (!window.aai) {
    window.aai = new AAI();
  }
})(window);
