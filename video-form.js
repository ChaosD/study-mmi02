class VideoForm {
    constructor(formOverlay, database) {
        this.overlay = formOverlay;        
        this.form = formOverlay.querySelector("#add-video");
        this.database = database;
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
        this.overlay.classList.add('visible');
    }

    close(){
        this.overlay.classList.remove('visible')
    }
}

