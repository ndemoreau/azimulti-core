//  ______     ______     __     __    __     __  __     ______   __  __
// /\  __ \   /\___  \   /\ \   /\ "-./  \   /\ \/\ \   /\__  _\ /\ \_\ \
// \ \  __ \  \/_/  /__  \ \ \  \ \ \-./\ \  \ \ \_\ \  \/_/\ \/ \ \  __ \
//  \ \_\ \_\   /\_____\  \ \_\  \ \_\ \ \_\  \ \_____\    \ \_\  \ \_\ \_\
//   \/_/\/_/   \/_____/   \/_/   \/_/  \/_/   \/_____/     \/_/   \/_/\/_/
//
// azimuth-core/client/blocks/block_multi_with_title/block_multi_with_title.js
//
// Metadata and settings definition for the twelve column block template.
// The HTML for this template can be found in the respective directory in the view package.
//

Template.block_multi_with_title = Template.block_multi_with_title || {};
Template.block_multi_with_title.label = 'Multilingual block with tile';
Template.block_multi_with_title.description = 'A basic multilingual block with a title';
var fields = [
    {
        name: 'columns',
        type: 'text',
        label: 'Nbr columns',
        value: "12"
    },
    {
    name: 'title',
    type: 'text',
    label: 'Title',
    multiLanguages: true
    },
    {
        name: 'contents',
        type: 'wysiwyg',
        label: 'Contents',
        multiLanguages: true
    },
    ];
// This important method hooks the template into the CMS
Azimuth.registry.blockTemplate({
  name: 'block__multilingual_with_title',
  label: 'Multilingual block with title',
  fields: fields
});