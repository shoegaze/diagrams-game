(ns diagrams.matrix)


(defn- new-row [w default]
  (->> (repeat default)
       (take w)
       (vec)))

(defn new-matrix
  ([w h default]
   (->> (repeat (new-row w default))
        (take h)
        (vec)))
  ([w h]
   (new-matrix w h nil)))

(defn get-elem
  ([mat x y default]
   (get-in mat [y x] default))
  ([mat x y]
   (get-elem mat x y nil)))

(defn set-elem [mat x y value]
  (assoc-in mat [y x] value))

(defn update-elem [mat x y update-fn]
  (let [old-value (get-elem mat x y)
        new-value (update-fn old-value)]
    (set-elem mat x y new-value)))

(defn get-dim [mat]
  (let [h (count mat)]
   (if (zero? h)
    [0 0]
    (let [w        (count (mat 0))
          ws       (map count mat)
          uniform? (every? #(= w %) ws)]
      (when uniform?
        [w h])))))

(defn get-row [mat y]
  (mat y))

(defn get-col [mat x]
  (map #(% x) mat))

(defn h-count [mat y group-fn group]
  (let [row (get-row mat y)
        gs  (group-by group-fn row)]
    (count (gs group))))

(defn v-count [mat x group-fn group]
  (let [col (get-col mat x)
        gs  (group-by group-fn col)]
    (count (gs group))))

; TODO: Fix indexing error
(defn get-neighbors [mat x y default]
  [(get-elem mat (+ x 1) y       default)
   (get-elem mat (- x 1) y       default)
   (get-elem mat x       (+ y 1) default)
   (get-elem mat x       (- y 1) default)])

(defn get-chunk
  ([mat [x y] [w h] default]
   (->> (new-matrix w h default)
        (map-indexed
          (fn [y-local row]
            (->> row
                 (map-indexed
                   (fn [x-local _]
                     (let [y' (+ y y-local)
                           x' (+ x x-local)
                           new-value (get-elem mat x' y' default)]
                       new-value)))
                 (vec))))
        (vec)))
  ([mat [x y] [w h]]
   (get-chunk mat [x y] [w h] nil)))

(defn set-chunk [mat x y chk]
  (let [mat' (atom mat)
        [w-chk h-chk] (get-dim chk)]
    (doseq [y-chk (range h-chk)
          x-chk (range w-chk)
          :let [x-mat         (+ x x-chk)
                y-mat         (+ y y-chk)
                chk-elem      (get-elem chk x-chk y-chk)
                [w-mat h-mat] (get-dim mat)]
          :when (and (< -1 x-mat w-mat)
                     (< -1 y-mat h-mat))]
      (swap! mat' diagrams.matrix/set-elem
             x-mat
             y-mat
             chk-elem))
    @mat'))

(defn count-elem [mat value]
  (->> mat
       (flatten)
       (frequencies)
       (#(get % value 0))))

(defn has-elem? [mat value]
  (> (count-elem mat value) 0))

(defn has-pattern? [mat x y pattern]
  (let [dim   (get-dim pattern)
        chunk (get-chunk mat [x y] dim nil)]
    (= pattern chunk)))

(defn to-coords [mat]
  (->> mat
       (map-indexed 
         (fn [y row]
           (->> row
                (map-indexed
                  (fn [x _] [x y]))
                (into []))))
       (into [])))