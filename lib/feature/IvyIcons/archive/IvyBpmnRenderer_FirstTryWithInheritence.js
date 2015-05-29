'use strict';

var BpmnRenderer = require('bpmn-js/lib/draw/BpmnRenderer');
var diagram = require('diagram-js/lib/Diagram');

function IvyBpmnRenderer(events, styles, pathMap) {

    var ivyHandlers = {};

    /*
    ivyHandlers['bpmn:UserTask'] =  function(p, element) {
        var task = this.renderer('bpmn:Task')(p, element);
        return task;
    };
    */
    this.drawShape = function (parent, element) {
        var type = element.type;
        var ivyHandler = ivyHandlers[type];
        if (ivyHandler) {
            return this.renderer('bpmn:Task')(parent, element);
        } else {
            return renderer.drawShape(parent, element);
        }
    };

    //this.drawShape = drawShape;
}

IvyBpmnRenderer.$inject = [ 'eventBus', 'styles', 'pathMap'];

module.exports = IvyBpmnRenderer;