Demo4X-Z
==

Excercise made for X Plus Z

Notes
--

- The page was made with consideration for different display sizes and reworkability. Only a bare minimum of container elements is used in order to keep code semantic and easy to maintain. The CSS structure allows to add support for new screen sizes with minimal efforts. The size of all page elements and all margins can be set by editing only two selectors: body and .page_width_m.

- Client side storage is implemented using cookies. Cookies were used over localStorage as a more appropriate solution for the size of data stored, and higher cross-platform compatibility.

- No 3rd party CSS templates or client-side processors were used. I use my own preprocessing scripts, and templates from my past projects. I'm trying to not to use preprocessors like SASS or LESS on client side without strong need as they reduce performance and long term maintainability of the code.

- The page is robot parseable and has metadata aggregable by all major search engines except for Bing.

- All page decorations and icons are bitmap-free. I used RGBA colours for page elements that were given as semitransparent in PSD file as I believe that was the original idea of a designer. All items that were indicated as hoverable are working. I used no z-order or animated elements on the page to increase performance in mobile browsers.

- Total size of the page is 1712 bytes with all assets. The page takes less than 400 milliseconds to load from a server in Seattle on my computer as measured by browser from start to pageLoad event.
