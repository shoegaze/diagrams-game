(ns diagrams.ui.cell
  (:require [diagrams.matrix :refer (get-elem set-elem flip-elem)]
            [diagrams.game.core :refer (is-occupied?)]))


(defn- on-left-click [ev game walls markers x y]
  (when (not (is-occupied? game x y))
    (swap! walls flip-elem x y)
    (swap! markers set-elem x y false))
  false)

(defn- on-right-click [ev game walls markers x y]
  (when (not (is-occupied? game x y))
    (swap! walls set-elem x y false)
    (swap! markers flip-elem x y))
  false)

(defn- get-img-src [mask-elem wall? marker?]
  (if (not= mask-elem :empty)
    (case mask-elem
      :chest "image/chest__60_60.png"
      :mob   "image/mob__60_60.png")
    (case [wall? marker?]
      [false false] "image/empty__60_60.png"
      [false true ] "image/marker__60_60.png"
      [true  false] "image/wall__60_60.png"
      "image/error__60_60.png")))

(defn cell-component [game walls markers x y]
  [:span.cell {:on-click #(on-left-click % game walls markers x y)
               :on-context-menu #(on-right-click % game walls markers x y)}
   [:img.floor {:src "image/floor__60_60.png"}]
   (let [mask-elem (get-elem (:mask game) x y)
         wall?     (get-elem @walls x y)
         marker?   (get-elem @markers x y)]
     [:img.marker {:src (get-img-src mask-elem
                                     wall?
                                     marker?)}])])