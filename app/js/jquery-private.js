define([
    'jquery',
    'jquery.livequery',
    'jquery.wait-overlay',
    'jquery-ui',
    'colorbox'], function (jq) {
    window._$ = jq;
    jq.noConflict(true);
    return jq;
});