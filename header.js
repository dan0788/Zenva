$(document).ready(function () {
//    mouseover
    $("#btnGroupDrop1").on('mouseover', function () {
        addUl_btnIn($(this), 1, 'position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(21px, 44px);');
    });
    $("#btnGroupDrop2").on('mouseover', function () {
        addUl_btnIn($(this), 2, 'position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(160px, 44px);');
    });
    $("#btnGroupDrop3").on('mouseover', function () {
        addUl_btnIn($(this), 3, 'position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(298px, 44px);');
    });
    $("header div:first-of-type section:nth-of-type(2) div div ul:first-of-type").on('mouseover', function () {
        addUl_ulIn("#btnGroupDrop1", $(this), 'position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(21px, 44px);');
    });
    $("header div:first-of-type section:nth-of-type(2) div div ul:nth-of-type(2)").on('mouseover', function () {
        addUl_ulIn("#btnGroupDrop2", $(this), 'position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(160px, 44px);');
    });
    $("header div:first-of-type section:nth-of-type(2) div div ul:last-of-type").on('mouseover', function () {
        addUl_ulIn("#btnGroupDrop3", $(this), 'position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(298px, 44px);');
    });
//    mouseout
    $("#btnGroupDrop1").on('mouseout', function () {
        removeUl_btnOut($(this), 1);
    });
    $("#btnGroupDrop2").on('mouseout', function () {
        removeUl_btnOut($(this), 2);
    });
    $("#btnGroupDrop3").on('mouseout', function () {
        removeUl_btnOut($(this), 3);
    });
    $("header div:first-of-type section:nth-of-type(2) div div ul:first-of-type").on('mouseout', function () {
        removeUl_ulOut("#btnGroupDrop1", $(this));
    });
    $("header div:first-of-type section:nth-of-type(2) div div ul:nth-of-type(2)").on('mouseout', function () {
        removeUl_ulOut("#btnGroupDrop2", $(this));
    });
    $("header div:first-of-type section:nth-of-type(2) div div ul:last-of-type").on('mouseout', function () {
        removeUl_ulOut("#btnGroupDrop3", $(this));
    });
});