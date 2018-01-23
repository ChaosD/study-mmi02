class MovieDatabase {
    // Adapted from: https://www.w3schools.com/xml/xsl_client.asp
    // (like the xml snipped from the instructions ;-) )
    constructor(targetContainer) {
        this.targetContainer = targetContainer;
        
        if (window.ActiveXObject){
            this.xhttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        else {
            this.xhttp = new XMLHttpRequest();
        }
    }

    loadXMLDoc(filename)
    {
        
        this.xhttp.open("GET", filename, false);
        try {this.xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
        this.xhttp.send("");
        return this.xhttp.responseXML;
    }

    loadMovieDatabase()
    {
        if(localStorage['xmlDb']){
            // If there is already xml in localStorage, load it
            var xmlString = localStorage['xmlDb']
            var parser = new DOMParser();
            this.xml = parser.parseFromString(xmlString, "text/xml")

        } else {
            this.xml = this.loadXMLDoc("media.xml");
            this.saveLocalXml()
        }
        
        this.generateHtml();
    } 

    generateHtml(){
        var xsl = this.loadXMLDoc("media.xsl");
        // code for IE
        if (window.ActiveXObject || this.xhttp.responseType == "msxml-document"){
            var ex = this.xml.transformNode(xsl);
            document.getElementById("video-table").innerHTML = ex;
        }
        // code for Chrome, Firefox, Opera, etc.
        else if (document.implementation && document.implementation.createDocument){
            var xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(xsl);
            var resultDocument = xsltProcessor.transformToFragment(this.xml, document);
            var container = document.getElementById("video-table");
            // clear loading and previous entries
            container.innerHTML = '';
            container.appendChild(resultDocument);
        }
    }

    saveLocalXml(){
        var serializer = new XMLSerializer();
        var xmlString = serializer.serializeToString(this.xml);       
        localStorage['xmlDb'] = xmlString;
    }

    addVideo(videoData){
        var elementString = `<video>
            <title>${videoData.title}</title>
            <description>${videoData.description}</description>
            <rating>${videoData.rating}</rating>
            <thumbnail>${videoData.thumbnail}</thumbnail>
            <link>${videoData.link}</link>
        </video>`
        var parser = new DOMParser();
        var videoElement = parser.parseFromString(elementString, "text/xml");
        
        // add the video to xmlDoc
        var elements = this.xml.getElementsByTagName("archive");
        elements[0].appendChild(videoElement.firstElementChild);
        
        //Save the added video
        this.saveLocalXml()
        // rebuild the video list
        this.generateHtml()
    }

    deleteVideo(index){
        var elements = this.xml.getElementsByTagName("archive");
        elements[0].children[index].remove()
        //Save the new xml
        this.saveLocalXml()
        // rebuild the video list
        this.generateHtml()
    }
}
