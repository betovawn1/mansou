<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mansou' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ecA$fI,k0b4W;,2RNUAuM)<Pnt~saI{#5Rz]xP;c$Ch=Btn71R`J|:>OoUh BjG$' );
define( 'SECURE_AUTH_KEY',  'F{5RyO4{Go.(5}2{z$uC7hX-~/]wZF>0/I}FWE>O=j.-,}H@-=+^tw7c@A1(OHW9' );
define( 'LOGGED_IN_KEY',    'R5LD4P~{/CQj! XBaPPMEVQjS?+9mEPzg3k`4Qge0+c}=>k~Xm.]`q-Oq&zz8Ax/' );
define( 'NONCE_KEY',        '{HpA2/L{Ml|O/qfn1?@hq|!I9vi*3@{96a(f&x,VlypuyD`Ae9,/]23wY]dLpY#K' );
define( 'AUTH_SALT',        'm4gS)g~xU2|9F-z?eq?4Cpsk(2&T/H0qNV-|[1IEG2PuG&??lDTk;| &Zi<pKbLo' );
define( 'SECURE_AUTH_SALT', '7g]N9HMn58cOHWIx}~2&q!r-d!>;Er<93+~&s]c1W/wk._t.!s>bRkwB!c:$+}6W' );
define( 'LOGGED_IN_SALT',   '}Z-32*ZtKnks$2kI=;GJ7)C?~ZMeAP.EkUvkw)S</4H&Ltd)T5Sicy&Y6hn$oo|o' );
define( 'NONCE_SALT',       'p44@CgMGE;Yj4QecL1h0fE+_pN>3lTv, FD#B{fBa>e:q_KBQ+e&dBohR>Bb,2JC' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
