window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/svg\/","svgExt":".svg","source":{"concatemoji":"http:\/\/abperfectent.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.7.3"}};
!function(a,b,c){function d(a){var b,c,d,e,f=String.fromCharCode;if(!k||!k.fillText)return!1;switch(k.clearRect(0,0,j.width,j.height),k.textBaseline="top",k.font="600 32px Arial",a){case"flag":return k.fillText(f(55356,56826,55356,56819),0,0),!(j.toDataURL().length<3e3)&&(k.clearRect(0,0,j.width,j.height),k.fillText(f(55356,57331,65039,8205,55356,57096),0,0),b=j.toDataURL(),k.clearRect(0,0,j.width,j.height),k.fillText(f(55356,57331,55356,57096),0,0),c=j.toDataURL(),b!==c);case"emoji4":return k.fillText(f(55357,56425,55356,57341,8205,55357,56507),0,0),d=j.toDataURL(),k.clearRect(0,0,j.width,j.height),k.fillText(f(55357,56425,55356,57341,55357,56507),0,0),e=j.toDataURL(),d!==e}return!1}function e(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var f,g,h,i,j=b.createElement("canvas"),k=j.getContext&&j.getContext("2d");for(i=Array("flag","emoji4"),c.supports={everything:!0,everythingExceptFlag:!0},h=0;h<i.length;h++)c.supports[i[h]]=d(i[h]),c.supports.everything=c.supports.everything&&c.supports[i[h]],"flag"!==i[h]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[i[h]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(g=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1)):(a.attachEvent("onload",g),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),f=c.source||{},f.concatemoji?e(f.concatemoji):f.wpemoji&&f.twemoji&&(e(f.twemoji),e(f.wpemoji)))}(window,document,window._wpemojiSettings);

jQuery(document).ready(function($) {

var ResponsiveMenu = {
    trigger: '#responsive-menu-button',
    animationSpeed: 500,
    breakpoint: 991,
    pushButton: 'off',
    animationType: 'slide',
    animationSide: 'left',
    pageWrapper: '',
    isOpen: false,
    triggerTypes: 'click',
    activeClass: 'is-active',
    container: '#responsive-menu-container',
    openClass: 'responsive-menu-open',
    accordion: 'off',
    activeArrow: '▲',
    inactiveArrow: '▼',
    wrapper: '#responsive-menu-wrapper',
    closeOnBodyClick: 'off',
    closeOnLinkClick: 'off',
    itemTriggerSubMenu: 'off',
    linkElement: '.responsive-menu-item-link',
    openMenu: function() {
        $(this.trigger).addClass(this.activeClass);
        $('html').addClass(this.openClass);
        $('.responsive-menu-button-icon-active').hide();
        $('.responsive-menu-button-icon-inactive').show();
        this.setWrapperTranslate();
        this.isOpen = true;
    },
    closeMenu: function() {
        $(this.trigger).removeClass(this.activeClass);
        $('html').removeClass(this.openClass);
        $('.responsive-menu-button-icon-inactive').hide();
        $('.responsive-menu-button-icon-active').show();
        this.clearWrapperTranslate();
        this.isOpen = false;
    },
    triggerMenu: function() {
        this.isOpen ? this.closeMenu() : this.openMenu();
    },
    triggerSubArrow: function(subarrow) {
        var sub_menu = $(subarrow).parent().next('.responsive-menu-submenu');
        var self = this;
        if(this.accordion == 'on') {
            /* Get Top Most Parent and the siblings */
            var top_siblings = sub_menu.parents('.responsive-menu-item-has-children').last().siblings('.responsive-menu-item-has-children');
            var first_siblings = sub_menu.parents('.responsive-menu-item-has-children').first().siblings('.responsive-menu-item-has-children');
            /* Close up just the top level parents to key the rest as it was */
            top_siblings.children('.responsive-menu-submenu').slideUp(200, 'linear').removeClass('responsive-menu-submenu-open');
            /* Set each parent arrow to inactive */
            top_siblings.each(function() {
                $(this).find('.responsive-menu-subarrow').first().html(self.inactiveArrow);
                $(this).find('.responsive-menu-subarrow').first().removeClass('responsive-menu-subarrow-active');
            });
            /* Now Repeat for the current item siblings */
            first_siblings.children('.responsive-menu-submenu').slideUp(200, 'linear').removeClass('responsive-menu-submenu-open');
            first_siblings.each(function() {
                $(this).find('.responsive-menu-subarrow').first().html(self.inactiveArrow);
                $(this).find('.responsive-menu-subarrow').first().removeClass('responsive-menu-subarrow-active');
            });
        }
        if(sub_menu.hasClass('responsive-menu-submenu-open')) {
            sub_menu.slideUp(200, 'linear').removeClass('responsive-menu-submenu-open');
            $(subarrow).html(this.inactiveArrow);
            $(subarrow).removeClass('responsive-menu-subarrow-active');
        } else {
            sub_menu.slideDown(200, 'linear').addClass('responsive-menu-submenu-open');
            $(subarrow).html(this.activeArrow);
            $(subarrow).addClass('responsive-menu-subarrow-active');
        }
    },
    menuHeight: function() {
        return $(this.container).height();
    },
    menuWidth: function() {
        return $(this.container).width();
    },
    wrapperHeight: function() {
        return $(this.wrapper).height();
    },
    setWrapperTranslate: function() {
        switch(this.animationSide) {
            case 'left':
                translate = 'translateX(' + this.menuWidth() + 'px)'; break;
            case 'right':
                translate = 'translateX(-' + this.menuWidth() + 'px)'; break;
            case 'top':
                translate = 'translateY(' + this.wrapperHeight() + 'px)'; break;
            case 'bottom':
                translate = 'translateY(-' + this.menuHeight() + 'px)'; break;
        }
        if(this.animationType == 'push') {
            $(this.pageWrapper).css({'transform':translate});
            $('html, body').css('overflow-x', 'hidden');
        }
        if(this.pushButton == 'on') {
            $('#responsive-menu-button').css({'transform':translate});
        }
    },
    clearWrapperTranslate: function() {
        var self = this;
        if(this.animationType == 'push') {
            $(this.pageWrapper).css({'transform':''});
            setTimeout(function() {
                $('html, body').css('overflow-x', '');
            }, self.animationSpeed);
        }
        if(this.pushButton == 'on') {
            $('#responsive-menu-button').css({'transform':''});
        }
    },
    init: function() {
        var self = this;
        $(this.trigger).on(this.triggerTypes, function(e){
            e.stopPropagation();
            self.triggerMenu();
        });
        $(this.trigger).mouseup(function(){
            $(self.trigger).blur();
        });
        $('.responsive-menu-subarrow').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            self.triggerSubArrow(this);
        });
        $(window).resize(function() {
            if($(window).width() > self.breakpoint) {
                if(self.isOpen){
                    self.closeMenu();
                }
            } else {
                if($('.responsive-menu-open').length>0){
                    self.setWrapperTranslate();
                }
            }
        });
        if(this.closeOnLinkClick == 'on') {
            $(this.linkElement).on('click', function(e) {
                e.preventDefault();
                /* Fix for when close menu on parent clicks is on */
                if(self.itemTriggerSubMenu == 'on' && $(this).is('.responsive-menu-item-has-children > ' + self.linkElement)) {
                    return;
                }
                old_href = $(this).attr('href');
                old_target = typeof $(this).attr('target') == 'undefined' ? '_self' : $(this).attr('target');
                if(self.isOpen) {
                    if($(e.target).closest('.responsive-menu-subarrow').length) {
                        return;
                    }
                    self.closeMenu();
                    setTimeout(function() {
                        window.open(old_href, old_target);
                    }, self.animationSpeed);
                }
            });
        }
        if(this.closeOnBodyClick == 'on') {
            $(document).on('click', 'body', function(e) {
                if(self.isOpen) {
                    if($(e.target).closest('#responsive-menu-container').length || $(e.target).closest('#responsive-menu-button').length) {
                        return;
                    }
                }
                self.closeMenu();
            });
        }
        if(this.itemTriggerSubMenu == 'on') {
            $('.responsive-menu-item-has-children > ' + this.linkElement).on('click', function(e) {
                e.preventDefault();
                self.triggerSubArrow($(this).children('.responsive-menu-subarrow').first());
            });
        }
    }
};
ResponsiveMenu.init();
});
