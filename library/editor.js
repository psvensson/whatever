define(['ace-panel', 'inevent-panel', 'outevents-panel'], function(Aced, Inp, Outps)
{
    var editor = undefined
    return {
        show: function ()
        {
            console.log('showing editor')
            var editor = this.getEditor()
            if(editor.style.display == 'none')
            {
                editor.style.display = 'flex'
            }
        },

        hide: function ()
        {
            console.log('hiding editor')
            var editor = this.getEditor()
            if(editor.style.display == 'flex')
            {
                editor.style.display = 'none'
            }
        },

        getEditor:function()
        {
            if(!editor)
            {
                var el = document.createElement('div');
                el.id = 'whatever-editor'
                el.style.display = 'none'
                el.style.position = 'absolute'
                el.style['flex-direction'] = 'row'
                el.style.top = 0;
                el.style.right = 0;
                el.style.bottom = 0;
                el.style.left = 0;
                document.head.appendChild(rscript);
                inp = new Inp()
                aced = new Aced()
                outps = new Outps()
                el.appendChild(inp.getNode())
                el.appendChild(aced.getNode())
                el.appendChild(outps.getNode())
                editor = el
            }
            return editor
        },

        load:function(loader)
        {
            console.log('ace editor loading functions')
        }
    };
});