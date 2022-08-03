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
var opt_wrapper_6554 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_6555 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_6556 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_6556,opt_wrapper_6554,table_section_wrapper_6555,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_6554,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_6555,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_6555,cell_wrapper_6556,table_section_wrapper_6555,table_section_wrapper_6555]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = ((((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_)))?(function (){var and__5043__auto__ = div.firstChild;
if(cljs.core.truth_(and__5043__auto__)){
return div.firstChild.childNodes;
} else {
return and__5043__auto__;
}
})():((((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_)))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__6557 = cljs.core.seq.call(null,tbody);
var chunk__6558 = null;
var count__6559 = (0);
var i__6560 = (0);
while(true){
if((i__6560 < count__6559)){
var child = cljs.core._nth.call(null,chunk__6558,i__6560);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__6561 = seq__6557;
var G__6562 = chunk__6558;
var G__6563 = count__6559;
var G__6564 = (i__6560 + (1));
seq__6557 = G__6561;
chunk__6558 = G__6562;
count__6559 = G__6563;
i__6560 = G__6564;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6557);
if(temp__5804__auto__){
var seq__6557__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6557__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__6557__$1);
var G__6565 = cljs.core.chunk_rest.call(null,seq__6557__$1);
var G__6566 = c__5567__auto__;
var G__6567 = cljs.core.count.call(null,c__5567__auto__);
var G__6568 = (0);
seq__6557 = G__6565;
chunk__6558 = G__6566;
count__6559 = G__6567;
i__6560 = G__6568;
continue;
} else {
var child = cljs.core.first.call(null,seq__6557__$1);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__6569 = cljs.core.next.call(null,seq__6557__$1);
var G__6570 = null;
var G__6571 = (0);
var G__6572 = (0);
seq__6557 = G__6569;
chunk__6558 = G__6570;
count__6559 = G__6571;
i__6560 = G__6572;
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
var vec__6573 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__6573,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__6573,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__6573,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
(div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),html__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join(''));

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__6576 = wrapper.lastChild;
var G__6577 = (level - (1));
wrapper = G__6576;
level = G__6577;
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

var domina$DomContent$nodes$dyn_6578 = (function (content){
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
return domina$DomContent$nodes$dyn_6578.call(null,content);
}
});

var domina$DomContent$single_node$dyn_6579 = (function (nodeseq){
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
return domina$DomContent$single_node$dyn_6579.call(null,nodeseq);
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__5774__auto__ = [];
var len__5768__auto___6581 = arguments.length;
var i__5769__auto___6582 = (0);
while(true){
if((i__5769__auto___6582 < len__5768__auto___6581)){
args__5774__auto__.push((arguments[i__5769__auto___6582]));

var G__6583 = (i__5769__auto___6582 + (1));
i__5769__auto___6582 = G__6583;
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
(domina.log_debug.cljs$lang$applyTo = (function (seq6580){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6580));
}));

domina.log = (function domina$log(var_args){
var args__5774__auto__ = [];
var len__5768__auto___6585 = arguments.length;
var i__5769__auto___6586 = (0);
while(true){
if((i__5769__auto___6586 < len__5768__auto___6585)){
args__5774__auto__.push((arguments[i__5769__auto___6586]));

var G__6587 = (i__5769__auto___6586 + (1));
i__5769__auto___6586 = G__6587;
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
(domina.log.cljs$lang$applyTo = (function (seq6584){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6584));
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
var len__5768__auto___6589 = arguments.length;
var i__5769__auto___6590 = (0);
while(true){
if((i__5769__auto___6590 < len__5768__auto___6589)){
args__5774__auto__.push((arguments[i__5769__auto___6590]));

var G__6591 = (i__5769__auto___6590 + (1));
i__5769__auto___6590 = G__6591;
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
(domina.common_ancestor.cljs$lang$applyTo = (function (seq6588){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6588));
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
return cljs.core.map.call(null,(function (p1__6592_SHARP_){
return p1__6592_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__6593_SHARP_,p2__6594_SHARP_){
return goog.dom.insertChildAt(p1__6593_SHARP_,p2__6594_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__6596_SHARP_,p2__6595_SHARP_){
return goog.dom.insertSiblingBefore(p2__6595_SHARP_,p1__6596_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__6598_SHARP_,p2__6597_SHARP_){
return goog.dom.insertSiblingAfter(p2__6597_SHARP_,p1__6598_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__6600_SHARP_,p2__6599_SHARP_){
return goog.dom.replaceNode(p2__6599_SHARP_,p1__6600_SHARP_);
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
var len__5768__auto___6608 = arguments.length;
var i__5769__auto___6609 = (0);
while(true){
if((i__5769__auto___6609 < len__5768__auto___6608)){
args__5774__auto__.push((arguments[i__5769__auto___6609]));

var G__6610 = (i__5769__auto___6609 + (1));
i__5769__auto___6609 = G__6610;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);
});

(domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__6604_6611 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6605_6612 = null;
var count__6606_6613 = (0);
var i__6607_6614 = (0);
while(true){
if((i__6607_6614 < count__6606_6613)){
var n_6615 = cljs.core._nth.call(null,chunk__6605_6612,i__6607_6614);
goog.style.setStyle(n_6615,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__6616 = seq__6604_6611;
var G__6617 = chunk__6605_6612;
var G__6618 = count__6606_6613;
var G__6619 = (i__6607_6614 + (1));
seq__6604_6611 = G__6616;
chunk__6605_6612 = G__6617;
count__6606_6613 = G__6618;
i__6607_6614 = G__6619;
continue;
} else {
var temp__5804__auto___6620 = cljs.core.seq.call(null,seq__6604_6611);
if(temp__5804__auto___6620){
var seq__6604_6621__$1 = temp__5804__auto___6620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6604_6621__$1)){
var c__5567__auto___6622 = cljs.core.chunk_first.call(null,seq__6604_6621__$1);
var G__6623 = cljs.core.chunk_rest.call(null,seq__6604_6621__$1);
var G__6624 = c__5567__auto___6622;
var G__6625 = cljs.core.count.call(null,c__5567__auto___6622);
var G__6626 = (0);
seq__6604_6611 = G__6623;
chunk__6605_6612 = G__6624;
count__6606_6613 = G__6625;
i__6607_6614 = G__6626;
continue;
} else {
var n_6627 = cljs.core.first.call(null,seq__6604_6621__$1);
goog.style.setStyle(n_6627,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__6628 = cljs.core.next.call(null,seq__6604_6621__$1);
var G__6629 = null;
var G__6630 = (0);
var G__6631 = (0);
seq__6604_6611 = G__6628;
chunk__6605_6612 = G__6629;
count__6606_6613 = G__6630;
i__6607_6614 = G__6631;
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
(domina.set_style_BANG_.cljs$lang$applyTo = (function (seq6601){
var G__6602 = cljs.core.first.call(null,seq6601);
var seq6601__$1 = cljs.core.next.call(null,seq6601);
var G__6603 = cljs.core.first.call(null,seq6601__$1);
var seq6601__$2 = cljs.core.next.call(null,seq6601__$1);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6602,G__6603,seq6601__$2);
}));

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__5774__auto__ = [];
var len__5768__auto___6639 = arguments.length;
var i__5769__auto___6640 = (0);
while(true){
if((i__5769__auto___6640 < len__5768__auto___6639)){
args__5774__auto__.push((arguments[i__5769__auto___6640]));

var G__6641 = (i__5769__auto___6640 + (1));
i__5769__auto___6640 = G__6641;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);
});

(domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__6635_6642 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6636_6643 = null;
var count__6637_6644 = (0);
var i__6638_6645 = (0);
while(true){
if((i__6638_6645 < count__6637_6644)){
var n_6646 = cljs.core._nth.call(null,chunk__6636_6643,i__6638_6645);
n_6646.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__6647 = seq__6635_6642;
var G__6648 = chunk__6636_6643;
var G__6649 = count__6637_6644;
var G__6650 = (i__6638_6645 + (1));
seq__6635_6642 = G__6647;
chunk__6636_6643 = G__6648;
count__6637_6644 = G__6649;
i__6638_6645 = G__6650;
continue;
} else {
var temp__5804__auto___6651 = cljs.core.seq.call(null,seq__6635_6642);
if(temp__5804__auto___6651){
var seq__6635_6652__$1 = temp__5804__auto___6651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6635_6652__$1)){
var c__5567__auto___6653 = cljs.core.chunk_first.call(null,seq__6635_6652__$1);
var G__6654 = cljs.core.chunk_rest.call(null,seq__6635_6652__$1);
var G__6655 = c__5567__auto___6653;
var G__6656 = cljs.core.count.call(null,c__5567__auto___6653);
var G__6657 = (0);
seq__6635_6642 = G__6654;
chunk__6636_6643 = G__6655;
count__6637_6644 = G__6656;
i__6638_6645 = G__6657;
continue;
} else {
var n_6658 = cljs.core.first.call(null,seq__6635_6652__$1);
n_6658.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__6659 = cljs.core.next.call(null,seq__6635_6652__$1);
var G__6660 = null;
var G__6661 = (0);
var G__6662 = (0);
seq__6635_6642 = G__6659;
chunk__6636_6643 = G__6660;
count__6637_6644 = G__6661;
i__6638_6645 = G__6662;
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
(domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq6632){
var G__6633 = cljs.core.first.call(null,seq6632);
var seq6632__$1 = cljs.core.next.call(null,seq6632);
var G__6634 = cljs.core.first.call(null,seq6632__$1);
var seq6632__$2 = cljs.core.next.call(null,seq6632__$1);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6633,G__6634,seq6632__$2);
}));

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__6663_6667 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6664_6668 = null;
var count__6665_6669 = (0);
var i__6666_6670 = (0);
while(true){
if((i__6666_6670 < count__6665_6669)){
var n_6671 = cljs.core._nth.call(null,chunk__6664_6668,i__6666_6670);
n_6671.removeAttribute(cljs.core.name.call(null,name));


var G__6672 = seq__6663_6667;
var G__6673 = chunk__6664_6668;
var G__6674 = count__6665_6669;
var G__6675 = (i__6666_6670 + (1));
seq__6663_6667 = G__6672;
chunk__6664_6668 = G__6673;
count__6665_6669 = G__6674;
i__6666_6670 = G__6675;
continue;
} else {
var temp__5804__auto___6676 = cljs.core.seq.call(null,seq__6663_6667);
if(temp__5804__auto___6676){
var seq__6663_6677__$1 = temp__5804__auto___6676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6663_6677__$1)){
var c__5567__auto___6678 = cljs.core.chunk_first.call(null,seq__6663_6677__$1);
var G__6679 = cljs.core.chunk_rest.call(null,seq__6663_6677__$1);
var G__6680 = c__5567__auto___6678;
var G__6681 = cljs.core.count.call(null,c__5567__auto___6678);
var G__6682 = (0);
seq__6663_6667 = G__6679;
chunk__6664_6668 = G__6680;
count__6665_6669 = G__6681;
i__6666_6670 = G__6682;
continue;
} else {
var n_6683 = cljs.core.first.call(null,seq__6663_6677__$1);
n_6683.removeAttribute(cljs.core.name.call(null,name));


var G__6684 = cljs.core.next.call(null,seq__6663_6677__$1);
var G__6685 = null;
var G__6686 = (0);
var G__6687 = (0);
seq__6663_6667 = G__6684;
chunk__6664_6668 = G__6685;
count__6665_6669 = G__6686;
i__6666_6670 = G__6687;
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
var vec__6688 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__6688,(0),null);
var v = cljs.core.nth.call(null,vec__6688,(1),null);
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
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__6691_SHARP_){
var attr = attrs.item(p1__6691_SHARP_);
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
var seq__6692_6708 = cljs.core.seq.call(null,styles);
var chunk__6693_6709 = null;
var count__6694_6710 = (0);
var i__6695_6711 = (0);
while(true){
if((i__6695_6711 < count__6694_6710)){
var vec__6702_6712 = cljs.core._nth.call(null,chunk__6693_6709,i__6695_6711);
var name_6713 = cljs.core.nth.call(null,vec__6702_6712,(0),null);
var value_6714 = cljs.core.nth.call(null,vec__6702_6712,(1),null);
domina.set_style_BANG_.call(null,content,name_6713,value_6714);


var G__6715 = seq__6692_6708;
var G__6716 = chunk__6693_6709;
var G__6717 = count__6694_6710;
var G__6718 = (i__6695_6711 + (1));
seq__6692_6708 = G__6715;
chunk__6693_6709 = G__6716;
count__6694_6710 = G__6717;
i__6695_6711 = G__6718;
continue;
} else {
var temp__5804__auto___6719 = cljs.core.seq.call(null,seq__6692_6708);
if(temp__5804__auto___6719){
var seq__6692_6720__$1 = temp__5804__auto___6719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6692_6720__$1)){
var c__5567__auto___6721 = cljs.core.chunk_first.call(null,seq__6692_6720__$1);
var G__6722 = cljs.core.chunk_rest.call(null,seq__6692_6720__$1);
var G__6723 = c__5567__auto___6721;
var G__6724 = cljs.core.count.call(null,c__5567__auto___6721);
var G__6725 = (0);
seq__6692_6708 = G__6722;
chunk__6693_6709 = G__6723;
count__6694_6710 = G__6724;
i__6695_6711 = G__6725;
continue;
} else {
var vec__6705_6726 = cljs.core.first.call(null,seq__6692_6720__$1);
var name_6727 = cljs.core.nth.call(null,vec__6705_6726,(0),null);
var value_6728 = cljs.core.nth.call(null,vec__6705_6726,(1),null);
domina.set_style_BANG_.call(null,content,name_6727,value_6728);


var G__6729 = cljs.core.next.call(null,seq__6692_6720__$1);
var G__6730 = null;
var G__6731 = (0);
var G__6732 = (0);
seq__6692_6708 = G__6729;
chunk__6693_6709 = G__6730;
count__6694_6710 = G__6731;
i__6695_6711 = G__6732;
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
var seq__6733_6749 = cljs.core.seq.call(null,attrs);
var chunk__6734_6750 = null;
var count__6735_6751 = (0);
var i__6736_6752 = (0);
while(true){
if((i__6736_6752 < count__6735_6751)){
var vec__6743_6753 = cljs.core._nth.call(null,chunk__6734_6750,i__6736_6752);
var name_6754 = cljs.core.nth.call(null,vec__6743_6753,(0),null);
var value_6755 = cljs.core.nth.call(null,vec__6743_6753,(1),null);
domina.set_attr_BANG_.call(null,content,name_6754,value_6755);


var G__6756 = seq__6733_6749;
var G__6757 = chunk__6734_6750;
var G__6758 = count__6735_6751;
var G__6759 = (i__6736_6752 + (1));
seq__6733_6749 = G__6756;
chunk__6734_6750 = G__6757;
count__6735_6751 = G__6758;
i__6736_6752 = G__6759;
continue;
} else {
var temp__5804__auto___6760 = cljs.core.seq.call(null,seq__6733_6749);
if(temp__5804__auto___6760){
var seq__6733_6761__$1 = temp__5804__auto___6760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6733_6761__$1)){
var c__5567__auto___6762 = cljs.core.chunk_first.call(null,seq__6733_6761__$1);
var G__6763 = cljs.core.chunk_rest.call(null,seq__6733_6761__$1);
var G__6764 = c__5567__auto___6762;
var G__6765 = cljs.core.count.call(null,c__5567__auto___6762);
var G__6766 = (0);
seq__6733_6749 = G__6763;
chunk__6734_6750 = G__6764;
count__6735_6751 = G__6765;
i__6736_6752 = G__6766;
continue;
} else {
var vec__6746_6767 = cljs.core.first.call(null,seq__6733_6761__$1);
var name_6768 = cljs.core.nth.call(null,vec__6746_6767,(0),null);
var value_6769 = cljs.core.nth.call(null,vec__6746_6767,(1),null);
domina.set_attr_BANG_.call(null,content,name_6768,value_6769);


var G__6770 = cljs.core.next.call(null,seq__6733_6761__$1);
var G__6771 = null;
var G__6772 = (0);
var G__6773 = (0);
seq__6733_6749 = G__6770;
chunk__6734_6750 = G__6771;
count__6735_6751 = G__6772;
i__6736_6752 = G__6773;
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
var seq__6774_6778 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6775_6779 = null;
var count__6776_6780 = (0);
var i__6777_6781 = (0);
while(true){
if((i__6777_6781 < count__6776_6780)){
var node_6782 = cljs.core._nth.call(null,chunk__6775_6779,i__6777_6781);
goog.dom.classes.add(node_6782,class$);


var G__6783 = seq__6774_6778;
var G__6784 = chunk__6775_6779;
var G__6785 = count__6776_6780;
var G__6786 = (i__6777_6781 + (1));
seq__6774_6778 = G__6783;
chunk__6775_6779 = G__6784;
count__6776_6780 = G__6785;
i__6777_6781 = G__6786;
continue;
} else {
var temp__5804__auto___6787 = cljs.core.seq.call(null,seq__6774_6778);
if(temp__5804__auto___6787){
var seq__6774_6788__$1 = temp__5804__auto___6787;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6774_6788__$1)){
var c__5567__auto___6789 = cljs.core.chunk_first.call(null,seq__6774_6788__$1);
var G__6790 = cljs.core.chunk_rest.call(null,seq__6774_6788__$1);
var G__6791 = c__5567__auto___6789;
var G__6792 = cljs.core.count.call(null,c__5567__auto___6789);
var G__6793 = (0);
seq__6774_6778 = G__6790;
chunk__6775_6779 = G__6791;
count__6776_6780 = G__6792;
i__6777_6781 = G__6793;
continue;
} else {
var node_6794 = cljs.core.first.call(null,seq__6774_6788__$1);
goog.dom.classes.add(node_6794,class$);


var G__6795 = cljs.core.next.call(null,seq__6774_6788__$1);
var G__6796 = null;
var G__6797 = (0);
var G__6798 = (0);
seq__6774_6778 = G__6795;
chunk__6775_6779 = G__6796;
count__6776_6780 = G__6797;
i__6777_6781 = G__6798;
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
var seq__6799_6803 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6800_6804 = null;
var count__6801_6805 = (0);
var i__6802_6806 = (0);
while(true){
if((i__6802_6806 < count__6801_6805)){
var node_6807 = cljs.core._nth.call(null,chunk__6800_6804,i__6802_6806);
goog.dom.classes.remove(node_6807,class$);


var G__6808 = seq__6799_6803;
var G__6809 = chunk__6800_6804;
var G__6810 = count__6801_6805;
var G__6811 = (i__6802_6806 + (1));
seq__6799_6803 = G__6808;
chunk__6800_6804 = G__6809;
count__6801_6805 = G__6810;
i__6802_6806 = G__6811;
continue;
} else {
var temp__5804__auto___6812 = cljs.core.seq.call(null,seq__6799_6803);
if(temp__5804__auto___6812){
var seq__6799_6813__$1 = temp__5804__auto___6812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6799_6813__$1)){
var c__5567__auto___6814 = cljs.core.chunk_first.call(null,seq__6799_6813__$1);
var G__6815 = cljs.core.chunk_rest.call(null,seq__6799_6813__$1);
var G__6816 = c__5567__auto___6814;
var G__6817 = cljs.core.count.call(null,c__5567__auto___6814);
var G__6818 = (0);
seq__6799_6803 = G__6815;
chunk__6800_6804 = G__6816;
count__6801_6805 = G__6817;
i__6802_6806 = G__6818;
continue;
} else {
var node_6819 = cljs.core.first.call(null,seq__6799_6813__$1);
goog.dom.classes.remove(node_6819,class$);


var G__6820 = cljs.core.next.call(null,seq__6799_6813__$1);
var G__6821 = null;
var G__6822 = (0);
var G__6823 = (0);
seq__6799_6803 = G__6820;
chunk__6800_6804 = G__6821;
count__6801_6805 = G__6822;
i__6802_6806 = G__6823;
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
var seq__6824_6828 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6825_6829 = null;
var count__6826_6830 = (0);
var i__6827_6831 = (0);
while(true){
if((i__6827_6831 < count__6826_6830)){
var node_6832 = cljs.core._nth.call(null,chunk__6825_6829,i__6827_6831);
goog.dom.classes.toggle(node_6832,class$);


var G__6833 = seq__6824_6828;
var G__6834 = chunk__6825_6829;
var G__6835 = count__6826_6830;
var G__6836 = (i__6827_6831 + (1));
seq__6824_6828 = G__6833;
chunk__6825_6829 = G__6834;
count__6826_6830 = G__6835;
i__6827_6831 = G__6836;
continue;
} else {
var temp__5804__auto___6837 = cljs.core.seq.call(null,seq__6824_6828);
if(temp__5804__auto___6837){
var seq__6824_6838__$1 = temp__5804__auto___6837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6824_6838__$1)){
var c__5567__auto___6839 = cljs.core.chunk_first.call(null,seq__6824_6838__$1);
var G__6840 = cljs.core.chunk_rest.call(null,seq__6824_6838__$1);
var G__6841 = c__5567__auto___6839;
var G__6842 = cljs.core.count.call(null,c__5567__auto___6839);
var G__6843 = (0);
seq__6824_6828 = G__6840;
chunk__6825_6829 = G__6841;
count__6826_6830 = G__6842;
i__6827_6831 = G__6843;
continue;
} else {
var node_6844 = cljs.core.first.call(null,seq__6824_6838__$1);
goog.dom.classes.toggle(node_6844,class$);


var G__6845 = cljs.core.next.call(null,seq__6824_6838__$1);
var G__6846 = null;
var G__6847 = (0);
var G__6848 = (0);
seq__6824_6828 = G__6845;
chunk__6825_6829 = G__6846;
count__6826_6830 = G__6847;
i__6827_6831 = G__6848;
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
var classes_6853__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__6849_6854 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6850_6855 = null;
var count__6851_6856 = (0);
var i__6852_6857 = (0);
while(true){
if((i__6852_6857 < count__6851_6856)){
var node_6858 = cljs.core._nth.call(null,chunk__6850_6855,i__6852_6857);
goog.dom.classes.set(node_6858,classes_6853__$1);


var G__6859 = seq__6849_6854;
var G__6860 = chunk__6850_6855;
var G__6861 = count__6851_6856;
var G__6862 = (i__6852_6857 + (1));
seq__6849_6854 = G__6859;
chunk__6850_6855 = G__6860;
count__6851_6856 = G__6861;
i__6852_6857 = G__6862;
continue;
} else {
var temp__5804__auto___6863 = cljs.core.seq.call(null,seq__6849_6854);
if(temp__5804__auto___6863){
var seq__6849_6864__$1 = temp__5804__auto___6863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6849_6864__$1)){
var c__5567__auto___6865 = cljs.core.chunk_first.call(null,seq__6849_6864__$1);
var G__6866 = cljs.core.chunk_rest.call(null,seq__6849_6864__$1);
var G__6867 = c__5567__auto___6865;
var G__6868 = cljs.core.count.call(null,c__5567__auto___6865);
var G__6869 = (0);
seq__6849_6854 = G__6866;
chunk__6850_6855 = G__6867;
count__6851_6856 = G__6868;
i__6852_6857 = G__6869;
continue;
} else {
var node_6870 = cljs.core.first.call(null,seq__6849_6864__$1);
goog.dom.classes.set(node_6870,classes_6853__$1);


var G__6871 = cljs.core.next.call(null,seq__6849_6864__$1);
var G__6872 = null;
var G__6873 = (0);
var G__6874 = (0);
seq__6849_6854 = G__6871;
chunk__6850_6855 = G__6872;
count__6851_6856 = G__6873;
i__6852_6857 = G__6874;
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
var seq__6875_6879 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6876_6880 = null;
var count__6877_6881 = (0);
var i__6878_6882 = (0);
while(true){
if((i__6878_6882 < count__6877_6881)){
var node_6883 = cljs.core._nth.call(null,chunk__6876_6880,i__6878_6882);
goog.dom.setTextContent(node_6883,value);


var G__6884 = seq__6875_6879;
var G__6885 = chunk__6876_6880;
var G__6886 = count__6877_6881;
var G__6887 = (i__6878_6882 + (1));
seq__6875_6879 = G__6884;
chunk__6876_6880 = G__6885;
count__6877_6881 = G__6886;
i__6878_6882 = G__6887;
continue;
} else {
var temp__5804__auto___6888 = cljs.core.seq.call(null,seq__6875_6879);
if(temp__5804__auto___6888){
var seq__6875_6889__$1 = temp__5804__auto___6888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6875_6889__$1)){
var c__5567__auto___6890 = cljs.core.chunk_first.call(null,seq__6875_6889__$1);
var G__6891 = cljs.core.chunk_rest.call(null,seq__6875_6889__$1);
var G__6892 = c__5567__auto___6890;
var G__6893 = cljs.core.count.call(null,c__5567__auto___6890);
var G__6894 = (0);
seq__6875_6879 = G__6891;
chunk__6876_6880 = G__6892;
count__6877_6881 = G__6893;
i__6878_6882 = G__6894;
continue;
} else {
var node_6895 = cljs.core.first.call(null,seq__6875_6889__$1);
goog.dom.setTextContent(node_6895,value);


var G__6896 = cljs.core.next.call(null,seq__6875_6889__$1);
var G__6897 = null;
var G__6898 = (0);
var G__6899 = (0);
seq__6875_6879 = G__6896;
chunk__6876_6880 = G__6897;
count__6877_6881 = G__6898;
i__6878_6882 = G__6899;
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
var seq__6900_6904 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6901_6905 = null;
var count__6902_6906 = (0);
var i__6903_6907 = (0);
while(true){
if((i__6903_6907 < count__6902_6906)){
var node_6908 = cljs.core._nth.call(null,chunk__6901_6905,i__6903_6907);
goog.dom.forms.setValue(node_6908,value);


var G__6909 = seq__6900_6904;
var G__6910 = chunk__6901_6905;
var G__6911 = count__6902_6906;
var G__6912 = (i__6903_6907 + (1));
seq__6900_6904 = G__6909;
chunk__6901_6905 = G__6910;
count__6902_6906 = G__6911;
i__6903_6907 = G__6912;
continue;
} else {
var temp__5804__auto___6913 = cljs.core.seq.call(null,seq__6900_6904);
if(temp__5804__auto___6913){
var seq__6900_6914__$1 = temp__5804__auto___6913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6900_6914__$1)){
var c__5567__auto___6915 = cljs.core.chunk_first.call(null,seq__6900_6914__$1);
var G__6916 = cljs.core.chunk_rest.call(null,seq__6900_6914__$1);
var G__6917 = c__5567__auto___6915;
var G__6918 = cljs.core.count.call(null,c__5567__auto___6915);
var G__6919 = (0);
seq__6900_6904 = G__6916;
chunk__6901_6905 = G__6917;
count__6902_6906 = G__6918;
i__6903_6907 = G__6919;
continue;
} else {
var node_6920 = cljs.core.first.call(null,seq__6900_6914__$1);
goog.dom.forms.setValue(node_6920,value);


var G__6921 = cljs.core.next.call(null,seq__6900_6914__$1);
var G__6922 = null;
var G__6923 = (0);
var G__6924 = (0);
seq__6900_6904 = G__6921;
chunk__6901_6905 = G__6922;
count__6902_6906 = G__6923;
i__6903_6907 = G__6924;
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
var value_6930 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__6926_6931 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6927_6932 = null;
var count__6928_6933 = (0);
var i__6929_6934 = (0);
while(true){
if((i__6929_6934 < count__6928_6933)){
var node_6935 = cljs.core._nth.call(null,chunk__6927_6932,i__6929_6934);
(node_6935.innerHTML = value_6930);


var G__6936 = seq__6926_6931;
var G__6937 = chunk__6927_6932;
var G__6938 = count__6928_6933;
var G__6939 = (i__6929_6934 + (1));
seq__6926_6931 = G__6936;
chunk__6927_6932 = G__6937;
count__6928_6933 = G__6938;
i__6929_6934 = G__6939;
continue;
} else {
var temp__5804__auto___6940 = cljs.core.seq.call(null,seq__6926_6931);
if(temp__5804__auto___6940){
var seq__6926_6941__$1 = temp__5804__auto___6940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6926_6941__$1)){
var c__5567__auto___6942 = cljs.core.chunk_first.call(null,seq__6926_6941__$1);
var G__6943 = cljs.core.chunk_rest.call(null,seq__6926_6941__$1);
var G__6944 = c__5567__auto___6942;
var G__6945 = cljs.core.count.call(null,c__5567__auto___6942);
var G__6946 = (0);
seq__6926_6931 = G__6943;
chunk__6927_6932 = G__6944;
count__6928_6933 = G__6945;
i__6929_6934 = G__6946;
continue;
} else {
var node_6947 = cljs.core.first.call(null,seq__6926_6941__$1);
(node_6947.innerHTML = value_6930);


var G__6948 = cljs.core.next.call(null,seq__6926_6941__$1);
var G__6949 = null;
var G__6950 = (0);
var G__6951 = (0);
seq__6926_6931 = G__6948;
chunk__6927_6932 = G__6949;
count__6928_6933 = G__6950;
i__6929_6934 = G__6951;
continue;
}
} else {
}
}
break;
}
}catch (e6925){if((e6925 instanceof Error)){
var e_6952 = e6925;
domina.replace_children_BANG_.call(null,content,value_6930);
} else {
throw e6925;

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
var G__6954 = arguments.length;
switch (G__6954) {
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
var seq__6958_6962 = cljs.core.seq.call(null,children);
var chunk__6959_6963 = null;
var count__6960_6964 = (0);
var i__6961_6965 = (0);
while(true){
if((i__6961_6965 < count__6960_6964)){
var child_6966 = cljs.core._nth.call(null,chunk__6959_6963,i__6961_6965);
frag.appendChild(child_6966);


var G__6967 = seq__6958_6962;
var G__6968 = chunk__6959_6963;
var G__6969 = count__6960_6964;
var G__6970 = (i__6961_6965 + (1));
seq__6958_6962 = G__6967;
chunk__6959_6963 = G__6968;
count__6960_6964 = G__6969;
i__6961_6965 = G__6970;
continue;
} else {
var temp__5804__auto___6971 = cljs.core.seq.call(null,seq__6958_6962);
if(temp__5804__auto___6971){
var seq__6958_6972__$1 = temp__5804__auto___6971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6958_6972__$1)){
var c__5567__auto___6973 = cljs.core.chunk_first.call(null,seq__6958_6972__$1);
var G__6974 = cljs.core.chunk_rest.call(null,seq__6958_6972__$1);
var G__6975 = c__5567__auto___6973;
var G__6976 = cljs.core.count.call(null,c__5567__auto___6973);
var G__6977 = (0);
seq__6958_6962 = G__6974;
chunk__6959_6963 = G__6975;
count__6960_6964 = G__6976;
i__6961_6965 = G__6977;
continue;
} else {
var child_6978 = cljs.core.first.call(null,seq__6958_6972__$1);
frag.appendChild(child_6978);


var G__6979 = cljs.core.next.call(null,seq__6958_6972__$1);
var G__6980 = null;
var G__6981 = (0);
var G__6982 = (0);
seq__6958_6962 = G__6979;
chunk__6959_6963 = G__6980;
count__6960_6964 = G__6981;
i__6961_6965 = G__6982;
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

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__6956_SHARP_,p2__6957_SHARP_){
return f.call(null,p1__6956_SHARP_,p2__6957_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__6984 = arguments.length;
switch (G__6984) {
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
var G__6987 = arguments.length;
switch (G__6987) {
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
