'use strict';

var GraphicsUtil = require('diagram-js/lib/util/GraphicsUtil')

function IvyIcons(eventBus, pathMap) {

    // each time a shape was added, check if we have a
    // corresponding ivy-style to add.
    eventBus.on('shape.added', styleHandler);

    function styleHandler (event) {

        var bpmnType = event.element.type;
        var ivyStyle = ivyStyles[bpmnType];
        if (ivyStyle) {
            var visual = GraphicsUtil.getVisual(event.gfx);
            ivyStyle(visual, event.element);
        }

        console.log('shape ', bpmnType, ' was added to the diagram');
    }

    // paths copied from http://raphaeljs.com/icons/
    // API: http://snapsvg.io/docs/
    // SVG Attribtues: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
    var userPath = "M20.771,12.364c0,0,0.849-3.51,0-4.699c-0.85-1.189-1.189-1.981-3.058-2.548s-1.188-0.454-2.547-0.396c-1.359,0.057-2.492,0.792-2.492,1.188c0,0-0.849,0.057-1.188,0.397c-0.34,0.34-0.906,1.924-0.906,2.321s0.283,3.058,0.566,3.624l-0.337,0.113c-0.283,3.283,1.132,3.68,1.132,3.68c0.509,3.058,1.019,1.756,1.019,2.548s-0.51,0.51-0.51,0.51s-0.452,1.245-1.584,1.698c-1.132,0.452-7.416,2.886-7.927,3.396c-0.511,0.511-0.453,2.888-0.453,2.888h26.947c0,0,0.059-2.377-0.452-2.888c-0.512-0.511-6.796-2.944-7.928-3.396c-1.132-0.453-1.584-1.698-1.584-1.698s-0.51,0.282-0.51-0.51s0.51,0.51,1.02-2.548c0,0,1.414-0.397,1.132-3.68H20.771z";

    pathMap.pathMap['TASK_TYPE_USER_1'].d = '';
    pathMap.pathMap['TASK_TYPE_USER_2'].d = '';
    pathMap.pathMap['TASK_TYPE_USER_3'].d = '';

    var ivyStyles = {
        'bpmn:UserTask': function(parent, element) {
            var userTaskIcon = parent.path(userPath, 20, 20)
                .attr({
                    fill: "#316FAE",
                    stroke: "#ffffff",
                    strokeWidth: -2
                });
            userTaskIcon.transform('scale(1.5, 1.5, 0, 0), translate(-7,-10)');
        }
    };
}

IvyIcons.$inject = [ 'eventBus', 'pathMap'];

module.exports = IvyIcons;