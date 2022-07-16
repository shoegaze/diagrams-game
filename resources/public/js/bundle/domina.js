// Compiled by ClojureScript 1.11.57 {:optimizations :whitespace}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('domina.support');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_456958 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_456959 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_456960 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_456960,opt_wrapper_456958,table_section_wrapper_456959,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_456958,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_456959,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_456959,cell_wrapper_456960,table_section_wrapper_456959,table_section_wrapper_456959]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = ((((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_)))?(function (){var and__5043__auto__ = div.firstChild;
if(cljs.core.truth_(and__5043__auto__)){
return div.firstChild.childNodes;
} else {
return and__5043__auto__;
}
})():((((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_)))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__456961 = cljs.core.seq.call(null,tbody);
var chunk__456962 = null;
var count__456963 = (0);
var i__456964 = (0);
while(true){
if((i__456964 < count__456963)){
var child = cljs.core._nth.call(null,chunk__456962,i__456964);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__456965 = seq__456961;
var G__456966 = chunk__456962;
var G__456967 = count__456963;
var G__456968 = (i__456964 + (1));
seq__456961 = G__456965;
chunk__456962 = G__456966;
count__456963 = G__456967;
i__456964 = G__456968;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__456961);
if(temp__5804__auto__){
var seq__456961__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__456961__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__456961__$1);
var G__456969 = cljs.core.chunk_rest.call(null,seq__456961__$1);
var G__456970 = c__5567__auto__;
var G__456971 = cljs.core.count.call(null,c__5567__auto__);
var G__456972 = (0);
seq__456961 = G__456969;
chunk__456962 = G__456970;
count__456963 = G__456971;
i__456964 = G__456972;
continue;
} else {
var child = cljs.core.first.call(null,seq__456961__$1);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__456973 = cljs.core.next.call(null,seq__456961__$1);
var G__456974 = null;
var G__456975 = (0);
var G__456976 = (0);
seq__456961 = G__456973;
chunk__456962 = G__456974;
count__456963 = G__456975;
i__456964 = G__456976;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1))).toLowerCase();
var vec__456977 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__456977,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__456977,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__456977,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
(div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),html__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join(''));

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__456980 = wrapper.lastChild;
var G__456981 = (level - (1));
wrapper = G__456980;
level = G__456981;
continue;
} else {
return wrapper;
}
break;
}
})();
if(domina.support.extraneous_tbody_QMARK_){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = (!(domina.support.leading_whitespace_QMARK_));
if(and__5043__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__5043__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.DomContent = function(){};

var domina$DomContent$nodes$dyn_456982 = (function (content){
var x__5392__auto__ = (((content == null))?null:content);
var m__5393__auto__ = (domina.nodes[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,content);
} else {
var m__5391__auto__ = (domina.nodes["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
});
/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((((!((content == null)))) && ((!((content.domina$DomContent$nodes$arity$1 == null)))))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
return domina$DomContent$nodes$dyn_456982.call(null,content);
}
});

var domina$DomContent$single_node$dyn_456983 = (function (nodeseq){
var x__5392__auto__ = (((nodeseq == null))?null:nodeseq);
var m__5393__auto__ = (domina.single_node[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,nodeseq);
} else {
var m__5391__auto__ = (domina.single_node["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
});
/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((((!((nodeseq == null)))) && ((!((nodeseq.domina$DomContent$single_node$arity$1 == null)))))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
return domina$DomContent$single_node$dyn_456983.call(null,nodeseq);
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__5774__auto__ = [];
var len__5768__auto___456985 = arguments.length;
var i__5769__auto___456986 = (0);
while(true){
if((i__5769__auto___456986 < len__5768__auto___456985)){
args__5774__auto__.push((arguments[i__5769__auto___456986]));

var G__456987 = (i__5769__auto___456986 + (1));
i__5769__auto___456986 = G__456987;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

(domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(((domina._STAR_debug_STAR_) && ((!(cljs.core._EQ_.call(null,window.console,undefined)))))){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
}));

(domina.log_debug.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(domina.log_debug.cljs$lang$applyTo = (function (seq456984){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq456984));
}));

domina.log = (function domina$log(var_args){
var args__5774__auto__ = [];
var len__5768__auto___456989 = arguments.length;
var i__5769__auto___456990 = (0);
while(true){
if((i__5769__auto___456990 < len__5768__auto___456989)){
args__5774__auto__.push((arguments[i__5769__auto___456990]));

var G__456991 = (i__5769__auto___456990 + (1));
i__5769__auto___456990 = G__456991;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

(domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
}));

(domina.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(domina.log.cljs$lang$applyTo = (function (seq456988){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq456988));
}));

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__5774__auto__ = [];
var len__5768__auto___456993 = arguments.length;
var i__5769__auto___456994 = (0);
while(true){
if((i__5769__auto___456994 < len__5768__auto___456993)){
args__5774__auto__.push((arguments[i__5769__auto___456994]));

var G__456995 = (i__5769__auto___456994 + (1));
i__5769__auto___456994 = G__456995;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
}));

(domina.common_ancestor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(domina.common_ancestor.cljs$lang$applyTo = (function (seq456992){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq456992));
}));

/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__456996_SHARP_){
return p1__456996_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__456997_SHARP_,p2__456998_SHARP_){
return goog.dom.insertChildAt(p1__456997_SHARP_,p2__456998_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__457000_SHARP_,p2__456999_SHARP_){
return goog.dom.insertSiblingBefore(p2__456999_SHARP_,p1__457000_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__457002_SHARP_,p2__457001_SHARP_){
return goog.dom.insertSiblingAfter(p2__457001_SHARP_,p1__457002_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__457004_SHARP_,p2__457003_SHARP_){
return goog.dom.replaceNode(p2__457003_SHARP_,p1__457004_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__5774__auto__ = [];
var len__5768__auto___457012 = arguments.length;
var i__5769__auto___457013 = (0);
while(true){
if((i__5769__auto___457013 < len__5768__auto___457012)){
args__5774__auto__.push((arguments[i__5769__auto___457013]));

var G__457014 = (i__5769__auto___457013 + (1));
i__5769__auto___457013 = G__457014;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);
});

(domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__457008_457015 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__457009_457016 = null;
var count__457010_457017 = (0);
var i__457011_457018 = (0);
while(true){
if((i__457011_457018 < count__457010_457017)){
var n_457019 = cljs.core._nth.call(null,chunk__457009_457016,i__457011_457018);
goog.style.setStyle(n_457019,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__457020 = seq__457008_457015;
var G__457021 = chunk__457009_457016;
var G__457022 = count__457010_457017;
var G__457023 = (i__457011_457018 + (1));
seq__457008_457015 = G__457020;
chunk__457009_457016 = G__457021;
count__457010_457017 = G__457022;
i__457011_457018 = G__457023;
continue;
} else {
var temp__5804__auto___457024 = cljs.core.seq.call(null,seq__457008_457015);
if(temp__5804__auto___457024){
var seq__457008_457025__$1 = temp__5804__auto___457024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__457008_457025__$1)){
var c__5567__auto___457026 = cljs.core.chunk_first.call(null,seq__457008_457025__$1);
var G__457027 = cljs.core.chunk_rest.call(null,seq__457008_457025__$1);
var G__457028 = c__5567__auto___457026;
var G__457029 = cljs.core.count.call(null,c__5567__auto___457026);
var G__457030 = (0);
seq__457008_457015 = G__457027;
chunk__457009_457016 = G__457028;
count__457010_457017 = G__457029;
i__457011_457018 = G__457030;
continue;
} else {
var n_457031 = cljs.core.first.call(null,seq__457008_457025__$1);
goog.style.setStyle(n_457031,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__457032 = cljs.core.next.call(null,seq__457008_457025__$1);
var G__457033 = null;
var G__457034 = (0);
var G__457035 = (0);
seq__457008_457015 = G__457032;
chunk__457009_457016 = G__457033;
count__457010_457017 = G__457034;
i__457011_457018 = G__457035;
continue;
}
} else {
}
}
break;
}

return content;
}));

(domina.set_style_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(domina.set_style_BANG_.cljs$lang$applyTo = (function (seq457005){
var G__457006 = cljs.core.first.call(null,seq457005);
var seq457005__$1 = cljs.core.next.call(null,seq457005);
var G__457007 = cljs.core.first.call(null,seq457005__$1);
var seq457005__$2 = cljs.core.next.call(null,seq457005__$1);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__457006,G__457007,seq457005__$2);
}));

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__5774__auto__ = [];
var len__5768__auto___457043 = arguments.length;
var i__5769__auto___457044 = (0);
while(true){
if((i__5769__auto___457044 < len__5768__auto___457043)){
args__5774__auto__.push((arguments[i__5769__auto___457044]));

var G__457045 = (i__5769__auto___457044 + (1));
i__5769__auto___457044 = G__457045;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);
});

(domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__457039_457046 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__457040_457047 = null;
var count__457041_457048 = (0);
var i__457042_457049 = (0);
while(true){
if((i__457042_457049 < count__457041_457048)){
var n_457050 = cljs.core._nth.call(null,chunk__457040_457047,i__457042_457049);
n_457050.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__457051 = seq__457039_457046;
var G__457052 = chunk__457040_457047;
var G__457053 = count__457041_457048;
var G__457054 = (i__457042_457049 + (1));
seq__457039_457046 = G__457051;
chunk__457040_457047 = G__457052;
count__457041_457048 = G__457053;
i__457042_457049 = G__457054;
continue;
} else {
var temp__5804__auto___457055 = cljs.core.seq.call(null,seq__457039_457046);
if(temp__5804__auto___457055){
var seq__457039_457056__$1 = temp__5804__auto___457055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__457039_457056__$1)){
var c__5567__auto___457057 = cljs.core.chunk_first.call(null,seq__457039_457056__$1);
var G__457058 = cljs.core.chunk_rest.call(null,seq__457039_457056__$1);
var G__457059 = c__5567__auto___457057;
var G__457060 = cljs.core.count.call(null,c__5567__auto___457057);
var G__457061 = (0);
seq__457039_457046 = G__457058;
chunk__457040_457047 = G__457059;
count__457041_457048 = G__457060;
i__457042_457049 = G__457061;
continue;
} else {
var n_457062 = cljs.core.first.call(null,seq__457039_457056__$1);
n_457062.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__457063 = cljs.core.next.call(null,seq__457039_457056__$1);
var G__457064 = null;
var G__457065 = (0);
var G__457066 = (0);
seq__457039_457046 = G__457063;
chunk__457040_457047 = G__457064;
count__457041_457048 = G__457065;
i__457042_457049 = G__457066;
continue;
}
} else {
}
}
break;
}

return content;
}));

(domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq457036){
var G__457037 = cljs.core.first.call(null,seq457036);
var seq457036__$1 = cljs.core.next.call(null,seq457036);
var G__457038 = cljs.core.first.call(null,seq457036__$1);
var seq457036__$2 = cljs.core.next.call(null,seq457036__$1);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__457037,G__457038,seq457036__$2);
}));

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__457067_457071 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__457068_457072 = null;
var count__457069_457073 = (0);
var i__457070_457074 = (0);
while(true){
if((i__457070_457074 < count__457069_457073)){
var n_457075 = cljs.core._nth.call(null,chunk__457068_457072,i__457070_457074);
n_457075.removeAttribute(cljs.core.name.call(null,name));


var G__457076 = seq__457067_457071;
var G__457077 = chunk__457068_457072;
var G__457078 = count__457069_457073;
var G__457079 = (i__457070_457074 + (1));
seq__457067_457071 = G__457076;
chunk__457068_457072 = G__457077;
count__457069_457073 = G__457078;
i__457070_457074 = G__457079;
continue;
} else {
var temp__5804__auto___457080 = cljs.core.seq.call(null,seq__457067_457071);
if(temp__5804__auto___457080){
var seq__457067_457081__$1 = temp__5804__auto___457080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__457067_457081__$1)){
var c__5567__auto___457082 = cljs.core.chunk_first.call(null,seq__457067_457081__$1);
var G__457083 = cljs.core.chunk_rest.call(null,seq__457067_457081__$1);
var G__457084 = c__5567__auto___457082;
var G__457085 = cljs.core.count.call(null,c__5567__auto___457082);
var G__457086 = (0);
seq__457067_457071 = G__457083;
chunk__457068_457072 = G__457084;
count__457069_457073 = G__457085;
i__457070_457074 = G__457086;
continue;
} else {
var n_457087 = cljs.core.first.call(null,seq__457067_457081__$1);
n_457087.removeAttribute(cljs.core.name.call(null,name));


var G__457088 = cljs.core.next.call(null,seq__457067_457081__$1);
var G__457089 = null;
var G__457090 = (0);
var G__457091 = (0);
seq__457067_457071 = G__457088;
chunk__457068_457072 = G__457089;
count__457069_457073 = G__457090;
i__457070_457074 = G__457091;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__457092 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__457092,(0),null);
var v = cljs.core.nth.call(null,vec__457092,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = k;
if(cljs.core.truth_(and__5043__auto__)){
return v;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__457095_SHARP_){
var attr = attrs.item(p1__457095_SHARP_);
var value = attr.nodeValue;
if(((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue]);
} else {
return null;
}
}),cljs.core.range.call(null,attrs.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__457096_457112 = cljs.core.seq.call(null,styles);
var chunk__457097_457113 = null;
var count__457098_457114 = (0);
var i__457099_457115 = (0);
while(true){
if((i__457099_457115 < count__457098_457114)){
var vec__457106_457116 = cljs.core._nth.call(null,chunk__457097_457113,i__457099_457115);
var name_457117 = cljs.core.nth.call(null,vec__457106_457116,(0),null);
var value_457118 = cljs.core.nth.call(null,vec__457106_457116,(1),null);
domina.set_style_BANG_.call(null,content,name_457117,value_457118);


var G__457119 = seq__457096_457112;
var G__457120 = chunk__457097_457113;
var G__457121 = count__457098_457114;
var G__457122 = (i__457099_457115 + (1));
seq__457096_457112 = G__457119;
chunk__457097_457113 = G__457120;
count__457098_457114 = G__457121;
i__457099_457115 = G__457122;
continue;
} else {
var temp__5804__auto___457123 = cljs.core.seq.call(null,seq__457096_457112);
if(temp__5804__auto___457123){
var seq__457096_457124__$1 = temp__5804__auto___457123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__457096_457124__$1)){
var c__5567__auto___457125 = cljs.core.chunk_first.call(null,seq__457096_457124__$1);
var G__457126 = cljs.core.chunk_rest.call(null,seq__457096_457124__$1);
var G__457127 = c__5567__auto___457125;
var G__457128 = cljs.core.count.call(null,c__5567__auto___457125);
var G__457129 = (0);
seq__457096_457112 = G__457126;
chunk__457097_457113 = G__457127;
count__457098_457114 = G__457128;
i__457099_457115 = G__457129;
continue;
} else {
var vec__457109_457130 = cljs.core.first.call(null,seq__457096_457124__$1);
var name_457131 = cljs.core.nth.call(null,vec__457109_457130,(0),null);
var value_457132 = cljs.core.nth.call(null,vec__457109_457130,(1),null);
domina.set_style_BANG_.call(null,content,name_457131,value_457132);


var G__457133 = cljs.core.next.call(null,seq__457096_457124__$1);
var G__457134 = null;
var G__457135 = (0);
var G__457136 = (0);
seq__457096_457112 = G__457133;
chunk__457097_457113 = G__457134;
count__457098_457114 = G__457135;
i__457099_457115 = G__457136;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__457137_457153 = cljs.core.seq.call(null,attrs);
var chunk__457138_457154 = null;
var count__457139_457155 = (0);
var i__457140_457156 = (0);
while(true){
if((i__457140_457156 < count__457139_457155)){
var vec__457147_457157 = cljs.core._nth.call(null,chunk__457138_457154,i__457140_457156);
var name_457158 = cljs.core.nth.call(null,vec__457147_457157,(0),null);
var value_457159 = cljs.core.nth.call(null,vec__457147_457157,(1),null);
domina.set_attr_BANG_.call(null,content,name_457158,value_457159);


var G__457160 = seq__457137_457153;
var G__457161 = chunk__457138_457154;
var G__457162 = count__457139_457155;
var G__457163 = (i__457140_457156 + (1));
seq__457137_457153 = G__457160;
chunk__457138_457154 = G__457161;
count__457139_457155 = G__457162;
i__457140_457156 = G__457163;
continue;
} else {
var temp__5804__auto___457164 = cljs.core.seq.call(null,seq__457137_457153);
if(temp__5804__auto___457164){
var seq__457137_457165__$1 = temp__5804__auto___457164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__457137_457165__$1)){
var c__5567__auto___457166 = cljs.core.chunk_first.call(null,seq__457137_457165__$1);
var G__457167 = cljs.core.chunk_rest.call(null,seq__457137_457165__$1);
var G__457168 = c__5567__auto___457166;
var G__457169 = cljs.core.count.call(null,c__5567__auto___457166);
var G__457170 = (0);
seq__457137_457153 = G__457167;
chunk__457138_457154 = G__457168;
count__457139_457155 = G__457169;
i__457140_457156 = G__457170;
continue;
} else {
var vec__457150_457171 = cljs.core.first.call(null,seq__457137_457165__$1);
var name_457172 = cljs.core.nth.call(null,vec__457150_457171,(0),null);
var value_457173 = cljs.core.nth.call(null,vec__457150_457171,(1),null);
domina.set_attr_BANG_.call(null,content,name_457172,value_457173);


var G__457174 = cljs.core.next.call(null,seq__457137_457165__$1);
var G__457175 = null;
var G__457176 = (0);
var G__457177 = (0);
seq__457137_457153 = G__457174;
chunk__457138_457154 = G__457175;
count__457139_457155 = G__457176;
i__457140_457156 = G__457177;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__457178_457182 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__457179_457183 = null;
var count__457180_457184 = (0);
var i__457181_457185 = (0);
while(true){
if((i__457181_457185 < count__457180_457184)){
var node_457186 = cljs.core._nth.call(null,chunk__457179_457183,i__457181_457185);
goog.dom.classes.add(node_457186,class$);


var G__457187 = seq__457178_457182;
var G__457188 = chunk__457179_457183;
var G__457189 = count__457180_457184;
var G__457190 = (i__457181_457185 + (1));
seq__457178_457182 = G__457187;
chunk__457179_457183 = G__457188;
count__457180_457184 = G__457189;
i__457181_457185 = G__457190;
continue;
} else {
var temp__5804__auto___457191 = cljs.core.seq.call(null,seq__457178_457182);
if(temp__5804__auto___457191){
var seq__457178_457192__$1 = temp__5804__auto___457191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__457178_457192__$1)){
var c__5567__auto___457193 = cljs.core.chunk_first.call(null,seq__457178_457192__$1);
var G__457194 = cljs.core.chunk_rest.call(null,seq__457178_457192__$1);
var G__457195 = c__5567__auto___457193;
var G__457196 = cljs.core.count.call(null,c__5567__auto___457193);
var G__457197 = (0);
seq__457178_457182 = G__457194;
chunk__457179_457183 = G__457195;
count__457180_457184 = G__457196;
i__457181_457185 = G__457197;
continue;
} else {
var node_457198 = cljs.core.first.call(null,seq__457178_457192__$1);
goog.dom.classes.add(node_457198,class$);


var G__457199 = cljs.core.next.call(null,seq__457178_457192__$1);
var G__457200 = null;
var G__457201 = (0);
var G__457202 = (0);
seq__457178_457182 = G__457199;
chunk__457179_457183 = G__457200;
count__457180_457184 = G__457201;
i__457181_457185 = G__457202;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__457203_457207 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__457204_457208 = null;
var count__457205_457209 = (0);
var i__457206_457210 = (0);
while(true){
if((i__457206_457210 < count__457205_457209)){
var node_457211 = cljs.core._nth.call(null,chunk__457204_457208,i__457206_457210);
goog.dom.classes.remove(node_457211,class$);


var G__457212 = seq__457203_457207;
var G__457213 = chunk__457204_457208;
var G__457214 = count__457205_457209;
var G__457215 = (i__457206_457210 + (1));
seq__457203_457207 = G__457212;
chunk__457204_457208 = G__457213;
count__457205_457209 = G__457214;
i__457206_457210 = G__457215;
continue;
} else {
var temp__5804__auto___457216 = cljs.core.seq.call(null,seq__457203_457207);
if(temp__5804__auto___457216){
var seq__457203_457217__$1 = temp__5804__auto___457216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__457203_457217__$1)){
var c__5567__auto___457218 = cljs.core.chunk_first.call(null,seq__457203_457217__$1);
var G__457219 = cljs.core.chunk_rest.call(null,seq__457203_457217__$1);
var G__457220 = c__5567__auto___457218;
var G__457221 = cljs.core.count.call(null,c__5567__auto___457218);
var G__457222 = (0);
seq__457203_457207 = G__457219;
chunk__457204_457208 = G__457220;
count__457205_457209 = G__457221;
i__457206_457210 = G__457222;
continue;
} else {
var node_457223 = cljs.core.first.call(null,seq__457203_457217__$1);
goog.dom.classes.remove(node_457223,class$);


var G__457224 = cljs.core.next.call(null,seq__457203_457217__$1);
var G__457225 = null;
var G__457226 = (0);
var G__457227 = (0);
seq__457203_457207 = G__457224;
chunk__457204_457208 = G__457225;
count__457205_457209 = G__457226;
i__457206_457210 = G__457227;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__457228_457232 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__457229_457233 = null;
var count__457230_457234 = (0);
var i__457231_457235 = (0);
while(true){
if((i__457231_457235 < count__457230_457234)){
var node_457236 = cljs.core._nth.call(null,chunk__457229_457233,i__457231_457235);
goog.dom.classes.toggle(node_457236,class$);


var G__457237 = seq__457228_457232;
var G__457238 = chunk__457229_457233;
var G__457239 = count__457230_457234;
var G__457240 = (i__457231_457235 + (1));
seq__457228_457232 = G__457237;
chunk__457229_457233 = G__457238;
count__457230_457234 = G__457239;
i__457231_457235 = G__457240;
continue;
} else {
var temp__5804__auto___457241 = cljs.core.seq.call(null,seq__457228_457232);
if(temp__5804__auto___457241){
var seq__457228_457242__$1 = temp__5804__auto___457241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__457228_457242__$1)){
var c__5567__auto___457243 = cljs.core.chunk_first.call(null,seq__457228_457242__$1);
var G__457244 = cljs.core.chunk_rest.call(null,seq__457228_457242__$1);
var G__457245 = c__5567__auto___457243;
var G__457246 = cljs.core.count.call(null,c__5567__auto___457243);
var G__457247 = (0);
seq__457228_457232 = G__457244;
chunk__457229_457233 = G__457245;
count__457230_457234 = G__457246;
i__457231_457235 = G__457247;
continue;
} else {
var node_457248 = cljs.core.first.call(null,seq__457228_457242__$1);
goog.dom.classes.toggle(node_457248,class$);


var G__457249 = cljs.core.next.call(null,seq__457228_457242__$1);
var G__457250 = null;
var G__457251 = (0);
var G__457252 = (0);
seq__457228_457232 = G__457249;
chunk__457229_457233 = G__457250;
count__457230_457234 = G__457251;
i__457231_457235 = G__457252;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_457257__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__457253_457258 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__457254_457259 = null;
var count__457255_457260 = (0);
var i__457256_457261 = (0);
while(true){
if((i__457256_457261 < count__457255_457260)){
var node_457262 = cljs.core._nth.call(null,chunk__457254_457259,i__457256_457261);
goog.dom.classes.set(node_457262,classes_457257__$1);


var G__457263 = seq__457253_457258;
var G__457264 = chunk__457254_457259;
var G__457265 = count__457255_457260;
var G__457266 = (i__457256_457261 + (1));
seq__457253_457258 = G__457263;
chunk__457254_457259 = G__457264;
count__457255_457260 = G__457265;
i__457256_457261 = G__457266;
continue;
} else {
var temp__5804__auto___457267 = cljs.core.seq.call(null,seq__457253_457258);
if(temp__5804__auto___457267){
var seq__457253_457268__$1 = temp__5804__auto___457267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__457253_457268__$1)){
var c__5567__auto___457269 = cljs.core.chunk_first.call(null,seq__457253_457268__$1);
var G__457270 = cljs.core.chunk_rest.call(null,seq__457253_457268__$1);
var G__457271 = c__5567__auto___457269;
var G__457272 = cljs.core.count.call(null,c__5567__auto___457269);
var G__457273 = (0);
seq__457253_457258 = G__457270;
chunk__457254_457259 = G__457271;
count__457255_457260 = G__457272;
i__457256_457261 = G__457273;
continue;
} else {
var node_457274 = cljs.core.first.call(null,seq__457253_457268__$1);
goog.dom.classes.set(node_457274,classes_457257__$1);


var G__457275 = cljs.core.next.call(null,seq__457253_457268__$1);
var G__457276 = null;
var G__457277 = (0);
var G__457278 = (0);
seq__457253_457258 = G__457275;
chunk__457254_457259 = G__457276;
count__457255_457260 = G__457277;
i__457256_457261 = G__457278;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__457279_457283 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__457280_457284 = null;
var count__457281_457285 = (0);
var i__457282_457286 = (0);
while(true){
if((i__457282_457286 < count__457281_457285)){
var node_457287 = cljs.core._nth.call(null,chunk__457280_457284,i__457282_457286);
goog.dom.setTextContent(node_457287,value);


var G__457288 = seq__457279_457283;
var G__457289 = chunk__457280_457284;
var G__457290 = count__457281_457285;
var G__457291 = (i__457282_457286 + (1));
seq__457279_457283 = G__457288;
chunk__457280_457284 = G__457289;
count__457281_457285 = G__457290;
i__457282_457286 = G__457291;
continue;
} else {
var temp__5804__auto___457292 = cljs.core.seq.call(null,seq__457279_457283);
if(temp__5804__auto___457292){
var seq__457279_457293__$1 = temp__5804__auto___457292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__457279_457293__$1)){
var c__5567__auto___457294 = cljs.core.chunk_first.call(null,seq__457279_457293__$1);
var G__457295 = cljs.core.chunk_rest.call(null,seq__457279_457293__$1);
var G__457296 = c__5567__auto___457294;
var G__457297 = cljs.core.count.call(null,c__5567__auto___457294);
var G__457298 = (0);
seq__457279_457283 = G__457295;
chunk__457280_457284 = G__457296;
count__457281_457285 = G__457297;
i__457282_457286 = G__457298;
continue;
} else {
var node_457299 = cljs.core.first.call(null,seq__457279_457293__$1);
goog.dom.setTextContent(node_457299,value);


var G__457300 = cljs.core.next.call(null,seq__457279_457293__$1);
var G__457301 = null;
var G__457302 = (0);
var G__457303 = (0);
seq__457279_457283 = G__457300;
chunk__457280_457284 = G__457301;
count__457281_457285 = G__457302;
i__457282_457286 = G__457303;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__457304_457308 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__457305_457309 = null;
var count__457306_457310 = (0);
var i__457307_457311 = (0);
while(true){
if((i__457307_457311 < count__457306_457310)){
var node_457312 = cljs.core._nth.call(null,chunk__457305_457309,i__457307_457311);
goog.dom.forms.setValue(node_457312,value);


var G__457313 = seq__457304_457308;
var G__457314 = chunk__457305_457309;
var G__457315 = count__457306_457310;
var G__457316 = (i__457307_457311 + (1));
seq__457304_457308 = G__457313;
chunk__457305_457309 = G__457314;
count__457306_457310 = G__457315;
i__457307_457311 = G__457316;
continue;
} else {
var temp__5804__auto___457317 = cljs.core.seq.call(null,seq__457304_457308);
if(temp__5804__auto___457317){
var seq__457304_457318__$1 = temp__5804__auto___457317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__457304_457318__$1)){
var c__5567__auto___457319 = cljs.core.chunk_first.call(null,seq__457304_457318__$1);
var G__457320 = cljs.core.chunk_rest.call(null,seq__457304_457318__$1);
var G__457321 = c__5567__auto___457319;
var G__457322 = cljs.core.count.call(null,c__5567__auto___457319);
var G__457323 = (0);
seq__457304_457308 = G__457320;
chunk__457305_457309 = G__457321;
count__457306_457310 = G__457322;
i__457307_457311 = G__457323;
continue;
} else {
var node_457324 = cljs.core.first.call(null,seq__457304_457318__$1);
goog.dom.forms.setValue(node_457324,value);


var G__457325 = cljs.core.next.call(null,seq__457304_457318__$1);
var G__457326 = null;
var G__457327 = (0);
var G__457328 = (0);
seq__457304_457308 = G__457325;
chunk__457305_457309 = G__457326;
count__457306_457310 = G__457327;
i__457307_457311 = G__457328;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(((allows_inner_html_QMARK_) && (((((domina.support.leading_whitespace_QMARK_) || (cljs.core.not.call(null,leading_whitespace_QMARK_)))) && ((!(special_tag_QMARK_))))))){
var value_457334 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__457330_457335 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__457331_457336 = null;
var count__457332_457337 = (0);
var i__457333_457338 = (0);
while(true){
if((i__457333_457338 < count__457332_457337)){
var node_457339 = cljs.core._nth.call(null,chunk__457331_457336,i__457333_457338);
(node_457339.innerHTML = value_457334);


var G__457340 = seq__457330_457335;
var G__457341 = chunk__457331_457336;
var G__457342 = count__457332_457337;
var G__457343 = (i__457333_457338 + (1));
seq__457330_457335 = G__457340;
chunk__457331_457336 = G__457341;
count__457332_457337 = G__457342;
i__457333_457338 = G__457343;
continue;
} else {
var temp__5804__auto___457344 = cljs.core.seq.call(null,seq__457330_457335);
if(temp__5804__auto___457344){
var seq__457330_457345__$1 = temp__5804__auto___457344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__457330_457345__$1)){
var c__5567__auto___457346 = cljs.core.chunk_first.call(null,seq__457330_457345__$1);
var G__457347 = cljs.core.chunk_rest.call(null,seq__457330_457345__$1);
var G__457348 = c__5567__auto___457346;
var G__457349 = cljs.core.count.call(null,c__5567__auto___457346);
var G__457350 = (0);
seq__457330_457335 = G__457347;
chunk__457331_457336 = G__457348;
count__457332_457337 = G__457349;
i__457333_457338 = G__457350;
continue;
} else {
var node_457351 = cljs.core.first.call(null,seq__457330_457345__$1);
(node_457351.innerHTML = value_457334);


var G__457352 = cljs.core.next.call(null,seq__457330_457345__$1);
var G__457353 = null;
var G__457354 = (0);
var G__457355 = (0);
seq__457330_457335 = G__457352;
chunk__457331_457336 = G__457353;
count__457332_457337 = G__457354;
i__457333_457338 = G__457355;
continue;
}
} else {
}
}
break;
}
}catch (e457329){if((e457329 instanceof Error)){
var e_457356 = e457329;
domina.replace_children_BANG_.call(null,content,value_457334);
} else {
throw e457329;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var G__457358 = arguments.length;
switch (G__457358) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
}));

(domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__5043__auto__ = bubble;
if(cljs.core.truth_(and__5043__auto__)){
return (value == null);
} else {
return and__5043__auto__;
}
})())){
var temp__5804__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
}));

(domina.get_data.cljs$lang$maxFixedArity = 3);

/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__5045__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return (domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value));
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__457362_457366 = cljs.core.seq.call(null,children);
var chunk__457363_457367 = null;
var count__457364_457368 = (0);
var i__457365_457369 = (0);
while(true){
if((i__457365_457369 < count__457364_457368)){
var child_457370 = cljs.core._nth.call(null,chunk__457363_457367,i__457365_457369);
frag.appendChild(child_457370);


var G__457371 = seq__457362_457366;
var G__457372 = chunk__457363_457367;
var G__457373 = count__457364_457368;
var G__457374 = (i__457365_457369 + (1));
seq__457362_457366 = G__457371;
chunk__457363_457367 = G__457372;
count__457364_457368 = G__457373;
i__457365_457369 = G__457374;
continue;
} else {
var temp__5804__auto___457375 = cljs.core.seq.call(null,seq__457362_457366);
if(temp__5804__auto___457375){
var seq__457362_457376__$1 = temp__5804__auto___457375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__457362_457376__$1)){
var c__5567__auto___457377 = cljs.core.chunk_first.call(null,seq__457362_457376__$1);
var G__457378 = cljs.core.chunk_rest.call(null,seq__457362_457376__$1);
var G__457379 = c__5567__auto___457377;
var G__457380 = cljs.core.count.call(null,c__5567__auto___457377);
var G__457381 = (0);
seq__457362_457366 = G__457378;
chunk__457363_457367 = G__457379;
count__457364_457368 = G__457380;
i__457365_457369 = G__457381;
continue;
} else {
var child_457382 = cljs.core.first.call(null,seq__457362_457376__$1);
frag.appendChild(child_457382);


var G__457383 = cljs.core.next.call(null,seq__457362_457376__$1);
var G__457384 = null;
var G__457385 = (0);
var G__457386 = (0);
seq__457362_457366 = G__457383;
chunk__457363_457367 = G__457384;
count__457364_457368 = G__457385;
i__457365_457369 = G__457386;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),(function (){
return first_child.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__457360_SHARP_,p2__457361_SHARP_){
return f.call(null,p1__457360_SHARP_,p2__457361_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__457388 = arguments.length;
switch (G__457388) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
}));

(domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
}));

(domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2);

domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var G__457391 = arguments.length;
switch (G__457391) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
}));

(domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
}));

(domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2);

/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__5043__auto__ = obj;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__5043__auto____$1){
return obj.length;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if((((!((list_thing == null))))?(((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === list_thing.cljs$core$ISeqable$))))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if((((!((content == null))))?(((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$))))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if((((!((content == null))))?(((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$))))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
(NodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
}));

(NodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
}));

(NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
}));

(NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
}));
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
(StaticNodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
}));

(StaticNodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
}));

(StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
}));

(StaticNodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
}));
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
(HTMLCollection.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
}));

(HTMLCollection.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
}));

(HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
}));

(HTMLCollection.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
}));
} else {
}
