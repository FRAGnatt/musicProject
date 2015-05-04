define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["views/handlebars/instrument_list.handlebars"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <li "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " data-name=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"2":function(depth0,helpers,partials,data) {
    return "class=\"active\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"title instrument-title\">Выбрать инструмент:</div>\n<div class=\"instruments scroll\">\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.instrumental_list : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n        <li><a href=\"#\">Заглушка</a></li>\n    </ul>\n</div>\n<div class=\"instruments-buttons\">\n    <button class=\"btn green create\">Создать</button>\n    <button class=\"btn red\" disabled>Удалить</button>\n</div>\n\n\n";
},"useData":true});

this["JST"]["views/handlebars/sound_list.handlebars"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <button class=\"btn round "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" title=\"Тип\" data-sound=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\"><i class=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\"></i></button>\n";
},"2":function(depth0,helpers,partials,data) {
    return " active ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<span class=\"title\">Добавить:</span>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.instrument : depth0)) != null ? stack1.sound_list : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<!--<button class=\"btn round\" title=\"Тип\"><i class=\"type-4\"></i></button>-->\n<input type=\"text\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.bpm || (depth0 != null ? depth0.bpm : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"bpm","hash":{},"data":data}) : helper)))
    + "\" class=\"inp bpm\">";
},"useData":true});

this["JST"]["views/handlebars/work_tabs_list.handlebars"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression, alias2=this.lambda;

  return "    <div class=\"track "
    + ((stack1 = helpers['if'].call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.instrument : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.active : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" data-trackNum=\""
    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"name\">\n            <div alt=\""
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.instrument : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.name : stack1), depth0))
    + " (Popup)\">"
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.instrument : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.name : stack1), depth0))
    + "</div>\n        </div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.sector_list : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "active";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"sector\">\n            <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.wave : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\n        </div>\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression;

  return "                <li><i data-num=\""
    + alias1((helpers.counter || (depth0 && depth0.counter) || helpers.helperMissing).call(depth0,(data && data.key),{"name":"counter","hash":{},"data":data}))
    + "\" data-sound=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.sound : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" class=\""
    + alias1(this.lambda((depth0 != null ? depth0.val : depth0), depth0))
    + "\"></i></li>\n";
},"6":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda((depth0 != null ? depth0.sound : depth0), depth0));
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"work-tabs\">\n    <div class=\"play\" style=\"left:92px;\"></div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.track_list : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

return this["JST"];

});