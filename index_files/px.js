(function() {

    var _pid = 11594,
        _hn_ver = 3,
        _ref = document.referrer || '';

    var pngUrl = '//s.cpx.to/ca.png' +
        '?ref=' + encodeURIComponent(_ref) +
        '&pid=' + encodeURIComponent(_pid) +
        '&adnxs_uid=$UID' +
        '&hn_ver=' + _hn_ver;

    (new Image()).src = (location.protocol == 'https:' ? 'https://secure' : 'http://ib') +
        '.adnxs.com/getuid?' + encodeURIComponent(pngUrl);

})();