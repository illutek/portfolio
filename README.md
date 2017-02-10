<!-- @file Instructions on how to sub-theme the Drupal Bootstrap base theme using the CDN Starterkit. -->
<!-- @defgroup sub_theming_cdn -->
<!-- @ingroup sub_theming -->
# CDN Starterkit

The CDN Starterkit is rather simple to set up. You don't have to do anything
until you wish to override the default [Drupal Bootstrap] base theme settings
or provide additional custom CSS.

- [Prerequisite](#prerequisite)
- [Override Styles](#styles)
- [Override Settings](#settings)
- [Override Templates and Theme Functions](#registry)

## Prerequisite
Read the @link subtheme Sub-theming @endlink parent topic.

## Override Styles {#styles}
Open `./THEMENAME/css/style.css` and modify the file to your liking.

## Override Settings {#settings}
Please refer to the @link theme_settings Sub-theme Settings @endlink topic.

## Override Templates and Theme Functions {#registry}
Please refer to the @link registry Theme Registry @endlink topic.

[Drupal Bootstrap]: https://www.drupal.org/project/bootstrap
[Bootstrap Framework]: http://getbootstrap.com
[jsDelivr CDN]: http://www.jsdelivr.com

# Andere benadering van oefening CVO Portfolio
## Bower
Bower is a package manager, /bower_components en bower.json zorgen voor de nodige modules bootstrap,  
fontawesome, jquery en de font 'Open sans', deze laatste niet via google fonts zie opmerking 
eindwerk Arbor https://github.com/illutek/ARBOR.  

## NPM 
NPM is a package manager voor devDependencies, gebruikt dit in dit project voor GULP http://gulpjs.com/  
een task manager hier enkel voor sass te compileren  

Opmerking bij font  
https://github.com/FontFaceKit/open-sans the place to be.  
~~Om dit werkende te krijgen dient de variable $OpenSansPath (open-sans-fontface/sass/_variables.scss) 
aangepast.~~  
Rommelen in bower components niet goed, met gulp font map uit open-sans-fontface toegevoegd aan root/css
(directory node_modules aanmaken met 'npm install', met 'bower update' bower_components binnenhalen, met 
'gulp copyfonts' de fonts map copie naar /css en met 'gulp' de style.css opnieuw opbouwen en 
