define(['ace-panel', 'inevent-panel', 'outevents-panel'], function(aced, inp, outps)
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