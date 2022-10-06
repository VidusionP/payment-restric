import utils from '@bigcommerce/stencil-utils';

export default function(context){
	if (context.themeSettings.halo_recently_viewed_products == true) {
		const token = context.token;
        const curCode = $('.body').data('currency-code');

		function setCookie(cname, cvalue, exdays) {
	    	const d = new Date();
	      	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	      	const expires = 'expires=' + d.toUTCString();
	      	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
	   	}

	   	function getCookie(cname) {
	      	const name = cname + '=';
	      	const ca = document.cookie.split(';');

	      	for (var i = 0; i < ca.length; i++) {
	         	var c = ca[i];
	         	while (c.charAt(0) === ' ') {
	            	c = c.substring(1);
	         	}
	         	if (c.indexOf(name) === 0) {
	            	return c.substring(name.length, c.length);
	         	}
	      	}
	      	return '';
	   	}

	   	const deleteCookie = function(name) {
	      	document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	   	};

	   	function getProduct(arr) {
          return fetch('/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
              query: `
                query MyQuery {
                    site {
                        products (entityIds: [`+arr+`]) {
                          edges {
                            product: node {
                              ...ProductFields
                              }
                            }
                        }
                        currency (currencyCode: `+curCode+`) {
                            display {
                                symbol
                                symbolPlacement
                                decimalToken
                                thousandsToken
                                decimalPlaces
                            }
                        }
                    }
                }
                fragment ProductFields on Product {
                    id
                    entityId
                    name
                    path
                    inventory {
                    	isInStock
                    	hasVariantInventory
                    }
                    productOptions {
			            edges {
			              	node {
				                entityId
				                displayName
				                isRequired
			              	}
			            }
			        }
                    defaultImage {
                        img100px: url(width: 100)
                        altText
                    }
                    prices {
                        priceRange {
                            min {
                                ...MoneyFields
                            }
                            max {
                                ...MoneyFields
                            }
                        }
                        retailPrice {
                            ...MoneyFields
                        }
                        basePrice {
                            ...MoneyFields
                        }
                        price {
                            ...MoneyFields
                        }
                    }
                }
                fragment MoneyFields on Money {
                    value
                    currencyCode
                }
            `}),
        }).then(res => res.json())
           .then(res => res.data);
        }

        function formatMoney(n, c, d, t) {
            var c = isNaN(c = Math.abs(c)) ? 2 : c,
                d = d == undefined ? "." : d,
                t = t == undefined ? "," : t,
                s = n < 0 ? "-" : "",
                i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
                j = (j = i.length) > 3 ? j % 3 : 0;

            return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
        }

		var BC_Products = function() {
		    var e = {
		        howManyToShow: 3,
		        howManyToStoreInMemory: 10,
		        wrapperId: "recently-viewed-products",
		        onComplete: null
		    };
		    var t = [];
		    var n = null;
		    var r = null;
		    var i = 0;
		    var s = {
		        configuration: {
		            expires: context.themeSettings.recently_viewed_products_expires_date,
		            path: "/",
		            domain: window.location.hostname
		        },
		        name: "bigcommerce_recently_viewed",
		        write: function(e) {
		            setCookie(this.name, e.join(" "), this.configuration.expires)
		        },
		        read: function() {
		            var e = [];
		            var t = getCookie(this.name);
		            if (t !== null && t != undefined) {
		                e = t.split(" ")
		            }
		            return e
		        },
		        destroy: function() {
		            setCookie(this.name, null, this.configuration.expires)
		        },
		        remove: function(e) {
		            var t = this.read();
		            var n = $.inArray(e, t);
		            if (n !== -1) {
		                t.splice(n, 1);
		                this.write(t)
		            }
		        }
		    };
		    var o = function() {
		    	for ( var j = 0; j < e.howManyToShow; j++) {
		    		var productId = t[j];
		    		jQuery('#recently-viewed-products-list-tmp').find('.item[data-id="product-'+productId+'"]').appendTo(n);
		    	}
		    	jQuery('#recently-viewed-products-list-tmp').remove();
		        n.show();
		        if (e.onComplete) {
		            try {
		                e.onComplete()
		            } catch (t) {}
		        }
		    };
		    var u = function() {
		    	var tmp = jQuery('#recently-viewed-products-list-tmp'),
		    	list = t;

		    	if (t.length > 0) {
			    	getProduct(list).then(data => {
		                renderProduct(data.site.products.edges, data.site.currency.display, tmp);
		                o();
		            });
		    	}
		    };
		    return {
		        resizeImage: function(e, t) {
		            if (t == null) {
		                return e
		            }
		            if (t == "master") {
		                return e.replace(/http(s)?:/, "")
		            }
		            var n = e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?/i);
		            if (n != null && n != undefined) {
		                var r = e.split(n[0]);
		                var i = n[0];
		                return (r[0] + "_" + t + i).replace(/http(s)?:/, "")
		            } else {
		                return null
		            }
		        },
		        showRecentlyViewed: function(i) {
		            var i = i || {};
		            jQuery.extend(e, i);
		            t = s.read();
		            n = jQuery("#" + e.wrapperId);
		            e.howManyToShow = Math.min(t.length, e.howManyToShow);
		            
		            if (e.howManyToShow && n.length) {
		                u()
		            }
		        },
		        getConfig: function() {
		            return e
		        },
		        clearList: function() {
		            s.destroy()
		        },
		        recordRecentlyViewed: function(t) {
		            var t = t || {};
		            var product_id = $('.productView').find('form[data-cart-item-add] [name="product_id"]').val();
		            
		            jQuery.extend(e, t);
		            var n = s.read();
		            
		            if (product_id) {
		                var r = product_id;
		                var i = jQuery.inArray(r, n);
		                if (i === -1) {
		                    n.unshift(r);
		                    n = n.splice(0, e.howManyToStoreInMemory)
		                } else {
		                    n.splice(i, 1);
		                    n.unshift(r)
		                }
		                s.write(n)
		            }
		        }
		    }
		}();

		function renderProduct(product, curDisplay, tmp) {
            if (product != undefined) {
                $.each(product, (index, element) => {
                    const item = element.product,
                        symbol = curDisplay.symbol,
                        symbolPlacement = curDisplay.symbolPlacement.toLowerCase(),
                        decimalToken = curDisplay.decimalToken,
                        decimalPlaces = curDisplay.decimalPlaces,
                        thousandsToken = curDisplay.thousandsToken;
                    let title, price, btnAct;

                    if ($('.body').hasClass('is-login') || context.themeSettings.restrict_to_login !== true) {
                        if (item.prices.priceRange.min.value < item.prices.priceRange.max.value && context.themeSettings.price_ranges) {
                            const priceMin = (symbolPlacement == "left" ? symbol : "") + (formatMoney(item.prices.priceRange.min.value, decimalPlaces, decimalToken, thousandsToken)) + (symbolPlacement != "left" ? symbol : "");
                            const priceMax = (symbolPlacement == "left" ? symbol : "") + (formatMoney(item.prices.priceRange.max.value, decimalPlaces, decimalToken, thousandsToken)) + (symbolPlacement != "left" ? symbol : "");

                            price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                        <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                    </div>\
                                    <div class="price-section price-section--withoutTax">\
                                        <span data-product-price-without-tax="" class="price price--withoutTax">'+priceMin+' - '+priceMax+'</span>\
                                    </div>';
                        }
                        else {
                            const priceDef = (symbolPlacement == "left" ? symbol : "") + (formatMoney(item.prices.price.value, decimalPlaces, decimalToken, thousandsToken)) + (symbolPlacement != "left" ? symbol : "");

                            if (item.prices.retailPrice == null) {
                                if (item.prices.basePrice.value > item.prices.price.value) {
                                    const priceBas = (symbolPlacement == "left" ? symbol : "") + (formatMoney(item.prices.basePrice.value, decimalPlaces, decimalToken, thousandsToken)) + (symbolPlacement != "left" ? symbol : "");

                                    price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale">'+priceBas+'</span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">'+priceDef+'</span>\
                                            </div>';
                                }
                                else {
                                    price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">'+priceDef+'</span>\
                                            </div>';
                                }
                            }
                            else {
                                if (item.prices.retailPrice.value > item.prices.price.value) {
                                    const priceRet = (symbolPlacement == "left" ? symbol : "") + (formatMoney(item.prices.retailPrice.value, decimalPlaces, decimalToken, thousandsToken)) + (symbolPlacement != "left" ? symbol : "");
                                
                                    price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale">'+priceRet+'</span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">'+priceDef+'</span>\
                                            </div>';
                                }
                                else {
                                    price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">'+priceDef+'</span>\
                                            </div>';
                                }
                            }
                        }
                    }
                    else {
                        price = '<p translate>Log in for pricing</p>';
                    }

                    if (item.inventory.isInStock == false) {
                    	btnAct = '<a href="'+item.path+'" class="button button--primary">Out Of Stock</a>';

                    }
                    else if (item.productOptions.edges.length > 0) {
                    	btnAct = '<a href="'+item.path+'" class="button button--primary">Choose Options</a>';
                    }
                    else {
                    	if ($('.recently-viewed-products-sidebar').data('tag-enabled') == false) {
                    		btnAct = '<a href="/cart.php?action=add&product_id='+item.entityId+'" class="button button--primary halo-add-to-cart" data-product-id="'+item.entityId+'">Add to Cart</a>';
                    	}
                    	else {
                    		btnAct = '<a href="/cart.php?action=add&product_id='+item.entityId+'" class="button button--primary" data-product-id="'+item.entityId+'">Add to Cart</a>';
                    	}
                    }

                    const html_card = '<div class="item" data-target="img-1" data-id="product-'+item.entityId+'">\
								  		<a href="'+item.path+'" class="recent_item_url">\
								    		<img src="'+item.defaultImage.img100px+'" alt="'+item.name+'" title="'+item.name+'" />\
								  		</a>\
									  	<div class="second-info">\
									    	<div class="first product-item" data-product-id="product-'+item.entityId+'">\
									      		<a class="product-title product-grid-image" href="'+item.path+'">'+item.name+'</a>\
									      		<div class="prod-price" data-test-info-type="price">'+price+'</div>\
									      		'+btnAct+'\
									    	</div>\
								    		<a class="text-no-underline second" href="'+item.path+'"></a>\
								  		</div>\
									</div>';

					tmp.append(html_card);
                });
            }
        }
		
		$(window).on("load", function(){
			var view = true;

			if( context.themeSettings.layout_recently != 'default'){
				view = false;
			}
			
			BC_Products.recordRecentlyViewed();

			var cookieValue = getCookie("bigcommerce_recently_viewed");

			if (!(cookieValue !== null && cookieValue !== undefined && cookieValue !== "")) {
			    $('.recently-viewed-products-sidebar').find(".no-products").show();
			    $('#recently-viewed-products-list').css("padding", "0");

			    if (window.innerWidth > 767 && view) {
			        $(".lst-seen-widget").addClass("is-show-widget");
			        $(".wrap-icons").removeClass("collapsed");
			    } else {
			        $(".wrap-icons").addClass("collapsed");
			        $(".lst-seen-widget").removeClass("is-show-widget");
			    }
			} else {
				BC_Products.showRecentlyViewed({
				    howManyToShow: context.themeSettings.number_of_recently_viewed_products,
				    howManyToStoreInMemory: context.themeSettings.number_of_recently_viewed_products,
				    wrapperId: 'recently-viewed-products-list',
				    onComplete: function() {
				        var recentlyViewBlock = $('.recently-viewed-products-sidebar');
				        var recentlyGrid = recentlyViewBlock.find('.products-grid');
				        var productGrid = recentlyGrid.children();

				        recentlyGrid.find(".no-products").remove();
				        
				        if (productGrid.length) {
				            if (window.innerWidth > 767 && view) {
				                $(".lst-seen-widget").addClass("is-show-widget");
				                $(".wrap-icons").removeClass("collapsed");
				            } else {
				                $(".wrap-icons").addClass("collapsed");
				            }

				            if (recentlyViewBlock.is(':visible')) {
				            	if (window.innerWidth < 767) {
		                            if (productGrid.length > 2) {
		                                $(".recently-viewed-products-sidebar").addClass("has-arrow");
		                            }
			                    } else {
			                        if (productGrid.length > 4) {
			                           $(".recently-viewed-products-sidebar").addClass("has-arrow");
			                        }
			                    }

				                if (!recentlyGrid.hasClass('slick-initialized')) {
				                	if (productGrid.length > 3) {
					                    recentlyGrid.slick({
					                        infinite: false,
					                        speed: 1000,
					                        slidesToShow: 3,
					                        dots: false,
					                        arrows: true,
					                        vertical: true,
					                        slidesToScroll: 1,
					                        adaptiveHeight: true,
					                        nextArrow: "<svg class='slick-next slick-arrow' aria-label='Next Slide'><use xlink:href='#icon-chevron-down'></use></svg>", 
		        							prevArrow: "<svg class='slick-prev slick-arrow' aria-label='Previous Slide'><use xlink:href='#icon-chevron-up'></use></svg>",
					                        responsive: [
					                            {
					                                breakpoint: 768,
					                                settings: {
					                                    slidesToScroll: 1,
					                                    slidesToShow: 1
					                                }
					                            }
					                        ]
					                    });
			                        } else if (productGrid.length > 2) {
			                        	recentlyGrid.slick({
					                        infinite: false,
					                        speed: 1000,
					                        slidesToShow: 2,
					                        dots: false,
					                        arrows: true,
					                        vertical: true,
					                        slidesToScroll: 1,
					                        adaptiveHeight: true,
					                        nextArrow: "<svg class='slick-next slick-arrow' aria-label='Next'><use xlink:href='#icon-chevron-down'></use></svg>", 
		        							prevArrow: "<svg class='slick-prev slick-arrow' aria-label='Previous'><use xlink:href='#icon-chevron-up'></use></svg>",
					                        responsive: [
					                            {
					                                breakpoint: 768,
					                                settings: {
					                                    slidesToScroll: 1,
					                                    slidesToShow: 1
					                                }
					                            }
					                        ]
					                    });
			                        }

				                    recentlyGrid.prepend('<div class="product-info"></div>');
				                };
				            };
				        }
				    }
				});
			}

			$(document).on("click", ".collapse-icon", function() {
			    $(".lst-seen-widget").removeClass("is-show-widget");
			    $(".wrap-icons").addClass("collapsed");
			});

			$(document).on("click", ".wrap-icons div:first-child", function() {
			    $(".lst-seen-widget").addClass("is-show-widget");
			    $(".wrap-icons").removeClass("collapsed");
			});
			
		    $(document).on('click', 'a.recent_item_url', function(e) {
		        if (window.innerWidth <= 768) {
		            e.preventDefault();
		        }
		    });

		    if (window.innerWidth < 768) {
		        $(".lst-seen-widget").removeClass("is-show-widget");
		        $(".wrap-icons").addClass("collapsed");
		    }

		    $('.recently-viewed-products-sidebar .products-grid').on('mouseenter', '.item', function(e) {
		        e.preventDefault();

		        var $currTarget = $(e.currentTarget),
		            index = $currTarget.index('.recently-viewed-products-sidebar .products-grid .slick-active'),
					margin_top = index * $('.recently-viewed-products-sidebar .product-info').outerHeight();
		            
		        $(".recently-viewed-products-sidebar .product-info").html($(this).find(".second-info").html()).css("margin-top", margin_top).show();
		    });

		    $('.recently-viewed-products-sidebar .products-grid').on('mouseenter', '.slick-arrow', function(e) {
		        $(".recently-viewed-products-sidebar .product-info").hide();
		    });

		    var backToTop = $('.recently-viewed-products-sidebar .backtoTop');

		    if ($(this).scrollTop() > 220) {
		        $('.recently-viewed-products-sidebar').addClass("slided-up");
		    } else {
		        $('.recently-viewed-products-sidebar').removeClass("slided-up");
		    };

		    $(window).scroll(function() {
		        if ($(this).scrollTop() > 220) {
		            $('.recently-viewed-products-sidebar').addClass("slided-up");
		        } else {
		            $('.recently-viewed-products-sidebar').removeClass("slided-up");
		        };
		    });

		    backToTop.off('click.scrollTop').on('click.scrollTop', function(e) {
		        e.preventDefault();
		        e.stopPropagation();

		        $('html, body').animate({
		            scrollTop: 0
		        }, 400);
		        
		        return false;
		    });
		});
	}
}