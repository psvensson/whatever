define(["codemirror/lib/codemirror", "codemirror/addon/comment/continuecomment", "codemirror/mode/javascript/javascript"], function (CodeMirror)
{
  var me = function ()
  {
    // <link rel="stylesheet" href="lib/codemirror.css">
    var l  = document.createElement('link')
    l.rel  = 'stylesheet'
    l.href = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.14.2/codemirror.css'
    document.head.appendChild(l)

    this.node       = document.createElement('div')
    this.node.style = 'width:100%'
    this.node.id    = "ace-panel_editor"
    this.editor     = undefined

  }

  me.prototype.getNode = function ()
  {
    return this.node
  }

  me.prototype.getAceEditor = function ()
  {
    if (!this.editor)
    {
      console.log('ace-panel creating editor')
      var options =
            {
              mode: 'application/javascript'
            }
      this.editor = CodeMirror(this.node, options);
    }
    return this.editor
  }

  return me
})