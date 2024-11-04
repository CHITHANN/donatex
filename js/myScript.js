function SearchProductEnterKey(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode
        SearchProduct();
        return false;
    }
}

function SearchNewsEnterKey(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode
        SearchNews();
        return false;
    }
}

function SearchNewsEnterKey1(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode
        SearchNews1();
        return false;
    }
}

function SearchProduct() {
    var key = document.getElementById("srch-term");
    window.location.href = "/tim-kiem/?key=" + key.value;
}

function SearchNews() {
    var key = document.getElementById("srch-term");
    if (key.value) {
        window.location.href = "/search/?key=" + key.value;
    } else
        alert('Nhập từ khóa cần tìm');
}

function SearchNews1() {
    var key = document.getElementById("srch-term1");
    if (key.value) {
        window.location.href = "/search/?key=" + key.value;
    } else
        alert('Nhập từ khóa cần tìm');
}

function getPostDetail(url, id) {
    $.ajax({
        url: url, // '/Controls/XTTMDN/GetGoldPrice.ashx',
        type: 'GET',
        async: true,
        dataType: 'html',
        beforeSend: function() {
            $(id).html('<img src="/UserFiles/Images/Layout/loader.gif">');
        },
        success: function(data, textStatus, xhr) {

            $(id).html(data);
        },
        error: function(xhr, textStatus, errorThrown) {
            $(id).html('Không lấy được dữ liệu');
        }
    });
}

function insertParamToUrl(key, value) {
    key = encodeURI(key);
    value = encodeURI(value);

    var kvp = document.location.search.substr(1).split('&');

    var i = kvp.length;
    var x;
    while (i--) {
        x = kvp[i].split('=');

        if (x[0] == key) {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    }

    if (i < 0) {
        kvp[kvp.length] = [key, value].join('=');
    }

    //this will reload the page, it's likely better to store this until finished
    document.location.search = kvp.join('&');
}

jQuery(function() {
    // add class "active" to product menu item
    jQuery(".product-menu").each(function() {
        jQuery(this).find("a").each(function() {
            if (this.href.replace('#', '') == window.location.href.replace('#', '')) {
                jQuery(this).addClass("menu-item-active");
                return false; // break
            }
        });
    });

});