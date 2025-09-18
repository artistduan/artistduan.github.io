// Homepage
var curSite = {};
(function (curSite) {

    const strings = {
        hans: {
            jca: "金辰艺术",
            gouache: "水粉",
            watercolor: "水彩",
            oilPainting: "油画",
            lacquer: "漆画",
            engraving: "版画",
            sketch: "素描",
            design: "设计",
            decoration: "装饰",
            decorationDesign: "装饰设计",
            studio: "工作室",
            studios: "工作室",
            realUn: "虚实之间",
            jxWatercolor: "江西水彩",
            kingceanDesign: "Kingcean 设计",
            beijing: "北京",
            shanghai: "上海",
            hongkong: "香港",
            guangzhou: "广州",
            shenzhen: "深圳",
            fuzhou: "福州",
            nanchang: "南昌"
        }
    };

    curSite.translate = function (config) {
        if (!config || site.getString("name") !== "名称") return false;
        if (config.title === "") {
            delete config.title;
            config["title-realun"] = "realUn";
            config["title-jxwatercolor"] = "jxWatercolor";
            config["title-kingcean"] = "kingceanDesign";
            config["title-decoration"] = "decorationDesign";
        }

        Object.keys(config).forEach(function (key) {
            let label = config[key];
            if (!label) return;
            let v = strings.hans[label];
            if (v) site.setElementProp(key, null, v);
            else site.getString(label, key);
        });
        return true;
    };

})(curSite || (curSite = {}));
