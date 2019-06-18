export default function tabs() {
    $('.panel-body-info').not(':first').hide();

    $('.tab-item').click(function () {
        $(".tab-item").removeClass("active").eq($(this).index()).addClass("active");
        $(".panel-body-info").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");
    
    //CreateModal Tabs
    $('.panel-info-createModal-equiequpmentList').not(':first').hide();

    $('.tab-item-createModal-equiequpmentList').click(function () {
        $(".tab-item-createModal-equiequpmentList").removeClass("active").eq($(this).index()).addClass("active");
        $(".panel-info-createModal-equiequpmentList").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");
}