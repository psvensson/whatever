define(['aceditor/ace'], function(ed)
{
    console.log('ace-panel Ace is')
  console.dir(ed)
    var me = function()
    {
        this.node = document.createElement('div')
        this.node.style = 'width:500px;height:400px;'
        this.node.id = "ace-panel_editor"
        this.editor = undefined

    }

    me.prototype.getNode = function()
    {
        return this.node
    }

    me.prototype.getAceEditor = function()
    {
        if(!this.editor)
        {
            console.log('ace-panel creating editor')
            this.editor = ed.edit("ace-panel_editor");
            this.editor.setTheme("aceditor/theme/monokai");
            this.editor.getSession().setMode("aceditor/mode/javascript");
        }
        return this.editor
    }

    return me
})