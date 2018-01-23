class VideoForm {
    constructor(formOverlay, database) {
        this.overlay = formOverlay;        
        this.form = formOverlay.querySelector("#add-video");
        this.database = database;

        
        var that = this; // keep the class instance for the closure
        // Intercept form submission and parse it as JSON
        this.form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var json = that.getFormData( this );
            that.database.addVideo(json);
            that.close();
		}, false);
    }

    getFormData( form ) {
        var obj = {};
        var elements = form.querySelectorAll( "input, select, textarea" );
        for( var i = 0; i < elements.length; ++i ) {
            var element = elements[i];
            var name = element.name;
            var value = element.value;

            if( name ) {
                obj[ name ] = value;
            }
        }

        return obj;
    }

    open(){ 
    	this.form.reset();
        this.overlay.classList.add('visible');
    }

    close(){
    	this.form.reset();
        this.overlay.classList.remove('visible')
    }
}

