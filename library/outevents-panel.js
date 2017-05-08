define([], function()
{
    var me = function()
    {
        this.node = document.createElement('div')
    }

    me.prototype.getNode = function()
    {
        return this.node
    }

    return me
})