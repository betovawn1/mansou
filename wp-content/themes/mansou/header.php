<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <!-- Meta tags Obrigatórias -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" media="all" href="<?php echo get_stylesheet_uri(); ?>" />
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>

        <title><?php bloginfo('name'); ?></title>
    </head>

    <body <?php body_class(); ?>>
        <header class="container">
            <div id="menu-mobile-icon">
                <svg id="i-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" color="#007bff">
                    <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
                </svg>
            </div>
            <div id="menu-mobile">
                <ul>
                    <li>
                        <a href="#">comprar</a>
                    </li>
                    <li>
                        <a href="#">lançamentos</a>
                    </li>
                    <li>
                        <a href="#">blog</a>
                    </li>
                    <li>
                        <a href="#">quero comprar</a>
                    </li>
                    <li>
                        <a href="<?php bloginfo('url'); ?>/quero-vender/">quero vender</a>
                    </li>
                </ul>
            </div>
            <div class="container-header-1">
                <a href="<?php bloginfo('url'); ?>">
                    <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2020/01/loGO_PORTAL-01.png" alt="logo" />
                </a>
                <ul>
                    <li>
                        <a href="#">comprar</a>
                    </li>
                    <li>
                        <a href="#">lançamentos</a>
                    </li>
                </ul>
            </div>

            <div class="container-header-2">
                <ul>
                    <li>
                        <a href="#">blog</a>
                    </li>
                    <li>
                        <a href="#">quero comprar</a>
                    </li>
                    <li>
                        <a href="#">quero vender</a>
                    </li>
                </ul>
            </div>
        </header>

        <div id="menu-mobile-overlay"></div>
        <div id="menu-mobile-close"></div>