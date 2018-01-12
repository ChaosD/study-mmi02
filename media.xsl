<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <table >
    <thead>
        <tr>
            <th style="text-align: left">Video</th>
            <th style="text-align: left">Description</th>
            <th style="text-align: left">Rating</th>
        </tr>
    </thead>
    
    <tbody>
        <xsl:for-each select="archive/video">
            <tr>
                <td style="text-align: left">
                    <a href="{@link}"><xsl:value-of select="@link"/>
                        <img class="thumbnail">
                            <xsl:attribute name="src">
                                <xsl:value-of select="thumbnail" />
                            </xsl:attribute>
                        </img>
                    </a>                    
                </td>
                <td style="text-align: left">
                    <a href="{@link}"><xsl:value-of select="@link"/>
                        <xsl:value-of select="title" />
                    </a>
                    <p>
                        <xsl:value-of select="description" />
                    </p>
                </td>
                <td style="text-align: left"><xsl:value-of select="rating" /></td>
            </tr>
        </xsl:for-each>
    </tbody>
  </table>
</xsl:template>

</xsl:stylesheet>