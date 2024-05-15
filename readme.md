# Usage

This script adds buttons that allow you to save the Amazon Music playlist you currently browse. Just visit the page with the playlist you want to save and press the button.

Curated (made by Amazon) and personal playlists (My Likes, etc.) are supported; albums are not supported.

Tested on [music.amazon.fr](https://music.amazon.fr) but the regional versions should work fine.

Once you press the button, the script compiles a JSON file with data about the songs and saves it to your computer.

The output file contains the following:
* Index (starting with 1 from the top-most song)
* Title
* Artist
* Album
* Duration

Apparently, it should be FreeYourMusic friendly but it has not been tested.

The script depends on the selectable DOM content. Amazon Music is a heavy and unpredictable website: some elements may become unselectable. If you do not want to lose some entries in your exported playlist, here are some tips:
* Keep in mind how many songs there are in the playlist.
* Make sure your window is maximized (otherwise, the layout changes and the export will not work)
* Do not rush: make sure the content (music entries) has finished loading.
* If your playlist contains fewer than 500 songs, it should be safe to export it right away.
* If your playlist contains more than 500 songs, scroll to bottom until you get all songs. After that you might need to scroll to top once again as in the meantime the top-most songs may become undetectable. 

# Licence

Copyright 2024 projecteurlumiere

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
