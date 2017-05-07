

/*************************************************************/
// Set up callback for when require is properly loaded
var require =
{
    callback: function()
    {
        console.log('*** r loaded')
        requirejs.config({ baseUrl: 'library' , paths:{ace: '//cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/'}})
        navigator.serviceWorker.register('library/service-worker.js', {
            scope: './library/'
        });
        require(['editor'], function(editor)
        {
            console.log('*** editor loaded')
            editor.show()
        })
    }

};
/*************************************************************/
// Start loading
rscript = document.createElement('script');
rscript.setAttribute('src','http://requirejs.org/docs/release/2.3.3/minified/require.js');
document.head.appendChild(rscript);
