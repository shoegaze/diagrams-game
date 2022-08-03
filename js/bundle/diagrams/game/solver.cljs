(ns diagrams.game.solver
  (:require [diagrams.matrix :as mat]))


(defn- valid-forms? [game walls]
  ; (dim game) = (dim walls)
  ; every corr. mask-elem != :empty -> false? walls
  false)

(defn- walls-satisfied? [game walls]
  (let [h-hints (:h-hints game)
        v-hints (:v-hints game)
        hc      (map-indexed #(mat/v-count walls % true? true)
                             walls)
        ; BUG: Below doesn't work if n != m
        vc      (map-indexed #(mat/h-count walls % true? true)
                             walls)]
    (and (= hc h-hints)
         (= vc v-hints))))

(defn- dead-ends-are-mobs [game walls]
  (let [mask  (:mask game)
        [w h] (mat/get-dim mask)]
    (->> (for [y (range h)
               x (range w)
               :let [mask-elem      (mat/get-elem mask x y)
                     wall-neighbors (mat/get-neighbors walls x y true)]]
           (if-not (= mask-elem :mob)
             true
             ; Ensure there are exactly 3 neighboring walls
             (->> wall-neighbors
                  (frequencies)
                  (#(get % true))
                  (= 3))))
         (every? identity))))

(defn- chest-room? [game walls x y]
  (if-not (mat/has-elem?
            (mat/get-chunk (:mask game) [x y] [3 3])
            :chest)
    false
    (let [h-walls (mat/get-chunk walls [(- x 1) y] [5 3] true)
          v-walls (mat/get-chunk walls [x (- y 1)] [3 5] true)
          h-count (mat/count-elem h-walls true)
          v-count (mat/count-elem v-walls true)
          sum     (+ h-count v-count)]
      (= sum 11))))

; Must be placed after dead-ends-are-mobs
(defn- chests-in-rooms? [game walls]
  (let [[w h]        (mat/get-dim walls)
        room-pattern (mat/new-matrix 3 3 :empty)]
      (->> (for [y (range h)
                 x (range w)]
             (if-not (mat/has-pattern? walls x y room-pattern)
               true
               (chest-room? game walls x y)))
           (every? identity))))

(defn- fill-chest-rooms [game walls]
  (let [walls' (atom walls)
        [w h]  (mat/get-dim (:mask game))
        wall-pattern (mat/new-matrix 3 3 true)]
    (doseq [y (range h)
            x (range w)
            :when (chest-room? game @walls' x y)]
      (swap! walls' mat/set-chunk x y wall-pattern))
    @walls'))

(defn- paths-narrow? [game walls]
  ; Convolve walls with 2x2 false matrix
  (let [[w h]        (mat/get-dim (:mask game))
        wall-pattern (mat/new-matrix 2 2 false)]
    (->> (for [y (range h)
               x (range w)]
           (mat/has-pattern? walls x y wall-pattern))
         (every? not))))

;(defn- connected? [])

(defn- paths-connected [game walls]
  ; Count number of empty spaces as `empties`
  (reduce )

  ;(let [[w h]   (mat/get-dim    (:mask game))
  ;      empties (mat/count-elem walls false)]
  ; (->> (for [y (range h)
  ;            x (range w)
  ;            :let [wall? (mat/get-elem walls x y)]
  ;            :when (not wall?)]
  ;        ())
  ;      (every? identity)))
;  (let [path (atom #{})])
;  ; Iterate through elements in `walls`
;  ; If first empty space, register space and connected neighbors recursively
;  ;  Return (= (count path) empties)
;  ;
  false)

(defn solved? [game walls]
  (and true
       ;(valid-forms? game walls)
       (walls-satisfied? game walls)
       (dead-ends-are-mobs game walls)
       (chests-in-rooms? game walls)
       (let [walls (fill-chest-rooms game walls)]
         (paths-narrow? game walls)
       ;  ;(paths-connected game walls)
       )))