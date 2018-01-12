<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <table >    
    <tbody>
        <xsl:for-each select="archive/video">
            <xsl:variable name="video-link" select="'link'"/>
            <tr>
                <td>
                    <a href="{@video-link}">
                        <img class="thumbnail">
                            <xsl:attribute name="src">
                                <xsl:value-of select="thumbnail" />
                            </xsl:attribute>
                        </img>
                    </a>                    
                </td>
                <td >
                    <a href="{@video-link}">
                        <xsl:value-of select="title" />
                    </a>
                    <p>
                        <xsl:value-of select="description" />
                    </p>
                </td>
                <td>
                    <xsl:value-of select="rating" />
                </td>
            </tr>
        </xsl:for-each>
    </tbody>
  </table>
</xsl:template>

</xsl:stylesheet>