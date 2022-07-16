(ns diagrams.game.solver
  (:require [diagrams.matrix :refer (h-count v-count)]))


(defn- walls-satisfied? [game walls]
  (let [h-hints (:h-hints game)
        v-hints (:v-hints game)
        hc      (map-indexed #(v-count walls %) walls)
        ; BUG: Below doesn't work if n != m
        vc      (map-indexed #(h-count walls %) walls)]
    (and (= hc h-hints)
         (= vc v-hints))))

;(defn- safe-get [game x y]
;  nil)

;(defn- matches-pattern? [game walls x y pattern]
;  false)

;(defn- deadends-are-mobs [game walls]
;  false)
;
;(defn- chest-in-room? [game walls]
;  false)

;(defn- paths-narrow? [game walls]
;  ; Convolve 2x2 :empty
;  (let [pattern [[:empty :empty]
;                 [:empty :empty]]]
;    false))

(defn solved? [game walls]
  (and (walls-satisfied? game walls)
       ;(deadends-are-mobs game walls)
       ;(chest-in-room? game walls)
       ;(paths-narrow? game walls)
       ;(chest-in-room? game walls)
       ))