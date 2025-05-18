import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery-bundle.css';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

lightGallery(document.querySelector('.fotogalerie'), {
  selector: ".picture__link",
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
});