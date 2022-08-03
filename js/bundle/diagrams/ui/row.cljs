(ns diagrams.ui.row
  (:require [diagrams.ui.cell :refer (cell-component)]))


(defn row-component [game walls markers n y]
  [:div.row
     (for [x (range n)
           :let [key (+ (* n x) y)]]
       ^{:key key} [cell-component game walls markers x y])])