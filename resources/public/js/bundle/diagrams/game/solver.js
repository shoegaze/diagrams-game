// Compiled by ClojureScript 1.11.57 {:optimizations :whitespace}
goog.provide('diagrams.game.solver');
goog.require('cljs.core');
goog.require('diagrams.matrix');
diagrams.game.solver.walls_satisfied_QMARK_ = (function diagrams$game$solver$walls_satisfied_QMARK_(game,walls){
var h_hints = new cljs.core.Keyword(null,"h-hints","h-hints",-670618653).cljs$core$IFn$_invoke$arity$1(game);
var v_hints = new cljs.core.Keyword(null,"v-hints","v-hints",827217637).cljs$core$IFn$_invoke$arity$1(game);
var hc = cljs.core.map_indexed.call(null,(function (p1__457405_SHARP_){
return diagrams.matrix.v_count.call(null,walls,p1__457405_SHARP_);
}),walls);
var vc = cljs.core.map_indexed.call(null,(function (p1__457406_SHARP_){
return diagrams.matrix.h_count.call(null,walls,p1__457406_SHARP_);
}),walls);
return ((cljs.core._EQ_.call(null,hc,h_hints)) && (cljs.core._EQ_.call(null,vc,v_hints)));
});
diagrams.game.solver.solved_QMARK_ = (function diagrams$game$solver$solved_QMARK_(game,walls){
return diagrams.game.solver.walls_satisfied_QMARK_.call(null,game,walls);
});
