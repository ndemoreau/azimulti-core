//  ______     ______     __     __    __     __  __     ______   __  __
// /\  __ \   /\___  \   /\ \   /\ "-./  \   /\ \/\ \   /\__  _\ /\ \_\ \
// \ \  __ \  \/_/  /__  \ \ \  \ \ \-./\ \  \ \ \_\ \  \/_/\ \/ \ \  __ \
//  \ \_\ \_\   /\_____\  \ \_\  \ \_\ \ \_\  \ \_____\    \ \_\  \ \_\ \_\
//   \/_/\/_/   \/_____/   \/_/   \/_/  \/_/   \/_____/     \/_/   \/_/\/_/
//
// azimuth-core/client/blocks/block/block.js
//
// Metadata and settings definition for the twelve column block template.
// The HTML for this template can be found in the respective directory in the view package.
//

Template.block = Template.block || {};
Template.block.label = 'Empty block';
Template.block.description = 'Basic block wysiwyg';
var fields = [
    {
        name: 'columns',
        type: 'text',
        label: 'Nbr columns',
        value: "12"
    },{
        name: 'content',
        type: 'wysiwyg',
        label: 'Content'
    }];
// This important method hooks the template into the CMS
Azimuth.registry.blockTemplate({
  name: 'block',
  label: 'Basic block',
  fields: fields
});