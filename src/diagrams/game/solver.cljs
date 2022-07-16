(ns diagrams.game.solver
  (:require [diagrams.matrix :refer (h-count v-count get-dim)]))


(defn- valid-forms? [game walls]
  ; (dim game) = (dim walls)
  ; every corr. mask-elem != :empty -> false? walls
  false)

(defn- walls-satisfied? [game walls]
  (let [h-hints (:h-hints game)
        v-hints (:v-hints game)
        hc      (map-indexed #(v-count walls %) walls)
        ; BUG: Below doesn't work if n != m
        vc      (map-indexed #(h-count walls %) walls)]
    (and (= hc h-hints)
         (= vc v-hints))))

(defn- safe-get-wall [walls x y]
  (get-in walls [x y] true))

(defn- get-neighbors [mat x y default-val]
  [(get-in mat [(+ x 1) y      ] default-val)
   (get-in mat [(- x 1) y      ] default-val)
   (get-in mat [x       (+ y 1)] default-val)
   (get-in mat [x       (- y 1)] default-val)])

;(defn- matches-pattern? [game walls x y pattern]
;  false)

(defn- deadends-are-mobs [game walls]
  (let [mask  (:mask game)
        [w h] (get-dim mask)]
    (every? true?
            (for [x (range w)
                  y (range h)
                  :let [mask-elem (get-in mask [x y])
                        ;wall      (get-in walls [x y])
                        wall-neighbors (get-neighbors walls x y true)]]
              (if (= mask-elem :mob)
                (= (count (filter true? wall-neighbors)) 3)
                true)))))
;
;(defn- chest-in-room? [game walls]
;  false)

;(defn- paths-narrow? [game walls]
;  ; Convolve 2x2 :empty
;  (let [pattern [[:empty :empty]
;                 [:empty :empty]]]
;    false))

(defn solved? [game walls]
  (and true
       (walls-satisfied? game walls)
       (deadends-are-mobs game walls)
       ;(chest-in-room? game walls)
       ;(paths-narrow? game walls)
       ;(chest-in-room? game walls)
       ))