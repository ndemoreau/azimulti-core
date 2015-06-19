//  ______     ______     __     __    __     __  __     ______   __  __
// /\  __ \   /\___  \   /\ \   /\ "-./  \   /\ \/\ \   /\__  _\ /\ \_\ \
// \ \  __ \  \/_/  /__  \ \ \  \ \ \-./\ \  \ \ \_\ \  \/_/\ \/ \ \  __ \
//  \ \_\ \_\   /\_____\  \ \_\  \ \_\ \ \_\  \ \_____\    \ \_\  \ \_\ \_\
//   \/_/\/_/   \/_____/   \/_/   \/_/  \/_/   \/_____/     \/_/   \/_/\/_/
//
// azimuth-core/client/blocks/block_multi/block_multi.js
//
// Metadata and settings definition for the twelve column block template.
// The HTML for this template can be found in the respective directory in the view package.
//

Template.block_multi = Template.block_multi || {};
Template.block_multi.label = 'Block multilingual';
Template.block_multi.description = 'Empty multilingual wysiwyg';
var fields = [
    {
        name: 'columns',
        type: 'text',
        label: 'Nbr columns',
        value: "12"
    },{
        name: 'contents',
        type: 'wysiwyg',
        label: 'Content',
        multiLanguages: true
    }];
// This important method hooks the template into the CMS
Azimuth.registry.blockTemplate({
  name: 'block_multi',
  label: 'Multilingual block',
  fields: fields
});