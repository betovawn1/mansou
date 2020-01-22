<?php
    //ativando menus dinamicos
    function register_my_menus() {
        register_nav_menus (
            array (
                'header-menu' => __('Menu')
            )
        );
    }

    add_action('init', 'register_my_menus');

    //Adiciona Customização de Logo
    add_theme_support( 'custom-logo' );