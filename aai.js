var aai = new function() {
    this.defaults = new function() {
	//this.host = "https://ufal-point.mff.cuni.cz";
	  this.host = "https://" + window.location.hostname; //better default (useful when testing on ufal-point-dev)
         // do not add protocol because an error will appear in the DJ dialog
	this.responseUrl = this.host.substr(this.host.indexOf(":")+1) + "/xmlui/themes/UFAL/lib/html/disco-juice.html?";
	this.ourEntityID = "https://" + window.location.hostname + "/shibboleth/eduid/sp";
        this.serviceName = "";
        this.metadataFeed = this.host + "/xmlui/discojuice/feeds";
    };
    this.setup = function(options){
        var opts = jQuery.extend({}, this.defaults, options);
	//console.log(opts);
	if(!opts.target){
		throw "You need to set the 'target' parameter.";
	}
        // call disco juice setup
        if ($("a.signon") != null) {
	    if(! window.DiscoJuice ){
		throw "Failed to find DiscoJuice. Did you include all that is necessary?";
	    }
            var djc = DiscoJuice.Hosted.getConfig(
                            opts.serviceName,
                            opts.ourEntityID,
                            opts.responseUrl,
                            [ ],
                            opts.host + "/Shibboleth.sso/Login?SAMLDS=1&target="+opts.target+"&entityID=");
            djc.metadata = [opts.metadataFeed];


            djc.inlinemetadata = [
            {
                "country":"_all_",
                "entityID":"https://idp.clarin.eu",
                "geo":{"lat":51.833298,"lon":5.866699},
                "title":"Clarin.eu website account",
                "weight":1000
            },
            {
                'country':'CZ',
                'entityID':'https://cas.cuni.cz/idp/shibboleth',
                'geo':{'lat':'50.0705102','lon':'14.4198844'},
                'title':'Univerzita Karlova v Praze',
                'weight':-1000
            },
            ];
            if(opts.localauth){
		    djc.inlinemetadata.push(
			    {
				'entityID': 'local://',
				'auth': 'local',
				'title': 'Local authentication',
				'country': '_all_',
				'geo': null,
				'weight':1000
			    });
                    djc.callback = function(e){
                        var auth = e.auth || null;
                        switch(auth){
                            case 'local':
                                DiscoJuice.UI.setScreen(opts.localauth);
                                jQuery("input#login").focus();
                                break;
                            case 'saml':
                            default:
                                window.location = opts.host + "/Shibboleth.sso/Login?SAMLDS=1&target=" + opts.target + "&entityID="+escape(e.entityID);
                                break;
                        }
                    }
            }
            jQuery("a.signon").DiscoJuice( djc );
        } //if a.signon
    };
};

