config {
	doctype = html5
	metaCharset = utf-8
	no_cache = 0
	admPanel = 0
	debug = 0
	spamProtectEmailAddresses = 2
	spamProtectEmailAddresses_atSubst = -monkey-tail-
	spamProtectEmailAddresses_lastDotSubst = -dot-
	#for real url extension
	baseURL = {$url}
	simulateStaticDocuments = 0
	tx_realurl_enable = 1
}
page = PAGE
page {
	typeNum = 0 
	shortcutIcon = fileadmin/templates/images/logo.png
	headerData {
        10 = TEXT
        10.value(
			<meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<meta name="description" content="blog typo3 example">
			<meta name="author" content="ahmed">
			<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
        )
    }
	10 = FLUIDTEMPLATE 
	10 { 
		format = html 
		file = fileadmin/templates/layouts/main_layout.html 
		partialRootPath = fileadmin/templates/partials/ 
		layoutRootPath = fileadmin/templates/layouts/ 
		variables { 
			content_main < styles.content.get 
			content_main.select.where = colPos = 0 
			content_column_1 < styles.content.get
			content_column_1.select.where = colPos = 1
			content_column_2 < styles.content.get
			content_column_2.select.where = colPos = 2
		}
		file.stdWrap.cObject = CASE
		file.stdWrap.cObject { 
			key.data = levelfield:-1, backend_layout_next_level, slide 
			key.override.field = backend_layout 
			 
			default = TEXT 
			default.value = fileadmin/templates/main1_template.html
			1 = TEXT
			1.value = fileadmin/templates/main1_template.html
			2 = TEXT
			2.value = fileadmin/templates/main2_template.html
		} 
	}
	includeCSS { 
		bootstrapCss = fileadmin/templates/css/bootstrap.min.css 
		style = fileadmin/templates/css/style.css 
		fontAwesome = https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css
		Lobster = https://fonts.googleapis.com/css?family=Lobster
	}
	includeJSFooter { 		
		jquery = fileadmin/templates/js/jquery.min.js
		bootstrapJs = fileadmin/templates/js/bootstrap.min.js
		scripts = fileadmin/templates/js/scripts.js
	}
}
#content logo 
lib.content_logo = TEXT
lib.content_logo.value(
	<a href="{$url}" class="no-underline">Blog Typo3</a>
)

#content menu
lib.content_menu = COA
lib.content_menu {
    10 = HMENU
    10 {
        wrap = <div class="collapse navbar-collapse " id="bs-example-navbar-collapse-1">|</div>
        entryLevel = 0
        1 = TMENU
        1 {
            expAll = 1
            noBlur = 1
            wrap = <ul class="nav navbar-nav navbar-right">|</ul>
            target = _top
            NO {
                wrapItemAndSub = <li>|</li>|*|<li>|</li>|*|<li>|</li>
            }
            ACT < .NO
            ACT = 1
            CUR < .NO
            CUR = 1
            CUR {
                allWrap = <li class="active">|</li>
            }
        }
    }
}
#content image, current page title
lib.content_image = TEXT
lib.content_image.data = leveltitle:-1