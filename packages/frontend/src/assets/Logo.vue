<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'var(--icon-color)',
  },
})
</script>

<template>
  <svg width="512"
       height="512"
       viewBox="0 0 512 512"
       version="1.1"
       id="svg1"
       xml:space="preserve"
       sodipodi:docname="logo.svg"
       inkscape:version="1.3.2 (091e20ef0f, 2023-11-25, custom)"
       xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
       xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:svg="http://www.w3.org/2000/svg">
    <sodipodi:namedview id="namedview1"
                        pagecolor="#ffffff"
                        bordercolor="#000000"
                        borderopacity="0.25"
                        inkscape:showpageshadow="2"
                        inkscape:pageopacity="0.0"
                        inkscape:pagecheckerboard="0"
                        inkscape:deskcolor="#d1d1d1"
                        showgrid="false"
                        inkscape:zoom="1.1054688"
                        inkscape:cx="221.17313"
                        inkscape:cy="218.91165"
                        inkscape:window-width="2548"
                        inkscape:window-height="1383"
                        inkscape:window-x="0"
                        inkscape:window-y="0"
                        inkscape:window-maximized="1"
                        inkscape:current-layer="svg1" />
    <defs id="defs1" />
    <g id="layer1"
       transform="matrix(1.3213385,0,0,1.3213385,-82.262656,-82.262653)">
      <path id="path1"
            :style="{ fill: color }"
            style="display:inline;fill-opacity:1;stroke:none"
            d="m 357.12207,154.59669 c -25.22714,-0.008 -50.16945,1.91883 -71.10155,17.61523 -9.88374,7.41154 -17.54733,17.94724 -22.79687,29.03711 -6.94345,14.66836 -9.71991,30.37611 -11.709,46.32813 -4.06132,32.5709 -11.78398,75.47124 20.22071,97.27343 16.08078,10.95453 35.99035,12.55274 54.86915,12.55274 22.05032,0 43.64305,-1.51246 65.58203,-3.24024 l 3.89648,-38.55273 c -20.31508,1.61402 -40.64854,3.1297 -61.03712,3.24023 -25.73587,0.96232 -44.1537,-7.33233 -45.1289,-35.63671 -0.005,-14.74658 2.47386,-70.0976 26.29882,-83.56446 23.39912,-13.22616 89.59562,-5.9695 91.23047,-6.17575 l 4.54493,-38.22852 c -18.28285,-0.51588 -36.57912,-0.61132 -54.86915,-0.64846 z m -145.11717,0.0801 c -29.60974,0.003 -59.9844,4.49608 -78.52539,29.72461 -5.39858,7.34578 -9.29375,15.72285 -12.27735,24.29882 -6.30346,18.11852 -7.58793,37.48034 -9.94336,56.3711 l -10.31057,82.89843 -0.93945,8.16211 h 41.76171 l 0.75195,-6.7832 c 3.54037,-30.27658 7.91835,-67.72652 13.25782,-105.33594 2.1419,-15.0868 4.74325,-31.40238 17.25781,-41.64258 16.8196,-13.76285 60.22225,-8.39373 61.36093,-8.25013 2.29507,-12.82882 4.41529,-25.68571 6.49454,-38.55065 -9.23315,-0.39553 -19.01876,-0.89357 -28.88867,-0.89257 z" />
    </g>
  </svg>
</template>
