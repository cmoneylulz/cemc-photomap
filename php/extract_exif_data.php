<?php
/**
 * Created by PhpStorm.
 * User: cwilson
 * Date: 2/21/14
 * Time: 2:12 PM
 */
    $dir = "img/";
    $images = scandir($dir);
    $gps_array = array();
    foreach($images as $image) {
        if($image != "." and $image != "..") {
            $exif_array = exif_read_data($dir.$image);
            $gps_lat_array = $exif_array["GPSLatitude"];
            $gps_lat_ref = $exif_array["GPSLatitudeRef"];
            $gps_long_array = $exif_array["GPSLongitude"];
            $gps_long_ref = $exif_array["GPSLongitudeRef"];
            $gps_lat = ($gps_lat_array[0] + $gps_lat_array[1]/60 + $gps_lat_array[2]/3600) * ($gps_lat_ref == "N" ? 1 : -1);
            $gps_long = ($gps_long_array[0] + $gps_long_array[1]/60 + $gps_long_array[2]/3600) * ($gps_long_ref == "W" ? -1 : 1);
            $marker = array($gps_lat, $gps_long, $image);
            array_push($gps_array, $marker);
        }
    }
?>