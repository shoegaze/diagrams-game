// Compiled by ClojureScript 1.11.57 {:optimizations :whitespace}
goog.provide('diagrams.core');
goog.require('cljs.core');
goog.require('domina');
goog.require('reagent.dom');
goog.require('diagrams.ui.grid');
goog.require('diagrams.game.core');
diagrams.core.run = (function diagrams$core$run(){
var container = domina.by_id.call(null,"container");
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [diagrams.ui.grid.grid_component,diagrams.game.core.test_game], null),container);
});
goog.exportSymbol('diagrams.core.run', diagrams.core.run);
