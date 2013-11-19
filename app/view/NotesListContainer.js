Ext.define("NotesApp.view.NotesListContainer", {
    extend: "Ext.Container",
    alias: "widget.noteslistcontainer",

    initialize: function () {
        this.callParent(arguments);
		var newButton = {
		 	xtype: 'button',
		 	text: 'New',
		 	ui: 'action',
		 	id: 'new-note-btn',
		 	handler: this.onNewButtonTap,
		 	scope: this
		};
		
		var topToolBar = {
			xtype: 'toolbar',
			docked: 'top',
			title: 'My Notes',
			items: [
				{xtype: 'spacer'},
				newButton
			]
		};
		
		var notesList = {
			xtype: 'noteslist',
			store: Ext.getStore("Notes"),
			listeners: {
				disclose: {
					fn: this.onNotesListDisclose,
					scope: this
				},
				itemtap: {
					fn: this.onNotesListDisclose,
					scope: this
				}
			}
		};
		
		this.add([topToolBar, notesList]);
    },
    
    onNotesListDisclose: function (list, record, target, index, evt, options) {
    	this.fireEvent('editNoteCommand', this, record);
	},

    
    onNewButtonTap: function (list, record, target) {
    	this.fireEvent("newNoteCommand", this);
	},
	
	onEditButtonTap: function () {
    	this.fireEvent("editNoteCommand", this);
	},
    config: {
        layout: {
            type: 'fit'
        }
    }
	
	

});
