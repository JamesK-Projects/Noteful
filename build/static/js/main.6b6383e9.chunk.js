(this.webpackJsonpnoteful=this.webpackJsonpnoteful||[]).push([[0],{22:function(e,t,n){e.exports=n(45)},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),l=n(7),i=(n(27),n(17)),s=n(1),u=n(2),d=n(4),m=n(3),f=n(5),h=r.a.createContext({notes:[],folder:[],deleteNote:function(){},addFolder:function(){},addNote:function(){}}),p=(n(28),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(l.b,{to:"/folder/".concat(this.props.folder.id)},r.a.createElement("div",{className:this.props.isSelected?"folder-item selected-folder":"folder-item"},r.a.createElement("h2",null,this.props.folder.name)))}}]),n}(a.Component)),b=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(u.a)(n,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h2",null,"There has been an error, please refresh the page and try again"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(a.Component),v=(n(34),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null,this.context.folders.map((function(e,t){return r.a.createElement(p,{folder:e,key:t})}))),r.a.createElement(l.b,{to:"/add-folder"},r.a.createElement("button",{className:"add-folder-button"},"Add Folder")))}}]),n}(a.Component));v.contextType=h;var E=v,y="https://fathomless-coast-51621.herokuapp.com/",j=(n(35),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).deleteNoteRequest=function(t,n){fetch(y+"api/notes/"+"".concat(e.props.note.id),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){n(t)})).catch((function(e){console.error(e)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(h.Consumer,null,(function(t){return r.a.createElement("div",{className:"note-item"},r.a.createElement("div",{className:"left-side"},r.a.createElement(l.b,{to:"/note/".concat(e.props.note.id)},r.a.createElement("h2",null,e.props.note.name))),r.a.createElement("button",{className:"delete-note right-side",onClick:function(){e.deleteNoteRequest(e.props.note.id,t.deleteNote)}},"Delete Note"))}))}}]),n}(a.Component));j.contextType=h;var O=j,N=(n(36),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null,this.context.notes.map((function(e,t){return r.a.createElement(O,{note:e,key:t})}))),r.a.createElement(l.b,{to:"/add-note"},r.a.createElement("button",{className:"add-note-button"},"Add Note")))}}]),n}(a.Component));N.contextType=h;var k=N,g=(n(37),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout"},r.a.createElement("div",{className:"sidebar"},r.a.createElement(E,null)),r.a.createElement("div",{className:"main"},r.a.createElement(k,null)))}}]),n}(a.Component)),w=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null,this.context.folders.map((function(t,n){return t.id!=e.props.match.params.folderId?r.a.createElement(p,{folder:t,key:n}):r.a.createElement(p,{folder:t,key:n,isSelected:!0})}))),r.a.createElement(l.b,{to:"/add-folder"},r.a.createElement("button",{className:"add-folder-button"},"Add Folder")))}}]),n}(a.Component);w.contextType=h;var C=w,F=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b,null,this.context.notes.map((function(t,n){if(t.folder_id==e.props.match.params.folderId)return r.a.createElement(O,{note:t,key:n})})),r.a.createElement(l.b,{to:"/add-note"},r.a.createElement("button",{className:"add-note-button"},"Add Note"))))}}]),n}(a.Component);F.contextType=h;var x=F,S=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout"},r.a.createElement("div",{className:"sidebar"},r.a.createElement(C,this.props)),r.a.createElement("div",{className:"main"},r.a.createElement(x,this.props)))}}]),n}(a.Component),T=(n(38),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){e.props.history.goBack()},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"back-button",onClick:this.handleClick},r.a.createElement("h3",null,"Go Back"))}}]),n}(a.Component)),_=(n(39),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.context.notes.filter((function(t){return t.id==e.props.match.params.noteId}));if(!t.length)return null;var n=this.context.folders.filter((function(e){return e.id==t[0].folder_id}));return r.a.createElement("div",null,r.a.createElement(T,this.props),r.a.createElement("div",{className:"note-folder"},"Located in ",n[0].name," folder"))}}]),n}(a.Component));_.contextType=h;var A=_,I=(n(40),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return this.context.notes.map((function(t,n){if(t.id==e.props.match.params.noteId)return r.a.createElement("div",{key:n},r.a.createElement(O,{note:t}),r.a.createElement("p",{className:"note-content"},t.content))}))}}]),n}(a.Component));I.contextType=h;var q=I,D=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout"},r.a.createElement("div",{className:"sidebar"},r.a.createElement(A,this.props)),r.a.createElement("div",{className:"main"},r.a.createElement(q,Object.assign({},this.props,{key:this.props.match.params.noteId}))))}}]),n}(a.Component),P=(n(41),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).addFolderRequest=function(e){var t=y+"api/folders",n=a.state.folder;fetch(t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:n.name})}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw e}))})).then((function(t){a.context.addFolder(e)})).catch((function(e){console.error(e)}))},a.state={folder:{name:""}},a}return Object(u.a)(n,[{key:"addFolder",value:function(e){this.setState({folder:{name:e}})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.folder;this.state.folder.name?this.addFolderRequest(t):window.alert("Please enter a name for your new folder")}},{key:"render",value:function(){var e=this;return r.a.createElement(h.Consumer,null,(function(t){return r.a.createElement("form",{className:"add-folder-form",onSubmit:function(n){return e.handleSubmit(n,t.addFolder)}},r.a.createElement("label",{htmlFor:"new-folder"},"Enter new folder name "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"new-folder",id:"new-folder",onChange:function(t){return e.addFolder(t.target.value)}}),r.a.createElement("button",{className:"add-folder-submit",type:"submit"},"Add Folder"))}))}}]),n}(a.Component));P.contextType=h;var R=P,J=n(13);n(42);function B(e){return e.message?r.a.createElement("div",{className:"error"},e.message):r.a.createElement(r.a.Fragment,null)}n(43);var G=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).addNoteRequest=function(e){fetch(y+"api/notes",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:a.state.name,content:a.state.content,folder_id:a.state.folder_id,date_created:new Date})}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw e}))})).then((function(e){a.context.addNote(e)})).catch((function(e){console.error(e)}))},a.state={name:"",content:"",folder_id:"1"},a.addNoteFolder=a.addNoteFolder.bind(Object(J.a)(a)),a}return Object(u.a)(n,[{key:"addNoteName",value:function(e){this.setState({name:e})}},{key:"addNoteContent",value:function(e){this.setState({content:e})}},{key:"addNoteFolder",value:function(e){this.setState({folder_id:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.name,n=this.state.content,a=this.state.folder_id;this.state.name?this.addNoteRequest(t,n,a):window.alert("Please enter a name for your new note")}},{key:"validateNoteName",value:function(){var e=this.state.name.trim();return 0===e.length?"Name of note is required":e.length>40?"Please choose a shorter name":void 0}},{key:"render",value:function(){var e=this,t=this.validateNoteName();return r.a.createElement("div",null,r.a.createElement("form",{className:"add-note-form",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",{htmlFor:"new-note"},"Enter name of new note: "),r.a.createElement("input",{type:"text",name:"new-note-name",id:"new-note-name",onChange:function(t){return e.addNoteName(t.target.value)}}),r.a.createElement(B,{message:t}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"new-note-content"},"Enter content for new note: "),r.a.createElement("input",{type:"text",name:"new-note-content",id:"new-note-content",onChange:function(t){return e.addNoteContent(t.target.value)}}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"new-note-folder_id"},"Select the folder for the note to go into: "),r.a.createElement("select",{value:this.state.folder_id,onChange:this.addNoteFolder},this.context.folders.map((function(e){return r.a.createElement("option",{className:"new-note-folder",key:e.id,value:e.id},e.name)}))),r.a.createElement("br",null),r.a.createElement("button",{className:"add-note-submit",type:"submit"},"Add Note")))}}]),n}(a.Component);G.contextType=h;var L=G,M=(n(44),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={notes:[],folders:[],error:null},e.setNotes=function(t){e.setState({notes:t,error:null},(function(){e.props.history.push("/")}))},e.setFolders=function(t){e.setState({folders:t,error:null},(function(){e.props.history.push("/")}))},e.deleteNote=function(t){var n=e.state.notes.filter((function(e){return e.id!=t}));e.setState({notes:n},(function(){e.props.history.push("/")}))},e.getFolders=function(){fetch(y+"api/folders",{method:"GET"}).then((function(e){if(!e.ok)throw new b(e.status);return e.json()})).then(e.setFolders).catch((function(t){return e.setState({error:t})}))},e.addFolder=function(t){var n=Object(i.a)(e.state.folders);n.push(t),e.setState({folders:n},(function(){e.props.history.push("/")}))},e.addNote=function(t){var n=Object(i.a)(e.state.notes);n.push(t),e.setState({notes:n},(function(){e.props.history.push("/")}))},e.getNotes=function(){fetch(y+"api/notes",{method:"GET"}).then((function(e){if(!e.ok)throw new b(e.status);return e.json()})).then(e.setNotes).catch((function(t){return e.setState({error:t})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getFolders(),this.getNotes()}},{key:"render",value:function(){var e={notes:this.state.notes,folders:this.state.folders,deleteNote:this.deleteNote,addFolder:this.addFolder,addNote:this.addNote};return r.a.createElement("div",null,r.a.createElement(h.Provider,{value:e},r.a.createElement("header",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("h1",null,"Noteful"))),r.a.createElement(b,null,r.a.createElement(f.a,{exact:!0,path:"/",component:g}),r.a.createElement(f.a,{path:"/folder/:folderId",component:S}),r.a.createElement(f.a,{path:"/note/:noteId",component:D}),r.a.createElement(f.a,{path:"/add-folder",component:R}),r.a.createElement(f.a,{path:"/add-note",component:L}))))}}]),n}(a.Component)),z=Object(f.e)(M);c.a.render(r.a.createElement(l.a,null,r.a.createElement(z,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.6b6383e9.chunk.js.map