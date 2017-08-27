define(['tim'], function(tim)
{
    var template = '<div><script type="text/tim" class="bool">{{event}}{{event.name}}{{/event}}</div>'

    var me = function()
    {
        this.event = false
        this.node = document.createElement('div')
        this.node.innerHTML = 'inevent panel (replace me)'
        this.render()
    }

    me.prototype.getNode = function()
    {
        return this.node
    }

    me.prototype.setEvent = function(inEvent)
    {
        if(inEvent)
        {
            this.event = inEvent
            this.render()
        }
    }

    me.prototype.render = function()
    {
	    console.log('inevents-panel rendering')
        this.node.innerHTML = tim(template, this)
    }

    return me
})