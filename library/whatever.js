var done = function ()
{
	console.log( '--- require loaded' )

	requirejs.config(
		{
			baseUrl: 'library',
			paths:   {
        codemirror:'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.14.2',
        'codemirror/lib':'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.14.2'
      }
		} )
	/*************************************************************/
	// Set up callback for when require is properly loaded
	requirejs( [], function ()
		{
			console.log( '*** r loaded' )

      navigator.serviceWorker.register( '../../../../service-worker.js', {
        scope: '/components/whatever/'
      } );

			// <link rel="stylesheet" href="lib/codemirror.css">
			var l = document.createElement('link')
      l.rel = 'stylesheet'
      l.href = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.14.2/codemirror.css'
      document.head.appendChild(l)

      var node = document.createElement('div')
      node.style ='border:1px solid grey; background:#feaaaa'
      document.body.appendChild(node)

      require(
        [
          "codemirror/lib/codemirror", "codemirror/addon/comment/continuecomment", "codemirror/mode/javascript/javascript"
        ], function ( CodeMirror )
        {

          var options =
                {
                  mode: 'application/javascript'
                }
          var editor = CodeMirror(node, options);
        } )

		}
	)
}
/*************************************************************/
// Start loading
rscript = document.createElement( 'script' );
rscript.setAttribute( 'src', 'http://requirejs.org/docs/release/2.3.3/minified/require.js' );
document.head.appendChild( rscript );

var checkRequire = function ()
{
	if (typeof requirejs != 'undefined')
	{
		clearInterval( timer )
		done()
	}
}

var timer = setInterval( function ()
{
	checkRequire()
}, 100 )
