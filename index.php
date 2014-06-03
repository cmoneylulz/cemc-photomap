<!DOCTYPE html>
<html>
    <head>
        <?php include("php/extract_exif_data.php"); ?>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <script type="text/javascript" src="lib/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBno8KYTA9cgmX7M_2UGaMX0s4H2DYFjOw&sensor=true"></script>
        <script type="text/javascript">
            function initialize() {
                "use strict";
                var mapOptions = {
                        center: new google.maps.LatLng(34.122, -86.000),
                        zoom: 8
                    },
                    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions),
                    locations = <?php include("php/extract_exif_data.php"); echo json_encode($gps_array); ?>,
                    marker,
                    i;
                for(i=0; i<locations.length; i++) {
                    var image = {
                        url: 'img/' + locations[i][2],
                        // This marker is 20 pixels wide by 32 pixels tall.
                        size: null,
                        // The origin for this image is 0,0.
                        origin: null,
                        // The anchor for this image is the base of the flagpole at 0,32.
                        anchor: null,
                        //scaled icon size
                        scaledSize: new google.maps.Size(50,50)
                        },
                        info = new google.maps.InfoWindow,
                        info_content = "<img src='img/" + locations[i][2] + "' />";

                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                        icon: image,
                        map: map
                    });
                    (function (marker, info_content, info) {
                        google.maps.event.addListener(marker, 'click', function() {
                            info.setContent(info_content);
                            info.open(map, marker);
                        });
                    }(marker, info_content, info));
                }
            }
            google.maps.event.addDomListener(window, 'load', initialize);
        </script>
    </head>
    <body>
        <div id="map-canvas"></div>
    </body>
</html>