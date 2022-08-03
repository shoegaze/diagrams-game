(ns diagrams.ui.grid
  (:require [reagent.core :as r]
            [diagrams.matrix :refer (new-matrix)]
            [diagrams.game.solver :refer (solved?)]
            [diagrams.ui.h-hints :refer (h-hints-component)]
            [diagrams.ui.v-hints :refer (v-hints-component)]
            [diagrams.ui.row :refer (row-component)]))


; TODO: Get from game
(defonce n 8)
(defonce walls (r/atom (new-matrix n n false)))
(defonce markers (r/atom (new-matrix n n false)))
;(defonce game-solved? (r/atom false))

(defn grid-component [game]
  [:div.ui
   [:div.hints
    [h-hints-component game walls]
    [v-hints-component game walls]]
   [:div.grid
    (for [y (range n)]
      ^{:key y} [row-component game walls markers n y])]
   [:h1.win-banner
    {:style
     {:visibility (if (solved? game @walls)
                    :visible
                    :hidden)}}
    "YOU WIN!"]])