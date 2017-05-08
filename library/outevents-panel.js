define(['tim'], function(tim)
{
    var template = '<div style="display:flex;flex-direction:column">'
    template += '<script type="text/tim" class="loops">{{events}}<div>{{name}}</div>{{/events}}</script></div>'
    var me = function()
    {
        this.events = []
        this.node = document.createElement('div')
        this.render()
    }

    me.prototype.getNode = function()
    {
        return this.node
    }

    me.prototype.setOutevents = function(outEvents)
    {
        if(outEvents)
        {
            this.events = outEvents
            this.render()
        }
    }

    me.prototype.render = function()
    {
        this.node.innerHTML = tim(template, this)
    }

    return me
})