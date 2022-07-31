(defproject diagrams "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "The MIT License (MIT)"
            :url "https://mit-license.org/"}

  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.57"]
                 [ring/ring-core "1.9.5"]
                 [ring/ring-jetty-adapter "1.9.5"]
                 [compojure "1.7.0"]
                 [hiccup "1.0.5"]
                 [domina "1.0.3"]
                 [cljsjs/react "17.0.2-0"]
                 [cljsjs/react-dom "17.0.2-0"]
                 [reagent "1.1.1"]]

  :plugins [[lein-cljsbuild "1.1.8"]]

  :cljsbuild {:builds
              {:dev
               {:source-paths ["src"]
                :compiler {:output-to "resources/public/js/bundle/bundle.dev.js"
                           :output-dir "resources/public/js/bundle"
                           :optimizations :whitespace
                           :pretty-print true
                           :source-map "resources/public/js/bundle/bundle.dev.js.map"}}
               :pre
               {:source-paths ["src"]
                :compiler {:output-to "resources/public/js/bundle/bundle.pre.js"
                           :optimizations :simple
                           :pretty-print false}}
               :prod
               {:source-paths ["src"]
                :compiler {:output-to "resources/public/js/bundle/bundle.prod.js"
                           :optimizations :advanced
                           :pretty-print false}}}}

  :clean-targets ^{:protect false} [:target-path "resources/public/js/bundle/"]

  :aliases {"rebuild"     ["do" "clean,"
                           "cljsbuild" "once"]
            "build-watch" ["cljsbuild" "auto"]
            "build-dev"   ["cljsbuild" "once" "dev"]
            "build-pre"   ["cljsbuild" "once" "pre"]
            "build-prod"  ["cljsbuild" "once" "prod"]})