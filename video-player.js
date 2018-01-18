class VideoPlayer {
    constructor(overlay) {
        this.overlay = overlay;
        this.player = overlay.querySelector("#player")
        this.src = overlay.querySelector("#player-src")
    }

    open(mediaPath){ 
        this.src.setAttribute("src", mediaPath);    
        this.overlay.classList.add('visible');
        this.player.load();
        this.player.play();
    }

    close(){    
        this.src.removeAttribute("src");
        this.overlay.classList.remove('visible')
        this.player.pause()
    }
}