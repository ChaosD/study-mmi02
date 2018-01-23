<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <table >    
    <tbody>
        <xsl:for-each select="archive/video">
        <xsl:variable name="videoIndex" select="position() - 1"/>
            <tr>
                <td>
                    <div class="thumbnail">
                        <a onclick="player.open('{link}')" href="#">
                            <span class="play">&#9658;</span>
                            <div class="overlay"></div>
                        </a>                    
                        <img src="{thumbnail}"></img>
                    </div>
                </td>
                <td style="vertical-align: top;">
                    <a onclick="player.open('{link}')" href="#">
                        <xsl:value-of select="title" />
                    </a>
                    <a class="button-delete" onclick="database.deleteVideo({$videoIndex})" href="#">X</a>
                    <span class="rating">
                        <xsl:value-of select="rating" />/5
                    </span>
                    <p>
                        <xsl:value-of select="description" />
                    </p>                    
                </td>
            </tr>
        </xsl:for-each>
    </tbody>
  </table>
</xsl:template>

</xsl:stylesheet>