class XmlLoader {
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
        var xml = this.loadXMLDoc("media.xml");
        var xsl = this.loadXMLDoc("media.xsl");
        // code for IE
        if (window.ActiveXObject || this.xhttp.responseType == "msxml-document"){
            var ex = xml.transformNode(xsl);
            document.getElementById("video-table").innerHTML = ex;
        }
        // code for Chrome, Firefox, Opera, etc.
        else if (document.implementation && document.implementation.createDocument){
            var xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(xsl);
            var resultDocument = xsltProcessor.transformToFragment(xml, document);
            document.getElementById("loading-indicator").remove();
            document.getElementById("video-table").appendChild(resultDocument);
        }
    } 
}
