"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Browsers;
(function (Browsers_1) {
    class Base {
        constructor(name, data, version_now, percent, year_find, image_url) {
            this.name = name;
            this.data = data;
            this.version_now = version_now;
            this.percent = percent;
            this.year_find = year_find;
            this.image_url = image_url;
        }
    }
    class Browsers extends Base {
        constructor(name, data, version_now, percent, year_find, image_url) {
            super(name, data, version_now, percent, year_find, image_url);
            this.name = name;
            this.data = data;
            this.version_now = version_now;
            this.percent = percent;
            this.year_find = year_find;
            this.image_url = image_url;
        }
        get getAllPropsNavigator() {
            return this.name;
        }
        set setNameNavigatorChrome(props) {
            this.name = props;
        }
        set setNameNavigatorSafari(props) {
            this.name = props;
        }
    }
    Browsers_1.Browsers = Browsers;
})(Browsers || (Browsers = {}));
const created = new Browsers.Browsers('Google Chrome', '2 de setembro de 2008', 60.0, 59, 2018, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/50px-Google_Chrome_icon_%28September_2014%29.svg.png');
const created2 = new Browsers.Browsers('Safari', '7 de Janeiro de 2003', 11.0, 4, 2013, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/50px-Safari_browser_logo.svg.png');
const browsers = {
    created,
    created2
};
// console.log(browsers.created.getAllPropsNavigator)
browsers.created.setNameNavigatorChrome = 'Google Chrome + ';
browsers.created2.setNameNavigatorChrome = 'Opera + ';
Object.freeze(browsers);
console.log(browsers);
//# sourceMappingURL=index.js.map