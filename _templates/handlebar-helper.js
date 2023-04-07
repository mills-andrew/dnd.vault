function hb_alias() {
    let orig = arguments[0];
    orig = orig.toLowerCase();
    orig = orig.replace(' ', '-');
    return orig;
}

function hb_json() {
    let orig = arguments[0];
    return JSON.stringify(orig);
}

handlebars.registerHelper('alias', hb_alias);
handlebars.registerHelper('JSON', hb_json);