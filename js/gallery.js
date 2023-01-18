import lgZoom from "https://cdn.skypack.dev/lightgallery@2.4.0/plugins/zoom";
import lgThumbnail from "https://cdn.skypack.dev/lightgallery@2.4.0/plugins/thumbnail";

const lgContainer = document.getElementById('inline-gallery-container');
const inlineGallery = lightGallery(lgContainer, {
    container: lgContainer,
    dynamic: true,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: true,
    // Append caption inside the slide item
    // to apply some animation for the captions (Optional)
    appendSubHtmlTo: '.lg-item',
    // Delay slide transition to complete captions animations
    // before navigating to different slides (Optional)
    // You can find caption animation demo on the captions demo page
    slideDelay: 50,
    plugins: [lgThumbnail],
    dynamicEl: [
          {
            src: "img/stroika/20.jpeg",
            thumb: "img/stroika/20.jpeg"
          },
          {
            src: "img/stroika/21.jpeg",
            thumb: "img/stroika/21.jpeg"
          },
          {
            src: "img/stroika/23.jpeg",
            thumb: "img/stroika/23.jpeg"
          },
          {
            src: "img/stroika/22.jpeg",
            thumb: "img/stroika/22.jpeg"
          },
          {
            src: "img/stroika/24.jpeg",
            thumb: "img/stroika/24.jpeg"
          },
          {
            src: "img/stroika/25.jpeg",
            thumb: "img/stroika/25.jpeg"
          },
          {
            src: "img/stroika/53.jpeg",
            thumb: "img/stroika/53.jpeg"
          },
          {
            src: "img/stroika/54.jpeg",
            thumb: "img/stroika/54.jpeg"
          },
          {
            src: "img/stroika/55.jpeg",
            thumb: "img/stroika/55.jpeg"
          },
          {
            src: "img/stroika/26.jpeg",
            thumb: "img/stroika/26.jpeg"
          },
          {
            src: "img/stroika/27.jpeg",
            thumb: "img/stroika/27.jpeg"
          },
          {
            src: "img/stroika/28.jpeg",
            thumb: "img/stroika/28.jpeg"
          },
          {
            src: "img/stroika/17.jpeg",
            thumb: "img/stroika/17.jpeg"
          },
          {
            src: "img/stroika/19.jpeg",
            thumb: "img/stroika/19.jpeg"
          },
          {
            src: "img/stroika/18.jpeg",
            thumb: "img/stroika/18.jpeg"
          },
    ],
    thumbWidth: 80,
    thumbHeight: "60px",
    thumbMargin: 4
});

inlineGallery.openGallery();