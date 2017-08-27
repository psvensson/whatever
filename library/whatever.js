var loadMDL = function ()
{
  /*
   <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
   <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
   <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
   */

  var l   = document.createElement('link')
  l.rel   = 'stylesheet'
  l.href  = 'https://fonts.googleapis.com/icon?family=Material+Icons'
  var l2  = document.createElement('link')
  l2.rel  = 'stylesheet'
  l2.href = 'https://code.getmdl.io/1.3.0/material.indigo-pink.min.css'
  document.head.appendChild(l)
  document.head.appendChild(l2)
  rscript = document.createElement('script');
  rscript.setAttribute('src', 'https://code.getmdl.io/1.3.0/material.min.js');
  document.head.appendChild(rscript);
}

var addStartButton = function ()
{
  var foo       = document.createElement('div')
  foo.style     = 'position:absolute; right:10px; left: 10px; bottom: 10px'
  foo.innerHTML = '<button onclick="openEditor()" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">' +
    '<i class="material-icons">add</i>' +
    '</button>'
  document.body.appendChild(foo)
}

var addEditorDialog = function ()
{
  var foo       = document.createElement('div')
  foo.innerHTML = '<dialog style="width:550px" class="mdl-dialog">' +
    '<h3 class="mdl-dialog__title" >Code Whatever</h3>' +
    '<div class="mdl-dialog__content" style="width:500px">' +
    '<div id="editordiv" style="">' +
    '</div>' +
    '</div>' +
    '<div class="mdl-dialog__actions">' +
    '<button type="button" class="mdl-button close" onclick="closeEditor()">Close</button>' +
    '</div>' +
    '</dialog>'
  document.body.appendChild(foo)

}


var openEditor = function ()
{
  var dialog = document.querySelector('dialog');
  dialog.showModal()

  if (!window._ed)
  {
    var ediv   = document.getElementById('editordiv')
    window._ed = window.ed.getNode(ediv)
    ediv.appendChild(window._ed)
  }
  window.ed.show()
  window.ed.getEditor().refresh()


}

var closeEditor = function ()
{
  var dialog = document.querySelector('dialog');
  dialog.close()
  //this.ed.show()
}

var done = function ()
{
  requirejs.config(
    {
      baseUrl: 'library',
      paths: {
        codemirror: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.14.2',
        'codemirror/lib': 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.14.2'
      }
    })
  /*************************************************************/
  // Set up callback for when require is properly loaded
  requirejs(['editor'], function (Editor)
    {

      navigator.serviceWorker.register('../../../../service-worker.js', {
        scope: '/components/whatever/'
      });

      loadMDL()
      addEditorDialog()
      addStartButton()

      window.ed = new Editor()


    }
  )
}
/*************************************************************/
// Start loading
rscript = document.createElement('script');
rscript.setAttribute('src', 'http://requirejs.org/docs/release/2.3.3/minified/require.js');
document.head.appendChild(rscript);

var checkRequire = function ()
{
  if (typeof requirejs != 'undefined')
  {
    clearInterval(timer)
    done()
  }
}

var timer = setInterval(function ()
{
  checkRequire()
}, 100)
