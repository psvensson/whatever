define(['codemirror-panel', 'inevent-panel', 'outevents-panel'], function (Aced, Inp, Outps)
{
  var me = function ()
  {

  }


  me.prototype.show = function ()
  {
    console.log('showing editor')
    var editor = this.getNode()
    if (editor.style.display == 'none')
    {
      editor.style.display = 'flex'
      this.aced.getAceEditor()
    }
  }

  me.prototype.hide = function ()
  {
    console.log('hiding editor')
    var editor = this.getNode()
    if (editor.style.display == 'flex')
    {
      editor.style.display = 'none'
    }
  }

  me.prototype.getNode = function ()
  {
    if (!this.editor)
    {
      var el                     = document.createElement('div');
      el.id                      = 'whatever-editor'
      el.style.display           = 'none'
      //el.style.position          = 'absolute'
      el.style['flex-direction'] = 'row'
      el.style.top               = 0;
      el.style.right             = 0;
      el.style.bottom            = 0;
      el.style.left              = 0;
      el.style.border = '2px solid black'
      el.style.margin = "2px"
      inp       = new Inp()
      aced      = new Aced()
      this.aced = aced
      this.aced.getAceEditor().setValue('function foo(bar)\n{\n\n}')
      outps     = new Outps()
      el.appendChild(inp.getNode())
      el.appendChild(aced.getNode())
      el.appendChild(outps.getNode())
      this.editor = el
    }
    return this.editor
  }

  me.prototype.getEditor= function()
  {
    return this.aced.getAceEditor()
  }

  me.prototype.load = function (loader)
  {
    console.log('ace editor loading functions')
  }
  return me
});