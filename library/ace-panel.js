define(['ace/ace'], function(ed)
{
    var me = function()
    {
        this.node = document.createElement('div')
        this.node.id = "ace-panel_editor"
        this.editor = undefined
    }

    me.prototype.getNode = function()
    {
        return this.node
    }

    me.prototype.getEditor = function()
    {
        if(!this.editor)
        {
            this.editor = ace.edit("ace-panel_editor");
            this.editor.setTheme("ace/theme/monokai");
            this.editor.getSession().setMode("ace/mode/javascript");
        }
        return this.editor
    }

    return me
})