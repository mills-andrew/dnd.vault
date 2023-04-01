function hb_alias() {
    let orig = arguments[0];
    orig = orig.toLowerCase();
    orig = orig.replace(' ', '-');
    return orig;
}

handlebars.registerHelper('alias', hb_alias);