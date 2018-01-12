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
                <td style="text-align: left"><xsl:value-of select="title" /></td>
                <td style="text-align: left"><xsl:value-of select="description" /></td>
                <td style="text-align: left"><xsl:value-of select="rating" /></td>
            </tr>
        </xsl:for-each>
    </tbody>
  </table>
</xsl:template>

</xsl:stylesheet>