(ns diagrams.ui.row
  (:require [diagrams.ui.cell :refer (cell-component)]))


(defn row-component [game walls markers n x]
  [:div.row
     (for [y (range n)
           :let [key (+ (* n y) x)]]
       ^{:key key} [cell-component game walls markers x y])])