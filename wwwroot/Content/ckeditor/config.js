/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
    // Define changes to default configuration here.
    // For complete reference see:
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config

    // The toolbar groups arrangement, optimized for a single toolbar row.
    config.toolbarGroups = [
		{ name: 'document', groups: ['mode', 'document', 'doctools'] },
		{ name: 'clipboard', groups: ['clipboard', 'undo'] },
		{ name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
		{ name: 'forms' },
		{ name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
		{ name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'tools' },
		{ name: 'others' },
		{ name: 'about' }
	];

    // The default plugins included in the basic setup define some buttons that
    // are not needed in a basic editor. They are removed here.
    config.removeButtons = 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript';

    // Dialog windows are also simplified.
    config.removeDialogTabs = 'link:advanced';
    // config.width = 650;
    // config.height = 350;
    config.toolbarCanCollapse = true;
    config.autoParagraph = false;
    config.extraPlugins = 'wordcount';
    config.wordcount = {

        // Whether or not you want to show the Word Count
        showWordCount: true,

        // Whether or not you want to show the Char Count
        showCharCount: true,

        // Whether or not to include Html chars in the Char Count
        countHTML: false,

        charLimit: 4000,

        countSpacesAsChars: true
    };

    //     CKEDITOR.on('instanceReady', function (ev) {
    //        var writer = ev.editor.dataProcessor.writer;
    //        // The character sequence to use for every indentation step.
    //        writer.indentationChars = '  ';

    //        var dtd = CKEDITOR.dtd;
    //        // Elements taken as an example are: block-level elements (div or p), list items (li, dd), and table elements (td, tbody).
    //        for (var e in CKEDITOR.tools.extend({}, dtd.$block, dtd.$listItem, dtd.$tableContent)) {
    //            ev.editor.dataProcessor.writer.setRules(e, {
    //                // Indicates that an element creates indentation on line breaks that it contains.
    //                indent: false,
    //                // Inserts a line break before a tag.
    //                breakBeforeOpen: false,
    //                // Inserts a line break after a tag.
    //                breakAfterOpen: false,
    //                // Inserts a line break before the closing tag.
    //                breakBeforeClose: false,
    //                // Inserts a line break after the closing tag.
    //                breakAfterClose: false
    //            });
    //        }

    //        for (var e in CKEDITOR.tools.extend({}, dtd.$list, dtd.$listItem, dtd.$tableContent)) {
    //            ev.editor.dataProcessor.writer.setRules(e, {
    //                indent: true,
    //            });
    //        }
    //    });

};
  